# First Playable Implementation Report

## Milestone

The first browser playable covers Copper mining, Smithing, Equipment, Bank, and Road Wolf combat. It includes browser-local saves, offline simulation, settings, and development-only progression controls.

## Ownership Boundaries

- App startup, shell composition, and screen availability are in `src/app/`.
- Each implemented screen and spanning onboarding UI is owned by `src/features/`.
- Canonical types, first-slice registries, formulas, state creation, simulation, and persistence are separated under `src/game/`.
- Shared primitives and overlays are in `src/ui/`; semantic tokens and responsive foundations are in `src/styles/`.
- The browser first-playable flow lives in `tests/first-playable-flow.mjs`.

## Provisional Data

`PROVISIONAL_FIRST_SLICE_XP_CURVE` and `PROVISIONAL_FIRST_SLICE_COMBAT_VALUES` are isolated in the first-slice content module so they can be replaced without changing the feature screens. Combat balance remains provisional.

The implementation uses bootstrap equipment requirements for the first playable loop. Back-patch the source Combat Equipment design document when those bootstrap requirements are reconciled with the wider progression canon.

## Local Commands

Run `npm run dev` for Vite, `npm run build` for a production build, `npm run typecheck` for TypeScript checks, `npm test` for simulation tests, and `npm run qa` for the browser flow.
