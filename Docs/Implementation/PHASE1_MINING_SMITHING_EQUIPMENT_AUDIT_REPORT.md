# Phase 1 Mining, Smithing, and Equipment Audit

**Status:** Implemented; focused verification recorded below  
**Save schema:** v5 (`mx-idle-save-v5`)  
**Scope:** Remove the former Mastery system, complete broad Mining and Smithing T1-T10 content, make Equipment metadata driven, and audit Fishing/Cooking/Combat sustain integration.

## Changes

- Removed active Mastery types, events, math, runtime modifiers, DevTools, UI, and tests. Save migration accepts v1–v5 and discards old Mastery properties without compensation.
- Expanded Mining to 23 deposits across ten tiers, with tier tools, ore, quarries, catalysts, gems, essence, structural by-products, core materials, stage rolls, and a gated Worldheart deposit. Mining resolution now lives in `systems/mining/miningResolver.ts`.
- Added ten ingots, ten alloys, eleven hammers, and generated tiered melee weapons, armor, shields, pickaxes, and hammers. Fishing, Cooking, and Smithing resolution/timing rules live in their profession modules; the shared simulation loop retains transactions, event delivery, and elapsed-time sequencing.
- Rebuilt Equipment around item metadata, combat and profession loadouts, slot filters, owned-item search, a scrollable candidate list, and a compare panel. Smithing recipe registration now preserves Mining tool and Smithing hammer metadata. Fishing tackle is available from its Fishing level unlock.
- Kept Fishing Spot unlocks at levels 1, 11, ..., 91; repaired the Barbless Master Hook bait-preservation ID; retained stable activity serials; and kept cooking alternatives quantity-aware.
- Clamped Auto Eat to 99%, replaced the combat food dropdown with a searchable owned-food picker, removed player-facing phase labels from the pantry panel, and corrected visible mojibake in source UI strings.
- Updated active profession and roadmap docs with Mastery deprecation notices, replaced the blanket QA policy in `AGENTS.md` with risk-based checks, updated README save/QA guidance, and added `artifacts/qa/` plus `artifacts/qa-professions/` to `.gitignore`.

## Verification

- `npm test` - 46 tests passed across six files.
- `npm run typecheck` - passed.
- `npm run build` - passed.
- `npm run qa` - focused browser flow passed across Mining, Smithing, Equipment, Fishing, and Cooking; Equipment also fit at 768px; no browser console errors.

The former broad `tests/first-playable-flow.mjs` remains as a historical flow and is no longer the `npm run qa` entry point. The active smoke flow is `tests/phase1-audit-smoke.mjs` and does not write screenshots.

## Remaining content boundary

Worldheart remains locked because its endgame gate has not been authored. Combat is still limited to the current Broken Road slice; the broader T1-T10 world expansion remains a separate task. Balance values are provisional.
