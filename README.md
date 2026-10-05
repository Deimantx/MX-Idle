# MX-Idle

MX-Idle is a single-player browser idle RPG built around deep skill and profession progression. The current milestone is the first playable Copper-to-Road-Wolf vertical slice.

## Current Playable Scope

- Copper Vein mining across five stages
- Copper smelting and equipment forging
- Equipment loadout and Bank
- Broken Road combat against a Road Wolf
- Local saves and offline simulation

This is the first slice; later tiers and professions are not yet playable.

## Requirements

- Node.js 20 or newer (`.nvmrc` selects 20)
- npm 10 or newer
- A modern desktop browser to play
- Chrome or Chromium to run browser QA; set `CHROME_PATH` if it is not in a standard location

## Install

```bash
git clone https://github.com/Deimantx/MX-Idle.git
cd MX-Idle
npm install
```

## Run the Development Build

```bash
npm run dev  <<<<<<<<<<<<<<<
```

Open [http://localhost:5173](http://localhost:5173). If port 5173 is occupied, Vite selects the next available port and prints its URL in the terminal.

## Production Build and Preview

```bash
npm run build
npm run preview
```

Vite prints the local preview URL when it starts.

## Checks

```bash
npm run typecheck
npm test
```

Browser QA runs the first playable flow, captures screenshots in `artifacts/qa/`, and expects the development server at port 5173:

```bash
npm run dev
# In another terminal
npm run qa
```

Set `BASE_URL` if Vite is serving on another port. Set `CHROME_PATH` when Chrome or Chromium is outside a standard install location. There is no lint script configured yet.

## Save Data

Progress is stored in this browser profile. Clearing the site's local storage resets the save. The in-game Settings screen includes **Reset Save**.

## Project Structure

- `src/app/` — app shell, runtime orchestration, and screen registry
- `src/features/` — owned screens and feature-specific presentation
- `src/game/` — domain types, content, simulation, math, state, and persistence
- `src/ui/` — shared game primitives, activity dock, and overlays
- `src/styles/` — global tokens, base styles, and responsive rules
- `tests/` — browser first-playable flow
- `Docs/` — game design references and implementation reports

Start with [AGENTS.md](AGENTS.md) for project quality and workflow rules. Useful design references include [Mining](Docs/Professions/01_MINING_v1.1.md), [Smithing](Docs/Professions/02_SMITHING.md), and [Combat Equipment](Docs/Combat/23_UNIQUE_COMBAT_EQUIPMENT.md). See [the first-playable implementation report](Docs/Implementation/FIRST_PLAYABLE_IMPLEMENTATION_REPORT.md) for milestone boundaries and known follow-up work.

Before making player-facing UI changes, read `AGENTS.md` and use the relevant project Agent Skills under `.agents/skills/`.
