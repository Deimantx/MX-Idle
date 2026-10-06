# Phase 1 Full Combat World Report

**Audited starting commit:** `7a90c3469d6026969ed80807a1cd730541038740`

## Delivered

- Fixed the Attack 1 Copper Sword onboarding path, restored Sword Slash/Stab stances, made all Battle Axes one-handed and shield-compatible, and applied the T1 defensive equipment exception.
- Corrected stamina regeneration, damage-based Combat XP, the 20–100% hit roll, critical damage, style matchups, three player evasions, scoped resistance changes, percentage evasion reduction, Chill timing, deterministic DoTs, self buffs/heals, hybrid damage, and separate multi-hit accuracy rolls.
- Migrated saves and profiles to v6 with permanent Combat tier, Elite, Boss, Dungeon, and unique-hook progression.
- Added the authored T1–T10 roster: 10 normal Areas, 40 normal enemies, 10 Elites, 10 Dungeons, 20 Dungeon-only enemies, 10 Bosses, and 80 enemy identities total. Tier combat budgets remain centralized and provisional.
- Added 30 Offerings, 10 Elite Components, 10 protected Boss Components, boss first-kill progression, and permanent tier unlocks.
- Reworked the Combat browser around Tier → Area / Elite / Dungeon, with encounter inspection, resistances, evasions, deterministic actions, boss phases, unlock progress, and the selected enemy inspector. DevTools now use generic tier/area/enemy/dungeon controls.
- Updated README and Phase 1 roadmap scope.

## Verification

- Registry validator passes for enemy references and required content counts.
- `npm test`: 63 tests passed across 8 files.
- Final focused test after the last resolver correction: `combatWorld.test.ts`, 10 passed.
- `npm run typecheck`: passed.
- `npm run build`: passed.
- `node tests/phase1-combat-world-smoke.mjs`: passed at desktop resolution. It follows a fresh profile through Copper mining, smelting, sword forging/equipping at Attack 1, and the Road Wolf victory, then checks T1 locks, T5 Elite/Embervault/Cindermaw phases, and T10 Astral Nexus/Zenith Warden inspection. No browser console errors.

## Remaining balance work

Enemy HP, damage, accuracy, evasion, XP, Gold, and drop pacing are functional authored baselines, not final balance. Complete a Phase 1 playthrough and tune pacing/UI in the Phase 1 Integration / Balance / UI Polish pass. Phase 2 Ranged remains unstarted.
