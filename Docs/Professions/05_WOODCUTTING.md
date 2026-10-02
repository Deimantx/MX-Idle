# 05 — WOODCUTTING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `Smithing.md`, `Fletching.md`, `Hunting.md`
**Purpose:** Define Woodcutting as one complete profession in a single source-of-truth file: Groves, Tree Stands, growth and maturity, automatic rotation, 10-tier timber progression, Axe progression, Bark/Resin/Heartwood, profession gear, Mastery, Specializations, Estate Forestry Yard, workers, planner, Chronicles, UI, formulas, balance, Fletching integration, Hunting traps, and endgame Worldroot progression.

**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)

---

# 1. WOODCUTTING ROLE IN THE GAME

Woodcutting is the primary source of timber and forestry materials.

Its outputs feed:

- Fletching;
- Fishing Rods;
- bows / crossbows;
- Utility Blanks / Shafts;
- Hunting traps;
- Estate / facilities;
- worker equipment;
- Alchemy;
- Leatherworking support;
- Long-Term Projects.

Woodcutting should not become:

**Select Tree → wait forever → receive Log**

Its identity is:

**Groves + multiple Tree Stands + Regrowth + Maturity + automatic Rotation**

The player does not only ask:

> Which wood do I need?

They also ask:

> How mature should I let the trees become, and how should my rotation move between stands while the grove regrows?

---

# 2. CORE FANTASY

The player begins with a worn Hatchet in a small copse.

At first:

- there are only a few usable stands;
- trees regrow slowly;
- the player cuts simple Alder.

Later the player:

- manages mixed Groves;
- grows Specialty Timber;
- chooses maturity strategies;
- harvests Bark and Resin;
- waits for Ancient trees to obtain Heartwood;
- equips advanced Logging Axes;
- supplies Fletching and Estate construction;
- establishes worker woodlots;
- automates resource reserves;
- eventually handles Starwood and Worldroot timber.

Long-term fantasy:

**Woodcutter → Lumberjack → Forester → Master Woodsman → Manager of an Estate Forestry Network**

---

# 3. UNIQUE CORE MECHANIC — GROVE ROTATION

Woodcutting activities are:

**Groves**

Every normal Grove contains several independent:

**Tree Stands**

Tree Stands:

- grow in parallel;
- have Maturity;
- can be harvested at different maturity states;
- reset to 0 Growth after being felled;
- continue regrowing while the player cuts another stand inside the same active Grove.

The player configures:

- which species are enabled;
- minimum Maturity;
- rotation priority.

The game then moves automatically from one eligible stand to another.

---

# 4. IMPORTANT ACTIVITY-SLOT RULE

Woodcutting must respect the game's:

**one Personal Activity Slot**

Therefore:

> **Only the currently active personal Grove progresses its Tree Growth for the player.**

If the player:

- leaves Woodcutting;
- switches to another Grove;
- starts Combat;
- starts Smithing;

the personal Grove's stand state is frozen.

This prevents the player from passively charging ten Groves at once while doing another profession.

Workers have their own assigned managed woodlots and progress independently because workers are a separate parallel progression layer.

---

# 5. NORMAL GROVE STAND STRUCTURE

Every Tier Grove starts with:

**4 Primary Tree Stands**

At the Tier's Specialty Tree unlock:

**+2 Specialty Tree Stands**

Result:

| Progress | Grove Stands | Effect |
|---|---|---|
| Tier start | 4 Primary Stands | Primary Tree only |
| Specialty Tree unlock | +2 Specialty Stands | 6 total stands |

This creates enough parallel regrowth to make rotation meaningful without turning Woodcutting into a forest-management simulator.

---

# 6. COMPLETE GROVE PROGRESSION

| Tier | Grove | Unlock | Primary Tree | Specialty Tree Unlock |
|---|---|---|---|---|
| T1 | Greenbank Copse | 1 | Alder | Birch (Lvl 7) |
| T2 | Oakshade Wood | 11 | Oak | Willow (Lvl 17) |
| T3 | Ironroot Thicket | 21 | Ironwood | Cedar (Lvl 27) |
| T4 | Silverpine Rise | 31 | Silverpine | Moonwood (Lvl 37) |
| T5 | Emberbark Wilds | 41 | Emberwood | Cinderbark (Lvl 47) |
| T6 | Frostgrove | 51 | Frostbark | Icewillow (Lvl 57) |
| T7 | Stormwood Reach | 61 | Stormwillow | Thunder Oak (Lvl 67) |
| T8 | Aetherwood Vale | 71 | Aetherwood | Prismwood (Lvl 77) |
| T9 | Umbral Grove | 81 | Umbralwood | Nightbark (Lvl 87) |
| T10 | Starfall Arboretum | 91 | Starwood | Astral Cedar (Lvl 97) |

Each Grove is a profession activity.

The names can later receive world/lore presentation without changing the mechanical structure.

---

# 7. TREE GROWTH

Every Tree Stand has:

**Growth 0–100%**

After a tree is felled:

**Growth = 0%**

While its Grove is active:

Growth increases continuously.

At specific thresholds the tree becomes:

- Young;
- Mature;
- Ancient.

---

# 8. MATURITY STATES

| State | Growth | Harvestable | Work Mult. | Log Yield Mult. | XP Mult. | By-Product Mult. | Identity |
|---|---|---|---|---|---|---|---|
| Regrowing | 0–39% | No | — | — | — | — | Tree cannot be felled |
| Young | 40–69% | Yes | 0.70x | 0.60x | 0.55x | 0.40x | Fastest availability; low-value cut |
| Mature | 70–94% | Yes | 1.00x | 1.00x | 1.00x | 1.00x | Baseline bulk timber target |
| Ancient | 95–100% | Yes | 1.30x | 1.35x | 1.55x | 2.50x | Heartwood enabled; best rare/Mastery target |

Maturity changes:

- when the tree becomes eligible;
- Work Required;
- Log Yield;
- XP;
- Mastery;
- Bark/Resin chance;
- Heartwood eligibility.

---

# 9. REGROWING

At:

**0–39% Growth**

the Tree Stand is:

**Regrowing**

It cannot be felled.

The rotation system skips it.

If no stand is eligible:

the Woodcutter waits until the next enabled stand reaches its configured Minimum Maturity.

---

# 10. YOUNG TREES

Young begins at:

**40% Growth**

Young trees:

- become available quickly;
- require less Work;
- produce fewer Logs;
- give less XP;
- have poor by-product chances;
- cannot produce Heartwood.

Young cutting is mainly useful for:

- avoiding idle downtime;
- urgent small quantities;
- early rotation strategies;
- future specialized setups.

It should not automatically be the best long-term timber strategy.

---

# 11. MATURE TREES

Mature begins at:

**70% Growth**

Mature is the normal baseline:

- standard Work;
- standard Log Yield;
- standard XP;
- standard by-products.

Balance target:

> **Mature should generally be the best simple bulk-Log strategy before specialized builds.**

This creates a clear default for players who do not want to optimize heavily.

---

# 12. ANCIENT TREES

Ancient begins at:

**95% Growth**

Ancient Trees:

- require more Work;
- yield more Logs per tree;
- give significantly more XP;
- give significantly more Mastery;
- strongly increase Bark / Resin;
- unlock Heartwood drops.

Ancient is intended for:

- rare materials;
- Mastery;
- XP;
- specialty Fletching;
- endgame components.

It should not universally dominate Mature for pure normal Logs/hour.

---

# 13. TREE GROWTH STOPS AT 100%

Once Growth reaches:

**100%**

the tree remains Ancient.

It does not continue stacking:

- extra Logs;
- extra XP;
- hidden rested bonuses.

There is no benefit to leaving a 100% stand untouched indefinitely beyond keeping an Ancient tree ready.

---

# 14. ROTATION SETTINGS

The player configures Woodcutting using:

| Rotation Setting | Options | Purpose |
|---|---|---|
| Minimum Maturity | Young / Mature / Ancient | Determines when a stand becomes eligible |
| Species Enabled | Primary / Specialty / Both | Controls resource mix |
| Priority | Oldest Ready / Primary First / Specialty First / Maintain Ratio | Controls next eligible tree |
| Reserve Target | Bank quantity | Later planner can change priority based on resource reserves |

These settings create Woodcutting's planning layer.

---

# 15. MINIMUM MATURITY

For each enabled species, the player selects:

- Young;
- Mature;
- Ancient.

Example:

**Alder Minimum: Mature**  
**Birch Minimum: Ancient**

The rotation can therefore:

- mass-produce Alder Logs;
- only cut Birch when it has reached Ancient.

This is one of Woodcutting's strongest strategic tools.

---

# 16. ROTATION PRIORITY — OLDEST READY

Default:

**Oldest Ready**

The system chooses:

the eligible Tree Stand with highest Growth %.

This naturally spreads cutting across the Grove and minimizes waste.

Recommended default for new players.

---

# 17. ROTATION PRIORITY — PRIMARY FIRST

The system prefers:

**Primary Timber**

whenever a Primary stand is eligible.

Specialty Timber is cut only when:

- no Primary is ready;
- or planner rule changes.

Best for:

- Fletching bulk;
- Utility Blanks;
- Estate Logs.

---

# 18. ROTATION PRIORITY — SPECIALTY FIRST

The system prioritizes:

**Specialty Timber**

Best for:

- rare bow materials;
- Fishing Rod upgrades;
- Resin;
- high-tier components.

---

# 19. ROTATION PRIORITY — MAINTAIN RATIO

Unlocked through later planning infrastructure.

Example:

> Maintain roughly 3 Alder Logs for every 1 Birch Log.

The system dynamically prefers the species that is furthest below the configured ratio.

This is useful for:

- Fletching recipes;
- trap components;
- worker supply chains.

---

# 20. COMPLETE TREE ROSTER

Woodcutting v1.0 contains:

- 10 Primary Timber species;
- 10 Specialty Timber species;
- 1 Level-100+ Worldroot species.

Normal Tier Trees:

| Tier | Grove | Lvl | Tree | Class | Base Logs | 0→100 Growth | Mature Work | Base XP | Common By-Product | Ancient Heartwood |
|---|---|---|---|---|---|---|---|---|---|---|
| T1 | Greenbank Copse | 1 | Alder | Primary Timber | 4 | 50s | 35 | 7 | Bark | Seasoned Heartwood |
| T1 | Greenbank Copse | 7 | Birch | Specialty Timber | 3 | 65s | 42 | 9 | Bark + Resin | Seasoned Heartwood |
| T2 | Oakshade Wood | 11 | Oak | Primary Timber | 4 | 60s | 55 | 11 | Bark | Seasoned Heartwood |
| T2 | Oakshade Wood | 17 | Willow | Specialty Timber | 3 | 78s | 66 | 15 | Bark + Resin | Seasoned Heartwood |
| T3 | Ironroot Thicket | 21 | Ironwood | Primary Timber | 5 | 70s | 80 | 17 | Bark | Seasoned Heartwood |
| T3 | Ironroot Thicket | 27 | Cedar | Specialty Timber | 4 | 91s | 96 | 23 | Bark + Resin | Seasoned Heartwood |
| T4 | Silverpine Rise | 31 | Silverpine | Primary Timber | 5 | 80s | 110 | 25 | Bark | Refined Heartwood |
| T4 | Silverpine Rise | 37 | Moonwood | Specialty Timber | 4 | 104s | 132 | 34 | Bark + Resin | Refined Heartwood |
| T5 | Emberbark Wilds | 41 | Emberwood | Primary Timber | 6 | 90s | 145 | 36 | Bark | Refined Heartwood |
| T5 | Emberbark Wilds | 47 | Cinderbark | Specialty Timber | 4 | 117s | 174 | 49 | Bark + Resin | Refined Heartwood |
| T6 | Frostgrove | 51 | Frostbark | Primary Timber | 6 | 100s | 185 | 50 | Bark | Refined Heartwood |
| T6 | Frostgrove | 57 | Icewillow | Specialty Timber | 5 | 130s | 222 | 68 | Bark + Resin | Refined Heartwood |
| T7 | Stormwood Reach | 61 | Stormwillow | Primary Timber | 7 | 110s | 230 | 68 | Bark | Primal Heartwood |
| T7 | Stormwood Reach | 67 | Thunder Oak | Specialty Timber | 5 | 143s | 276 | 92 | Bark + Resin | Primal Heartwood |
| T8 | Aetherwood Vale | 71 | Aetherwood | Primary Timber | 7 | 120s | 280 | 90 | Bark | Primal Heartwood |
| T8 | Aetherwood Vale | 77 | Prismwood | Specialty Timber | 5 | 156s | 336 | 122 | Bark + Resin | Primal Heartwood |
| T9 | Umbral Grove | 81 | Umbralwood | Primary Timber | 8 | 132s | 335 | 118 | Bark | Primal Heartwood |
| T9 | Umbral Grove | 87 | Nightbark | Specialty Timber | 6 | 172s | 402 | 159 | Bark + Resin | Primal Heartwood |
| T10 | Starfall Arboretum | 91 | Starwood | Primary Timber | 8 | 145s | 395 | 152 | Bark | Astral Heartwood |
| T10 | Starfall Arboretum | 97 | Astral Cedar | Specialty Timber | 6 | 188s | 474 | 205 | Bark + Resin | Astral Heartwood |

---

# 21. PRIMARY TIMBER LADDER

Primary Woodcutting progression:

**Alder**

↓

**Oak**

↓

**Ironwood**

↓

**Silverpine**

↓

**Emberwood**

↓

**Frostbark**

↓

**Stormwillow**

↓

**Aetherwood**

↓

**Umbralwood**

↓

**Starwood**

This line intentionally matches the core wood needs already implied by Fishing Rod progression and the Fletching profession.

---

# 22. SPECIALTY TIMBER LADDER

Specialty line:

**Birch**

↓

**Willow**

↓

**Cedar**

↓

**Moonwood**

↓

**Cinderbark**

↓

**Icewillow**

↓

**Thunder Oak**

↓

**Prismwood**

↓

**Nightbark**

↓

**Astral Cedar**

Specialty Timber is used more heavily for:

- advanced bows;
- crossbows;
- specialty Rods;
- traps;
- Estate decoration / components;
- Resin-heavy recipes;
- rare Fletching.

---

# 23. WHY TWO WOODS PER TIER

One wood per Tier would make Woodcutting too linear.

Three or four unique woods per Tier would create too much content.

Two gives:

- clear main resource;
- optional specialty target;
- meaningful rotation;
- manageable Bank item count.

---

# 24. BASE GROWTH TIMES

The Tree table defines:

**0 → 100% Growth Time**

Primary Trees grow faster.

Specialty Trees take:

approximately **30% longer**

because they produce more specialized resources.

Threshold time:

**Young = 40% of full Growth Time**  
**Mature = 70%**  
**Ancient = 95%**

Example:

Alder full Growth:

**50s**

Therefore approximately:

- Young: 20s;
- Mature: 35s;
- Ancient: 47.5s.

---

# 25. GROWTH SPEED

Woodcutting uses:

**Active Grove Growth Speed**

It increases Growth rate only while:

- the player is actively Woodcutting;
- in that Grove.

Formula:

**Effective Full Growth Time = Base Growth Time / (1 + Growth Speed)**

Example:

20% Growth Speed:

**100s / 1.20 = 83.33s**

---

# 26. GROWTH SPEED CAP

Recommended hard cap:

**+100% Active Grove Growth Speed**

At cap:

trees grow twice as fast as baseline.

This prevents infinite regrowth scaling.

---

# 27. CHOP WORK

Every Tree has:

**Mature Work**

Maturity changes final Work:

- Young ×0.70;
- Mature ×1.00;
- Ancient ×1.30.

The Logging Axe provides:

**Axe Power**

Every swing reduces Work.

---

# 28. CHOP LOOP

When a Tree Stand is selected:

1. read final Work;
2. begin automatic Axe swings;
3. every Swing:
   - wait Final Swing Time;
   - subtract Final Axe Power;
4. when Work ≤0:
   - fell tree;
   - award Logs;
   - roll by-products;
   - award XP;
   - award Mastery;
   - reset stand Growth to 0;
5. select next eligible Tree Stand.

No active clicking.

---

# 29. AXE POWER

Formula:

**Remaining Work = Remaining Work - Final Axe Power**

Final Axe Power can be modified by:

- Axe;
- clothing;
- jewelry;
- Specialization;
- Mastery;
- Skill-Wide bonuses.

UI must display:

- Work remaining;
- Axe Power;
- Swings remaining.

---

# 30. SWING TIME

Logging Axe has:

**Swing Time**

Affected by:

- Axe;
- gear;
- Mastery;
- Specialization;
- global Woodcutting modifiers.

Recommended minimum:

**45% of base Swing Time**

This prevents extreme action-speed stacking.

---

# 31. LOG YIELD

Every Tree has:

**Base Logs**

Maturity applies:

- Young ×0.60;
- Mature ×1.00;
- Ancient ×1.35.

Final expected yield uses fractional quantity.

Example:

Alder Base Logs 4.

Ancient:

**4 ×1.35 = 5.40**

Result:

- 5 guaranteed Logs;
- 40% chance for +1.

---

# 32. EXTRA LOG CHANCE

Woodcutting uses:

**Extra Log Chance**

Each full +100 percentage points gives:

**+1 guaranteed Log**

remaining chance can give:

**+1 additional Log**

Recommended normal baseline cap target:

no hard cap required mathematically,

but balance should usually keep normal builds below:

**100% extra chance**

before endgame.

---

# 33. XP BY MATURITY

Every Tree has Base XP.

Maturity:

- Young ×0.55;
- Mature ×1.00;
- Ancient ×1.55.

Ancient is intentionally strong for XP.

Mature remains more reliable for bulk timber.

---

# 34. MASTERY BY MATURITY

Base Mastery XP:

**Woodcutting XP ×0.40**

then Maturity Mastery multiplier:

- Young ×0.65;
- Mature ×1.00;
- Ancient ×1.75.

Ancient cutting is the intended high-Mastery strategy.

---

# 35. BARK

All normal Trees can produce:

**Bark**

Bark is one universal stackable material.

Uses:

- Leatherworking tanning / treatments;
- Alchemy;
- Hunting;
- Estate;
- future recipes.

Using one Bark item avoids:

- Alder Bark;
- Oak Bark;
- Ironwood Bark;
- 20 redundant bark stacks.

---

# 36. RESIN

Specialty Trees can additionally produce:

**Resin**

Resin is universal.

Uses:

- Fletching adhesives;
- Bow construction;
- Fishing Rods;
- Alchemy;
- traps;
- Estate treatments.

Specialty Trees are the primary Resin source.

---

# 37. HEARTWOOD

Heartwood is:

**Ancient-only**

It represents rare dense internal timber.

Heartwood families:

| Tier Range | Heartwood | Source | Main Uses |
|---|---|---|---|
| T1–T3 | Seasoned Heartwood | Ancient Alder/Birch/Oak/Willow/Ironwood/Cedar | Early specialist tools, bows, facilities |
| T4–T6 | Refined Heartwood | Ancient Silverpine→Icewillow | Midgame bows, rods, traps, profession gear |
| T7–T9 | Primal Heartwood | Ancient Stormwillow→Nightbark | Late bows, worker gear, Estate, advanced tools |
| T10 | Astral Heartwood | Ancient Starwood/Astral Cedar | T10 Fletching, Estate / Holdings |
| T10+ | Worldroot Heartwood | Ancient Worldroot Tree | Endgame Fletching / permanent projects |

Using only four normal Heartwood grades avoids creating one rare item per Tree species.

---

# 38. BY-PRODUCT CHANCES

Baseline:

| Tree Type / Maturity | Bark Base Chance | Resin Base Chance | Heartwood Base Chance |
|---|---|---|---|
| Primary Young | 5% | — | — |
| Primary Mature | 12% | — | — |
| Primary Ancient | 30% | — | 1.50% |
| Specialty Young | 5% | 3% | — |
| Specialty Mature | 12% | 8% | — |
| Specialty Ancient | 30% | 22% | 3.00% |

Bark/Resin/Heartwood bonuses apply after these chances.

---

# 39. BY-PRODUCT QUANTITY

Baseline success gives:

**1 item**

No general by-product quantity multiplier in v1.0.

Progression focuses on:

- chance;
- tree maturity;
- specialty targeting.

This keeps the secondary-resource economy easier to balance.

---

# 40. LOGGING AXE — PRIMARY TOOL

Woodcutting's primary Tool:

**Logging Axe**

| Tier | Logging Axe | Equip Lvl | Axe Power | Swing Time | Source | Mechanical Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Hatchet | 1 | 5 | 2.20s | Starter | None |
| T1 | Copper Logging Axe | 5 | 7 | 2.14s | Smithing | Extra Log Chance +2 pp |
| T2 | Iron Logging Axe | 15 | 10 | 2.08s | Smithing | Active Grove Growth Speed +3% |
| T3 | Cobalt Logging Axe | 25 | 14 | 2.02s | Smithing | Bark / Resin chance +5% |
| T4 | Argent Logging Axe | 35 | 19 | 1.96s | Smithing | Mature Tree Work -5% |
| T5 | Emberite Logging Axe | 45 | 25 | 1.90s | Smithing | Extra Log Chance +4 pp |
| T6 | Frostsilver Logging Axe | 55 | 32 | 1.84s | Smithing | Ancient Tree Work -6% |
| T7 | Stormiron Logging Axe | 65 | 40 | 1.78s | Smithing | Active Grove Growth Speed +8% |
| T8 | Aetherite Logging Axe | 75 | 49 | 1.72s | Smithing | Bark / Resin chance +10% |
| T9 | Umbral Logging Axe | 85 | 59 | 1.66s | Smithing | Heartwood chance +15% |
| T10 | Astralite Logging Axe | 95 | 70 | 1.60s | Smithing | Axe Power +8%; Heartwood chance +20% |

Axes are permanent.

No durability.

---

# 41. AXE SOURCE

Normal Logging Axes are primarily crafted through:

**Smithing**

with:

- current metal;
- tier-matched Utility Blank from Fletching;
- previous Axe.

Fletching turns Woodcutting Logs into tier-matched Utility Blanks for Tool structures.

Smithing owns final Axe crafting recipes.

---

# 42. AXE UPGRADE CHAIN

Recommended:

**Previous Logging Axe + current-tier metal + matching-tier Utility Blank → next Logging Axe**

Higher tiers can additionally use:

- Heartwood;
- Resin;
- Core Fragments.

Old Axes move naturally to workers.

---

# 43. AXE DOES NOT GATE TREE EXISTENCE TOO HARD

New Tier Trees should normally be cuttable using:

the previous major Axe.

Example:

Starwood can be accessed with:

**Umbral Logging Axe**

Starwood progression then helps create:

**Astralite Logging Axe**

This avoids circular progression locks.

---

# 44. PROFESSION CLOTHING

Woodcutting-specific clothing begins around T3.

| Unlock | Item | Woodcutting Effect |
|---|---|---|
| T3 / L25 | Woodhand Cap | Active Grove Growth Speed +4% |
| T3 / L25 | Woodhand Coat | Extra Log Chance +3 pp |
| T3 / L25 | Woodhand Trousers | Woodcutting Mastery XP +4% |
| T3 / L25 | Woodhand Gloves | Bark / Resin chance +8% |
| T3 / L25 | Woodhand Boots | Swing Time -3% |
| Set | Woodhand 5/5 | Mature Tree Work -5% |
| T5 / L45 | Lumberjack Helm | Axe Power +5% |
| T5 / L45 | Lumberjack Jacket | Extra Log Chance +5 pp |
| T5 / L45 | Lumberjack Legguards | Mature Tree XP +5% |
| T5 / L45 | Lumberjack Gloves | Mature Tree Work -6% |
| T5 / L45 | Lumberjack Boots | Swing Time -5% |
| Set | Lumberjack 5/5 | Mature Log Yield +8% |
| T7 / L65 | Forester Hood | Active Grove Growth Speed +8% |
| T7 / L65 | Forester Coat | Ancient by-product chance +12% |
| T7 / L65 | Forester Leggings | Ancient Mastery XP +8% |
| T7 / L65 | Forester Gloves | Heartwood chance +12% |
| T7 / L65 | Forester Boots | Ancient Tree Work -6% |
| Set | Forester 5/5 | Ancient Log Yield +8%; Grove Growth +5% |
| T9 / L85 | Master Woodsman Hood | Axe Power +8% |
| T9 / L85 | Master Woodsman Coat | Extra Log Chance +5 pp |
| T9 / L85 | Master Woodsman Trousers | Woodcutting Mastery XP +8% |
| T9 / L85 | Master Woodsman Gloves | Heartwood chance +18% |
| T9 / L85 | Master Woodsman Boots | Swing Time -7% |
| Set | Master Woodsman 5/5 | Growth Speed +6%; all By-Products +10% |

Players can mix pieces.

---

# 45. CLOTHING IDENTITIES

## Woodhand

General early Woodcutting.

## Lumberjack

Bulk Mature timber.

## Forester

Growth / Ancient / rare forestry.

## Master Woodsman

Endgame hybrid.

No set should be universally best.

---

# 46. PROFESSION JEWELRY

| Woodcutting Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Growth Ring | Active Grove Growth Speed +6% | Reduce stand downtime |
| 25 | Barkkeeper Pendant | Bark / Resin chance +12% | Secondary resources |
| 35 | Timberman's Band | Extra Log Chance +5 pp | Bulk logs |
| 45 | Maturewood Charm | Mature Tree Work -7% | Bulk timber |
| 55 | Ancient Knot Ring | Ancient Mastery XP +10% | Mastery |
| 65 | Resinseeker Chain | Resin chance +25% | Fletching / Alchemy supply |
| 75 | Heartwood Signet | Heartwood chance +20% | Rare wood |
| 85 | Umbral Forester Charm | Ancient Work -8%; By-Products +10% | Late Ancient cutting |
| 95 | Astral Woodsman's Emblem | Axe Power +8%; Growth Speed +5% | Endgame general |

Jewelry creates situational builds:

- Growth;
- Bark / Resin;
- bulk Logs;
- Ancient Mastery;
- Heartwood.

A Level-100 player can still use:

**Growth Ring**

if regrowth is the current bottleneck.

---

# 47. WOODCUTTING LOADOUTS

Recommended presets:

## Bulk Timber

- Mature threshold;
- Lumberjack gear;
- Timberman's Band;
- Lumberjack Specialization.

## Specialty Timber

- Specialty First;
- Mature threshold;
- Resin-focused equipment.

## Ancient Harvest

- Ancient threshold;
- Forester gear;
- Heartwood jewelry.

## Mastery

- Ancient;
- Mastery gear;
- selected Tree species.

## Estate Supply

- Maintain Ratio;
- reserve-driven planner.

---

# 48. TREE MASTERY

Every Tree species has:

**Mastery 1–100**

Examples:

- Alder Mastery;
- Silverpine Mastery;
- Prismwood Mastery;
- Starwood Mastery.

Mastery belongs to species.

---

# 49. TREE MASTERY MILESTONES

| Tree Mastery | Permanent Species Effect |
|---|---|
| 10 | Tree Work -2% |
| 25 | Extra Log Chance +5 percentage points |
| 50 | This species Growth Speed +5% while its Grove is active |
| 75 | Bark / Resin chance +15% multiplicative |
| 100 | Ancient Heartwood chance +20% multiplicative; Extra Log Chance +5 pp additional |

Mastery improves:

- cutting;
- yield;
- growth;
- by-products;
- Heartwood.

---

# 50. SKILL-WIDE WOODCUTTING MASTERY

Recommended:

| Completion | Reward |
|---:|---|
| 10% | Swing Time -2% |
| 25% | Extra Log Chance +3 pp; second Woodcutting preset |
| 50% | Worker Woodcutting efficiency +5%; Growth Speed +5% |
| 75% | Bark / Resin chance +10%; third preset |
| 100% | Axe Power +5%; Ancient Heartwood chance +10%; Master Woodsman marker |

100% is completion content.

Not required for normal progression.

---

# 51. WOODCUTTING SPECIALIZATIONS

Unlock:

**Woodcutting Level 35**

Three baseline Specializations:

1. Lumberjack;
2. Forester;
3. Heartwood Seeker.

All are reversible.

---

# 52. LUMBERJACK

Focus:

**bulk normal Logs**

Effects:

- Axe Power +10%;
- Extra Log Chance +12 pp;
- Mature Tree Work -10%;
- Young Tree Work -5%;
- Ancient By-Product chance -10% multiplicative.

Best for:

- Fletching bulk;
- Utility Blanks;
- Estate;
- worker supply.

---

# 53. FORESTER

Focus:

**sustainable Grove rotation / Growth**

Effects:

- Active Grove Growth Speed +20%;
- Ancient Mastery XP +10%;
- Ancient Log Yield +5%;
- Young Log Yield -5%.

Best for:

- minimizing wait;
- mixed Grove rotation;
- long unattended Woodcutting;
- Ancient cycles.

---

# 54. HEARTWOOD SEEKER

Focus:

**rare secondary materials**

Effects:

- Bark Chance +25% multiplicative;
- Resin Chance +35% multiplicative;
- Heartwood Chance +35% multiplicative;
- Ancient XP +10%;
- Extra Log Chance -5 pp.

Best for:

- specialty Fletching;
- Alchemy;
- rare Estate recipes;
- Heartwood farming.

---

# 55. SPECIALIZATION SWITCHING

Rules:

- free;
- only outside an active chop;
- changing Specialization cancels current chop progress;
- Tree Growth states remain unchanged;
- presets remember Specialization.

No respec currency.

---

# 56. FORESTRY YARD — ESTATE SUPPORT

Woodcutting does not require Estate infrastructure to function.

Estate adds:

**Forestry Yard**

| Facility | Estate Stage | Woodcutting Req. | Main Unlocks |
|---|---|---|---|
| Forestry Yard I | House | 20 | 2 Woodcutting presets; exact stand/regrowth analytics; Axe storage |
| Forestry Yard II | Lodge | 40 | Advanced rotation rules; maturity presets; +5% active Grove Growth Speed |
| Forestry Yard III | Manor | 60 | Worker woodlot assignments; 2 worker templates; +3% worker efficiency |
| Forestry Yard IV | Estate | 80 | Worker teams; reserve-driven rotations; +10% active Grove Growth Speed; +6% worker efficiency |
| Forestry Yard V | Holdings / late Estate | 100 | Worldroot worker support after player mastery; advanced schedules; +10% worker efficiency |

It improves:

- analytics;
- rotation;
- Growth management;
- workers;
- resource-reserve scheduling.

---

# 57. FORESTRY YARD GROWTH BONUS

Forestry Yard Growth Speed affects:

**only the player's active Grove**

and worker-assigned woodlots separately through worker modifiers.

It does not passively grow every Grove in the account.

This protects the Personal Activity Slot.

---

# 58. WORKER WOODCUTTING

Workers can perform Woodcutting.

Worker data:

- Woodcutting Proficiency;
- Logging Axe;
- clothing;
- jewelry;
- assigned Grove / managed woodlot;
- enabled species;
- Minimum Maturity;
- rotation priority;
- reserve policy.

Workers use real:

- Growth;
- Work;
- maturity;
- by-product rules.

---

# 59. MANAGED WORKER WOODLOTS

Workers do not steal the player's exact six personal Tree Stands.

An assignment represents:

**an Estate-managed woodlot inside an Established Grove**

It uses the same:

- species;
- growth times;
- maturity;
- yields;
- by-product rules.

Each assigned worker/team has its own woodlot state.

This prevents player/worker stand conflicts.

---

# 60. ESTABLISHING A GROVE

A Grove becomes:

**Established**

after the player personally fells:

**20 Trees in that Grove**

and has felled:

**at least one Mature tree**

from its Primary species.

Established Groves can support worker woodlots.

---

# 61. PROVEN TREE SPECIES

A Tree species becomes:

**Proven**

for workers at:

**Tree Mastery 10**

Workers cannot harvest a species below Mastery 10.

This preserves:

**player learns / workers maintain**

---

# 62. WORKER PROFICIENCY

Base Worker Woodcutting Efficiency:

**50% + (Proficiency ×0.50%)**

Examples:

- 1 → 50.5%;
- 50 → 75%;
- 100 → 100%.

Worker efficiency affects:

- Axe action speed / effective production;
- not Tree species unlocks.

Workers gain Proficiency by Woodcutting.

They do not gain player Mastery.

---

# 63. FRONTIER TREE PENALTY

For Trees in the player's highest unlocked Tier:

| Player Tree Mastery | Worker Frontier Multiplier |
|---:|---:|
| 10–24 | 75% |
| 25–49 | 85% |
| 50–74 | 92.5% |
| 75–99 | 97.5% |
| 100 | 100% |

Older Tiers:

no Frontier penalty.

---

# 64. WORKER MATURITY STRATEGIES

Workers can use the same:

- Young;
- Mature;
- Ancient

Minimum Maturity.

Examples:

**Timber Worker**

Mature.

**Heartwood Worker**

Ancient.

**Emergency Supply Worker**

Young.

This makes worker setup meaningful.

---

# 65. WORKER EQUIPMENT HAND-ME-DOWNS

Old Axes naturally transfer to workers.

Player:

**Astralite Logging Axe**

Workers:

- Stormiron;
- Aetherite;
- Umbral.

Same applies to:

- clothing;
- jewelry.

Use templates and bulk assignment.

---

# 66. WORKER OUTPUT DOES NOT GIVE PLAYER XP

Workers produce:

- Logs;
- Bark;
- Resin;
- Heartwood.

Workers gain:

**Woodcutting Proficiency**

Player gains:

- no Woodcutting XP;
- no Tree Mastery XP

from worker activity.

---

# 67. ACTIVITY PLANNER — WOODCUTTING

Starter rules:

- Woodcut indefinitely;
- stop at Log quantity;
- stop at Woodcutting Level;
- select Minimum Maturity.

House:

- stop at Tree Mastery;
- 2-step queue.

Lodge:

- reserve targets;
- 4-step queue;
- rotation priority presets.

Manor:

- 6-step queue;
- Maintain Ratio;
- change Woodcutting preset;
- cross-profession transition.

Estate:

- 10-step queue;
- worker woodlot schedules;
- resource-maintenance policies.

Holdings:

- forestry team policies;
- multi-resource reserve maintenance.

---

# 68. EXAMPLE PLAYER ROTATION

Goal:

**bulk Silverpine + occasional Moonwood Heartwood**

Configuration:

Silverpine:

- Enabled;
- Minimum Mature.

Moonwood:

- Enabled;
- Minimum Ancient.

Priority:

**Oldest Ready**

Result:

- Silverpine is harvested frequently;
- Moonwood stays untouched until Ancient;
- player gains steady main timber and periodic rare specialty rewards.

This is the intended Woodcutting planning experience.

---

# 69. EXAMPLE RESERVE ROTATION

Goal:

- keep Alder Logs ≥5,000;
- keep Birch Logs ≥1,000.

Planner:

> If Alder <5,000 → Primary First  
> Else if Birch <1,000 → Specialty First  
> Else → Oldest Ready.

This becomes available through later Estate planning.

---

# 70. GROVE WAITING

Sometimes every enabled Tree Stand is below Minimum Maturity.

Then:

**Woodcutter waits**

UI shows:

- next Tree ready;
- time remaining;
- current Growth;
- estimated idle percentage/hour.

Waiting is an intentional result of aggressive maturity settings.

---

# 71. NO RANDOM TREE SPAWNS

Normal Woodcutting has no:

- random tree rotation;
- random Grove depletion;
- weather locks;
- hourly species changes.

Rates should be predictable.

The player's setup creates variation.

---

# 72. NO GLOBAL PASSIVE FOREST BANKING

Inactive personal Groves do not keep growing.

Reason:

If ten Groves all regrew while the player did another skill, the player could repeatedly harvest fully Ancient forests without spending personal activity time.

That would undermine the core economy.

Workers remain the proper parallel Woodcutting layer.

---

# 73. COMPLETE LOG USE MAP

| Resource | Main Consumers |
|---|---|
| Alder / Oak | early Utility Blanks, Shafts, Fletching, Estate |
| Ironwood / Silverpine | mid bows, Rods, traps, facilities |
| Emberwood / Frostbark | advanced bows / Rods / tools |
| Stormwillow / Aetherwood | late Fletching, worker gear, Estate |
| Umbralwood / Starwood | endgame bows / Rods / facilities |
| Specialty Timber | specialized bows, traps, rare handles, Estate |
| Bark | Leatherworking, Alchemy, Hunting |
| Resin | Fletching, Alchemy, traps |
| Seasoned Heartwood | early specialist recipes |
| Refined Heartwood | midgame specialist recipes |
| Primal Heartwood | late specialist recipes |
| Astral Heartwood | T10 Fletching / Estate |
| Worldroot Timber / Heartwood | endgame Fletching / Holdings |

---

# 74. WOODCUTTING ↔ FLETCHING

This is Woodcutting's strongest production link.

Woodcutting supplies:

- Logs;
- Specialty Logs;
- Resin;
- Heartwood.

Fletching converts them into:

- bows;
- crossbows;
- arrows / shafts;
- Utility Blanks;
- Fishing Rods;
- Hunting trap components.

Future `06_FLETCHING.md` should use this Woodcutting material ladder directly.

---

# 75. WOODCUTTING ↔ FISHING

Fishing Rod progression already expects:

- Alder;
- Ironwood;
- Silverpine;
- Emberwood;
- Frostbark;
- Stormwillow;
- Aetherwood;
- Umbralwood;
- Starwood.

Fletching will bridge:

**Woodcutting → Rod crafting → Fishing**

Woodcutting therefore contributes to food progression indirectly.

---

# 76. WOODCUTTING ↔ SMITHING

Smithing provides:

- Logging Axe heads;
- trap metal components;
- tool fittings.

Woodcutting provides:

- Logging Axe Utility Blank components;
- tool handles;
- Estate timber.

This creates a strong two-way dependency.

---

# 77. WOODCUTTING ↔ HUNTING

Woodcutting supports Hunting through:

- trap frames;
- stakes;
- shafts;
- bait structures;
- specialty timber;
- Bark;
- Resin.

Advanced Hunting traps can combine:

**Woodcutting frame + Smithing mechanism + Fletching assembly**

---

# 78. WOODCUTTING ↔ ESTATE

Estate is one of the largest timber sinks.

Possible uses:

- House;
- Lodge;
- Manor;
- Estate;
- Worker Quarters;
- Storehouse;
- Kitchen;
- Forge support structures;
- Forestry Yard;
- Long-Term Projects.

Old Logs remain useful because infrastructure keeps consuming broad material tiers.

---

# 79. OLD-TIER RELEVANCE

T1–T5 woods remain useful through:

- Utility Blanks;
- Shafts;
- traps;
- worker tools;
- Estate;
- Fletching components;
- Fishing Rods;
- cross-tier recipes.

Workers eventually maintain old supply.

Do not force:

**T10 Bow = 20,000 Alder Logs**

only to create a sink.

---

# 80. COMPLETE LEVEL ROADMAP

| Woodcutting Lvl | Major Unlock |
|---|---|
| 1 | Greenbank Copse; Alder; Worn Hatchet; Young/Mature/Ancient maturity rules available |
| 5 | Copper Logging Axe |
| 6 | Birch |
| 11 | Oakshade Wood; Oak |
| 15 | Iron Logging Axe; Growth Ring |
| 16 | Willow |
| 21 | Ironroot Thicket; Ironwood |
| 25 | Cobalt Logging Axe; Woodhand set; Barkkeeper Pendant |
| 26 | Cedar |
| 31 | Silverpine Rise; Silverpine |
| 35 | Argent Logging Axe; Woodcutting Specializations; Timberman's Band |
| 36 | Moonwood |
| 41 | Emberbark Wilds; Emberwood |
| 45 | Emberite Logging Axe; Lumberjack set; Maturewood Charm |
| 46 | Cinderbark |
| 51 | Frostgrove; Frostbark |
| 55 | Frostsilver Logging Axe; Ancient Knot Ring |
| 56 | Icewillow |
| 61 | Stormwood Reach; Stormwillow |
| 65 | Stormiron Logging Axe; Forester set; Resinseeker Chain |
| 66 | Thunder Oak |
| 71 | Aetherwood Vale; Aetherwood |
| 75 | Aetherite Logging Axe; Heartwood Signet |
| 76 | Prismwood |
| 81 | Umbral Grove; Umbralwood |
| 85 | Umbral Logging Axe; Master Woodsman set; Umbral Forester Charm |
| 86 | Nightbark |
| 91 | Starfall Arboretum; Starwood |
| 95 | Astralite Logging Axe; Astral Woodsman's Emblem |
| 96 | Astral Cedar |
| 100 | Woodcutting cap; unlock Master of the Canopy Chronicle path / Worldroot content |

Woodcutting receives:

- Grove;
- Specialty Tree;
- Axe;
- gear;
- jewelry;
- specialization

throughout 1–100.

---

# 81. WORLDROOT GROVE — LEVEL 100+

Endgame Woodcutting receives:

**Worldroot Grove**

It is not part of the normal T1–T10 leveling path.

Unlock requirements:

- Woodcutting 100;
- Astralite Logging Axe;
- Forestry Yard V;
- Starwood Mastery 50;
- Astral Cedar Mastery 25;
- complete Chronicle milestone **Master of the Canopy**.

---

# 82. WORLDROOT TREE

Worldroot Grove contains:

**4 Worldroot Tree Stands**

No secondary species.

Base:

- Growth 0→100: 210s;
- Mature Work: 520;
- Base Logs: 5 Worldroot Timber;
- Base XP: 220.

Maturity rules remain normal.

Ancient Worldroot can produce:

**Worldroot Heartwood**

---

# 83. WORLDROOT BY-PRODUCTS

Worldroot:

Young:

- Bark 5%.

Mature:

- Bark 12%;
- Resin 5%.

Ancient:

- Bark 30%;
- Resin 18%;
- Worldroot Heartwood 4%.

Worldroot Heartwood is protected endgame material.

It is expected to feed:

- highest Fletching;
- Holdings;
- endgame profession tools.

---

# 84. WORLDROOT WORKER RULE

Workers cannot access Worldroot immediately.

Recommended:

- Worldroot Mastery 25;
- personally fell 10 Worldroot Trees;
- personally fell at least 1 Ancient Worldroot.

Then it becomes:

**Established Endgame Grove**

Workers still suffer frontier penalty until Worldroot Mastery rises.

---

# 85. WOODCUTTING XP

XP is granted:

**when a Tree is felled**

No XP for passive Growth.

Formula:

**Base Tree XP × Maturity XP Multiplier × Woodcutting XP modifiers**

This ensures the player cannot gain Woodcutting levels merely by leaving trees growing.

---

# 86. TREE MASTERY XP

Recommended:

**Base Tree XP ×0.40 × Maturity Mastery Multiplier**

then apply:

- gear;
- jewelry;
- Specialization;
- global Mastery bonuses.

Ancient strongly favors Mastery.

---

# 87. LOG YIELD FORMULA

Recommended:

**Expected Logs = Base Logs × Maturity Yield Multiplier**

Resolve fractional part as extra-log chance.

Then add explicit:

**Extra Log Chance**

from:

- Axe;
- clothing;
- jewelry;
- Mastery;
- Specialization.

---

# 88. BY-PRODUCT FORMULA

For each eligible by-product:

**Final Chance = Base Maturity Chance × all multiplicative bonuses**

Normal chance cap:

**100%**

Overflow:

- one guaranteed item;
- remaining % chance for a second item.

Heartwood bonuses use this same system.

---

# 89. TREE WORK FORMULA

**Final Work = Base Mature Work × Maturity Work Multiplier × Work modifiers**

Each Axe swing:

**Remaining Work -= Final Axe Power**

When ≤0:

tree falls.

---

# 90. FINAL AXE POWER

Recommended:

**Final Axe Power = Base Axe Power × Axe / gear / specialization / mastery modifiers**

Round display:

to 1 decimal.

Simulation can retain precision.

---

# 91. GROWTH FORMULA

While Grove active:

**Growth per second = 100 / Effective Full Growth Time**

Effective:

**Base Growth Time / (1 + Growth Speed)**

Growth is continuous.

No integer-tick growth requirement.

---

# 92. OFFLINE WOODCUTTING

If the player was actively Woodcutting when going offline:

the active Grove continues simulation.

Simulation includes:

- stand Growth;
- maturity thresholds;
- rotation;
- chopping;
- yields;
- by-products;
- XP;
- Mastery;
- planner transitions.

Other personal Groves remain frozen.

Workers continue separately.

---

# 93. SAVE STATE

Store:

- active Grove;
- each stand Growth;
- stand species;
- current target stand;
- current Work remaining;
- Minimum Maturity settings;
- enabled species;
- rotation priority;
- loadout;
- Specialization;
- planner;
- Tree Mastery;
- Established Groves;
- worker woodlots.

---

# 94. OFFLINE RESULTS

Show:

- elapsed time;
- Logs by species;
- Bark;
- Resin;
- Heartwood;
- Trees felled;
- Young / Mature / Ancient counts;
- Woodcutting XP;
- levels;
- Mastery gained;
- worker output separately;
- planner transitions.

---

# 95. WOODCUTTING SCREEN — HIGH-LEVEL UI

Recommended layout:

## Grove Browser

Each card shows:

- Tier;
- Grove;
- Primary Tree;
- Specialty Tree;
- Level requirements;
- current Masteries;
- worker assignments.

## Active Grove

Shows six Tree Stand cards.

Each Stand shows:

- species;
- Growth %;
- state;
- time to configured Minimum Maturity;
- ready / chopping / regrowing.

## Active Chop

Shows:

- Tree;
- Maturity;
- Work;
- Axe Power;
- Swings remaining;
- Swing timer;
- expected Logs;
- by-products.

## Rotation Panel

Shows:

- Minimum Maturity per species;
- enabled species;
- priority;
- ratio/reserve rules.

## Analytics

Shows:

- Logs/hour by species;
- XP/hour;
- Mastery/hour;
- Bark/hour;
- Resin/hour;
- Heartwood/hour;
- waiting %;
- average harvest Maturity.

---

# 96. STAND VISUALIZATION

The active Grove should make rotation immediately understandable.

Example:

**Alder 1 — 100% Ancient — READY**  
**Alder 2 — 82% Mature — READY**  
**Alder 3 — 34% Regrowing — 18s to Mature**  
**Alder 4 — 71% Mature — READY**  
**Birch 1 — 62% Young — 31s to Ancient**  
**Birch 2 — 97% Ancient — READY**

The player sees the Grove behaving, not just one generic progress bar.

---

# 97. ANALYTICS REQUIREMENTS

Woodcutting analytics must show:

- each Log/hour;
- total Logs/hour;
- Bark/hour;
- Resin/hour;
- Heartwood/hour;
- XP/hour;
- Mastery/hour;
- Trees/hour;
- average maturity;
- Grove idle/waiting %;
- average Work/tree;
- average swings/tree;
- next Tree ready;
- ETA to Level;
- ETA to Mastery.

Changing:

- Axe;
- gear;
- jewelry;
- Specialization;
- Minimum Maturity;
- rotation priority;

updates estimates immediately.

---

# 98. CHRONICLES — EARLY WOODCUTTING

Suggested goals:

1. Equip Worn Hatchet.
2. Enter Greenbank Copse.
3. Fell first Alder.
4. Explain Growth.
5. Change Minimum Maturity.
6. Fell first Ancient Tree.
7. Find Bark.
8. Unlock Birch.
9. craft/equip Copper Logging Axe.
10. use Alder in first Fletching recipe later.

---

# 99. CHRONICLES — MIDGAME WOODCUTTING

Suggested:

- unlock Specialty Tree;
- create first mixed rotation;
- unlock Woodcutting Specialization;
- obtain first Refined Heartwood;
- use Maintain Ratio;
- build Forestry Yard II;
- establish first Grove;
- reach Tree Mastery 10;
- assign worker woodlot;
- supply Hunting trap components.

---

# 100. CHRONICLES — LATE WOODCUTTING

Suggested:

- cut Stormwillow;
- obtain Primal Heartwood;
- maintain wood reserves with worker team;
- cut Umbralwood;
- equip Astralite Logging Axe;
- cut Starwood;
- reach Woodcutting 100;
- complete Master of the Canopy;
- unlock Worldroot Grove.

---

# 101. ENDGAME CHRONICLE — MASTER OF THE CANOPY

Recommended requirements:

- Woodcutting 100;
- Astralite Logging Axe;
- Forestry Yard V;
- Starwood Mastery 50;
- Astral Cedar Mastery 25;
- personally fell at least:
  - 50 Starwood;
  - 25 Astral Cedar;
  - 10 Ancient T10 Trees total.

Reward:

**Worldroot Grove unlocked**

Additional:

- fourth Woodcutting preset;
- Master Woodsman completion marker.

---

# 102. DEVTOOLS

Woodcutting DevTools should support:

- set Woodcutting Level;
- set Tree Mastery;
- set Skill-Wide Mastery;
- unlock Grove;
- unlock Specialty Tree;
- set Tree Stand Growth;
- force Young / Mature / Ancient;
- set Work remaining;
- instant fell;
- set Minimum Maturity;
- set rotation priority;
- spawn Logging Axe;
- spawn clothing/jewelry;
- set Specialization;
- establish Grove;
- mark Tree Proven;
- spawn worker;
- set Worker Proficiency;
- simulate 1m / 5m / 1h / 8h / 24h;
- compare expected output/hour to actual simulation.

---

# 103. DATA MODEL

Grove:

- ID;
- Name;
- Tier;
- unlock Level;
- Primary Tree ID;
- Specialty Tree ID;
- stand layout.

Tree:

- ID;
- Name;
- Tier;
- class;
- unlock Level;
- Base Logs;
- Base Growth Time;
- Mature Work;
- Base XP;
- Heartwood family.

Stand:

- Tree ID;
- Growth;
- current state;
- Work remaining if active target.

Player:

- Tree Mastery;
- Grove Established;
- presets;
- maturity settings;
- rotation priorities;
- Specialization;
- planner.

---

# 104. ANTI-BLOAT RULES

Avoid:

- 4–5 different trees per Tier;
- unique Bark for every species;
- unique Resin for every species;
- unique Heartwood for every species;
- random weather bonuses;
- random Grove depletion;
- tree quality item variants;
- Hatchet durability;
- active clicking minigames.

Prefer:

- 2 Trees per normal Tier;
- universal Bark;
- universal Resin;
- 4 Heartwood grades;
- predictable Growth;
- player-controlled maturity;
- clear rotations.

---

# 105. MAJOR OPEN QUESTIONS — RECOMMENDED ANSWERS

These are answered with the recommended baseline.

## Should Woodcutting directly select one Tree and loop forever?

**No.**

The profession should use Groves and multiple regrowing Tree Stands.

That is its main identity.

---

## Should Tree Growth continue while doing another profession?

**No for personal Groves.**

Only the active Grove grows.

Workers provide legitimate parallel forestry.

---

## Should all stands grow in parallel inside the active Grove?

**Yes.**

That is what creates rotation gameplay.

---

## Should player choose harvest maturity?

**Yes.**

Per species:

- Young;
- Mature;
- Ancient.

---

## Should Ancient always be best for Logs/hour?

**No.**

Balance target:

- Mature = standard bulk Logs;
- Ancient = XP/Mastery/By-Products/Heartwood;
- Young = low-wait emergency / fast availability.

---

## Should Young Trees be completely useless?

**No.**

They:

- reduce waiting;
- help early small rotations;
- can fill urgent resource targets.

But they should be inefficient compared with Mature for ordinary long-run timber.

---

## Should Growth go beyond Ancient?

**No.**

Cap at 100%.

No hidden rested bonus.

---

## Should Trees die permanently?

**No.**

They regrow.

---

## Should Grove have manual replanting?

**No baseline.**

Regrowth is automatic.

Manual seed planting belongs more naturally to Farming if needed later.

---

## Should every Tier have two Trees?

**Yes for baseline.**

Primary + Specialty.

This is enough variety without content bloat.

---

## Should Specialty Tree be mandatory?

**No.**

Primary Timber supports normal progression.

Specialty Timber supports optimization / special recipes.

---

## Should Woodcutting have random rare Tree spawns?

**No baseline.**

Heartwood and Specialty Trees already provide rare-target gameplay predictably.

---

## Should Bark / Resin be tiered items?

**No.**

Keep:

- Bark;
- Resin

universal.

Avoid inventory bloat.

---

## Should Heartwood have 10 variants?

**No.**

Use 4 progression grades + Worldroot.

---

## Should Heartwood only come from Ancient Trees?

**Yes.**

This gives Ancient maturity a clear unique purpose.

---

## Should Axe have durability?

**No.**

Permanent profession Tool.

---

## Should Axes increase Growth?

A small number of higher Axes can improve active Growth, but Axe's main job remains:

- Power;
- Swing speed;
- cutting effects.

Growth is more strongly owned by:

- Forester build;
- gear;
- Forestry Yard.

---

## Should Workers use the exact player's Tree Stands?

**No.**

Workers use managed woodlots with the same rules.

Avoid stand conflicts.

---

## When is a Grove worker-ready?

After:

- Grove Established;
- species Mastery 10.

---

## Should workers cut unproven Trees?

**No.**

Player learns first.

---

## Should workers give player XP / Mastery?

**No.**

They give resources and gain worker Proficiency.

---

## Should workers be allowed to cut Ancient?

**Yes.**

They can use any configured maturity once species is Proven.

---

## Should old Axes move to workers?

**Yes.**

This is intended progression.

---

## Should Woodcutting require Estate infrastructure?

**No.**

Personal Woodcutting works independently.

Forestry Yard improves management / workers.

---

## Should Woodcutting use random Crit chops?

**No baseline.**

Axe Power is predictable.

Extra Logs are sufficient output variance.

---

## Should XP come from time growing?

**No.**

Only felling gives XP.

---

## Should Tree Mastery gain while tree grows?

**No.**

Only successful felling.

---

## Should Growth be real-time while game closed?

**Only if Woodcutting was the player's active activity.**

Then offline simulation progresses the active Grove.

Inactive Groves stay frozen.

---

## Should the player be able to change Grove while one tree is half-cut?

**Yes, but current Work progress is lost.**

Tree Growth remains unchanged.

No Logs are granted.

---

## Should leaving a Grove reset all Tree Growth?

**No.**

Freeze exact states.

Returning later resumes from the same Growth values.

---

## Should Fletching own wood processing?

**Yes.**

Woodcutting gathers raw Logs / forestry resources.

Fletching converts them into:

- Shafts;
- Utility Blanks;
- bows;
- Rods;
- ranged components.

Do not create a generic Carpentry skill.

---

## Should Estate consume raw Logs directly?

**Yes, where logical.**

Facilities / projects can consume Logs and Smithing components without requiring another plank profession.

---

## Should Worldroot be normal T10 Tree?

**No.**

It is Level-100+ endgame progression after Master of the Canopy.

---

## Should Worldroot be worker-available immediately?

**No.**

Player must first establish mastery and personally cut it.

---

# 106. COMPLETE LOCKED WOODCUTTING BASELINE

1. Woodcutting uses Groves.
2. Each normal Grove has 4 Primary + 2 Specialty Tree Stands.
3. Stands regrow in parallel only while that personal Grove is active.
4. Inactive personal Groves freeze.
5. Tree Growth is 0–100%.
6. Regrowing 0–39%.
7. Young 40–69%.
8. Mature 70–94%.
9. Ancient 95–100%.
10. Player chooses Minimum Maturity per species.
11. Player chooses enabled species and rotation priority.
12. Mature is baseline bulk-Log strategy.
13. Ancient emphasizes XP/Mastery/By-Products/Heartwood.
14. Young emphasizes availability / reduced waiting.
15. 10 normal Groves.
16. 10 Primary Timber species.
17. 10 Specialty Timber species.
18. Level-100+ Worldroot Grove.
19. Primary wood ladder aligns with Fishing/Fletching progression.
20. Universal Bark.
21. Universal Resin.
22. Four normal Heartwood grades + Worldroot Heartwood.
23. Heartwood is Ancient-only.
24. Logging Axe uses Axe Power + Swing Time.
25. 10 Axe progression + Worn Hatchet.
26. No durability.
27. Tree Mastery 1–100.
28. Skill-Wide Woodcutting Mastery.
29. Three reversible Specializations:
    - Lumberjack;
    - Forester;
    - Heartwood Seeker.
30. Forestry Yard is Estate infrastructure.
31. Workers use managed woodlots with same core rules.
32. Grove must be Established.
33. Tree must reach Mastery 10 to become Proven.
34. Workers gain Proficiency, not player XP/Mastery.
35. Frontier worker penalty falls with player Tree Mastery.
36. Old Axes / gear transfer naturally to workers.
37. Planner supports maturity, ratio, reserves, Grove switching, and worker schedules.
38. Woodcutting strongly feeds Fletching.
39. Woodcutting also feeds Fishing Rods, Hunting traps, Estate, Alchemy, and Leatherworking.
40. Offline Woodcutting simulates only the active personal Grove plus workers.
41. UI shows every Stand, Growth, maturity, ready times, Work, yield, and hourly analytics.
42. All baseline Woodcutting content lives in this single MD.

---

# 107. FINAL SUMMARY

Woodcutting begins with:

**Worn Hatchet**

↓

**Greenbank Copse**

↓

**Alder**

↓

**Trees grow / rotate**

↓

**Birch Specialty Timber**

↓

**better Logging Axes**

↓

**Mature versus Ancient strategies**

↓

**Bark / Resin / Heartwood**

↓

**Woodcutting Specialization**

↓

**Fletching / Fishing Rod / Hunting trap supply**

↓

**Forestry Yard**

↓

**worker woodlots**

↓

**Starwood / Astral Cedar**

↓

**Woodcutting 100**

↓

**Worldroot Grove**

The profession's core decision is:

> **Do I cut as soon as trees are usable, maintain a mature timber rotation, or wait longer for Ancient trees and rare forestry materials?**

Woodcutting should feel alive even while idle because the active Grove contains multiple stands:

- some ready;
- some regrowing;
- some maturing;
- one being chopped.

Long-term progression becomes:

**I cut every tree myself**

↓

**I learn efficient rotations**

↓

**I specialize for timber or rare wood**

↓

**I establish managed Groves**

↓

**workers maintain old timber**

↓

**I personally push Starwood / Worldroot and high-end Fletching materials**

Core Woodcutting identity:

> **The resource is not just the tree — it is the rotation. Let the grove grow, choose when to harvest, and build the timber economy around that rhythm.**








