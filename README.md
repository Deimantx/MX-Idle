## Install

```bash
git clone https://github.com/Deimantx/MX-Idle.git
cd MX-Idle
npm install
```

## Run the Development Build

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). If port 5173 is occupied, Vite selects the next available port and prints its URL in the terminal.

## Production Build and Preview

```bash
npm run build
npm run preview
```

Vite prints the local preview URL when it starts.

## Save Profiles

MX-Idle starts at Profile Select on every launch. It has three local profile slots; each adventurer has an independent save, progress summary, and active playtime. The original single save is copied into Profile 1 as **Existing Save** when the new profile index is first created. The legacy data is left intact during migration.

## Interface Scale

Open **Settings → Interface** to set **Game Scale** to Auto or choose a manual size from 80% to 160%. **Text Size** is a separate 90% to 140% control. These are device-wide preferences and apply before Profile Select appears.

## Save Data

Profile saves and their lightweight index are stored separately in this browser's local storage. Global interface, audio, and reduced-motion settings use `mx-idle-settings-v1`; they are shared by all profiles on this device. Clearing browser storage removes local progress, so use the in-game profile controls to manage saves.
