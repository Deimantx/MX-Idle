# 07 — FORAGING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `03_FISHING.md`, `04_COOKING.md`, `05_WOODCUTTING.md`, `06_FLETCHING.md`  
**Purpose:** Define Foraging as one complete profession in a single source-of-truth file: routes, habitat patches, search and gather phases, Search Focus, discovery, wild-resource progression, Farming domestication bridge, profession Field Kit, gear, Mastery, Specializations, Herbarium support, workers, planner, Chronicles, UI, formulas, balance, and endgame wild-resource progression.

---

# 1. FORAGING ROLE IN THE GAME

Foraging is the profession for finding and harvesting **wild natural resources** that are not efficiently produced by ordinary Farming, Fishing, Woodcutting, or Mining.

Its main outputs feed:

- Alchemy;
- Cooking;
- Tailoring;
- Farming;
- Fletching;
- Estate;
- future profession recipes.

Core resource families:

- Herbs;
- Fungi;
- Fibres;
- Botanicals;
- rare Wild Reagents.

Foraging should not become:

**Select Herb → wait → receive Herb**

Its defining systems are:

**Routes + Habitat Patches + Search Focus + Discovery**

---

# 2. CORE FANTASY

The player begins gathering common wild plants on a simple meadow route.

Over time they learn to:

- recognize useful habitat types;
- search routes more efficiently;
- focus on Herbs, Fungi, Fibres, or Botanicals;
- discover hidden species;
- identify rare wild reagents;
- gather specimens that can later be domesticated through Farming;
- create high-value Alchemy and Tailoring supply;
- establish worker routes;
- maintain old wild-resource reserves;
- personally explore the hardest endgame wild habitats.

Long-term fantasy:

**Gatherer → Herbalist → Naturalist → Master Forager → Keeper of an Estate Herbarium and Expedition Network**

---

# 3. CORE IDENTITY — FORAGING ROUTES

The player chooses a:

**Foraging Route**

A normal Route contains four repeatable Habitat Patches:

1. Herb Patch;
2. Fungi Patch;
3. Fibre Patch;
4. Botanical Patch.

The player travels through the Route in a repeating circuit.

Each Patch produces its own resource.

The Route can also contain one hidden:

**Wild Reagent Discovery**

that must first be discovered.

---

# 4. CORE ROUTE LOOP

Normal loop:

1. Select Route.
2. Equip Field Kit / profession loadout.
3. Select Search Focus.
4. Select Gather Style.
5. Begin Patch 1 Search Phase.
6. Search completes.
7. Begin Gather Phase.
8. Resource is collected.
9. XP and Resource Mastery are awarded.
10. Route Discovery is advanced.
11. Rare Wild Reagent roll occurs if already discovered.
12. Move automatically to next Patch.
13. After Patch 4:
   - complete one Route Circuit;
   - return to Patch 1;
   - repeat indefinitely.

No manual movement input is required.

---

# 5. PERSONAL ACTIVITY SLOT

Foraging uses the normal:

**one Personal Activity Slot**

If the player leaves Foraging:

- active Route pauses;
- current Search/Gather progress is stored;
- no personal route progresses in the background.

Workers are the proper background Foraging layer.

---

# 6. SEARCH PHASE

Every Patch begins with:

**Search**

Search represents:

- locating healthy specimens;
- examining terrain;
- finding a harvestable cluster;
- identifying useful material.

Route has:

**Base Search Time**

Field Kit and gear can reduce it.

Search always eventually finds something useful.

No junk result.

---

# 7. GATHER PHASE

After Search:

the player gathers the Patch resource.

Every category has a Base Gather Time.

Recommended:

| Category | Base Gather Multiplier |
|---|---:|
| Herb | 1.00x |
| Fungi | 1.05x |
| Fibre | 1.15x |
| Botanical | 1.10x |
| Hidden Rare | bonus roll; no separate Gather phase |

Tier increases Base Gather Time gradually.

Field Kit, gear, Mastery, and Gather Style modify it.

---

# 8. SEARCH FOCUS

Player chooses one active Focus:

| Focus | Affected Patch | Yield Effect | Discovery Effect | Use |
|---|---|---|---|---|
| Balanced | All four normal patches | No modifier | No modifier | Default route behaviour |
| Herbal | Herb Patch | +40% Herb yield | +25% Discovery from Herb patch | Alchemy / herbs |
| Fungal | Fungi Patch | +40% Fungi yield | +25% Discovery from Fungi patch | Fungi / Cooking / Alchemy |
| Fibre | Fibre Patch | +40% Fibre yield | +25% Discovery from Fibre patch | Tailoring / Fletching |
| Botanical | Botanical Patch | +40% Botanical yield | +25% Discovery from Botanical patch | Farming / Cooking |
| Survey | All patches | -15% normal yield | +125% Route Discovery | +50% hidden rare chance after discovery | Discovery / rare farming |

Focus affects route economics without letting the player completely delete every other resource from the route.

This preserves the feeling of actually traversing a mixed wild habitat.

---

# 9. BALANCED FOCUS

Default.

No bonuses or penalties.

Best when the player wants:

- broad supply;
- early leveling;
- general route progress.

---

# 10. HERBAL FOCUS

Herb Patch:

- +40% base Herb yield;
- +25% Discovery gain from Herb Patch.

Main consumers:

- Alchemy;
- Cooking;
- Farming domestication.

---

# 11. FUNGAL FOCUS

Fungi Patch:

- +40% Fungi yield;
- +25% Discovery gain from Fungi Patch.

Main consumers:

- Alchemy;
- Cooking;
- selected future recipes.

---

# 12. FIBRE FOCUS

Fibre Patch:

- +40% Fibre yield;
- +25% Discovery gain from Fibre Patch.

Main consumers:

- Tailoring;
- Fletching string ecosystem;
- Estate textiles.

---

# 13. BOTANICAL FOCUS

Botanical Patch:

- +40% Botanical yield;
- +25% Discovery gain.

Main consumers:

- Farming;
- Cooking;
- Alchemy.

Botanical includes:

- berries;
- seedpods;
- wild fruits;
- roots;
- other useful plant material.

---

# 14. SURVEY FOCUS

Survey is the main:

**Discovery / Rare Reagent**

mode.

Effects:

- normal resource yield -15%;
- Route Discovery +125%;
- after hidden reagent is discovered:
  - hidden rare chance +50%.

Survey is not intended for bulk common resources.

---

# 15. GATHER STYLE

In addition to Focus, Foraging uses:

| Gather Style | Gather Speed | Mastery XP | Rare Find Mult. | Identity |
|---|---|---|---|---|
| Normal Harvest | 1.00x | 1.00x | 1.00x | General |
| Careful Harvest | 0.90x | 1.15x | 1.25x | Mastery / rare-resource preservation |
| Rapid Gather | 1.10x | 0.80x | 0.85x | Bulk common resources |

Focus determines:

**what category you prioritize**

Gather Style determines:

**how aggressively or carefully you harvest**

This creates two independent setup axes without requiring active input.

---

# 16. NORMAL HARVEST

Baseline.

No changes.

Best general option.

---

# 17. CAREFUL HARVEST

Effects:

- Gather Speed -10%;
- Mastery XP +15%;
- Rare Find chance +25%.

Best for:

- rare resources;
- Mastery;
- expensive high-tier routes.

---

# 18. RAPID GATHER

Effects:

- Gather Speed +10%;
- Mastery XP -20%;
- Rare Find chance -15%.

Best for:

- bulk Fibre;
- bulk Herb;
- old-tier worker-style supply.

---

# 19. COMPLETE ROUTE PROGRESSION

| Tier | Route | Lvl | Herb Patch | Fungi Patch | Fibre Patch | Botanical Patch | Hidden Discovery | Discovery Req. | Base Search |
|---|---|---|---|---|---|---|---|---|---|
| T1 | Meadowpath Verge | 1 | Wild Mint | Buttoncap | Flaxgrass | Sunberry | Golden Yarrow | 50 | 2.4 |
| T2 | Reedfen Trail | 11 | Marsh Sage | Reedcap | Rush Fibre | Bogberry | Glowroot | 70 | 2.55 |
| T3 | Mosswood Hollow | 21 | Mossleaf | Amber Morel | Nettle Fibre | Briarberry | Silverleaf | 90 | 2.7 |
| T4 | Moonfield Ridge | 31 | Moon Thyme | Pale Chanterelle | Silken Grass | Moonseed | Dreamcap | 115 | 2.85 |
| T5 | Emberbrush Path | 41 | Cinderleaf | Ash Morel | Firegrass | Emberberry | Phoenix Root | 145 | 3.0 |
| T6 | Frostfen Traverse | 51 | Frostmint | Icecap | Snowflax | Winterberry | Crystal Bloom | 180 | 3.15 |
| T7 | Stormmoor Circuit | 61 | Stormsage | Thunder Truffle | Galegrass | Tempest Seedpod | Fulmin Root | 220 | 3.3 |
| T8 | Aetherbloom Reach | 71 | Aetherleaf | Prismcap | Cloudsilk Grass | Aetherberry | Lumen Orchid | 265 | 3.45 |
| T9 | Umbral Wilds | 81 | Shadeleaf | Gloom Morel | Nightfibre | Duskberry | Voidblossom | 315 | 3.6 |
| T10 | Starfall Sanctuary | 91 | Starleaf | Cometcap | Astral Flax | Starseed Pod | Celestial Lotus | 370 | 3.8 |

Foraging v1.0 contains:

- 10 normal Routes;
- 40 normal route resources;
- 10 hidden Wild Reagents;
- 1 post-100 endgame Expedition.

---

# 20. COMPLETE RESOURCE ROSTER

| Tier | Lvl | Resource | Category | Main Consumers | Domestication Candidate |
|---|---|---|---|---|---|
| T1 | 1 | Wild Mint | Herb | Alchemy / Cooking / Farming | Yes |
| T1 | 3 | Buttoncap | Fungi | Alchemy / Cooking | Conditional |
| T1 | 5 | Flaxgrass | Fibre | Tailoring / Fletching / Estate | Yes |
| T1 | 7 | Sunberry | Botanical | Cooking / Alchemy / Farming | Yes |
| T1 | 9 | Golden Yarrow | Wild Reagent | Alchemy / advanced crafting | No |
| T2 | 11 | Marsh Sage | Herb | Alchemy / Cooking / Farming | Yes |
| T2 | 13 | Reedcap | Fungi | Alchemy / Cooking | Conditional |
| T2 | 15 | Rush Fibre | Fibre | Tailoring / Fletching / Estate | Yes |
| T2 | 17 | Bogberry | Botanical | Cooking / Alchemy / Farming | Yes |
| T2 | 19 | Glowroot | Wild Reagent | Alchemy / advanced crafting | No |
| T3 | 21 | Mossleaf | Herb | Alchemy / Cooking / Farming | Yes |
| T3 | 23 | Amber Morel | Fungi | Alchemy / Cooking | Conditional |
| T3 | 25 | Nettle Fibre | Fibre | Tailoring / Fletching / Estate | Yes |
| T3 | 27 | Briarberry | Botanical | Cooking / Alchemy / Farming | Yes |
| T3 | 29 | Silverleaf | Wild Reagent | Alchemy / advanced crafting | No |
| T4 | 31 | Moon Thyme | Herb | Alchemy / Cooking / Farming | Yes |
| T4 | 33 | Pale Chanterelle | Fungi | Alchemy / Cooking | Conditional |
| T4 | 35 | Silken Grass | Fibre | Tailoring / Fletching / Estate | Yes |
| T4 | 37 | Moonseed | Botanical | Cooking / Alchemy / Farming | Yes |
| T4 | 39 | Dreamcap | Wild Reagent | Alchemy / advanced crafting | No |
| T5 | 41 | Cinderleaf | Herb | Alchemy / Cooking / Farming | Yes |
| T5 | 43 | Ash Morel | Fungi | Alchemy / Cooking | Conditional |
| T5 | 45 | Firegrass | Fibre | Tailoring / Fletching / Estate | Yes |
| T5 | 47 | Emberberry | Botanical | Cooking / Alchemy / Farming | Yes |
| T5 | 49 | Phoenix Root | Wild Reagent | Alchemy / advanced crafting | No |
| T6 | 51 | Frostmint | Herb | Alchemy / Cooking / Farming | Yes |
| T6 | 53 | Icecap | Fungi | Alchemy / Cooking | Conditional |
| T6 | 55 | Snowflax | Fibre | Tailoring / Fletching / Estate | Yes |
| T6 | 57 | Winterberry | Botanical | Cooking / Alchemy / Farming | Yes |
| T6 | 59 | Crystal Bloom | Wild Reagent | Alchemy / advanced crafting | No |
| T7 | 61 | Stormsage | Herb | Alchemy / Cooking / Farming | Yes |
| T7 | 63 | Thunder Truffle | Fungi | Alchemy / Cooking | Conditional |
| T7 | 65 | Galegrass | Fibre | Tailoring / Fletching / Estate | Yes |
| T7 | 67 | Tempest Seedpod | Botanical | Cooking / Alchemy / Farming | Yes |
| T7 | 69 | Fulmin Root | Wild Reagent | Alchemy / advanced crafting | No |
| T8 | 71 | Aetherleaf | Herb | Alchemy / Cooking / Farming | Yes |
| T8 | 73 | Prismcap | Fungi | Alchemy / Cooking | Conditional |
| T8 | 75 | Cloudsilk Grass | Fibre | Tailoring / Fletching / Estate | Yes |
| T8 | 77 | Aetherberry | Botanical | Cooking / Alchemy / Farming | Yes |
| T8 | 79 | Lumen Orchid | Wild Reagent | Alchemy / advanced crafting | No |
| T9 | 81 | Shadeleaf | Herb | Alchemy / Cooking / Farming | Yes |
| T9 | 83 | Gloom Morel | Fungi | Alchemy / Cooking | Conditional |
| T9 | 85 | Nightfibre | Fibre | Tailoring / Fletching / Estate | Yes |
| T9 | 87 | Duskberry | Botanical | Cooking / Alchemy / Farming | Yes |
| T9 | 89 | Voidblossom | Wild Reagent | Alchemy / advanced crafting | No |
| T10 | 91 | Starleaf | Herb | Alchemy / Cooking / Farming | Yes |
| T10 | 93 | Cometcap | Fungi | Alchemy / Cooking | Conditional |
| T10 | 95 | Astral Flax | Fibre | Tailoring / Fletching / Estate | Yes |
| T10 | 97 | Starseed Pod | Botanical | Cooking / Alchemy / Farming | Yes |
| T10 | 99 | Celestial Lotus | Wild Reagent | Alchemy / advanced crafting | No |

This is the baseline wild-resource content.

---

# 21. ROUTE DISCOVERY

Each Route has:

**Discovery Progress**

Hidden Wild Reagent begins:

**Unknown**

Every completed normal Patch adds Discovery.

Baseline:

**+1 Discovery Point per Patch**

therefore:

**+4 per full Route Circuit**

before bonuses.

---

# 22. DISCOVERY THRESHOLDS

Route thresholds scale by Tier:

| Tier | Route | Discovery Required |
|---|---|---|
| T1 | Meadowpath Verge | 50 |
| T2 | Reedfen Trail | 70 |
| T3 | Mosswood Hollow | 90 |
| T4 | Moonfield Ridge | 115 |
| T5 | Emberbrush Path | 145 |
| T6 | Frostfen Traverse | 180 |
| T7 | Stormmoor Circuit | 220 |
| T8 | Aetherbloom Reach | 265 |
| T9 | Umbral Wilds | 315 |
| T10 | Starfall Sanctuary | 370 |

The threshold is deterministic.

There is no possibility of:

> I have been unlucky for 30 hours and still haven't unlocked the species.

The player always sees:

- current Discovery;
- required Discovery;
- ETA.

---

# 23. DISCOVERY POINT FORMULA

Recommended:

**Discovery Gain = 1 × Focus modifier × gear × Field Kit × Specialization × facility modifiers**

Normal Patch:

1 base point.

Survey:

×2.25.

Focused category Patch:

additional +25% where applicable.

Store fractional progress.

---

# 24. DISCOVERING THE HIDDEN REAGENT

When Discovery reaches threshold:

1. Route pauses briefly for reveal presentation.
2. Hidden resource is identified.
3. Item becomes visible in:
   - Route UI;
   - Bestiary-equivalent profession collection;
   - Bank search metadata;
   - Alchemy/Farming dependency views where relevant.
4. Hidden Rare rolls become enabled.

No item is automatically granted from the discovery itself.

The player still needs to gather it.

---

# 25. HIDDEN WILD REAGENTS

The 10 hidden reagents are:

- Golden Yarrow;
- Glowroot;
- Silverleaf;
- Dreamcap;
- Phoenix Root;
- Crystal Bloom;
- Fulmin Root;
- Lumen Orchid;
- Voidblossom;
- Celestial Lotus.

These should feel more valuable than normal route resources.

Main consumers:

- Alchemy;
- advanced Cooking;
- profession gear;
- future high-tier recipes.

---

# 26. HIDDEN RARE DROP RULE

After a Route's Wild Reagent is discovered:

every normal Patch completion rolls for it.

Baseline chance:

| Tier | Base Rare Chance / Patch |
|---|---:|
| T1 | 3.0% |
| T2 | 2.8% |
| T3 | 2.6% |
| T4 | 2.4% |
| T5 | 2.2% |
| T6 | 2.0% |
| T7 | 1.8% |
| T8 | 1.6% |
| T9 | 1.4% |
| T10 | 1.2% |

Late resources are rarer but more valuable.

---

# 27. RARE RESOURCE QUANTITY

A normal Wild Reagent success gives:

**1 item**

Extra Gather Chance does not affect Wild Reagent quantity.

This makes:

- Rare Find Chance

the dedicated rare-resource axis.

---

# 28. NO JUNK FORAGING

Foraging does not produce:

- useless stones;
- broken twigs;
- random trash.

Every Patch gives:

- its normal resource;
- possible hidden reagent.

This profession should feel productive.

---

# 29. NORMAL RESOURCE YIELD

Baseline Patch yield:

**2 items**

Tier 4+:

selected Fibre/Botanical resources can use:

**3 items**

if economy requires more bulk.

Instead of creating unique per-item formulas, baseline implementation can use:

- Herb 2;
- Fungi 2;
- Fibre 3;
- Botanical 2.

Focus and Extra Gather Chance modify this.

---

# 30. EXTRA GATHER CHANCE

Every normal Patch can roll:

**Extra Gather Chance**

Success:

**+1 normal resource**

Hard cap:

**75%**

Specific equipment can grant explicit additional quantity outside this roll.

---

# 31. FORAGING XP

XP is awarded on successful Patch gather.

Base Tier XP:

| Tier | XP / Patch |
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

Category XP multiplier:

- Herb 1.00x;
- Fungi 1.05x;
- Fibre 0.95x;
- Botanical 1.10x.

Rare Wild Reagent bonus:

when it drops, award:

**+50% of that Patch's normal XP**

---

# 32. RESOURCE MASTERY

Every normal resource and hidden Wild Reagent has:

**Mastery 1–100**

Examples:

- Wild Mint Mastery;
- Nettle Fibre Mastery;
- Dreamcap Mastery;
- Celestial Lotus Mastery.

Normal resource Mastery gains whenever its Patch is harvested.

Wild Reagent Mastery gains only when that rare item is actually found.

---

# 33. RESOURCE MASTERY MILESTONES

| Resource Mastery | Permanent Effect |
|---|---|
| 10 | Gather Time -2% for this resource |
| 25 | Extra Gather Chance +5 percentage points |
| 50 | Focused yield bonus +10% additional when this category is selected |
| 75 | Resource-specific rare/by-product chance +15% multiplicative |
| 100 | Gather Time -3% additional; Extra Gather Chance +5 pp additional |

Wild Reagents replace the Focused-yield Mastery 50 effect with:

**Rare Find chance +10% multiplicative for this Wild Reagent**

because they do not have a normal dedicated Patch.

---

# 34. MASTERY XP

Recommended:

**Resource Mastery XP = Foraging XP ×0.40**

then apply:

- Gather Style;
- clothing;
- jewelry;
- Specialization;
- Skill-Wide modifiers.

Rare Wild Reagent Mastery XP:

**Route Tier Base XP ×1.50**

when the reagent drops.

---

# 35. SKILL-WIDE FORAGING MASTERY

Recommended:

| Completion | Reward |
|---:|---|
| 10% | Search Time -2% |
| 25% | Extra Gather Chance +3 pp; second preset |
| 50% | Worker Foraging efficiency +5%; Discovery Gain +5% |
| 75% | Hidden Rare chance +10%; third preset |
| 100% | Search/Gather Time -4%; Master Naturalist marker |

100% is completion content.

---

# 36. DOMESTICATION BRIDGE TO FARMING

Foraging discovers wild species.

Farming can later domesticate selected species.

Candidate categories:

- Herbs;
- Botanicals;
- selected Fibres;
- selected Fungi.

Wild Reagents remain mostly:

**Foraging-exclusive**

to preserve Foraging identity.

---

# 37. DOMESTICATION REQUIREMENT

Recommended account rule:

A Foraging resource becomes:

**Domestication Candidate**

after:

- resource discovered/unlocked;
- Resource Mastery 25;
- at least 100 lifetime gathered.

Then Farming can begin a:

**Domestication Project**

Final Farming rules belong in the Farming MD.

---

# 38. WHY DOMESTICATION IS NOT AUTOMATIC

Foraging should remain useful.

Farming should not instantly replace it.

Domestication means:

- Farming can mass-produce some known species;
- Foraging remains best for:
  - first discovery;
  - rare Wild Reagents;
  - route-exclusive resources;
  - new species;
  - selected quality/rare materials.

---

# 39. FUNGAL DOMESTICATION

Not every fungus should be farmable.

Recommended:

- common T1–T6 Fungi can become candidates;
- T7+ special Fungi require advanced Farming facility;
- Dreamcap remains Wild Reagent and is not ordinary farm crop.

Farming will finalize exact rules.

---

# 40. FIBRE DOMESTICATION

Some Fibres can become Farm crops.

This creates:

**Foraging discovers fibre species → Farming scales fibre production → Tailoring consumes it**

Foraging remains useful for:

- early acquisition;
- new Tier discovery;
- Wild Reagents;
- mastery / rare resources.

---

# 41. FIELD KIT — PROGRESSION ANCHOR

Foraging does not need a Pickaxe-like single-purpose tool.

Instead it uses a:

**Field Kit**

The Field Kit represents:

- shears;
- trowel;
- specimen jars;
- basket;
- preservation wraps;
- route tools.

| Tier | Field Kit | Lvl | Search Speed | Gather Speed | Source | Mechanical Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Forager's Satchel | 1 | 0% | 0% | Starter | Basic collection |
| T1 | Canvas Field Kit | 5 | 4% | 5% | Tailoring + Leatherworking | Extra Gather Chance +2 pp |
| T2 | Reinforced Field Kit | 15 | 8% | 10% | Leatherworking + Smithing | Search Time -3% |
| T3 | Cobalt Survey Kit | 25 | 12% | 15% | Smithing + Tailoring | Discovery Gain +8% |
| T4 | Argent Herbal Kit | 35 | 16% | 20% | Smithing + Leatherworking | Herb/Botanical yield +5% |
| T5 | Emberproof Field Kit | 45 | 20% | 25% | Leatherworking + Smithing | Rare Find chance +8% |
| T6 | Frostlined Kit | 55 | 24% | 30% | Tailoring + Leatherworking | Gather Time -6% |
| T7 | Stormbound Survey Kit | 65 | 28% | 35% | Smithing + Tailoring | Discovery Gain +12% |
| T8 | Aetherglass Field Kit | 75 | 32% | 40% | Jewelcrafting + Tailoring | Hidden rare chance +10% |
| T9 | Umbral Expedition Kit | 85 | 36% | 45% | Leatherworking + Jewelcrafting | Extra Gather Chance +5 pp |
| T10 | Astral Naturalist Kit | 95 | 40% | 50% | Multi-profession | Search Time -6%; Rare Find +12% |

---

# 42. FIELD KIT SOURCE

Field Kits should be cross-profession equipment.

Potential inputs:

- Tailoring;
- Leatherworking;
- Smithing fittings;
- Jewelcrafting lenses/vials later.

This creates a useful cross-profession progression anchor.

---

# 43. NO FIELD KIT DURABILITY

Field Kits are permanent.

No repair.

No consumable tool charges.

---

# 44. SEARCH SPEED

Field Kit Search Speed reduces:

**Search Phase Time**

Formula:

**Final Search Time = Route Base Search Time × (1 - Search Speed) × other modifiers**

Use multiplicative stacking if multiple sources exist.

Hard floor:

**40% of Route Base Search Time**

---

# 45. GATHER SPEED

Field Kit Gather Speed reduces:

**Gather Phase Time**

Hard floor:

**40% of Base Gather Time**

Keep Search and Gather as distinct analytics.

---

# 46. PROFESSION CLOTHING

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Trailhand Hood | Search Time -4% |
| T3 / L25 | Trailhand Coat | Extra Gather Chance +3 pp |
| T3 / L25 | Trailhand Trousers | Foraging Mastery XP +4% |
| T3 / L25 | Trailhand Gloves | Gather Time -4% |
| T3 / L25 | Trailhand Boots | Route Circuit Time -3% |
| Set | Trailhand 5/5 | All normal Patch yield +5% |
| T5 / L45 | Herbalist Hood | Herb/Botanical yield +6% |
| T5 / L45 | Herbalist Coat | Alchemy-category rare chance +10% |
| T5 / L45 | Herbalist Leggings | Herb/Botanical Mastery XP +6% |
| T5 / L45 | Herbalist Gloves | Herb/Botanical Gather Time -5% |
| T5 / L45 | Herbalist Boots | Search Time -5% |
| Set | Herbalist 5/5 | Herbal/Botanical Focus bonus +10% |
| T7 / L65 | Naturalist Hood | Discovery Gain +12% |
| T7 / L65 | Naturalist Coat | Hidden rare chance +12% |
| T7 / L65 | Naturalist Leggings | Rare Resource Mastery XP +8% |
| T7 / L65 | Naturalist Gloves | Careful Harvest penalty reduced by 50% |
| T7 / L65 | Naturalist Boots | Survey Search Time -7% |
| Set | Naturalist 5/5 | Survey yield penalty reduced from -15% to -5% |
| T9 / L85 | Master Forager Hood | Search Time -7% |
| T9 / L85 | Master Forager Coat | Extra Gather Chance +5 pp |
| T9 / L85 | Master Forager Leggings | Mastery XP +8% |
| T9 / L85 | Master Forager Gloves | Hidden rare chance +15% |
| T9 / L85 | Master Forager Boots | Gather Time -7% |
| Set | Master Forager 5/5 | All route yield +5%; Discovery Gain +10% |

---

# 47. CLOTHING IDENTITIES

## Trailhand

General early route efficiency.

## Herbalist

Herbs / Botanicals / Alchemy supply.

## Naturalist

Discovery / rare wild resources.

## Master Forager

Endgame hybrid.

Players may mix pieces.

---

# 48. PROFESSION JEWELRY

| Foraging Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Gatherer's Ring | Extra Gather Chance +5 pp | Bulk |
| 25 | Wayfinder Pendant | Search Time -6% | Route speed |
| 35 | Herbalist Band | Herb/Botanical yield +8% | Alchemy/Farming |
| 45 | Sporeglass Charm | Fungi yield +10%; Fungi Mastery +5% | Fungi |
| 55 | Spinner's Loop | Fibre yield +10% | Tailoring |
| 65 | Naturalist Seal | Discovery Gain +15% | Discovery |
| 75 | Rarefinder Chain | Hidden rare chance +20% | Rare reagents |
| 85 | Umbral Field Charm | Survey Search Time -8%; Rare Find +10% | Late discovery |
| 95 | Astral Forager Emblem | Search/Gather Time -5%; Extra Gather +4 pp | Endgame general |

Jewelry supports:

- bulk gathering;
- route speed;
- specific category yield;
- Discovery;
- rare reagents.

---

# 49. SAVED LOADOUTS

Recommended presets:

## Alchemy Supply

- Herbal Focus;
- Herbalist gear;
- Herb/Botanical jewelry.

## Tailoring Fibre

- Fibre Focus;
- Rapid Gather;
- Fibre jewelry.

## Discovery

- Survey Focus;
- Careful Harvest;
- Naturalist gear.

## Rare Reagent

- Survey Focus;
- rare-find jewelry;
- Mastery gear.

## General Route

- Balanced Focus;
- Normal Harvest.

---

# 50. FORAGING SPECIALIZATIONS

Unlock:

**Foraging Level 35**

Three Specializations:

1. Gatherer;
2. Herbalist;
3. Naturalist.

All reversible.

---

# 51. GATHERER SPECIALIZATION

Focus:

**bulk normal resources**

Effects:

- Search Time -8%;
- Gather Time -8%;
- Extra Gather Chance +12 pp;
- Fibre yield +8%;
- Hidden Rare chance -10% multiplicative.

Best for:

- Tailoring;
- Cooking;
- Estate;
- old resource supply.

---

# 52. HERBALIST SPECIALIZATION

Focus:

**Herbs / Botanicals / Alchemy**

Effects:

- Herb yield +12%;
- Botanical yield +12%;
- Herb/Botanical Mastery XP +10%;
- Herb/Botanical Gather Time -8%;
- Fungi/Fibre yield -5%.

Best for:

- Alchemy;
- Farming domestication;
- Cooking.

---

# 53. NATURALIST SPECIALIZATION

Focus:

**Discovery / rare wild resources**

Effects:

- Discovery Gain +30%;
- Hidden Rare chance +30% multiplicative;
- Careful Harvest Mastery bonus +10% additional;
- normal resource yield -5%.

Best for:

- new Routes;
- endgame reagents;
- completion.

---

# 54. SPECIALIZATION SWITCHING

Rules:

- free;
- outside active Patch;
- changing Specialization resets current unfinished Search/Gather progress;
- route position remains;
- presets remember Specialization.

---

# 55. HERBARIUM — ESTATE SUPPORT

Foraging uses a shared-style Estate facility:

**Herbarium**

| Facility | Estate Stage | Foraging Req. | Main Unlocks |
|---|---|---|---|
| Herbarium I | House | 20 | 2 Foraging presets; exact route analytics; specimen archive |
| Herbarium II | Lodge | 40 | Focus presets; Discovery tracking; 4-step queue |
| Herbarium III | Manor | 60 | Worker route assignments; 2 worker templates; domestication archive |
| Herbarium IV | Estate | 80 | Worker route teams; reserve-driven routes; +6% worker efficiency |
| Herbarium V | Holdings / late Estate | 100 | Endgame wild-reagent support; advanced schedules; +10% worker efficiency |

Herbarium can later also support:

- Farming domestication;
- Alchemy reference systems.

It is infrastructure, not a profession.

---

# 56. HERBARIUM PURPOSE

Herbarium provides:

- specimen archive;
- route analytics;
- Discovery records;
- presets;
- worker route management;
- domestication tracking.

It should not merely give:

**+5% Foraging**

---

# 57. WORKER FORAGING

Workers can run established Routes.

Worker data:

- Foraging Proficiency;
- Field Kit;
- clothing;
- jewelry;
- assigned Route;
- Focus;
- Gather Style;
- reserve policy.

Workers use real route cycles.

---

# 58. WORKERS CANNOT DISCOVER

Critical rule:

**Workers never unlock a hidden Wild Reagent for the account.**

Only the player can complete Route Discovery.

Workers can harvest the reagent only after:

- player discovered it;
- player reaches enough Mastery to prove it.

---

# 59. ESTABLISHING A ROUTE

Route becomes:

**Established**

after player personally completes:

**20 full Route Circuits**

and has gathered all four normal Patch resources.

Then workers can be assigned.

---

# 60. PROVEN RESOURCES

Normal resource becomes worker-eligible at:

**Resource Mastery 10**

Hidden Wild Reagent becomes worker-eligible at:

**Wild Reagent Mastery 10**

Player learns the ecosystem first.

---

# 61. WORKER PROFICIENCY

Base Worker Foraging Efficiency:

**50% + Proficiency ×0.50%**

Examples:

- 1 → 50.5%;
- 50 → 75%;
- 100 → 100%.

Workers gain Proficiency.

They do not grant player XP/Mastery.

---

# 62. FRONTIER ROUTE PENALTY

For highest unlocked Route Tier:

| Relevant Resource Mastery | Worker Multiplier |
|---:|---:|
| 10–24 | 75% |
| 25–49 | 85% |
| 50–74 | 92.5% |
| 75–99 | 97.5% |
| 100 | 100% |

Older routes have no frontier penalty.

---

# 63. WORKER RARE RESOURCE RULE

Workers may find hidden reagent only if:

- player discovered it;
- Wild Reagent Mastery ≥10.

Worker rare chance uses:

- worker gear;
- Focus;
- worker efficiency;
- player account bonuses.

Workers do not advance Discovery.

---

# 64. OLD FIELD KITS TO WORKERS

Old:

- Field Kits;
- clothing;
- jewelry

move naturally to workers.

Use equipment templates.

---

# 65. ACTIVITY PLANNER

Starter:

- forage indefinitely;
- stop at resource quantity;
- stop at level;
- choose Focus / Gather Style.

House:

- stop at Resource Mastery;
- 2-step queue.

Lodge:

- route reserve goals;
- 4-step queue;
- Focus presets.

Manor:

- 6-step cross-profession plans;
- route switching;
- domestication target tracking.

Estate:

- 10-step queue;
- worker route schedules;
- Alchemy/Tailoring supply reserves.

Holdings:

- multi-route worker teams;
- broad resource policies.

---

# 66. SURVEY PLANNER

Example:

> Survey Moonfield Ridge until Dreamcap is discovered.

Then:

> switch to Naturalist Rare-Reagent preset.

Then:

> gather until Bank contains 50 Dreamcap.

This is one of Foraging's defining automation paths.

---

# 67. FIBRE SUPPLY PLANNER

Example:

> Maintain 5,000 Nettle Fibre.  
> If below target → Fibre Focus / Rapid Gather.  
> Once target reached → switch to Tailoring.

This directly links Foraging into textile production.

---

# 68. DOMESTICATION PLANNER

Example:

> Gather Moon Thyme until:
> - lifetime gathered 100;
> - Mastery 25.

Then notify:

**Domestication Candidate ready for Farming**

Do not automatically switch to Farming unless player has configured it.

---

# 69. RESOURCE RESERVES

Foraging itself mainly produces resources, but planner uses Bank targets.

Other professions respect reserves on Foraging materials.

Example:

**Celestial Lotus Reserve: 25**

Alchemy cannot consume below 25 unless override is enabled.

---

# 70. ROUTE POSITION

Save exact current Patch index:

1 → Herb  
2 → Fungi  
3 → Fibre  
4 → Botanical

Leaving and returning to same Route resumes from that Patch.

Changing Route resets the active route's current Search/Gather progress but keeps:

- Discovery;
- Masteries;
- Route completion statistics.

---

# 71. NO RANDOM ROUTE LAYOUTS

Routes are stable.

No daily random:

- patch order;
- route resource pool;
- weather;
- rare-spawn rotations.

Predictable idle planning is more important.

---

# 72. NO RESOURCE DEPLETION

Normal Patch resources do not permanently deplete.

The route represents traveling through a broader ecosystem rather than picking one literal plant forever.

No manual respawn timer.

---

# 73. FORAGING ↔ ALCHEMY

Strongest consumer relationship.

Foraging supplies:

- Herbs;
- Fungi;
- Botanicals;
- hidden Wild Reagents.

Alchemy should later use Foraging as one of its most important input professions.

---

# 74. FORAGING ↔ TAILORING

Foraging supplies the baseline wild Fibre ladder:

- Flaxgrass;
- Rush Fibre;
- Nettle Fibre;
- Silken Grass;
- Firegrass;
- Snowflax;
- Galegrass;
- Cloudsilk Grass;
- Nightfibre;
- Astral Flax.

Tailoring will process these into textile progression.

This is the planned core input ladder for the next Tailoring document.

---

# 75. FORAGING ↔ FARMING

Foraging:

- discovers;
- identifies;
- proves wild species.

Farming:

- domesticates selected species;
- scales bulk production.

This is intentional interdependence, not duplication.

---

# 76. FORAGING ↔ COOKING

Cooking can use:

- Fungi;
- Berries/Botanicals;
- Herbs.

Especially:

- soups;
- stews;
- sauces;
- premium meals.

Cooking's existing ingredient tags can map these resources cleanly.

---

# 77. FORAGING ↔ FLETCHING

Fletching can use:

- Fibres indirectly through Bowstrings;
- selected Botanicals / Resin-like materials if future recipes require;
- rare Wild Reagents for specialty treatments.

Tailoring remains the main converter of fibres into string/textile components.

---

# 78. FORAGING ↔ ESTATE

Estate uses:

- Fibres;
- Herbs;
- botanical materials;
- rare reagents

for:

- Herbarium;
- worker supplies;
- facilities;
- Long-Term Projects.

Foraging should contribute to infrastructure without becoming a construction profession.

---

# 79. OLD-TIER RELEVANCE

Early wild resources remain useful through:

- Alchemy;
- Cooking;
- Tailoring;
- worker supply;
- domestication;
- compound recipes;
- Estate projects.

Workers eventually maintain old routes.

Avoid arbitrary T10 recipes requiring enormous T1 resource quantities.

---

# 80. COMPLETE LEVEL ROADMAP

| Foraging Lvl | Major Unlock |
|---|---|
| 1 | Meadowpath Verge; Wild Mint; Balanced Focus |
| 3 | Buttoncap; Fungal Focus |
| 5 | Flaxgrass; Fibre Focus |
| 6 | Canvas Field Kit |
| 7 | Sunberry; Botanical Focus |
| 9 | Golden Yarrow becomes discoverable after route Discovery threshold |
| 11 | Reedfen Trail; Marsh Sage; Balanced Focus |
| 13 | Reedcap; Fungal Focus |
| 15 | Rush Fibre; Fibre Focus |
| 16 | Reinforced Field Kit |
| 17 | Bogberry; Botanical Focus |
| 19 | Glowroot becomes discoverable after route Discovery threshold |
| 21 | Mosswood Hollow; Mossleaf; Balanced Focus |
| 23 | Amber Morel; Fungal Focus |
| 25 | Nettle Fibre; Fibre Focus |
| 26 | Cobalt Survey Kit |
| 27 | Briarberry; Botanical Focus |
| 29 | Silverleaf becomes discoverable after route Discovery threshold |
| 31 | Moonfield Ridge; Moon Thyme; Balanced Focus |
| 33 | Pale Chanterelle; Fungal Focus |
| 35 | Foraging Specializations unlock |
| 35 | Silken Grass; Fibre Focus |
| 36 | Argent Herbal Kit |
| 37 | Moonseed; Botanical Focus |
| 39 | Dreamcap becomes discoverable after route Discovery threshold |
| 41 | Emberbrush Path; Cinderleaf; Balanced Focus |
| 43 | Ash Morel; Fungal Focus |
| 45 | Firegrass; Fibre Focus |
| 46 | Emberproof Field Kit |
| 47 | Emberberry; Botanical Focus |
| 49 | Phoenix Root becomes discoverable after route Discovery threshold |
| 51 | Frostfen Traverse; Frostmint; Balanced Focus |
| 53 | Icecap; Fungal Focus |
| 55 | Snowflax; Fibre Focus |
| 56 | Frostlined Kit |
| 57 | Winterberry; Botanical Focus |
| 59 | Crystal Bloom becomes discoverable after route Discovery threshold |
| 61 | Stormmoor Circuit; Stormsage; Balanced Focus |
| 63 | Thunder Truffle; Fungal Focus |
| 65 | Advanced Survey presets |
| 65 | Galegrass; Fibre Focus |
| 66 | Stormbound Survey Kit |
| 67 | Tempest Seedpod; Botanical Focus |
| 69 | Fulmin Root becomes discoverable after route Discovery threshold |
| 71 | Aetherbloom Reach; Aetherleaf; Balanced Focus |
| 73 | Prismcap; Fungal Focus |
| 75 | Cloudsilk Grass; Fibre Focus |
| 76 | Aetherglass Field Kit |
| 77 | Aetherberry; Botanical Focus |
| 79 | Lumen Orchid becomes discoverable after route Discovery threshold |
| 81 | Umbral Wilds; Shadeleaf; Balanced Focus |
| 83 | Gloom Morel; Fungal Focus |
| 85 | Nightfibre; Fibre Focus |
| 86 | Umbral Expedition Kit |
| 87 | Duskberry; Botanical Focus |
| 89 | Voidblossom becomes discoverable after route Discovery threshold |
| 91 | Starfall Sanctuary; Starleaf; Balanced Focus |
| 93 | Cometcap; Fungal Focus |
| 95 | Astral Flax; Fibre Focus |
| 96 | Astral Naturalist Kit |
| 97 | Starseed Pod; Botanical Focus |
| 99 | Celestial Lotus becomes discoverable after route Discovery threshold |
| 100 | Foraging level cap; Wildheart Expedition endgame path |

This roadmap is intentionally dense because every Route contains multiple resource unlocks.

---

# 81. WILDHEART EXPEDITION — LEVEL 100+

Post-100 Foraging endgame:

**Wildheart Expedition**

This is analogous to:

- Mining Worldheart;
- Woodcutting Worldroot.

But it remains a Foraging Route rather than a special tree/deposit.

---

# 82. WILDHEART UNLOCK

Recommended requirements:

- Foraging 100;
- Astral Naturalist Kit;
- Herbarium V;
- discover all 10 normal Wild Reagents;
- at least 10 normal resources at Mastery 100;
- Celestial Lotus Mastery 50;
- complete Chronicle:
  **Master of the Wilds**

---

# 83. WILDHEART PATCHES

Wildheart Expedition contains four endgame Patch resources:

- **Everbloom** — Herb;
- **Mycelian Crown** — Fungi;
- **Worldsilk Fibre** — Fibre;
- **Genesis Seedpod** — Botanical.

Hidden reagent:

**Wildheart Essence**

Discovery Required:

**500**

---

# 84. WILDHEART ESSENCE

Wildheart Essence is:

- extremely rare;
- Foraging-exclusive;
- protected endgame material.

Expected consumers:

- endgame Alchemy;
- Holdings;
- top profession gear;
- future permanent account projects.

Do not make it farmable through Farming.

---

# 85. WILDHEART WORKERS

Workers cannot access Wildheart immediately.

Requirements:

- player completes 30 Wildheart Circuits;
- all four normal resources Mastery 10;
- Wildheart Essence discovered;
- Wildheart Essence Mastery 10 for rare-resource worker rolls.

This keeps endgame exploration player-led.

---

# 86. SEARCH TIME FORMULA

**Final Search Time = Route Base Search Time × Field Kit Search modifier × Focus × gear × Specialization × facility**

Minimum:

**40% of Base Search Time**

Survey can increase/decrease effective search through its own modifiers if needed.

---

# 87. GATHER TIME FORMULA

Recommended Tier Base Gather Time:

| Tier | Base Gather |
|---|---:|
| T1 | 2.0s |
| T2 | 2.1s |
| T3 | 2.2s |
| T4 | 2.3s |
| T5 | 2.4s |
| T6 | 2.5s |
| T7 | 2.6s |
| T8 | 2.7s |
| T9 | 2.8s |
| T10 | 3.0s |

Then apply:

**Category multiplier × Gather Style × Field Kit × gear × Specialization**

Minimum:

**40% of unmodified time**

---

# 88. YIELD FORMULA

Normal expected yield:

**Base Category Yield × Focus Yield Modifier × gear × Specialization**

Resolve fractional output as:

- guaranteed integer;
- fractional extra-item chance.

Then roll:

**Extra Gather Chance**

for +1 item.

---

# 89. RARE FIND FORMULA

After hidden reagent discovered:

**Final Rare Chance = Base Route Rare Chance × Survey × Gather Style × Field Kit × gear × jewelry × Specialization × Mastery**

Normal cap:

**100%**

Overflow can convert to a second independent rare roll only in future endgame if needed.

Baseline should usually remain far below 100%.

---

# 90. OFFLINE FORAGING

If Foraging was active at logout:

simulate:

- Search phases;
- Gather phases;
- Route Patch movement;
- Discovery;
- normal yields;
- rare finds;
- XP;
- Mastery;
- planner transitions.

Workers simulate separately.

---

# 91. OFFLINE RESULTS

Show:

- elapsed time;
- Route Circuits completed;
- each normal resource;
- hidden reagent finds;
- Discovery gained;
- newly discovered resource;
- Foraging XP;
- levels;
- Resource Mastery;
- Domestication Candidates newly ready;
- worker output separately.

---

# 92. SAVE STATE

Store:

- active Route;
- current Patch;
- Search progress;
- Gather progress;
- Focus;
- Gather Style;
- Discovery Progress per Route;
- discovered rare flags;
- Resource Mastery;
- lifetime gathered counts;
- Domestication Candidate flags;
- presets;
- planner;
- worker routes.

---

# 93. FORAGING SCREEN — HIGH-LEVEL UI

Recommended layout:

## Route Browser

Each Route card:

- Tier;
- Level;
- four normal resources;
- hidden resource status:
  - Unknown;
  - Discovery progress;
  - Discovered;
- worker assignment.

## Active Route

Shows four Patch cards in a horizontal/compact circuit.

Each Patch shows:

- category;
- resource;
- current/next state;
- expected yield;
- Mastery.

## Discovery Panel

Shows:

- Discovery bar;
- current rate/hour;
- ETA;
- Survey Focus effect;
- hidden resource after discovery.

## Planning

- Focus;
- Gather Style;
- preset;
- target;
- queue.

## Analytics

- each resource/hour;
- rare/hour;
- XP/hour;
- Mastery/hour;
- Discovery/hour;
- circuit time.

---

# 94. ROUTE VISUALIZATION

Example:

**Moonfield Ridge**

1. Moon Thyme — Herb — 100% known  
2. Pale Chanterelle — Fungi  
3. Silken Grass — Fibre  
4. Moonseed — Botanical  
5. Hidden Species — Discovery 74 / 115

Focus:

**Survey**

This makes progression visually understandable.

---

# 95. RESOURCE INSPECTION

Selecting a resource shows:

- category;
- Route;
- level;
- consumers;
- current Mastery;
- current yield;
- current gather time;
- expected/hour;
- Domestication status;
- lifetime gathered.

For hidden reagent:

- discovery status;
- rare chance;
- expected/hour;
- exclusive consumers.

---

# 96. DOMESTICATION UI

For a candidate resource:

show:

**Domestication Requirements**

- Mastery 25;
- Lifetime Gathered 100;
- Farming requirement: to be defined.

When ready:

**Ready for Farming Domestication**

This creates a visible bridge between professions.

---

# 97. ANALYTICS REQUIREMENTS

Foraging analytics must show:

- route circuit time;
- Search % of time;
- Gather %;
- each normal resource/hour;
- hidden reagent/hour;
- Discovery/hour;
- XP/hour;
- Mastery/hour;
- Extra Gather rate;
- ETA to Route Discovery;
- ETA to Resource Mastery;
- Domestication progress.

Workers separately.

---

# 98. CHRONICLES — EARLY FORAGING

Suggested:

1. Enter Meadowpath Verge.
2. Gather Wild Mint.
3. Explain Route Circuit.
4. Use Herbal Focus.
5. Change to Survey.
6. Discover Golden Yarrow.
7. Reach Resource Mastery 10.
8. Gather Flaxgrass.
9. use Foraging resource in Cooking/Alchemy later.

---

# 99. CHRONICLES — MIDGAME

Suggested:

- unlock Foraging Specialization;
- discover Dreamcap;
- create first domestication candidate;
- build Herbarium II;
- establish worker Route;
- mark first rare reagent Proven;
- automate Fibre reserve for Tailoring;
- complete Survey → rare-farming planner.

---

# 100. CHRONICLES — LATE

Suggested:

- discover Lumen Orchid;
- discover Voidblossom;
- maintain rare resources with workers;
- equip Astral Naturalist Kit;
- discover Celestial Lotus;
- reach Foraging 100;
- complete all normal Route discoveries;
- unlock Wildheart Expedition.

---

# 101. MASTER OF THE WILDS

Requirements:

- Foraging 100;
- Astral Naturalist Kit;
- Herbarium V;
- all 10 normal hidden reagents discovered;
- Celestial Lotus Mastery 50;
- 10 normal resources Mastery 100;
- at least 5 Domestication Candidates unlocked.

Reward:

**Wildheart Expedition**

plus:

- fourth Foraging preset;
- Master Naturalist marker.

---

# 102. DEVTOOLS

Foraging DevTools should support:

- set Foraging Level;
- set Resource Mastery;
- set Skill-Wide Mastery;
- unlock Route;
- set Route Discovery;
- discover hidden reagent;
- set Focus;
- set Gather Style;
- set current Patch;
- set Search/Gather progress;
- spawn Field Kit;
- spawn clothing/jewelry;
- set Specialization;
- mark Route Established;
- mark resource Proven;
- toggle Domestication Candidate;
- spawn worker;
- set worker Proficiency;
- simulate 1m / 5m / 1h / 8h / 24h;
- compare expected vs actual yields.

---

# 103. DATA MODEL

Route:

- ID;
- Tier;
- Name;
- Level;
- Base Search Time;
- Patch IDs;
- Hidden Reagent ID;
- Discovery Requirement.

Resource:

- ID;
- category;
- Level;
- Route;
- Base Yield;
- Base Gather Time;
- XP;
- Domestication flag.

Player:

- Route Discovery;
- Resource Mastery;
- lifetime gathered;
- discovered flags;
- domestication-ready flags;
- presets;
- planner.

---

# 104. ANTI-BLOAT RULES

Avoid:

- 10 unique Bark-like filler items;
- junk catches;
- random route layouts;
- daily rotating herbs;
- weather dependence;
- durability;
- 5 separate Foraging tools;
- a unique Seed item for every temporary discovery unless Farming truly needs it;
- Farming replacing every Foraging resource.

Prefer:

- 4 clear normal categories;
- one hidden reagent per Route;
- deterministic Discovery;
- category Focus;
- clear domestication bridge;
- rare wild resources that remain exclusive.

---

# 105. MAJOR OPEN QUESTIONS — RECOMMENDED ANSWERS

## Should Foraging remain a separate profession?

**Yes.**

Its identity is strong enough if it owns:

- route exploration;
- Discovery;
- wild species;
- rare reagents;
- domestication bridge.

---

## Should Foraging simply let player select one Herb?

**No.**

Use mixed Routes with four Patch categories.

---

## Should the player directly target categories?

**Yes through Focus, not by deleting the whole route.**

This preserves route identity.

---

## Should Route layout randomize?

**No.**

Keep predictable.

---

## Should normal Patch harvesting fail?

**No.**

Search always finds usable material.

---

## Should there be junk finds?

**No baseline.**

---

## Should hidden resources unlock by RNG?

**No.**

Discovery bar is deterministic.

---

## Should rare resource drops after discovery be RNG?

**Yes, with visible exact rates.**

The unlock is deterministic; ongoing rare supply can be probabilistic.

---

## Should Workers discover hidden resources?

**No.**

Player-only discovery.

---

## Should Workers gather hidden resources after discovery?

**Yes after Wild Reagent Mastery 10.**

---

## Should Farming replace Foraging Herbs?

**No.**

Farming may domesticate selected species.

Foraging remains required for:

- first discovery;
- Wild Reagents;
- new Tiers;
- route-exclusive materials.

---

## Should every Herb become farmable?

**No.**

Only Domestication Candidates.

---

## Should Wild Reagents be farmable?

**Generally no.**

They are a core reason Foraging remains relevant.

---

## Should Foraging use seeds as direct item drops?

**Not necessarily baseline.**

The account can unlock Domestication Candidate through Mastery/lifetime gathering.

Farming can later decide whether it needs physical Seed items.

---

## Should Fibres belong to Foraging or Farming?

**Both over time.**

Foraging discovers and gathers wild Fibre.

Farming can domesticate selected Fibre crops later.

---

## Should Fungi belong to Foraging?

**Yes.**

This gives Foraging a strong exclusive/partially exclusive resource family.

---

## Should Foraging Tool be a knife?

**No.**

Use Field Kit to distinguish it from other professions.

---

## Should Field Kit have durability?

**No.**

---

## Should Foraging have two setup axes: Focus + Gather Style?

**Yes.**

They control different decisions:

- what;
- how.

---

## Should Survey Focus remain useful after Discovery?

**Yes.**

It becomes the main hidden-reagent farming focus.

---

## Should Rapid Gather be best for everything?

**No.**

It sacrifices:

- Mastery;
- rare chance.

---

## Should Careful Harvest increase normal quantity?

**No.**

Its identity is rare resources + Mastery.

---

## Should Resource Mastery be per item?

**Yes.**

Because Resources have clear distinct consumers and discovery status.

---

## Should hidden Wild Reagents have Mastery?

**Yes.**

They become long-term specialist goals.

---

## Should Foraging 100 finish the profession?

**No.**

Post-100:

- Mastery;
- rare resources;
- Wildheart Expedition;
- worker network;
- domestication;
- endgame Alchemy.

---

## Should Foraging have one post-100 resource like Worldroot?

**Use a full Wildheart Expedition instead.**

Foraging's identity is route/ecosystem, so its endgame should preserve that rather than become one single plant.

---

## Should Workers give player XP/Mastery?

**No.**

Resources only; workers gain Proficiency.

---

## Should old Foraging resources remain relevant?

**Yes through:**

- Alchemy;
- Cooking;
- Tailoring;
- Farming;
- worker supply;
- cross-tier recipes.

---

# 106. COMPLETE LOCKED FORAGING BASELINE

1. Foraging uses Routes.
2. Every normal Route has four fixed Habitat Patches.
3. Categories:
   - Herb;
   - Fungi;
   - Fibre;
   - Botanical.
4. One hidden Wild Reagent per normal Route.
5. 10 normal Routes.
6. 40 normal resources.
7. 10 hidden Wild Reagents.
8. Search Phase + Gather Phase.
9. No junk.
10. No normal gather failure.
11. Search Focus changes category economics.
12. Focuses:
    - Balanced;
    - Herbal;
    - Fungal;
    - Fibre;
    - Botanical;
    - Survey.
13. Gather Styles:
    - Normal;
    - Careful;
    - Rapid.
14. Discovery is deterministic.
15. Hidden reagent drops become probabilistic after discovery.
16. Exact rare rates visible in UI.
17. Field Kit is profession progression anchor.
18. No durability.
19. Resource Mastery 1–100.
20. Skill-Wide Mastery.
21. Three reversible Specializations:
    - Gatherer;
    - Herbalist;
    - Naturalist.
22. Herbarium is Estate support facility.
23. Foraging creates Farming Domestication Candidates.
24. Domestication baseline requires Mastery 25 + 100 lifetime gathered.
25. Wild Reagents generally remain Foraging-exclusive.
26. Workers cannot discover.
27. Workers use Established Routes.
28. Resource Mastery 10 makes resources Proven.
29. Workers gain Proficiency, not player XP/Mastery.
30. Planner supports Discovery, quantity, reserve, Mastery, and domestication goals.
31. Fibre ladder directly feeds Tailoring.
32. Herbs/Fungi/Botanicals strongly feed Alchemy/Cooking.
33. Offline Foraging uses identical route logic.
34. Endgame uses Wildheart Expedition.
35. All baseline Foraging content lives in this single MD.

---

# 107. FINAL SUMMARY

Foraging begins with:

**Meadowpath Verge**

↓

**Wild Mint / Buttoncap / Flaxgrass / Sunberry**

↓

**Search Focus**

↓

**Survey**

↓

**Golden Yarrow Discovery**

↓

**Resource Mastery**

↓

**Domestication Candidates**

↓

**Fibre supply for Tailoring**

↓

**rare reagents for Alchemy**

↓

**Foraging Specialization**

↓

**Herbarium**

↓

**worker routes**

↓

**Starfall Sanctuary**

↓

**Celestial Lotus**

↓

**Foraging 100**

↓

**Wildheart Expedition**

Foraging's core distinction is:

> **Farming grows what civilization already understands. Foraging goes into the wild and finds what the account does not yet understand.**

The player personally:

- explores;
- discovers;
- identifies;
- masters.

Later infrastructure:

- domesticates selected resources;
- lets workers maintain known routes;
- turns wild discoveries into part of the broader economy.

Core Foraging identity:

> **Walk the route, learn the habitat, discover the species, and turn the wild into knowledge the rest of the account can use.**
