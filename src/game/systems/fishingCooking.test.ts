import { describe, expect, it } from 'vitest';
import { advanceWithEvents, canStartCooking, canStartFishing, COOKING_RECIPES, COOKING_METHOD_UNLOCK, FISHING_SPOTS, FISH_SPECIES, freshState, fishingCatchWeights, resolveRecipeInputs, startActivity, stopActivity, ITEMS, PHASE1_PANTRY, eatFood, loadState, type GameEvent, type ItemId } from '../game';

describe('Fishing and Cooking registries',()=>{
  it('registers all ten spots, forty species, and forty-three recipes with stable unique IDs',()=>{
    expect(FISHING_SPOTS).toHaveLength(10);expect(FISH_SPECIES).toHaveLength(40);expect(COOKING_RECIPES).toHaveLength(43);
    expect(new Set(FISH_SPECIES.map(x=>x.id)).size).toBe(40);expect(new Set(COOKING_RECIPES.map(x=>x.id)).size).toBe(43);
    for(const spot of FISHING_SPOTS)expect(FISH_SPECIES.filter(x=>x.spotId===spot.id)).toHaveLength(4);
    expect(FISHING_SPOTS.map(x=>x.unlockLevel)).toEqual([1,11,21,31,41,51,61,71,81,91]);
    expect(ITEMS['fishing.tackle.cork_float'].equipment).toMatchObject({context:'profession',profession:'Fishing',slot:'Tackle',requiredLevel:5});
    expect(FISH_SPECIES.every(x=>x.unlockLevel>=FISHING_SPOTS.find(s=>s.id===x.spotId)!.unlockLevel&&x.weight>0&&x.fight>0&&x.xp>0)).toBe(true);
    const pantry=freshState();for(const fish of FISH_SPECIES)pantry.bank[fish.id as keyof typeof pantry.bank]=50;for(const spot of FISHING_SPOTS)pantry.bank[spot.findId as keyof typeof pantry.bank]=50;for(const recipe of COOKING_RECIPES)pantry.bank[recipe.output as keyof typeof pantry.bank]=50;for(const item of Object.values(PHASE1_PANTRY))pantry.bank[item.id as keyof typeof pantry.bank]=50;
    for(const recipe of COOKING_RECIPES){expect(ITEMS[recipe.output as keyof typeof ITEMS]).toBeDefined();expect(resolveRecipeInputs(pantry,recipe.id)).not.toBeNull();expect(COOKING_METHOD_UNLOCK[recipe.method]).toBeGreaterThan(0);expect((recipe.foodValue>0)===recipe.output.startsWith('cooking.food.')).toBe(true);}
  });
});

describe('Fishing simulation',()=>{
  it('keeps locked species out of normalized pools and selects only after the Bite phase',()=>{
    const s=freshState();expect(canStartFishing(s)).toBe(true);expect(fishingCatchWeights(s).map(x=>x.fish.name)).toEqual(['Brook Minnow']);
    const serial=s.fishing.actionSerial;startActivity(s,'fishing');expect(s.fishing.actionSerial).toBe(serial+1);const bite=advanceWithEvents(s,3199);expect(bite.state.fishing.phase).toBe('bite');expect(bite.events.some(x=>x.type==='fish-selected')).toBe(false);
    const selected=advanceWithEvents(bite.state,1);expect(selected.state.fishing.phase).toBe('landing');expect(selected.state.fishing.selectedFish).toBe('fishing.fish.brook_minnow');expect(selected.state.fishing.actionSerial).toBe(serial+2);
    const landed=advanceWithEvents(selected.state,1650);expect(landed.state.bank['fishing.fish.brook_minnow']).toBe(2);expect(landed.state.fishing.sessionXp).toBe(12);expect(landed.state.fishing.actionSerial).toBe(serial+3);
  });
});

describe('Cooking resolver and phases',()=>{
  it('resolves an available cooking alternative and returns reserved inputs when stopped',()=>{
    const s=freshState();s.bank['fishing.fish.brook_minnow']=4;s.bank['fishing.fish.river_perch']=2;
    const resolved=resolveRecipeInputs(s,'cooking.recipe.grilled_river_fish');expect(resolved).toEqual([{item:'fishing.fish.river_perch',amount:1,tag:'Basic Fish'}]);
    expect(canStartCooking(s)).toBe(true);startActivity(s,'cooking');expect(s.bank['fishing.fish.river_perch']).toBe(1);stopActivity(s);expect(s.bank['fishing.fish.river_perch']).toBe(2);
    s.bank['cooking.utility.pantry_game_meat']=1;s.bank['cooking.utility.pantry_vegetable']=1;s.bank['cooking.utility.pantry_herb']=1;
    const hearty=resolveRecipeInputs(s,'cooking.recipe.hearty_fisher_stew');expect(hearty).toEqual(expect.arrayContaining([{item:'cooking.utility.pantry_game_meat',amount:1,tag:'Game Meat'}]));
  });
  it('completes prep and cooking with authoritative outputs and XP',()=>{
    const s=freshState();s.bank['fishing.fish.brook_minnow']=1;startActivity(s,'cooking');const result=advanceWithEvents(s,10_000);
    expect(result.state.bank['cooking.food.grilled_river_fish']).toBe(1);expect(result.state.skills.Cooking.xp).toBe(7);expect(result.events.some(e=>e.type==='cooking-craft-complete')).toBe(true);
  });
});

describe('Food sustain',()=>{
  it('heals from a configured slot, consumes one item, and applies Satiety and attack delay',()=>{
    const s=freshState(),food='cooking.food.grilled_river_fish' as ItemId;s.combat.playerHp=1;s.combat.playerTimer=300;s.bank[food]=2;s.food.slots[0]!.item=food;
    const events:GameEvent[]=[];expect(eatFood(s,0,false,events)).toBe(true);
    expect(s.bank[food]).toBe(1);expect(s.combat.playerHp).toBeGreaterThan(1);expect(s.combat.playerTimer).toBeGreaterThan(300);expect(s.food.satiety).toBe(20);expect(events.some(x=>x.type==='manual-eat')).toBe(true);
  });
  it('triggers Overeat stun and Food Lock at the Satiety cap',()=>{
    const s=freshState(),food='cooking.food.grilled_river_fish' as ItemId;s.food.satiety=80;s.bank[food]=1;s.food.slots[0]!.item=food;const events:GameEvent[]=[];
    expect(eatFood(s,0,false,events)).toBe(true);expect(s.food.satiety).toBe(100);expect(s.food.stunMs).toBeGreaterThan(0);expect(s.food.foodLockMs).toBeGreaterThan(s.food.stunMs);expect(events.some(x=>x.type==='overeat-triggered')).toBe(true);
  });
  it('keeps loaded Auto Eat thresholds at the supported 99 percent ceiling',()=>{
    const s=freshState();s.food.threshold=100;expect(loadState(JSON.stringify({version:5,savedAt:s.savedAt,state:s}),s.savedAt).state.food.threshold).toBe(99);
  });
  it('stops combat when Auto Eat triggers with no usable stock',()=>{
    const s=freshState();s.food.autoEat=true;s.food.threshold=70;s.combat.playerHp=1;s.equipped.weapon='combat.weapon.melee.copper_sword';s.equipped.head='combat.armor.heavy.copper_helm';startActivity(s,'combat');const result=advanceWithEvents(s,10);
    expect(s.activity).toBe('combat');expect(result.state.activity).toBeNull();expect(result.events).toEqual(expect.arrayContaining([{type:'combat-stopped-food-empty'}]));
  });
});

describe('Elapsed-time activity parity',()=>{
  it('keeps batched Fishing and Cooking outcomes equal to repeated short ticks',()=>{
    const fish=freshState();startActivity(fish,'fishing');const onlineFish=tick(fish,30_000),offlineFish=advanceWithEvents(fish,30_000).state;expect(offlineFish.fishing).toMatchObject({sessionFish:onlineFish.fishing.sessionFish,sessionXp:onlineFish.fishing.sessionXp});expect(offlineFish.rng).toBe(onlineFish.rng);
    const cook=freshState();cook.bank['fishing.fish.brook_minnow']=10;startActivity(cook,'cooking');const onlineCook=tick(cook,30_000),offlineCook=advanceWithEvents(cook,30_000).state;expect(offlineCook.cooking).toMatchObject({sessionOutputs:onlineCook.cooking.sessionOutputs,sessionXp:onlineCook.cooking.sessionXp});expect(offlineCook.rng).toBe(onlineCook.rng);
  });
});

function tick(input: ReturnType<typeof freshState>,ms:number){let state=structuredClone(input);for(let elapsed=0;elapsed<ms;elapsed+=250)state=advanceWithEvents(state,Math.min(250,ms-elapsed)).state;return state;}
