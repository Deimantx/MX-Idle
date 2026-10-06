import { FISHING_RODS, FISHING_SPOTS, FISH_SPECIES } from '../../content/fishing/fishingContent';
import type { ItemId, SaveState } from '../../types/gameTypes';

export function fishingRod(s: SaveState) { return FISHING_RODS.find((rod) => rod.id === s.fishing.rod) ?? FISHING_RODS[0]!; }

export function fishingBiteTime(s: SaveState) {
  const spot = FISHING_SPOTS.find((candidate) => candidate.id === s.fishing.spot) ?? FISHING_SPOTS[0]!, rod = fishingRod(s);
  let multiplier = 1 - rod.biteSpeed;
  if (s.fishing.tackle === 'fishing.tackle.cork_float' && FISH_SPECIES.some((fish) => fish.spotId === spot.id && fish.water === 'Surface')) multiplier *= .95;
  if (s.fishing.tackle === 'fishing.tackle.weighted_sinker' && FISH_SPECIES.some((fish) => fish.spotId === spot.id && fish.water === 'Bottom')) multiplier *= 1.05;
  if (s.fishing.tackle === 'fishing.tackle.fine_hook') multiplier *= 1.03;
  if (s.fishing.tackle === 'fishing.tackle.aether_spinner') multiplier *= .94;
  if (s.fishing.specialization === 'Provisioner') multiplier *= .92;
  return Math.max (spot.baseBiteMs * .4, spot.baseBiteMs * multiplier);
}

export function fishingLandingTime(s: SaveState, fish: (typeof FISH_SPECIES)[number]) {
  const rod = fishingRod(s); let multiplier = 1;
  if (rod.id === 'fishing.tool.alder_rod') multiplier *= .97;
  if (rod.id === 'fishing.tool.frostbark_rod') multiplier *= .94;
  if (s.fishing.tackle === 'fishing.tackle.spinner_lure' && fish.predator) multiplier *= .95;
  if (s.fishing.tackle === 'fishing.tackle.double_hook') multiplier *= 1.1;
  if (s.fishing.tackle === 'fishing.tackle.umbral_sinker') multiplier *= .92;
  if (s.fishing.specialization === 'Trophy Angler' && (fish.rarity === 'Rare' || fish.rarity === 'Very Rare')) multiplier *= .88;
  if (s.fishing.specialization === 'Deepwater Fisher' && fish.water === 'Bottom') multiplier *= .9;
  return Math.max (600, (750 + fish.fight / Math.max (1, rod.power) * 750) * multiplier);
}

export function fishingCatchWeights(s: SaveState) {
  const spot = FISHING_SPOTS.find((candidate) => candidate.id === s.fishing.spot) ?? FISHING_SPOTS[0]!, rod = fishingRod(s);
  const raw = FISH_SPECIES.filter((fish) => fish.spotId === spot.id && s.skills.Fishing.level >= fish.unlockLevel).map((fish) => {
    let weight = fish.weight;
    if (s.fishing.bait && (s.bank[s.fishing.bait as ItemId] ?? 0) > 0 && fish.preferredBait === s.fishing.bait.split('fishing.bait.')[1]) weight *= s.fishing.bait === 'fishing.bait.luminous' ? 2.25 : ['fish_strip', 'shell'].includes(fish.preferredBait) ? 2 : 1.75;
    if (s.fishing.tackle === 'fishing.tackle.cork_float' && fish.water === 'Surface') weight *= 1.45;
    if (s.fishing.tackle === 'fishing.tackle.weighted_sinker' && fish.water === 'Bottom') weight *= 1.6;
    if (s.fishing.tackle === 'fishing.tackle.spinner_lure' && fish.predator) weight *= 1.6;
    if (s.fishing.tackle === 'fishing.tackle.fine_hook' && ['Rare', 'Very Rare'].includes(fish.rarity)) weight *= 1.25;
    if (s.fishing.tackle === 'fishing.tackle.deepwater_rig') { if (fish.water === 'Bottom') weight *= 1.8; if (fish.rarity === 'Very Rare') weight *= 1.1; if (fish.water === 'Surface') weight *= .75; }
    if (s.fishing.tackle === 'fishing.tackle.aether_spinner') { if (fish.predator) weight *= 1.4; if (['Rare', 'Very Rare'].includes(fish.rarity)) weight *= 1.2; }
    if (s.fishing.tackle === 'fishing.tackle.umbral_sinker') { if (fish.water === 'Bottom') weight *= 1.5; if (['Rare', 'Very Rare'].includes(fish.rarity)) weight *= 1.25; }
    if (s.fishing.tackle === 'fishing.tackle.astral_lure' && fish.id === s.fishing.preferredSpecies) weight *= 1.35;
    if (s.fishing.tackle === 'fishing.tackle.astral_lure' && fish.rarity === 'Very Rare') weight *= 1.1;
    if (['Rare', 'Very Rare'].includes(fish.rarity) && rod.id === 'fishing.tool.silverpine_rod') weight *= 1.05;
    if (['Rare', 'Very Rare'].includes(fish.rarity) && rod.id === 'fishing.tool.aetherwood_rod') weight *= 1.08;
    if (rod.id === 'fishing.tool.starwood_rod' && fish.id === s.fishing.preferredSpecies) weight *= 1.15;
    if (s.fishing.bait === 'fishing.bait.luminous' && fish.rarity === 'Very Rare' && (s.bank[s.fishing.bait] ?? 0) > 0) weight *= 1.1;
    if (s.fishing.specialization === 'Provisioner') weight *= fish.rarity === 'Common' || fish.rarity === 'Uncommon' ? 1.1 : fish.rarity === 'Very Rare' ? .9 : 1;
    if (s.fishing.specialization === 'Trophy Angler') weight *= fish.rarity === 'Rare' ? 1.25 : fish.rarity === 'Very Rare' ? 1.4 : 1;
    if (s.fishing.specialization === 'Deepwater Fisher') weight *= fish.water === 'Bottom' ? 1.5 : fish.water === 'Surface' ? .85 : 1;
    return { fish, weight };
  });
  const sum = raw.reduce((total, entry) => total + entry.weight, 0);
  return raw.map(({ fish, weight }) => ({ fish, weight, percent: sum ? weight / sum * 100 : 0 }));
}

export function canStartFishing(s: SaveState) {
  const spot = FISHING_SPOTS.find((candidate) => candidate.id === s.fishing.spot), rod = fishingRod(s), needed = spot && FISHING_RODS.find((candidate) => candidate.name === spot.rod);
  return !!spot && s.skills.Fishing.level >= spot.unlockLevel && !!needed && rod.power >= needed.power;
}
