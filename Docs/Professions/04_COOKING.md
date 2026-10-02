# 04 â€” COOKING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `Fishing.md`, `Farming.md`, `Hunting.md`, `Foraging.md`

**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)
**Purpose:** Define Cooking as one complete profession in a single source-of-truth file: core preparation/cooking loop, recipe methods, batches, ingredient tags, 10-tier food progression, Fishing integration, Farming/Hunting/Foraging integration, profession Tool/gear, Mastery, Specializations, Estate Kitchen, workers, Combat food loadout, automation, Chronicles, UI, formulas, and balance rules.

---

# 1. COOKING ROLE IN THE GAME

Cooking converts raw food resources into reliable long-term sustain.

Main inputs come from:

- Fishing;
- Farming;
- Hunting;
- Foraging.

Main outputs support:

- Combat;
- Fishing Bait;
- worker provisions where appropriate;
- Alchemy reagents;
- long idle sessions;
- account progression.

Cooking should not become:

**40 raw Fish â†’ 40 identical Cooked Fish with larger numbers**

The profession should instead revolve around:

- ingredient classes;
- recipe composition;
- preparation complexity;
- cooking methods;
- batches;
- ingredient preservation;
- serving yield;
- Kitchen progression;
- workers;
- Combat food planning.

---

# 2. CORE FANTASY

The player begins cooking simple food at a campfire.

Over time they learn to:

- prepare ingredients efficiently;
- turn Fish into better meals;
- combine Fishing, Farming, Hunting, and Foraging resources;
- cook large Pot meals;
- bake high-value dishes;
- smoke provisions for long-term supply;
- produce Fishing Bait and culinary reagents;
- create premium banquets;
- supply Combat continuously;
- run worker Kitchen production;
- prepare Starveil-level endgame food.

Long-term fantasy:

**Camp Cook â†’ Skilled Cook â†’ Provisioner / Hearth Chef â†’ Master Chef â†’ Estate Kitchen Director**

---

# 3. COOKING'S UNIQUE IDENTITY

Cooking is built around:

**Recipe Composition + Preparation + Cooking Method + Batch Economics**

The important planning questions are:

- Which ingredients am I willing to spend?
- Do I want speed, ingredient efficiency, or high Food Value?
- Which cooking method fits that goal?
- How large should the Batch be?
- Do I preserve rare ingredients or maximize servings?
- Do I make immediate Combat food or worker provisions?
- Which food should Combat consume first?

Cooking should feel like an economy-transforming profession rather than a linear timer.

---

# 4. CORE COOKING LOOP

Every normal recipe follows:

1. Select Recipe.
2. Select Batch Size.
3. Equip Cooking loadout.
4. Required ingredients are reserved.
5. **Preparation Phase** runs.
6. Cooking Method performs any Warm-Up.
7. **Cooking Phase** runs.
8. Recipe completes.
9. Ingredient Preservation is resolved.
10. Extra Serving Chance is resolved.
11. Output enters Bank.
12. Cooking XP and Recipe Mastery XP are granted.
13. Next recipe in Batch begins automatically.
14. Repeat until:
   - Batch ends;
   - input runs out;
   - target output reached;
   - planner switches activity;
   - player stops.

No manual timing is required.

---

# 5. PREPARATION PHASE

Every recipe has:

- Base Prep Time;
- Complexity;
- Ingredient count.

The primary Cooking Tool is:

**Kitchen Knife**

Knife progression reduces Preparation Time.

Preparation represents:

- cutting;
- cleaning;
- filleting;
- portioning;
- combining;
- assembling.

The game does not ask the player to click each ingredient.

---

# 6. RECIPE COMPLEXITY

Cooking uses Complexity 1â€“8.

| Complexity | Name | Prep Work Mult. | Typical Use |
|---|---|---|---|
| 1 | Simple | 1.00x | 1 ingredient / basic cut |
| 2 | Basic | 1.20x | simple two-step preparation |
| 3 | Intermediate | 1.45x | multiple ingredients / assembly |
| 4 | Advanced | 1.75x | careful prep / more ingredients |
| 5 | Expert | 2.10x | premium preparation |
| 6 | Master | 2.50x | high-tier multi-component meal |
| 7 | Banquet | 3.00x | large complex dish |
| 8 | Mythic | 3.60x | Starveil-level preparation |

Complexity modifies Preparation.

Recommended:

**Final Prep Time = Base Prep Time Ã— Complexity Modifier Ã— Knife/gear modifiers**

Banquet Station reduces high Complexity penalties.

---

# 7. COOKING PHASE

After Preparation:

the recipe enters its cooking method.

Methods:

| Method | Unlock Lvl | Warm-Up | Primary Identity | Main Uses |
|---|---|---|---|---|
| Prep Table | 1 | 0.0 | Utility | Fish Strips, Shell Bait, Oils, sauces, ingredient prep |
| Grill | 1 | 0.0 | Speed | Fast 1â€“2 ingredient foods; best simple throughput |
| Pot | 10 | 5.0 | Serving Efficiency | Soups, broths, chowders, stews; multi-serving recipes |
| Oven | 25 | 7.0 | Food Value | Bakes, roasts, premium prepared foods |
| Smokehouse | 35 | 12.0 | Provisioning | Long batches; rations / provisions / bait prep |
| Banquet Station | 75 | 10.0 | Complex Meals | High-tier multi-ingredient feasts and large serving outputs |

Each method should have a distinct economic role.

---

# 8. METHOD IDENTITIES

| Method | Mechanical Rule | Identity |
|---|---|---|
| Prep Table | No warm-up; no cooking time; uses Prep phase only | Utility production |
| Grill | Cook Time -10% baseline versus equivalent recipes | Fast throughput |
| Pot | Recipes usually output 3â€“4 servings | Ingredient efficiency |
| Oven | Recipes usually have higher Food Value per serving | Premium sustain |
| Smokehouse | Batch Efficiency improves 50% more from large batches | Provisions / long idle |
| Banquet Station | Complexity penalty to Prep reduced by 20%; recipes output 6â€“8 servings | Endgame large meals |

## Grill

Best for:

- fast direct food;
- simple Fish / Meat;
- low setup complexity.

## Pot

Best for:

- turning several ingredients into multiple servings;
- efficient sustain;
- large steady food supply.

## Oven

Best for:

- high Food Value;
- premium meals;
- complex prepared Fish.

## Smokehouse

Best for:

- rations;
- provisions;
- long batches;
- worker support;
- durable planning items.

## Banquet Station

Best for:

- late-game multi-ingredient meals;
- large serving output;
- rare Fish;
- endgame Cooking goals.

## Prep Table

Produces utility items without a cooking phase.

---

# 9. NO RANDOM BURNING OR FAILED FOOD

Baseline Cooking has no:

- burned item;
- ruined recipe;
- failed meal;
- random quality loss.

If the recipe:

- is unlocked;
- has required ingredients;
- has required Kitchen method;

it succeeds.

Difficulty comes from:

- ingredient economy;
- recipe complexity;
- time;
- Kitchen progression;
- Mastery;
- worker planning.

---

# 10. NO RANDOM FOOD QUALITY

Cooking does not create:

- Poor;
- Normal;
- Fine;
- Perfect;
- Legendary

versions of the same meal.

Every recipe has one output item.

This prevents Bank bloat.

Profession progression changes:

- speed;
- preservation;
- serving yield;
- production efficiency.

It does not create duplicate food stacks with different hidden stats.

---

# 11. FOOD VALUE

Every edible Cooking output has:

**Food Value**

Food Value is the Cooking-owned sustain rating.

Combat should consume this value through its food-healing rules.

The exact final HP conversion can remain globally balanceable without changing the Cooking recipe structure.

Higher-tier meals generally provide:

- more Food Value per serving;
- better ingredient efficiency;
- better inventory/consumption efficiency.

Because Bank stacks are unlimited, the main benefit is Combat sustain rather than storage compression.

---

# 12. COOKING SHOULD NOT REPLACE ALCHEMY

Normal meals primarily provide:

- sustain / healing;
- provisions;
- recipe-chain utility.

Baseline food should **not** provide a giant set of:

- Crit buffs;
- Attack buffs;
- XP buffs;
- rare-drop buffs.

Those roles belong mainly to:

- Alchemy;
- equipment;
- profession specializations.

A very small number of future special foods can break this rule if gameplay requires it, but it is not baseline Cooking identity.

---

# 13. INGREDIENT TAG SYSTEM

Cooking recipes can accept an ingredient **class** instead of one exact item.

| Tag | Primary Source | Meaning | Main Cooking Uses |
|---|---|---|---|
| [Small Fish] | Fishing | Small / Schooling Fish | Fish Strips, skewers, broths |
| [Basic Fish] | Fishing | Basic Fish | Simple grills, soups |
| [Hearty Fish] | Fishing | Hearty Fish | Stews, bakes |
| [Delicate Fish] | Fishing | Delicate Fish | Poached / premium dishes |
| [Oily Fish] | Fishing | Oily Fish | Roasts, fish oil, smoked foods |
| [Predator Fish] | Fishing | Predator Fish | Steaks, advanced meals, Fish Strips |
| [Premium Fish] | Fishing | Premium Fish | High-tier direct meals / banquets |
| [Rare Delicacy] | Fishing | Rare Delicacy | Rare premium meals |
| [Mythic Delicacy] | Fishing | Starveil Marlin class | T10 feast |
| [Vegetable] | Farming | Future crop tag | Stews, roasts, sides |
| [Grain] | Farming | Future grain tag | Chowders, cakes, baked meals |
| [Herb] | Farming / Foraging | Future herb tag | Broths, seasoning, premium recipes |
| [Mushroom] | Foraging / Farming | Future mushroom tag | Stews, sauces |
| [Berry] | Foraging / Farming | Future berry tag | Sides, sauces, later meals |
| [Game Meat] | Hunting | Future meat tag | Stews, roasts, provisions |
| [Rich Meat] | Hunting | Future fatty / premium meat tag | High-tier meals |

Example:

**1 [Oily Fish]**

means any raw Fish with the Cooking Class:

**Oily Fish**

can satisfy the recipe.

This prevents 40 Fish from requiring 40 nearly identical recipes.

---

# 14. WHY INGREDIENT TAGS MATTER

Fishing already contains 40 Fish species.

Without tags:

- Cooking UI becomes enormous;
- every Fish needs a duplicate recipe;
- balance becomes repetitive.

With tags:

different Fish still matter through:

- Fishing rarity;
- acquisition rate;
- Cooking Class;
- Bait use;
- Mastery;
- ingredient opportunity cost.

But Cooking stays readable.

---

# 15. FUTURE PROFESSION TAGS

Farming / Hunting / Foraging will later populate:

- [Vegetable];
- [Grain];
- [Herb];
- [Mushroom];
- [Berry];
- [Game Meat];
- [Rich Meat].

Cooking already defines how those tags are consumed.

The future profession documents should respect these Cooking tags unless a later revision deliberately changes them.

---

# 16. COMPLETE BASELINE RECIPE LIST

Cooking v1.0 contains **40 baseline recipes**, roughly four per progression Tier.

| Lvl | Tier | Recipe | Method | Complexity | Inputs | Output | Qty | Food Value | Prep | Cook | XP | Role |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | T1 | Grilled River Fish | Grill | 1 | 1 [Basic Fish] or 1 [Small Fish] | Grilled River Fish | 1 | 12 | 1.8 | 3.5 | 7 | Early direct food |
| 4 | T1 | Riverweed Broth | Pot | 1 | 1 [Basic Fish] + 1 River Weed | Riverweed Broth | 2 | 9 | 2.2 | 5.5 | 9 | Ingredient-efficient early food |
| 8 | T1 | Roasted Root Bowl | Grill | 1 | 1 [Vegetable] + 1 [Fruit] | Roasted Root Bowl | 2 | 8 | 2.0 | 4.0 | 8 | Non-Fishing early food |
| 9 | T1 | Fish Strips | Prep Table | 1 | 2 [Small Fish] | Fish Strip | 4 | 0 | 2.0 | 0.0 | 8 | Fishing Bait |
| 11 | T2 | Herbed Reedmere Fillet | Grill | 2 | 1 [Basic Fish] + 1 [Herb] | Herbed Reedmere Fillet | 1 | 20 | 2.8 | 4.2 | 13 | Direct combat food |
| 14 | T2 | Mussel Chowder | Pot | 2 | 1 Freshwater Mussel + 1 [Grain] + 1 [Herb] | Mussel Chowder | 3 | 15 | 3.4 | 6.5 | 17 | Multi-serving meal |
| 17 | T2 | Hearty Fisher Stew | Pot | 2 | 1 [Hearty Fish] or 1 [Game Meat] + 1 [Vegetable] + 1 [Herb] | Hearty Fisher Stew | 3 | 17 | 3.6 | 7.0 | 19 | Hearty meal |
| 19 | T2 | Smoked River Ration | Smokehouse | 2 | 2 [Basic Fish] + 1 [Herb] | Smoked River Ration | 3 | 14 | 3.2 | 9.0 | 18 | Provision / long-idle food |
| 21 | T3 | Silverrun Herb Fillet | Grill | 2 | 1 [Delicate Fish] + 1 [Herb] | Silverrun Herb Fillet | 1 | 29 | 3.2 | 4.8 | 24 | High-value direct food |
| 24 | T3 | Crayfish Grain Pot | Pot | 3 | 1 Crayfish + 1 [Grain] + 1 [Vegetable] | Crayfish Grain Pot | 3 | 23 | 4.2 | 7.5 | 29 | Efficient servings |
| 27 | T3 | Oily Fish Cakes | Oven | 3 | 1 [Oily Fish] + 1 [Grain] + 1 [Herb] | Oily Fish Cakes | 2 | 27 | 4.5 | 7.0 | 31 | Balanced food |
| 29 | T3 | Fish Oil | Prep Table | 2 | 2 [Oily Fish] | Fish Oil | 1 | 0 | 3.4 | 0.0 | 26 | Alchemy / Cooking reagent |
| 31 | T4 | Brackwater Bake | Oven | 3 | 1 [Hearty Fish] + 1 [Vegetable] + 1 [Herb] | Brackwater Bake | 2 | 36 | 4.8 | 7.8 | 39 | Midgame sustain |
| 34 | T4 | Pearlscale ConsommÃ© | Pot | 4 | 1 [Rare Delicacy] + 1 [Herb] + 1 Brine Kelp | Pearlscale ConsommÃ© | 2 | 42 | 5.3 | 8.5 | 46 | Rare-food conversion |
| 37 | T4 | Kelp Grain Bowl | Pot | 3 | 1 [Basic Fish] + 1 [Grain] + 1 Brine Kelp | Kelp Grain Bowl | 3 | 31 | 4.6 | 7.6 | 41 | Bulk midgame food |
| 39 | T4 | Shell Bait | Prep Table | 2 | 2 Freshwater Mussel or 2 Crayfish or 1 Stormshell | Shell Bait | 4 | 0 | 3.8 | 0.0 | 34 | Fishing Bait |
| 41 | T5 | Embercoast Seared Predator | Grill | 3 | 1 [Predator Fish] + 1 [Herb] | Embercoast Seared Predator | 1 | 50 | 4.6 | 5.5 | 54 | Fast high-value food |
| 44 | T5 | Ember Coral Stew | Pot | 4 | 1 [Hearty Fish] + 1 Ember Coral + 1 [Vegetable] | Ember Coral Stew | 3 | 42 | 5.8 | 9.0 | 61 | Efficient high-tier meal |
| 47 | T5 | Cinder Schoolfish Skewers | Grill | 3 | 2 [Small Fish] + 1 [Vegetable] | Cinder Schoolfish Skewers | 4 | 33 | 5.0 | 6.0 | 56 | Bulk Fish conversion |
| 49 | T5 | Spiced Smoked Predator | Smokehouse | 4 | 2 [Predator Fish] + 1 [Herb] | Spiced Smoked Predator | 3 | 39 | 5.6 | 10.5 | 64 | Provision / predator sink |
| 51 | T6 | Frostmere Salmon Roast | Oven | 4 | 1 [Oily Fish] + 1 [Herb] + 1 [Vegetable] | Frostmere Salmon Roast | 1 | 63 | 5.5 | 8.8 | 72 | High sustain |
| 54 | T6 | Frost Pearl Chowder | Pot | 4 | 1 [Premium Fish] + 1 Frost Pearl + 1 [Grain] | Frost Pearl Chowder | 3 | 54 | 6.2 | 9.5 | 80 | Premium multi-serving |
| 57 | T6 | Glacial Sturgeon Platter | Oven | 5 | 1 [Premium Fish] + 1 [Vegetable] + 1 [Herb] + 1 [Mushroom] | Glacial Sturgeon Platter | 3 | 57 | 6.8 | 10.0 | 86 | Complex premium food |
| 59 | T6 | Refined Fish Oil | Prep Table | 3 | 3 [Oily Fish] + 1 Frost Pearl | Refined Fish Oil | 2 | 0 | 5.0 | 0.0 | 70 | Advanced reagent |
| 61 | T7 | Stormreach Barracuda Grill | Grill | 4 | 1 [Predator Fish] + 1 [Herb] + 1 [Vegetable] | Stormreach Barracuda Grill | 1 | 76 | 5.8 | 6.5 | 91 | Fast T7 combat food |
| 64 | T7 | Stormshell Stew | Pot | 5 | 1 [Hearty Fish] + 1 Stormshell + 1 [Vegetable] + 1 [Herb] | Stormshell Stew | 3 | 66 | 7.0 | 10.5 | 102 | Ingredient-efficient sustain |
| 67 | T7 | Tempest Ray Bake | Oven | 5 | 1 [Rare Delicacy] + 1 [Grain] + 1 [Herb] | Tempest Ray Bake | 2 | 72 | 7.3 | 10.8 | 108 | Rare T7 dish |
| 69 | T7 | Storm Rations | Smokehouse | 4 | 2 [Predator Fish] or 2 [Game Meat] + 1 [Herb] | Storm Rations | 4 | 56 | 6.4 | 12.5 | 96 | Worker / long-idle provisions |
| 71 | T8 | Aether Herb Plate | Oven | 5 | 1 [Premium Fish] + 1 [Herb] + 1 [Vegetable] | Aether Herb Plate | 2 | 88 | 7.4 | 11.0 | 116 | Premium sustain |
| 74 | T8 | Prism Eel Pot | Pot | 5 | 1 [Oily Fish] + 1 Aether Pearl + 1 [Mushroom] | Prism Eel Pot | 3 | 80 | 7.8 | 11.5 | 124 | High-efficiency meal |
| 77 | T8 | Skyglass Banquet | Banquet Station | 6 | 1 [Rare Delicacy] + 1 [Premium Fish] + 1 [Grain] + 1 [Herb] | Skyglass Banquet | 6 | 77 | 9.5 | 13.0 | 138 | Large premium batch |
| 79 | T8 | Aether Glaze | Prep Table | 4 | 1 Aether Pearl + 1 Fish Oil + 1 [Herb] | Aether Glaze | 2 | 0 | 6.0 | 0.0 | 104 | T9â€“T10 Cooking reagent |
| 81 | T9 | Umbral Cod Bake | Oven | 5 | 1 [Hearty Fish] + 1 [Mushroom] + 1 [Herb] | Umbral Cod Bake | 2 | 108 | 8.0 | 11.8 | 146 | T9 sustain |
| 84 | T9 | Nightfin Steak | Grill | 5 | 1 [Predator Fish] + 1 Aether Glaze | Nightfin Steak | 1 | 120 | 7.6 | 7.2 | 154 | Fast premium food |
| 87 | T9 | Abyssal Ray Stew | Pot | 6 | 1 [Rare Delicacy] + 1 Umbral Ink + 1 [Vegetable] + 1 [Herb] | Abyssal Ray Stew | 4 | 100 | 9.2 | 13.0 | 168 | Large rare meal |
| 89 | T9 | Umbral Reduction | Prep Table | 5 | 1 Umbral Ink + 1 Refined Fish Oil + 1 [Herb] | Umbral Reduction | 2 | 0 | 7.0 | 0.0 | 132 | T10 Cooking / Alchemy reagent |
| 91 | T10 | Star Sardine Platter | Oven | 5 | 2 [Small Fish] + 1 [Grain] + 1 [Herb] | Star Sardine Platter | 4 | 122 | 8.4 | 12.0 | 180 | Bulk T10 food |
| 94 | T10 | Comet Tuna Roast | Oven | 6 | 1 [Premium Fish] + 1 Aether Glaze + 1 [Vegetable] | Comet Tuna Roast | 1 | 145 | 9.2 | 12.8 | 195 | Premium direct food |
| 97 | T10 | Celestial Sturgeon Banquet | Banquet Station | 7 | 1 [Premium Fish] + 1 [Rare Delicacy] + 1 [Grain] + 1 [Herb] + 1 Aether Glaze | Celestial Sturgeon Banquet | 6 | 132 | 11.5 | 14.5 | 218 | Large endgame meal |
| 100 | T10+ | Starveil Feast | Banquet Station | 8 | 1 [Mythic Delicacy] + 1 Star Coral + 1 Umbral Reduction + 1 [Grain] + 1 [Herb] | Starveil Feast | 8 | 165 | 13.0 | 16.0 | 260 | Highest baseline Cooking dish |

This table is the baseline Cooking content.

Exact future crop / meat item names can slot into ingredient tags without requiring the Cooking system to be rewritten.

---

# 17. RECIPE CATEGORIES

The 40 recipes cover:

## Direct Food

Fast:

- Grill;
- Oven.

## Multi-Serving Meals

Efficient:

- Pot;
- Banquet.

## Provisions

Longer production:

- Smokehouse.

## Utility Preparation

- Fish Strip;
- Shell Bait;
- Fish Oil;
- Refined Fish Oil;
- Aether Glaze;
- Umbral Reduction.

This ensures Cooking feeds more than Combat.

---

# 18. FISHING INTEGRATION

Cooking directly uses Fishing's existing Cooking Classes:

- Small / Schooling;
- Basic Fish;
- Hearty Fish;
- Delicate Fish;
- Oily Fish;
- Predator Fish;
- Premium Fish;
- Rare Delicacy;
- Mythic Delicacy.

Cooking should not rename those classes.

They are the contract between:

**Fishing â†’ Cooking**

---

# 19. FISH STRIPS

Recipe:

**2 [Small Fish] â†’ 4 Fish Strips**

Fish Strips are Fishing Bait.

They create:

**Fishing â†’ Cooking â†’ Fishing**

The conversion rate must not enable a positive infinite loop where predator Fishing generates more Fish Strip supply than it spends while also increasing target Fish stock without meaningful cost.

Fishing analytics should show expected Fish Strip consumption.

---

# 20. SHELL BAIT

Cooking creates:

**Shell Bait**

from shell-type Fishing outputs.

Baseline recipe accepts:

- 2 Freshwater Mussels;
- or 2 Crayfish;
- or 1 Stormshell.

Output:

**4 Shell Bait**

This keeps older Fishing aquatic resources useful.

---

# 21. FISH OIL

Cooking creates:

**Fish Oil**

from:

**2 [Oily Fish]**

Uses:

- Alchemy;
- higher Cooking recipes;
- future profession recipes.

Later:

**Refined Fish Oil**

uses higher-value inputs.

This gives Oily Fish a non-food role.

---

# 22. AETHER GLAZE / UMBRAL REDUCTION

High-tier Cooking includes culinary reagents.

## Aether Glaze

Used by:

- T9â€“T10 premium meals;
- possible future Alchemy recipes.

## Umbral Reduction

Used by:

- Starveil Feast;
- future endgame recipes;
- possible Alchemy.

These prevent late Cooking from being only:

> higher number Fish â†’ higher number grilled Fish.

---

# 23. COOKING METHODS â€” UNLOCKS

Baseline:

- Prep Table: Level 1;
- Grill: Level 1;
- Pot: Level 10;
- Oven: Level 25;
- Smokehouse: Level 35;
- Banquet Station: Level 75.

A recipe cannot be started if its method is unavailable.

---

# 24. CAMPFIRE BASELINE

Cooking starts without developed Estate infrastructure.

The player receives access to:

**Campfire**

Campfire supports:

- Grill;
- Prep Table;
- Batch 1.

At Cooking 10:

basic Pot functionality becomes available through:

- portable pot / simple hearth.

Estate Kitchen later expands Cooking substantially.

---

# 25. ESTATE KITCHEN

Cooking infrastructure progression:

| Kitchen | Max Batch | Queue | New Method / Function | Account Role |
|---|---|---|---|---|
| Campfire | 1 | 1 | Grill + Prep Table | Personal baseline Cooking |
| Kitchen I | 5 | 2 | Pot | House; basic recipes / 2 presets |
| Kitchen II | 10 | 4 | Oven | Lodge; first worker slot / batch planning |
| Kitchen III | 25 | 6 | Smokehouse | Manor; 3 worker slots / recipe chains |
| Kitchen IV | 50 | 10 | Banquet Station | Estate; worker teams / advanced reserves |
| Kitchen V | 100 | 16 | All methods | Holdings; endgame schedules / T10+ recipes |

Kitchen is account infrastructure.

It does not have Cooking XP.

It unlocks:

- methods;
- larger batches;
- workers;
- queues;
- logistics.

---

# 26. BATCH SIZE

Cooking supports Batch production.

Larger Kitchen:

- reserves more ingredients;
- reduces repeated warm-up overhead;
- improves long-idle production.

Batch does not multiply ingredients for free.

---

# 27. BATCH EFFICIENCY

Recommended baseline:

| Batch Size | Per-Recipe Cook-Time Multiplier |
|---|---|
| 1 | 1.00x |
| 5 | 0.94x |
| 10 | 0.90x |
| 25 | 0.86x |
| 50 | 0.83x |
| 100 | 0.80x |

Cooking methods apply the appropriate Batch Efficiency.

Smokehouse receives **50% more of the Batch efficiency benefit** because it is designed for long production runs.

Example:

if normal Batch 50 gives 0.83x per-recipe Cook Time,

Smokehouse uses approximately:

**0.745x**

after its method bonus.

Exact balance can be tuned.

---

# 28. BATCH OUTPUT

If a recipe outputs:

**3 servings**

and Batch Size is:

**10**

base output is:

**30 servings**

before Extra Serving rolls.

Inputs scale Ã—10 before Preservation.

---

# 29. EXTRA SERVING CHANCE

Cooking's main output bonus is:

**Extra Serving Chance**

For every individual recipe craft in a Batch:

roll once.

If successful:

**+1 serving**

This is deliberately different from doubling entire output.

Example:

Recipe output = 3.

Extra Serving proc:

**4 servings**

not 6.

This keeps multi-serving meals controllable.

---

# 30. EXTRA SERVING CAP

Hard cap:

**60%**

There is no guaranteed +1 serving from generic Chance overflow.

Specific set bonuses can grant explicit guaranteed servings where stated.

This keeps recipe yields predictable.

---

# 31. INGREDIENT PRESERVATION

Cooking can preserve normal ingredients.

For every preservable ingredient unit:

roll:

**Ingredient Preservation**

On success:

ingredient is not consumed.

Hard cap:

**50%**

Protected endgame ingredients can ignore Preservation.

---

# 32. PROTECTED INGREDIENTS

Recommended protected inputs:

- Worldheart-tier future ingredients;
- unique boss ingredients;
- other account-gated rare materials.

Normal:

- Fish;
- Grain;
- Herbs;
- Vegetables;
- Aquatic Finds;

remain preservable unless recipe explicitly says otherwise.

---

# 33. COOKING TOOL â€” KITCHEN KNIFE

Cooking's primary Tool is:

**Kitchen Knife**

| Tier | Knife | Equip Lvl | Prep Power | Prep Speed | Source | Mechanical Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Kitchen Knife | 1 | 5 | 0% | Starter | None |
| T1 | Copper Kitchen Knife | 5 | 7 | 4% | Smithing | Ingredient Preservation +2 pp |
| T2 | Iron Cleaver | 15 | 10 | 8% | Smithing | Prep Time -3% |
| T3 | Cobalt Chef's Knife | 25 | 13 | 12% | Smithing | Ingredient Preservation +3 pp |
| T4 | Argent Slicer | 35 | 17 | 16% | Smithing | Extra Serving Chance +3 pp |
| T5 | Emberite Cleaver | 45 | 22 | 20% | Smithing | Grill/Oven Cook Time -4% |
| T6 | Frostsilver Fillet Knife | 55 | 28 | 24% | Smithing | Fish recipes Prep Time -6% |
| T7 | Stormiron Chef's Knife | 65 | 35 | 28% | Smithing | Pot/Smokehouse Cook Time -5% |
| T8 | Aetherite Edge | 75 | 43 | 32% | Smithing | Ingredient Preservation +5 pp |
| T9 | Umbral Chef's Knife | 85 | 52 | 36% | Smithing | Extra Serving Chance +5 pp |
| T10 | Astralite Master Knife | 95 | 62 | 40% | Smithing | Prep Time -6%; Extra Serving +3 pp |

Knife affects mainly:

- Preparation Time;
- Preservation;
- Serving efficiency;
- selected recipe categories.

It does not determine whether a meal is edible.

---

# 34. KNIFE PREP POWER

Every recipe has:

- Complexity;
- Base Prep Time.

Knife provides:

**Prep Power**

Recommended formula:

**Prep Time = Base Prep Time Ã— Complexity Modifier Ã— (10 / (10 + Prep Power)) Ã— other modifiers**

This means better Knives significantly reduce preparation, but never make it instant.

---

# 35. PREP TIME FLOOR

Final Preparation Time cannot drop below:

**30% of original Base Prep Ã— Complexity**

This prevents very high-tier stacking from eliminating the Preparation phase.

---

# 36. KNIFE SOURCE

Kitchen Knives are primarily crafted by:

**Smithing**

with possible:

- Woodcutting handle;
- Leatherworking grip;
- high-tier special materials.

Cooking owns:

- equip level;
- effects;
- Prep Power.

Smithing owns exact crafting recipe.

---

# 37. TOOL UPGRADE CHAIN

Default:

**Previous Kitchen Knife + current-tier metal + grip/handle â†’ next Knife**

Old Knives can later move to Cooking workers.

No durability.

---

# 38. PROFESSION CLOTHING

Cooking-specific clothing begins around T3.

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Kitchenhand Cap | Prep Time -4% |
| T3 / L25 | Kitchenhand Apron | Ingredient Preservation +3 pp |
| T3 / L25 | Kitchenhand Trousers | Cooking Mastery XP +4% |
| T3 / L25 | Kitchenhand Gloves | Extra Serving Chance +3 pp |
| T3 / L25 | Kitchenhand Shoes | Cook Time -3% |
| Set | Kitchenhand 5/5 | Cooking action time -4% |
| T5 / L45 | Provisioner Hat | Smokehouse Cook Time -6% |
| T5 / L45 | Provisioner Coat | Ingredient Preservation +4 pp |
| T5 / L45 | Provisioner Leggings | Provision recipes Extra Serving +5 pp |
| T5 / L45 | Provisioner Gloves | Batch Cook Time -4% |
| T5 / L45 | Provisioner Boots | Prep Time -4% |
| Set | Provisioner 5/5 | Provision recipes output +1 serving guaranteed |
| T7 / L65 | Hearthmaster Hood | Grill/Oven Cook Time -6% |
| T7 / L65 | Hearthmaster Apron | Extra Serving Chance +5 pp |
| T7 / L65 | Hearthmaster Legguards | Cooking XP +5% |
| T7 / L65 | Hearthmaster Gloves | Prep Time -6% |
| T7 / L65 | Hearthmaster Boots | Pot/Oven warm-up -8% |
| Set | Hearthmaster 5/5 | Direct food recipes Cook Time -5% |
| T9 / L85 | Master Chef Toque | Prep Time -8% |
| T9 / L85 | Master Chef Coat | Ingredient Preservation +5 pp |
| T9 / L85 | Master Chef Trousers | Cooking Mastery XP +8% |
| T9 / L85 | Master Chef Gloves | Extra Serving Chance +6 pp |
| T9 / L85 | Master Chef Shoes | Cook Time -7% |
| Set | Master Chef 5/5 | All Cooking time -5%; Preservation +3 pp |

Players can freely mix pieces.

---

# 39. COOKING CLOTHING IDENTITIES

## Kitchenhand

General early Cooking.

## Provisioner

Batches / Smokehouse / worker supply.

## Hearthmaster

Direct Combat food.

## Master Chef

High-tier general Cooking.

No set should be universally best.

---

# 40. PROFESSION JEWELRY

| Cooking Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Cook's Band | Ingredient Preservation +5 pp | Resource efficiency |
| 25 | Prep Charm | Prep Time -6% | Knife / prep |
| 35 | Serving Ring | Extra Serving Chance +5 pp | Quantity |
| 45 | Smokehouse Pendant | Smokehouse Time -8%; Provision Mastery +6% | Provisions |
| 55 | Hearthstone Loop | Grill/Oven Cook Time -6% | Direct food |
| 65 | Stewkeeper Chain | Pot Cook Time -7%; Pot recipes Preservation +3 pp | Pot meals |
| 75 | Banquet Signet | Complexity Prep penalty -8%; Banquet Mastery +8% | Complex meals |
| 85 | Aether Chef Charm | Prep + Cook Time -4% on T8+ recipes | High-tier general |
| 95 | Astral Chef Emblem | Preservation +4 pp; Extra Serving +4 pp | Endgame general |

Jewelry supports:

- preservation;
- serving yield;
- Prep;
- Pot;
- Smokehouse;
- Banquets.

Old situational pieces can remain useful at Cooking 100.

---

# 41. COOKING LOADOUTS

Recommended saved presets:

## Combat Food

- Hearthmaster pieces;
- Oven / Grill speed;
- high output/hour.

## Ingredient Saver

- Preservation gear;
- rare Fish / rare aquatic inputs.

## Provisioner

- Smokehouse;
- serving yield;
- worker provisions.

## Banquet

- Complexity reduction;
- Prep speed;
- endgame rare meals.

## Mastery

- Mastery XP equipment;
- high recipe repetition.

---

# 42. RECIPE MASTERY

Every baseline recipe has:

**Mastery 1â€“100**

Examples:

- Grilled River Fish Mastery;
- Fish Strips Mastery;
- Stormshell Stew Mastery;
- Starveil Feast Mastery.

Mastery belongs to the recipe, not ingredient species.

Therefore using:

- Frost Salmon;
- Moonbelly Eel;

inside the same compatible recipe advances that recipe's Mastery.

---

# 43. RECIPE MASTERY MILESTONES

| Recipe Mastery | Permanent Recipe Effect |
|---|---|
| 10 | Recipe Prep Time -2% |
| 25 | Ingredient Preservation +3 percentage points |
| 50 | Recipe Cook Time -4% |
| 75 | Extra Serving Chance +5 percentage points |
| 100 | Prep Time -3% additional; Cook Time -3% additional; Preservation +3 pp |

These are baseline universal effects.

Special utility recipes can replace an irrelevant milestone with a recipe-specific effect.

Example:

Fish Strips Mastery 75 might improve:

**Fish Strip output**

instead of Extra Food Serving.

---

# 44. SKILL-WIDE COOKING MASTERY

Recommended:

| Completion | Reward |
|---:|---|
| 10% | Prep Time -2% |
| 25% | Ingredient Preservation +2 pp; second Cooking preset |
| 50% | Worker Cooking efficiency +5%; Cook Time -2% |
| 75% | Extra Serving Chance +5 pp; third Cooking preset |
| 100% | Prep Time -4%; Cook Time -4%; Master Chef completion marker |

100% is long-term completion.

Not required for normal progression.

---

# 45. COOKING SPECIALIZATIONS

Unlock:

**Cooking Level 35**

Three baseline Specializations:

1. Provisioner;
2. Hearth Chef;
3. Gourmet Chef.

All freely reversible outside an active Cooking action.

---

# 46. PROVISIONER SPECIALIZATION

Focus:

**quantity / long-term supply / provisions**

Effects:

- Extra Serving Chance +12 pp;
- Ingredient Preservation +5 pp;
- Smokehouse Cook Time -12%;
- Provision recipe Mastery XP +10%;
- Banquet Prep Time +5%.

Best for:

- worker provisions;
- bulk Combat food;
- long idle production.

---

# 47. HEARTH CHEF SPECIALIZATION

Focus:

**fast Combat food**

Effects:

- Grill/Oven Cook Time -12%;
- Prep Time -8% on direct edible recipes;
- Extra Serving Chance +5 pp;
- utility Prep recipes action time +5%.

Best for:

- immediate Combat sustain;
- leveling;
- direct Fish conversion.

---

# 48. GOURMET CHEF SPECIALIZATION

Focus:

**complex / rare meals**

Effects:

- Complexity multiplier -12%;
- Ingredient Preservation +8 pp on Complexity 5+;
- Recipe Mastery XP +12% on Complexity 5+;
- Banquet Cook Time -10%;
- simple Complexity 1â€“2 recipes Cook Time +5%.

Best for:

- rare Fish;
- T8â€“T10;
- Starveil Feast;
- expensive ingredients.

---

# 49. SPECIALIZATION SWITCHING

Rules:

- free;
- outside active recipe;
- changing Specialization cancels current incomplete recipe;
- reserved ingredients return if the recipe has not completed;
- presets remember Specialization.

No respec currency.

---

# 50. FOOD SHOULD NOT HAVE RANDOM BUFF ROLLS

Specialization changes:

- production;
- efficiency;
- Mastery.

It does **not** create different stat versions of the same meal.

A Starveil Feast is identical regardless of which Specialization produced it.

This preserves clean item stacks.

---

# 51. COOKING WORKERS

Workers can perform Cooking.

Worker data:

- Cooking Proficiency;
- Kitchen Knife;
- profession clothing;
- jewelry;
- assigned Kitchen;
- recipe;
- Batch Size;
- production schedule;
- ingredient reserve policy.

Workers consume real ingredients.

---

# 52. PROVEN RECIPE RULE

A recipe becomes:

**Proven**

for workers at:

**Recipe Mastery 10**

Before that:

player can cook it;

workers cannot.

This means the player personally learns new Cooking before automating it.

---

# 53. WORKER COOKING PROFICIENCY

Base Worker Cooking Efficiency:

**50% + (Proficiency Ã— 0.50%)**

Examples:

- Proficiency 1 â†’ 50.5%;
- 50 â†’ 75%;
- 100 â†’ 100%.

Gear and Kitchen modifiers apply afterward.

Workers gain Proficiency.

They do not gain player Cooking XP or player Recipe Mastery.

---

# 54. FRONTIER RECIPE PENALTY

For recipes in the highest Cooking Tier currently unlocked:

| Player Recipe Mastery | Worker Frontier Multiplier |
|---:|---:|
| 10â€“24 | 75% |
| 25â€“49 | 85% |
| 50â€“74 | 92.5% |
| 75â€“99 | 97.5% |
| 100 | 100% |

Older recipes have no Frontier penalty.

---

# 55. KITCHEN WORKER CAPACITY

Recommended:

| Kitchen | Cooking Worker Slots |
|---|---:|
| Campfire | 0 |
| Kitchen I | 0 |
| Kitchen II | 1 |
| Kitchen III | 3 |
| Kitchen IV | 6 |
| Kitchen V | 10 |

Additional Estate systems can expand total worker organization later.

---

# 56. OLD KNIVES / GEAR MOVE TO WORKERS

When player upgrades:

**Frostsilver Knife â†’ Stormiron Knife**

old Frostsilver Knife can move to a worker.

Same for:

- clothing;
- jewelry.

This creates a natural second life for profession equipment.

---

# 57. WORKER INGREDIENT POLICY

Workers must respect:

- Bank reserves;
- protected ingredients;
- recipe priority;
- fallback recipe.

Example:

> Cook Storm Rations while Raw Fish > 5,000.  
> Never consume Starveil Marlin.  
> If Fish reserve falls below 5,000, switch to Roasted Root Bowl.

This is critical for long unattended sessions.

---

# 58. ACTIVITY PLANNER â€” COOKING

Starter rules:

- cook indefinitely;
- stop at output quantity;
- stop at Cooking Level;
- stop when input unavailable.

House:

- stop at Recipe Mastery;
- 2-step queue.

Lodge:

- resource reserves;
- 4-step queue;
- fallback recipe.

Manor:

- 6-step queue;
- cross-profession transition;
- saved Cooking preset switching.

Estate:

- 10-step queue;
- worker food reserves;
- provision policies.

Holdings:

- department-level Cooking schedules;
- multiple worker teams;
- large food maintenance targets.

---

# 59. FISHING â†’ COOKING CHAIN

Example player chain:

> Fish River Salmon until 2,000  
> â†’ cook compatible Oily Fish recipe  
> â†’ stop when prepared food reaches 2,000  
> â†’ switch activity.

Worker version:

> Fishing Team maintains raw Fish reserve.  
> Cooking Team converts overflow into meals.

This is one of the first major profession automation chains.

---

# 60. HUNTING / FARMING / FORAGING CHAINS

Future examples:

**Farming**
â†’ Grain / Vegetables / Herbs  
â†’ Cooking.

**Hunting**
â†’ Game Meat  
â†’ Cooking.

**Foraging**
â†’ Mushrooms / Herbs / Berries  
â†’ Cooking.

Cooking should become a consumer that gives all three gathering professions permanent relevance.

---

# 61. RESOURCE RESERVES

Cooking respects protected resource quantities.

Example:

**Aether Pearl Reserve: 200**

Cooking cannot use Aether Pearl below 200 unless:

**Ignore Reserve**

is enabled.

This prevents high-tier recipes from consuming:

- Jewelcrafting resources;
- Alchemy resources;
- Fishing Bait inputs.

---

# 62. RECIPE INPUT PRIORITY

When a recipe accepts a tag such as:

**[Oily Fish]**

player can configure ingredient priority:

1. Lowest Value First;
2. Highest Quantity First;
3. Manual Priority;
4. Specific Allowed Species;
5. Specific Excluded Species.

Default:

**Lowest Value First**

This prevents Cooking from automatically consuming rare Fish when a common compatible Fish exists.

---

# 63. MANUAL INGREDIENT FILTER

Example:

Recipe:

**Frostmere Salmon Roast â€” 1 [Oily Fish]**

Player can set:

Allowed:

- River Salmon;
- Moonbelly Eel;
- Frost Salmon.

Excluded:

- Prism Eel.

This gives control without creating duplicate recipes.

---

# 64. TAG RECIPE BANK PREVIEW

Recipe UI should show:

**Compatible Ingredients in Bank**

Example:

[Oily Fish]:

- River Salmon Ã—2,400;
- Moonbelly Eel Ã—800;
- Emberfin Tuna Ã—220;
- Frost Salmon Ã—1,100.

The player can immediately understand production capacity.

---

# 65. COMPLETE COOKING METHODS

| Method | Unlock Lvl | Warm-Up | Primary Identity | Main Uses |
|---|---|---|---|---|
| Prep Table | 1 | 0.0 | Utility | Fish Strips, Shell Bait, Oils, sauces, ingredient prep |
| Grill | 1 | 0.0 | Speed | Fast 1â€“2 ingredient foods; best simple throughput |
| Pot | 10 | 5.0 | Serving Efficiency | Soups, broths, chowders, stews; multi-serving recipes |
| Oven | 25 | 7.0 | Food Value | Bakes, roasts, premium prepared foods |
| Smokehouse | 35 | 12.0 | Provisioning | Long batches; rations / provisions / bait prep |
| Banquet Station | 75 | 10.0 | Complex Meals | High-tier multi-ingredient feasts and large serving outputs |

Methods remain useful through the whole game.

T10 Cooking still uses:

- Grill;
- Pot;
- Oven;

not only Banquet Station.

---

# 66. COMPLETE RECIPE LIST

| Lvl | Tier | Recipe | Method | Complexity | Inputs | Output | Qty | Food Value | Prep | Cook | XP | Role |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | T1 | Grilled River Fish | Grill | 1 | 1 [Basic Fish] or 1 [Small Fish] | Grilled River Fish | 1 | 12 | 1.8 | 3.5 | 7 | Early direct food |
| 4 | T1 | Riverweed Broth | Pot | 1 | 1 [Basic Fish] + 1 River Weed | Riverweed Broth | 2 | 9 | 2.2 | 5.5 | 9 | Ingredient-efficient early food |
| 8 | T1 | Roasted Root Bowl | Grill | 1 | 1 [Vegetable] + 1 [Fruit] | Roasted Root Bowl | 2 | 8 | 2.0 | 4.0 | 8 | Non-Fishing early food |
| 9 | T1 | Fish Strips | Prep Table | 1 | 2 [Small Fish] | Fish Strip | 4 | 0 | 2.0 | 0.0 | 8 | Fishing Bait |
| 11 | T2 | Herbed Reedmere Fillet | Grill | 2 | 1 [Basic Fish] + 1 [Herb] | Herbed Reedmere Fillet | 1 | 20 | 2.8 | 4.2 | 13 | Direct combat food |
| 14 | T2 | Mussel Chowder | Pot | 2 | 1 Freshwater Mussel + 1 [Grain] + 1 [Herb] | Mussel Chowder | 3 | 15 | 3.4 | 6.5 | 17 | Multi-serving meal |
| 17 | T2 | Hearty Fisher Stew | Pot | 2 | 1 [Hearty Fish] or 1 [Game Meat] + 1 [Vegetable] + 1 [Herb] | Hearty Fisher Stew | 3 | 17 | 3.6 | 7.0 | 19 | Hearty meal |
| 19 | T2 | Smoked River Ration | Smokehouse | 2 | 2 [Basic Fish] + 1 [Herb] | Smoked River Ration | 3 | 14 | 3.2 | 9.0 | 18 | Provision / long-idle food |
| 21 | T3 | Silverrun Herb Fillet | Grill | 2 | 1 [Delicate Fish] + 1 [Herb] | Silverrun Herb Fillet | 1 | 29 | 3.2 | 4.8 | 24 | High-value direct food |
| 24 | T3 | Crayfish Grain Pot | Pot | 3 | 1 Crayfish + 1 [Grain] + 1 [Vegetable] | Crayfish Grain Pot | 3 | 23 | 4.2 | 7.5 | 29 | Efficient servings |
| 27 | T3 | Oily Fish Cakes | Oven | 3 | 1 [Oily Fish] + 1 [Grain] + 1 [Herb] | Oily Fish Cakes | 2 | 27 | 4.5 | 7.0 | 31 | Balanced food |
| 29 | T3 | Fish Oil | Prep Table | 2 | 2 [Oily Fish] | Fish Oil | 1 | 0 | 3.4 | 0.0 | 26 | Alchemy / Cooking reagent |
| 31 | T4 | Brackwater Bake | Oven | 3 | 1 [Hearty Fish] + 1 [Vegetable] + 1 [Herb] | Brackwater Bake | 2 | 36 | 4.8 | 7.8 | 39 | Midgame sustain |
| 34 | T4 | Pearlscale ConsommÃ© | Pot | 4 | 1 [Rare Delicacy] + 1 [Herb] + 1 Brine Kelp | Pearlscale ConsommÃ© | 2 | 42 | 5.3 | 8.5 | 46 | Rare-food conversion |
| 37 | T4 | Kelp Grain Bowl | Pot | 3 | 1 [Basic Fish] + 1 [Grain] + 1 Brine Kelp | Kelp Grain Bowl | 3 | 31 | 4.6 | 7.6 | 41 | Bulk midgame food |
| 39 | T4 | Shell Bait | Prep Table | 2 | 2 Freshwater Mussel or 2 Crayfish or 1 Stormshell | Shell Bait | 4 | 0 | 3.8 | 0.0 | 34 | Fishing Bait |
| 41 | T5 | Embercoast Seared Predator | Grill | 3 | 1 [Predator Fish] + 1 [Herb] | Embercoast Seared Predator | 1 | 50 | 4.6 | 5.5 | 54 | Fast high-value food |
| 44 | T5 | Ember Coral Stew | Pot | 4 | 1 [Hearty Fish] + 1 Ember Coral + 1 [Vegetable] | Ember Coral Stew | 3 | 42 | 5.8 | 9.0 | 61 | Efficient high-tier meal |
| 47 | T5 | Cinder Schoolfish Skewers | Grill | 3 | 2 [Small Fish] + 1 [Vegetable] | Cinder Schoolfish Skewers | 4 | 33 | 5.0 | 6.0 | 56 | Bulk Fish conversion |
| 49 | T5 | Spiced Smoked Predator | Smokehouse | 4 | 2 [Predator Fish] + 1 [Herb] | Spiced Smoked Predator | 3 | 39 | 5.6 | 10.5 | 64 | Provision / predator sink |
| 51 | T6 | Frostmere Salmon Roast | Oven | 4 | 1 [Oily Fish] + 1 [Herb] + 1 [Vegetable] | Frostmere Salmon Roast | 1 | 63 | 5.5 | 8.8 | 72 | High sustain |
| 54 | T6 | Frost Pearl Chowder | Pot | 4 | 1 [Premium Fish] + 1 Frost Pearl + 1 [Grain] | Frost Pearl Chowder | 3 | 54 | 6.2 | 9.5 | 80 | Premium multi-serving |
| 57 | T6 | Glacial Sturgeon Platter | Oven | 5 | 1 [Premium Fish] + 1 [Vegetable] + 1 [Herb] + 1 [Mushroom] | Glacial Sturgeon Platter | 3 | 57 | 6.8 | 10.0 | 86 | Complex premium food |
| 59 | T6 | Refined Fish Oil | Prep Table | 3 | 3 [Oily Fish] + 1 Frost Pearl | Refined Fish Oil | 2 | 0 | 5.0 | 0.0 | 70 | Advanced reagent |
| 61 | T7 | Stormreach Barracuda Grill | Grill | 4 | 1 [Predator Fish] + 1 [Herb] + 1 [Vegetable] | Stormreach Barracuda Grill | 1 | 76 | 5.8 | 6.5 | 91 | Fast T7 combat food |
| 64 | T7 | Stormshell Stew | Pot | 5 | 1 [Hearty Fish] + 1 Stormshell + 1 [Vegetable] + 1 [Herb] | Stormshell Stew | 3 | 66 | 7.0 | 10.5 | 102 | Ingredient-efficient sustain |
| 67 | T7 | Tempest Ray Bake | Oven | 5 | 1 [Rare Delicacy] + 1 [Grain] + 1 [Herb] | Tempest Ray Bake | 2 | 72 | 7.3 | 10.8 | 108 | Rare T7 dish |
| 69 | T7 | Storm Rations | Smokehouse | 4 | 2 [Predator Fish] or 2 [Game Meat] + 1 [Herb] | Storm Rations | 4 | 56 | 6.4 | 12.5 | 96 | Worker / long-idle provisions |
| 71 | T8 | Aether Herb Plate | Oven | 5 | 1 [Premium Fish] + 1 [Herb] + 1 [Vegetable] | Aether Herb Plate | 2 | 88 | 7.4 | 11.0 | 116 | Premium sustain |
| 74 | T8 | Prism Eel Pot | Pot | 5 | 1 [Oily Fish] + 1 Aether Pearl + 1 [Mushroom] | Prism Eel Pot | 3 | 80 | 7.8 | 11.5 | 124 | High-efficiency meal |
| 77 | T8 | Skyglass Banquet | Banquet Station | 6 | 1 [Rare Delicacy] + 1 [Premium Fish] + 1 [Grain] + 1 [Herb] | Skyglass Banquet | 6 | 77 | 9.5 | 13.0 | 138 | Large premium batch |
| 79 | T8 | Aether Glaze | Prep Table | 4 | 1 Aether Pearl + 1 Fish Oil + 1 [Herb] | Aether Glaze | 2 | 0 | 6.0 | 0.0 | 104 | T9â€“T10 Cooking reagent |
| 81 | T9 | Umbral Cod Bake | Oven | 5 | 1 [Hearty Fish] + 1 [Mushroom] + 1 [Herb] | Umbral Cod Bake | 2 | 108 | 8.0 | 11.8 | 146 | T9 sustain |
| 84 | T9 | Nightfin Steak | Grill | 5 | 1 [Predator Fish] + 1 Aether Glaze | Nightfin Steak | 1 | 120 | 7.6 | 7.2 | 154 | Fast premium food |
| 87 | T9 | Abyssal Ray Stew | Pot | 6 | 1 [Rare Delicacy] + 1 Umbral Ink + 1 [Vegetable] + 1 [Herb] | Abyssal Ray Stew | 4 | 100 | 9.2 | 13.0 | 168 | Large rare meal |
| 89 | T9 | Umbral Reduction | Prep Table | 5 | 1 Umbral Ink + 1 Refined Fish Oil + 1 [Herb] | Umbral Reduction | 2 | 0 | 7.0 | 0.0 | 132 | T10 Cooking / Alchemy reagent |
| 91 | T10 | Star Sardine Platter | Oven | 5 | 2 [Small Fish] + 1 [Grain] + 1 [Herb] | Star Sardine Platter | 4 | 122 | 8.4 | 12.0 | 180 | Bulk T10 food |
| 94 | T10 | Comet Tuna Roast | Oven | 6 | 1 [Premium Fish] + 1 Aether Glaze + 1 [Vegetable] | Comet Tuna Roast | 1 | 145 | 9.2 | 12.8 | 195 | Premium direct food |
| 97 | T10 | Celestial Sturgeon Banquet | Banquet Station | 7 | 1 [Premium Fish] + 1 [Rare Delicacy] + 1 [Grain] + 1 [Herb] + 1 Aether Glaze | Celestial Sturgeon Banquet | 6 | 132 | 11.5 | 14.5 | 218 | Large endgame meal |
| 100 | T10+ | Starveil Feast | Banquet Station | 8 | 1 [Mythic Delicacy] + 1 Star Coral + 1 Umbral Reduction + 1 [Grain] + 1 [Herb] | Starveil Feast | 8 | 165 | 13.0 | 16.0 | 260 | Highest baseline Cooking dish |

This is the baseline 1â€“100 Cooking content.

Future expansions should add:

- genuinely new ingredients;
- new methods;
- new economic roles;

rather than simply adding 50 more copies of existing Fish recipes.

---

# 67. FOOD VALUE PROGRESSION

Baseline Food Values intentionally rise from roughly:

**8â€“20 early**

to:

**120â€“165 endgame**

per serving.

Multi-serving recipes may have slightly lower Food Value per serving than direct rare dishes but much higher total batch value.

This creates two optimization axes:

- Food Value per serving;
- total Food Value per ingredient / per hour.

---

# 68. TOTAL FOOD VALUE

For a recipe:

**Total Food Value = Output Quantity Ã— Food Value per Serving**

Example:

Starveil Feast:

- 8 servings;
- 165 Food Value;

Base total:

**1,320 Food Value**

before Extra Serving.

This is why rare Banquets are powerful even though they require expensive inputs.

---

# 69. INGREDIENT EFFICIENCY

Analytics should show:

**Food Value per Input Value**

and:

**Food Value/hour**

A Pot recipe might produce less Food Value per individual serving but more total sustain per raw ingredient.

An Oven recipe might produce higher value per serving but lower servings.

The player chooses according to goal.

---

# 70. COMBAT FOOD LOADOUT â€” THREE SLOTS

Recommended Combat integration:

Player equips:

**Food Slot 1**

**Food Slot 2**

**Food Slot 3**

Combat auto-eats from Slot 1.

When Slot 1 has no food:

automatically use Slot 2.

Then:

Slot 3.

This lets players prepare fallback food without babysitting Combat.

---

# 71. FOOD SLOT PRIORITY

Example:

Slot 1:

**Starveil Feast**

Slot 2:

**Comet Tuna Roast**

Slot 3:

**Storm Rations**

If premium food runs out during a long idle Combat session:

the character continues using cheaper food.

This directly supports long unattended gameplay.

---

# 72. FOOD SLOT SETTINGS

Recommended options:

- Enable / Disable slot;
- Minimum reserve;
- Auto-advance when empty;
- Return to higher-priority slot if restocked by worker;
- Lock premium food from worker consumption.

Default:

**Auto-advance when empty = ON**

---

# 73. FOOD DOES NOT SPOIL

Baseline:

- raw ingredients do not spoil;
- cooked food does not spoil;
- provisions do not expire.

Reason:

The game is long-term idle with unlimited stackable Bank resources.

Spoilage timers would create unnecessary maintenance.

---

# 74. PROVISIONS

Smokehouse creates:

**Provisions**

Provisions are normal stackable food items with two main roles:

- efficient bulk Combat fallback food;
- future worker provision system.

They do not expire.

---

# 75. WORKER PROVISIONS

If workers later use provisions:

recommended model:

- provisions improve / sustain worker efficiency;
- running out slows or pauses provision-dependent work;
- workers never permanently disappear.

Cooking supplies the provision items.

Exact global worker-consumption rate belongs to the Worker / Estate system.

---

# 76. NO MANDATORY WORKER FOOD TAX EARLY

Workers should not require Cooking from the first worker unlock.

Recommended:

- early helpers function without provisions;
- mid/late Estate introduces optional / expected provisions;
- high-efficiency worker teams benefit most.

This prevents Cooking from becoming mandatory upkeep before the economy is established.

---

# 77. COOKING XP

Every completed recipe grants Cooking XP.

Base XP is listed in the recipe table.

Batch:

**XP Ã— number of recipe crafts completed**

Extra Serving does not grant additional Cooking XP.

Reason:

Extra Serving is production efficiency, not additional cooking actions.

---

# 78. RECIPE MASTERY XP

Recommended:

**Recipe Mastery XP = Cooking XP Ã— 0.40**

then apply:

- clothing;
- jewelry;
- Specialization;
- Skill-Wide Mastery.

Extra Serving does not multiply Mastery XP.

---

# 79. PREP TIME FORMULA

Recommended:

**Final Prep Time = Base Prep Time  
Ã— Complexity Multiplier  
Ã— (10 / (10 + Prep Power))  
Ã— Prep modifiers**

Banquet Station applies its Complexity reduction before final multiplicative time bonuses.

Minimum:

**30% of unmodified Prep Time**

---

# 80. COOK TIME FORMULA

Per recipe craft:

**Final Cook Time = Base Cook Time Ã— method modifiers Ã— gear Ã— jewelry Ã— specialization Ã— Mastery**

Batch:

**Warm-Up + Final Cook Time Ã— Batch Size Ã— Batch Efficiency**

Prep Table recipes have:

**Cook Time = 0**

---

# 81. WARM-UP

Methods:

- Grill: 0 baseline;
- Prep Table: 0;
- Pot: 5s;
- Oven: 7s;
- Smokehouse: 12s;
- Banquet: 10s.

Warm-Up applies per Batch, not per serving.

This makes large batches efficient.

---

# 82. EXTRA SERVING FORMULA

For each recipe craft:

1. produce Base Output Quantity;
2. roll Extra Serving Chance;
3. on success add **+1 output item**.

Specific set bonus can add guaranteed output before this roll.

No doubling.

---

# 83. INGREDIENT PRESERVATION FORMULA

For every normal consumed ingredient unit:

**roll Preservation**

If success:

do not consume.

Cap:

**50%**

The recipe still completes normally.

---

# 84. BATCH CANCELLATION

Ingredients are reserved per current recipe craft, not entire 100-size Batch.

If player cancels:

- completed crafts remain;
- unfinished current craft loses its Prep/Cook progress;
- reserved ingredients for unfinished craft return;
- future Batch inputs were never removed.

This avoids punishing long Batch cancellation.

---

# 85. INPUT FAILURE

If an ingredient runs out:

1. current valid craft finishes if inputs were already reserved;
2. no partial output;
3. attempt compatible alternate ingredient if tag recipe allows it;
4. attempt configured fallback recipe;
5. move to next valid queue step;
6. otherwise pause and explain why.

---

# 86. COOKING SCREEN â€” HIGH-LEVEL UI

Recommended layout:

## Recipe Browser

Tabs:

- Quick Food;
- Pot;
- Oven;
- Smokehouse;
- Banquets;
- Utility Prep.

Each card shows:

- recipe;
- level;
- method;
- ingredients;
- compatible Bank quantity;
- output;
- Food Value;
- Mastery.

## Active Cooking Panel

Shows:

- recipe;
- Batch progress;
- Prep phase;
- Cook phase;
- method;
- Kitchen;
- Knife;
- ingredients remaining;
- output produced.

## Ingredient Panel

Shows:

- compatible tagged ingredients;
- priority;
- exclusions;
- reserves.

## Planner Panel

Shows:

- Batch Size;
- preset;
- Specialization;
- stop condition;
- fallback;
- queue.

## Analytics

Shows:

- servings/hour;
- Food Value/hour;
- ingredient/hour;
- preserved/hour;
- Extra Servings/hour;
- XP/hour;
- Mastery/hour;
- ETA.

---

# 87. RECIPE INSPECTION

Selecting recipe displays:

- recipe name;
- method;
- Complexity;
- unlock;
- compatible inputs;
- selected input priority;
- Base Output;
- Food Value;
- Prep Time;
- Cook Time;
- Batch efficiency;
- current Preservation;
- current Extra Serving chance;
- XP;
- Mastery;
- expected/hour.

No wiki should be required.

---

# 88. FOOD INSPECTION

Food item inspection shows:

- Food Value;
- source recipe;
- current Bank amount;
- estimated Combat sustain if Combat system supports calculation;
- compatible worker-provision role;
- sell value later;
- recipe ingredients.

---

# 89. ANALYTICS

Cooking analytics should show:

- servings/hour;
- Food Value/hour;
- Food Value per ingredient;
- each input/hour;
- ingredient preservation/hour;
- Extra Servings/hour;
- Prep % of total time;
- Cook % of total time;
- batch cycle duration;
- XP/hour;
- Mastery XP/hour;
- ETA to level;
- ETA to Recipe Mastery;
- worker output separately.

---

# 90. OFFLINE COOKING

Save stores:

- active recipe;
- Batch Size;
- Batch progress;
- Prep progress;
- Cook progress;
- method;
- selected ingredient priorities;
- reserved current-craft inputs;
- loadout;
- Specialization;
- planner;
- worker assignments.

Offline uses identical formulas.

---

# 91. OFFLINE RESULTS

Show:

- elapsed time;
- recipes completed;
- servings produced;
- utility items produced;
- ingredients consumed;
- ingredients preserved;
- extra servings;
- Cooking XP;
- levels gained;
- Mastery XP;
- Mastery milestones;
- planner transitions;
- worker Cooking separately.

---

# 92. COMPLETE PROFESSION TOOL

| Tier | Knife | Equip Lvl | Prep Power | Prep Speed | Source | Mechanical Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Kitchen Knife | 1 | 5 | 0% | Starter | None |
| T1 | Copper Kitchen Knife | 5 | 7 | 4% | Smithing | Ingredient Preservation +2 pp |
| T2 | Iron Cleaver | 15 | 10 | 8% | Smithing | Prep Time -3% |
| T3 | Cobalt Chef's Knife | 25 | 13 | 12% | Smithing | Ingredient Preservation +3 pp |
| T4 | Argent Slicer | 35 | 17 | 16% | Smithing | Extra Serving Chance +3 pp |
| T5 | Emberite Cleaver | 45 | 22 | 20% | Smithing | Grill/Oven Cook Time -4% |
| T6 | Frostsilver Fillet Knife | 55 | 28 | 24% | Smithing | Fish recipes Prep Time -6% |
| T7 | Stormiron Chef's Knife | 65 | 35 | 28% | Smithing | Pot/Smokehouse Cook Time -5% |
| T8 | Aetherite Edge | 75 | 43 | 32% | Smithing | Ingredient Preservation +5 pp |
| T9 | Umbral Chef's Knife | 85 | 52 | 36% | Smithing | Extra Serving Chance +5 pp |
| T10 | Astralite Master Knife | 95 | 62 | 40% | Smithing | Prep Time -6%; Extra Serving +3 pp |

---

# 93. COMPLETE PROFESSION CLOTHING

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Kitchenhand Cap | Prep Time -4% |
| T3 / L25 | Kitchenhand Apron | Ingredient Preservation +3 pp |
| T3 / L25 | Kitchenhand Trousers | Cooking Mastery XP +4% |
| T3 / L25 | Kitchenhand Gloves | Extra Serving Chance +3 pp |
| T3 / L25 | Kitchenhand Shoes | Cook Time -3% |
| Set | Kitchenhand 5/5 | Cooking action time -4% |
| T5 / L45 | Provisioner Hat | Smokehouse Cook Time -6% |
| T5 / L45 | Provisioner Coat | Ingredient Preservation +4 pp |
| T5 / L45 | Provisioner Leggings | Provision recipes Extra Serving +5 pp |
| T5 / L45 | Provisioner Gloves | Batch Cook Time -4% |
| T5 / L45 | Provisioner Boots | Prep Time -4% |
| Set | Provisioner 5/5 | Provision recipes output +1 serving guaranteed |
| T7 / L65 | Hearthmaster Hood | Grill/Oven Cook Time -6% |
| T7 / L65 | Hearthmaster Apron | Extra Serving Chance +5 pp |
| T7 / L65 | Hearthmaster Legguards | Cooking XP +5% |
| T7 / L65 | Hearthmaster Gloves | Prep Time -6% |
| T7 / L65 | Hearthmaster Boots | Pot/Oven warm-up -8% |
| Set | Hearthmaster 5/5 | Direct food recipes Cook Time -5% |
| T9 / L85 | Master Chef Toque | Prep Time -8% |
| T9 / L85 | Master Chef Coat | Ingredient Preservation +5 pp |
| T9 / L85 | Master Chef Trousers | Cooking Mastery XP +8% |
| T9 / L85 | Master Chef Gloves | Extra Serving Chance +6 pp |
| T9 / L85 | Master Chef Shoes | Cook Time -7% |
| Set | Master Chef 5/5 | All Cooking time -5%; Preservation +3 pp |

---

# 94. COMPLETE PROFESSION JEWELRY

| Cooking Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Cook's Band | Ingredient Preservation +5 pp | Resource efficiency |
| 25 | Prep Charm | Prep Time -6% | Knife / prep |
| 35 | Serving Ring | Extra Serving Chance +5 pp | Quantity |
| 45 | Smokehouse Pendant | Smokehouse Time -8%; Provision Mastery +6% | Provisions |
| 55 | Hearthstone Loop | Grill/Oven Cook Time -6% | Direct food |
| 65 | Stewkeeper Chain | Pot Cook Time -7%; Pot recipes Preservation +3 pp | Pot meals |
| 75 | Banquet Signet | Complexity Prep penalty -8%; Banquet Mastery +8% | Complex meals |
| 85 | Aether Chef Charm | Prep + Cook Time -4% on T8+ recipes | High-tier general |
| 95 | Astral Chef Emblem | Preservation +4 pp; Extra Serving +4 pp | Endgame general |

---

# 95. COMPLETE KITCHEN INFRASTRUCTURE

| Kitchen | Max Batch | Queue | New Method / Function | Account Role |
|---|---|---|---|---|
| Campfire | 1 | 1 | Grill + Prep Table | Personal baseline Cooking |
| Kitchen I | 5 | 2 | Pot | House; basic recipes / 2 presets |
| Kitchen II | 10 | 4 | Oven | Lodge; first worker slot / batch planning |
| Kitchen III | 25 | 6 | Smokehouse | Manor; 3 worker slots / recipe chains |
| Kitchen IV | 50 | 10 | Banquet Station | Estate; worker teams / advanced reserves |
| Kitchen V | 100 | 16 | All methods | Holdings; endgame schedules / T10+ recipes |

---

# 96. COMPLETE LEVEL ROADMAP

| Cooking Lvl | Major Unlock |
|---|---|
| 1 | Grilled River Fish; Worn Kitchen Knife; Prep Table + Grill |
| 4 | Riverweed Broth |
| 5 | Copper Kitchen Knife; Kitchen I |
| 7 | Roasted Root Bowl |
| 9 | Fish Strips |
| 10 | Pot method available |
| 11 | Herbed Reedmere Fillet |
| 14 | Mussel Chowder |
| 15 | Iron Cleaver; Cook's Band |
| 17 | Hearty Fisher Stew |
| 19 | Smoked River Ration |
| 21 | Silverrun Herb Fillet |
| 24 | Crayfish Grain Pot |
| 25 | Cobalt Chef's Knife; Oven; Kitchenhand set; Prep Charm |
| 27 | Oily Fish Cakes |
| 29 | Fish Oil |
| 31 | Brackwater Bake |
| 34 | Pearlscale ConsommÃ© |
| 35 | Argent Slicer; Smokehouse; Cooking Specializations; Serving Ring |
| 37 | Kelp Grain Bowl |
| 39 | Shell Bait |
| 41 | Embercoast Seared Predator |
| 44 | Ember Coral Stew |
| 45 | Emberite Cleaver; Provisioner set; Smokehouse Pendant |
| 47 | Cinder Schoolfish Skewers |
| 49 | Spiced Smoked Predator |
| 51 | Frostmere Salmon Roast |
| 54 | Frost Pearl Chowder |
| 55 | Frostsilver Fillet Knife; Hearthstone Loop |
| 57 | Glacial Sturgeon Platter |
| 59 | Refined Fish Oil |
| 61 | Stormreach Barracuda Grill |
| 64 | Stormshell Stew |
| 65 | Stormiron Chef's Knife; Hearthmaster set; Stewkeeper Chain |
| 67 | Tempest Ray Bake |
| 69 | Storm Rations |
| 71 | Aether Herb Plate |
| 74 | Prism Eel Pot |
| 75 | Aetherite Edge; Banquet Station; Banquet Signet |
| 77 | Skyglass Banquet |
| 79 | Aether Glaze |
| 81 | Umbral Cod Bake |
| 84 | Nightfin Steak |
| 85 | Umbral Chef's Knife; Master Chef set; Aether Chef Charm |
| 87 | Abyssal Ray Stew |
| 89 | Umbral Reduction |
| 91 | Star Sardine Platter |
| 94 | Comet Tuna Roast |
| 95 | Astralite Master Knife; Astral Chef Emblem |
| 97 | Celestial Sturgeon Banquet |
| 100 | Starveil Feast; Cooking level cap |

Cooking receives major new:

- recipe;
- method;
- Tool;
- gear;
- specialization;

throughout 1â€“100.

---

# 97. CHRONICLES â€” EARLY COOKING

Suggested goals:

1. Grill first Fish.
2. Equip Kitchen Knife.
3. Explain Food Value.
4. Cook first multi-serving Broth.
5. Create Fish Strips.
6. Use cooked food in Combat.
7. Set Food Slot 1.
8. Reach first Recipe Mastery milestone.
9. Unlock Pot.

---

# 98. CHRONICLES â€” MIDGAME COOKING

Suggested goals:

- unlock Oven;
- unlock Smokehouse;
- choose Cooking Specialization;
- create Fish Oil;
- cook a Rare Delicacy;
- create Shell Bait;
- build Kitchen II / III;
- make first Proven recipe;
- assign Cooking worker;
- create Fishing â†’ Cooking planner chain.

---

# 99. CHRONICLES â€” LATE COOKING

Suggested goals:

- unlock Banquet Station;
- prepare Skyglass Banquet;
- create Aether Glaze;
- maintain Combat food reserve automatically;
- create Umbral Reduction;
- cook Celestial Sturgeon Banquet;
- reach Cooking 100;
- prepare Starveil Feast.

---

# 100. ENDGAME CHRONICLE â€” MASTER CHEF

Recommended requirements:

- Cooking 100;
- Kitchen V;
- Astralite Master Knife;
- Starveil Feast Mastery 50;
- cook every baseline edible recipe at least once;
- create all utility preparations at least once.

Reward:

- fourth Cooking preset;
- Master Chef completion marker;
- Worker Cooking efficiency +3%;
- Extra Serving Chance +2 pp.

This is completion/optimization, not a core progression gate.

---

# 101. DEVTOOLS

Cooking DevTools should support:

- set Cooking Level;
- set Recipe Mastery;
- set Skill-Wide Mastery;
- unlock all recipes;
- spawn tagged ingredients;
- spawn Food;
- spawn Knife;
- spawn clothing/jewelry;
- set Kitchen Tier;
- set Batch Size;
- set Prep progress;
- set Cook progress;
- set Preservation;
- set Extra Serving;
- set Specialization;
- mark recipe Proven;
- spawn Cooking worker;
- set worker Proficiency;
- instant complete recipe/Batch;
- simulate 1m / 5m / 1h / 8h / 24h;
- compare expected/hour vs simulation.

---

# 102. DATA MODEL

Recipe data:

- ID;
- Name;
- Tier;
- Level;
- Method;
- Complexity;
- input rules;
- exact / tagged ingredients;
- Base Output;
- Output Quantity;
- Food Value;
- Base Prep Time;
- Base Cook Time;
- XP;
- category;
- utility flag.

Tool data:

- Prep Power;
- Prep Speed;
- profession effects.

Kitchen data:

- methods;
- max Batch;
- queue;
- worker capacity.

Player data:

- Recipe Mastery;
- Proven flags;
- presets;
- ingredient priorities;
- reserves;
- planner.

---

# 103. ANTI-BLOAT RULES

Avoid:

- one cooked item for every single Fish species;
- random meal quality;
- food spoilage;
- 20 seasoning currencies;
- separate Pots/Ovens as equippable Tools;
- recipe failure;
- manual timing;
- huge buff-food ecosystem overlapping Alchemy;
- a different provision item every Tier unless useful.

Prefer:

- ingredient tags;
- meaningful recipes;
- clear method identities;
- reusable utility items;
- predictable production;
- strong Cooking â†” Fishing/Farming/Hunting/Foraging links.

---

# 104. MAJOR OPEN QUESTIONS â€” RECOMMENDED ANSWERS

These are already answered with the recommended baseline.

## Should every Fish have a unique Cooked Fish recipe?

**No.**

Use Fishing Cooking Classes and tagged recipes.

This prevents 40 nearly identical recipes.

---

## Should Cooking have ingredient tags?

**Yes.**

This is a core architecture decision.

It lets future professions add variety without exploding Cooking recipe count.

---

## Should Cooking have random quality?

**No.**

One recipe = one output item stack.

---

## Should Cooking fail / burn food?

**No.**

No random loss.

---

## Should Cooking require active timing?

**No.**

Preparation and cooking are automatic.

---

## Should Cooking use Heat like Smithing?

**No detailed Heat simulation.**

Cooking methods and warm-up provide identity without copying Smithing.

---

## Should Knife durability exist?

**No.**

Permanent Tool.

---

## Should Knife affect all Cooking equally?

**Mainly Preparation.**

Specific Knife effects can target categories.

Kitchen/method/gear own most Cook-phase progression.

---

## Should Cooking require Estate Kitchen from Level 1?

**No.**

Campfire supports early Cooking.

Estate Kitchen expands scale and methods.

---

## Should Pot/Oven/Smokehouse be separate skills?

**No.**

They are Cooking methods.

---

## Should Batch Size give free output?

**No.**

It improves efficiency mainly through reduced warm-up overhead.

Extra Serving is a separate stat.

---

## Should Extra Serving double the recipe?

**No.**

It adds +1 serving.

This keeps large multi-serving meals balanced.

---

## Should Ingredient Preservation save rare ingredients?

**Usually yes, up to cap.**

Explicit protected endgame inputs can ignore Preservation.

---

## Should food provide Combat stat buffs?

**Not baseline.**

Cooking owns sustain.

Alchemy / equipment own most buffs.

---

## Should food expire?

**No.**

No spoilage.

---

## Should raw ingredients expire?

**No.**

Same reason.

---

## Should Combat have multiple food slots?

**Yes: 3 slots.**

Priority:

1 â†’ 2 â†’ 3.

This directly supports long idle Combat.

---

## Should Combat switch automatically when food runs out?

**Yes by default.**

Player can disable individual slots.

---

## Should Cooking produce worker provisions?

**Yes, especially Smokehouse recipes.**

But global worker system determines actual upkeep.

---

## Should early workers require provisions?

**No.**

Introduce provision dependence later.

---

## Should Cooking workers consume real ingredients?

**Yes.**

No free food production.

---

## When can workers cook a recipe?

At:

**Recipe Mastery 10**

recipe becomes Proven.

---

## Should workers gain player Cooking XP?

**No.**

Workers gain Proficiency only.

---

## Should Cooking workers have their own Recipe Mastery?

**No.**

Player Mastery represents account knowledge.

---

## Should old Fish remain useful?

**Yes.**

Through:

- tagged recipes;
- Fish Strips;
- Fish Oil;
- provisions;
- worker food.

---

## Should rare Fish be required for normal Cooking leveling?

**No.**

They provide strong premium recipes, not progression walls.

---

## Should Starveil Marlin have a special recipe?

**Yes.**

It is Fishing's Mythic Delicacy and feeds:

**Starveil Feast**

at Cooking 100.

---

## Should Cooking have more than 40 recipes baseline?

**40 is enough for v1.0.**

Future Farming/Hunting docs can add a small number only if they create new roles.

Avoid recipe spam.

---

## Should every Tier contain exactly 4 recipes forever?

**No.**

That is a baseline content rhythm, not a permanent law.

---

## Should Cooking Specializations be permanent?

**No.**

Free switching outside active Cooking.

---

## Why these three Specializations?

They cover distinct economic goals:

- Provisioner = quantity/supply;
- Hearth Chef = fast Combat food;
- Gourmet Chef = complex rare food.

---

## Should Cooking have direct Gold generation?

**No.**

Food can be sold through global economy later, but Cooking's purpose is production and sustain.

---

## Should Cooking overlap Alchemy through Fish Oil / reagents?

**Yes, deliberately.**

Cross-profession materials are good.

But Cooking should not become potion crafting.

---

## Should Cooking consume Aether Pearl / Umbral Ink even though other professions need them?

**Yes, selectively.**

This creates meaningful resource choices.

Reserve rules prevent accidental consumption.

---

## Should recipe tag selection automatically consume rare Fish?

**No.**

Default is Lowest Value First.

Player can whitelist / blacklist species.

---

## Should exact ingredient priority be visible?

**Yes.**

The UI must show which items the next recipe craft will consume.

---

# 105. COMPLETE LOCKED COOKING BASELINE

1. Cooking uses Recipe Composition + Prep + Cooking Method + Batch.
2. 40 baseline recipes.
3. Six method families including Prep Table.
4. No random food quality.
5. No burning/failure.
6. No food spoilage.
7. Kitchen Knife is primary Tool.
8. 10 Knife progression plus Worn Knife.
9. Ingredient tags connect future professions cleanly.
10. Fishing's Cooking Classes are used directly.
11. Pot favors multi-serving efficiency.
12. Oven favors premium Food Value.
13. Grill favors speed.
14. Smokehouse favors provisions / long batches.
15. Banquet Station handles endgame complex meals.
16. Prep Table produces utility ingredients/bait/reagents.
17. Batches reduce warm-up overhead.
18. Extra Serving adds +1, not double output.
19. Ingredient Preservation cap 50%.
20. Extra Serving cap 60%.
21. Recipe Mastery 1â€“100.
22. Skill-Wide Cooking Mastery.
23. Three reversible Specializations:
    - Provisioner;
    - Hearth Chef;
    - Gourmet Chef.
24. Estate Kitchen scales from Campfire to Kitchen V.
25. Workers use real ingredients.
26. Recipe Mastery 10 makes recipe Proven for workers.
27. Worker frontier penalty decreases with player Recipe Mastery.
28. Planner supports recipe chains, reserves, tagged input priority, and Fishing â†’ Cooking automation.
29. Cooking produces Fish Strip / Shell Bait / Fish Oil / advanced reagents.
30. Cooking supplies Combat and future worker provisions.
31. Combat uses 3 priority Food Slots.
32. Food slots automatically advance when a stack is empty.
33. UI exposes servings/hour, Food Value/hour, ingredient usage, preservation, Extra Serving, XP, Mastery, and ETA.
34. Offline uses same formulas as active Cooking.
35. All baseline Cooking content lives in this single MD.

---

# 106. FINAL SUMMARY

Cooking begins with:

**Campfire**

â†“

**Grilled River Fish**

â†“

**Broths / simple meals**

â†“

**Pot Cooking**

â†“

**Oven**

â†“

**Fish Oils / Bait / utility prep**

â†“

**Smokehouse provisions**

â†“

**Cooking Specialization**

â†“

**Estate Kitchen workers**

â†“

**Banquet Station**

â†“

**Aether / Umbral culinary reagents**

â†“

**Starveil Feast**

Its core economic identity is:

> **Raw resources become more useful when the player chooses the right recipe, method, batch, and ingredient policy.**

Cooking is not intended to win through recipe count.

It wins through:

- flexible ingredient tags;
- clear methods;
- useful conversion chains;
- large-scale automation;
- direct Combat sustain;
- integration with Fishing and future gathering professions.

Long-term progression becomes:

**I cook my own first Fish**

â†“

**I learn efficient recipes**

â†“

**I build a Kitchen**

â†“

**I automate food supply**

â†“

**workers maintain ordinary meals and provisions**

â†“

**I personally prepare rare endgame Banquets**

Core Cooking identity:

> **Cooking turns the whole gathering economy into sustain â€” from one Fish over a campfire to an Estate kitchen feeding the player's entire endgame.**



# INTEGRATION HARDENING — FARMING FRUIT

Cooking recipes that accept [Fruit] may use eligible Farming Orchard fruit items. [Fruit] is a recipe tag, not a physical inventory item. Farming owns fruit production; each normal Orchard fruit has at least one Cooking sink. Cooking, not Fishing, produces Fish Oil and Refined Fish Oil.



The Roasted Root Bowl now provides the first explicit [Fruit] sink at Cooking 8; the first Apple Tree unlocks at Farming 8. Other suitable Orchard fruits also satisfy this semantic tag.








