> **MASTERY STATUS — REMOVED FROM CURRENT BASELINE**
>
> Historical Mastery references in this overview are deprecated. Do not implement Mastery, Mastery XP, milestones, or worker-Proven rules unless a future progression redesign explicitly restores them.

# MX-Idle Professions Overview v1.0

**Status:** Canonical overview
**Companion canon:** [Global Game Rules](../00_GLOBAL_GAME_RULES.md)

**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)
**Detail:** Each linked profession document remains the source for its complete tables, formulas, unlocks, and unique mechanics.

## Purpose and philosophy

MX-Idle is an interconnected idle RPG. Professions gather, process, and craft resources for Combat and account infrastructure. The player personally unlocks new content and pushes the frontier; a growing home and worker network maintains established production. This overview maps responsibilities without duplicating the detailed profession designs.

The core account loop is:

**Gather â†’ Process â†’ Craft â†’ Combat â†’ Build infrastructure â†’ Delegate established work â†’ Personally push frontier content â†’ Master systems â†’ Converge selective endgame resources**

Each profession keeps its own identity and signature mechanic. There are exactly 14 baseline professions; Home/Estate is a separate account progression system.

## Baseline professions

| # | Group | Profession | Identity | Detailed design |
|---:|---|---|---|---|
| 1 | Gathering | Mining | Five-stage deposits, Density, deeper-stage rewards | [01 Mining](01_MINING_v1.1.md) |
| 2 | Production | Smithing | Smelting, Heat, Forging, alloys, salvage | [02 Smithing](02_SMITHING.md) |
| 3 | Gathering | Fishing | Spots, weighted catch pools, Bait, Tackle, species Mastery | [03 Fishing](03_FISHING.md) |
| 4 | Production | Cooking | Preparation stations, recipe composition, sustain and provisions | [04 Cooking](04_COOKING.md) |
| 5 | Gathering | Woodcutting | Groves, Tree Stands, Growth, maturity, rotation | [05 Woodcutting](05_WOODCUTTING.md) |
| 6 | Production | Fletching | Shaping and assembly of ranged weapons, Ammo, Rods, and structures | [06 Fletching](06_FLETCHING.md) |
| 7 | Gathering | Foraging | Routes, Search Focus, discovery, wild reagents | [07 Foraging](07_FORAGING.md) |
| 8 | Production | Tailoring | Fibre, Thread, cloth, Weave, clothing, Bowstrings | [08 Tailoring](08_TAILORING.md) |
| 9 | Production | Runecrafting | Attunement, Rune Patterns, stability, Filaments and Matrices | [09 Runecrafting](09_RUNECRAFTING.md) |
| 10 | Gathering | Hunting | Tracking, exact prey, Hunt Method, Field Dressing | [10 Hunting](10_HUNTING.md) |
| 11 | Production | Leatherworking | Curing, tanning, leather gear and utility components | [11 Leatherworking](11_LEATHERWORKING.md) |
| 12 | Gathering | Farming | Property land, background Growth, Orchard and Domestication | [12 Farming](12_FARMING.md) |
| 13 | Production | Alchemy | Extraction, Elixirs, Tonics, Remedies and Concentrates | [13 Alchemy](13_ALCHEMY.md) |
| 14 | Production | Jewelcrafting | Gem cutting, modular Frames, Affinities and precision components | [14 Jewelcrafting](14_JEWELCRAFTING.md) |

Gathering professions are Mining, Woodcutting, Fishing, Farming, Hunting, and Foraging. Production/processing professions are Smithing, Leatherworking, Tailoring, Fletching, Cooking, Alchemy, Jewelcrafting, and Runecrafting. Do not add a baseline profession or fold recipes into generic Crafting.

## Shared progression axes

- Profession level unlocks content from Level 1 to 100 across ten global tiers. T1=1â€“10, T2=11â€“20, T3=21â€“30, T4=31â€“40, T5=41â€“50, T6=51â€“60, T7=61â€“70, T8=71â€“80, T9=81â€“90, T10=91â€“100.
- Important actions, resources, and recipes have their own Mastery from 1â€“100. Milestones are 10, 25, 50, 75, and 100.
- Specialization normally unlocks around Level 35/T4. It is reversible, can be changed between active actions, and is stored in presets.
- Tool, Head, Body, Legs, Hands, Feet, Ring, and Necklace are the shared profession equipment slots. Profession-specific tables own their stats and items.
- Profession facilities and account unlocks support these systems without becoming extra skills.

## Personal Activity Slot

The player normally performs one active personal activity: a normal profession or Combat. Farming crop Growth, workers, Estate projects, and long facility timers are explicit account background exceptions. Farming background Growth by itself grants no player XP or Mastery. The Activity Planner defines shared conditions, queues, reserves, fallback, worker schedules, and offline transitions in [16_ACTIVITY_PLANNER.md](../16_ACTIVITY_PLANNER.md).

## Mastery, workers, and automation

Player Mastery improves a specific action/resource/recipe and ordinarily makes it Proven for workers at Mastery 10. Workers produce real outputs, consume real inputs, and gain their own Proficiency; they grant no player Skill XP or Mastery XP. Where documented, Worker Efficiency remains `50% + Proficiency Ã— 0.50%`. Workers are weaker on frontier content and primarily sustain content the player has established. Old profession equipment may be assigned to workers as unique items.

Automated systems obey protected-item permissions, hard reserves, recipe targets, fallback, and stop conditions. Offline simulation uses active economic formulas and advances between events. Full shared contracts are in [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) and [15_HOME_ESTATE_WORKERS.md](../15_HOME_ESTATE_WORKERS.md).

## Home / Estate relationship

Home is account infrastructure, not a profession and not Construction XP. Canonical progression is **House â†’ Lodge â†’ Manor â†’ Estate â†’ Holdings**. It manages residence progression, profession stations, worker capacity, logistics, storage, planning, land, and permanent projects. Profession stations are housed within this progression; Farming uses property land and background growth. Infrastructure is the primary long-term Gold sink. See [15_HOME_ESTATE_WORKERS.md](../15_HOME_ESTATE_WORKERS.md).

## Canonical material ladders

- Metals: Copper, Iron, Cobalt, Argent, Emberite, Frostsilver, Stormiron, Aetherite, Umbral, Astralite. Smithing alloys are separate named recipes. Bronze, Steel, and Mithril are not standard tiers.
- Primary Timber: Alder, Oak, Ironwood, Silverpine, Emberwood, Frostbark, Stormwillow, Aetherwood, Umbralwood, Starwood.
- Specialty Timber: Birch, Willow, Cedar, Moonwood, Cinderbark, Icewillow, Thunder Oak, Prismwood, Nightbark, Astral Cedar.
- Gems: Opal, Sapphire, Garnet, Emerald, Ruby, Topaz, Amethyst, Aquamarine, Diamond, Astral Prism. Gems have no random quality tiers.

## Dependency map

| Profession | Main outputs | Main consumers / contract |
|---|---|---|
| Mining | Ores, Stone, Coal/Flux, Gems, Essence resources, Core materials, Worldheart | Smithing, Jewelcrafting, Runecrafting, Estate |
| Woodcutting | Logs, Bark, Resin, Heartwood, Worldroot | Fletching, Leatherworking, Tool chains, Estate. Resin is not a Foraging output. |
| Fishing | Fish, Aquatic Finds | Cooking, selected Alchemy/Jewelcrafting. Cooking makes Fish Oil. |
| Foraging | Herbs, Fungi, Fibres, Botanicals, Wild Reagents, Wildheart | Farming Domestication, Tailoring, Cooking, Alchemy |
| Farming | Vegetables, Grains, Fruits, domesticated Herbs/Botanicals/Fibres/Fungi | Cooking, Alchemy, Tailoring, relevant workers/Estate |
| Hunting | Game Meat, Hides, Feather Bundle, Sinew, Fur, Bone, Fang/Claw, Primal materials | Cooking, Leatherworking, Fletching, Tailoring, Alchemy |
| Smithing | Ingots, Alloys, weapons, heavy armor, metal Tools/components, Projectile Head Bundles, crossbow mechanisms, Estate and Worldforged components | Combat, all physical metal Tool chains, Fletching, Hunting, Estate |
| Fletching | Ranged weapons, Ammo, Shaft Bundles, Utility Blanks, Fishing Rods, Hunting structural components | Combat, Fishing, Tools, Hunting |
| Tailoring | Thread, Cloth, Weaves, armor/clothing, Bowstrings, worker textiles, Worldsilk | Fletching, professions, workers |
| Leatherworking | Leather, armor, Sinew Cord, Fur Linings, straps, grips, bindings, Primal Leather | Hunting, Fletching, Tools, workers |
| Cooking | Food, Meals, Provisions, Fish Oil, Refined Fish Oil | Combat, Bait, worker provisions |
| Runecrafting | Runes, magical Filaments, Rune Matrices, Astral Essence, World Matrix | Combat, Tailoring, Fletching, endgame |
| Alchemy | Extracts, Combat Elixirs, Profession Tonics, Remedies, Concentrates, Quintessence | Combat and profession preparation |
| Jewelcrafting | Faceted Gems, Prismatic Dust, Combat/Profession Jewelry, precision parts, World Prism | Combat, every profession's jewelry, endgame |

### Critical source timing

Runecrafting is an ordinary Level 1â€“100 profession. Mining supplies Raw Essence in T1, Runic Crystal by T4, and Aether Essence by T7; Runecrafting refines Astral Essence during T10 from Aether Essence and Astral Core Fragment. This prevents the Rune grade ladder from being gated several tiers after its recipes.

## Endgame convergence

Selective World/Primal/Astral endgame remains without a full T11 item ladder. World Matrix and Quintessence are independent branches that converge at World Prism. See [17_ENDGAME_RESOURCE_DAG.md](../17_ENDGAME_RESOURCE_DAG.md).

## Implementation rules

1. Use the Global Game Rules and Registries as shared contracts; detailed profession files own local formulas and tables.
2. Do not add Tool durability, random craft quality, generic Bronze/Steel/Mithril tiers, a fifteenth profession, or a second activity slot.
3. Every physical recipe input and output must have a canonical registry name and producer; semantic tags such as `[Fruit]` are not physical items.
4. Every tool has a T0 bootstrap source and a producer recipe for later upgrades. Smithing source labels require Smithing recipes; Fletching owns Fishing Rod recipes and reusable trap structure.
5. Player skill/content unlocks precede worker access. Mastery 10 makes content Proven; workers gain Proficiency but no player XP/Mastery.
6. Protect rare/endgame items from automated consumption by default and enforce hard reserves.
7. Active and offline simulation use the same formulas. Planner and worker transitions occur at defined event/action boundaries.
8. Existing combat values remain design anchors until Combat Core balance is locked.

## Canonical registries and systems

- [Global Game Rules](../00_GLOBAL_GAME_RULES.md)
- [Item Registry](../Registries/ITEM_REGISTRY.md)
- [Recipe Registry](../Registries/RECIPE_REGISTRY.md)
- [Profession Gear Matrix](../Registries/PROFESSION_GEAR_MATRIX.md)
- [Unlock Dependency Matrix](../Registries/UNLOCK_DEPENDENCY_MATRIX.md)
- [Home, Estate, and Workers](../15_HOME_ESTATE_WORKERS.md)
- [Activity Planner](../16_ACTIVITY_PLANNER.md)
- [Endgame Resource DAG](../17_ENDGAME_RESOURCE_DAG.md)
- [Integration Hardening Report](../PROFESSION_INTEGRATION_HARDENING_REPORT.md)
