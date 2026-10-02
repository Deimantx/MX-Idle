# Recipe Registry

**Status:** Canonical producer and contract registry v1.0

The owning profession document contains complete quantities, action times, XP, and Mastery data. This registry defines cross-profession ownership and canonical integration recipes. Implementation must assign every recipe a stable ID (`recipe.<owner>.<slug>`) and every physical input/output an Item Registry name. A semantic ingredient tag resolves to eligible items and is not itself a physical stack.

## Cross-profession recipe contracts

| Recipe family / output | Owner | Required contract |
|---|---|---|
| Ore, Stone, Coal/Flux, Gems, Raw Essence, Runic Crystal, Aether Essence, Core materials, Worldheart | Mining | Mining activity/deposit produces resources; Essence grades unlock by Runecrafting bands: Raw Essence T1, Runic Crystal by T4, Aether Essence by T7; Astral Essence is refined in Runecrafting during T10 |
| Ingots, Alloys, Tools, metal components, Projectile Head Bundles, crossbow mechanisms, Estate components, Worldforged | Smithing | Physical Tool upgrade: previous Tool + current-tier metal + matching Utility Blank/structural part. Exact Smithing contracts below supersede generic `Source: Smithing` prose |
| Logs, Bark, Resin, Heartwood, Worldroot | Woodcutting | Resin is Woodcutting-only; no Foraging Resin output |
| Shafts, limbs, stocks, Utility Blanks, Ammo, Rods, trap structural parts | Fletching | Full Fishing Rod assembly ladder is listed below; Smithing supplies Projectile Head Bundles and mechanisms |
| Thread, Cloth, textile Weaves, Bowstrings, Worldsilk processing | Tailoring | Thread recipes unlock alongside their Foraging Fibre source (L5, 15, 25, 35, 45, 55, 65, 75, 85, 95). Bowstring levels: Simple L8; Reinforced L38; Runic L68; Astral L98. Runic/Astral Filaments are made by Runecrafting |
| Fish Oil, Refined Fish Oil | Cooking | Cooking processes fish into oil; Fishing is not an oil producer |
| `[Fruit]` recipes | Cooking | Use Farming fruit tag; Farming owns fruit outputs |
| Faceted Gems, Gem crushing/Prismatic Dust, Jewelry, World Prism | Jewelcrafting | Mining also has a defined independent Prismatic Dust deposit roll; both sources are canonical |
| Sinew Cord, leather goods, straps/bindings/grips, Primal Leather | Leatherworking | Use Smithing Fasteners/Fittings/Mechanisms instead of undefined Rivet Bundle |
| Trap Kit / reusable Hunting equipment | Fletching | Fletching assembles reusable kits/frames; Hunting equips and uses them; Smithing supplies metal mechanisms; Leatherworking supplies cord/bindings |

## Exact integration recipes

### Smithing outputs

- At each of the ten metal tiers, Smithing produces one `<Metal> Projectile Head Bundle`. Fletching consumes one bundle to produce either Arrow or Bolt ammunition, plus its normal wooden shaft bundle/feathers/string as specified by the Fletching family recipe. Do not create separate Arrowhead and Bolt Head stacks.
- Crossbow mechanism ladder: Basic Trigger and Basic Winch (Copper/Iron early range); Reinforced Trigger and Reinforced Winch (Cobalt through Frostsilver); Precision Trigger (Stormiron through Umbral); Runic Winch (Stormiron through Umbral); Astral Trigger and Astral Winch (Astralite). Smithing components use existing component tiers: Iron Fasteners, Hardened Fittings, Argent Mechanism, Tempered Assembly, Precision Mechanism, Runic Frame, Umbral Reinforcement, Astral Framework. Each recipe's exact level is no later than its first consumer recipe; the Unlock Dependency Matrix records mapped gates.
- Metal Tool upgrades consume the prior tier Tool, current-tier Smithing metal, and the named matching-tier structural item. Fletching's Utility Blank is the default wooden structure. Hunting Knife may use Leatherworking grip/wrap if its local table calls for it.

### Fletching Fishing Rod assemblies

Fletching owns these recipes; Fishing owns Rod stats and equip effects. Inputs use the named matching-tier Utility Blank plus the appropriate existing line/cord/metal components in the Fletching source table. No Fishing stat table is duplicated here.

| Fletching unlock band | Rod output |
|---|---|
| T1 | Reed Rod |
| T1 | Alder Rod |
| T2 | Ironwood Rod |
| T4 | Silverpine Rod |
| T5 | Emberwood Rod |
| T6 | Frostbark Rod |
| T7 | Stormwillow Rod |
| T8 | Aetherwood Rod |
| T9 | Umbral Rod |
| T10 | Starwood Rod |

### Hunting and Leatherworking normalization

- Basic Snare Kit: Alder Utility Blank + Sinew Cord + Iron Fasteners; reusable.
- Reinforced Trap Frame: Silverpine Utility Blank + Argent Mechanism (if its Smithing recipe is available at the method gate; otherwise Hardened Fittings); reusable.
- Master Trap Kit: Frostbark Utility Blank + Tempered Assembly + Resin; reusable.
- Aether Trap Assembly: Aetherwood Utility Blank + Precision Mechanism + Sinew Cord + optional Aether Filament; reusable.
- Astral Trap Assembly: Starwood Utility Blank + Astral Framework + Sinew Cord + Astral Filament; reusable.
- Reinforced Leather patterns and harness recipes use Hardened Fittings, Argent Mechanism, or Tempered Assembly by tier. `Rivet Bundle` is retired as a generic name. Bone Rivet Bundle is a separate Leatherworking output and remains valid where explicitly named.

### Tailoring normalization

Runecrafting owns Runic, Refined Runic, Aether, Umbral, and Astral Filaments. Tailoring consumes those exact named outputs. Dense Cloth Strips, Runic Cloth Strips, and Astralweave Strips are retired aliases, not physical intermediates. Bowstrings consume the named existing Dense Cloth, Runic Cloth, or Astralweave outputs plus the listed Thread/Filament directly.

## Bootstrap and gate rule

T0 Tool is granted at first profession introduction/Chronicle (or cheap Shop purchase). No dependency cycle may require a Tool whose first producer recipe is inaccessible without that Tool. Cross-profession producer gates should be within 3 levels of the consumer gate where practical; a wider gap is documented as intentional in `UNLOCK_DEPENDENCY_MATRIX.md`.




## Endgame recipe order

World Matrix consumes frontier materials (Worldheart, Worldroot, Wildheart, Worldsilk) plus T10 magical inputs; it does not consume Quintessence. Quintessence consumes World Matrix, Wildheart, Worldgarden/Genesis Fruit, Astral Essence, and Alchemy extracts; it does not feed World Matrix. World Prism is downstream of both World Matrix and Quintessence. Primal Leather is a terminal gear/project sink in this dependency graph.



