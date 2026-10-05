# MX-Idle

MX-Idle is a premium, browser-based, single-player idle RPG. It is designed to feel like a game first: compact profession screens, responsive action feedback, persistent adventurer profiles, and a long-form progression loop.

## Current playable scope

The current T1 slice includes Copper Vein and Fieldstone Quarry mining, per-deposit Mastery, copper smelting and recipe-based forging, profession tool upgrades, copper melee weapons and heavy armor, Broken Road enemies, and the Ironjaw Boar Elite. Progression runs from gathering through crafting and equipment into combat. The balance values remain provisional while the core loop is being exercised. Copper Pickaxe and Copper Smithing Hammer recipes use a documented temporary tool-handle bridge until Woodcutting/Fletching supplies the canonical component. Fieldstone's Opal/Sapphire weighting stays disabled until the source value is resolved.

Saves are local to the browser. Profile Select offers three independent character slots. An unnamed legacy save is migrated to a profile named **Adventurer** and the original legacy data is retained.

## Requirements

- Node.js 20 or newer
- npm 10 or newer
- A modern browser for the playable build and browser QA

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually [http://localhost:5173](http://localhost:5173).

## Project checks

```bash
npm run typecheck
npm test
npm run build
npm run qa
```

`npm run qa` launches the Vite app and runs the Playwright first-playable browser flow. Run it with a working browser installation. `npm run preview` serves the production build locally after `npm run build`.

## Project structure

```text
src/app/          Startup, runtime orchestration, navigation, screen ownership
src/features/     Mining, Smithing, Equipment, Combat, Bank, settings, feedback
src/game/content/  Domain registries for Mining, Smithing, items, and combat
src/game/state/   Fresh character state
src/game/systems/ Deterministic game math and simulation
src/game/types/   Domain and save-state types
src/game/persistence/ Versioned saves, profiles, and global settings
src/ui/           Shared game primitives, HUD, overlays, and formatters
src/styles/       Design tokens, global styles, and responsive layout
Docs/             Canonical profession, combat, progression, and implementation docs
tests/            Browser QA flows
```

## Save data and settings

Character profiles are stored separately in browser local storage. Interface scale, text size, audio, and accessibility preferences use the device-wide `mx-idle-settings-v1` settings key and apply before Profile Select. Clearing browser storage removes local progress; manage character data with the in-game profile controls.

The runtime migrates v1/v2 character data and reads current v3 saves, mapping legacy item, deposit, and recipe IDs into namespaced IDs while retaining bank, equipment, activity, and progression state. Profile migration preserves the original legacy save.

See [the Phase 1B Mining and Smithing implementation report](Docs/Implementation/PHASE1B_T1_MINING_SMITHING_REPORT.md) for the T1 formulas, migration behavior, temporary dependency bridge, and verification notes.

## Contributor workflow

Read [AGENTS.md](AGENTS.md) before changing player-facing features. Check relevant gameplay docs and existing shared components first. Keep simulation state authoritative and presentation effects transient. Reuse design tokens and shared primitives, preserve save compatibility, respect reduced motion, and verify player-facing work in the browser at desktop and narrower sizes.
