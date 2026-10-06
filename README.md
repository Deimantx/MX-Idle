# MX-Idle

MX-Idle is a premium, browser-based, single-player idle RPG. It is designed to feel like a game first: compact profession screens, responsive action feedback, persistent adventurer profiles, and a long-form progression loop.

## Current playable scope

The playable Phase 1 scope includes Mining 1–100, Smithing 1–100, Fishing 1–100, Cooking 1–100, and Melee Combat T1–T10 across 10 Areas, 10 Elites, 10 Dungeons, and 10 Bosses, with Food, Satiety, and Auto Eat. Combat numeric balance remains provisional until the Phase 1 completion pass. Fishing rods and Cooking ingredients/stations still use temporary profession bridges while Farming, Foraging, Woodcutting/Fletching, Alchemy/Runecrafting, and Estate progression are not yet implemented.

See the [Fishing/Cooking/Combat core implementation report](Docs/Implementation/PHASE1_FISHING_COOKING_COMBAT_CORE_REPORT.md) for bridge details and replacement plans.
Saves are local to the browser. Profile Select offers three independent character slots. An unnamed legacy save is migrated to a profile named **Adventurer** and the original legacy data is retained. Character saves use schema v6. Migration preserves progression and resources while discarding the removed Mastery data without compensation.

## Requirements

- Node.js 20 or newer
- npm 10 or newer
- A modern browser for the playable build and browser QA

## Install and run

```bash
npm install
npm run dev <<<<<<<<<<<<<<< 
```

Open the local URL printed by Vite, usually [http://localhost:5173](http://localhost:5173).

## Project checks

```bash
npm run typecheck
npm test
npm run build
npm run qa
```

`npm run qa` runs one focused Playwright smoke flow across Mining, Smithing, Equipment, Fishing, and Cooking at desktop, with an Equipment check at 768px. `npm run qa:professions` runs a focused Fishing/Cooking browser flow and checks the narrower layout. Both need a working browser installation. `npm run preview` serves the production build locally after `npm run build`.

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

The runtime migrates character data from save versions 1 through 6, mapping legacy item, deposit, and recipe IDs into namespaced IDs while retaining bank, equipment, activity, and progression state. The v5 migration discards historical Mastery fields without compensation; v6 adds permanent Combat tier, Elite, Dungeon, and Boss progression. Profile migration preserves the original legacy save.

See [the Phase 1B Mining and Smithing implementation report](Docs/Implementation/PHASE1B_T1_MINING_SMITHING_REPORT.md) and [the Fishing/Cooking/Combat core implementation report](Docs/Implementation/PHASE1_FISHING_COOKING_COMBAT_CORE_REPORT.md) for formulas, migration behavior, temporary dependency bridges, and verification notes.

## Contributor workflow

Read [AGENTS.md](AGENTS.md) before changing player-facing features. Check relevant gameplay docs and existing shared components first. Keep simulation state authoritative and presentation effects transient. Reuse design tokens and shared primitives, preserve save compatibility, respect reduced motion, and verify player-facing work in the browser at desktop and narrower sizes.
