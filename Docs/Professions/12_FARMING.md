# 12 — FARMING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `Cooking.md`, `Foraging.md`, `Alchemy.md`, `Tailoring.md`

**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)
**Purpose:** Define Farming as one complete profession in a single source-of-truth file: Estate-linked land expansion, Cultivation Capacity, plot types, background crop growth, crop classes, orchards, Crop Plans, rotations, soil preparation, Foraging domestication, profession Tool/gear, Mastery, Specializations, farmhands, Estate/House progression, planner, Chronicles, UI, formulas, offline growth, and post-100 agricultural endgame.

---

# 1. FARMING ROLE IN THE GAME

Farming is the account's **persistent background cultivation profession**.

It produces predictable supplies of:

- Vegetables;
- Grains;
- Fruits;
- domesticated Herbs;
- domesticated Botanicals;
- selected Fibres;
- selected Fungi.

Its primary consumers are:

- Cooking;
- Alchemy;
- Tailoring;
- Estate workers;
- future account projects.

Farming is intentionally different from all normal Personal Activity professions.

The player does not spend hours standing in one field while every other skill stops.

Instead:

> **The player's property creates the land, the player chooses what grows there, and the crops continue growing in the background while the character performs another main activity.**

---

# 2. FARMING ↔ HOUSE / ESTATE IS A CORE SYSTEM

Farming is deeply tied to:

**House → Lodge → Manor → Estate → Holdings**

The property stage determines:

- how much land exists;
- how many Cultivation Capacity points are available;
- which plot types can be built;
- how many Orchard spaces exist;
- when Nursery / Greenhouse / Mycology become available;
- when Farmhands unlock;
- how much automation exists.

This is not a small bonus attached to Farming.

It is the profession's main progression architecture.

---

# 3. MACRO FARMING FANTASY

Early:

> **I have a few garden beds beside my House.**

Midgame:

> **My Lodge has fields, an orchard, and a Nursery.**

Later:

> **My Manor has irrigated land, Greenhouse bays, Mycology beds, and Farmhands.**

Endgame:

> **My Estate maintains large farmland and a Great Orchard.**

Late account:

> **My Holdings run managed agricultural blocks as part of the player's wider empire.**

This directly supports the game's macro progression:

**I do everything → I build infrastructure → I manage infrastructure → I command a workforce.**

---

# 4. FARMING IS A BACKGROUND EXCEPTION

Normal game rule:

**one Personal Activity Slot**

Farming is a deliberate exception.

Once planted:

**Crop Growth continues in real time while the player is doing another activity.**

The player can:

- Mine;
- Fish;
- Smith;
- Hunt;
- Combat;

while planted crops continue growing.

This is one of Farming's defining advantages.

---

# 5. WHAT DOES NOT HAPPEN AUTOMATICALLY EARLY

Crop Growth is background from the beginning.

But early Farming does **not** automatically:

- harvest;
- replant;
- change crops;
- advance Crop Plans.

The player must return to the property.

This makes the land productive without turning Farming into free fully automated XP.

---

# 6. FARMING XP RULE

Player Farming XP is awarded when the **player harvests** a crop.

Worker/Farmhand harvests:

- produce resources;
- improve worker Proficiency;

but do **not** grant:

- player Farming XP;
- player Crop Mastery XP.

This preserves the same player-versus-worker philosophy used by other professions.

---

# 7. MANUAL FARM MANAGEMENT DOES NOT INTERRUPT MAIN ACTIVITY

Recommended UX rule:

Short management actions such as:

- planting;
- harvesting a ready plot;
- changing a Crop Plan;

do not require the player to permanently abandon their current Personal Activity.

They are Estate-management actions.

The important time gate is:

**Growth**

not a fake 3-second character animation.

If implementation later requires activity locking for technical reasons, keep the interruption extremely short and explicit.

---

# 8. CULTIVATION CAPACITY

Instead of one fixed number of identical plots, the property provides:

**Cultivation Capacity**

Different plot types consume different Capacity.

This lets the player choose whether their land is mostly:

- fields;
- herbs;
- orchards;
- greenhouse crops;
- fungi.

---

# 9. PROPERTY CAPACITY PROGRESSION

| Property Stage | Suggested Farming Req. | Cultivation Capacity | Physical Farming Area | Major Space Unlocks | Management Unlocks |
|---|---|---|---|---|---|
| House | 1 | 6 | House Garden | 4 standard beds + room for 1 small orchard or specialty bed | Manual harvest/replant; starter crop plans |
| Lodge | 20 | 14 | House Garden + Lodge Grounds | Larger fields, 2 Orchard spaces, first Nursery Bay | Crop groups, 2 saved plans, first domestication projects |
| Manor | 40 | 28 | Manor Fields + Walled Garden | 4 Orchard spaces, Greenhouse access, Mycology beds | Farmhands, auto-harvest/replant, 4 plans |
| Estate | 70 | 48 | Estate Farmland + Great Orchard | Large fields, expanded Greenhouse/Mycology | Worker teams, rotation policies, 8 plans |
| Holdings | 100 | 80 | Managed Holdings / Satellite Farms | Large grouped plots rather than 80 individual cards | Department schedules, endgame cultivation, advanced reserves |

These are strong baseline targets, not sacred final balance numbers.

The important shape is:

**small personal garden → real farm → estate agriculture → managed holdings**

---

# 10. WHY CAPACITY INSTEAD OF 80 INDIVIDUAL PLOTS

Late-game Farming may represent dozens of physical plots.

The UI should not force the player to click through 80 cards.

At Manor/Estate/Holdings:

identical plots can be grouped into:

**Plot Groups**

Example:

**North Field — 8× Astral Grain**

One group displays:

- count;
- crop;
- growth state;
- yield;
- worker;
- plan.

This keeps large-scale Farming manageable.

---

# 11. PLOT TYPES

| Plot Type | Unlock Lvl | Capacity Cost | Valid Crops | Identity |
|---|---|---|---|---|
| Garden Bed | 1 | 1 | Vegetable / Grain / basic Herb / domesticated Fibre | General-purpose plot |
| Field Plot | 10 | 2 | Vegetable / Grain / Fibre | Higher bulk output; +10% yield to Field crops |
| Herb Bed | 10 | 1 | Herb / Botanical / selected Berry | +10% Herb/Botanical yield |
| Orchard Plot | 15 | 2 | Fruit / Nut trees | Persistent trees; repeated harvest cycles |
| Nursery Bay | 20 | 2 | Domestication projects / saplings | Foraging → Farming bridge |
| Mycology Bed | 40 | 1 | Domesticated Fungi | Multi-flush fungal crops |
| Greenhouse Bay | 40 | 2 | Any domesticated plant except Orchard tree | Ignores normal tier/climate restrictions; +10% growth speed |
| Managed Field Block | 100 | 8 | Field crops | Represents 8 capacity as one Holdings management unit |

Plot type changes what can be grown and what the plot is good at.

---

# 12. GARDEN BED

The flexible starter plot.

Can grow:

- Vegetables;
- Grains;
- basic Herbs;
- domesticated Fibre.

Best for:

- House;
- low-scale mixed production.

---

# 13. FIELD PLOT

Consumes more Capacity but is specialized for bulk annual crops.

Valid:

- Vegetables;
- Grains;
- Fibres.

Baseline bonus:

**+10% normal yield**

to Field-class crops.

It becomes the backbone of Estate-scale staple production.

---

# 14. HERB BED

Valid:

- Herbs;
- Botanicals;
- selected Berries.

Baseline:

**+10% Herb/Botanical yield**

This gives Alchemy-focused Farms a clear land configuration.

---

# 15. ORCHARD PLOT

Used by persistent fruit/nut trees.

Consumes:

**2 Cultivation Capacity**

The tree is planted once and remains until:

- manually uprooted;
- plot converted.

After initial establishment:

it repeatedly enters fruiting cycles.

This makes Orchard Farming mechanically distinct from annual crops.

---

# 16. NURSERY BAY

Unlocked with the Lodge.

Used for:

- Foraging Domestication Projects;
- propagating Orchard trees;
- selected high-value crop trials.

The Nursery is not meant for bulk food production.

---

# 17. MYCOLOGY BED

Unlocked at Manor.

Used for domesticated Fungi.

Fungi use:

**Multi-Flush**

cycles rather than ordinary planting.

This prevents Farming Fungi from feeling identical to Grain.

---

# 18. GREENHOUSE BAY

Unlocked at Manor.

Allows:

- high-tier domesticated plants;
- sensitive Herbs;
- selected off-tier crops;
- advanced trials.

Baseline:

**+10% Growth Speed**

to crops inside the Greenhouse.

Greenhouse does not create more physical land for free.

It consumes Capacity.

---

# 19. MANAGED FIELD BLOCK

Holdings UI abstraction.

Represents:

**8 Capacity**

as one managed agricultural unit.

Useful for:

- 8 identical Grain plots;
- 8 identical Fibre plots;
- worker department scheduling.

Mechanically it still uses the same Farming rules.

---

# 20. CORE CROP CLASSES

| Crop Class | Cycle Type | Lifecycle | Main Role |
|---|---|---|---|
| Vegetable | Single Harvest | Plant → Grow → Harvest → plot empty | High Cooking value; moderate growth |
| Grain | Single Harvest | Plant → Grow → Harvest → plot empty | Bulk Cooking / provisions; best Field Plot efficiency |
| Herb | Perennial Cut | Plant → 3 harvest cycles → replant | Alchemy/Cooking; often domesticated from Foraging |
| Fibre | Single Harvest | Plant → Grow → Harvest → plot empty | Tailoring bulk production; often domesticated from Foraging |
| Botanical/Berry | Perennial Cut | Plant → 3 harvest cycles → replant | Cooking / Alchemy / specialty recipes |
| Fungi | Multi-Flush | Inoculate → 3 flushes → reset bed | Cooking / Alchemy; requires Mycology Bed |
| Orchard Tree | Persistent | Establish once → repeated fruiting cycles until uprooted | Long-term fruit/nut production |

Different crop classes have different lifecycle behavior.

---

# 21. ANNUAL CROPS

Includes:

- Vegetables;
- Grains;
- most Fibre crops.

Lifecycle:

**Plant → Grow → Harvest → Empty Plot**

They must be replanted after harvest.

Once automation is unlocked, a Crop Plan can replant automatically.

---

# 22. HERB / BOTANICAL PERENNIALS

Domesticated Herbs/Botanicals usually use:

**3 Harvest Cycles**

after planting.

Lifecycle:

**Plant → Grow → Harvest 1 → Regrow → Harvest 2 → Regrow → Harvest 3 → Replant**

Regrowth time:

recommended:

**65% of initial Growth Time**

This makes perennial crops distinct without becoming permanent infinite plants.

---

# 23. FUNGI — MULTI-FLUSH

Domesticated Fungi use:

**3 Flushes**

Lifecycle:

**Inoculate → Flush 1 → Flush 2 → Flush 3 → reset bed**

Each later Flush:

- takes slightly longer;
- gives slightly more Mastery XP.

Recommended:

- Flush 1 = 100% base time;
- Flush 2 = 110%;
- Flush 3 = 120%.

Yield stays consistent unless Mastery modifies it.

---

# 24. ORCHARD TREE LIFECYCLE

Orchard tree:

**Establish Tree → Mature → Fruit Cycle → Harvest → Fruit Cycle → Harvest...**

Initial establishment is long.

After establishment:

Fruit Cycle duration:

**35% of initial establishment time**

Example:

Apple Tree establishment:

20 min.

Then each fruiting cycle:

approximately:

7 min.

The tree remains indefinitely until uprooted.

---

# 25. WHY ORCHARDS PERSIST

If Fruit trees had to be replanted every harvest:

they would feel like oversized carrots.

Persistent trees create a real land-commitment decision:

> Do I dedicate scarce Capacity to long-term fruit production or flexible annual fields?

---

# 26. ORCHARD UPROOT RULE

Player can uproot at any time.

Rules:

- already harvested resources remain;
- current fruiting progress is lost;
- no refund needed because ordinary planting stock is abstracted;
- plot becomes empty.

UI warns before uprooting a mature tree.

---

# 27. BASELINE FARM CROPS

Farming has 30 baseline cultivated crops:

- 10 Vegetables;
- 10 Grains;
- 10 Orchard Fruits.

| Tier | Lvl | Crop | Class | Plot | Base Growth (min) | Base Yield | Base XP | Cooking Tag |
|---|---|---|---|---|---|---|---|---|
| T1 | 1 | Turnip | Vegetable | Garden/Field | 5 | 6 | 6 | [Vegetable] |
| T1 | 4 | Barley | Grain | Garden/Field | 7 | 8 | 7 | [Grain] |
| T1 | 8 | Apple Tree | Orchard Fruit | Orchard | 20 | 5 | 12 | [Fruit] |
| T2 | 11 | Beetroot | Vegetable | Garden/Field | 10 | 8 | 10 | [Vegetable] |
| T2 | 14 | Rye | Grain | Garden/Field | 13 | 10 | 12 | [Grain] |
| T2 | 18 | Pear Tree | Orchard Fruit | Orchard | 32 | 6 | 18 | [Fruit] |
| T3 | 21 | Carrot | Vegetable | Garden/Field | 18 | 10 | 16 | [Vegetable] |
| T3 | 24 | Oats | Grain | Garden/Field | 22 | 12 | 18 | [Grain] |
| T3 | 28 | Plum Tree | Orchard Fruit | Orchard | 45 | 7 | 25 | [Fruit] |
| T4 | 31 | Moonroot | Vegetable | Garden/Field | 28 | 12 | 24 | [Vegetable] |
| T4 | 34 | Silvergrain | Grain | Garden/Field | 34 | 14 | 27 | [Grain] |
| T4 | 38 | Lunaplum Tree | Orchard Fruit | Orchard | 65 | 8 | 37 | [Fruit] |
| T5 | 41 | Ember Pepper | Vegetable | Garden/Field | 42 | 14 | 35 | [Vegetable] |
| T5 | 44 | Cinderwheat | Grain | Garden/Field | 50 | 17 | 39 | [Grain] |
| T5 | 48 | Emberpear Tree | Orchard Fruit | Orchard | 90 | 9 | 52 | [Fruit] |
| T6 | 51 | Frost Cabbage | Vegetable | Garden/Field | 60 | 17 | 49 | [Vegetable] |
| T6 | 54 | Snowgrain | Grain | Garden/Field | 72 | 20 | 54 | [Grain] |
| T6 | 58 | Frostapple Tree | Orchard Fruit | Orchard | 125 | 10 | 72 | [Fruit] |
| T7 | 61 | Stormbean | Vegetable | Garden/Field | 85 | 20 | 67 | [Vegetable] |
| T7 | 64 | Galegrain | Grain | Garden/Field | 100 | 23 | 74 | [Grain] |
| T7 | 68 | Thunderfruit Tree | Orchard Fruit | Orchard | 170 | 11 | 97 | [Fruit] |
| T8 | 71 | Aether Squash | Vegetable | Garden/Field | 115 | 23 | 89 | [Vegetable] |
| T8 | 74 | Cloudgrain | Grain | Garden/Field | 135 | 27 | 98 | [Grain] |
| T8 | 78 | Prism Pear Tree | Orchard Fruit | Orchard | 225 | 12 | 128 | [Fruit] |
| T9 | 81 | Umbral Root | Vegetable | Garden/Field | 155 | 27 | 116 | [Vegetable] |
| T9 | 84 | Duskgrain | Grain | Garden/Field | 180 | 31 | 128 | [Grain] |
| T9 | 88 | Nightplum Tree | Orchard Fruit | Orchard | 295 | 13 | 167 | [Fruit] |
| T10 | 91 | Starroot | Vegetable | Garden/Field | 205 | 31 | 149 | [Vegetable] |
| T10 | 94 | Astral Grain | Grain | Garden/Field | 235 | 36 | 164 | [Grain] |
| T10 | 98 | Starfruit Tree | Orchard Fruit | Orchard | 380 | 14 | 215 | [Fruit] |

Domesticated Foraging crops are **additional options** but reuse existing resource items.

---

# 28. WHY FARMING DOES NOT HAVE 50 UNIQUE STARTER CROPS

Farming already gains enormous variety from:

- Foraging domestication;
- plot type;
- rotation;
- orchards;
- Greenhouse;
- Mycology.

The baseline crop list therefore focuses on:

- staple food;
- Grain;
- Orchard Fruit.

Avoid adding 5 completely new resource items per Tier without a consumer.

---

# 29. COOKING CONTRACT

Baseline Farming outputs map to Cooking:

- Vegetables → `[Vegetable]`;
- Grains → `[Grain]`;
- domesticated Herbs → `[Herb]`;
- domesticated Fungi → `[Mushroom]`;
- domesticated Berries → `[Berry]`.

Orchard Fruit requires one small Cooking contract extension:

**`[Fruit]`**

Cooking accepts the `[Fruit]` tag for Orchard outputs; fruit is not relabeled as Berries.

---

# 30. PLANTING STOCK — NO SEED ITEM EXPLOSION

Farming does **not** create one Bank seed item for every crop.

Instead:

once a normal crop is unlocked:

**Planting Stock is abstracted as permanently available.**

This represents:

- saved seed;
- cuttings;
- retained stock.

The limiting resources are:

- land;
- Growth Time;
- crop choice;
- Estate progression.

Not seed-stack micromanagement.

---

# 31. PLANTING STOCK RULES

| Crop Source | First Unlock | After Unlock | Inventory Rule |
|---|---|---|---|
| Baseline annual crop | Unlocked by Farming Level / Chronicle | Permanent planting access after unlock | No seed-item stack |
| Orchard tree | Unlocked by Farming Level | One-time plot establishment; no seed item | Tree persists until uprooted |
| Domesticated Foraging species | Complete Domestication Project | Permanent planting access | Uses same harvested resource item as Foraging |
| Endgame crop | Chronicle/account milestone | Permanent access after unlock | May require special plot/facility |

This prevents Farming from doubling every crop item into:

- crop;
- crop seed.

With 30+ Farming crops and many domesticated Foraging resources, that would create unnecessary Bank bloat.

---

# 32. ORCHARD ESTABLISHMENT COST

Normal Orchard trees do not require consumable Seed items.

Recommended establishment cost:

- Gold;
- optional small Wood/Compost cost;
- time.

Exact Gold amounts should be balanced globally.

This gives Orchard conversion some friction without creating Sapling inventory bloat.

---

# 33. CROP GROWTH

Every planted crop has:

**Growth 0–100%**

Growth continues:

- online;
- offline;
- while another Personal Activity is active.

At 100%:

crop becomes:

**Ready**

and stops.

It does not overgrow or rot.

---

# 34. NO CROP DEATH

Baseline Farming has no:

- random crop failure;
- pests destroying crops;
- disease wipes;
- weather deaths;
- spoilage.

A crop planted correctly will finish.

This is deliberate for idle planning.

---

# 35. READY CROPS DO NOT DECAY

A ready crop can remain indefinitely.

No penalty.

The player should never log in after work and discover:

> everything died because I was offline too long.

---

# 36. HARVEST YIELD

Every crop defines:

**Base Yield**

Crop table contains baseline values.

Final Yield is affected by:

- plot type;
- Crop Mastery;
- rotation;
- soil preparation;
- gear;
- jewelry;
- Specialization;
- property upgrades.

---

# 37. HARVEST BONUS CHANCE

Farming uses:

**Harvest Bonus Chance**

After normal yield is calculated:

roll once per harvested plot.

Success:

**+20% of Base Yield**, rounded up.

Hard cap:

**75%**

This avoids doubling large Orchard harvests.

---

# 38. CROP ROTATION

Annual plots can use Crop Plans.

| Plan | Behavior | Benefit |
|---|---|---|
| Repeat | Plant same crop after every harvest | Maximum simplicity; no bonus |
| Two-Crop Rotation | Alternate A ↔ B | +8% yield on rotated annual crops |
| Three-Crop Rotation | A → B → C | +12% yield; +5% Farming Mastery XP |
| Reserve Rotation | Grow whichever configured resource is below target | Estate/worker economy |
| Mastery Rotation | Rotate selected crops until each reaches target Mastery | Completion |

Rotation rewards planning but does not punish simple repeat farming.

---

# 39. NO SOIL PUNISHMENT LOOP

Farming does **not** use a harsh Soil Fertility meter where:

repeating the same crop eventually makes the plot nearly useless.

That would create unnecessary maintenance.

Instead:

- repeating one crop = baseline;
- rotating crops = bonus.

The system rewards planning rather than punishing simplicity.

---

# 40. TWO-CROP ROTATION

Example:

**Turnip → Barley → Turnip → Barley**

Bonus:

**+8% yield**

when the next crop is from a different crop family.

Good early/mid automation.

---

# 41. THREE-CROP ROTATION

Example:

**Vegetable → Grain → Fibre**

Bonus:

- +12% yield;
- +5% Farming Mastery XP.

This is a stronger Estate-level planning option.

---

# 42. RESERVE ROTATION

Unlocked through Estate management.

Example:

> Grow Barley if Barley <5,000.  
> Otherwise grow Turnip if Turnip <3,000.  
> Otherwise grow Flaxgrass if Flaxgrass <2,000.

This turns land into a resource-maintenance engine.

---

# 43. SOIL PREPARATION

Optional optimization:

| Soil Preparation | Cost | Effect | Role |
|---|---|---|---|
| Standard Soil | No input | No modifier | Default |
| Composted Soil | 1 Compost Charge per planting | +12% yield | Bulk production |
| Enriched Soil | 1 Enriched Compost Charge | +10% growth speed; +8% yield | Mid/late optimization |
| Research Bed | No fertilizer; Nursery/Greenhouse only | Domestication progress +20%; normal yield -10% | Domestication / trials |

No Soil preparation is mandatory for normal progression.

---

# 44. COMPOST

Recommended Farming resource:

**Compost Charge**

Do not create ten fertilizer tiers.

Compost can be generated through:

- surplus plant materials;
- Cooking plant leftovers abstracted through a compost recipe;
- worker Estate systems.

Exact Compost recipe can be finalized during Alchemy/Estate pass.

---

# 45. ENRICHED COMPOST

Later upgrade:

**Enriched Compost Charge**

Expected to combine:

- Compost;
- Alchemy/Farming reagent.

It provides:

- Growth Speed;
- Yield.

Use as optional optimization, not a mandatory tax.

---

# 46. COMPOST IS CONSUMED PER PLANTING

Annual crops:

1 charge per planting.

Perennial Herbs:

1 charge on initial planting only.

Orchard:

1 charge per fruit cycle only if player enables:

**Orchard Soil Treatment**

by policy.

Avoid making trees require fertilizer to survive.

---

# 47. FORAGING → FARMING DOMESTICATION

This is one of Farming's defining systems.

Foraging discovers wild species.

Farming can turn selected species into:

**repeatable cultivated crops**

through deterministic Domestication Projects.

---

# 48. DOMESTICATION ELIGIBILITY

The Foraging resource must already satisfy:

- Foraging resource discovered/unlocked;
- Resource Mastery 25;
- 100 lifetime gathered.

This matches the Foraging source-of-truth contract.

---

# 49. DOMESTICATION CATEGORIES

| Foraging Category | Domestication Policy | Farm Location | Reason |
|---|---|---|---|
| Herbs | All normal Foraging Herb Patch species | Herb Bed / Greenhouse | Strong Alchemy supply |
| Botanicals | Most normal Botanicals/Berries/Seedpods | Herb Bed / Garden / Greenhouse | Cooking + Alchemy |
| Fibres | Selected normal Foraging fibres | Field / Greenhouse | Tailoring bulk supply |
| Fungi | Common T1–T6; selected T7+ with advanced Greenhouse | Mycology Bed | Cooking + Alchemy |
| Wild Reagents | Generally NO | — | Remain Foraging-exclusive |

Wild Reagents generally stay Foraging-exclusive.

This prevents Farming from deleting the reason to use Foraging.

---

# 50. DOMESTICATION PROJECT

Domestication uses:

**Nursery / Greenhouse space**

not the player's Personal Activity Slot.

| Stage | Requirement / Cost | Result |
|---|---|---|
| Eligibility | Foraging Resource Mastery 25 + 100 lifetime gathered | No Farming slot consumed |
| Trial I — Propagation | Nursery Bay; 10 specimens | Learn basic reproduction |
| Trial II — Stabilization | Nursery/Greenhouse; 15 specimens | Adapt species to controlled cultivation |
| Trial III — Reliable Stock | Nursery/Greenhouse; 25 specimens | Establish repeatable planting stock |
| Complete | Permanent crop unlock | Can be planted normally in valid plot type |

No RNG failure.

---

# 51. DOMESTICATION SPECIMEN COST

Recommended total:

**50 specimens**

from Foraging:

- 10 Trial I;
- 15 Trial II;
- 25 Trial III.

This ensures the player actually explored/gathered the species before mass-producing it.

---

# 52. DOMESTICATION PROJECT TIME

Recommended total project time by Foraging/Farming Tier:

| Tier | Total Trial Time |
|---|---:|
| T1 | 30 min |
| T2 | 45 min |
| T3 | 1 h |
| T4 | 1.5 h |
| T5 | 2 h |
| T6 | 3 h |
| T7 | 4 h |
| T8 | 5.5 h |
| T9 | 7 h |
| T10 | 9 h |

Split roughly:

- 25%;
- 35%;
- 40%

across the three trials.

---

# 53. DOMESTICATION IS ACCOUNT KNOWLEDGE

Once completed:

that species becomes permanently plantable.

No need to redo Domestication after:

- changing property;
- rebuilding a plot;
- switching crop.

This is an Account Unlock.

---

# 54. SAME ITEM, DIFFERENT SOURCE

If Foraging finds:

**Moon Thyme**

and Farming later domesticates it:

Farming produces the exact same item:

**Moon Thyme**

Do not create:

- Wild Moon Thyme;
- Farmed Moon Thyme.

Consumers should not care about source.

---

# 55. FORAGING REMAINS RELEVANT

Even after Domestication:

Foraging still owns:

- first discovery;
- new-Tier access;
- Wild Reagents;
- route-exclusive materials;
- rare-resource Mastery.

Farming owns:

- scale;
- land allocation;
- predictable bulk production.

---

# 56. FIBRE DOMESTICATION

Selected Foraging Fibres can be farmed.

This creates:

**Foraging discovers → Farming scales → Tailoring processes**

Ideal for large Textile demand.

Greenhouse is optional for high-tier sensitive Fibre.

---

# 57. FUNGI DOMESTICATION

Policy inherited from Foraging:

- common T1–T6 Fungi can be domesticated;
- selected T7+ require advanced Greenhouse/Mycology;
- rare Wild Reagents such as Dreamcap remain wild unless a later design explicitly changes them.

---

# 58. FARMING TOOL

Primary profession equipment:

**Gardening Set**

Represents:

- hoe;
- hand trowel;
- pruning tools;
- watering tools;
- harvest knife.

| Tier | Tool | Lvl | Farming Power | Source | Effect |
|---|---|---|---|---|---|
| T0 | Worn Gardening Set | 1 | 5 | Starter | No bonus |
| T1 | Copper Gardening Set | 5 | 7 | Smithing + Fletching | +2 pp Harvest Bonus Chance |
| T2 | Iron Gardening Set | 15 | 10 | Smithing + Fletching | Manual Harvest Time -5%; Compost efficiency +5% |
| T3 | Cobalt Gardening Set | 25 | 14 | Smithing + Fletching | Crop Mastery XP +5% |
| T4 | Argent Gardening Set | 35 | 19 | Smithing + Fletching | Annual crop Growth Speed +4% |
| T5 | Emberite Gardening Set | 45 | 25 | Smithing + Fletching | Harvest Bonus Chance +5 pp |
| T6 | Frostsilver Gardening Set | 55 | 32 | Smithing + Fletching | Perennial/Orchard cycle -5% |
| T7 | Stormiron Gardening Set | 65 | 40 | Smithing + Fletching | Domestication Trial Time -8% |
| T8 | Aetherite Gardening Set | 75 | 49 | Smithing + Fletching | Greenhouse yield +8% |
| T9 | Umbral Gardening Set | 85 | 59 | Smithing + Fletching | Compost consumption interval +15% |
| T10 | Astralite Master Gardening Set | 95 | 70 | Multi-profession | Growth Speed +5%; Harvest Bonus +4 pp |

---

# 59. WHY ONE GARDENING SET

Do not create separate Tool slots for:

- Hoe;
- Watering Can;
- Pruner;
- Scythe;
- Shovel.

That would make profession gear cumbersome.

One Gardening Set represents the upgraded tool package.

---

# 60. FARMING POWER

Farming Power primarily matters for:

- manual bulk harvest operations;
- Domestication work;
- plot preparation;
- selected Orchard establishment.

Growth itself is primarily time/land-based.

This prevents Tool Power from turning into a fake "hit crop HP" mechanic.

---

# 61. TOOL SOURCE

Gardening Set is cross-profession.

Expected inputs:

- Smithing metal;
- Fletching handles;
- Leatherworking grips;
- Tailoring bag/apron component at higher tiers.

Farming defines its effects.

---

# 62. NO TOOL DURABILITY

Gardening Set is permanent.

Old sets move to Farmhands.

---

# 63. PROFESSION CLOTHING

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Fieldhand Hat | Annual crop Growth Speed +4% |
| T3 / L25 | Fieldhand Tunic | Harvest Bonus Chance +3 pp |
| T3 / L25 | Fieldhand Trousers | Farming Mastery XP +4% |
| T3 / L25 | Fieldhand Gloves | Manual Harvest Time -5% |
| T3 / L25 | Fieldhand Boots | Rotation bonus +2% |
| Set | Fieldhand 5/5 | Vegetable/Grain yield +5% |
| T5 / L45 | Herbalist Gardener Hood | Herb/Botanical Growth Speed +6% |
| T5 / L45 | Herbalist Gardener Coat | Herb/Botanical yield +6% |
| T5 / L45 | Herbalist Gardener Leggings | Domesticated crop Mastery XP +6% |
| T5 / L45 | Herbalist Gardener Gloves | Domestication Trial Time -6% |
| T5 / L45 | Herbalist Gardener Boots | Herb Bed yield +5% |
| Set | Herbalist Gardener 5/5 | Domesticated Herb/Botanical yield +7% |
| T7 / L65 | Orchardkeeper Hood | Orchard fruiting cycle -6% |
| T7 / L65 | Orchardkeeper Coat | Orchard yield +7% |
| T7 / L65 | Orchardkeeper Legguards | Orchard Mastery XP +7% |
| T7 / L65 | Orchardkeeper Gloves | Tree establishment time -8% |
| T7 / L65 | Orchardkeeper Boots | Orchard Harvest Bonus +5 pp |
| Set | Orchardkeeper 5/5 | Orchard yield +8% additional |
| T9 / L85 | Master Farmer Hat | All Crop Growth Speed +5% |
| T9 / L85 | Master Farmer Coat | Harvest Bonus Chance +5 pp |
| T9 / L85 | Master Farmer Trousers | Farming Mastery XP +8% |
| T9 / L85 | Master Farmer Gloves | Compost effectiveness +10% |
| T9 / L85 | Master Farmer Boots | All crop yield +4% |
| Set | Master Farmer 5/5 | Growth Speed +4%; Yield +4% |

---

# 64. CLOTHING IDENTITIES

## Fieldhand

Annual vegetables/grains.

## Herbalist Gardener

Herbs/Botanicals/Domestication.

## Orchardkeeper

Persistent trees/perennials.

## Master Farmer

Endgame hybrid.

---

# 65. PROFESSION JEWELRY

| Farming Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Planter's Ring | Annual crop Growth Speed +6% | Vegetable/Grain |
| 25 | Harvest Pendant | Harvest Bonus Chance +5 pp | General yield |
| 35 | Rotator's Band | Rotation bonus +4% | Crop plans |
| 45 | Herbalist's Garden Charm | Herb/Botanical yield +8% | Alchemy |
| 55 | Orchardkeeper Loop | Orchard fruiting cycle -8% | Fruit |
| 65 | Naturalist Seal | Domestication progress +15% | Foraging bridge |
| 75 | Glasshouse Chain | Greenhouse Growth Speed +8% | High-tier/domesticated crops |
| 85 | Estate Farmer Charm | Worker Farming efficiency +5% | Large-scale farming |
| 95 | Astral Cultivator Emblem | All Growth -5%; Harvest Bonus +4 pp | Endgame general |

Jewelry creates build choices for:

- annual growth;
- yield;
- rotation;
- Herbs;
- Orchard;
- Domestication;
- Greenhouse;
- workers.

---

# 66. SAVED FARM LOADOUTS

Recommended:

## Staples

Field Farmer specialization.

Vegetable/Grain plots.

## Alchemy Garden

Herbal Cultivator.

Herb/Botanical beds.

## Textile Fibre

Field plots with domesticated Fibre.

## Orchard

Orchardkeeper.

Fruit trees.

## Domestication

Naturalist/Herbal gear.

Nursery/Greenhouse trials.

---

# 67. CROP MASTERY

Every crop has:

**Mastery 1–100**

Includes:

- baseline Farming crops;
- domesticated Foraging crops.

Examples:

- Barley Mastery;
- Starroot Mastery;
- Moon Thyme Mastery as a Farming crop.

Foraging Mastery and Farming Crop Mastery are separate.

Reason:

one measures:

**finding it in the wild**

the other:

**cultivating it efficiently**

---

# 68. CROP MASTERY MILESTONES

| Crop Mastery | Permanent Effect |
|---|---|
| 10 | Growth Time -2% for this crop |
| 25 | Yield +5% |
| 50 | Harvest Bonus Chance +5 pp |
| 75 | Crop Rotation bonus +5% additional; Mastery XP +5% |
| 100 | Growth Time -3% additional; Yield +5% additional |

---

# 69. ORCHARD MASTERY ADAPTATION

For Orchard Trees:

Mastery 10:

fruiting cycle -2%.

Mastery 25:

yield +5%.

Mastery 50:

Harvest Bonus +5 pp.

Mastery 75:

establishment time -10%; Mastery XP +5%.

Mastery 100:

fruiting cycle -3% additional; yield +5%.

Same philosophy, tree-specific wording.

---

# 70. SKILL-WIDE FARMING MASTERY

Recommended:

| Completion | Reward |
|---:|---|
| 10% | All Crop Growth Speed +2% |
| 25% | Harvest Bonus +2 pp; second Crop Plan |
| 50% | Farmhand efficiency +5%; Rotation bonus +2% |
| 75% | Domestication Trial Time -10%; third specialist plan group |
| 100% | All yield +3%; Master Farmer marker |

---

# 71. FARMING SPECIALIZATIONS

Unlock:

**Farming 35**

| Specialization | Focus | Effects | Best For |
|---|---|---|---|
| Field Farmer | Annual crops | Vegetable/Grain Growth Speed +10%; yield +10%; Field Plot bonus +5%; Orchard yield -5% | Bulk Cooking/provisions |
| Herbal Cultivator | Herbs/Botanicals/Fungi | Herb/Botanical yield +12%; Domestication progress +20%; Mycology flush +1 every 4 cycles; Grain yield -5% | Alchemy / domestication |
| Orchardkeeper | Orchards/perennials | Orchard fruiting cycle -12%; Orchard yield +12%; Herb perennial cycle -5%; annual crop growth +5% slower | Fruit / long-cycle farming |

All reversible.

---

# 72. FIELD FARMER

Focus:

- Vegetables;
- Grains;
- Fibres.

Best for:

- Cooking staple supply;
- provisions;
- Tailoring Fibre.

This is the large-field specialist.

---

# 73. HERBAL CULTIVATOR

Focus:

- Herbs;
- Botanicals;
- Fungi;
- Domestication.

Best for:

- Alchemy;
- Cooking herbs;
- Foraging integration.

This is likely the strongest Alchemy-support specialization.

---

# 74. ORCHARDKEEPER

Focus:

- fruit trees;
- perennials.

Best for:

- stable long-term fruit supply;
- low-management background production.

---

# 75. SPECIALIZATION SWITCHING

Free when no manual Farming management action is currently resolving.

Switching does **not**:

- uproot crops;
- reset Growth;
- change current crop.

New bonuses apply prospectively.

No respec currency.

---

# 76. PROPERTY AGRICULTURAL INFRASTRUCTURE

Farming infrastructure is not a detached generic profession building.

It lives inside the property.

| Farming Infrastructure | Property Stage | Farming Req. | Main Unlocks |
|---|---|---|---|
| Garden Shed | House | 1 | 2 saved Crop Plans; tool storage; harvest-all by plot group |
| Lodge Nursery | Lodge | 20 | Domestication Trials; 4 plans; basic rotation automation |
| Manor Farm Office | Manor | 40 | Farmhands; auto-harvest/replant; Greenhouse/Mycology management |
| Estate Agricultural Office | Estate | 70 | Worker teams; reserve-driven crop plans; grouped plot management |
| Holdings Stewardship Office | Holdings | 100 | Satellite farms; department schedules; endgame cultivation policies |

This is intentional.

Farming should visually feel like:

**the land around the player's home expanding.**

---

# 77. PROPERTY-SPECIFIC LAND UPGRADES

| Upgrade | Farming Req. | Property Stage | Effect | Purpose |
|---|---|---|---|---|
| House Garden Beds | 1 | House | +6 capacity baseline | Farming becomes available |
| Rain Cistern | 15 | House | +5% growth speed on House Garden | First land infrastructure |
| Lodge Field Expansion | 20 | Lodge | Capacity 6 →14 | Field Plots + Nursery |
| Orchard Wall & Paths | 30 | Lodge | Orchard yield +5%; second Orchard area | Tree specialization |
| Manor Irrigation Channels | 40 | Manor | Capacity 14 →28; +8% growth speed | Greenhouse/Mycology + farmhands |
| Glasshouse Wing | 55 | Manor | 2 Greenhouse Bays; +10% Greenhouse growth | Advanced domestication |
| Estate Farmland Expansion | 70 | Estate | Capacity 28 →48 | Large plot groups / worker teams |
| Estate Irrigation Network | 80 | Estate | +12% global Farm growth speed | Large-scale farming |
| Great Orchard | 85 | Estate | Orchard capacity +8 equivalent; Fruit yield +10% | Permanent orchard economy |
| Holdings Agricultural Charter | 100 | Holdings | Capacity 48 →80 | Managed Field Blocks / department farming |

These upgrades give the House/Manor/Empire system direct mechanical meaning.

---

# 78. HOUSE GARDEN

Starter Farming.

Suggested:

**6 Capacity**

Enough to run:

- several annual beds;
- or a few beds + 1 Orchard.

No workers.

Player learns:

- planting;
- Growth;
- harvesting;
- Crop Mastery.

---

# 79. LODGE GROUNDS

Capacity increases to:

**14**

Unlock:

- proper Field Plots;
- larger Orchard;
- Nursery;
- Domestication Projects;
- saved rotation plans.

The property starts feeling like a working homestead.

---

# 80. MANOR FIELDS

Capacity:

**28**

Major Farming transformation.

Unlock:

- irrigation;
- Greenhouse;
- Mycology;
- Farmhands;
- auto-harvest/replant;
- grouped plot management.

This is where Farming begins changing from:

**gardening**

into:

**estate agriculture**

---

# 81. ESTATE FARMLAND

Capacity:

**48**

Unlock:

- large field groups;
- Great Orchard;
- worker teams;
- reserve-driven Crop Plans;
- advanced agricultural automation.

The player increasingly manages output targets rather than individual plants.

---

# 82. HOLDINGS AGRICULTURE

Capacity target:

**80**

But UI represents this through:

- Managed Field Blocks;
- Orchard Blocks;
- Greenhouse Blocks.

Do not render 80 tiny cards.

Holdings is where Farming becomes an empire-scale supply layer.

---

# 83. FARMHANDS

Suggested capacity:

| Property Stage | Suggested Farming Workers | Role |
|---|---|---|
| House | 0 | Player-managed only |
| Lodge | 0–1 | Nursery assistant only; no full auto farm by default |
| Manor | 3 | First real Farmhands; auto-harvest/replant |
| Estate | 8 | Field/orchard worker teams |
| Holdings | 16+ | Grouped Farm Blocks / department management |

Full Farmhand automation starts around:

**Manor**

not House.

This preserves early personal engagement.

---

# 84. FARMHAND ACTIONS

Farmhands can:

- harvest ready crops;
- replant according to Crop Plan;
- change next crop in rotation;
- apply configured Compost;
- maintain Orchards;
- manage Greenhouse/Mycology.

They cannot:

- unlock crops;
- gain player XP;
- complete first Domestication unlock for the player.

---

# 85. FARMHAND PROFICIENCY

Base Farmhand Efficiency:

**50% + Proficiency ×0.50%**

Efficiency primarily affects:

- harvest/replant turnaround;
- worker-managed yield bonus;
- management overhead.

It should **not** magically make biological Growth 2× faster at Proficiency 100.

Growth speed comes primarily from:

- land;
- infrastructure;
- crop mastery;
- player account bonuses.

---

# 86. FARMHAND YIELD

Recommended:

**Worker Harvest Yield = Player baseline crop yield × Worker Efficiency**

then worker gear/facility modifiers.

At Proficiency 100:

worker reaches baseline player output before superior player gear/specialization.

---

# 87. WORKERS DO NOT GAIN CROP MASTERY

Farmhands gain:

**Farming Proficiency**

not:

- Barley Mastery;
- Moon Thyme Mastery.

Crop Mastery represents player/account cultivation expertise.

---

# 88. WORKER CROP ACCESS

Workers can manage a crop only if:

**Crop Mastery â‰¥10**

For domesticated crops:

Domestication must also already be complete.

Player pioneers; workers maintain.

---

# 89. OLD FARMING GEAR TO WORKERS

Old:

- Gardening Sets;
- farming clothes;
- jewelry;

can move to Farmhands.

Use worker equipment templates.

---

# 90. CROP PLANS

Crop Plans are Farming's automation language.

A Plan stores:

- Plot Group;
- Crop;
- Rotation;
- Soil Preparation;
- Harvest policy;
- replant policy;
- reserve target;
- worker;
- fallback crop.

---

# 91. EARLY CROP PLAN

House:

player can save simple:

> Plant Barley on these 3 beds.

Harvest remains manual.

---

# 92. LODGE CROP PLAN

Can define:

> Turnip ↔ Barley rotation.

and:

> Use Compost while Compost >50.

Still mostly player-managed harvest.

---

# 93. MANOR CROP PLAN

Farmhands can execute:

> Maintain Barley â‰¥5,000.  
> If target reached → switch these 4 plots to Nettle Fibre.  
> If both targets reached → idle.

This is a major automation milestone.

---

# 94. ESTATE CROP PLAN

Can coordinate:

- multiple plot groups;
- workers;
- reserves;
- Crop Rotation;
- Greenhouse;
- Orchards.

Example:

> North Field: maintain Astral Grain 8,000.  
> Herb Court: maintain Moon Thyme 2,000.  
> Great Orchard: Starfruit permanent.  
> Greenhouse: domestication queue.

---

# 95. HOLDINGS AGRICULTURE PLAN

Department-level policies.

Example:

**Food Department**
- Grain reserve 20k.
- Vegetable reserve 15k.
- Fruit reserve 10k.

**Textile Department**
- Fibre reserve 15k.

**Alchemy Department**
- Herb reserve 8k.

The system allocates managed blocks according to priority.

This is the intended late-game empire fantasy.

---

# 96. PLANTING / HARVEST POLICY

For every plot group:

- Manual;
- Auto Harvest Only;
- Auto Harvest + Replant Same;
- Auto Follow Rotation;
- Auto Follow Reserve Plan.

Unlock these gradually.

Do not give full automation at Level 1.

---

# 97. HARVEST ALL

Even early Farming should have:

**Harvest All Ready**

within a selected plot group/location.

Do not force clicking each individual plant.

Later:

Estate-wide Harvest All becomes available if still useful.

---

# 98. PLANT ALL

Likewise:

**Plant Plan**

can fill all eligible empty plots in a group.

The UI should scale from 4 plots to 80 Capacity cleanly.

---

# 99. GROWTH TIME FORMULA

For normal crop:

**Final Growth Time = Base Growth Time / (1 + Growth Speed Bonuses)**

Apply:

- plot;
- Mastery;
- gear;
- jewelry;
- Specialization;
- land upgrades;
- Compost.

Recommended hard cap:

**+100% Growth Speed**

which means:

minimum 50% of base time.

Additional specific endgame effects should not break this without explicit design.

---

# 100. ORCHARD FRUITING FORMULA

Initial establishment:

**Base Orchard Growth Time / (1 + Growth Speed)**

After mature:

**Fruit Cycle = Base Establishment ×0.35 / (1 + Orchard-specific Growth Speed)**

Tree remains planted.

---

# 101. PERENNIAL REGROWTH FORMULA

After first Herb/Botanical harvest:

**Regrowth Time = Initial Growth Time ×0.65**

for next two harvests.

Then crop requires replanting.

---

# 102. FUNGI FLUSH FORMULA

Flush times:

- first ×1.00;
- second ×1.10;
- third ×1.20.

Then bed resets.

Greenhouse/Mycology bonuses apply.

---

# 103. YIELD FORMULA

Recommended:

**Final Base Yield = Crop Base Yield  
× Plot Modifier  
× Rotation Modifier  
× Soil Modifier  
× Mastery  
× Gear  
× Jewelry  
× Specialization  
× Estate bonuses**

Resolve fractional quantity normally.

Then roll Harvest Bonus Chance.

---

# 104. HARVEST BONUS FORMULA

Roll once per plot harvest.

Success:

**+ceil(Crop Base Yield ×0.20)**

not 20% of already fully multiplied output.

This prevents multipliers compounding too aggressively.

---

# 105. ROTATION BONUS FORMULA

Two-Crop:

**×1.08 yield**

Three-Crop:

**×1.12 yield**

Special gear can add:

percentage points to the rotation bonus.

Recommended total cap:

**+25% rotation yield**

---

# 106. FARMING XP

Player harvest grants:

**Base Crop XP × yield-independent crop completion**

Do not scale XP directly with every bonus item produced.

Otherwise yield gear becomes XP gear unintentionally.

Recommended:

one harvested crop cycle grants the table's Base XP.

Orchard:

XP per fruit cycle.

Perennial:

XP per cut.

---

# 107. CROP MASTERY XP

Recommended:

**Crop Mastery XP = Farming XP ×0.40**

then apply:

- gear;
- rotation;
- specialization;
- account mastery modifiers.

Worker harvests grant none.

---

# 108. DOMESTICATION XP

Domestication trials grant modest Farming XP.

But they should not be the fastest way to level Farming.

Main value is:

**unlocking new cultivated species**

---

# 109. BASELINE FARMING TOOL PROGRESSION

| Tier | Tool | Lvl | Farming Power | Source | Effect |
|---|---|---|---|---|---|
| T0 | Worn Gardening Set | 1 | 5 | Starter | No bonus |
| T1 | Copper Gardening Set | 5 | 7 | Smithing + Fletching | +2 pp Harvest Bonus Chance |
| T2 | Iron Gardening Set | 15 | 10 | Smithing + Fletching | Manual Harvest Time -5%; Compost efficiency +5% |
| T3 | Cobalt Gardening Set | 25 | 14 | Smithing + Fletching | Crop Mastery XP +5% |
| T4 | Argent Gardening Set | 35 | 19 | Smithing + Fletching | Annual crop Growth Speed +4% |
| T5 | Emberite Gardening Set | 45 | 25 | Smithing + Fletching | Harvest Bonus Chance +5 pp |
| T6 | Frostsilver Gardening Set | 55 | 32 | Smithing + Fletching | Perennial/Orchard cycle -5% |
| T7 | Stormiron Gardening Set | 65 | 40 | Smithing + Fletching | Domestication Trial Time -8% |
| T8 | Aetherite Gardening Set | 75 | 49 | Smithing + Fletching | Greenhouse yield +8% |
| T9 | Umbral Gardening Set | 85 | 59 | Smithing + Fletching | Compost consumption interval +15% |
| T10 | Astralite Master Gardening Set | 95 | 70 | Multi-profession | Growth Speed +5%; Harvest Bonus +4 pp |

---

# 110. COMPLETE FARMING CLOTHING

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Fieldhand Hat | Annual crop Growth Speed +4% |
| T3 / L25 | Fieldhand Tunic | Harvest Bonus Chance +3 pp |
| T3 / L25 | Fieldhand Trousers | Farming Mastery XP +4% |
| T3 / L25 | Fieldhand Gloves | Manual Harvest Time -5% |
| T3 / L25 | Fieldhand Boots | Rotation bonus +2% |
| Set | Fieldhand 5/5 | Vegetable/Grain yield +5% |
| T5 / L45 | Herbalist Gardener Hood | Herb/Botanical Growth Speed +6% |
| T5 / L45 | Herbalist Gardener Coat | Herb/Botanical yield +6% |
| T5 / L45 | Herbalist Gardener Leggings | Domesticated crop Mastery XP +6% |
| T5 / L45 | Herbalist Gardener Gloves | Domestication Trial Time -6% |
| T5 / L45 | Herbalist Gardener Boots | Herb Bed yield +5% |
| Set | Herbalist Gardener 5/5 | Domesticated Herb/Botanical yield +7% |
| T7 / L65 | Orchardkeeper Hood | Orchard fruiting cycle -6% |
| T7 / L65 | Orchardkeeper Coat | Orchard yield +7% |
| T7 / L65 | Orchardkeeper Legguards | Orchard Mastery XP +7% |
| T7 / L65 | Orchardkeeper Gloves | Tree establishment time -8% |
| T7 / L65 | Orchardkeeper Boots | Orchard Harvest Bonus +5 pp |
| Set | Orchardkeeper 5/5 | Orchard yield +8% additional |
| T9 / L85 | Master Farmer Hat | All Crop Growth Speed +5% |
| T9 / L85 | Master Farmer Coat | Harvest Bonus Chance +5 pp |
| T9 / L85 | Master Farmer Trousers | Farming Mastery XP +8% |
| T9 / L85 | Master Farmer Gloves | Compost effectiveness +10% |
| T9 / L85 | Master Farmer Boots | All crop yield +4% |
| Set | Master Farmer 5/5 | Growth Speed +4%; Yield +4% |

---

# 111. COMPLETE FARMING JEWELRY

| Farming Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Planter's Ring | Annual crop Growth Speed +6% | Vegetable/Grain |
| 25 | Harvest Pendant | Harvest Bonus Chance +5 pp | General yield |
| 35 | Rotator's Band | Rotation bonus +4% | Crop plans |
| 45 | Herbalist's Garden Charm | Herb/Botanical yield +8% | Alchemy |
| 55 | Orchardkeeper Loop | Orchard fruiting cycle -8% | Fruit |
| 65 | Naturalist Seal | Domestication progress +15% | Foraging bridge |
| 75 | Glasshouse Chain | Greenhouse Growth Speed +8% | High-tier/domesticated crops |
| 85 | Estate Farmer Charm | Worker Farming efficiency +5% | Large-scale farming |
| 95 | Astral Cultivator Emblem | All Growth -5%; Harvest Bonus +4 pp | Endgame general |

---

# 112. COMPLETE SPECIALIZATION BASELINE

| Specialization | Focus | Effects | Best For |
|---|---|---|---|
| Field Farmer | Annual crops | Vegetable/Grain Growth Speed +10%; yield +10%; Field Plot bonus +5%; Orchard yield -5% | Bulk Cooking/provisions |
| Herbal Cultivator | Herbs/Botanicals/Fungi | Herb/Botanical yield +12%; Domestication progress +20%; Mycology flush +1 every 4 cycles; Grain yield -5% | Alchemy / domestication |
| Orchardkeeper | Orchards/perennials | Orchard fruiting cycle -12%; Orchard yield +12%; Herb perennial cycle -5%; annual crop growth +5% slower | Fruit / long-cycle farming |

---

# 113. COMPLETE AGRICULTURAL INFRASTRUCTURE

| Farming Infrastructure | Property Stage | Farming Req. | Main Unlocks |
|---|---|---|---|
| Garden Shed | House | 1 | 2 saved Crop Plans; tool storage; harvest-all by plot group |
| Lodge Nursery | Lodge | 20 | Domestication Trials; 4 plans; basic rotation automation |
| Manor Farm Office | Manor | 40 | Farmhands; auto-harvest/replant; Greenhouse/Mycology management |
| Estate Agricultural Office | Estate | 70 | Worker teams; reserve-driven crop plans; grouped plot management |
| Holdings Stewardship Office | Holdings | 100 | Satellite farms; department schedules; endgame cultivation policies |

---

# 114. COMPLETE LAND-UPGRADE BASELINE

| Upgrade | Farming Req. | Property Stage | Effect | Purpose |
|---|---|---|---|---|
| House Garden Beds | 1 | House | +6 capacity baseline | Farming becomes available |
| Rain Cistern | 15 | House | +5% growth speed on House Garden | First land infrastructure |
| Lodge Field Expansion | 20 | Lodge | Capacity 6 →14 | Field Plots + Nursery |
| Orchard Wall & Paths | 30 | Lodge | Orchard yield +5%; second Orchard area | Tree specialization |
| Manor Irrigation Channels | 40 | Manor | Capacity 14 →28; +8% growth speed | Greenhouse/Mycology + farmhands |
| Glasshouse Wing | 55 | Manor | 2 Greenhouse Bays; +10% Greenhouse growth | Advanced domestication |
| Estate Farmland Expansion | 70 | Estate | Capacity 28 →48 | Large plot groups / worker teams |
| Estate Irrigation Network | 80 | Estate | +12% global Farm growth speed | Large-scale farming |
| Great Orchard | 85 | Estate | Orchard capacity +8 equivalent; Fruit yield +10% | Permanent orchard economy |
| Holdings Agricultural Charter | 100 | Holdings | Capacity 48 →80 | Managed Field Blocks / department farming |

---

# 115. COMPLETE LEVEL ROADMAP

| Farming Lvl | Major Unlock |
|---|---|
| 1 | House Garden; Turnip; Worn Gardening Set; Garden Bed |
| 4 | Barley |
| 5 | Copper Gardening Set |
| 8 | Apple Tree |
| 10 | Field Plot + Herb Bed |
| 11 | Beetroot |
| 14 | Rye |
| 15 | Iron Gardening Set; Orchard Plot; Planter's Ring |
| 18 | Pear Tree |
| 20 | Lodge Grounds / Nursery Bay / first Domestication Projects |
| 21 | Carrot |
| 24 | Oats |
| 25 | Cobalt Gardening Set; Fieldhand set; Harvest Pendant |
| 28 | Plum Tree |
| 31 | Moonroot |
| 34 | Silvergrain |
| 35 | Argent Gardening Set; Farming Specializations; Rotator's Band |
| 38 | Lunaplum Tree |
| 40 | Manor Fields; Greenhouse Bay; Mycology Bed; Farmhands |
| 41 | Ember Pepper |
| 44 | Cinderwheat |
| 45 | Emberite Gardening Set; Herbalist Gardener set; Herbalist's Garden Charm |
| 48 | Emberpear Tree |
| 51 | Frost Cabbage |
| 54 | Snowgrain |
| 55 | Frostsilver Gardening Set; Orchardkeeper Loop |
| 58 | Frostapple Tree |
| 61 | Stormbean |
| 64 | Galegrain |
| 65 | Stormiron Gardening Set; Orchardkeeper set; Naturalist Seal |
| 68 | Thunderfruit Tree |
| 70 | Estate Farmland Expansion |
| 71 | Aether Squash |
| 74 | Cloudgrain |
| 75 | Aetherite Gardening Set; Glasshouse Chain |
| 78 | Prism Pear Tree |
| 81 | Umbral Root |
| 84 | Duskgrain |
| 85 | Umbral Gardening Set; Master Farmer set; Estate Farmer Charm |
| 88 | Nightplum Tree |
| 91 | Starroot |
| 94 | Astral Grain |
| 95 | Astralite Master Gardening Set; Astral Cultivator Emblem |
| 98 | Starfruit Tree |
| 100 | Farming cap; Holdings Agriculture; Worldgarden endgame path |

---

# 116. FARMING ↔ COOKING

This is Farming's largest everyday consumer link.

Farming supplies:

- `[Vegetable]`;
- `[Grain]`;
- `[Herb]`;
- `[Mushroom]`;
- `[Berry]`;
- `[Fruit]` (now canonical in Cooking).

Cooking turns them into:

- stews;
- roasts;
- grain bowls;
- baked food;
- Banquets;
- worker provisions.

---

# 117. FARMING ↔ ALCHEMY

Farming supplies bulk:

- Herbs;
- Botanicals;
- selected Fungi.

Foraging remains the discovery / rare Wild Reagent source.

Farming becomes:

**reliable repeatable bulk reagent production**

after Domestication.

This relationship should be central to the upcoming Alchemy document.

---

# 118. FARMING ↔ TAILORING

Selected domesticated Fibre can be grown in Fields.

This gives Tailoring a scalable late-game supply source.

Foraging still owns first discovery.

---

# 119. FARMING ↔ FORAGING

Foraging:

- finds species;
- raises Foraging Mastery;
- enables Domestication Candidate.

Farming:

- runs Domestication Project;
- allocates land;
- scales production.

This is one of the game's strongest profession relationships.

---

# 120. FARMING ↔ ESTATE WORKERS

Farming can supply future worker food/provisions through Cooking.

Estate workers in turn:

- maintain Farming plots;
- scale background production.

This creates a useful circular infrastructure economy:

**land → crops → food → workforce → more infrastructure**

without requiring harsh wages.

---

# 121. FARMING ↔ ESTATE PROJECTS

Estate / Long-Term Projects can consume:

- Grain;
- Fibre;
- Herbs;
- Orchard produce;
- Compost.

Examples:

- Greenhouse expansion;
- Worker Quarters supply;
- Herbarium;
- Great Orchard;
- estate provisioning.

Use resources logically, not as arbitrary sinks.

---

# 122. OLD CROP RELEVANCE

T1–T5 Farming outputs remain useful through:

- cheap food;
- provisions;
- worker supply;
- Alchemy;
- Tailoring;
- cross-tier Cooking;
- Estate projects.

Workers eventually maintain older crop stock.

---

# 123. FARMING SCREEN — HIGH-LEVEL UI

The screen should visually reinforce:

**property expansion**

rather than show one giant spreadsheet.

Top:

**Property Agriculture Overview**

Shows:

- Property Stage;
- used / total Cultivation Capacity;
- Ready plots;
- Growing plots;
- worker count;
- total expected harvest value/hour.

Below:

location cards:

- House Garden;
- Lodge Grounds;
- Manor Fields;
- Walled Garden;
- Estate Farmland;
- Great Orchard;
- Greenhouse;
- Holdings Blocks.

Only unlocked locations appear.

---

# 124. PLOT GROUP CARD

Each group shows:

- plot type;
- number of spots;
- crop;
- Growth%;
- ready count;
- ETA;
- Crop Plan;
- worker;
- yield/harvest;
- expected output/day.

Large identical plot groups use one card.

---

# 125. CROP BROWSER

Filters:

- Vegetable;
- Grain;
- Fruit;
- Herb;
- Fibre;
- Fungi;
- Botanical;
- Domesticated;
- not yet domesticated.

Each crop card shows:

- level;
- valid plot;
- growth time;
- yield;
- Mastery;
- Cooking/Alchemy/Tailoring tags;
- current Bank stock.

---

# 126. DOMESTICATION SCREEN

Nursery panel:

- Candidate species;
- Foraging Mastery;
- lifetime gathered;
- specimen cost;
- Trial stage;
- remaining time;
- required plot;
- final Farming crop type.

This makes the Foraging → Farming bridge visible.

---

# 127. AGRICULTURAL OVERVIEW ANALYTICS

Must show:

- crops ready now;
- crops finishing within 1h / 8h / 24h;
- output/day by resource;
- used Capacity;
- unused Capacity;
- worker-managed Capacity;
- manual-managed Capacity;
- next Domestication completion;
- Compost consumption/day.

---

# 128. CROP ANALYTICS

For selected crop:

- Growth Time;
- yield/harvest;
- harvests/day;
- output/day/plot;
- output/day/current allocation;
- XP/harvest;
- Mastery/harvest;
- expected time to Mastery;
- Plot bonuses;
- Rotation bonus;
- Soil preparation;
- worker output separately.

---

# 129. WHY OUTPUT/DAY MATTERS

Farming crop timers are much longer than standard profession actions.

Therefore the primary analytics unit should often be:

**per hour / per day**

rather than only per second.

This makes long-term planning readable.

---

# 130. NOTIFICATIONS

Optional Farming notifications:

- crop group ready;
- Orchard harvest ready;
- Domestication Trial complete;
- Farm plan blocked by capacity/resource condition.

Do not notify for every individual plot.

Group notifications.

---

# 131. OFFLINE FARMING

Farming continues fully offline.

Simulation must process:

- Crop Growth;
- perennial regrowth;
- Orchard fruit cycles;
- Domestication Trial timers;
- worker auto-harvest/replant;
- Crop Plans;
- Compost policies.

Manual player plots stop at:

**Ready**

if no worker/automation harvest is assigned.

---

# 132. OFFLINE PLAYER-MANAGED PLOTS

Example:

player plants Barley and logs off.

Barley finishes after 7 min.

If no auto-harvest:

it remains Ready for the remaining offline time.

No invisible repeated harvests.

This preserves the value of automation.

---

# 133. OFFLINE WORKER-MANAGED PLOTS

If Manor Farmhand is assigned:

worker may:

- harvest;
- replant;
- continue Crop Plan;

for the full offline duration.

Worker output uses Worker Efficiency.

No player Farming XP/Mastery.

---

# 134. OFFLINE RESULTS

Show:

- crops grown;
- player-ready plots;
- worker harvest output;
- Orchard harvests;
- Compost consumed;
- rotations performed;
- Domestication progress;
- new crop unlocks;
- worker Proficiency gained.

If player manually harvests ready plots after login:

that harvest grants player XP/Mastery then.

---

# 135. SAVE STATE

Store:

- Property Stage;
- Cultivation Capacity;
- plot groups;
- crop per plot/group;
- Growth progress;
- Orchard establishment/fruiting state;
- perennial/flush count;
- Crop Plan;
- previous crop family for rotation;
- soil preparation;
- Compost policy;
- Crop Mastery;
- Domestication progress/unlocks;
- worker assignment;
- worker Proficiency;
- agricultural infrastructure upgrades.

---

# 136. CHRONICLES — EARLY FARMING

Suggested:

1. unlock House Garden.
2. plant Turnip.
3. explain background Growth.
4. harvest first crop.
5. plant Barley.
6. unlock Apple Tree.
7. establish first Orchard tree.
8. explain Crop Mastery.
9. use crop in Cooking.
10. use Harvest All.

---

# 137. CHRONICLES — LODGE FARMING

Suggested:

- upgrade to Lodge;
- build Field Plot;
- create two-crop rotation;
- unlock Nursery;
- qualify first Foraging Domestication Candidate;
- complete first Domestication Trial;
- grow a domesticated Herb;
- save first Crop Plan.

---

# 138. CHRONICLES — MANOR FARMING

Suggested:

- reach Manor;
- unlock Greenhouse;
- unlock Mycology Bed;
- assign first Farmhand;
- enable Auto Harvest + Replant;
- maintain a Grain reserve;
- grow domesticated Fibre for Tailoring;
- run three-crop rotation.

---

# 139. CHRONICLES — ESTATE FARMING

Suggested:

- reach Estate;
- develop Great Orchard;
- create Alchemy Garden;
- maintain worker food crop reserves;
- manage multiple worker Farm groups;
- use Reserve Rotation;
- maintain Herb/Grain/Fibre simultaneously.

---

# 140. CHRONICLES — LATE FARMING

Suggested:

- grow Starroot;
- harvest Astral Grain;
- mature Starfruit Tree;
- equip Astralite Master Gardening Set;
- domesticate a T9/T10 eligible wild species;
- reach Farming 100;
- unlock Holdings Agriculture;
- complete Master of the Land.

---

# 141. MASTER OF THE LAND

Recommended requirements:

- Farming 100;
- Holdings agricultural access;
- Astralite Master Gardening Set;
- harvest all 30 baseline crops;
- at least 10 Crop Masteries 100;
- complete at least 10 Domestication Projects;
- Starfruit Mastery 50;
- maintain 40+ active Capacity;
- have at least one worker-managed Field group and one Orchard group.

Reward:

- fourth advanced Crop Plan profile;
- Master Farmer marker;
- Worldgarden endgame line.

---

# 142. WORLDGARDEN — POST-100

Post-100 Farming endgame:

**Worldgarden**

This should be a special Estate/ Holdings agricultural project rather than a normal T11 field.

It represents a highly developed cultivated ecosystem.

---

# 143. WORLDGARDEN UNLOCK

Requirements:

- Master of the Land;
- Holdings;
- Farming 100;
- Greenhouse / Agricultural Office endgame upgrade;
- Wildheart Expedition unlocked;
- selected high-tier Domestication completed.

This deliberately links:

- Foraging;
- Farming;
- Estate.

---

# 144. WORLDGARDEN PLOTS

Recommended limited special plots:

- 2 Worldgarden Beds;
- 1 Worldgarden Orchard;
- 1 Worldgarden Nursery.

Do not let Worldgarden replace the normal 80 Capacity economy.

It is specialist endgame content.

---

# 145. WORLDGARDEN CROPS

Potential selective resources:

- Everbloom cultivation trial;
- Worldgrain;
- Genesis Fruit;
- Worldsilk propagation support.

Important:

Foraging-exclusive **Wildheart Essence** remains wild.

Worldgarden should not erase Foraging's endgame identity.

---

# 146. WORLDGRAIN

Potential endgame Grain.

Uses:

- top Cooking Banquets;
- Holdings provisions;
- permanent projects.

Not mandatory for normal T10 Cooking.

---

# 147. GENESIS FRUIT

Potential Worldgarden Orchard output.

Uses:

- endgame Cooking;
- Alchemy;
- special Estate projects.

Persistent tree.

---

# 148. WORLDSILK SUPPORT

Worldsilk itself originates through Wildheart/Foraging.

Farming may later help propagate a supporting plant or increase access through a difficult endgame project.

Do not automatically make Worldsilk a mass-produced Field crop.

Tailoring's endgame should remain valuable.

---

# 149. DEVTOOLS

Farming DevTools should support:

- set Farming Level;
- set Crop Mastery;
- set Skill-Wide Mastery;
- set Property Stage;
- set Cultivation Capacity;
- add/remove plot groups;
- set Crop;
- set Growth %;
- force Ready;
- instant Harvest;
- set Orchard maturity/fruit cycle;
- set perennial cycle count;
- unlock Domestication Candidate;
- set Domestication Trial stage/time;
- complete Domestication;
- spawn Compost;
- set Crop Plan;
- assign Farmhand;
- set Farmhand Proficiency;
- simulate 1m / 1h / 8h / 24h / 7d;
- compare expected vs actual output.

Farming especially needs long offline simulation tools.

---

# 150. DATA MODEL — PROPERTY AGRICULTURE

Account agricultural state:

- Property Stage;
- Cultivation Capacity;
- capacity used;
- unlocked Plot Types;
- land upgrades;
- Crop Plans;
- agricultural locations.

---

# 151. DATA MODEL — PLOT GROUP

Plot Group:

- ID;
- Location;
- Plot Type;
- Capacity Cost;
- number of physical plots represented;
- Crop ID;
- Growth progress;
- Ready count;
- lifecycle stage;
- Rotation history;
- Soil Preparation;
- worker assignment;
- Crop Plan ID.

---

# 152. DATA MODEL — CROP

Crop:

- ID;
- Tier;
- Level;
- Class;
- valid Plot Types;
- Base Growth;
- Base Yield;
- Base XP;
- lifecycle;
- Cooking/Alchemy/Tailoring tags;
- Domestication flag.

---

# 153. DATA MODEL — DOMESTICATION

Per resource:

- Foraging Candidate flag;
- Trial stage;
- specimens consumed;
- time remaining;
- required Nursery/Greenhouse;
- Farming unlock flag.

---

# 154. ANTI-BLOAT RULES

Avoid:

- one seed item per crop;
- random seed quality;
- crop disease RNG;
- pests destroying offline progress;
- weather dependency;
- watering every 10 minutes;
- fertilizer required for survival;
- 80 individual endgame plot cards;
- separate Wild/Farmed versions of the same resource;
- 10 fertilizer tiers;
- harsh soil degradation.

Prefer:

- abstract Planting Stock;
- deterministic Growth;
- property-based land limits;
- positive Rotation bonuses;
- grouped late-game plots;
- meaningful optional Compost;
- Domestication as Account Unlock.

---

# 155. MAJOR OPEN QUESTIONS — RECOMMENDED ANSWERS

## Should Farming be directly tied to House/Manor/Estate?

**Yes. Strongly.**

This is the core architecture.

---

## Should Farming have its own separate world field unrelated to the home?

**No baseline.**

Normal Farming land belongs to the player's property.

Special endgame Worldgarden remains an Estate/ Holdings project.

---

## Should property upgrades give more plots?

**Yes.**

Represent them through Cultivation Capacity and new physical farming areas.

---

## Should all plot types cost the same Capacity?

**No.**

Orchard/Greenhouse consume more land than a simple Garden Bed.

---

## Should crops grow while the player is Mining/Combat?

**Yes.**

Farming is the primary background profession exception.

---

## Should crops grow offline?

**Yes. Fully.**

---

## Should manual plots automatically harvest offline?

**No.**

They stop Ready.

Automation requires Farmhands/Manor systems.

---

## Should manual Farming harvest interrupt the main skill?

**Prefer no.**

Treat it as short Estate management.

---

## Should player get Farming XP while crop is merely growing?

**No.**

XP is awarded at player harvest.

---

## Should Farmhand harvests give player XP/Mastery?

**No.**

Resources only.

---

## Should Farming have seeds as Bank items?

**No baseline.**

Abstract Planting Stock after unlock.

---

## Why no Seed items?

With 30 baseline crops + many domesticated species, Seed stacks would nearly double Farming item count without adding enough decisions.

---

## Should planting be free after crop unlock?

**Normal seed stock: yes, abstractly.**

Land and time are the main costs.

Optional Compost and Orchard establishment can add resource/gold sinks.

---

## Should Orchard trees be replanted every harvest?

**No.**

Plant once, then repeat fruit cycles until uprooted.

---

## Should Herbs be permanent forever?

**No.**

Use three-harvest perennial cycles, then replant.

---

## Should Fungi behave like Vegetables?

**No.**

Use Mycology multi-flush cycles.

---

## Should Farming have harsh Soil Fertility?

**No.**

Use positive Crop Rotation bonuses instead.

---

## Should repeating one crop be punished?

**No.**

Baseline remains viable.

Rotation is an optimization.

---

## Should Compost be mandatory?

**No.**

Optional yield/growth optimization.

---

## Should Foraging species be plantable automatically when found?

**No.**

Require Domestication Candidate + Farming project.

---

## Should Domestication be random?

**No.**

Deterministic 3-stage project.

---

## Should Domestication consume Foraging specimens?

**Yes.**

Recommended 50 total.

---

## Should domesticated Farming output be a separate item?

**No.**

Same resource item.

---

## Should all Foraging Herbs become farmable?

**Most normal Herbs: yes after Domestication.**

---

## Should Wild Reagents become farmable?

**Generally no.**

Foraging must retain exclusive endgame value.

---

## Should Fibres be farmable?

**Selected fibres: yes.**

This supports Tailoring scale.

---

## Canonical Cooking `[Fruit]` tag

**Yes.**

Cleaner than pretending Apples/Pears are Berries.

---

## Should Farming have a normal profession Tool?

**Yes: Gardening Set.**

But it affects management/yield/Trials more than biological Growth alone.

---

## Should Gardening Set have durability?

**No.**

---

## Should Farming have Specializations?

**Yes.**

Field Farmer / Herbal Cultivator / Orchardkeeper represent genuinely different land strategies.

---

## Should Specialization reset crops?

**No.**

Bonuses change prospectively.

---

## Should workers unlock early?

**Not full automation.**

Real Farmhands around Manor create a meaningful Estate milestone.

---

## Should House have worker auto-farming?

**No baseline.**

Early player should personally engage.

---

## Should Holdings show 80 separate plot cards?

**Absolutely not.**

Use Managed Field Blocks / grouped plots.

---

## Should old crops remain useful?

**Yes.**

Cooking, Alchemy, worker provisions, Tailoring, Estate.

---

## Should Farming 100 end the profession?

**No.**

Post-100:
- Mastery;
- Domestication completion;
- Holdings agriculture;
- Worldgarden;
- worker management;
- endgame supply chains.

---

# 156. COMPLETE LOCKED FARMING BASELINE

1. Farming is directly tied to House → Lodge → Manor → Estate → Holdings.
2. Property progression increases Cultivation Capacity.
3. Farming Growth is a background exception to Personal Activity Slot.
4. Crops grow online/offline while player does another activity.
5. Early plots do not auto-harvest/replant.
6. Player harvest grants Farming XP/Mastery.
7. Worker harvest grants resources but no player XP/Mastery.
8. Cultivation Capacity replaces one fixed plot count.
9. Plot types:
   - Garden Bed;
   - Field Plot;
   - Herb Bed;
   - Orchard Plot;
   - Nursery Bay;
   - Mycology Bed;
   - Greenhouse Bay;
   - Managed Field Block.
10. 30 baseline crops.
11. Baseline crop groups:
    - Vegetable;
    - Grain;
    - Orchard Fruit.
12. Additional domesticated crops reuse Foraging resource items.
13. Annual crops are single-harvest.
14. Herbs/Botanicals can be 3-cycle perennials.
15. Fungi use 3-flush Mycology cycles.
16. Orchard trees persist after maturity.
17. No crop failure.
18. No crop decay.
19. No weather destruction.
20. No per-crop Seed item stacks.
21. Planting Stock is abstracted after unlock.
22. Crop Rotation gives positive bonuses; repeat farming is not punished.
23. Optional Compost improves output.
24. Foraging Domestication requires Candidate status.
25. Candidate baseline: Foraging Mastery 25 +100 gathered.
26. Domestication is deterministic 3-stage project.
27. Recommended specimen total =50.
28. Wild Reagents generally stay Foraging-exclusive.
29. Farming supplies `[Fruit]` items to Cooking.
30. Gardening Set is profession Tool.
31. No Tool durability.
32. Crop Mastery 1–100.
33. Skill-Wide Farming Mastery.
34. Three reversible Specializations:
    - Field Farmer;
    - Herbal Cultivator;
    - Orchardkeeper.
35. Farming infrastructure physically belongs to the property.
36. Full Farmhand automation begins around Manor.
37. Crop Plans progress from simple planting to reserve-driven Estate agriculture.
38. Holdings uses grouped agriculture, not dozens of individual cards.
39. Farming strongly feeds Cooking, Alchemy, Tailoring, workers, Estate.
40. Post-100 endgame uses Worldgarden.
41. All baseline Farming content lives in this single MD.

---

# 157. FINAL SUMMARY

Farming begins with:

**House Garden**

↓

**a few Turnip / Barley plots**

↓

**Apple Tree**

↓

**background Growth while the player does other skills**

↓

**Lodge Grounds**

↓

**Fields + Orchard + Nursery**

↓

**Foraging Domestication**

↓

**Herbs / Fibres / Fungi become cultivatable**

↓

**Crop Rotations**

↓

**Manor**

↓

**Greenhouse + Mycology + Farmhands**

↓

**Estate Farmland**

↓

**worker-managed reserves**

↓

**Great Orchard**

↓

**Farming 100**

↓

**Holdings Agriculture**

↓

**Worldgarden**

The profession's central resource is not merely:

**the crop**

It is:

> **land**

The player's House/Manor/Estate determines how much agriculture the account can support.

The strategic decisions become:

- what deserves limited land;
- what should remain an Orchard permanently;
- what crops should rotate;
- which wild species are worth domesticating;
- which resources should workers maintain;
- how much land goes to Cooking, Alchemy, Tailoring, or provisions.

Long-term progression becomes:

**I tend a few plants beside my House**

↓

**I build a homestead**

↓

**I operate Manor fields and a Greenhouse**

↓

**workers maintain established crops**

↓

**my Estate supplies entire profession chains**

↓

**my Holdings run agriculture as part of a larger empire**

Core Farming identity:

> **Your farm grows because your home grows. Every new piece of land turns the player's property from a house into an economic engine.**



# INTEGRATION HARDENING — PERSISTENT FARM LOADOUT

The Farm Management Loadout assigns unique physical equipment items. An assigned item cannot simultaneously be player-worn, assigned to a worker, or assigned to another station/background loadout. Reassignment requires an explicit removal from its current owner; no loadout duplicates equipment. Offline crop growth uses the same growth/yield rules as online play. Manual early harvest remains available; background Growth grants no player XP/Mastery. Manor Farmhands manage crops only after the property and station gates in this document are met.







