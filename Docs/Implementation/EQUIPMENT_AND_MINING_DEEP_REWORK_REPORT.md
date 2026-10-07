# Equipment and Mining Deep Rework

## Scope and implementation

Audited from `3e327f30c7b6ad4bec3b62cfc8520fcef561691b`. Added Ring, Necklace, and Cape to the equipment model and migrated v6 saves to v7 with the new slots initialized empty. Existing bank contents and equipped gear are retained. Equipment stats now flow through shared combat aggregation, and equip/unequip uses a bank-safe action path, including two-handed weapon/off-hand handling and combat restrictions. The Equipment screen now presents a distinct nine-slot loadout, Armory, item comparison, empty and locked states, and profession tools.

Mining now preserves each deposit's saved density when switching deposits. Its screen has a separate Mine Face, compact stage rail, deposit search and filters, density/next-swing feedback, and Field Operations layout. Critical-rate and critical-damage values are formatted as percentages in comparison and item tooltips. Developer-only fixtures cover accessory slots without changing live item progression or balance.

## Verification

- `npm test`: 89 tests passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; Vite reports the existing 565.98 kB minified JavaScript chunk size warning (500 kB threshold).
- `npm run check:text`: passed; 116 source files scanned.
- `git diff --check`: passed.
- Browser review: Equipment and Mining at 2560x1440, 1920x1080, 1440x900, and 390 px wide; UI scale 100/120/140%; text scale 100/130/140%; reduced motion; Ring tooltip by hover and keyboard focus; empty and locked comparisons; save/reload; and mining activity continuity while navigating. No horizontal overflow at the reviewed sizes/scales, and no browser console or page errors. Reload returned to profile selection; Continue restored the equipped Ring/Cape and running activity. Mining density continued decreasing while another screen was open.
- `npm run qa` was attempted but fails before the changed flows: `tests/phase1-audit-smoke.mjs:24` expects one `.level-orb` element and receives zero. This is a stale smoke-test selector, not a failure in the Equipment or Mining browser checks above.

## Browser captures

Captures are in `artifacts/qa/equipment-mining/`:

- Equipment layouts: `equipment-1440x900.png`, `equipment-1920x1080.png`, `equipment-accessories-2560x1440.png`, `equipment-ring-compare-2560x1440.png`, `equipment-empty-slot.png`, `equipment-locked-comparison.png`.
- Equipment scaling: `equipment-ui-100.png`, `equipment-ui-120.png`, `equipment-ui-140.png`, `equipment-text-100.png`, `equipment-text-130.png`, `equipment-text-140.png`.
- Mining: `mining-field-operations-2560x1440.png`, `mining-header-running-2560x1440.png`, `mining-running-1920x1080.png`.
- Structured tooltips: `tooltip-ring.png`, `tooltip-necklace.png`, `tooltip-cape.png`, `tooltip-pickaxe.png`, `tooltip-copper-ore.png`, `tooltip-fieldstone-quarry.png`.
