# Greenhaven Idle

A single-player desktop idle RPG prototype built with Electron, React, TypeScript, and Vite.

## Run it

```sh
npm install
npm run dev
```

The app autosaves locally and simulates offline progress when it reopens. The Developer Controls panel includes time skips, simulation speed, skill weights, and save controls.

## Verify

```sh
npm test
npm run build
npm start
```

Game content is defined under `src/game/data`; the placeholder SVG map reads those same location IDs and can be replaced independently of the game engine.
