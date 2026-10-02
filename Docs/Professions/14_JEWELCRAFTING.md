# 14 â€” JEWELCRAFTING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `Mining.md`, `Smithing.md`, `Fishing.md`, `Runecrafting.md`, `Alchemy.md`

**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)
**Purpose:** Define Jewelcrafting as the final baseline profession and the account's gem/jewelry finishing profession: raw gem cutting, polishing, Prismatic Dust, modular combat Ring/Necklace Frames, socketing, profession jewelry assembly, utility lenses/focus stones/inlays, profession Tool/gear, Mastery, Specializations, Atelier infrastructure, workers, planner, UI, formulas, and post-100 World Prism progression.

---

# 1. JEWELCRAFTING ROLE IN THE GAME

Jewelcrafting is the profession that turns valuable mineral drops into:

- faceted gems;
- combat Rings;
- combat Necklaces;
- profession jewelry;
- Prismatic Dust;
- precision lenses;
- focus stones;
- gem inlays;
- Runic/Astral jewelry components;
- endgame Prismatic components.

Its strongest suppliers are:

- Mining;
- Smithing;
- Runecrafting.

Its consumers include:

- Combat;
- every profession through profession jewelry;
- Alchemy;
- Runecrafting;
- Foraging;
- Fishing;
- Estate facilities;
- endgame account projects.

Jewelcrafting should not become:

**Gem + Ingot = random Ring**

Its identity is:

**Cutting â†’ Polishing â†’ Setting â†’ Socketing / Specialized Assembly**

---

# 2. JEWELCRAFTING CLOSES THE 14-PROFESSION LOOP

Jewelcrafting is the final baseline profession.

It directly consumes outputs from systems already designed:

**Mining Gems**

â†“

**Smithing Metal**

â†“

**Runecrafting Filaments / Matrices**

â†“

**Jewelcrafting Frames / Profession Jewelry**

â†“

**Combat and every Profession**

This gives the overall profession ecosystem a clear finishing layer.

---

# 3. CORE FANTASY

The player begins with rough Opal and crude Jeweler's Tools.

Over time they learn to:

- cut harder gems;
- polish them without wasting material;
- recover Prismatic Dust;
- build better metal settings;
- create modular combat jewelry;
- craft profession-specific jewelry;
- create precision lenses and focus stones;
- work with Runic and Astral components;
- automate ordinary cutting through workers;
- personally craft endgame World Prisms.

Long-term fantasy:

**Gem Cutter â†’ Goldsmith â†’ Prismwright â†’ Master Jeweler**

---

# 4. CORE PRODUCTION MODES

Jewelcrafting has five production categories:

## Gem Cutting

Raw Gem â†’ Faceted Gem.

## Polishing

Completes the final Faceted Gem.

## Dust / Regrinding

Sacrifice Gems â†’ Prismatic Dust.

## Jewelry Assembly

Create:

- Ring Frames;
- Necklace Frames;
- fixed profession jewelry.

## Precision Components

Create:

- lenses;
- focus stones;
- inlays;
- Astral Prism components.

---

# 5. COMPLETE GEM LADDER

Mining already defines the gemstone ladder.

Jewelcrafting uses it directly.

| Tier | JC Lvl | Raw Gem | Affinity | Base Socket Effect | Cut Work | Polish Time | Crush Dust |
|---|---|---|---|---|---|---|---|
| T1 | 1 | Opal | Vitality | Max Health +3.0% | 20 | 1.6 | 2 |
| T2 | 11 | Sapphire | Efficiency | Combat Resource Cost -2.0% | 30 | 1.8 | 3 |
| T3 | 21 | Garnet | Precision | Critical Chance +1.0 pp | 42 | 2.0 | 4 |
| T4 | 31 | Emerald | Guard | Defense +3.0% | 56 | 2.2 | 5 |
| T5 | 41 | Ruby | Power | Damage Done +2.0% | 72 | 2.45 | 6 |
| T6 | 51 | Topaz | Accuracy | Accuracy +3.5% | 90 | 2.7 | 8 |
| T7 | 61 | Amethyst | Tempo | Cooldown Recovery +2.5% | 110 | 2.95 | 10 |
| T8 | 71 | Aquamarine | Recovery | Healing Received +4.0% | 132 | 3.2 | 12 |
| T9 | 81 | Diamond | Impact | Critical Damage +6.0% | 156 | 3.5 | 15 |
| T10 | 91 | Astral Prism | Prismatic | Damage +1.0%; Defense +1.0%; Accuracy +1.0% | 184 | 3.8 | 20 |

The **Base Socket Effects** above are combat-balance anchors.

Final Combat balancing can adjust exact percentages while preserving each gem's identity.

---

# 6. GEM AFFINITY PHILOSOPHY

Every gem species has a stable gameplay identity.

It does not roll a random stat.

Examples:

- Ruby always represents Power;
- Garnet always represents Precision/Crit;
- Emerald always represents Guard;
- Topaz always represents Accuracy.

This means the player can identify a gem visually and immediately understand why they might want it.

---

# 7. WHY GEM AFFINITY DOES NOT SCALE ONLY BY GEM TIER

If Ruby were permanently a T5-only strength item:

a Power-focused player would replace it simply because T9 Diamond exists.

Instead:

**the Jewelry Frame amplifies the inserted Gem.**

Therefore an old Ruby remains useful in an Astralite Ring Frame.

This creates powerful old-tier relevance.

---

# 8. OLD GEM RELEVANCE

A T10 player may still deliberately farm:

- Garnet for Crit;
- Ruby for Damage;
- Emerald for Defense;
- Sapphire for resource efficiency.

Higher-tier Frames keep those affinities competitive.

This is one of Jewelcrafting's core economic strengths.

---

# 9. RAW GEM â†’ FACETED GEM

Normal recipe:

**1 Raw Gem â†’ 1 Faceted Gem**

Example:

**Ruby â†’ Faceted Ruby**

Faceted Gems are:

- socketable;
- profession-jewelry inputs;
- utility-component inputs.

No random quality.

---

# 10. GEM CUTTING LOOP

1. Select Gem.
2. Select Cutting Method.
3. Select Batch.
4. Reserve Raw Gem.
5. Cutting Work begins.
6. Jeweler's Tool removes Cut Work.
7. Polishing phase begins.
8. Material Preservation resolves.
9. Faceted Gem is created.
10. Dust Recovery roll resolves.
11. XP / Recipe Mastery awarded.
12. Repeat.

---

# 11. CUT WORK

Each Gem has:

**Cut Work**

Jeweler's Tool provides:

**Jewelcrafting Power**

Every automatic action:

**Remaining Cut Work -= Final Jewelcrafting Power**

When Cut Work reaches 0:

begin Polishing.

---

# 12. GEM HARDNESS

Higher-tier Gems are harder to cut.

This is represented by Cut Work.

No separate:

- Hardness item;
- tool durability;
- failure chance.

The Gem table already contains the baseline Cut Work progression.

---

# 13. POLISHING PHASE

After cutting:

the Gem has a short automatic Polishing phase.

Base Polishing Time is listed per Gem.

Polishing can be modified by:

- Tool;
- gear;
- jewelry;
- Mastery;
- Specialization;
- Atelier.

---

# 14. NO CUTTING FAILURE

Normal Gem cutting never:

- shatters the Gem;
- destroys it;
- creates a flawed Gem.

Difficulty is represented through:

- Work;
- time;
- preservation;
- Dust recovery.

This follows the game's idle-first philosophy.

---

# 15. CUTTING METHODS

| Method | Unlock | Cut Work | XP/Mastery | Gem Preservation | Dust Recovery | Identity |
|---|---|---|---|---|---|---|
| Standard Cut | 1 | 1.00x | 1.00x | 0 pp | 0 pp | Balanced baseline |
| Rapid Cut | 15 | 0.75x | 0.85x | 0 pp | 0 pp | Fast throughput; lower XP/Mastery |
| Conservative Cut | 35 | 1.10x | 1.10x | +15 pp | 0 pp | Protect scarce raw gems |
| Master Faceting | 55 | 1.20x | 1.20x | +5 pp | +20 pp | Mastery + Prismatic Dust recovery |

All methods produce the same final Faceted Gem.

No method creates a hidden stronger version.

---

# 16. STANDARD CUT

Baseline.

No modifier.

Good general choice.

---

# 17. RAPID CUT

Unlock:

15.

Effects:

- Cut Work -25%;
- XP/Mastery -15%.

Best for:

- old-tier Gem processing;
- urgent production;
- worker throughput.

---

# 18. CONSERVATIVE CUT

Unlock:

35.

Effects:

- Cut Work +10%;
- XP/Mastery +10%;
- Raw Gem Preservation +15 percentage points.

Best for:

- Diamond;
- Astral Prism;
- scarce Gem stock.

---

# 19. MASTER FACETING

Unlock:

55.

Effects:

- Cut Work +20%;
- XP/Mastery +20%;
- Raw Gem Preservation +5 pp;
- Prismatic Dust Recovery +20 pp.

Best for:

- Mastery;
- Dust economy;
- expensive batches.

---

# 20. RAW GEM PRESERVATION

When Preservation succeeds:

- Faceted Gem is still produced;
- Raw Gem is not consumed.

Hard cap:

**50%**

This matches the broader profession Preservation model.

---

# 21. PRISMATIC DUST

Prismatic Dust is Jewelcrafting's universal precision reagent.

Uses:

- Ring Frames;
- Necklace Frames;
- profession jewelry;
- utility components;
- Alchemy Catalyst;
- Runic/Astral recipes;
- endgame Prismatic work.

It should remain useful from early game to endgame.

---

# 22. DUST SOURCES

Main sources:

1. deliberate Gem Crushing;
2. Dust Recovery from Gem Cutting;
3. selected rare Mining/Jewelcrafting rewards.

The player should always have a deterministic way to acquire Dust:

**Gem Crushing**

---

# 23. GEM CRUSHING

| Gem | Raw Gem Crush â†’ Dust | Faceted Gem Regrind â†’ Dust | Cutting Dust-Recovery Context |
|---|---|---|---|
| Opal | 2 | 1 | 5% target max through gear/mastery |
| Sapphire | 3 | 2 | 10% target max through gear/mastery |
| Garnet | 4 | 3 | 15% target max through gear/mastery |
| Emerald | 5 | 3 | 20% target max through gear/mastery |
| Ruby | 6 | 4 | 25% target max through gear/mastery |
| Topaz | 8 | 6 | 30% target max through gear/mastery |
| Amethyst | 10 | 7 | 35% target max through gear/mastery |
| Aquamarine | 12 | 9 | 40% target max through gear/mastery |
| Diamond | 15 | 11 | 45% target max through gear/mastery |
| Astral Prism | 20 | 15 | 50% target max through gear/mastery |

Crushing is deliberate.

There is no random output.

---

# 24. FACETED GEM REGRIND

A Faceted Gem can be destroyed and re-ground into:

approximately:

**75% of its Raw-Gem Dust value**

rounded down.

This provides a cleanup/salvage path.

It does not return the original Gem.

---

# 25. DUST RECOVERY WHILE CUTTING

Gem cutting can recover:

**+1 Prismatic Dust**

through Dust Recovery Chance.

This is a by-product.

Hard cap:

**60%**

Master Faceting, gear and Mastery can specialize into it.

---

# 26. WHY DUST DOES NOT HAVE TIERS

There is one:

**Prismatic Dust**

not:

- Copper Dust;
- Ruby Dust;
- Astral Dust.

One universal precision reagent is enough.

---

# 27. MODULAR COMBAT JEWELRY

Baseline Combat jewelry uses:

- one Ring slot;
- one Necklace slot.

Jewelcrafting creates:

**empty Frames**

and the player sockets Faceted Gems into them.

The frame determines:

**Gem Resonance**

The Gem determines:

**effect identity**

This separates:

- progression power;
- build choice.

---

# 28. COMPLETE FRAME PROGRESSION

| Tier | Frame Metal | Ring Lvl | Necklace Lvl | Resonance | Ring Dust | Necklace Dust | Extra Requirement |
|---|---|---|---|---|---|---|---|
| T1 | Copper | 4 | 8 | 1.00x | 1 | 2 | None |
| T2 | Iron | 14 | 18 | 1.10x | 1 | 2 | None |
| T3 | Cobalt | 24 | 28 | 1.20x | 2 | 3 | None |
| T4 | Argent | 34 | 38 | 1.30x | 2 | 4 | None |
| T5 | Emberite | 44 | 48 | 1.40x | 3 | 5 | Accent Socket begins |
| T6 | Frostsilver | 54 | 58 | 1.50x | 3 | 6 | Accent Socket |
| T7 | Stormiron | 64 | 68 | 1.60x | 4 | 7 | +1 Runic Filament |
| T8 | Aetherite | 74 | 78 | 1.70x | 5 | 8 | +1 Runic Filament |
| T9 | Umbral | 84 | 88 | 1.80x | 6 | 10 | +1 Aether Filament |
| T10 | Astralite | 95 | 98 | 1.90x | 8 | 12 | +1 Astral Filament |

---

# 29. COMPLETE FRAME RECIPES

| Lvl | Tier | Frame | Inputs | Sockets | Resonance |
|---|---|---|---|---|---|
| 4 | T1 | Copper Ring Frame | 1 Copper Ingot + 1 Prismatic Dust | 1 Core Socket | 1.00x |
| 8 | T1 | Copper Necklace Frame | 2 Copper Ingots + 2 Prismatic Dust | 1 Core Socket | 1.00x |
| 14 | T2 | Iron Ring Frame | 1 Iron Ingot + 1 Prismatic Dust | 1 Core Socket | 1.10x |
| 18 | T2 | Iron Necklace Frame | 2 Iron Ingots + 2 Prismatic Dust | 1 Core Socket | 1.10x |
| 24 | T3 | Cobalt Ring Frame | 1 Cobalt Ingot + 2 Prismatic Dust | 1 Core Socket | 1.20x |
| 28 | T3 | Cobalt Necklace Frame | 2 Cobalt Ingots + 3 Prismatic Dust | 1 Core Socket | 1.20x |
| 34 | T4 | Argent Ring Frame | 1 Argent Ingot + 2 Prismatic Dust | 1 Core Socket | 1.30x |
| 38 | T4 | Argent Necklace Frame | 2 Argent Ingots + 4 Prismatic Dust | 1 Core Socket | 1.30x |
| 44 | T5 | Emberite Ring Frame | 1 Emberite Ingot + 3 Prismatic Dust | 1 Core Socket | 1.40x |
| 48 | T5 | Emberite Necklace Frame | 2 Emberite Ingots + 5 Prismatic Dust | 1 Core + Necklace Accent at T5+ | 1.40x |
| 54 | T6 | Frostsilver Ring Frame | 1 Frostsilver Ingot + 3 Prismatic Dust | 1 Core Socket | 1.50x |
| 58 | T6 | Frostsilver Necklace Frame | 2 Frostsilver Ingots + 6 Prismatic Dust | 1 Core + Necklace Accent at T5+ | 1.50x |
| 64 | T7 | Stormiron Ring Frame | 1 Stormiron Ingot + 4 Prismatic Dust + 1 Runic Filament | 1 Core Socket | 1.60x |
| 68 | T7 | Stormiron Necklace Frame | 2 Stormiron Ingots + 7 Prismatic Dust + 1 Runic Filament | 1 Core + Necklace Accent at T5+ | 1.60x |
| 74 | T8 | Aetherite Ring Frame | 1 Aetherite Ingot + 5 Prismatic Dust + 1 Runic Filament | 1 Core Socket | 1.70x |
| 78 | T8 | Aetherite Necklace Frame | 2 Aetherite Ingots + 8 Prismatic Dust + 1 Runic Filament | 1 Core + Necklace Accent at T5+ | 1.70x |
| 84 | T9 | Umbral Ring Frame | 1 Umbral Ingot + 6 Prismatic Dust + 1 Aether Filament | 1 Core Socket | 1.80x |
| 88 | T9 | Umbral Necklace Frame | 2 Umbral Ingots + 10 Prismatic Dust + 1 Aether Filament | 1 Core + Necklace Accent at T5+ | 1.80x |
| 95 | T10 | Astralite Ring Frame | 1 Astralite Ingot + 8 Prismatic Dust + 1 Astral Filament | 1 Core Socket | 1.90x |
| 98 | T10 | Astralite Necklace Frame | 2 Astralite Ingots + 12 Prismatic Dust + 1 Astral Filament | 1 Core + Necklace Accent at T5+ | 1.90x |

The Frame itself is deterministic.

No random:

- affixes;
- rarity;
- socket count.

---

# 30. RING IDENTITY

Ring Frame has:

**1 Core Gem Socket**

from T1 onward.

Ring is the simplest:

**one Gem â†’ one focused effect**

combat jewelry item.

---

# 31. NECKLACE IDENTITY

T1â€“T4 Necklace:

**1 Core Socket**

T5+ Necklace:

**1 Core Socket + 1 Accent Socket**

This gives Necklace a broader late-game identity.

---

# 32. SOCKET RULES

| Socket | Available | Socket Efficiency | Gem Rule | Effect |
|---|---|---|---|---|
| Ring Core | T1+ | 1.0 | Any Faceted Gem | Full frame Resonance Ã— gem base effect |
| Necklace Core | T1+ | 1.0 | Any Faceted Gem | Full frame Resonance Ã— gem base effect |
| Necklace Accent | T5+ | 0.5 | Any different Faceted Gem | Half-strength secondary effect |

---

# 33. ACCENT SOCKET

Unlock begins with:

**T5 Emberite Necklace Frame**

Accent effect:

**50% of normal Gem effect**

The Core and Accent Gem must be:

**different Gem species**

This prevents simply double-stacking one Gem inside the same Necklace.

---

# 34. CAN RING AND NECKLACE USE SAME GEM?

**Yes.**

A Power-focused build may use:

- Ruby in Ring;
- Ruby in Necklace Core.

That is a legitimate specialization choice.

The no-duplicate rule only applies between:

**Necklace Core + Accent**

---

# 35. SOCKETING DOES NOT DESTROY THE GEM

A Faceted Gem moved into a socket becomes attached to that item.

Removing it:

returns the Faceted Gem.

No destruction.

No RNG.

---

# 36. SOCKETING COST

Baseline recommendation:

**No recurring currency cost**

to socket or remove normal Gems.

Reason:

Combat build experimentation should not be punished.

Prismatic Dust is already heavily used in:

- Frames;
- profession jewelry;
- utility components;
- endgame recipes.

---

# 37. WHERE SOCKETING HAPPENS

Early:

at the Jewelcrafting screen / Atelier.

Later:

saved equipment presets can remember socket configuration.

A preset swap automatically moves Gems if:

- required Gem exists;
- not simultaneously used by another equipped item.

---

# 38. FRAME RESONANCE

Frame Resonance multiplier:

T1:

1.00x

T10:

1.90x

The inserted Gem's effect is multiplied by Resonance.

Example:

Ruby base:

**Damage Done +2%**

Astralite Frame:

**2% Ã—1.90 = 3.8%**

before any slot-specific rules.

---

# 39. SOCKET EFFECT FORMULA

Ring/Core:

**Gem Base Effect Ã— Frame Resonance Ã—1.00**

Necklace Accent:

**Gem Base Effect Ã— Frame Resonance Ã—0.50**

If Gem has multiple effect lines:

scale each supported numeric line.

---

# 40. T10 EFFECT EXAMPLES

| Gem | Affinity | Base Effect Anchor | T10 Core Scaling | T10 Necklace Accent |
|---|---|---|---|---|
| Opal | Vitality | Max Health +3.0% | Ã—1.90 in Astralite Core Socket | Accent = Ã—0.95 base effect |
| Sapphire | Efficiency | Combat Resource Cost -2.0% | Ã—1.90 in Astralite Core Socket | Accent = Ã—0.95 base effect |
| Garnet | Precision | Critical Chance +1.0 pp | Ã—1.90 in Astralite Core Socket | Accent = Ã—0.95 base effect |
| Emerald | Guard | Defense +3.0% | Ã—1.90 in Astralite Core Socket | Accent = Ã—0.95 base effect |
| Ruby | Power | Damage Done +2.0% | Ã—1.90 in Astralite Core Socket | Accent = Ã—0.95 base effect |
| Topaz | Accuracy | Accuracy +3.5% | Ã—1.90 in Astralite Core Socket | Accent = Ã—0.95 base effect |
| Amethyst | Tempo | Cooldown Recovery +2.5% | Ã—1.90 in Astralite Core Socket | Accent = Ã—0.95 base effect |
| Aquamarine | Recovery | Healing Received +4.0% | Ã—1.90 in Astralite Core Socket | Accent = Ã—0.95 base effect |
| Diamond | Impact | Critical Damage +6.0% | Ã—1.90 in Astralite Core Socket | Accent = Ã—0.95 base effect |
| Astral Prism | Prismatic | Damage +1.0%; Defense +1.0%; Accuracy +1.0% | Ã—1.90 in Astralite Core Socket | Accent = Ã—0.95 base effect |

These remain tuning anchors until final Combat balance.

---

# 41. EMPTY FRAME

An empty Ring/Necklace can exist in Bank.

It provides:

**no Gem effect**

unless the eventual global equipment system gives Frames a tiny base defense/stat.

Recommended:

keep Frames mostly about sockets.

---

# 42. WHY FRAMES USE METAL TIERS

This connects Jewelcrafting to:

- Mining;
- Smithing.

The player needs:

Ore â†’ Ingot â†’ Jewelry Frame.

The Gem does not replace metal progression.

---

# 43. WHY HIGH-TIER FRAMES USE RUNIC MATERIALS

T7+ Jewelry starts using:

- Runic Filament;
- Aether Filament;
- Astral Filament.

This makes high-tier jewelry feel like:

**precision magical equipment**

rather than merely thicker metal rings.

---

# 44. PROFESSION JEWELRY

Every profession already has:

- Rings;
- Pendants;
- Bands;
- Charms;
- Chains;
- Seals;
- Emblems.

Jewelcrafting is the **assembly owner** for these items.

The individual profession document remains the source of truth for:

- effect;
- intended use;
- target profession level.

Jewelcrafting owns:

- material template;
- crafting process;
- Recipe Mastery;
- worker eligibility.

---

# 45. WHY EFFECT VALUES ARE NOT DUPLICATED HERE

If:

`Angler's Ring`

effect is defined in Fishing,

do not also maintain a second independent numeric definition in Jewelcrafting.

That creates source-of-truth drift.

Implementation rule:

- Profession MD owns effect;
- Jewelcrafting owns recipe.

---

# 46. PROFESSION JEWELRY BRACKETS

| Target Profession Lvl | Jewelry Tier | Frame Metal | Required Gem | Extra Input | Recipe Rule |
|---|---|---|---|---|---|
| 15 | T2 | Iron | Faceted Sapphire | Low-tier thematic material | Requires equal Jewelcrafting bracket + target profession level |
| 25 | T3 | Cobalt | Faceted Garnet | Mid-early thematic material | Requires equal Jewelcrafting bracket + target profession level |
| 35 | T4 | Argent | Faceted Emerald | Profession-specific component | Requires equal Jewelcrafting bracket + target profession level |
| 45 | T5 | Emberite | Faceted Ruby | Profession-specific component | Requires equal Jewelcrafting bracket + target profession level |
| 55 | T6 | Frostsilver | Faceted Topaz | Advanced thematic component | Requires equal Jewelcrafting bracket + target profession level |
| 65 | T7 | Stormiron | Faceted Amethyst | Advanced thematic + Runic support | Requires equal Jewelcrafting bracket + target profession level |
| 75 | T8 | Aetherite | Faceted Aquamarine | High-tier thematic component | Requires equal Jewelcrafting bracket + target profession level |
| 85 | T9 | Umbral | Faceted Diamond | Rare/high-tier thematic component | Requires equal Jewelcrafting bracket + target profession level |
| 95 | T10 | Astralite | Faceted Astral Prism | Astral thematic component | Requires equal Jewelcrafting bracket + target profession level |

This creates one consistent cross-profession crafting language.

---

# 47. PROFESSION JEWELRY RECIPE TEMPLATE

A fixed profession jewelry recipe generally consumes:

1. appropriate-tier Frame;
2. one Faceted Gem from the bracket;
3. Prismatic Dust;
4. one thematic input from the target profession.

The Faceted Gem is consumed permanently because the finished profession item has a fixed effect.

---

# 48. PROFESSION LEVEL REQUIREMENT

To craft a profession jewelry item:

the account must satisfy:

**Jewelcrafting recipe level**

and:

**target Profession level**

Example:

a Fishing Level 65 jewelry recipe requires:

- Fishing 65;
- Jewelcrafting 65.

This prevents Jewelcrafting from bypassing progression in another profession.

---

# 49. PROFESSION THEMATIC INPUTS

| Profession | Thematic Extra Input | Jewelry Effect Domain |
|---|---|---|
| Mining | Ore/Stone/Flux/Deep-Core material | Yield, Prospecting, Deep/Core efficiency |
| Smithing | Ingot/Alloy/Forge component | Smelting, Forging, Preservation, Heat |
| Fishing | Aquatic Find / fishery component | Bite, landing, targeting, finds |
| Cooking | Prepared ingredient / provision component | Prep, cook, servings, preservation |
| Woodcutting | Resin / Bark / Heartwood | Growth, Logs, Resin, Heartwood |
| Fletching | Shaft/Resin/Bow component | Shaping, Ammo, bows/crossbows |
| Foraging | Herb/Fungi/Botanical/Wild reagent | Search, yield, Discovery, rare finds |
| Tailoring | Thread/Cloth/Filament | Spinning, weaving, pattern assembly |
| Runecrafting | Rune/Filament/Matrix | Attunement, Pattern, Essence, output |
| Hunting | Bone/Fang/Sinew/Hide | Tracking, Meat, Hide, special components |
| Leatherworking | Leather/Sinew Cord/Binding | Tanning, armor, utility |
| Farming | Crop/Botanical/Compost-related material | Growth, yield, rotation, domestication |
| Alchemy | Extract/Concentrate/Catalyst | Extraction, brewing, preservation |
| Jewelcrafting | Prismatic Dust / Cut Gem | Cutting, Setting, Dust, high-tier craft |

Exact item should be chosen from the target profession's existing resource economy.

Do not invent a new token just to craft jewelry.

---

# 50. SLOT NAMING RULE

The global profession equipment shell uses:

- Ring;
- Necklace.

Legacy/descriptive item names map through:

| Name Pattern | Equipment Slot | Rule |
|---|---|---|
| Ring / Band / Loop / Seal / Signet | Ring | Fixed profession Ring slot item |
| Pendant / Charm / Chain / Emblem / Sigil / Lens | Necklace | Fixed profession Necklace slot item |

This keeps flavorful names without creating 8 accessory slots.

---

# 51. EXAMPLE â€” ANGLER'S RING

Fishing source document defines:

**Angler's Ring**

Jewelcrafting recipe structure:

- Iron Ring Frame;
- Faceted Sapphire;
- Prismatic Dust;
- Fishing thematic component.

Requires:

- Fishing 15;
- Jewelcrafting 15.

The effect remains owned by Fishing.

---

# 52. EXAMPLE â€” TANNER'S RING

Leatherworking source document defines the effect.

Jewelcrafting owns assembly:

- Iron Ring Frame;
- Faceted Sapphire;
- Prismatic Dust;
- Leatherworking thematic component.

Same universal bracket logic.

---

# 53. EXAMPLE â€” ASTRAL PROFESSION EMBLEM

Level-95 profession Emblem template:

- Astralite Necklace Frame;
- Faceted Astral Prism;
- Prismatic Dust;
- T10 profession thematic component;
- optional Astral Filament if not already embedded in Frame.

Requires:

- Jewelcrafting 95;
- target profession 95.

---

# 54. NO RANDOM PROFESSION JEWELRY STATS

Profession jewelry is deterministic.

If recipe says:

**Rarefinder Chain**

it always has the effect defined by Foraging.

No rolled:

- effect magnitude;
- rarity;
- sockets.

---

# 55. PROFESSION JEWELRY AS GEM SINK

Unlike modular combat Frames:

profession jewelry consumes its Gem permanently.

This creates continuing demand for:

- Sapphire;
- Garnet;
- Emerald;
- Ruby;
- Topaz;
- Amethyst;
- Aquamarine;
- Diamond;
- Astral Prism.

With 14 professions and worker hand-me-downs:

Gem demand remains significant.

---

# 56. WORKER PROFESSION JEWELRY

Old player profession jewelry can be handed to workers if:

- worker uses matching profession;
- worker equipment rules allow the slot.

This gives older jewelry continued value.

---

# 57. UTILITY JEWELCRAFTING

Jewelcrafting also creates precision components.

| Lvl | Utility Component | Inputs | Main Consumers |
|---|---|---|---|
| 12 | Polished Opal Lens | 1 Faceted Opal + 1 Copper Ingot | Foraging/Fishing early inspection tools |
| 22 | Sapphire Focus Stone | 1 Faceted Sapphire + 2 Prismatic Dust | Runecrafting / Magic utility |
| 32 | Garnet Precision Lens | 1 Faceted Garnet + 1 Cobalt Ingot | Fletching / profession tools |
| 42 | Emerald Ward Inlay | 1 Faceted Emerald + 1 Argent Ingot | Protective profession equipment |
| 52 | Ruby Heat Lens | 1 Faceted Ruby + 1 Emberite Ingot | Smithing / Alchemy heat equipment |
| 62 | Topaz Survey Lens | 1 Faceted Topaz + 3 Prismatic Dust | Foraging / Mining analytics tools |
| 72 | Amethyst Runic Focus | 1 Faceted Amethyst + 1 Runic Matrix component | Runecrafting / Tailoring advanced gear |
| 82 | Aquamarine Aether Lens | 1 Faceted Aquamarine + 1 Aetherite Ingot | Alchemy / Fishing / support equipment |
| 92 | Diamond Precision Core | 1 Faceted Diamond + 5 Prismatic Dust | T9 precision tools / facilities |
| 99 | Astral Prism Core | 1 Faceted Astral Prism + 1 Astral Rune Matrix + 8 Prismatic Dust | T10/endgame equipment / facilities |

This explains why many advanced profession Tools/facilities call for Jewelcrafting.

---

# 58. POLISHED LENSES

Lenses support:

- Foraging inspection;
- Fishing precision;
- Mining prospecting;
- Alchemy apparatus.

Do not create one Lens item for every profession.

Use a limited progression of meaningful components.

---

# 59. FOCUS STONES

Focus Stones support:

- Runecrafting;
- Magic equipment;
- high-tier facilities.

Runecrafting supplies magical structure.

Jewelcrafting supplies precision Gem work.

---

# 60. PRISMATIC INLAYS

Gem inlays can be used selectively in:

- high-tier Tools;
- profession gear;
- Estate upgrades.

Avoid requiring inlays for every ordinary recipe.

They should remain:

**precision/high-value components**

---

# 61. JEWELER'S TOOLS

Primary profession Tool:

**Jeweler's Tools / Lapidary Kit**

| Tier | Tool | Lvl | Jewelcrafting Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Jeweler's Tools | 1 | 5 | 2.15s | Starter | None |
| T1 | Copper Lapidary Kit | 5 | 7 | 2.09s | Smithing + Fletching | Cut Work -2% |
| T2 | Iron Jeweler's Tools | 15 | 10 | 2.03s | Smithing + Fletching | Raw Gem Preservation +2 pp |
| T3 | Cobalt Faceting Kit | 25 | 14 | 1.97s | Smithing + Jewelcrafting | Dust Recovery +3 pp |
| T4 | Argent Setter's Kit | 35 | 19 | 1.91s | Smithing + Leatherworking | Frame Assembly Time -4% |
| T5 | Emberite Lapidary Kit | 45 | 25 | 1.85s | Smithing + Jewelcrafting | Gem Preservation +4 pp |
| T6 | Frostsilver Precision Kit | 55 | 32 | 1.79s | Smithing + Jewelcrafting | Cut Work -6% |
| T7 | Stormiron Prism Kit | 65 | 40 | 1.73s | Smithing + Runecrafting | Profession Jewelry Work -6% |
| T8 | Aetherite Gemsetter Kit | 75 | 49 | 1.67s | Smithing + Runecrafting | Frame Material Preservation +5 pp |
| T9 | Umbral Master Lapidary Kit | 85 | 59 | 1.61s | Smithing + Runecrafting | T8+ Gem Cut Time -6% |
| T10 | Astralite Grand Jeweler's Kit | 95 | 70 | 1.55s | Multi-profession | Jewelcrafting Power +8%; Dust Recovery +5 pp |

One Tool slot represents:

- gem saw;
- cutters;
- files;
- pliers;
- gauges;
- polish tools.

---

# 62. NO TOOL DURABILITY

Jeweler's Tools are permanent.

No:

- saw blade charges;
- polishing wheel durability;
- plier repair.

Old Tools move to workers.

---

# 63. TOOL SOURCE

Expected Tool recipe ownership:

mostly:

**Smithing**

with support from:

- Fletching Utility Blanks;
- Leatherworking grips;
- Jewelcrafting precision components;
- Runecrafting at high tiers.

---

# 64. JEWELCRAFTING POWER

Used for:

- Gem Cut Work;
- Frame Assembly Work;
- profession jewelry Work;
- precision utility components.

Formula:

**Remaining Work -= Final Jewelcrafting Power**

---

# 65. BASE FRAME ASSEMBLY WORK

Recommended Base Work by Tier:

| Tier | Base Frame Work |
|---|---:|
| T1 | 22 |
| T2 | 30 |
| T3 | 40 |
| T4 | 52 |
| T5 | 66 |
| T6 | 82 |
| T7 | 100 |
| T8 | 120 |
| T9 | 142 |
| T10 | 166 |

Ring:

**Ã—0.80**

Necklace:

**Ã—1.15**

Profession jewelry:

**Ã—1.25**

Precision utility:

**Ã—1.10â€“1.40**

---

# 66. POLISH TIME FORMULA

**Final Polish Time = Base Polish Time Ã— Tool Ã— gear Ã— Mastery Ã— Specialization Ã— Atelier**

Minimum:

**40% of Base**

---

# 67. CUT WORK FORMULA

**Final Cut Work = Gem Base Cut Work Ã— Method Ã— gear Ã— Mastery Ã— Specialization**

Each Tool action:

**Remaining Work -= Final Jewelcrafting Power**

---

# 68. ASSEMBLY WORK FORMULA

**Final Assembly Work = Tier Base Work Ã— Recipe Multiplier Ã— gear Ã— Mastery Ã— Specialization**

Every Tool action:

**Remaining Work -= Final Jewelcrafting Power**

---

# 69. MATERIAL PRESERVATION

Jewelcrafting can preserve normal:

- Raw Gems;
- Ingots;
- Prismatic Dust;
- Filaments;
- profession thematic inputs.

Hard cap:

**50%**

Protected endgame ingredients can ignore Preservation.

---

# 70. FACETED GEM IN PROFESSION JEWELRY PRESERVATION

If Gem Preservation succeeds while crafting fixed profession jewelry:

the final item is created and the Faceted Gem is not consumed.

This is allowed.

It represents careful setting/recovery.

Hard cap remains 50%.

---

# 71. FRAME MATERIAL PRESERVATION

Frame recipes can preserve:

- Ingot;
- Prismatic Dust;
- Filament.

Each normal input rolls independently.

---

# 72. BATCHING

Gem Cutting / Crushing:

large batches.

Frame crafting:

medium batches.

Profession jewelry:

small batches.

Suggested efficiency:

| Batch | Time Mult./Craft |
|---:|---:|
| 1 | 1.00x |
| 5 | 0.96x |
| 10 | 0.93x |
| 25 | 0.90x |
| 50 | 0.88x |
| 100 | 0.86x |

Fixed unique/endgame jewelry may ignore large Batch sizes.

---

# 73. RECIPE MASTERY

Every important recipe has:

**Mastery 1â€“100**

Examples:

- Faceted Ruby;
- Faceted Diamond;
- Astralite Ring Frame;
- Angler's Ring;
- Runic Focus Ring;
- Astral Prism Core.

---

# 74. GEM MASTERY

Mastery belongs to:

**Faceted Gem recipe**

not each Cutting Method.

Example:

all:

- Standard Ruby Cut;
- Rapid Ruby Cut;
- Conservative Ruby Cut;
- Master Ruby Cut

increase:

**Faceted Ruby Mastery**

This avoids duplicated grind.

---

# 75. RECIPE MASTERY MILESTONES

| Recipe Mastery | Permanent Effect |
|---|---|
| 10 | Recipe action time / Cut Work -2% |
| 25 | Material Preservation +3 pp |
| 50 | Dust Recovery +4 pp for gem recipes OR Assembly Work -3% for jewelry |
| 75 | Recipe Mastery XP +8% |
| 100 | Action Time -4% additional; Preservation +3 pp |

---

# 76. SKILL-WIDE JEWELCRAFTING MASTERY

Recommended:

| Completion | Reward |
|---:|---|
| 10% | Cut/Assembly Time -2% |
| 25% | Material Preservation +2 pp; second preset |
| 50% | Worker Jewelcrafting efficiency +5%; Dust Recovery +3 pp |
| 75% | Jewelcrafting Power +5%; third preset |
| 100% | All action time -4%; Preservation +3 pp; Master Jeweler marker |

---

# 77. JEWELCRAFTING SPECIALIZATIONS

Unlock:

**Jewelcrafting 35**

| Specialization | Focus | Effects | Best For |
|---|---|---|---|
| Lapidary | Gem cutting / Dust | Cut Work -12%; Gem Preservation +6 pp; Dust Recovery +15 pp; Frame Assembly Time +5% | Raw gem economy / Mastery |
| Goldsmith | Frames / profession jewelry | Frame & special Jewelry Work -12%; metal/dust Preservation +6 pp; setting time -8%; Gem cutting time +5% | Equipment production |
| Prismwright | Runic/Astral / utility | T7+ Work -12%; Filament/Matrix Preservation +6 pp; Utility component time -10%; normal T1â€“T6 Frame time +5% | High-tier / endgame |

All reversible.

---

# 78. LAPIDARY SPECIALIZATION

Focus:

- Gems;
- Preservation;
- Prismatic Dust;
- Mastery.

Best when raw Gem supply is the bottleneck.

---

# 79. GOLDSMITH SPECIALIZATION

Focus:

- Ring Frames;
- Necklace Frames;
- profession jewelry.

Best when outfitting:

- player;
- workers;
- many profession presets.

---

# 80. PRISM WRIGHT SPECIALIZATION

Focus:

- T7+ Runic/Astral jewelry;
- precision components;
- endgame Prism work.

Best for:

- late account;
- high-tier profession equipment;
- Estate/World components.

---

# 81. SPECIALIZATION SWITCHING

Rules:

- free;
- outside active craft;
- unfinished Work loses progress;
- reserved normal materials return;
- presets remember Specialization.

Socketed Gems are unaffected.

---

# 82. JEWELCRAFTING PROFESSION CLOTHING

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Lapidary Visor | Cut Work -4% |
| T3 / L25 | Lapidary Apron | Raw Gem Preservation +3 pp |
| T3 / L25 | Lapidary Trousers | Gem Mastery XP +4% |
| T3 / L25 | Lapidary Gloves | Polish Time -4% |
| T3 / L25 | Lapidary Shoes | Dust Recovery +3 pp |
| Set | Lapidary 5/5 | Gem Cutting Time -4% |
| T5 / L45 | Goldsmith Cap | Frame Assembly Work -6% |
| T5 / L45 | Goldsmith Coat | Metal/Dust Preservation +4 pp |
| T5 / L45 | Goldsmith Leggings | Frame Mastery XP +6% |
| T5 / L45 | Goldsmith Gloves | Profession Jewelry Work -5% |
| T5 / L45 | Goldsmith Shoes | Setting Time -4% |
| Set | Goldsmith 5/5 | Ring/Necklace Frame Material Preservation +4 pp |
| T7 / L65 | Prismwright Hood | Runic/Astral jewelry Work -6% |
| T7 / L65 | Prismwright Robe | Filament/Matrix Preservation +4 pp |
| T7 / L65 | Prismwright Legwraps | High-tier Jewelry Mastery XP +7% |
| T7 / L65 | Prismwright Gloves | Dust Recovery +5 pp |
| T7 / L65 | Prismwright Shoes | T7+ Assembly Time -5% |
| Set | Prismwright 5/5 | T7+ Gem/Frame action time -5% |
| T9 / L85 | Master Jeweler Visor | Jewelcrafting Power +8% |
| T9 / L85 | Master Jeweler Coat | Material Preservation +5 pp |
| T9 / L85 | Master Jeweler Leggings | Mastery XP +8% |
| T9 / L85 | Master Jeweler Gloves | Dust Recovery +6 pp |
| T9 / L85 | Master Jeweler Shoes | All Jewelcrafting Time -5% |
| Set | Master Jeweler 5/5 | Action Time -5%; Preservation +3 pp |

---

# 83. CLOTHING IDENTITIES

## Lapidary

Gem processing.

## Goldsmith

Frame/jewelry assembly.

## Prismwright

Runic/Astral.

## Master Jeweler

Late hybrid.

---

# 84. JEWELCRAFTING'S OWN PROFESSION JEWELRY

| Jewelcrafting Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Cutter's Ring | Cut Work -6% | Gem cutting |
| 25 | Polisher Pendant | Polish Time -6% | Polishing |
| 35 | Dustkeeper Band | Raw Gem Preservation +5 pp | Gem economy |
| 45 | Setter's Charm | Frame/Profession Jewelry Work -7% | Assembly |
| 55 | Facet Loop | Dust Recovery +8 pp | Prismatic Dust |
| 65 | Goldsmith Seal | Jewelry Material Preservation +6 pp | Frames/special jewelry |
| 75 | Prismwright Chain | Runic/Astral Jewelry Work -7% | High-tier |
| 85 | Diamond Lens Charm | T8+ Cut/Polish Time -6% | Late gems |
| 95 | Astral Jeweler Emblem | Power +8%; Dust Recovery +4 pp | Endgame general |

These recipes follow the same profession-jewelry bracket system as every other profession.

---

# 85. SAVED LOADOUTS

Recommended:

## Gem Factory

- Lapidary;
- Rapid or Standard Cut;
- throughput gear.

## Rare Gem Saver

- Conservative Cut;
- Preservation gear.

## Dust Factory

- Master Faceting;
- Dust Recovery gear.

## Profession Jewelry

- Goldsmith;
- Assembly gear.

## Astral / Endgame

- Prismwright;
- high-tier Preservation.

---

# 86. JEWELCRAFTING ATELIER

Property infrastructure:

**Jewelcrafting Atelier Iâ€“V**

| Facility | Property Stage | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|
| Jewelcrafting Atelier I | House | 20 | 5 | 2 | 2 presets; socket management; exact gem/frame analytics |
| Jewelcrafting Atelier II | Lodge | 40 | 10 | 4 | Profession Jewelry templates; first worker; batch cutting |
| Jewelcrafting Atelier III | Manor | 60 | 25 | 6 | Accent Socket management; 3 workers; utility component chains |
| Jewelcrafting Atelier IV | Estate | 80 | 50 | 10 | Runic/Umbral jewelry teams; reserve-driven gem processing |
| Jewelcrafting Atelier V | Holdings / late Estate | 100 | 100 | Expanded | Astral/World Prism crafting; 10 workers |

Early game uses a simple:

**Lapidary Bench**

before developed property infrastructure.

---

# 87. ATELIER PURPOSE

Atelier unlocks:

- socket management;
- batches;
- presets;
- profession-jewelry templates;
- workers;
- utility chains;
- Runic/Astral processing;
- World Prism.

It is not a skill.

No Atelier XP.

---

# 88. SOCKET PRESETS

Atelier I:

manual socketing.

Atelier II:

2 saved jewelry socket presets.

Atelier III:

4 presets + Accent management.

Estate:

presets integrate with:

- Combat loadouts;
- profession loadouts.

---

# 89. PRESET GEM CONFLICT

If two presets need the same physical Faceted Gem at once:

only one equipped item can use it.

UI should display:

**Gem currently socketed in another equipped item**

and offer:

- move Gem;
- use another copy;
- cancel swap.

No silent duplication.

---

# 90. WORKERS

Jewelcrafting workers can perform:

- proven Gem Cutting;
- Gem Crushing;
- Frames;
- utility components;
- fixed profession jewelry when explicitly assigned.

They consume real materials.

---

# 91. PROVEN RECIPE

Recipe becomes worker-eligible at:

**Recipe Mastery 10**

Player learns first.

---

# 92. WORKER PROFICIENCY

Base Worker Jewelcrafting Efficiency:

**50% + Proficiency Ã—0.50%**

Examples:

- 1 â†’ 50.5%;
- 50 â†’ 75%;
- 100 â†’ 100%.

Workers gain Proficiency.

No player XP/Mastery.

---

# 93. FRONTIER PENALTY

Highest unlocked Jewelcrafting Tier:

| Recipe Mastery | Worker Multiplier |
|---:|---:|
| 10â€“24 | 75% |
| 25â€“49 | 85% |
| 50â€“74 | 92.5% |
| 75â€“99 | 97.5% |
| 100 | 100% |

Older recipes have no frontier penalty.

---

# 94. WORKER RARE GEM SAFETY

Default worker behavior:

workers may **not** consume:

- Diamond;
- Astral Prism;
- World Prism materials

unless recipe assignment explicitly allows them.

This prevents accidental destruction of rare Gem stock.

---

# 95. WORKER DUST POLICY

Useful worker rule:

> Maintain Prismatic Dust â‰¥5,000.

If below:

- crush configured low-tier Gem surplus.

If target met:

- return to normal Gem cutting.

Player chooses which Gems are allowed to be crushed.

---

# 96. NEVER AUTO-CRUSH ALL GEMS

Default:

**No Gem is auto-crush eligible.**

Player must whitelist:

- Opal;
- Sapphire;
- etc.

This is important because old Gems stay build-relevant.

---

# 97. WORKER PROFESSION JEWELRY SAFETY

Workers craft fixed profession jewelry only when:

- explicit item target set;
- required target-profession unlock exists;
- gem reserve is above threshold.

No generic:

**craft best jewelry**

automation.

---

# 98. OLD TOOL HAND-ME-DOWNS

Old:

- Jeweler's Tools;
- profession clothing;
- Jewelcrafting jewelry

can move to workers.

---

# 99. ACTIVITY PLANNER

Starter:

- cut indefinitely;
- stop at Faceted Gem quantity;
- stop at level;
- choose Cutting Method.

House:

- Mastery target;
- 2-step queue.

Lodge:

- Dust reserve;
- 4-step queue;
- Frame targets.

Manor:

- 6-step chains;
- profession jewelry targets;
- utility component targets.

Estate:

- 10-step queue;
- worker Gem policies;
- cross-profession jewelry reserves.

Holdings:

- department jewelry/tool supply;
- World Prism policy.

---

# 100. GEM CUTTING PLAN

Example:

> Maintain Faceted Ruby â‰¥100.

If below:

- Standard Cut.

If Raw Ruby <30:

- switch to Conservative Cut.

Once target met:

- switch to Diamond Mastery.

---

# 101. DUST PLAN

Example:

> Maintain Prismatic Dust â‰¥2,000.

Allowed crush:

1. Opal above 500;
2. Sapphire above 300;
3. Garnet above 250.

Never crush:

- Diamond;
- Astral Prism.

This creates controllable surplus conversion.

---

# 102. PROFESSION JEWELRY PLAN

Example:

> Craft Astral Angler Sigil.

Requirements checked:

- Fishing 95;
- Jewelcrafting 95;
- Astralite Necklace Frame;
- Faceted Astral Prism;
- Fishing thematic T10 material;
- Dust reserve.

Planner should show every missing dependency.

---

# 103. FRAME SUPPLY PLAN

Example:

> Maintain:
> - 10 Aetherite Ring Frames;
> - 10 Aetherite Necklace Frames.

Useful for:

- profession jewelry;
- loadout experimentation;
- worker equipment.

---

# 104. RESOURCE RESERVES

Respect reserves on:

- Raw Gems;
- Faceted Gems;
- Ingots;
- Prismatic Dust;
- Filaments;
- Matrices;
- thematic profession materials.

No automatic process can cross reserve without override.

---

# 105. MINING â†” JEWELCRAFTING

This is Jewelcrafting's strongest gathering link.

Mining supplies:

- Opal;
- Sapphire;
- Garnet;
- Emerald;
- Ruby;
- Topaz;
- Amethyst;
- Aquamarine;
- Diamond;
- Astral Prism.

Jewelcrafting gives every Gem a long-term use.

---

# 106. WHY OLD MINING GEMS STAY VALUABLE

Modular combat jewelry means:

Gem identity persists beyond its discovery Tier.

A T10 player can still need:

- Ruby;
- Garnet;
- Emerald.

Workers and profession jewelry create additional demand.

This avoids the common problem:

> old Gem drops become vendor trash.

---

# 107. SMITHING â†” JEWELCRAFTING

Smithing supplies:

- Ingots;
- Jewelcrafting Tools;
- selected precision fittings.

Jewelcrafting uses Ingots directly for:

- Ring Frames;
- Necklace Frames;
- utility components.

No separate Smithing "Ring Blank" item is required.

---

# 108. WHY JEWELCRAFTING CAN SHAPE METAL DIRECTLY

Fine jewelry metalworking is part of Jewelcrafting identity.

Requiring:

Smithing â†’ Ring Blank â†’ Jewelcrafting â†’ Ring Frame

would add an intermediary item with little gameplay value.

Use Ingots directly.

---

# 109. RUNECRAFTING â†” JEWELCRAFTING

Late Frames use:

- Runic Filament;
- Astral Filament;
- Rune Matrix components.

Jewelcrafting creates:

- Focus Stones;
- Astral Prism Cores

for Runic/Magic equipment.

The professions support each other.

---

# 110. ALCHEMY â†” JEWELCRAFTING

Alchemy consumes:

**Prismatic Dust**

as an optional Catalyst.

Jewelcrafting may consume:

- Quintessence

only in post-100 World Prism work.

This creates a strong endgame bridge.

---

# 111. FISHING â†” JEWELCRAFTING

Fishing can supply:

- Prismatic Dust-linked aquatic materials;
- Pearls;
- selected rare Aquatic Finds

for profession jewelry or utility components.

Do not make every jewelry recipe require Fishing.

---

# 112. FORAGING â†” JEWELCRAFTING

Foraging hidden reagents can contribute to:

- profession jewelry thematic materials;
- World Prism endgame.

Normal combat Frames do not require Herbs.

---

# 113. HUNTING â†” JEWELCRAFTING

Hunting materials:

- Bone;
- Fang & Claw;
- Sinew

can be used selectively in:

- trophy jewelry;
- profession jewelry;
- decorative structural components.

Avoid species-specific trophy Gem recipes.

---

# 114. LEATHERWORKING â†” JEWELCRAFTING

Leatherworking supplies:

- straps;
- bindings;
- grip materials

for:

- Jeweler's Tools;
- selected pendants/charms;
- utility equipment.

Normal metal Frames remain metal-focused.

---

# 115. TAILORING â†” JEWELCRAFTING

Tailoring supplies:

- Filament;
- selected Chains/cord components;
- worker/profession gear integration.

High-tier magical jewelry relies more strongly on Tailoring/Runecrafting.

---

# 116. FARMING â†” JEWELCRAFTING

Farming is not a main raw-material supplier.

It can contribute:

- botanical thematic components

to profession jewelry/endgame projects.

Do not force crops into normal Ring crafting.

---

# 117. COOKING â†” JEWELCRAFTING

Cooking has no major direct baseline dependency.

Its profession jewelry is crafted through Jewelcrafting using:

- Cooking thematic material;
- Frame;
- Gem;
- Dust.

This is enough.

---

# 118. JEWELCRAFTING â†” EVERY PROFESSION

Jewelcrafting's strongest systemic purpose is:

**every profession wants situational Ring/Necklace equipment.**

That makes Jewelcrafting useful to:

- Combat players;
- gatherers;
- processors;
- workers;
- completionists.

---

# 119. COMBAT JEWELRY VS PROFESSION JEWELRY

Two distinct systems:

## Combat Jewelry

- modular Frame;
- socketed Gem;
- swappable;
- Gem determines effect.

## Profession Jewelry

- fixed named item;
- fixed effect;
- Faceted Gem consumed in assembly;
- effect defined by source profession.

Do not merge them into one confusing random accessory system.

---

# 120. NO RANDOM AFFIXES

Jewelcrafting does not roll:

- +17 Strength;
- +8 Crit;
- +4% Fishing;
- random rarity.

No Diablo-style accessory RNG baseline.

The game emphasizes:

- planning;
- deterministic progression;
- explicit loadouts.

---

# 121. NO GEM QUALITY TIERS

Do not create:

- Chipped Ruby;
- Normal Ruby;
- Flawless Ruby;
- Perfect Ruby.

One Raw Ruby.

One Faceted Ruby.

The complexity comes from:

- Cutting method;
- Frame;
- socket choice;
- profession recipe.

---

# 122. NO GEM DURABILITY

Socketed Gems never wear out.

No replacement tax.

---

# 123. NO FRAME DURABILITY

Ring/Necklace Frames never break.

---

# 124. NO SOCKET RNG

Socket count is deterministic by Frame.

T5+ Necklace always supports Accent.

No:

- lucky 2-socket Ring;
- failed socket;
- random color socket.

---

# 125. GEM STORAGE UI

Jewelcrafting screen should show a compact Gem Vault:

for each Gem:

- Raw count;
- Faceted count;
- socketed count;
- reserved count;
- Dust value;
- current Mastery.

This is much more useful than a giant recipe grid.

---

# 126. JEWELRY FRAME UI

Frame browser filters:

- Ring;
- Necklace;
- Tier.

Each card:

- Frame Resonance;
- socket count;
- required materials;
- current Bank count;
- Mastery;
- worker eligibility.

---

# 127. SOCKET MANAGEMENT UI

Central panel:

**Selected Jewelry Frame**

Shows:

- Core socket;
- Accent socket if available;
- current Gem;
- effect preview;
- comparison against current equipped jewelry.

Gem picker shows:

- Gem Affinity;
- exact scaled effect;
- Raw/Faceted stock;
- where other copies are socketed.

---

# 128. EFFECT PREVIEW

Before socketing:

UI calculates final exact result.

Example:

**Astralite Ring Frame â€” 1.90x Resonance**

**Ruby**

Base:

Damage +2.0%

Result:

**Damage +3.8%**

No need to calculate mentally.

---

# 129. NECKLACE PREVIEW

Example:

Astralite Necklace:

Core Ruby:

+3.8% Damage.

Accent Garnet:

Garnet base Crit +1.0 pp

Ã—1.90

Ã—0.50

=

**+0.95 pp Crit**

Show both lines directly.

---

# 130. PROFESSION JEWELRY BROWSER

Filters:

- Profession;
- Level;
- Ring/Necklace;
- owned/not owned;
- worker eligible.

Card shows:

- target profession requirement;
- Jewelcrafting requirement;
- fixed effect from profession source data;
- materials;
- Mastery;
- current Bank count.

---

# 131. UTILITY COMPONENT BROWSER

Shows:

- target Tool/facility consumers;
- needed quantity;
- Bank demand;
- recipe.

This helps explain why a precision component exists.

---

# 132. ACTIVE CUTTING PANEL

Show:

- Raw Gem;
- Method;
- Cut Work;
- Jewelcrafting Power;
- actions remaining;
- Polish Time;
- Preservation;
- Dust Recovery;
- Faceted Gems/hour;
- Dust/hour.

---

# 133. ACTIVE ASSEMBLY PANEL

Show:

- Frame / profession jewelry / utility item;
- Work;
- Power;
- material preservation;
- output/hour;
- queue;
- reserve warnings.

---

# 134. ANALYTICS

Jewelcrafting analytics should show:

- Raw Gems/hour;
- Faceted Gems/hour;
- Dust/hour;
- Ingots/hour;
- Frame/hour;
- profession jewelry/hour;
- utility components/hour;
- Preservation/hour;
- XP/hour;
- Mastery/hour;
- ETA;
- worker output separately.

---

# 135. SOCKET VALUE ANALYTICS

Optional comparison view:

for selected Frame:

show every owned Faceted Gem and its final effect.

This is highly useful for build planning.

No ranking/winner required.

Player chooses based on build.

---

# 136. COMPLETE GEM CONTRACT

| Tier | JC Lvl | Raw Gem | Affinity | Base Socket Effect | Cut Work | Polish Time | Crush Dust |
|---|---|---|---|---|---|---|---|
| T1 | 1 | Opal | Vitality | Max Health +3.0% | 20 | 1.6 | 2 |
| T2 | 11 | Sapphire | Efficiency | Combat Resource Cost -2.0% | 30 | 1.8 | 3 |
| T3 | 21 | Garnet | Precision | Critical Chance +1.0 pp | 42 | 2.0 | 4 |
| T4 | 31 | Emerald | Guard | Defense +3.0% | 56 | 2.2 | 5 |
| T5 | 41 | Ruby | Power | Damage Done +2.0% | 72 | 2.45 | 6 |
| T6 | 51 | Topaz | Accuracy | Accuracy +3.5% | 90 | 2.7 | 8 |
| T7 | 61 | Amethyst | Tempo | Cooldown Recovery +2.5% | 110 | 2.95 | 10 |
| T8 | 71 | Aquamarine | Recovery | Healing Received +4.0% | 132 | 3.2 | 12 |
| T9 | 81 | Diamond | Impact | Critical Damage +6.0% | 156 | 3.5 | 15 |
| T10 | 91 | Astral Prism | Prismatic | Damage +1.0%; Defense +1.0%; Accuracy +1.0% | 184 | 3.8 | 20 |

---

# 137. COMPLETE CUTTING METHODS

| Method | Unlock | Cut Work | XP/Mastery | Gem Preservation | Dust Recovery | Identity |
|---|---|---|---|---|---|---|
| Standard Cut | 1 | 1.00x | 1.00x | 0 pp | 0 pp | Balanced baseline |
| Rapid Cut | 15 | 0.75x | 0.85x | 0 pp | 0 pp | Fast throughput; lower XP/Mastery |
| Conservative Cut | 35 | 1.10x | 1.10x | +15 pp | 0 pp | Protect scarce raw gems |
| Master Faceting | 55 | 1.20x | 1.20x | +5 pp | +20 pp | Mastery + Prismatic Dust recovery |

---

# 138. COMPLETE FRAME PROGRESSION

| Tier | Frame Metal | Ring Lvl | Necklace Lvl | Resonance | Ring Dust | Necklace Dust | Extra Requirement |
|---|---|---|---|---|---|---|---|
| T1 | Copper | 4 | 8 | 1.00x | 1 | 2 | None |
| T2 | Iron | 14 | 18 | 1.10x | 1 | 2 | None |
| T3 | Cobalt | 24 | 28 | 1.20x | 2 | 3 | None |
| T4 | Argent | 34 | 38 | 1.30x | 2 | 4 | None |
| T5 | Emberite | 44 | 48 | 1.40x | 3 | 5 | Accent Socket begins |
| T6 | Frostsilver | 54 | 58 | 1.50x | 3 | 6 | Accent Socket |
| T7 | Stormiron | 64 | 68 | 1.60x | 4 | 7 | +1 Runic Filament |
| T8 | Aetherite | 74 | 78 | 1.70x | 5 | 8 | +1 Runic Filament |
| T9 | Umbral | 84 | 88 | 1.80x | 6 | 10 | +1 Aether Filament |
| T10 | Astralite | 95 | 98 | 1.90x | 8 | 12 | +1 Astral Filament |

---

# 139. COMPLETE PROFESSION JEWELRY BRACKETS

| Target Profession Lvl | Jewelry Tier | Frame Metal | Required Gem | Extra Input | Recipe Rule |
|---|---|---|---|---|---|
| 15 | T2 | Iron | Faceted Sapphire | Low-tier thematic material | Requires equal Jewelcrafting bracket + target profession level |
| 25 | T3 | Cobalt | Faceted Garnet | Mid-early thematic material | Requires equal Jewelcrafting bracket + target profession level |
| 35 | T4 | Argent | Faceted Emerald | Profession-specific component | Requires equal Jewelcrafting bracket + target profession level |
| 45 | T5 | Emberite | Faceted Ruby | Profession-specific component | Requires equal Jewelcrafting bracket + target profession level |
| 55 | T6 | Frostsilver | Faceted Topaz | Advanced thematic component | Requires equal Jewelcrafting bracket + target profession level |
| 65 | T7 | Stormiron | Faceted Amethyst | Advanced thematic + Runic support | Requires equal Jewelcrafting bracket + target profession level |
| 75 | T8 | Aetherite | Faceted Aquamarine | High-tier thematic component | Requires equal Jewelcrafting bracket + target profession level |
| 85 | T9 | Umbral | Faceted Diamond | Rare/high-tier thematic component | Requires equal Jewelcrafting bracket + target profession level |
| 95 | T10 | Astralite | Faceted Astral Prism | Astral thematic component | Requires equal Jewelcrafting bracket + target profession level |

---

# 140. COMPLETE UTILITY COMPONENTS

| Lvl | Utility Component | Inputs | Main Consumers |
|---|---|---|---|
| 12 | Polished Opal Lens | 1 Faceted Opal + 1 Copper Ingot | Foraging/Fishing early inspection tools |
| 22 | Sapphire Focus Stone | 1 Faceted Sapphire + 2 Prismatic Dust | Runecrafting / Magic utility |
| 32 | Garnet Precision Lens | 1 Faceted Garnet + 1 Cobalt Ingot | Fletching / profession tools |
| 42 | Emerald Ward Inlay | 1 Faceted Emerald + 1 Argent Ingot | Protective profession equipment |
| 52 | Ruby Heat Lens | 1 Faceted Ruby + 1 Emberite Ingot | Smithing / Alchemy heat equipment |
| 62 | Topaz Survey Lens | 1 Faceted Topaz + 3 Prismatic Dust | Foraging / Mining analytics tools |
| 72 | Amethyst Runic Focus | 1 Faceted Amethyst + 1 Runic Matrix component | Runecrafting / Tailoring advanced gear |
| 82 | Aquamarine Aether Lens | 1 Faceted Aquamarine + 1 Aetherite Ingot | Alchemy / Fishing / support equipment |
| 92 | Diamond Precision Core | 1 Faceted Diamond + 5 Prismatic Dust | T9 precision tools / facilities |
| 99 | Astral Prism Core | 1 Faceted Astral Prism + 1 Astral Rune Matrix + 8 Prismatic Dust | T10/endgame equipment / facilities |

---

# 141. COMPLETE TOOL PROGRESSION

| Tier | Tool | Lvl | Jewelcrafting Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Jeweler's Tools | 1 | 5 | 2.15s | Starter | None |
| T1 | Copper Lapidary Kit | 5 | 7 | 2.09s | Smithing + Fletching | Cut Work -2% |
| T2 | Iron Jeweler's Tools | 15 | 10 | 2.03s | Smithing + Fletching | Raw Gem Preservation +2 pp |
| T3 | Cobalt Faceting Kit | 25 | 14 | 1.97s | Smithing + Jewelcrafting | Dust Recovery +3 pp |
| T4 | Argent Setter's Kit | 35 | 19 | 1.91s | Smithing + Leatherworking | Frame Assembly Time -4% |
| T5 | Emberite Lapidary Kit | 45 | 25 | 1.85s | Smithing + Jewelcrafting | Gem Preservation +4 pp |
| T6 | Frostsilver Precision Kit | 55 | 32 | 1.79s | Smithing + Jewelcrafting | Cut Work -6% |
| T7 | Stormiron Prism Kit | 65 | 40 | 1.73s | Smithing + Runecrafting | Profession Jewelry Work -6% |
| T8 | Aetherite Gemsetter Kit | 75 | 49 | 1.67s | Smithing + Runecrafting | Frame Material Preservation +5 pp |
| T9 | Umbral Master Lapidary Kit | 85 | 59 | 1.61s | Smithing + Runecrafting | T8+ Gem Cut Time -6% |
| T10 | Astralite Grand Jeweler's Kit | 95 | 70 | 1.55s | Multi-profession | Jewelcrafting Power +8%; Dust Recovery +5 pp |

---

# 142. COMPLETE CLOTHING PROGRESSION

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Lapidary Visor | Cut Work -4% |
| T3 / L25 | Lapidary Apron | Raw Gem Preservation +3 pp |
| T3 / L25 | Lapidary Trousers | Gem Mastery XP +4% |
| T3 / L25 | Lapidary Gloves | Polish Time -4% |
| T3 / L25 | Lapidary Shoes | Dust Recovery +3 pp |
| Set | Lapidary 5/5 | Gem Cutting Time -4% |
| T5 / L45 | Goldsmith Cap | Frame Assembly Work -6% |
| T5 / L45 | Goldsmith Coat | Metal/Dust Preservation +4 pp |
| T5 / L45 | Goldsmith Leggings | Frame Mastery XP +6% |
| T5 / L45 | Goldsmith Gloves | Profession Jewelry Work -5% |
| T5 / L45 | Goldsmith Shoes | Setting Time -4% |
| Set | Goldsmith 5/5 | Ring/Necklace Frame Material Preservation +4 pp |
| T7 / L65 | Prismwright Hood | Runic/Astral jewelry Work -6% |
| T7 / L65 | Prismwright Robe | Filament/Matrix Preservation +4 pp |
| T7 / L65 | Prismwright Legwraps | High-tier Jewelry Mastery XP +7% |
| T7 / L65 | Prismwright Gloves | Dust Recovery +5 pp |
| T7 / L65 | Prismwright Shoes | T7+ Assembly Time -5% |
| Set | Prismwright 5/5 | T7+ Gem/Frame action time -5% |
| T9 / L85 | Master Jeweler Visor | Jewelcrafting Power +8% |
| T9 / L85 | Master Jeweler Coat | Material Preservation +5 pp |
| T9 / L85 | Master Jeweler Leggings | Mastery XP +8% |
| T9 / L85 | Master Jeweler Gloves | Dust Recovery +6 pp |
| T9 / L85 | Master Jeweler Shoes | All Jewelcrafting Time -5% |
| Set | Master Jeweler 5/5 | Action Time -5%; Preservation +3 pp |

---

# 143. COMPLETE JEWELCRAFTING JEWELRY

| Jewelcrafting Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Cutter's Ring | Cut Work -6% | Gem cutting |
| 25 | Polisher Pendant | Polish Time -6% | Polishing |
| 35 | Dustkeeper Band | Raw Gem Preservation +5 pp | Gem economy |
| 45 | Setter's Charm | Frame/Profession Jewelry Work -7% | Assembly |
| 55 | Facet Loop | Dust Recovery +8 pp | Prismatic Dust |
| 65 | Goldsmith Seal | Jewelry Material Preservation +6 pp | Frames/special jewelry |
| 75 | Prismwright Chain | Runic/Astral Jewelry Work -7% | High-tier |
| 85 | Diamond Lens Charm | T8+ Cut/Polish Time -6% | Late gems |
| 95 | Astral Jeweler Emblem | Power +8%; Dust Recovery +4 pp | Endgame general |

---

# 144. COMPLETE SPECIALIZATIONS

| Specialization | Focus | Effects | Best For |
|---|---|---|---|
| Lapidary | Gem cutting / Dust | Cut Work -12%; Gem Preservation +6 pp; Dust Recovery +15 pp; Frame Assembly Time +5% | Raw gem economy / Mastery |
| Goldsmith | Frames / profession jewelry | Frame & special Jewelry Work -12%; metal/dust Preservation +6 pp; setting time -8%; Gem cutting time +5% | Equipment production |
| Prismwright | Runic/Astral / utility | T7+ Work -12%; Filament/Matrix Preservation +6 pp; Utility component time -10%; normal T1â€“T6 Frame time +5% | High-tier / endgame |

---

# 145. COMPLETE ATELIER PROGRESSION

| Facility | Property Stage | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|
| Jewelcrafting Atelier I | House | 20 | 5 | 2 | 2 presets; socket management; exact gem/frame analytics |
| Jewelcrafting Atelier II | Lodge | 40 | 10 | 4 | Profession Jewelry templates; first worker; batch cutting |
| Jewelcrafting Atelier III | Manor | 60 | 25 | 6 | Accent Socket management; 3 workers; utility component chains |
| Jewelcrafting Atelier IV | Estate | 80 | 50 | 10 | Runic/Umbral jewelry teams; reserve-driven gem processing |
| Jewelcrafting Atelier V | Holdings / late Estate | 100 | 100 | Expanded | Astral/World Prism crafting; 10 workers |

---

# 146. COMPLETE LEVEL ROADMAP

| Jewelcrafting Lvl | Major Unlock |
|---|---|
| 1 | Opal cutting; Standard Cut; Worn Jeweler's Tools |
| 4 | Copper Ring Frame |
| 5 | Copper Lapidary Kit |
| 8 | Copper Necklace Frame |
| 11 | Sapphire cutting |
| 12 | Polished Opal Lens |
| 14 | Iron Ring Frame |
| 15 | Iron Jeweler's Tools; Rapid Cut; first profession jewelry bracket; Cutter's Ring |
| 18 | Iron Necklace Frame |
| 21 | Garnet cutting |
| 22 | Sapphire Focus Stone |
| 24 | Cobalt Ring Frame |
| 25 | Cobalt Faceting Kit; Lapidary set; second profession jewelry bracket; Polisher Pendant |
| 28 | Cobalt Necklace Frame |
| 31 | Emerald cutting |
| 32 | Garnet Precision Lens |
| 34 | Argent Ring Frame |
| 35 | Argent Setter's Kit; Conservative Cut; Jewelcrafting Specializations; Dustkeeper Band |
| 38 | Argent Necklace Frame |
| 40 | Jewelcrafting Atelier II / Profession Jewelry templates |
| 41 | Ruby cutting |
| 42 | Emerald Ward Inlay |
| 44 | Emberite Ring Frame; Necklace Accent Socket system begins |
| 45 | Emberite Lapidary Kit; Goldsmith set; Setter's Charm |
| 48 | Emberite Necklace Frame |
| 51 | Topaz cutting |
| 52 | Ruby Heat Lens |
| 54 | Frostsilver Ring Frame |
| 55 | Frostsilver Precision Kit; Master Faceting; Facet Loop |
| 58 | Frostsilver Necklace Frame |
| 60 | Jewelcrafting Atelier III |
| 61 | Amethyst cutting |
| 62 | Topaz Survey Lens |
| 64 | Stormiron Ring Frame |
| 65 | Stormiron Prism Kit; Prismwright set; Goldsmith Seal |
| 68 | Stormiron Necklace Frame |
| 71 | Aquamarine cutting |
| 72 | Amethyst Runic Focus |
| 74 | Aetherite Ring Frame |
| 75 | Aetherite Gemsetter Kit; Prismwright Chain |
| 78 | Aetherite Necklace Frame |
| 80 | Jewelcrafting Atelier IV |
| 81 | Diamond cutting |
| 82 | Aquamarine Aether Lens |
| 84 | Umbral Ring Frame |
| 85 | Umbral Master Lapidary Kit; Master Jeweler set; Diamond Lens Charm |
| 88 | Umbral Necklace Frame |
| 91 | Astral Prism cutting |
| 92 | Diamond Precision Core |
| 95 | Astralite Ring Frame |
| 95 | Astralite Grand Jeweler's Kit; Astral Jeweler Emblem |
| 98 | Astralite Necklace Frame |
| 99 | Astral Prism Core |
| 100 | Jewelcrafting cap; Atelier V; World Prism endgame path |

---

# 147. JEWELCRAFTING XP

Gem Cutting XP should scale with:

- Gem Tier;
- Cut Work;
- Cutting Method.

Frame/Assembly XP scales with:

- Frame Tier;
- Work;
- recipe complexity.

Relative weights:

| Category | XP Weight |
|---|---:|
| Gem Cutting | 1.00x |
| Gem Crushing | 0.45x |
| Ring Frame | 0.90x |
| Necklace Frame | 1.10x |
| Profession Jewelry | 1.25x |
| Utility Component | 1.15x |
| Astral/Endgame | 1.40x |

Gem Crushing should not become the best leveling method.

---

# 148. MASTERY XP

Recommended:

**Recipe Mastery XP = Jewelcrafting XP Ã—0.40**

then apply:

- Cutting Method;
- gear;
- Specialization;
- Skill-Wide Mastery.

---

# 149. GEM CRUSHING XP

Crushing gives low XP because it is:

- simple;
- destructive;
- primarily a resource-conversion activity.

This prevents:

buy/farm cheap Opal â†’ crush forever

from becoming optimal leveling.

---

# 150. DUST ECONOMY

Prismatic Dust has several permanent sinks:

- Frames;
- profession jewelry;
- Alchemy Catalyst;
- precision components;
- Runic/Astral recipes;
- World Prism.

Therefore Dust should remain meaningful without requiring artificial decay.

---

# 151. OFFLINE JEWELCRAFTING

Save:

- active recipe;
- category;
- Cutting Method;
- Batch;
- Cut Work;
- Polish progress;
- Assembly Work;
- Tool;
- gear;
- specialization;
- reserves;
- planner;
- workers.

Offline uses identical formulas.

---

# 152. OFFLINE SOCKET STATE

Socketed Gems are equipment state.

They do not change offline unless:

- an explicitly scheduled preset swap occurs through a supported global system.

No automatic random Gem changes.

---

# 153. OFFLINE RESULTS

Show:

- Raw Gems consumed;
- Raw Gems preserved;
- Faceted Gems;
- Prismatic Dust;
- Frames;
- profession jewelry;
- utility components;
- XP;
- Mastery;
- planner transitions;
- worker production separately.

---

# 154. CHRONICLES â€” EARLY JEWELCRAFTING

Suggested:

1. obtain Opal from Mining.
2. cut first Faceted Opal.
3. explain Cut Work.
4. craft Copper Ring Frame.
5. socket Opal.
6. show scaled Gem effect.
7. remove/reinsert Gem.
8. crush surplus Gem into Prismatic Dust.
9. craft first Necklace Frame.
10. reach Faceted Gem Mastery 10.

---

# 155. CHRONICLES â€” MIDGAME

Suggested:

- unlock Rapid Cut;
- craft first profession jewelry;
- unlock Conservative Cut;
- choose Jewelcrafting Specialization;
- craft Ruby;
- unlock Necklace Accent Socket;
- create first two-Gem Necklace;
- build Atelier II/III;
- assign worker;
- maintain Dust reserve.

---

# 156. CHRONICLES â€” LATE

Suggested:

- use Master Faceting;
- cut Amethyst/Aquamarine;
- craft Runic jewelry component;
- craft Diamond;
- produce T9 profession jewelry;
- cut Astral Prism;
- craft Astralite Frame;
- craft Astral Prism Core;
- reach Jewelcrafting 100;
- unlock World Prism path.

---

# 157. MASTER JEWELER

Recommended requirements:

- Jewelcrafting 100;
- Atelier V;
- Astralite Grand Jeweler's Kit;
- cut all 10 normal Gem species;
- at least 5 Faceted Gem Masteries 100;
- Astral Prism Mastery 50;
- craft one T10 Ring Frame;
- craft one T10 Necklace Frame;
- craft at least 10 different profession jewelry items;
- craft Astral Prism Core.

Reward:

- fourth Jewelcrafting preset;
- Master Jeweler marker;
- World Prism crafting.

---

# 158. POST-100 â€” WORLD PRISM

Jewelcrafting's post-100 endgame material:

**World Prism**

This is not another normal T11 Gem drop.

It is a crafted convergence material.

---

# 159. WORLD PRISM INPUT FAMILIES

| Input Family | Source | Role |
|---|---|---|
| Astral Prism | Mining â†’ Jewelcrafting | High-tier gem body |
| Worldstone / Worldheart material | Mining endgame | Physical core |
| Wildheart Essence | Foraging endgame | Natural/living resonance |
| Quintessence | Alchemy endgame | Alchemical binding |
| World Matrix | Runecrafting | Magical structure |

Exact quantities should be finalized during the full endgame economy audit.

The important point:

World Prism connects multiple mastered systems.

---

# 160. WHY WORLD PRISM IS CRAFTED

Mining already has:

**Worldheart**

Foraging has:

**Wildheart**

Alchemy has:

**Quintessence**

Runecrafting has:

**World Matrix**

Jewelcrafting should act as a late precision assembler rather than introduce:

"one more random T11 gem deposit."

---

# 161. WORLD PRISM USES

Expected:

- selective endgame combat jewelry;
- Holdings upgrades;
- World Prism convergence components (World Matrix + Quintessence);
- ultimate profession jewelry;
- permanent account projects.

It should not be consumed by ordinary T10 recipes.

---

# 162. WORLD PRISM COMBAT JEWELRY

Recommended selective endgame Frames:

- World Prism Ring;
- World Prism Necklace.

Do not automatically make:

10 new World Gem variants.

The World Prism Frame can retain the normal socket system.

Its value comes from:

- slightly higher Resonance;
- endgame infrastructure requirement.

---

# 163. WORLD PRISM RESONANCE

Recommended preliminary target:

**2.05x Core Resonance**

Necklace Accent:

still:

**50% socket efficiency**

This is only modestly above T10 1.90x.

Post-100 should not invalidate Astralite gear instantly.

---

# 164. WORLD PRISM FRAME REQUIREMENTS

Recommended:

- Jewelcrafting 100;
- Atelier V;
- World Prism material;
- Worldforged/Astral metal component;
- Astral Filament;
- Master Jeweler Chronicle.

Exact quantities later.

---

# 165. WORLD PRISM PROFESSION JEWELRY

Do not create 14 automatic World-tier profession jewelry pieces immediately.

Only add one where:

- a profession's post-100 system genuinely needs it.

This controls endgame item bloat.

---

# 166. WORKER WORLD PRISM RULE

Workers cannot craft World Prism initially.

Recommended eligibility:

- player crafts 10 manually;
- World Prism recipe Mastery 25;
- worker Proficiency 100;
- Atelier V.

Even then:

rare-resource reserves remain mandatory.

---

# 167. DEVTOOLS

Jewelcrafting DevTools should support:

- set Jewelcrafting Level;
- set Recipe Mastery;
- set Skill-Wide Mastery;
- spawn Raw Gems;
- spawn Faceted Gems;
- spawn Prismatic Dust;
- spawn Frames;
- socket/unsocket Gem;
- unlock Accent Socket;
- spawn profession jewelry;
- spawn utility components;
- set Cutting Method;
- set Cut Work;
- set Polish progress;
- set Assembly Work;
- spawn Tool/gear;
- set Specialization;
- set Atelier Tier;
- mark recipe Proven;
- spawn worker;
- set worker Proficiency;
- instant craft;
- simulate 1m / 1h / 8h / 24h;
- compare expected vs actual Dust/Gem output.

---

# 168. DATA MODEL â€” GEM

Gem data:

- ID;
- Tier;
- unlock level;
- affinity;
- Base Socket Effect;
- Cut Work;
- Polish Time;
- Dust Crush Value;
- Raw item ID;
- Faceted item ID.

---

# 169. DATA MODEL â€” FRAME

Frame:

- ID;
- Tier;
- Slot:
  - Ring;
  - Necklace;
- Resonance;
- Core Socket count;
- Accent Socket count;
- material recipe;
- Mastery ID.

---

# 170. DATA MODEL â€” SOCKETED JEWELRY

Instance state:

- Frame ID;
- Core Gem ID/null;
- Accent Gem ID/null;
- preset bindings.

Calculated effect is derived.

Do not store random affixes.

---

# 171. DATA MODEL â€” PROFESSION JEWELRY

Fixed profession item:

- ID;
- target profession;
- required target profession level;
- required Jewelcrafting level;
- Ring/Necklace slot;
- source effect reference;
- Frame input;
- Gem input;
- thematic input;
- Dust cost;
- Mastery ID.

---

# 172. DATA MODEL â€” CUTTING METHOD

Method:

- Cut Work multiplier;
- XP/Mastery multiplier;
- Preservation bonus;
- Dust Recovery bonus.

Method never changes:

- Gem ID;
- socket effect.

---

# 173. ANTI-BLOAT RULES

Avoid:

- Chipped/Flawless/Perfect Gem quality;
- random jewelry affixes;
- random sockets;
- Ring durability;
- Gem durability;
- separate Dust per Gem;
- separate metal Ring Blank items from Smithing;
- four cut-shape versions of every Gem;
- automatic World-tier version of every profession jewelry item;
- species-specific trophy jewelry clutter.

Prefer:

- Raw Gem + Faceted Gem;
- one universal Prismatic Dust;
- deterministic Frames;
- modular Combat sockets;
- fixed profession jewelry;
- selective utility components.

---

# 174. MAJOR OPEN QUESTIONS â€” RECOMMENDED ANSWERS

## Should Jewelcrafting be the last baseline profession?

**Yes.**

It naturally consumes outputs from almost the entire economy.

---

## Should raw Gems be processed before use?

**Yes.**

Raw Gem â†’ Faceted Gem.

---

## Should Gem cutting fail?

**No.**

---

## Should Gems have random quality?

**No.**

---

## Should there be multiple cut shapes of every Gem as separate items?

**No baseline.**

That would create unnecessary item multiplication.

---

## Should combat jewelry have random stats?

**No.**

Use deterministic Gem sockets.

---

## Should combat Rings/Necklaces be fixed stat items?

**No baseline.**

Frames + socketed Gems provide more interesting build flexibility.

---

## Should Gem effects be determined by Gem species?

**Yes.**

Stable Affinity.

---

## Should stronger Frames amplify old Gems?

**Yes.**

This is critical for old-Gem relevance.

---

## Should old Ruby still matter at T10?

**Yes.**

A Ruby socketed in Astralite Frame still provides a properly scaled Power effect.

---

## Should every Gem always be strictly better than previous Gem?

**No.**

They unlock different affinities.

---

## Should Ring have one socket?

**Yes.**

Simple focused item.

---

## Should Necklace eventually have two sockets?

**Yes.**

Core + half-strength Accent from T5.

---

## Can Necklace use the same Gem twice?

**No.**

Core and Accent must differ.

---

## Can Ring and Necklace both use Ruby?

**Yes.**

This permits build specialization.

---

## Should socketing destroy Gems?

**No.**

---

## Should unsocketing cost Prismatic Dust?

**No baseline.**

Encourage experimentation.

---

## Should Frames have random socket counts?

**No.**

Deterministic.

---

## Should high-tier Frames require Runecrafting materials?

**Yes.**

Starting T7.

---

## Should Smithing craft Ring Blanks first?

**No.**

Jewelcrafting consumes Ingots directly.

---

## Should Jewelcrafting own profession jewelry?

**Yes.**

As the assembly profession.

---

## Should Jewelcrafting redefine profession-jewelry effects?

**No.**

Target Profession MD owns effect.

Jewelcrafting owns recipe.

---

## Should profession jewelry use the modular socket system?

**No baseline.**

Keep fixed effect so profession loadouts stay readable.

---

## Should profession jewelry consume Gems permanently?

**Yes.**

This is a major persistent Gem sink.

---

## Should profession jewelry require the target profession level?

**Yes.**

Prevent progression bypass.

---

## Should every profession use the same bracket materials?

**Yes as baseline.**

This massively simplifies recipe logic.

---

## Should Prismatic Dust have multiple tiers?

**No.**

One universal Dust.

---

## Should player be able to deliberately create Dust?

**Yes.**

Gem Crushing.

---

## Should Jewelcrafting automatically crush surplus Gems?

**Only with an explicit whitelist.**

Never by default.

---

## Should low-tier Gems become vendor trash?

**No.**

Socket affinities and profession jewelry keep them relevant.

---

## Should Jewelcrafting create utility precision components?

**Yes.**

Lenses/focus stones/inlays explain its role in advanced Tools.

---

## Should Jewelcrafting make Magic weapons?

**No baseline.**

It supplies components.

---

## Should Jewelcrafting make armor?

**No baseline.**

Smithing/Tailoring/Leatherworking own armor.

---

## Should Jewelcrafting have its own Tool?

**Yes.**

Jeweler's Tools / Lapidary Kit.

---

## Should Tool have durability?

**No.**

---

## Should Jewelcrafting have Specializations?

**Yes.**

Lapidary / Goldsmith / Prismwright are genuinely different roles.

---

## Should workers cut Gems?

**Yes after recipe Mastery 10.**

---

## Should workers auto-use Diamond/Astral Prism?

**No by default.**

Explicit assignment only.

---

## Do workers grant player XP/Mastery?

**No.**

---

## Should workers craft profession jewelry automatically?

**Only explicit target recipes.**

---

## Should World Prism be mined?

**No.**

Crafted post-100 convergence material.

---

## Should World Prism create a full T11 Gem ladder?

**No.**

Selective endgame material.

---

## Should Jewelcrafting 100 finish the profession?

**No.**

Post-100:
- Mastery;
- worker gem processing;
- World Prism;
- selective endgame Frames;
- profession completion.

---

# 175. COMPLETE LOCKED JEWELCRAFTING BASELINE

1. Jewelcrafting is the 14th/final baseline profession.
2. Core flow:
   - Cutting;
   - Polishing;
   - Setting;
   - Socketing / Specialized Assembly.
3. Mining supplies 10 Raw Gem species.
4. One Raw Gem becomes one Faceted Gem.
5. No random Gem quality.
6. No Gem-cut failure.
7. Four Cutting Methods:
   - Standard;
   - Rapid;
   - Conservative;
   - Master Faceting.
8. Prismatic Dust is universal.
9. Gem Crushing provides deterministic Dust.
10. Faceted Gem Regrind returns reduced Dust.
11. Dust Recovery is a cutting by-product mechanic.
12. Combat jewelry uses deterministic Frames.
13. Ring has 1 Core Socket.
14. Necklace has 1 Core Socket.
15. T5+ Necklace adds 1 Accent Socket.
16. Accent operates at 50% Gem effect.
17. Necklace Core/Accent cannot use same Gem species.
18. Ring and Necklace may use same Gem.
19. Socketed Gems are removable.
20. No socketing/unsocketing tax baseline.
21. Frame Resonance scales Gem effects.
22. T1 Frame Resonance 1.00x.
23. T10 Frame Resonance 1.90x.
24. Old Gems remain viable in high-tier Frames.
25. Every Gem has a stable Affinity.
26. Combat effect values are balance anchors pending final Combat tuning.
27. Profession jewelry is fixed-effect gear.
28. Profession MD owns effect.
29. Jewelcrafting owns profession-jewelry recipe.
30. Profession jewelry uses common 15/25/...95 material brackets.
31. Craft requires Jewelcrafting level + target profession level.
32. Fixed profession jewelry consumes a Faceted Gem.
33. Jewelcrafting creates precision utility components.
34. High-tier Frames use Runic/Astral materials.
35. Jeweler's Tools/Lapidary Kit is primary Tool.
36. No durability.
37. Recipe Mastery 1â€“100.
38. Skill-Wide Mastery.
39. Three reversible Specializations:
   - Lapidary;
   - Goldsmith;
   - Prismwright.
40. Jewelcrafting Atelier Iâ€“V is property infrastructure.
41. Workers consume real materials.
42. Recipe Mastery 10 makes recipe Proven.
43. Workers gain Proficiency, not player XP/Mastery.
44. Rare Gems are protected from worker auto-consumption by default.
45. Auto-crushing requires explicit Gem whitelist.
46. Planner supports Gem, Dust, Frame, profession-jewelry and utility targets.
47. Offline uses identical formulas.
48. Post-100 endgame uses World Prism.
49. World Prism is crafted, not randomly mined.
50. All baseline Jewelcrafting content lives in this single MD.

---

# 176. FINAL PROFESSION-ECOSYSTEM SUMMARY

With Jewelcrafting complete, the baseline profession ecosystem now closes:

**Mining**

provides:

- metals;
- Gems;
- Essence.

â†“

**Smithing**

turns metal into:

- Ingots;
- Tools;
- mechanisms;
- heavy equipment.

â†“

**Woodcutting**

provides:

- timber;
- Resin;
- Bark;
- Heartwood.

â†“

**Fletching**

turns timber/metal/textile components into:

- ranged weapons;
- Ammo;
- Rods;
- Utility Blanks.

â†“

**Fishing**

provides:

- Fish;
- aquatic reagents.

â†“

**Cooking**

turns food resources into:

- healing;
- provisions.

â†“

**Foraging**

discovers:

- Herbs;
- Fungi;
- Fibres;
- Botanicals;
- Wild Reagents.

â†“

**Farming**

domesticates/scales:

- food;
- Herbs;
- Fibre;
- Fungi.

â†“

**Tailoring**

turns Fibre into:

- Thread;
- Cloth;
- Bowstrings;
- cloth gear.

â†“

**Hunting**

provides:

- Meat;
- Hide;
- Feathers;
- Sinew;
- animal components.

â†“

**Leatherworking**

turns Hide into:

- Leather;
- ranged armor;
- straps;
- grips;
- bindings.

â†“

**Runecrafting**

turns Essence into:

- Runes;
- Filaments;
- Matrices.

â†“

**Alchemy**

turns natural/magical resources into:

- Elixirs;
- Tonics;
- Remedies;
- Quintessence.

â†“

**Jewelcrafting**

turns Gems, metals and magical precision components into:

- Combat jewelry;
- Profession jewelry;
- precision components;
- World Prism.

This creates a full account economy where professions do not live as isolated XP bars.

They:

- feed one another;
- produce equipment for one another;
- create worker infrastructure;
- support Combat;
- support House/Manor/Estate/Holdings;
- remain relevant after Level 100 through Mastery and endgame infrastructure.

The Jewelcrafting-specific fantasy is:

**I find rough Gems through Mining**

â†“

**I learn to facet them**

â†“

**I choose which Gem Affinity my Combat build needs**

â†“

**I create stronger Frames without invalidating old Gems**

â†“

**I craft specialist jewelry for every profession**

â†“

**workers maintain ordinary Gem/Dust production**

â†“

**I personally assemble Astral and World-level precision artifacts**

Core Jewelcrafting identity:

> **The Gem determines what the jewelry does. The Frame determines how strongly it does it. Jewelcrafting is the precision layer that turns the entire account's rare materials into deliberate, reusable build choices.**

---

# 177. BASELINE PROFESSION SET â€” COMPLETE

The intended 14-profession baseline is now:

## Gathering

1. Mining  
2. Woodcutting  
3. Fishing  
4. Farming  
5. Hunting  
6. Foraging  

## Processing / Production

7. Smithing  
8. Leatherworking  
9. Tailoring  
10. Fletching  
11. Cooking  
12. Alchemy  
13. Jewelcrafting  
14. Runecrafting  

All 14 now have a dedicated profession design document.

The next recommended design stage is **not adding more baseline professions**.

The next stage should be:

> **cross-profession audit + economy integration + unified progression/balance pass**

That pass should check:

- resource ownership;
- duplicate items;
- missing recipe inputs;
- dead resources;
- circular dependencies;
- early-game deadlocks;
- Level 1â€“100 unlock pacing;
- profession Tool sources;
- clothing/jewelry recipe ownership;
- worker interactions;
- House/Manor/Estate requirements;
- endgame World-system dependencies;
- cross-document inconsistencies.

That audit should happen before implementation expands the profession count.










