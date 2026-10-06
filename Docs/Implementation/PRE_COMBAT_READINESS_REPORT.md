# Pre-Combat Expansion Readiness

**Audited local HEAD:** `e9e1b24010c390c02624f47e028e1f8337fd491d` (the current worktree was audited; GitHub `main` was not used). The standalone #32 task file was absent locally, so its implementation report and the runtime were checked against the #33 requirements.

## #32 audit checklist

- **DONE** — Save v5/key, v1–v4 migration, stale-ID normalization, preserved compatible gear/progress, and removal of active Mastery behavior.
- **DONE** — Fishing spot levels T1–T10, explicit rod progression, quantity-aware cooking alternatives, stable progress phases, and Auto Eat capped at 99%.
- **DONE** — Mining and Smithing 1–100 content, registry-derived equipment browsing, tier/search filters, bounded lists, and comparison panels. All 23 deposits validate; Worldheart is now playable with the Astralite Pickaxe.
- **DONE** — No source/runtime mojibake found; roadmap names Combat World / Content Expansion as the immediate next task.
- **REGRESSION** — None found in the audited flows.

## #33 readiness checklist

- **DONE** — Generic Combat Areas, enemy/phase/sequences, requirements, loot, status vocabulary, damage components, typed nine-resistance aggregation, weapon/off-hand rules, special display, and shared combat calculators.
- **DONE** — Combat UI and Activity HUD read current area, target, equipment, intervals, and food state from registries/state; no Copper-specific combat path remains in the generic shell.
- **DONE** — Simulation is split into profession and Combat resolvers; combat death/offline stop and reload rewards have regression coverage. Generic DevTools selectors cover gear, tools, items, skills, food, and enemies.
- **DONE** — Content validators and targeted migration, Fishing/Cooking, Mining/Smithing, Combat, and equipment tests pass.
- **PARTIAL (deferred by scope)** — The live Combat content remains the Broken Road slice. Additional T1–T10 areas, elites, dungeons, bosses, Bestiary UI, and final balance belong to the next expansion; Combat state already represents area/dungeon/encounter/run boundaries.
- **MISSING** — None blocking this readiness gate.

## Fixes in this pass

- Removed the remaining Worldheart endgame lock and covered its selection/start/offline action path.
- Added explicit Fishing T2/T10 gate coverage and narrow-screen wrapping for the nine resistance values.
- Updated the focused browser smoke to equip the required T10 pickaxe, inspect T10 Smithing and Combat gear, fight, configure Food reserve, stop, reload the profile, then revisit Fishing/Cooking.
- Updated the development roadmap for the next implementation task.

## Verification and remaining debt

- `npm test` — 54 tests passed across 7 files.
- `npm run typecheck` — passed.
- `npm run build` — passed.
- `node tests/phase1-audit-smoke.mjs` — passed; no browser console errors. Includes Equipment at 768px and Combat at 390px without horizontal overflow.
- `node --check tests/phase1-audit-smoke.mjs` — passed.
- Non-blocking debt: broader Combat content and final balance are intentionally deferred. `git diff --check` also reports trailing whitespace in previously staged profession/report documentation; no source/runtime whitespace issue was reported.

## Readiness

**READY FOR COMBAT EXPANSION**
