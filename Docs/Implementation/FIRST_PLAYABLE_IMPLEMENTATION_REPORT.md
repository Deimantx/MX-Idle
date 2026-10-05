# First Playable Implementation Report

## Milestone

The first browser playable covered Copper mining, Smithing, Equipment, Bank, and Road Wolf combat. The current T1 progression slice extends Mining to Fieldstone Quarry, adds copper profession tools and melee gear, and expands Broken Road combat through the Ironjaw Boar Elite. It includes browser-local saves, offline simulation, settings, and development-only progression controls.

## Ownership Boundaries

- App startup, shell composition, and screen availability are in `src/app/`.
- Each implemented screen and spanning onboarding UI is owned by `src/features/`.
- Canonical types, deposit/recipe/item/enemy registries, formulas, state creation, simulation, and persistence are separated under `src/game/`.
- Shared primitives and overlays are in `src/ui/`; semantic tokens and responsive foundations are in `src/styles/`.
- The browser first-playable flow lives in `tests/first-playable-flow.mjs`.

## Provisional Data

`PROVISIONAL_FIRST_SLICE_XP_CURVE` and `PROVISIONAL_FIRST_SLICE_COMBAT_VALUES` are isolated in the first-slice content module so they can be replaced without changing the feature screens. Combat balance remains provisional.

The implementation retains bootstrap equipment requirements for the opening road encounter. Progression and combat values remain provisional pending a broader balance pass. The player currently uses melee; enemy ranged and magic attacks exist to exercise incoming damage types.

Legacy v1 saves migrate to the expanded runtime shape. `lastEvent` is retained only as a legacy read field; runtime notifications use typed transient simulation events.

## Local Commands

Run `npm run dev` for Vite, `npm run build` for a production build, `npm run typecheck` for TypeScript checks, `npm test` for simulation tests, and `npm run qa` for the browser flow.
