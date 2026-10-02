# MX-Idle Global Game Rules

**Status:** Canonical shared rules v1.0  
**Scope:** All professions, account infrastructure, automation, and offline simulation.

When a profession draft conflicts with this file, use the profession's detailed identity and mechanics where possible, but follow this file for shared contracts. A detailed profession exception must be named and recorded in its Integration Hardening section and the hardening report.

## 1. Baseline and progression

- The baseline contains exactly 14 professions: Mining, Woodcutting, Fishing, Farming, Hunting, Foraging, Smithing, Leatherworking, Tailoring, Fletching, Cooking, Alchemy, Jewelcrafting, and Runecrafting.
- Home / Estate / Infrastructure is an account system, not a profession. It has no normal Skill XP, profession Mastery, or profession Specialization.
- Residence progression is **House → Lodge → Manor → Estate → Holdings**.
- Normal profession level cap is 100. Global bands are T1 1–10, T2 11–20, T3 21–30, T4 31–40, T5 41–50, T6 51–60, T7 61–70, T8 71–80, T9 81–90, and T10 91–100.
- Important actions, resources, and recipes have individual Mastery 1–100, with primary milestones at 10, 25, 50, 75, and 100.
- Profession Specialization normally unlocks around Level 35 / T4. It is reversible, can be changed outside an active action, and is remembered by presets.

## 2. Personal and background activity

The player normally has one active personal activity. Combat and normal professions use the same slot. Explicit account background systems are exceptions: crop growth, workers, Estate projects, and long-running facility timers. Background growth itself does not grant Farming XP or Mastery.

Every profession has an explicit T0 starter path: its first Chronicle/profession introduction grants the starter Tool, or the Shop sells that same starter item for a small cost. T0 access must be available before any recipe or activity that needs that Tool. Worn Pickaxe → Copper Ore → Copper Pickaxe is the accepted bootstrap pattern; no upgrade chain may require its own inaccessible output.

## 3. Tools, gear, and item behavior

- Profession equipment slots are Tool, Head, Body, Legs, Hands, Feet, Ring, and Necklace. A profession preset may leave slots empty.
- Normal Tools and crafted equipment have no durability. There are no random Poor/Fine/Perfect/Legendary versions of the same recipe output.
- Physical Tool upgrades use **previous Tool + current-tier metal component + matching-tier Utility Blank or named structural component → next Tool**, unless the Gear Matrix marks a multi-profession kit assembly.
- Normal stackable Bank items support very large effectively unlimited stacks.
- Persistent station/background loadouts own real item instances. An item cannot be equipped, assigned to a worker, or assigned to another persistent loadout at the same time.

## 4. Workers and Proven content

Workers produce ordinary resources and items and gain their own profession Proficiency. They grant no player Skill XP or action/recipe Mastery. General rule: Mastery 10 makes that action, resource, species, or recipe Proven for workers. A profession may express the Proven flag using its own local name, but must keep the Mastery 10 threshold unless an explicit exception is registered.

Where worker efficiency is used, retain **50% + Proficiency × 0.50%** (Proficiency 1–100, yielding 50.5%–100%). Workers are weaker on the player's newest/unmastered frontier; the player personally establishes and pushes new content before workers maintain it. Old profession gear may be assigned to workers. Worker unlocks, Estate stages, gear assignment, reserves, and frontier rules are detailed in [15_HOME_ESTATE_WORKERS.md](15_HOME_ESTATE_WORKERS.md).

## 5. Preservation and percentage language

Keep profession-specific hard caps. Record every explicit chance/stat cap in the Stat Cap Registry section below; do not infer a universal cap where a profession has not defined one.

- Use **percentage points (pp)** for direct chance changes (example: `+5 pp Material Preservation`).
- Use **multiplicative +X%** for a relative multiplier (example: `Rare chance +20% multiplicative`).
- `Action Time -X%` reduces time. `Speed +X%` increases rate; where both appear, define the formula and do not treat them as interchangeable.

## 6. Canonical material families

- Metals: Copper, Iron, Cobalt, Argent, Emberite, Frostsilver, Stormiron, Aetherite, Umbral, Astralite. Alloys remain separate and use Smithing's named recipes. Bronze, Steel, and Mithril are not normal metal tiers.
- Primary Timber: Alder, Oak, Ironwood, Silverpine, Emberwood, Frostbark, Stormwillow, Aetherwood, Umbralwood, Starwood.
- Specialty Timber: Birch, Willow, Cedar, Moonwood, Cinderbark, Icewillow, Thunder Oak, Prismwood, Nightbark, Astral Cedar.
- Gems: Opal, Sapphire, Garnet, Emerald, Ruby, Topaz, Amethyst, Aquamarine, Diamond, Astral Prism. No random Gem quality tiers.
- Fishing Oil and Refined Fish Oil are Cooking outputs, not Fishing outputs. Woodcutting owns Resin; Foraging does not produce Resin.
- Fletching's canonical wooden tool structure is the tier-matched Utility Blank. Do not use an unqualified phantom `Handle` item.
- Smithing's canonical ammunition input is one tiered Projectile Head Bundle for either Arrow or Bolt production.

## 7. Starting economy and Shop

Gold can come from Combat, selling surplus items, contracts/Chronicles, and future explicitly designed sources. Do not set economy numbers in this canon pass. The Shop may offer T0 starter Tools, very small quantities of basic T1 supplies, basic food, and convenience materials; it does not sell high-tier profession resources in bulk. Home / Estate / Infrastructure is the principal long-term Gold sink.

## 8. Offline simulation and automation safety

Offline simulation uses the same economic formulas as active simulation for personal activity, Farming growth, workers, Estate timers, crop cycles, Elixir/Tonic timers, consumable depletion, reserves, and planner transitions. Use event-based advancement to the next state change rather than second-by-second brute force.

Every automated consumer obeys this order: protected-item permission → hard reserve → recipe target → configured fallback → stop condition. Protected items default to no worker auto-consumption. The Item Registry defines `preservationAllowed`, `salvageAllowed`, `workerAutoConsumeDefault`, and `protected` metadata. Likely protected items include Worldheart Shard, Wildheart Essence, Worldroot Heartwood, Primal endgame materials, Astral Core Fragment, Quintessence, World Prism, and unique boss/endgame materials.

## 9. Supply-hours UX

Show stock, consumption/hour, production/hour, net change/hour, and hours remaining for Ranged Ammo, Magic Runes, Food, Combat Elixirs, and Profession Tonics. Use the same supply-hours model for player and worker forecasts.

## 10. Stat Cap Registry

The current explicit caps remain profession-specific. This register is the shared index; if a cap is tuned later, update the owning profession and this row together.

| Stat / system | Current documented cap or rule | Owner |
|---|---|---|
| Material Preservation | Smithing 50%; other professions retain their individually documented hard caps | Each producer |
| Bait Preservation | Use Fishing's explicit cap | Fishing |
| Double Catch | Use Fishing's explicit cap | Fishing |
| Extra Prey Chance | 50% | Hunting |
| Ammo Output Chance | Use Fletching's explicit cap | Fletching |
| Brew Output Chance | Use Alchemy's explicit cap | Alchemy |
| Growth Speed | Use Woodcutting/Farming caps by system | Woodcutting, Farming |
| Rare/by-product chance | Profession-specific cap only where explicitly defined | Owning profession |

## 11. Canonical cross-document references

- Item names, metadata, ownership, and source family: [ITEM_REGISTRY.md](Registries/ITEM_REGISTRY.md).
- Recipe ownership and contract inputs: [RECIPE_REGISTRY.md](Registries/RECIPE_REGISTRY.md).
- Tool and profession equipment slots: [PROFESSION_GEAR_MATRIX.md](Registries/PROFESSION_GEAR_MATRIX.md).
- Cross-skill and Estate gates: [UNLOCK_DEPENDENCY_MATRIX.md](Registries/UNLOCK_DEPENDENCY_MATRIX.md).
- Activity Planner: [16_ACTIVITY_PLANNER.md](16_ACTIVITY_PLANNER.md).
- Endgame order: [17_ENDGAME_RESOURCE_DAG.md](17_ENDGAME_RESOURCE_DAG.md).
