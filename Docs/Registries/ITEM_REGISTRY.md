# Item Registry

**Status:** Canonical naming and ownership registry v1.0  
Detailed quantity, rates, and full tier rosters remain in the owning profession document; this registry controls shared names and producer contracts.

## Registry schema

Each implementation item receives a stable ID based on its owning profession and canonical name (`item.<owner>.<slug>`); tiered families append the canonical tier/material slug; display names are not IDs. This yields one deterministic ID per canonical item and aliases never receive a second ID. Required fields: `itemId`, `canonicalName`, `category`, `tier`, `producer`, `consumerFamilies`, `stackable`, `preservationAllowed`, `salvageAllowed`, `workerAutoConsumeDefault`, and `protected`. Virtual tags and account-only values are marked as such and are not physical items. Recipe Registry entries reference these exact canonical names.

## Canonical material families

| Family | Canonical names / members | Producer | Main consumers |
|---|---|---|---|
| Metals | Copper, Iron, Cobalt, Argent, Emberite, Frostsilver, Stormiron, Aetherite, Umbral, Astralite (ore and ingot forms) | Mining / Smithing | Smithing, Jewelcrafting, Tools, Estate |
| Primary Timber | Alder, Oak, Ironwood, Silverpine, Emberwood, Frostbark, Stormwillow, Aetherwood, Umbralwood, Starwood Logs | Woodcutting | Fletching, Estate, tool components |
| Specialty Timber | Birch, Willow, Cedar, Moonwood, Cinderbark, Icewillow, Thunder Oak, Prismwood, Nightbark, Astral Cedar Logs | Woodcutting | Fletching, Estate, selected tools |
| Gems | Opal, Sapphire, Garnet, Emerald, Ruby, Topaz, Amethyst, Aquamarine, Diamond, Astral Prism (rough/faceted forms) | Mining / Jewelcrafting | Jewelcrafting, selected Alchemy/Runecrafting |
| Essence grades | Raw Essence, Runic Crystal, Aether Essence, Astral Essence | Mining; Astral Essence refined by Runecrafting | Runecrafting, Alchemy |
| Timber by-products | Bark, Resin, Heartwood grades, Worldroot Heartwood | Woodcutting | Leatherworking, Fletching, Estate/endgame |
| Aquatic | Fish species, Aquatic Finds | Fishing | Cooking, selected Alchemy/Jewelcrafting |
| Hunting | Game Meat, Hide tiers, Feather Bundle, Sinew, Fur Bundle, Bone Fragment, Fang & Claw Fragment, Primal materials | Hunting | Cooking, Leatherworking, Fletching, Tailoring, Alchemy |
| Farming | Vegetables, Grains, Fruits, domesticated Herbs/Botanicals/Fibres/Fungi | Farming | Cooking, Alchemy, Tailoring |
| Foraging | Herbs, Fungi, Fibres, Botanicals, Wild Reagents, Wildheart resources | Foraging | Farming domestication, Tailoring, Cooking, Alchemy |
| Smithing components | Iron Fasteners, Hardened Fittings, Argent Mechanism, Tempered Assembly, Precision Mechanism, Runic Frame, Umbral Reinforcement, Astral Framework, Worldforged Assembly | Smithing | Tools, traps, Estate, Fletching |
| Fletching components | Tiered Shaft Bundle, Bow Limbs, Crossbow Stocks, Utility Blank | Fletching | Ranged weapons, ammo, rods, physical Tools, Hunting |
| Tailoring | Thread, Cloth, named Weaves, Bowstrings, Worldsilk | Tailoring; magical Filaments are Runecrafting outputs | Fletching, armor, profession gear |
| Leatherworking | Leather grades, Sinew Cord, Fur Linings, straps, grips, bindings, Primal Leather | Leatherworking | Armor, Fletching, tools, traps |
| Cooking | Food, Meals, Provisions, Fish Oil, Refined Fish Oil | Cooking | Combat, bait, selected profession chains |
| Runecrafting | Runes, Runic/Refined Runic/Aether/Umbral/Astral Filaments, Rune Matrices, Astral Essence, World Matrix | Runecrafting | Combat, Tailoring, Fletching, endgame |
| Alchemy | Extracts, Elixirs, Tonics, Remedies, Concentrates, Quintessence | Alchemy | Combat, professions, endgame |
| Jewelcrafting | Faceted Gems, Prismatic Dust, Combat/Profession Jewelry, precision components, World Prism | Jewelcrafting | Combat, every profession, endgame |

## Canonical integration item contracts

| Canonical item | Producer | Contract / status |
|---|---|---|
| `<Metal> Projectile Head Bundle` | Smithing | One tiered stack per metal; Fletching spends the same bundle for Arrows or Bolts |
| Basic / Reinforced / Precision / Runic / Astral Trigger Assembly | Smithing | Shared crossbow trigger ladder; use exact tier-range mapping in Recipe Registry |
| Basic / Reinforced / Precision / Runic / Astral Winch Assembly | Smithing | Shared crossbow winch ladder |
| `<Timber> Utility Blank` | Fletching | Canonical physical wooden structure for Tool upgrades, rods, and trap frames |
| Sinew Cord | Leatherworking | Canonical replacement for Feather/Sinew Cord and generic Sinew Cord inputs |
| Hardened Fittings / Argent Mechanism / Tempered Assembly / Precision Mechanism / Astral Framework | Smithing | Use matching tier component; no separate Frostsilver/Aetherite/Astralite Mechanism items |
| Fish Oil / Refined Fish Oil | Cooking | Fishing supplies fish; Cooking owns oil extraction/refining |
| Prismatic Dust | Jewelcrafting; Mining deposit roll is an explicitly documented secondary source | Keep producer wording consistent with Mining's independent deposit roll and Jewelcrafting Gem crushing |
| Fruit items tagged `[Fruit]` | Farming | Cooking recipes accept the semantic `[Fruit]` tag; the tag is not a separate inventory item |

## Protected metadata defaults

`protected=true` and `workerAutoConsumeDefault=false` for Worldheart Shard, Wildheart Essence, Worldroot Heartwood, Primal endgame materials, Astral Core Fragment, Quintessence, World Prism, and unique boss/endgame materials. Any exception requires explicit permission in the planner/policy. Normal inputs default `preservationAllowed=true` unless the producer recipe says otherwise; unique endgame inputs can opt out. `salvageAllowed=false` for raw resources, protected materials, and unique items unless a profession explicitly enables salvage.

No duplicate Item IDs may be created for aliases. Item renames and merges are recorded in `PROFESSION_INTEGRATION_HARDENING_REPORT.md`.

## Alias and ownership notes

`Bronze`, generic `Steel`, and `Mithril` are not canonical base-metal tiers. Named Smithing alloys (for example Cobalt Steel) remain valid. Woodcutting Resin is not a Foraging resource. Fish Oil is produced only by Cooking. Fletching Utility Blank is the canonical wooden structure; legacy Handle wording in explanatory history does not name a separate stackable item.


