# Profession Integration Second-Pass Repair Report

**Status:** Completed documentation and canon repair; no gameplay implementation code added.
**Scope:** Existing profession documents and registries under `Docs/`; exactly 14 baseline professions remain.

## Fixed

- Expanded the Item, Recipe, Gear, and Unlock Dependency registries into row-level tables. Item IDs resolve for all gear rows; every explicit recipe has a Recipe ID; all named physical inputs resolve to an Item ID.
- Added the source-listed clothing, footwear, visors, jackets, and Tailoring mantle items missed by the first registry extraction. Removed non-inventory Woodcutting tree nodes and table-label artifacts from the physical Item Registry.
- Corrected the Fishing Rod recipe ladder to use multi-material inputs and canonical names. Fletching owns the recipes; Fishing owns Rod stats.
- Replaced the undefined generic Hunting Knife wrap contract with selected, real Leatherworking outputs: Rugged Grip Wrap at L25, Ember Grip Wrap at L45, Aether Binding Set at L75, and Umbral Grip Set at L88. T1/T2 and remaining Knife tiers do not require unavailable wraps.
- Corrected Cooking's duplicated Roasted Root Bowl roadmap entries to L8 and added `[Fruit]` sinks at L38, L68, and L98. The Cooking source now reports 43 baseline recipes.
- Repaired endgame inputs so World Matrix and Quintessence are independent branches; World Prism consumes both. Added the named endgame components and dependencies to the registries.
- Rebalanced Mining Essence density, stage counts/times, Stage-1 XP, and expected XP tables while preserving five stages and normal metal values. The source includes the required rebalance note.
- Expanded Home/Estate/Workers into a system design for five residence stages, Station I-V, worker assignments/proficiency/gear/tools/reserves/protection/schedules, housing, farming land, Bank logistics, sinks, and Holdings. It adds no Construction XP and is not a profession.
- Normalized worker stages: Lodge production workers and Manor field/gathering crews follow the requested profession lists.
- Updated the first-pass report to mark it historical and to retract its incomplete registry and no-dead-resource claims.

## Canonical changes

- **Filaments:** Runic Filament is the T4-T6 grade and feeds Tailoring Fine Weave at L35; Aether Filament is the T7-T9 grade; Astral Filament is T10. Tailoring Runic Weave uses Aether Filament in T7-T9, Runic Bowstring uses Runic Cloth + Aether Filament, and Astral recipes use Astral Filament. Runic, Aether, and Astral Filaments each have registered consumers.
- **Early Fletching:** Simple Bowstring is Tailoring L5. Alder limbs/stock unlock at Fletching L2/L3; Basic Trigger/Winch at Smithing L5/L8; Birch reinforced limbs/heavy stock at Fletching L7/L8; Resin at Woodcutting L7. Alder Shortbow L5, Alder Light Crossbow L6, Birch Longbow L8, and Birch Heavy Crossbow L9 therefore have inputs available by their displayed gates.
- **Fishing Rods:** Reed, Alder, Ironwood, Silverpine, Emberwood, Frostbark, Stormwillow, Aetherwood, Umbralwood, and Starwood Rods each use a Utility Blank plus thread/binding and tier-appropriate metal fittings, precision parts, or Resin. `Umbralwood Rod` is canonical.
- **Cooking/Fruit:** `[Fruit]` is a virtual recipe selector, not an inventory item. Four progression bands provide sinks without adding a recipe per fruit or quality tiers.
- **Endgame:** World Matrix uses frontier structural materials, Worldsilk, and T10 magical inputs. Quintessence uses Wildheart Essence, Genesis Fruit, Astral Essence, and Astral extracts. World Prism is the downstream convergence recipe.
- **Mining XP:** Essence deposits retain five stages and now sit near their ordinary tier comparators; see the calculated values below.

## Removed aliases/items

| Retired alias | Canonical resolution |
|---|---|
| retired alias: Refined Runic Filament | Runic Filament |
| retired alias: Umbral Filament | Aether Filament |
| retired alias: Aether/Umbral Filament | Aether Filament |
| retired alias: Dense Cloth Strips | Dense Cloth |
| retired alias: Runic Cloth Strips | Runic Cloth |
| retired alias: Astralweave Strips | Astralweave |
| retired alias: Leatherworking Wrap | Selected named Grip Wrap / Binding by Knife tier; no generic item |
| retired alias: Umbral Rod | Umbralwood Rod |
| retired alias: former World Matrix-to-Quintessence dependency | Independent upstream branches; World Prism consumes both |

No retired alias is an active recipe input. Cloth Strip intermediates are absent from current recipe inputs.

## Level changes

| Content | Previous / superseded gate | Current gate |
|---|---:|---:|
| Simple Bowstring | 8 | 5 |
| Runic Filament | 34 | 35 |
| Aether Filament | 64 | 65 |
| Astral Filament | 94 | 95 |
| Astralite Ring Frame | 94 | 95 |
| Astral Trap Assembly | 94 | 95 |
| Cobalt Knife / Rugged Grip Wrap contract | Smithing 28 | Smithing 25 / Leatherworking 25 |
| Emberite Knife / Ember Grip Wrap contract | Smithing 48 | Smithing 45 / Leatherworking 45 |
| Aetherite Knife / Aether Binding Set contract | Smithing 78 | Smithing 75 / Leatherworking 75 |
| Roasted Root Bowl | 7 | 8 |
| Orchard Fruit Preserve | Added | Cooking 38 |
| Stormfruit Bake | Added | Cooking 68 |
| Astral Fruit Banquet | Added | Cooking 98 |

Mining Essence unlocks remain L1/L31/L61; their rewards, density, and cycle times were rebalanced at those gates.

## Registry statistics

| Registry | Data rows |
|---|---:|
| Item Registry | 899 |
| Recipe Registry | 646 |
| Profession Gear Matrix | 404 |
| Unlock Dependency Matrix | 309 |

The Gear Matrix has one compression decision on every row: 316 non-Tool clothing/jewelry items are **keep** decisions, preserving profession-specific effects; 88 Tools are **upgrade/replacement** progressions. No gear was merged or retired because the listed effects and upgrade roles are distinct. This includes the T3/T5/T7/T9 clothing sets and each profession's jewelry; the Gear Matrix is the item-by-item review record. Starter grants remain non-recipe entries.

## Mining Essence XP/hour comparisons

Baseline XP/hour is calculated as expected full-cycle XP divided by the listed full-cycle time, multiplied by 3,600.

| Tier comparison | Deposit | Cycle XP | Cycle time | Approx. XP/hour | Relative to comparator |
|---|---|---:|---:|---:|---:|
| T1 | Copper Vein | 71.4 | 48.0 s | 5,355 | baseline |
| T1 | Raw Essence Seam | 100.65 | 57.0 s | 6,357 | +18.7% vs Copper |
| T4 | Argent Vein | 285.6 | 57.0 s | 18,038 | baseline |
| T4 | Runic Crystal Seam | 380.8 | 63.0 s | 21,760 | +20.6% vs Argent |
| T7 | Stormiron Vein | 797.3 | 66.0 s | 43,489 | baseline |
| T7 | Aether Essence Core | 1,142.4 | 101.25 s | 40,619 | -6.6% vs Stormiron |

## Validation results

- Baseline profession docs: **14 present**; no new profession added.
- Gameplay implementation files added: **0**; changed files are documentation under `Docs/`.
- Item IDs: **899 unique**; blank/unresolved Producer System fields: **0**.
- Recipe IDs: **646 unique**; Gear Matrix-to-Item Registry links missing: **0**; Gear Matrix-to-Recipe Registry links missing: **0** (starter grants are explicitly marked).
- Named physical recipe input names unresolved in Item Registry: **0**. Bracketed selectors are virtual families, not physical items.
- Recipe source-input gaps: **306** equipment recipes have no exact physical input names/quantities in their source canon. They are labeled as unspecified in the Recipe Registry rather than filled with invented costs. This is a known source gap, not a dangling item name.
- Cross-profession named input occurrences checked: **261**; unlinked in the dependency matrix: **0**.
- Numeric dependency rows checked: **94**; producers later than the consumer by more than 3 levels: **0**. Source-defined and post-100 gates remain nonnumeric by canon.
- Known intentional numeric mismatches over 3 levels: **none**. Source-defined producer gates, virtual family selectors, post-100 project gates, and starter grants are intentionally nonnumeric/non-recipe contracts and are identified as such in the registries.
- Confirmed dead resource items: **0**. Of 173 resource rows, 45 have literal exact-name recipe consumers; the remaining 128 map to source-backed consumers: 20 Farming crop outputs through Cooking tags, 40 Fishing species through fish selectors, 41 Foraging ingredients through cooking/extraction/textile families, 20 Hunting meat/hide outputs through cooking/Leatherworking families, Stone/Granite through construction projects, and five Woodcutting heartwood/specialty-timber outputs through specialist/project sinks. Twenty non-inventory tree-node rows and five extraction/table artifacts were removed from the physical registry.
- Retired-name searches were run case-insensitively across `Docs/`. Matches for retired phantom names are limited to explicitly marked historical/retired-alias report text; none is an active recipe input. Roasted Root Bowl is Cooking L8 in all current source roadmap/table entries. The endgame graph has no World Matrix/Quintessence cycle.
- Filament, Rod, early weapon, Hunting Knife, Fruit, endgame, Home/Estate, and Mining checks are documented above and cross-checked against the four registries.

## Profession Gear Compression Decisions

The Gear Matrix classifies each of its 404 unique rows, including every profession's T3/T5/T7/T9 clothing rows and profession jewelry. All 316 clothing/jewelry records are retained; all 88 Tools remain tier upgrades or replacements. There are no merged or retired gear records, so there are no old-to-new gear merges to list. This decision preserves the distinct effect on each named profession item instead of flattening the sets. The per-item decisions, slots, effects, source links, and replacements are recorded in `Docs/Registries/PROFESSION_GEAR_MATRIX.md`.

## Remaining design questions

- The source documents do not define exact physical inputs or quantities for **306 equipment recipes**. Those costs must be designed before implementation; the Recipe Registry marks each gap.
- Tailoring and Runecrafting both use the four display names Runewright Hood, Robe, Gloves, and Legwraps for different profession effects. IDs distinguish the items, but their shared UI names need a canon decision.
- World Matrix, Quintessence, World Prism, and endgame project quantities/batch economics remain TBD.
- Combat effect magnitudes, shop prices, gold/resource costs, and final worker/residence capacity tuning remain balance decisions in their source documents.
