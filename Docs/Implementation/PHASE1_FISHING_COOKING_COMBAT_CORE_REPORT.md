# Phase 1 Fishing, Cooking, and Combat Core Report

**Status:** Systems/content foundation implemented; balance remains provisional.  
**Save schema:** v4 (`mx-idle-save-v4`)  
**Next content task:** Phase 1 Combat World / Content Expansion

## Architecture

- Fishing and Cooking content live in dedicated registries under `src/game/content/` and use namespaced item, spot, species, and recipe IDs.
- Authoritative activity state and deterministic phase advancement live in the shared simulation. `advanceWithEvents` powers both regular ticks and elapsed-time advancement, keeping progression out of presentation animations.
- Fishing and Cooking have separate screens, with shared game primitives and a profession stylesheet. Activity HUD, bank filters, navigation, Combat Food controls, and developer tools are wired into the app.
- Item definitions remain centralized in the item registry. Recipe ingredients resolve through tags and available compatible stock; cooking reserves inputs and returns them when stopped.

## Save schema and migration

Save v4 adds Fishing/Cooking skill state, current activity phases, per-species and per-recipe mastery, session counters, Food slots/settings, Satiety, cooldowns, Overeat and Food Lock timers. Fresh saves initialize these fields. v1–v3 saves are normalized into v4 with defaults for missing fields, while profile migration preserves the source save.

## Fishing registries and systems

- Ten T1–T10 spots and 40 baseline species, four species per spot.
- Spot catch pools exclude level-locked species and normalize live weights. The activity separates bite and landing phases; fight value affects landing time.
- Rods, tackle, bait, aquatic finds, double catches, preferred species, specializations, and per-species Mastery are represented in data and simulation.
- The screen exposes spot progression, live catch weights, tackle, specialization, bait, aquatic find rate, and session record.

## Cooking registries and systems

- 43 canonical recipes, cooking methods, knife progression, recipe unlock levels, Mastery, specializations, and food/utility outputs.
- Tagged inputs resolve against compatible bank items with lowest-value-first selection. Prep and cook phases run in repeat batches; stopping returns reserved inputs.
- Preservation and extra-serving effects are resolved by the simulation. The screen exposes recipe search/filtering, ingredient resolution, method progression, knife choice, batch state, and pantry bridge.

## Food and Combat integration

- Food items use a shared food-value contract and feed three configurable Combat slots, manual eating, Auto Eat threshold/interval, healing, and Satiety.
- Satiety decays during elapsed simulation time. Overeating applies a stun and Food Lock; combat stops with an event when Auto Eat has no usable stock.
- Combat content uses enemy definitions for HP, attacks, resistances, loot, and action sequences. The runtime has reusable attacks/status effects, persistent player HP, stamina and weapon specials, defeat/respawn handling, and combat Food UI.

## Temporary dependency bridges

These bridges are intentionally temporary and must be replaced when their canonical phase arrives:

- **Phase 2:** Replace the Angler Rod Bridge with Woodcutting, Fletching, and rod recipes. Replace Worm/Insect bait bridges when Farming/Foraging define their final sources.
- **Phase 3 or later:** Replace Luminous Bait bridge with Alchemy and Runecrafting.
- **Remaining profession phase:** Replace Field Pantry Bridge with Farming, Foraging, and their ingredient economy.
- **Estate phase:** Replace Field Kitchen Bridge with Estate Kitchen progression.

## Verification performed

- `npm test` — passed on the final system/test tree (41 tests).
- `npm run typecheck` — passed.
- `npm run build` — passed.
- `node tests/fishing-cooking-flow.mjs` — passed at desktop and 768px widths with no console/page errors; it created screenshots under `artifacts/qa-professions/`.
- `npm run qa` — passed earlier in this implementation session with no console errors.
- Browser flow exercised profile creation, Fishing, a bite/landing reveal, stopping, recipe selection, and a Cooking batch. Responsive checks verified no horizontal overflow at 768px.

## Current limitations and follow-up

- XP/economy/drop-rate/food-efficiency/combat-TTK values are provisional and have not received a Phase 1 balance pass.
- Combat content is still the current Broken Road roster and Ironjaw Elite. Area selection, the T1–T10 monster/elite/dungeon/boss world, progression gates, Bestiary expansion, unique-component hooks, and presets remain for the next content task. Some Combat presentation still names Broken Road directly.
- This pass adds targeted registry, fishing, cooking, migration, and browser-flow coverage. It does not yet provide the full requested mechanic matrix: especially broad Food priority/empty-stack/Overeat/death/offline parity cases and exhaustive effect/milestone validation.
- Offline elapsed-time simulation uses the same authoritative simulation code, but offline result summaries are not yet expanded into the requested Fishing/Cooking/Food breakdown.
- Fishing/Cooking record panels currently show session aggregates; richer lifetime analytics and event-history presentation remain future polish.
- Developer controls cover levels, spots/species, recipes, mastery, forced catches/outputs, pantry/knives, food stock, Satiety, and Food Lock. Timer skip and direct death simulation controls are not yet present.

## What the next Combat content task should add

Populate Combat Areas, normal monsters, Elites, Dungeons, Bosses, progression gates, loot tables, Bestiary records, and unique-component hooks through T10. It should extend the existing data-driven enemy/action and status model rather than replacing the base attack, stamina, HP, Food, save, or elapsed-time simulation foundations.
