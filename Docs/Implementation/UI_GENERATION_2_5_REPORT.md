# UI Generation 2.5 Implementation Report

**Starting commit:** `729c0c6e10414a59715bb59ed5be1f0cc81ef010`  
**Scope:** player-facing UI and browser QA; gameplay formulas, balance, progression, and save formats were not changed.

## Changes

- **Shell:** Added a reusable three-zone top bar with a centered, screen-aware XP ring, profile context, global gold, save status, and Settings. The Activity HUD now has compact idle and expanded active states; its chooser navigates without starting work. Shared shell sizing tokens reserve room for the dock, and the old XP orb was removed to prevent duplication.
- **Bank:** Reframed it as an adventurer’s stash with item categories, keyboard search and clear, item-forward tiles, and an item inspector. Removed capacity implementation copy, archive terminology, and duplicated gold. Offering values retain their correct non-gold meaning.
- **Mining:** Reworked the lower information area around Current Shift, the equipped tool, stable yield telemetry, seam timing, and pick profile. Removed the generic operations framing and repeated strike-time readout.
- **Smithing:** Put the furnace temperature instrument in normal layout flow, separated chamber readiness from action progress, removed duplicate timing and heat copy, and tightened charge/output/tool/action hierarchy.
- **Shared polish:** Added searchable, grouped DevTools navigation with live context; improved shell, activity dock, and responsive states; fixed the Profile Select icon; and added `npm run check:text` for source text integrity.
- **Preserved:** Existing Generation 2 profession-specific screen architecture, game mechanics, save data, and balance.

## Source scale

Approximately **620 meaningful source lines added or changed** across `src/` (tracked additions and deletions plus the new top-bar component). Tests, screenshots, and this report are excluded.

## Browser review

Captured under `artifacts/ui-generation-2-5/`:

- 2560×1440: Smithing, Mining (idle and active), Bank, Equipment, Fishing, Cooking, Combat, and DevTools.
- 1920×1080: Smithing, Mining, Bank, and Equipment.
- 1440×900 with larger UI and text: Bank and Equipment.
- Smithing at 80%, 120%, and 140% UI scale; default 100% is covered by the 2560×1440 capture.
- 768px and 390px responsive flow checks.

Reviewed the Smithing furnace flow, centered orb, Bank layout, and Mining lower shift modules in the captures. The chamber instrument stays in document flow and no browser console errors were reported in either focused QA flow.

## Verification

- `npm run check:text` — passed; 101 source files scanned.
- `npm test` — passed; 77 tests across 9 files.
- `npm run typecheck` — passed.
- `npm run qa` — passed; no console errors.
- `npm run qa:professions` — passed; no console errors, fish catch and all 43 cooking recipes verified.
- `npm run build` — passed. Vite reports the existing single JavaScript bundle is 511 kB minified, above its 500 kB advisory threshold.
- `git diff --check` — passed.
