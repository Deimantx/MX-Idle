# Combat Post-Hardening Audit

Implemented the #36 audit fixes against the structured combat action data.

- Corrected Silt Ward, Pale Ward, Heat Guard, Moonbound Guard Break, Umbral Break, and Hollow Decree scopes and durations; removed the competing self-resistance scope field and validated effect data.
- Clear temporary Combat statuses on enemy defeats, Dungeon transitions, player death, target switches, and leaving Combat. Food, HP, and other sustain state remains intact.
- Removed stored enemy minimum-hit values. Combat inspection derives the displayed minimum as 20% of Max Hit.
- Boss phase changes reset sequence position, action serial, and the timer for the new phase’s first action.
- Pure self buffs skip hit rolls; Aether Venom explicitly keeps its hit roll. Combat damage now emits Attack, Hitpoints, and Defence XP events, batched into one compact feedback entry per attack.
- Hybrid damage components now use absolute multipliers. Molten Hammer resolves as 1.35× Crush plus 0.35× Fire. Resistance-down summaries and off-target Dungeon boss previews were corrected. Attack, Hitpoints, and Defence XP still emit their regular events, but the feedback queue displays a compact combined XP entry per simulation step.
- Added targeted Combat lifecycle, phase timer, XP feedback, and content regressions.

Verification: targeted Combat and XP adapter tests passed (23 tests). The final `npm test` passed (77 tests), `npm run typecheck` passed, and `npm run build` passed. Focused browser smoke passed with no console errors; it confirmed Pale Ward and Hollow Decree inspection, a clean Dungeon encounter handoff, and a fresh 2.9-second phase action timer.
