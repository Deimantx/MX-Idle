# Profession Integration Hardening Report

**Status:** Canonical documentation pass v1.0  
**Scope:** Documentation and registries only; no gameplay implementation code added.

## Changed

### Modified files

- `Docs/Professions/00_PROFESSIONS_OVERVIEW.md` — replaced the brainstorm/review draft with the concise canonical 14-profession overview, dependency map, materials, and implementation rules.
- `Docs/Professions/01_MINING_v1.1.md` — aligned Essence source gates and required Pickaxes to Runecrafting grade bands; clarified Prismatic Dust's independent Mining source.
- `Docs/Professions/02_SMITHING.md` — added explicit Tool upgrade, Projectile Head Bundle, crossbow mechanism, and kit metal-component contracts.
- `Docs/Professions/03_FISHING.md` — linked to shared canon; Fishing retains Rod stats while Fletching owns Rod recipes.
- `Docs/Professions/04_COOKING.md` — added a real `[Fruit]` sink and clarified Cooking's Fish Oil ownership.
- `Docs/Professions/05_WOODCUTTING.md` — replaced phantom Handle sourcing with Fletching Utility Blank ownership.
- `Docs/Professions/06_FLETCHING.md` — normalized ammo/mechanism names; added all ten Rod recipes and five reusable Trap Kit assembly recipes; Utility Blank replaces Handle.
- `Docs/Professions/07_FORAGING.md` — linked to shared canon; retains Resin exclusion and wild Fibre ownership.
- `Docs/Professions/08_TAILORING.md` — aligned Thread unlocks with Foraging Fibre gates, normalized Bowstring inputs, and removed undefined Cloth Strip intermediates.
- `Docs/Professions/09_RUNECRAFTING.md` — linked Essence bands and protected Catalyst reserves to shared rules.
- `Docs/Professions/10_HUNTING.md` — normalized reusable Trap Kit inputs and gates; Fletching owns assembly and Hunting equips/uses kits.
- `Docs/Professions/11_LEATHERWORKING.md` — replaced generic metal Rivet Bundle with existing Smithing fittings.
- `Docs/Professions/12_FARMING.md` — documented unique persistent Farm Management Loadout item ownership and offline behavior.
- `Docs/Professions/13_ALCHEMY.md` — documented protected-item and Catalyst reserve behavior for automated brewing.
- `Docs/Professions/14_JEWELCRAFTING.md` — linked to shared canon and item/recipe ownership registries.

### Folder rename

- `Docs/Profeesions/` → `Docs/Professions/` (all 14 documents retained; internal references updated where present).

## Key contracts fixed

- Mining provides Raw Essence at L1/T1, Runic Crystal at L31/T4, and Aether Essence at L61/T7. The associated pickaxe requirements now match those gates. Astral Essence remains a Runecrafting refinement in T10.
- Smithing produces one Projectile Head Bundle family per metal tier; Fletching consumes it for either Arrows or Bolts.
- Smithing owns Basic, Reinforced, Precision/Runic, and Astral crossbow mechanism families.
- Fletching owns the ten Fishing Rod recipes and reusable Trap Kit assembly; Fishing owns Rod stats/effects; Hunting owns use/methods.
- Physical tool upgrades use the previous Tool, current-tier metal, and matching Utility Blank or named grip. T0 is granted by Chronicle/introduction or cheap Shop acquisition.
- Tailoring's Thread recipe gates now match Foraging Fibre availability (L5 through L95). Simple Bowstring is explicitly L8; Reinforced/Runic/Astral remain L38/L68/L98.
- Hunting's L32 Ambush uses Hardened Fittings, already available at Smithing L18. Later optional trap kits use existing Smithing/Runecrafting outputs.
- `[Fruit]` is a semantic Cooking ingredient tag, not an inventory item. Roasted Root Bowl now uses a Farming Orchard fruit at Cooking L8, matching first fruit availability.
- Farming physical loadouts are unique equipment assignments; offline crops use the same economic formulas.
- Worker rules use the shared Proven-at-Mastery-10 contract, Proficiency (not player XP/Mastery), established-content frontier rule, and protected-item/reserve safety order.
- Home progression is **House → Lodge → Manor → Estate → Holdings**, separate from profession levels. Activity Planner and event-based offline contracts are shared.

## Removed / merged item names

| Old name / separate family | Canonical name | Reason |
|---|---|---|
| `<Metal> Arrowhead` + `<Metal> Bolt Head` (20 stacks) | `<Metal> Projectile Head Bundle` (10 stacks) | Shared Smithing component for either ammunition type |
| Light Trigger Assembly / Heavy Winch Assembly | Basic Trigger Assembly / Basic Winch Assembly | Use the compact canonical mechanism ladder |
| Frostsilver Mechanism | Argent Mechanism | Reuse existing Smithing component family |
| Aetherite Mechanism | Precision Mechanism | Reuse existing Smithing component family |
| Astralite Mechanism | Umbral Reinforcement | Reuse existing Smithing component family before Astral kit use |
| Feather/Sinew Cord | Sinew Cord | Hunting uses an existing Leatherworking output |
| Runic Cord | Sinew Cord + Aether Filament | Use existing physical and magical cord inputs |
| Astral Cord | Sinew Cord + Astral Filament | Use existing physical and magical cord inputs |
| generic metal Rivet Bundle | Hardened Fittings / Argent Mechanism / Tempered Assembly by tier | Smithing already owns these component families |
| Dense Cloth Strips | Dense Cloth | Existing Tailoring Weave output |
| Runic Cloth Strips | Runic Cloth | Existing Tailoring Weave output |
| Astralweave Strips | Astralweave | Existing Tailoring Weave output |
| Worldsilk Cord | 2 Worldsilk Thread + 1 Astral Filament | Uses the existing Worldsilk/Filament outputs |
| unqualified Tool Handle | matching-tier Utility Blank | Fletching already produces the wooden structure |
| Quintessence → World Matrix | Removed as a dependency | It conflicts with World Matrix → Quintessence; both now converge downstream at World Prism |

`Bone Rivet Bundle` remains a separate Leatherworking output and was not merged with metal fittings. No Fish Oil, Resin, or Prismatic Dust producer ownership was silently changed.

## Level changes and normalized gates

| Content | Old gate | Canonical gate | Reason / affected content |
|---|---:|---:|---|
| Raw Essence Seam | 28 | 1 | Runecrafting T1 source; pickaxe requirement Worn Pickaxe |
| Runic Crystal Seam | 58 | 31 | Runecrafting T4 source; pickaxe requirement Copper Pickaxe |
| Aether Essence Core | 88 | 61 | Runecrafting T7 source; pickaxe requirement Frostsilver Pickaxe |
| Tailoring Thread tiers | 1/11/21/31/41/51/61/71/81/91 | 5/15/25/35/45/55/65/75/85/95 | Match actual Foraging Fibre unlocks |
| Master Trap Kit | 52 | 54 | Match Frostbark Utility Blank availability; optional kit, not method gate |
| Aether Trap Assembly | 72 | 74 | Match Aetherwood Utility Blank availability; optional kit |
| Astral Trap Assembly | 92 | 94 | Match Starwood Utility Blank availability; optional kit |
| Roasted Root Bowl | 7 | 8 | First `[Fruit]` Orchard fruit is available at Farming 8 |

Simple Bowstring is locked to the Level 8 gate already shown by the current Tailoring roadmap; it had no independent complete recipe gate elsewhere to preserve.

## New required components and recipes

- Ten `<Metal> Projectile Head Bundle` Smithing outputs.
- Eight crossbow mechanism recipes: Basic Trigger/Winch, Reinforced Trigger/Winch, Precision Trigger, Runic Winch, Astral Trigger/Winch.
- Ten Fletching Fishing Rod assembly recipes.
- Five Fletching reusable Trap Kit/frame recipes.
- A shared Tool upgrade contract and explicit multi-profession Gardening Set, Apothecary/Retort Kit, and Jeweler's Tools/Lapidary Kit metal-component ownership.
- No new profession or gameplay code.

## Remaining open questions

- Final Combat balance remains intentionally open: weapon DPS, armor, Accuracy/Crit, jewelry/effect magnitudes, Ammo/Rune burn, and food healing remain design anchors until Combat Core is locked.
- Gold amounts, Shop prices, sale values, and final worker capacity/economy tuning remain intentionally unnumbered.
- Exact post-100 quantities for World Matrix, Quintessence, World Prism, and endgame project recipes remain intentionally deferred in the source designs; the DAG fixes their dependency order without guessing those quantities.
- Exact action-time/XP recalculation after moved level gates is a balance pass; Mining's existing density/reward/XP formulas were retained as requested.

## Validation performed

- Confirmed all 14 profession documents are present under `Docs/Professions/`.
- Confirmed the old misspelled folder is absent and no live path references remain.
- Confirmed canonical global rules, overview, four registries, Home/Estate/Workers, Activity Planner, Endgame DAG, and this report exist.
- Searched for required stale names and updated their live recipe/source uses; historical alias explanations in this report/registries are intentional. No missing producer or dead resource was found among the audited cross-profession families.
- Checked internal Markdown link targets and endgame DAG order; no known bootstrap cycle remains in the audited cross-profession contracts.
- Every consolidated integration item and every named undefined component in the requested search has a canonical producer/source and consumer; profession-specific rosters remain itemized in their owning documents to avoid duplicating their detailed tables. Stable item/recipe IDs follow deterministic owner-and-slug templates because the legacy docs had no IDs to collide.
- No gameplay implementation code was added.





