# Feedback & Game Feel Generation 3

**Project:** MX-Idle  
**Starting commit:** `fca1a3efb35744f68975c3c6feac6fdb8eec82dd`

## Implementation

- Replaced the screen-selected topbar XP orb with one temporary global HUD. Adapted XP and level-up `GameEvent`s determine visibility, pulses and ordering; the current saved skill state supplies level and ring progress. Combat batches remain separate per skill. Each skill expires independently after ten idle seconds plus a 750 ms fade. Circle and number settings include the compact feed fallback, and legacy `showXpOrb` / `showXpDrops` values normalize into the new fields.
- Added structured item tooltip models for resources, combat weapons, armor, offhands, profession tools and food. The models use item, weapon, armor, offhand and recipe registries for stats, requirements, weapon specials, owned counts and equipped state. The low-level tooltip supports explicit placement, delay, collision handling, repositioning, focus, touch and Escape dismissal.
- Added presentation-only simulation events for mining strikes, smithing heat/smelting/forging steps, and combat hit/miss/critical/special/phase/enemy-hit outcomes. Existing fishing, cooking, mining-stage and reward events feed short screen-local acknowledgements. Equipment uses its loadout pulse and bank selection uses its selected state.
- Replaced per-cue AudioContext creation with one lazy shared context, a four-voice cap, cue cooldowns/priorities, master volume and mute handling. Routine XP ticks are silent.
- Added UI Lab feedback previews. Preview events never change saved XP, inventory, gold or progression. Added permanent event-source, tooltip, local-feedback and reduced-motion rules to `AGENTS.md`.
- Removed the old screen-driven orb and unused XP-drop/orb CSS.

## Validation

- Focused unit tests cover XP batching/formatting, representative weapon/tool/food tooltip models, settings migration and event-to-feedback mapping.
- `tests/feedback-game-feel-gen3.mjs` checks Fishing feedback while Mining is open, three combat circles, all seven circles, 10-second expiry, all four XP display settings, tooltip opening, reduced motion, console errors, and no topbar-utility overlap at 1920×1080 and 1440×900.
- Captured and inspected screenshots are in `artifacts/feedback-game-feel-gen3/`: `fishing-active-mining-screen.png`, `combat-multi-xp.png`, `bank-item-tooltip.png`, `equipment-weapon-tooltip.png`, `smithing-action-feedback.png`, `mining-action-feedback.png`, `cooking-action-feedback.png`, and `all-skills-1920.png` / `all-skills-1440.png`.
- `npm run check:text`: passed (110 files).
- `npm test`: passed (11 test files, 82 tests).
- `npm run typecheck`: passed.
- `npm run build`: passed. Vite reports a 527.96 kB main JavaScript chunk and emits its standard advisory that chunks above 500 kB may benefit from code splitting; this is not a build failure.
- `git diff --check`: passed (Git emitted only line-ending normalization warnings for tracked files).
- Change scale: 28 tracked files modified (243 insertions / 171 deletions), plus 406 lines across new runtime feedback, tooltip and XP HUD modules; tests, documentation and nine screenshots are additional.

## Scope and known debt

The work changes feedback presentation and adds non-authoritative event metadata; it does not change combat calculations, XP rates, action timing, loot, recipes or save progression. Tooltip V2 currently covers item/equipment/food plus the XP skill inspection; dedicated status-effect tooltip variants and richer `used for` relationships remain future content work. Routine mining and forge strike sounds remain intentionally quiet; stronger event cues are used for milestones, catches and important combat feedback. Browser QA focused on the changed feedback flows and responsive HUD overlap; it was not a prolonged multi-hour idle-session soak test.
