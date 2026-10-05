# Phase 1B: T1 Mining + Smithing Foundation & Completion

**Status:** Implemented; verification recorded below  
**Scope:** T1 Copper Vein and Fieldstone Quarry, Copper Smelting, T1 Forging, profession tools, combat equipment data, v3 save migration.

## Player loop

The T1 path now runs through Copper Vein mining, Mining 5 Fieldstone Quarry, Copper Ore smelting, recipe-based forging, Copper Pickaxe and Hammer upgrades, and Copper combat equipment. Both Mining targets use the shared five-stage model and retain independent Mastery and runtime progress. Switching away from a partly worked stage abandons that stage's remaining density; stopping and resuming preserves it. Completed rewards and lifetime counters persist.

## Content and simulation

- Domain registries live in `src/game/content/mining`, `smithing`, `items`, and `combat`. `firstSlice.ts` is a compatibility barrel; it no longer owns the content definitions.
- Stage density, expected quantity, XP, Mastery XP, Mining Power, and strike timing come from shared formulas. Copper and Fieldstone use their authored base density, quantity, XP, and strike values.
- Mining stage rewards include primary material, Copper Vein rubble, weighted deposit gems, and Core Fragments. Copper Opal chances use the shared stage rare multipliers. Core Fragment chances use the explicit `[0, 0, 1, 5, 25]` stage curve on a 0.05% base chance, giving 0%, 0%, 0.05%, 0.25%, and 1.25% before the Mastery 75 modifier. Fieldstone's gem roll stays disabled because the canonical Opal/Sapphire weights are not specified.
- Copper Ingot Smelting is its own recipe registry. Forging recipes carry their own level gates, inputs, category, output, work multiplier, and temporary dependency metadata where required.
- Recipe Mastery, preservation, workpiece heat, hammer power, strike time, and reheat are simulated through the same active/offline path. Tool upgrade inputs are reserved as one transaction; the equipped worn tool is consumed and held through save/reload before the improved tool is auto-equipped.
- Copper melee weapon, heavy armor, and shield stats are kept in combat content data. Battle Axe critical damage, Mace Crush penetration, shield interval penalty, and Concussive Blow's physical resistance reduction use the same registered values in gameplay.

## Save compatibility

Character saves use schema v3. The migration maps legacy Bank item IDs, equipped items, Mining deposit IDs, Smithing recipes, and Mastery into namespaced IDs while retaining the player's levels, bank, selected deposit state, and active reservation. Mastery levels are reconstructed from saved Mastery XP to avoid stale milestone values. Profile migration keeps its existing legacy-save preservation behavior.

The tool-handle dependency for the T1 Copper Pickaxe and Copper Smithing Hammer is explicitly temporary. Their recipes consume the worn tool plus the canonical Copper Ingot cost. The future Woodcutting/Fletching component can replace the bridge for future crafts without invalidating already crafted tools.

## Verification

- `npm run typecheck` — passed.
- `npm run build` — passed.
- `npm run test -- --run` — passed, 33 tests across 5 files. Coverage includes registry references, stage curves, deposit switching, namespaced save migration, deterministic active/offline Mining and Smelting, forging reservations, tool upgrade save/reload, preservation, hammer work/ETA, and canonical melee data.
- `npm run qa` — passed. The Playwright flow exercised profile/startup and migration flows; Mining and the partial-stage switch modal; Smithing category tabs, Smelting, and Forging; Equipment and Combat; Bank tooltips; and reduced-motion/scale behavior at 2560×1440, 1366×768, and 768×900. The browser run reported no console or page errors.

## Known scope limits

- Fieldstone rare gems remain disabled until an authoritative Opal/Sapphire weight is available.
- Raw Essence Seam, Copper Spear, later-tier content, and the permanent Woodcutting/Fletching utility component remain deferred by the Phase 1 scope.
- Mastery XP curves and broad combat progression values remain provisional.
