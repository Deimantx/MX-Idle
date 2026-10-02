# 03 — FISHING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `01_MINING_v1.1.md`, `02_SMITHING.md`  
**Purpose:** Define Fishing as one complete profession in a single source-of-truth file: core catch loop, Fishing Spots, catch pools, fish species, Bite and Landing phases, Rods, Bait, Tackle, aquatic finds, 10-tier progression, profession gear, Mastery, Specializations, Estate support, workers, automation, Chronicles, UI, formulas, balance rules, Cooking integration, and long-term relevance.

---

# 1. FISHING ROLE IN THE GAME

Fishing is one of the primary food-supply professions.

Its main outputs support:

- Cooking;
- Combat food;
- Alchemy;
- bait production;
- worker provisions where appropriate;
- Jewelcrafting through selected aquatic finds;
- profession progression;
- collection/completion.

Fishing must not become:

**Select one Fish → wait → receive that Fish**

The player selects a **Fishing Spot**, then influences what is caught by changing:

- Rod;
- Bait;
- Tackle;
- profession clothing;
- profession jewelry;
- Specialization;
- Species Mastery;
- late-game Preferred Species targeting.

The central Fishing question is:

> **How do I shape this catch pool toward the fish/resources I currently want?**

---

# 2. CORE FANTASY

The player begins with a crude handline at a simple brook.

Over time they learn to:

- read different Fishing Spots;
- use better Rods;
- target specific feeding behaviors;
- use Bait intelligently;
- choose surface, predator, or bottom setups;
- catch larger and more difficult fish;
- master rare species;
- gather valuable aquatic side-resources;
- supply Cooking at industrial scale;
- hand older Fishing jobs to workers;
- personally push the newest and rarest waters.

Long-term fantasy:

**Bank Fisher → Skilled Angler → Specialist Fisher → Master Angler → Owner of an Estate Fishing Network**

---

# 3. FISHING'S UNIQUE MECHANIC

Fishing uses:

**Fishing Spots + Weighted Catch Pools**

The player does not directly click:

> Catch Glassscale Trout

Instead they choose:

**Meadow Brook**

and the game contains a catch pool such as:

- Brook Minnow;
- River Perch;
- Mudfin;
- Glassscale Trout.

The player then shifts the odds through setup.

This makes Fishing a planning profession rather than a list of isolated timers.

---

# 4. CORE CATCH LOOP

Every Fishing cycle:

1. Select Fishing Spot.
2. Equip Fishing loadout.
3. Select optional Bait.
4. Select Tackle.
5. Begin the **Bite Phase**.
6. When Bite Phase finishes:
   - calculate current eligible catch pool;
   - apply all weight modifiers;
   - roll one Fish species.
7. Begin the **Landing Phase** for that Fish.
8. Fish is landed automatically.
9. Award:
   - Fish quantity;
   - Fishing XP based on the actual Fish caught;
   - Species Mastery XP;
   - possible Aquatic Find.
10. Consume Bait if not preserved.
11. Immediately begin next Bite Phase.
12. Continue indefinitely until planner / player stops.

There is no manual hook button.

There is no reaction-time minigame.

---

# 5. FISHING XP COMES FROM THE FISH

Fishing XP is **not primarily awarded for waiting at a Spot**.

It is awarded when a Fish is successfully landed.

Therefore:

- common small Fish give less XP;
- harder / rarer Fish give more XP;
- higher-tier Fish give more XP;
- catching multiple Fish gives XP for each Fish caught.

This makes the actual catch meaningful.

Two players Fishing the same Spot can have different XP/hour because their setups produce different catch mixes.

---

# 6. NO FAILED NORMAL CATCHES

If:

- the Fishing Spot is unlocked;
- the Rod requirement is met;
- the Fish species is currently eligible;

then the selected Fish is eventually landed.

Normal Fishing has no random:

- line break;
- missed hook;
- Fish escaped;
- bait wasted with no catch.

Difficulty is represented through:

- Bite Time;
- Fish Fight;
- Landing Time;
- catch-pool rarity.

This keeps the profession predictable enough for long idle sessions.

---

# 7. BITE PHASE

Every Fishing Spot has:

**Base Bite Time**

The Bite Phase represents:

- casting;
- waiting;
- Fish approaching;
- Fish taking the bait/lure.

Bite Time is affected by:

- Rod Bite Speed;
- Tackle;
- profession clothing;
- jewelry;
- Specialization;
- Species / Spot effects where appropriate;
- global Fishing modifiers.

No Fish is selected until Bite Phase completes.

---

# 8. CATCH-POOL ROLL

After Bite Phase:

1. Build list of currently unlocked Fish in the Spot.
2. Start from each Fish's Base Weight.
3. Apply:
   - Bait multiplier;
   - Tackle multiplier;
   - Specialization multiplier;
   - Species Mastery weight bonus;
   - Preferred Species bonus;
   - gear / jewelry weight effects.
4. Normalize final weights to 100%.
5. Roll one Fish.

Formula concept:

**Effective Weight = Base Weight × all applicable weight modifiers**

Final chance:

**Fish Effective Weight / Total Eligible Effective Weight**

The UI must display the actual resulting percentages.

---

# 9. RARITY IS A CATCH-POOL PROPERTY

Fishing Fish can be:

- Common;
- Uncommon;
- Rare;
- Very Rare.

This is **not item rarity**.

A Very Rare Fish is still one normal item stack.

Rarity only describes:

- Base Weight;
- Fight;
- XP;
- targeting difficulty.

No random item-quality variants are created.

---

# 10. BASE CATCH WEIGHTS

When all four Fish in a Spot are unlocked and no setup changes weights:

| Rarity | Base Weight |
|---|---:|
| Common | 46 |
| Uncommon | 30 |
| Rare | 18 |
| Very Rare | 6 |

Baseline percentages therefore begin at:

- 46%;
- 30%;
- 18%;
- 6%.

Bait / Tackle / Specialization can change this significantly.

---

# 11. FISH UNLOCKS INSIDE EACH TIER

Every Tier Spot introduces four Fish gradually.

Pattern:

- Tier start → Common;
- +2 levels → Uncommon;
- +5 levels → Rare;
- +8 levels → Very Rare.

Example T4:

- Level 31 → Common;
- Level 33 → Uncommon;
- Level 36 → Rare;
- Level 39 → Very Rare.

Locked Fish are completely excluded from the pool.

Weights renormalize across currently eligible Fish.

---

# 12. LANDING PHASE

After a Fish is selected, the Landing Phase begins.

Each Fish has:

**Fight**

The Rod provides:

**Fishing Power**

Higher Fight increases Landing Time.

Higher Fishing Power decreases it.

There is no random failure.

---

# 13. LANDING TIME FORMULA

Recommended baseline:

**Landing Time = 0.75s + (Fish Fight / Final Fishing Power × 0.75s)**

then apply:

- Tackle Landing modifiers;
- clothing;
- jewelry;
- Specialization;
- Species Mastery;
- global Fishing modifiers.

Minimum final Landing Time:

**0.60 seconds**

This ensures Fishing Power remains useful without making landing instantaneous.

---

# 14. FISH FIGHT

Fish Fight scales by:

- Tier;
- Rarity.

Baseline Tier Fight values:

| Tier | Base Fight |
|---|---:|
| T1 | 8 |
| T2 | 12 |
| T3 | 17 |
| T4 | 23 |
| T5 | 30 |
| T6 | 38 |
| T7 | 47 |
| T8 | 57 |
| T9 | 68 |
| T10 | 80 |

Rarity multipliers:

| Rarity | Fight Multiplier |
|---|---:|
| Common | 0.80x |
| Uncommon | 1.00x |
| Rare | 1.30x |
| Very Rare | 1.70x |

The exact final Fight values are listed in the complete Fish table.

---

# 15. FISHING SPOTS

Fishing uses 10 primary progression Spots.

These are interface activities, not a requirement for physical world navigation.

| Tier | Fishing Spot | Unlock Lvl | Required Rod | Base Bite Time | Aquatic Find |
|---|---|---|---|---|---|
| T1 | Meadow Brook | 1 | Old Handline | 3.20s | River Weed |
| T2 | Reedmere Pond | 11 | Reed Rod | 3.40s | Freshwater Mussel |
| T3 | Silverrun River | 21 | Alder Rod | 3.60s | Crayfish |
| T4 | Brackwater Estuary | 31 | Ironwood Rod | 3.80s | Brine Kelp |
| T5 | Embercoast | 41 | Silverpine Rod | 4.00s | Ember Coral |
| T6 | Frostmere Lake | 51 | Emberwood Rod | 4.20s | Frost Pearl |
| T7 | Stormreach Shoals | 61 | Frostbark Rod | 4.40s | Stormshell |
| T8 | Aetherdeep Basin | 71 | Stormwillow Rod | 4.60s | Aether Pearl |
| T9 | Umbral Trench | 81 | Aetherwood Rod | 4.80s | Umbral Ink |
| T10 | Astral Expanse | 91 | Umbralwood Rod | 5.00s | Star Coral |

Every Spot:

- has a fixed identity;
- has four main Fish;
- has one associated Aquatic Find;
- shows exact Catch-Pool analytics.

---

# 16. COMPLETE BASELINE FISH LIST

Fishing v1.0 contains:

**40 Fish species**

Four per Tier.

| Tier | Spot | Lvl | Fish | Rarity | Base Weight | Water Tag | Predator | Preferred Bait | Base Qty | Fight | XP/Fish | Cooking Class |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T1 | Meadow Brook | 1 | Brook Minnow | Common | 46 | Surface | No | Worm | 2 | 6 | 6 | Small / Schooling |
| T1 | Meadow Brook | 3 | River Perch | Uncommon | 30 | Midwater | No | Insect | 1 | 8 | 8 | Basic Fish |
| T1 | Meadow Brook | 6 | Mudfin | Rare | 18 | Bottom | No | Worm | 1 | 10 | 11 | Hearty Fish |
| T1 | Meadow Brook | 9 | Glassscale Trout | Very Rare | 6 | Midwater | Yes | Insect | 1 | 14 | 16 | Delicate Fish |
| T2 | Reedmere Pond | 11 | Reed Carp | Common | 46 | Bottom | No | Worm | 1 | 10 | 9 | Hearty Fish |
| T2 | Reedmere Pond | 13 | Marsh Bream | Uncommon | 30 | Midwater | No | Insect | 1 | 12 | 12 | Basic Fish |
| T2 | Reedmere Pond | 16 | Blueback Pike | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 16 | 16 | Predator Fish |
| T2 | Reedmere Pond | 19 | Moonbelly Eel | Very Rare | 6 | Bottom | Yes | Shell | 1 | 20 | 23 | Oily Fish |
| T3 | Silverrun River | 21 | Silver Trout | Common | 46 | Surface | No | Insect | 1 | 14 | 14 | Delicate Fish |
| T3 | Silverrun River | 23 | River Salmon | Uncommon | 30 | Midwater | No | Insect | 1 | 17 | 19 | Oily Fish |
| T3 | Silverrun River | 26 | Speckled Pike | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 22 | 25 | Predator Fish |
| T3 | Silverrun River | 29 | Crystal Darter | Very Rare | 6 | Bottom | No | Shell | 1 | 29 | 36 | Rare Delicacy |
| T4 | Brackwater Estuary | 31 | Brine Mullet | Common | 46 | Surface | No | Worm | 2 | 18 | 21 | Basic Fish |
| T4 | Brackwater Estuary | 33 | Tide Bass | Uncommon | 30 | Midwater | Yes | Fish Strip | 1 | 23 | 28 | Hearty Fish |
| T4 | Brackwater Estuary | 36 | Marsh Eel | Rare | 18 | Bottom | Yes | Shell | 1 | 30 | 38 | Oily Fish |
| T4 | Brackwater Estuary | 39 | Pearlscale | Very Rare | 6 | Bottom | No | Shell | 1 | 39 | 55 | Rare Delicacy |
| T5 | Embercoast | 41 | Cinder Sardine | Common | 46 | Surface | No | Insect | 2 | 24 | 30 | Small / Schooling |
| T5 | Embercoast | 43 | Ashscale Snapper | Uncommon | 30 | Midwater | Yes | Fish Strip | 1 | 30 | 40 | Hearty Fish |
| T5 | Embercoast | 46 | Emberfin Tuna | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 39 | 54 | Oily Fish |
| T5 | Embercoast | 49 | Flare Ray | Very Rare | 6 | Bottom | No | Shell | 1 | 51 | 78 | Rare Delicacy |
| T6 | Frostmere Lake | 51 | Ice Perch | Common | 46 | Surface | No | Insect | 1 | 30 | 42 | Basic Fish |
| T6 | Frostmere Lake | 53 | Frost Salmon | Uncommon | 30 | Midwater | No | Insect | 1 | 38 | 57 | Oily Fish |
| T6 | Frostmere Lake | 56 | Snow Pike | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 49 | 76 | Predator Fish |
| T6 | Frostmere Lake | 59 | Glacial Sturgeon | Very Rare | 6 | Bottom | No | Shell | 1 | 65 | 109 | Premium Fish |
| T7 | Stormreach Shoals | 61 | Storm Mackerel | Common | 46 | Surface | No | Insect | 2 | 38 | 57 | Small / Schooling |
| T7 | Stormreach Shoals | 63 | Thunderfin Bream | Uncommon | 30 | Midwater | No | Worm | 1 | 47 | 77 | Hearty Fish |
| T7 | Stormreach Shoals | 66 | Razor Barracuda | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 61 | 103 | Predator Fish |
| T7 | Stormreach Shoals | 69 | Tempest Ray | Very Rare | 6 | Bottom | No | Shell | 1 | 80 | 148 | Rare Delicacy |
| T8 | Aetherdeep Basin | 71 | Aether Carp | Common | 46 | Surface | No | Luminous | 1 | 46 | 75 | Premium Fish |
| T8 | Aetherdeep Basin | 73 | Prism Eel | Uncommon | 30 | Bottom | Yes | Shell | 1 | 57 | 101 | Oily Fish |
| T8 | Aetherdeep Basin | 76 | Aether Tuna | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 74 | 135 | Premium Fish |
| T8 | Aetherdeep Basin | 79 | Skyglass Sturgeon | Very Rare | 6 | Bottom | No | Luminous | 1 | 97 | 195 | Rare Delicacy |
| T9 | Umbral Trench | 81 | Gloom Cod | Common | 46 | Bottom | No | Shell | 1 | 54 | 97 | Hearty Fish |
| T9 | Umbral Trench | 83 | Shade Eel | Uncommon | 30 | Bottom | Yes | Shell | 1 | 68 | 131 | Oily Fish |
| T9 | Umbral Trench | 86 | Nightfin Shark | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 88 | 175 | Predator Fish |
| T9 | Umbral Trench | 89 | Abyssal Ray | Very Rare | 6 | Bottom | No | Luminous | 1 | 116 | 252 | Rare Delicacy |
| T10 | Astral Expanse | 91 | Star Sardine | Common | 46 | Surface | No | Luminous | 2 | 64 | 124 | Small / Schooling |
| T10 | Astral Expanse | 93 | Comet Tuna | Uncommon | 30 | Midwater | Yes | Fish Strip | 1 | 80 | 167 | Premium Fish |
| T10 | Astral Expanse | 96 | Celestial Sturgeon | Rare | 18 | Bottom | No | Luminous | 1 | 104 | 223 | Premium Fish |
| T10 | Astral Expanse | 99 | Starveil Marlin | Very Rare | 6 | Midwater | Yes | Luminous | 1 | 136 | 322 | Mythic Delicacy |

The Fish names, roles, unlocks, weights, Fight values, XP, and Cooking classes in this table are the current baseline canon.

Cooking will later define the exact recipes / healing values built from these Fish.

---

# 17. FISH FOOD CLASSES

The Cooking Class column is a bridge into Cooking.

Current classes:

## Small / Schooling

Usually:

- Base Quantity 2;
- efficient bulk food ingredients;
- useful for Fish Strip / bait preparation;
- lower XP per individual Fish.

## Basic Fish

Reliable direct Cooking ingredient.

## Hearty Fish

Higher-sustain meal ingredient.

## Delicate Fish

Better-quality Cooking ingredient, often lower bulk.

## Oily Fish

Useful for:

- Cooking;
- future Fish Oil / Alchemy recipes.

## Predator Fish

Higher-value meat and advanced recipes.

## Premium Fish

Late-game direct / recipe ingredient.

## Rare Delicacy

High Cooking value; lower supply.

## Mythic Delicacy

T10 prestige/endgame Cooking ingredient.

Cooking owns final meal design.

Fishing owns raw acquisition.

---

# 18. SCHOOLING FISH

Some Fish have:

**Base Quantity 2**

Examples:

- Brook Minnow;
- Brine Mullet;
- Cinder Sardine;
- Storm Mackerel;
- Star Sardine.

These represent Fish commonly caught in small schools.

Double Catch effects multiply the full caught quantity.

Example:

Base Quantity 2 + Double Catch proc:

**4 Fish**

XP is awarded for all 4 Fish.

---

# 19. DOUBLE CATCH

Fishing uses:

**Double Catch Chance**

When it triggers:

**final Fish quantity ×2**

Double Catch affects:

- item quantity;
- Fishing XP;
- Species Mastery XP.

Recommended cap:

**60%**

Any future effect above 60% should be converted into other Fishing bonuses rather than raising the cap.

---

# 20. AQUATIC FINDS

Every landed Fish independently has a chance to produce the Spot's Aquatic Find.

| Tier | Aquatic Find | Base Chance per Landed Catch | Main Consumers |
|---|---|---|---|
| T1 | River Weed | 4.0% | Cooking / Alchemy minor ingredient |
| T2 | Freshwater Mussel | 4.0% | Cooking |
| T3 | Crayfish | 4.0% | Cooking / bait recipes |
| T4 | Brine Kelp | 4.0% | Cooking / Alchemy |
| T5 | Ember Coral | 3.5% | Alchemy / Jewelcrafting reagent |
| T6 | Frost Pearl | 3.5% | Jewelcrafting / Alchemy |
| T7 | Stormshell | 3.0% | Jewelcrafting / advanced bait |
| T8 | Aether Pearl | 2.5% | Jewelcrafting / profession jewelry |
| T9 | Umbral Ink | 2.5% | Alchemy / Tailoring dye-reagent |
| T10 | Star Coral | 2.0% | Endgame Jewelcrafting / Alchemy |

Aquatic Finds do not replace the Fish.

They are bonus resources.

They help Fishing connect to:

- Cooking;
- Alchemy;
- Jewelcrafting;
- Tailoring;
- advanced bait.

---

# 21. AQUATIC FIND CHANCE

Base chance depends on Spot:

- early Spots: 4%;
- mid Spots: 3–3.5%;
- late Spots: 2–2.5%.

This is intentional.

Late Aquatic Finds are individually more valuable.

Aquatic Find Chance is improved by:

- Deepwater gear;
- selected jewelry;
- Specialization;
- Rod effects;
- facility / account effects where appropriate.

Recommended hard cap:

**50%**

---

# 22. NO JUNK CATCH TABLE

Baseline Fishing has no:

- Boots;
- broken bottles;
- trash;
- worthless junk.

Every normal cycle produces:

- useful Fish;
- possibly useful Aquatic Find.

The profession should feel productive.

A future collection/event system can add novelty catches, but they should not pollute normal progression.

---

# 23. ROD — PRIMARY FISHING TOOL

Fishing's primary Tool is:

**Fishing Rod**

| Tier | Rod | Equip Lvl | Fishing Power | Bite Speed | Source | Mechanical Effect |
|---|---|---|---|---|---|---|
| T0 | Old Handline | 1 | 5 | 0% | Starter | None |
| T1 | Reed Rod | 5 | 7 | 4% | Fletching | Bait Preservation +3 pp |
| T2 | Alder Rod | 15 | 10 | 8% | Fletching | Landing Time -3% |
| T3 | Ironwood Rod | 25 | 13 | 12% | Fletching | Bait Preservation +5 pp |
| T4 | Silverpine Rod | 35 | 17 | 16% | Fletching | Rare/Very Rare weight +5% |
| T5 | Emberwood Rod | 45 | 22 | 20% | Fletching | Double Catch +3 pp |
| T6 | Frostbark Rod | 55 | 28 | 24% | Fletching | Landing Time -6% |
| T7 | Stormwillow Rod | 65 | 35 | 28% | Fletching | Aquatic Find chance +10% |
| T8 | Aetherwood Rod | 75 | 43 | 32% | Fletching | Rare/Very Rare weight +8% |
| T9 | Umbralwood Rod | 85 | 52 | 36% | Fletching | Bait Preservation +8 pp |
| T10 | Starwood Rod | 95 | 62 | 40% | Fletching | Preferred Species weight +15%; Double Catch +5 pp |

Rods provide:

- Fishing Power;
- Bite Speed;
- selected mechanical effects.

Rods are permanent.

No durability.

---

# 24. ROD PROGRESSION SOURCE

Recommended crafting owner:

**Fletching**

with components from:

- Woodcutting;
- Smithing;
- Fishing materials at later Tiers.

Fishing defines:

- equip level;
- Fishing Power;
- Bite Speed;
- profession effect.

Fletching later defines:

- exact recipe;
- wood components;
- strings;
- fittings.

---

# 25. ROD UPGRADE CHAIN

Recommended baseline:

**Previous Rod + new wood / fittings / line components → next Rod**

Rods normally upgrade through the previous Rod.

Benefits:

- old Tool remains meaningful;
- continuous progression;
- worker hand-me-downs;
- strong Woodcutting / Fletching dependency.

---

# 26. SPOT ROD REQUIREMENTS

A newly unlocked Spot is normally accessible using the previous major Rod.

Example:

T5 Embercoast requires:

**Silverpine Rod**

The resources acquired during T5 progression later help produce:

**Emberwood Rod**

for stronger T5 Fishing and preparation for T6.

This prevents circular progression deadlocks.

---

# 27. BAIT

Bait is optional.

Fishing always works with:

**No Bait**

Bait changes Catch-Pool weighting.

It does not make Fishing possible or impossible.

| Fishing Lvl | Bait | Primary Source | Pool Effect | Role |
|---|---|---|---|---|
| 1 | Worm Bait | Farming / Foraging | Matching species weight ×1.75 | Common freshwater targeting |
| 21 | Insect Bait | Foraging / Farming | Matching species weight ×1.75 | Surface / river fish |
| 41 | Fish Strip | Cooking from suitable raw fish | Matching species weight ×2.00 | Predator targeting |
| 61 | Shell Bait | Fishing / Cooking aquatic resources | Matching species weight ×2.00 | Bottom / eel / ray targeting |
| 81 | Luminous Bait | Alchemy + Runecrafting inputs | Matching species weight ×2.25; all Very Rare ×1.10 | Late rare targeting |

Bait creates targeting decisions without forcing constant consumable use.

---

# 28. BAIT CONSUMPTION

If Bait is active:

- 1 Bait is reserved for the Catch cycle;
- after Fish is landed, Bait Preservation is rolled;
- if preserved, Bait is not consumed;
- otherwise 1 Bait is consumed.

There are no failed bites consuming Bait in baseline Fishing.

---

# 29. BAIT PRESERVATION

Fishing uses:

**Bait Preservation Chance**

Sources:

- Rod;
- clothing;
- jewelry;
- Mastery;
- Specialization;
- Estate support.

Hard cap:

**60%**

This means consumable targeting always retains some real economic cost.

---

# 30. PREFERRED BAIT

Every Fish has one Preferred Bait.

Base matching multipliers:

- Worm ×1.75;
- Insect ×1.75;
- Fish Strip ×2.00;
- Shell ×2.00;
- Luminous ×2.25.

Luminous Bait additionally gives:

**all Very Rare Fish ×1.10**

Using non-matching Bait does not penalize a Fish.

It simply fails to give the preferred multiplier.

---

# 31. BAIT ECONOMY

Recommended supply network:

## Worm Bait

Main sources:

- Farming;
- Foraging.

## Insect Bait

Main sources:

- Foraging;
- Farming.

## Fish Strip

Produced by Cooking from suitable raw Fish.

This deliberately creates:

**Fishing → Cooking → Fishing**

## Shell Bait

Produced from:

- selected Aquatic Finds;
- Cooking preparation.

## Luminous Bait

Produced through:

- Alchemy;
- Runecrafting-linked materials.

Late rare Fishing therefore interacts with multiple professions.

---

# 32. TACKLE

Tackle is a permanent reusable Fishing accessory.

It does not have durability.

One Tackle is active at a time.

| Fishing Lvl | Tackle | Effect | Primary Use |
|---|---|---|---|
| 5 | Cork Float | Surface species weight ×1.45; Bite Time -5% | Surface / common targeting |
| 15 | Weighted Sinker | Bottom species weight ×1.60; Bite Time +5% | Bottom targeting |
| 25 | Spinner Lure | Predator species weight ×1.60; Landing Time -5% vs Predator | Predator targeting |
| 35 | Fine Hook | Rare + Very Rare weight ×1.25; Bite Time +3% | Rare targeting |
| 45 | Double Hook | Double Catch +10 pp; Landing Time +10% | Bulk quantity |
| 55 | Deepwater Rig | Bottom ×1.80; Very Rare ×1.10; Surface ×0.75 | Deep / rare |
| 65 | Barbless Master Hook | Fishing Mastery XP +12%; Bait Preservation +10 pp | Mastery |
| 75 | Aether Spinner | Predator ×1.40; Rare+ ×1.20; Bite Time -6% | Late predator / rare |
| 85 | Umbral Sinker | Bottom ×1.50; Rare+ ×1.25; Landing Time -8% | Late deep targeting |
| 95 | Astral Lure | Preferred Species weight ×1.35; Very Rare ×1.10 | Endgame precision targeting |

Tackle is primarily about:

**changing Catch-Pool shape**

rather than simply increasing total Fishing speed.

---

# 33. WATER TAGS

Fish use:

- Surface;
- Midwater;
- Bottom.

Tackle can target these tags.

Example:

**Weighted Sinker**

makes Bottom Fish substantially more common.

This creates intuitive Fishing setup logic.

---

# 34. PREDATOR TAG

Some Fish are tagged:

**Predator**

Examples:

- Pike;
- Tuna;
- Barracuda;
- Shark;
- Marlin.

Predator-specific Tackle and Fish Strip Bait allow intentional targeting.

This gives a second axis beyond Water Tag.

---

# 35. PREFERRED SPECIES — ENDGAME PRECISION TOOL

At Fishing 95, the player unlocks:

**Preferred Species**

The player can mark one currently eligible Fish in the selected Spot.

Preferred Species by itself gives:

**no bonus**

It becomes useful through:

- Starwood Rod;
- Astral Lure;
- Master Angler gear;
- Astral Angler jewelry.

This prevents direct perfect targeting early while giving endgame Fishing a strong precision system.

---

# 36. WHY NO DIRECT FISH BUTTON

The player should not bypass the catch-pool system by selecting:

> Catch Starveil Marlin

The profession's identity is exactly:

- understand pool;
- choose Bait;
- choose Tackle;
- choose build;
- push desired Fish probability.

Endgame precision can become strong, but not absolute.

---

# 37. PROFESSION CLOTHING

Fishing-specific clothing begins around T3.

| Unlock | Item | Fishing Effect |
|---|---|---|
| T3 / L25 | Riverhand Hat | Bite Time -4% |
| T3 / L25 | Riverhand Coat | Bait Preservation +4 pp |
| T3 / L25 | Riverhand Trousers | Fishing Mastery XP +4% |
| T3 / L25 | Riverhand Gloves | Landing Time -4% |
| T3 / L25 | Riverhand Boots | Aquatic Find chance +6% |
| Set | Riverhand 5/5 | Double Catch +4 pp |
| T5 / L45 | Provisioner Cap | Bite Time -5% |
| T5 / L45 | Provisioner Vest | Double Catch +5 pp |
| T5 / L45 | Provisioner Leggings | Bait Preservation +5 pp |
| T5 / L45 | Provisioner Gloves | Common / Uncommon weight +8% |
| T5 / L45 | Provisioner Boots | Landing Time -5% |
| Set | Provisioner 5/5 | Double Catch +6 pp; Rare+ weight -5% |
| T7 / L65 | Deepwater Hood | Bottom weight +12% |
| T7 / L65 | Deepwater Coat | Aquatic Find chance +12% |
| T7 / L65 | Deepwater Leggings | Very Rare weight +8% |
| T7 / L65 | Deepwater Gloves | Landing Time -7% |
| T7 / L65 | Deepwater Boots | Bottom fish Landing Time -8% |
| Set | Deepwater 5/5 | Bottom ×1.10 additional; Aquatic Find +10% |
| T9 / L85 | Master Angler Hat | Rare / Very Rare weight +10% |
| T9 / L85 | Master Angler Coat | Bait Preservation +7 pp |
| T9 / L85 | Master Angler Legguards | Fishing Mastery XP +8% |
| T9 / L85 | Master Angler Gloves | Double Catch +6 pp |
| T9 / L85 | Master Angler Boots | Landing Time -8% |
| Set | Master Angler 5/5 | Preferred Species ×1.10; Bite Time -5% |

Players can mix pieces.

Full sets are optional focused builds.

---

# 38. CLOTHING BUILD IDENTITIES

## Riverhand

General early Fishing.

## Provisioner

Bulk food Fish.

## Deepwater

Bottom species + Aquatic Finds.

## Master Angler

Rare species + endgame targeting.

This creates multiple valid Fishing builds.

---

# 39. PROFESSION JEWELRY

| Fishing Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Angler's Ring | Bait Preservation +8 pp | Bait economy |
| 25 | River Charm | Bite Time -5% | General speed |
| 35 | Catcher's Band | Double Catch +5 pp | Quantity |
| 45 | Predator Pendant | Predator weight ×1.15; Landing Time -5% vs Predator | Predator targeting |
| 55 | Bottomfinder Loop | Bottom weight ×1.18 | Bottom fish |
| 65 | Schoolman's Chain | Common / Uncommon Double Catch +8 pp | Bulk food |
| 75 | Pearlseeker Ring | Aquatic Find chance +20% | Aquatic materials |
| 85 | Umbral Hook Charm | Rare+ weight ×1.15; Landing Time -5% | Rare fishing |
| 95 | Astral Angler Sigil | Preferred Species ×1.15; Very Rare ×1.10 | Endgame precision |

Jewelry is situational.

Examples:

- preserve expensive Luminous Bait;
- push Common Fish for Cooking;
- hunt Rare Fish;
- farm Aether Pearls.

No single linear jewelry upgrade invalidates every earlier piece.

---

# 40. FISHING LOADOUTS

Recommended saved presets:

## Food Supply

- Provisioner gear;
- Double Hook;
- no / cheap Bait;
- Provisioner Specialization.

## Predator Hunt

- Fish Strip;
- Spinner;
- Predator jewelry.

## Bottom Fishing

- Shell Bait;
- Sinker / Deepwater Rig;
- Deepwater build.

## Rare Catch

- matching Bait;
- Fine Hook / Astral Lure;
- rare-weight gear.

## Mastery

- Barbless Hook;
- Mastery clothing;
- selected species pool setup.

---

# 41. SPECIES MASTERY

Every Fish species has:

**Mastery 1–100**

Examples:

- Brook Minnow Mastery;
- Blueback Pike Mastery;
- Flare Ray Mastery;
- Starveil Marlin Mastery.

Mastery increases as that Fish is actually caught.

Therefore rare Fish naturally take longer to master.

---

# 42. SPECIES MASTERY MILESTONES

| Species Mastery | Permanent Species Effect |
|---|---|
| 10 | Landing Time -2% for this species |
| 25 | Effective Catch-Pool Weight +5% multiplicative for this species |
| 50 | Double Catch +5 percentage points for this species |
| 75 | Bait Preservation +10 percentage points when this species is landed |
| 100 | Effective Weight +10% additional and Double Catch +5 pp additional for this species |

These bonuses are permanent for the species.

Species Mastery makes the player gradually better at intentionally catching familiar Fish.

---

# 43. MASTERY XP

Recommended:

**Species Mastery XP = Fish Fishing XP × 0.40 × Fish Quantity**

then apply Mastery-XP bonuses.

Therefore:

- rare Fish give more Mastery XP per catch;
- multiple Fish give more Mastery XP;
- Barbless / Mastery gear can create a dedicated Mastery build.

---

# 44. SKILL-WIDE FISHING MASTERY

Skill-Wide Mastery:

**sum of Fish Mastery / maximum total Fish Mastery**

Recommended milestones:

| Completion | Reward |
|---:|---|
| 10% | Bite Time -2% |
| 25% | Bait Preservation +5 pp; second Fishing preset |
| 50% | Worker Fishing efficiency +5%; Aquatic Find +5% |
| 75% | Rare / Very Rare weight ×1.10; third Fishing preset |
| 100% | Landing Time -5%; Double Catch +5 pp; Master Angler completion marker |

100% is completion content.

Not required for normal progression.

---

# 45. FISHING SPECIALIZATIONS

Unlock:

**Fishing Level 35**

Three baseline Specializations:

1. Provisioner;
2. Trophy Angler;
3. Deepwater Fisher.

They are freely reversible outside an active Fishing cycle.

---

# 46. PROVISIONER

Focus:

**bulk edible Fish**

Effects:

- Bite Time -8%;
- Double Catch +12 pp;
- Bait Preservation +10 pp;
- Common / Uncommon weight ×1.10;
- Very Rare weight ×0.90.

Best for:

- Cooking;
- Combat food supply;
- workers;
- common ingredient stockpiles.

---

# 47. TROPHY ANGLER

Focus:

**Rare / Very Rare Fish**

Effects:

- Rare weight ×1.25;
- Very Rare weight ×1.40;
- Landing Time -12% on Rare / Very Rare;
- Double Catch -5 pp.

Best for:

- rare Cooking ingredients;
- Mastery;
- collection;
- endgame precision.

---

# 48. DEEPWATER FISHER

Focus:

**Bottom Fish + Aquatic Finds**

Effects:

- Bottom weight ×1.50;
- Aquatic Find Chance +30% multiplicative;
- Landing Time -10% on Bottom Fish;
- Surface weight ×0.85.

Best for:

- Rays;
- Eels;
- Sturgeon;
- Pearls / Coral / Ink.

---

# 49. SPECIALIZATION SWITCHING

Rules:

- free;
- outside active Fishing cycle;
- changing Specialization cancels current Bite/Landing progress;
- no Bait is consumed on a cancelled Bite before the Fish is landed;
- saved Fishing presets remember Specialization.

No respec currency.

---

# 50. ANGLER STATION — ESTATE SUPPORT

Fishing does not require Estate infrastructure to function.

The player can always personally Fish if:

- level requirement;
- Rod requirement;

are met.

Estate adds:

**Angler Station**

| Facility | Estate Stage | Fishing Req. | Main Unlocks |
|---|---|---|---|
| Angler Station I | House | 20 | 2 Fishing presets; exact catch-pool analytics; tackle storage |
| Angler Station II | Lodge | 40 | Bait reserve rules; 4-step queue; +5 pp Bait Preservation cap room |
| Angler Station III | Manor | 60 | Worker Fishing assignments; 2 worker templates; +3% worker Fishing efficiency |
| Angler Station IV | Estate | 80 | Worker teams; automatic bait restock policies; +6% worker efficiency |
| Angler Station V | Holdings / late Estate | 100 | Astral worker support; advanced schedules; +10% worker efficiency |

This facility improves:

- planning;
- worker support;
- bait logistics;
- analytics;
- presets.

It does not replace personal Rod / gear progression.

---

# 51. FISHING WORKERS

Workers can Fish established Spots.

Worker data:

- Fishing Proficiency;
- Rod;
- clothing;
- jewelry;
- Tackle;
- Bait policy;
- assigned Spot;
- eligible proven Fish;
- production rate.

Workers consume real Bait when configured.

They do not generate Fish from nothing.

---

# 52. ESTABLISHING A FISHING SPOT

A Spot becomes:

**Established**

after the player personally lands:

**25 Fish from that Spot**

This allows worker assignment.

However:

workers still cannot catch a species until that species is:

**Proven**

---

# 53. PROVEN FISH

A Fish species becomes:

**Proven**

for workers at:

**Species Mastery 10**

Before Mastery 10:

- the player can catch it;
- workers exclude it from their catch pool.

After Mastery 10:

- workers may roll it normally.

This preserves the principle:

**player discovers / learns the catch; workers maintain supply later.**

---

# 54. WORKER FISHING PROFICIENCY

Base Worker Fishing Efficiency:

**50% + (Proficiency × 0.50%)**

Therefore:

- Proficiency 1 → 50.5%;
- 50 → 75%;
- 100 → 100%.

Gear and Angler Station modifiers apply afterward.

Workers gain Fishing Proficiency by Fishing.

They do not have personal Species Mastery.

---

# 55. FRONTIER SPECIES PENALTY

On the highest Fishing Tier currently unlocked, worker efficiency against a Proven species depends on player Species Mastery.

| Species Mastery | Worker Frontier Multiplier |
|---:|---:|
| 10–24 | 75% |
| 25–49 | 85% |
| 50–74 | 92.5% |
| 75–99 | 97.5% |
| 100 | 100% |

Older Tier Fish have no Frontier penalty.

This means player expertise gradually teaches the Estate how to automate new Fishing.

---

# 56. WORKER CATCH POOL

Worker Catch Pool uses:

- only unlocked Fish;
- only Proven Fish;
- worker Bait;
- worker Tackle;
- worker equipment effects.

Excluded species are removed and the remaining pool is renormalized.

Workers never discover a Fish for the player.

---

# 57. WORKER BAIT FAILURE POLICY

If a worker's configured Bait runs out:

recommended options:

1. Continue with No Bait;
2. Use configured fallback Bait;
3. Pause.

Default:

**Continue with No Bait**

This prevents silent idle stoppage.

The player can change policy.

---

# 58. WORKER EQUIPMENT HAND-ME-DOWNS

Old Fishing gear naturally moves to workers.

Player:

**Starwood Rod**

Workers:

- Stormwillow Rod;
- Aetherwood Rod;
- Umbralwood Rod.

Same for:

- clothing;
- jewelry;
- tackle.

Worker UI should support templates / bulk assignment.

---

# 59. ACTIVITY PLANNER — FISHING

Starter rules:

- Fish indefinitely;
- stop at selected Fish quantity;
- stop at Fishing Level;
- stop when Bait reaches reserve.

Early infrastructure:

- stop at Species Mastery target;
- 2-step queue.

Lodge:

- stop at Aquatic Find quantity;
- 4-step queue;
- Bait fallback;
- reserve logic.

Manor:

- 6-step queue;
- change Fishing preset;
- switch Spot;
- cross-profession transition into Cooking.

Estate:

- 10-step queue;
- worker Fish reserves;
- automatic Bait restock policies.

Holdings:

- team-based food supply;
- multiple Spot maintenance rules.

---

# 60. CROSS-PROFESSION FISHING → COOKING PLANNER

Important later workflow:

> Fish River Salmon until Bank contains 2,000  
> → switch to Cooking  
> → cook until finished  
> → return to Fishing.

Another:

> Maintain 5,000 cooked food.  
> If cooked food falls below target:
> - Fishing worker supplies Fish;
> - Cooking worker processes Fish.

This becomes a major Estate automation loop.

---

# 61. BAIT RESERVE RULE

Example:

**Luminous Bait Reserve: 500**

Fishing can use Luminous Bait only while Bank >500.

When reserve is reached:

- switch to fallback Bait;
- or continue with No Bait.

No hard activity failure unless the player explicitly requests:

**Pause if Bait unavailable**

---

# 62. AQUATIC FIND PLANNER

Later planner can target:

- Aether Pearl quantity;
- Star Coral quantity;
- Umbral Ink quantity.

Because Aquatic Finds are probabilistic, UI should show:

- expected/hour;
- ETA range;
- current chance.

The game should clearly indicate that ETA is probabilistic.

---

# 63. COMPLETE FISHING SPOT PROGRESSION

| Tier | Fishing Spot | Unlock Lvl | Required Rod | Base Bite Time | Aquatic Find |
|---|---|---|---|---|---|
| T1 | Meadow Brook | 1 | Old Handline | 3.20s | River Weed |
| T2 | Reedmere Pond | 11 | Reed Rod | 3.40s | Freshwater Mussel |
| T3 | Silverrun River | 21 | Alder Rod | 3.60s | Crayfish |
| T4 | Brackwater Estuary | 31 | Ironwood Rod | 3.80s | Brine Kelp |
| T5 | Embercoast | 41 | Silverpine Rod | 4.00s | Ember Coral |
| T6 | Frostmere Lake | 51 | Emberwood Rod | 4.20s | Frost Pearl |
| T7 | Stormreach Shoals | 61 | Frostbark Rod | 4.40s | Stormshell |
| T8 | Aetherdeep Basin | 71 | Stormwillow Rod | 4.60s | Aether Pearl |
| T9 | Umbral Trench | 81 | Aetherwood Rod | 4.80s | Umbral Ink |
| T10 | Astral Expanse | 91 | Umbralwood Rod | 5.00s | Star Coral |

Spots are interface activities.

They can later receive world/lore presentation without changing the profession rules.

---

# 64. COMPLETE FISH SPECIES DATA

| Tier | Spot | Lvl | Fish | Rarity | Base Weight | Water Tag | Predator | Preferred Bait | Base Qty | Fight | XP/Fish | Cooking Class |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T1 | Meadow Brook | 1 | Brook Minnow | Common | 46 | Surface | No | Worm | 2 | 6 | 6 | Small / Schooling |
| T1 | Meadow Brook | 3 | River Perch | Uncommon | 30 | Midwater | No | Insect | 1 | 8 | 8 | Basic Fish |
| T1 | Meadow Brook | 6 | Mudfin | Rare | 18 | Bottom | No | Worm | 1 | 10 | 11 | Hearty Fish |
| T1 | Meadow Brook | 9 | Glassscale Trout | Very Rare | 6 | Midwater | Yes | Insect | 1 | 14 | 16 | Delicate Fish |
| T2 | Reedmere Pond | 11 | Reed Carp | Common | 46 | Bottom | No | Worm | 1 | 10 | 9 | Hearty Fish |
| T2 | Reedmere Pond | 13 | Marsh Bream | Uncommon | 30 | Midwater | No | Insect | 1 | 12 | 12 | Basic Fish |
| T2 | Reedmere Pond | 16 | Blueback Pike | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 16 | 16 | Predator Fish |
| T2 | Reedmere Pond | 19 | Moonbelly Eel | Very Rare | 6 | Bottom | Yes | Shell | 1 | 20 | 23 | Oily Fish |
| T3 | Silverrun River | 21 | Silver Trout | Common | 46 | Surface | No | Insect | 1 | 14 | 14 | Delicate Fish |
| T3 | Silverrun River | 23 | River Salmon | Uncommon | 30 | Midwater | No | Insect | 1 | 17 | 19 | Oily Fish |
| T3 | Silverrun River | 26 | Speckled Pike | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 22 | 25 | Predator Fish |
| T3 | Silverrun River | 29 | Crystal Darter | Very Rare | 6 | Bottom | No | Shell | 1 | 29 | 36 | Rare Delicacy |
| T4 | Brackwater Estuary | 31 | Brine Mullet | Common | 46 | Surface | No | Worm | 2 | 18 | 21 | Basic Fish |
| T4 | Brackwater Estuary | 33 | Tide Bass | Uncommon | 30 | Midwater | Yes | Fish Strip | 1 | 23 | 28 | Hearty Fish |
| T4 | Brackwater Estuary | 36 | Marsh Eel | Rare | 18 | Bottom | Yes | Shell | 1 | 30 | 38 | Oily Fish |
| T4 | Brackwater Estuary | 39 | Pearlscale | Very Rare | 6 | Bottom | No | Shell | 1 | 39 | 55 | Rare Delicacy |
| T5 | Embercoast | 41 | Cinder Sardine | Common | 46 | Surface | No | Insect | 2 | 24 | 30 | Small / Schooling |
| T5 | Embercoast | 43 | Ashscale Snapper | Uncommon | 30 | Midwater | Yes | Fish Strip | 1 | 30 | 40 | Hearty Fish |
| T5 | Embercoast | 46 | Emberfin Tuna | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 39 | 54 | Oily Fish |
| T5 | Embercoast | 49 | Flare Ray | Very Rare | 6 | Bottom | No | Shell | 1 | 51 | 78 | Rare Delicacy |
| T6 | Frostmere Lake | 51 | Ice Perch | Common | 46 | Surface | No | Insect | 1 | 30 | 42 | Basic Fish |
| T6 | Frostmere Lake | 53 | Frost Salmon | Uncommon | 30 | Midwater | No | Insect | 1 | 38 | 57 | Oily Fish |
| T6 | Frostmere Lake | 56 | Snow Pike | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 49 | 76 | Predator Fish |
| T6 | Frostmere Lake | 59 | Glacial Sturgeon | Very Rare | 6 | Bottom | No | Shell | 1 | 65 | 109 | Premium Fish |
| T7 | Stormreach Shoals | 61 | Storm Mackerel | Common | 46 | Surface | No | Insect | 2 | 38 | 57 | Small / Schooling |
| T7 | Stormreach Shoals | 63 | Thunderfin Bream | Uncommon | 30 | Midwater | No | Worm | 1 | 47 | 77 | Hearty Fish |
| T7 | Stormreach Shoals | 66 | Razor Barracuda | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 61 | 103 | Predator Fish |
| T7 | Stormreach Shoals | 69 | Tempest Ray | Very Rare | 6 | Bottom | No | Shell | 1 | 80 | 148 | Rare Delicacy |
| T8 | Aetherdeep Basin | 71 | Aether Carp | Common | 46 | Surface | No | Luminous | 1 | 46 | 75 | Premium Fish |
| T8 | Aetherdeep Basin | 73 | Prism Eel | Uncommon | 30 | Bottom | Yes | Shell | 1 | 57 | 101 | Oily Fish |
| T8 | Aetherdeep Basin | 76 | Aether Tuna | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 74 | 135 | Premium Fish |
| T8 | Aetherdeep Basin | 79 | Skyglass Sturgeon | Very Rare | 6 | Bottom | No | Luminous | 1 | 97 | 195 | Rare Delicacy |
| T9 | Umbral Trench | 81 | Gloom Cod | Common | 46 | Bottom | No | Shell | 1 | 54 | 97 | Hearty Fish |
| T9 | Umbral Trench | 83 | Shade Eel | Uncommon | 30 | Bottom | Yes | Shell | 1 | 68 | 131 | Oily Fish |
| T9 | Umbral Trench | 86 | Nightfin Shark | Rare | 18 | Midwater | Yes | Fish Strip | 1 | 88 | 175 | Predator Fish |
| T9 | Umbral Trench | 89 | Abyssal Ray | Very Rare | 6 | Bottom | No | Luminous | 1 | 116 | 252 | Rare Delicacy |
| T10 | Astral Expanse | 91 | Star Sardine | Common | 46 | Surface | No | Luminous | 2 | 64 | 124 | Small / Schooling |
| T10 | Astral Expanse | 93 | Comet Tuna | Uncommon | 30 | Midwater | Yes | Fish Strip | 1 | 80 | 167 | Premium Fish |
| T10 | Astral Expanse | 96 | Celestial Sturgeon | Rare | 18 | Bottom | No | Luminous | 1 | 104 | 223 | Premium Fish |
| T10 | Astral Expanse | 99 | Starveil Marlin | Very Rare | 6 | Midwater | Yes | Luminous | 1 | 136 | 322 | Mythic Delicacy |

## Important rule

**Fishing XP is attached to these Fish entries.**

The Spot itself does not grant a flat XP reward.

This means catching a Very Rare species feels meaningfully different from catching a Common species.

---

# 65. BASE FISHING XP

Tier Base XP:

| Tier | Base XP |
|---|---:|
| T1 | 6 |
| T2 | 9 |
| T3 | 14 |
| T4 | 21 |
| T5 | 30 |
| T6 | 42 |
| T7 | 57 |
| T8 | 75 |
| T9 | 97 |
| T10 | 124 |

Rarity XP multipliers:

| Rarity | XP Multiplier |
|---|---:|
| Common | 1.00x |
| Uncommon | 1.35x |
| Rare | 1.80x |
| Very Rare | 2.60x |

Final per-Fish XP values are already calculated in the complete Fish table.

---

# 66. FISHING XP FORMULA

When Fish is landed:

**Fishing XP = Species XP × final Fish Quantity × Fishing XP modifiers**

Therefore:

- a Base Qty 2 schooling Fish awards XP twice;
- Double Catch doubles quantity and XP;
- rare Fish still remain much more valuable per individual Fish.

This intentionally rewards both:

- quantity builds;
- rare-target builds.

---

# 67. BITE TIME FORMULA

Recommended:

**Final Bite Time = Spot Base Bite Time × Rod Bite-Speed Multiplier × Tackle × gear × Specialization × global Fishing modifiers**

Rod Bite Speed of 20% means:

**Base Bite Time × 0.80**

Minimum:

**40% of original Spot Base Bite Time**

---

# 68. CATCH-POOL WEIGHT FORMULA

For each eligible Fish:

**Effective Weight = Base Weight  
× Preferred Bait Multiplier  
× Tackle Tag Multiplier  
× Specialization Multiplier  
× Species Mastery Multiplier  
× Gear/Jewelry Multiplier  
× Preferred Species Multiplier**

Final displayed chance:

**Effective Weight / Total Effective Weight**

All modifiers are visible in inspection.

---

# 69. LANDING TIME FORMULA

**Landing Time = 0.75s + (Fight / Final Fishing Power × 0.75s)**

then:

**× Landing modifiers**

Minimum:

**0.60s**

There is no failure roll.

---

# 70. DOUBLE CATCH FORMULA

Roll once after species is determined.

If success:

**Final Quantity = Base Quantity ×2**

Otherwise:

**Final Quantity = Base Quantity**

Double Catch cap:

**60%**

No triple-catch chain in baseline.

---

# 71. AQUATIC FIND FORMULA

After every landed Fish:

**roll current Spot Aquatic Find chance**

If success:

**+1 associated Aquatic Find**

Baseline quantity is always 1.

Future gear can improve chance.

Do not add quantity scaling until economy testing proves necessary.

---

# 72. BAIT WEIGHT TABLE

| Fishing Lvl | Bait | Primary Source | Pool Effect | Role |
|---|---|---|---|---|
| 1 | Worm Bait | Farming / Foraging | Matching species weight ×1.75 | Common freshwater targeting |
| 21 | Insect Bait | Foraging / Farming | Matching species weight ×1.75 | Surface / river fish |
| 41 | Fish Strip | Cooking from suitable raw fish | Matching species weight ×2.00 | Predator targeting |
| 61 | Shell Bait | Fishing / Cooking aquatic resources | Matching species weight ×2.00 | Bottom / eel / ray targeting |
| 81 | Luminous Bait | Alchemy + Runecrafting inputs | Matching species weight ×2.25; all Very Rare ×1.10 | Late rare targeting |

Bait is optional.

Using expensive Bait should visibly change:

- species percentages;
- Bait/hour;
- expected target Fish/hour.

---

# 73. TACKLE TABLE

| Fishing Lvl | Tackle | Effect | Primary Use |
|---|---|---|---|
| 5 | Cork Float | Surface species weight ×1.45; Bite Time -5% | Surface / common targeting |
| 15 | Weighted Sinker | Bottom species weight ×1.60; Bite Time +5% | Bottom targeting |
| 25 | Spinner Lure | Predator species weight ×1.60; Landing Time -5% vs Predator | Predator targeting |
| 35 | Fine Hook | Rare + Very Rare weight ×1.25; Bite Time +3% | Rare targeting |
| 45 | Double Hook | Double Catch +10 pp; Landing Time +10% | Bulk quantity |
| 55 | Deepwater Rig | Bottom ×1.80; Very Rare ×1.10; Surface ×0.75 | Deep / rare |
| 65 | Barbless Master Hook | Fishing Mastery XP +12%; Bait Preservation +10 pp | Mastery |
| 75 | Aether Spinner | Predator ×1.40; Rare+ ×1.20; Bite Time -6% | Late predator / rare |
| 85 | Umbral Sinker | Bottom ×1.50; Rare+ ×1.25; Landing Time -8% | Late deep targeting |
| 95 | Astral Lure | Preferred Species weight ×1.35; Very Rare ×1.10 | Endgame precision targeting |

Tackle is situational rather than a simple linear Tier replacement.

A Level-100 Fisher may still deliberately use:

**Cork Float**

when Surface Fish are the target.

---

# 74. PROFESSION CLOTHING TABLE

| Unlock | Item | Fishing Effect |
|---|---|---|
| T3 / L25 | Riverhand Hat | Bite Time -4% |
| T3 / L25 | Riverhand Coat | Bait Preservation +4 pp |
| T3 / L25 | Riverhand Trousers | Fishing Mastery XP +4% |
| T3 / L25 | Riverhand Gloves | Landing Time -4% |
| T3 / L25 | Riverhand Boots | Aquatic Find chance +6% |
| Set | Riverhand 5/5 | Double Catch +4 pp |
| T5 / L45 | Provisioner Cap | Bite Time -5% |
| T5 / L45 | Provisioner Vest | Double Catch +5 pp |
| T5 / L45 | Provisioner Leggings | Bait Preservation +5 pp |
| T5 / L45 | Provisioner Gloves | Common / Uncommon weight +8% |
| T5 / L45 | Provisioner Boots | Landing Time -5% |
| Set | Provisioner 5/5 | Double Catch +6 pp; Rare+ weight -5% |
| T7 / L65 | Deepwater Hood | Bottom weight +12% |
| T7 / L65 | Deepwater Coat | Aquatic Find chance +12% |
| T7 / L65 | Deepwater Leggings | Very Rare weight +8% |
| T7 / L65 | Deepwater Gloves | Landing Time -7% |
| T7 / L65 | Deepwater Boots | Bottom fish Landing Time -8% |
| Set | Deepwater 5/5 | Bottom ×1.10 additional; Aquatic Find +10% |
| T9 / L85 | Master Angler Hat | Rare / Very Rare weight +10% |
| T9 / L85 | Master Angler Coat | Bait Preservation +7 pp |
| T9 / L85 | Master Angler Legguards | Fishing Mastery XP +8% |
| T9 / L85 | Master Angler Gloves | Double Catch +6 pp |
| T9 / L85 | Master Angler Boots | Landing Time -8% |
| Set | Master Angler 5/5 | Preferred Species ×1.10; Bite Time -5% |

---

# 75. PROFESSION JEWELRY TABLE

| Fishing Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Angler's Ring | Bait Preservation +8 pp | Bait economy |
| 25 | River Charm | Bite Time -5% | General speed |
| 35 | Catcher's Band | Double Catch +5 pp | Quantity |
| 45 | Predator Pendant | Predator weight ×1.15; Landing Time -5% vs Predator | Predator targeting |
| 55 | Bottomfinder Loop | Bottom weight ×1.18 | Bottom fish |
| 65 | Schoolman's Chain | Common / Uncommon Double Catch +8 pp | Bulk food |
| 75 | Pearlseeker Ring | Aquatic Find chance +20% | Aquatic materials |
| 85 | Umbral Hook Charm | Rare+ weight ×1.15; Landing Time -5% | Rare fishing |
| 95 | Astral Angler Sigil | Preferred Species ×1.15; Very Rare ×1.10 | Endgame precision |

---

# 76. AQUATIC FIND TABLE

| Tier | Aquatic Find | Base Chance per Landed Catch | Main Consumers |
|---|---|---|---|
| T1 | River Weed | 4.0% | Cooking / Alchemy minor ingredient |
| T2 | Freshwater Mussel | 4.0% | Cooking |
| T3 | Crayfish | 4.0% | Cooking / bait recipes |
| T4 | Brine Kelp | 4.0% | Cooking / Alchemy |
| T5 | Ember Coral | 3.5% | Alchemy / Jewelcrafting reagent |
| T6 | Frost Pearl | 3.5% | Jewelcrafting / Alchemy |
| T7 | Stormshell | 3.0% | Jewelcrafting / advanced bait |
| T8 | Aether Pearl | 2.5% | Jewelcrafting / profession jewelry |
| T9 | Umbral Ink | 2.5% | Alchemy / Tailoring dye-reagent |
| T10 | Star Coral | 2.0% | Endgame Jewelcrafting / Alchemy |

---

# 77. SPECIES MASTERY TABLE

| Species Mastery | Permanent Species Effect |
|---|---|
| 10 | Landing Time -2% for this species |
| 25 | Effective Catch-Pool Weight +5% multiplicative for this species |
| 50 | Double Catch +5 percentage points for this species |
| 75 | Bait Preservation +10 percentage points when this species is landed |
| 100 | Effective Weight +10% additional and Double Catch +5 pp additional for this species |

---

# 78. COMPLETE FISHING LEVEL ROADMAP

| Fishing Lvl | Major Unlock |
|---|---|
| 1 | Meadow Brook; Old Handline; Worm Bait; Brook Minnow |
| 3 | River Perch |
| 5 | Reed Rod; Cork Float |
| 6 | Mudfin |
| 9 | Glassscale Trout |
| 11 | Reedmere Pond; Reed Carp |
| 13 | Marsh Bream |
| 15 | Alder Rod; Weighted Sinker; Angler's Ring |
| 16 | Blueback Pike |
| 19 | Moonbelly Eel |
| 21 | Silverrun River; Silver Trout; Insect Bait |
| 23 | River Salmon |
| 25 | Ironwood Rod; Spinner Lure; Riverhand set; River Charm |
| 26 | Speckled Pike |
| 29 | Crystal Darter |
| 31 | Brackwater Estuary; Brine Mullet |
| 33 | Tide Bass |
| 35 | Silverpine Rod; Fine Hook; Fishing Specializations; Catcher's Band |
| 36 | Marsh Eel |
| 39 | Pearlscale |
| 41 | Embercoast; Cinder Sardine; Fish Strip |
| 43 | Ashscale Snapper |
| 45 | Emberwood Rod; Double Hook; Provisioner set; Predator Pendant |
| 46 | Emberfin Tuna |
| 49 | Flare Ray |
| 51 | Frostmere Lake; Ice Perch |
| 53 | Frost Salmon |
| 55 | Frostbark Rod; Deepwater Rig; Bottomfinder Loop |
| 56 | Snow Pike |
| 59 | Glacial Sturgeon |
| 61 | Stormreach Shoals; Storm Mackerel; Shell Bait |
| 63 | Thunderfin Bream |
| 65 | Stormwillow Rod; Barbless Master Hook; Deepwater set; Schoolman's Chain |
| 66 | Razor Barracuda |
| 69 | Tempest Ray |
| 71 | Aetherdeep Basin; Aether Carp |
| 73 | Prism Eel |
| 75 | Aetherwood Rod; Aether Spinner; Pearlseeker Ring |
| 76 | Aether Tuna |
| 79 | Skyglass Sturgeon |
| 81 | Umbral Trench; Gloom Cod; Luminous Bait |
| 83 | Shade Eel |
| 85 | Umbralwood Rod; Umbral Sinker; Master Angler set; Umbral Hook Charm |
| 86 | Nightfin Shark |
| 89 | Abyssal Ray |
| 91 | Astral Expanse; Star Sardine |
| 93 | Comet Tuna |
| 95 | Starwood Rod; Astral Lure; Astral Angler Sigil; Preferred Species system |
| 96 | Celestial Sturgeon |
| 99 | Starveil Marlin |
| 100 | Fishing level cap; endgame Mastery / worker / Cooking supply progression continues |

Fishing has a meaningful unlock every few levels.

The 10-tier structure therefore does not feel like:

> unlock one Spot, wait ten levels.

---

# 79. COOKING INTEGRATION PRINCIPLE

Fishing intentionally creates many edible Fish because Cooking is one of the next core professions.

However:

Cooking should not create:

**40 identical Cooked Fish recipes with only larger healing numbers.**

Instead Fish classes should feed different Cooking structures such as:

- direct-cook basic Fish;
- multi-Fish meals;
- soups / stews;
- oily Fish recipes;
- predator dishes;
- premium meals;
- delicacies;
- bait processing;
- oils / by-products.

The exact system belongs in `04_COOKING.md`.

---

# 80. FISHING ↔ COOKING

Fishing supplies:

- raw Fish;
- Mussels;
- Crayfish;
- Kelp;
- other edible Aquatic Finds.

Cooking returns:

- Combat food;
- prepared meals;
- Fish Strip Bait;
- Shell Bait components;
- later worker provisions.

This creates a strong closed loop.

---

# 81. FISHING ↔ ALCHEMY

Fishing supplies:

- oily Fish;
- Brine Kelp;
- Ember Coral;
- Frost Pearl;
- Stormshell;
- Umbral Ink;
- Star Coral.

Alchemy can use these for:

- oils;
- potions;
- reagents;
- profession consumables.

Fishing should not be only a Cooking feeder.

---

# 82. FISHING ↔ JEWELCRAFTING

Selected Aquatic Finds support Jewelcrafting:

- Frost Pearl;
- Stormshell;
- Aether Pearl;
- Star Coral.

These are not Gems.

They are specialized aquatic materials.

This gives late Fishing additional economy value.

---

# 83. FISHING ↔ FLETCHING

Fletching is expected to craft / upgrade:

- Fishing Rods;
- selected Tackle;
- line / frame components.

Smithing can provide:

- hooks;
- metal fittings;
- sinkers.

Fishing progression therefore helps create demand across professions.

---

# 84. OLD-FISH RELEVANCE

Early Fish should not become useless after T10.

Logical sinks:

- basic Combat food;
- Cooking recipes;
- Fish Strip Bait;
- worker provisions;
- mixed recipes;
- Alchemy oils where appropriate.

Workers can maintain old Fish supply later.

Do not force T10 recipes to consume absurd amounts of Brook Minnow only to create a sink.

---

# 85. WORKER PROVISION POSSIBILITY

If the global Worker system later uses provisions:

Cooking should probably own the final provision item.

Fishing would remain one major input source.

Do not make raw Fish directly mandatory upkeep for every worker.

That would over-centralize Fishing.

---

# 86. OFFLINE FISHING

Save state stores:

- Spot;
- Bite progress;
- selected Fish if already rolled;
- Landing progress;
- active Bait;
- Tackle;
- active loadout;
- Specialization;
- Preferred Species;
- planner;
- Bait reserve;
- Species Mastery;
- worker assignments.

Offline simulation uses the same Catch-Pool formulas.

No simplified offline catch table.

---

# 87. OFFLINE RNG HANDLING

Offline Fishing may simulate many catches.

Use deterministic seeded simulation / aggregated weighted batches as long as it preserves expected distribution and save reproducibility.

Requirements:

- same average rates as active play;
- no reroll exploit by reloading;
- rare catches included correctly;
- Bait consumption / preservation simulated correctly.

---

# 88. OFFLINE RESULTS

Show:

- elapsed time;
- total Fish caught;
- per-species quantities;
- rare catches highlighted;
- Aquatic Finds;
- Bait consumed;
- Bait preserved;
- Fishing XP;
- levels gained;
- Species Mastery gained;
- Mastery milestones;
- planner transitions;
- worker Fishing separately.

---

# 89. FISHING SCREEN — HIGH-LEVEL UI

Recommended layout:

## Fishing Spot Browser

Each Spot card:

- Tier;
- required Level;
- required Rod;
- four Fish icons;
- current Fish unlocks;
- Aquatic Find;
- worker assignment indicator.

## Active Fishing Panel

Shows:

- current Spot;
- Bite progress;
- selected Fish during Landing;
- Fish Fight;
- Fishing Power;
- Landing progress;
- Bait;
- Tackle.

## Catch Pool Panel

Shows exact current:

- Fish %;
- expected catches/hour;
- XP/hour contribution;
- Mastery;
- preferred Bait;
- tags.

## Planning Panel

- Bait;
- Tackle;
- Specialization;
- Preferred Species;
- stop rule;
- fallback;
- queue.

## Analytics

- catches/hour by species;
- raw Fish/hour;
- XP/hour;
- Mastery/hour;
- Bait/hour;
- Aquatic Finds/hour;
- Double Catch rate;
- ETA.

---

# 90. CATCH-POOL UI IS CRITICAL

The catch pool should update immediately when the player changes:

- Bait;
- Tackle;
- Rod;
- gear;
- jewelry;
- Specialization;
- Preferred Species.

Example:

**Starveil Marlin**

Base:

6.0%

With:

- Luminous Bait;
- Astral Lure;
- Trophy Angler;
- Mastery bonuses;

UI might show:

18.7%

The player immediately sees why their setup matters.

---

# 91. FISH INSPECTION

Selecting a Fish shows:

- Name;
- Tier;
- unlock Level;
- Spot;
- Rarity;
- Base Weight;
- current Weight;
- current final %;
- Water Tag;
- Predator tag;
- Preferred Bait;
- Base Quantity;
- Fight;
- Fishing XP;
- Species Mastery;
- Cooking Class;
- expected catches/hour.

No wiki should be required for targeting.

---

# 92. ROD INSPECTION

Rod tooltip / inspection:

- Fishing Power;
- Bite Speed;
- mechanical effect;
- source profession;
- next upgrade;
- worker compatibility.

The player should understand whether upgrading the Rod helps:

- Bite Time;
- Landing Time;
- targeting;
- quantity.

---

# 93. ANALYTICS REQUIREMENTS

Fishing analytics must include:

- Fish/hour by species;
- target Fish/hour;
- total raw Fish/hour;
- Fishing XP/hour;
- Mastery XP/hour;
- average Bite Time;
- average Landing Time;
- Bait/hour;
- Bait preservation/hour;
- Double Catch rate;
- Aquatic Find/hour;
- ETA to Fishing level;
- ETA to Species Mastery.

Workers shown separately.

---

# 94. CHRONICLES — EARLY FISHING

Suggested progression goals:

1. Equip Old Handline.
2. Catch Brook Minnow.
3. Unlock River Perch.
4. Explain Catch Pool.
5. Equip Worm Bait.
6. Equip Cork Float.
7. Catch Glassscale Trout.
8. Reach first Species Mastery milestone.
9. Use first Fish in Cooking.

The tutorial should teach:

**you target Fish by manipulating the pool, not by clicking the Fish directly.**

---

# 95. CHRONICLES — MIDGAME FISHING

Suggested goals:

- unlock Fishing Specialization;
- use Spinner to target Predator;
- use Sinker to target Bottom Fish;
- create first dedicated Fishing loadout;
- catch first Very Rare Fish from T5+;
- build Angler Station II;
- establish first Fishing Spot for workers;
- make first Fish species Proven;
- assign Fishing worker;
- create Fish → Cooking planner chain.

---

# 96. CHRONICLES — LATE FISHING

Suggested goals:

- catch Skyglass Sturgeon;
- obtain Aether Pearl;
- maintain Cooking Fish reserve through workers;
- catch Nightfin Shark;
- use Luminous Bait;
- unlock Astral Expanse;
- equip Starwood Rod;
- unlock Preferred Species;
- catch Starveil Marlin;
- reach Fishing 100.

---

# 97. ENDGAME FISHING GOAL

Fishing does not need a separate boss-like endgame node.

Recommended endgame Chronicle:

**Master Angler**

Requirements:

- Fishing 100;
- Starwood Rod;
- catch all 40 Fish at least once;
- at least 10 Fish at Mastery 100;
- Starveil Marlin Mastery 50;
- Angler Station V.

Reward:

- fourth Fishing preset;
- cosmetic Master Angler marker;
- worker Fishing efficiency +3%;
- Preferred Species bonus +5% multiplicative.

This is completion/optimization, not a required gate for Cooking progression.

---

# 98. COLLECTION / COMPLETION GOALS

Optional goals:

- catch every Fish;
- Mastery 100 every Fish;
- obtain every Aquatic Find;
- catch 1,000 of each schooling Fish;
- catch 100 Starveil Marlin;
- fully equip a Fishing worker team;
- complete all Fishing jewelry / tackle collection.

Completion should not block normal progression.

---

# 99. DEVTOOLS

Fishing DevTools should support:

- set Fishing Level;
- set Species Mastery;
- set Skill-Wide Mastery;
- unlock Spots;
- mark Spot Established;
- mark Fish Proven;
- spawn Rod;
- spawn Tackle;
- spawn Bait;
- spawn clothing / jewelry;
- set Specialization;
- set Preferred Species;
- force a specific Fish roll;
- force Aquatic Find;
- set Double Catch;
- set Bite progress;
- set Landing progress;
- spawn Fishing worker;
- set worker Proficiency;
- simulate 1m / 5m / 1h / 8h / 24h;
- compare expected pool % to actual simulated results.

---

# 100. SAVE / DATA MODEL

Fishing Spot data:

- ID;
- Tier;
- Name;
- unlock Level;
- required Rod tier;
- Base Bite Time;
- Fish IDs;
- Aquatic Find ID;
- Aquatic Find base chance.

Fish data:

- ID;
- Name;
- Tier;
- Spot ID;
- unlock Level;
- Rarity;
- Base Weight;
- Water Tag;
- Predator flag;
- Preferred Bait;
- Base Quantity;
- Fight;
- XP;
- Cooking Class.

Player data:

- Species Mastery;
- discovered/caught flag;
- Spot Establishment;
- presets;
- active setup;
- planner state.

This keeps Fishing data-driven.

---

# 101. BALANCE CAPS

Recommended initial caps:

- Bite Time reduction: 60%;
- Landing Time reduction: 65%, with 0.60s minimum;
- Double Catch: 60%;
- Bait Preservation: 60%;
- Aquatic Find Chance: 50%;
- no absolute cap on weight multipliers because they normalize into a finite pool;
- Preferred Species should never make all other Fish exactly 0%.

Fishing should remain a pool-management profession.

---

# 102. MAJOR OPEN QUESTIONS — RECOMMENDED ANSWERS

These are already answered with the recommended baseline.

## Should player directly select which Fish to catch?

**No.**

Player selects Spot and manipulates weighted pool.

This is Fishing's core identity.

---

## Should Fish catches fail?

**No normal failure.**

Fight changes Landing Time, not success chance.

---

## Should Bait be mandatory?

**No.**

No Bait is always valid.

Bait is for targeting.

---

## Should Bait be consumed on failed bites?

There are no normal failed bites.

Bait is rolled for preservation after a landed catch.

---

## Should Fishing have active clicking?

**No.**

No manual hook timing.

No reaction minigame.

Idle-first remains intact.

---

## Should Rods have durability?

**No.**

Permanent tools.

---

## Should every Spot contain only one Fish Tier?

**Yes for baseline progression identity, but each Spot has four Fish of that Tier.**

Later expansion Spots may mix tiers if it creates a meaningful reason.

---

## Should Fishing XP depend on Spot or Fish?

**Fish.**

The actual species and quantity caught determine XP.

---

## Should rarer Fish give more XP?

**Yes.**

Rarity has a large XP multiplier and higher Fight.

---

## Should Double Catch also double XP?

**Yes.**

If two Fish are caught, the player receives XP for two Fish.

---

## Should every Fish cook into its own isolated food item?

**No.**

Cooking should use Fish classes and recipe structures.

Some Fish can still have direct Cooked variants where useful.

---

## Should Fishing have dozens of Baits?

**No.**

Five broad Bait families are enough for baseline.

---

## Should every Tier introduce new Bait?

**No.**

Bait types remain relevant across many tiers.

---

## Should Tackle be linear upgrades?

**No.**

Tackle is situational.

An early Cork Float can remain useful at Level 100.

---

## Should Fish have random size / quality item variants?

**No baseline item variants.**

Avoid inventory bloat.

If future Trophy records are added, store the record statistically rather than creating separate stacks.

---

## Should Fishing have a Trophy-size record system?

**Recommended later QoL / collection feature, not baseline economy.**

A personal-best size record could exist without changing item stacks.

It should not affect Cooking quantities.

---

## Should Aquatic Finds replace Fish catches?

**No.**

They are bonus resources.

---

## Should Fishing produce junk?

**No baseline junk.**

Every cycle should feel productive.

---

## Should Fishing have treasure chests?

**Not baseline.**

If later added, keep them optional novelty/collection content rather than mandatory progression.

---

## Should every Fish have Species Mastery?

**Yes.**

This creates a reason to target different Fish and supports long-term progression.

---

## Should Mastery directly increase Fish weight?

**Yes, modestly.**

Knowledge of a Fish should make it slightly easier to target over time.

---

## Should Fishing 100 finish the profession?

**No.**

Post-100 goals:

- Species Mastery;
- rare supply;
- Cooking;
- workers;
- Estate support;
- completion;
- endgame targeting.

---

## Should Specializations be permanent?

**No.**

Free switching outside active cycle.

---

## Should there be more than 3 Specializations?

**No baseline need.**

Current three cover:

- bulk;
- rare;
- bottom/aquatic.

---

## Should Workers discover new Fish?

**No.**

Player catches and masters Fish first.

---

## When can workers catch a species?

At:

**Species Mastery 10**

The Fish becomes Proven.

---

## Should workers use Bait?

**Yes, if configured.**

They consume real Bait.

---

## What happens if worker Bait runs out?

Default:

**continue with No Bait**

with configurable alternatives.

---

## Should Workers receive Fishing XP / Species Mastery for player?

**No player Fishing XP and no player Species Mastery.**

Workers gain their own Proficiency.

They produce resources, not personal skill XP.

---

## Should old Fish remain useful?

**Yes.**

Through:

- Cooking;
- bait;
- provisions;
- Alchemy;
- mixed recipes.

---

## Should Fishing require Estate infrastructure?

**No for personal Fishing.**

Estate improves:

- automation;
- workers;
- bait logistics;
- analytics;
- presets.

---

## Should Fishing have "school depletion"?

**No baseline depletion.**

Fishing Spots do not randomly dry up.

Predictable idle rates matter more.

---

## Should Spot catch weights rotate randomly over time?

**No.**

Fixed pool + player setup is easier to plan.

Temporary events can be considered later outside baseline.

---

## Should Weather / Time of Day affect Fishing?

**No baseline.**

The game is interface-based and long-idle.

Real-time rotating conditions would make planning unreliable.

Future optional events can exist separately.

---

## Should Fish Strip create a circular exploit?

Cooking conversion rate must be designed so Fish Strip is a cost.

Recommended:

- low-value schooling Fish are efficient Bait inputs;
- Fish Strip targeting should not create more bait-Fish than it consumes in a self-sustaining infinite loop.

Cooking will finalize numbers.

---

## Should Very Rare Fish be mandatory for normal Tier progression?

**No.**

They support:

- premium Cooking;
- Mastery;
- collection;
- optimization.

Normal profession progression should not depend on lucky 6% catches.

---

## Should exact pool percentages be visible?

**Absolutely yes.**

This is central to the profession.

---

# 103. COMPLETE LOCKED FISHING BASELINE

1. Fishing uses Spots with weighted Catch Pools.
2. Player does not directly select a Fish.
3. Four Fish per Tier Spot.
4. 10 Spots / 40 baseline Fish.
5. Fish unlock gradually inside each Tier.
6. Bite Phase happens before species roll.
7. Species is rolled from weighted eligible pool.
8. Landing Phase uses Fish Fight vs Fishing Power.
9. No normal failed catches.
10. Fishing XP comes from the Fish caught.
11. Rare Fish give substantially more XP.
12. Double Catch gives additional Fish, XP, and Mastery.
13. Rod is the primary Tool.
14. Rods have no durability.
15. 10 Rod progression plus Old Handline.
16. Bait is optional.
17. Five broad Bait families.
18. Bait changes catch-pool weights.
19. Bait Preservation cap 60%.
20. Tackle is permanent and situational.
21. 10 Tackle options.
22. Fish use Surface / Midwater / Bottom tags.
23. Predator is an additional targeting tag.
24. Endgame Preferred Species system unlocks at 95.
25. Aquatic Finds are bonus drops.
26. No junk catch table.
27. 40 Species Masteries 1–100.
28. Skill-Wide Fishing Mastery.
29. Three reversible Specializations:
    - Provisioner;
    - Trophy Angler;
    - Deepwater Fisher.
30. Angler Station is Estate infrastructure, not a skill requirement.
31. Spot becomes Established after 25 personal catches.
32. Species becomes Proven for workers at Mastery 10.
33. Workers use real catch-pool, Bait, Tackle, and gear rules.
34. Workers gain Proficiency, not player XP/Mastery.
35. Frontier worker penalty decreases with player Species Mastery.
36. Planner supports Fish quantity, Mastery, Aquatic Find, Bait reserve, and cross-profession Cooking chains.
37. Fishing strongly feeds Cooking.
38. Fish classes prevent Cooking from becoming 40 identical recipes.
39. Fishing also feeds Alchemy and Jewelcrafting.
40. Offline Fishing uses the same catch-pool model.
41. UI always shows exact final species percentages and expected catches/hour.
42. All baseline Fishing content lives in this single MD.

---

# 104. FINAL SUMMARY

Fishing begins with:

**Old Handline**

↓

**Meadow Brook**

↓

**Brook Minnow / River Perch / Mudfin / Glassscale Trout**

and gradually becomes:

**better Rods**

↓

**Bait targeting**

↓

**situational Tackle**

↓

**Species Mastery**

↓

**Fishing Specialization**

↓

**deep / rare / predator setups**

↓

**Cooking supply chains**

↓

**worker Fishing**

↓

**Astral Expanse**

↓

**Starveil Marlin**

The profession's defining decision is never:

> Which Fish button do I press?

It is:

> **Which Spot, Bait, Tackle, gear, and Specialization give me the catch distribution I want?**

The player personally learns and masters new Fish.

Later:

- workers maintain bulk food;
- workers maintain old Fish;
- Cooking turns catches into Combat sustain;
- rare Fishing continues to matter for delicacies, Alchemy, Jewelcrafting, and completion.

Core Fishing identity:

> **You do not choose the catch directly. You build the setup that makes the water give you what you want.**
