# Combat hardening: structured actions

## Changes

- Replaced the prose action parser and its prose source file with checked-in structured action definitions in `combatActionData.json`. Enemy sequences and boss phases reference action IDs; missing references fail during materialization and validation. UI action details are rendered from the same action data.
- Pure defensive and pure status actions have no damage type or multiplier. Action-count resistance buffs expire after the specified number of completed enemy actions, including a missed or stunned action. Accuracy Down, Evasion Down, Chill, scoped resistance changes, and DoT bases use their authored values.
- Corrected action timing for Quick Bite, Iron Charge, Aimed Shot, Cliff Charge, and Gale Cleave. The queued action determines its timer. Enemy direct-hit rolls use 20–100% of Max Hit.
- Implemented Executioner's Chop's below-30% final damage bonus, Concussive Blow's Slash/Stab/Crush resistance reduction, and Precision Lunge's fixed Stab attack with 1.25× Accuracy.
- Dungeon entry always selects encounter 0. Normal target changes cannot select Dungeon or Boss roster members; roster inspection remains available. DevTools retains its separate arbitrary-encounter start control.
- Corrected authored late-tier elemental multipliers and Magic resistance overrides, including Prismatic Channeler, Aetherbound Oracle, Celestial Magus, Nexus Hierophant, Zenith Warden, and Nexus Guardian.
- Added provisional 10% final-hit Burn values for Magmahorn's Lava Charge and Ember Guard's Flame Cleave.
- Removed the legacy Road Wolf trophy drop and active item definition. Save migration combines old trophy stacks into T1 Beast Trophy. Renamed the T3 hook to Forgeheart Maul and migrated the previous hook ID.
- Tier unlock evaluation now runs after boss first kills, Attack level-ups, and save normalization. The unlock is stored once and emits one event.
- Cleaned mojibake in the touched Combat UI, DevTools, app shell, action data, and T3 combat source documentation.

## Verification

- Targeted `combatWorld.test.ts`: 18 tests passed.
- Full unit suite: 72 tests passed across 8 files.
- `npm run typecheck`: passed.
- `npm run build`: passed.
- Focused Chromium smoke (`tests/combat-hardening-smoke.mjs`): passed with no console or page errors.
