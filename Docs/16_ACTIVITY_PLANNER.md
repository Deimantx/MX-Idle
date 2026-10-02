# Activity Planner

**Status:** Canonical cross-profession planner contract v1.0

The Planner is one account feature shared by all professions and Combat. Profession documents define only additional conditions that require their unique mechanics. A queued transition changes the single personal activity slot; it does not duplicate player activity. Workers and explicit background systems use separate schedules.

## Shared conditions

- Run indefinitely.
- Stop at a quantity, Skill Level, or action/resource/recipe Mastery target.
- Maintain a resource reserve and a target quantity.
- Select a fallback if an input or unlock is unavailable.
- Queue ordered actions and evaluate conditional steps.
- Transition across professions when a step completes.
- Configure worker schedules separately from the personal queue.
- Protect selected items from consumption, salvage, or automation.
- Set an hours-of-supply target for ongoing consumables.

## Evaluation and safety order

At each activity boundary, evaluate: stop condition → protected-item rule → hard reserve → recipe/input availability → target status → conditional step → fallback → next eligible queue step. If nothing can run, pause and report the unmet reason. Never skip a reserve or consume a protected item to satisfy a downstream target.

Planner transitions happen at safe action boundaries. Profession-specific systems may finish an atomic stage before switching when their document says the stage is indivisible. Mining can stop after a strike or configured current Stage/Deposit; Woodcutting can check minimum tree maturity; Fishing can check Spot/species rules; Farming can execute its Crop Plan in the background; Alchemy can target buff-hours supply.

## Supply-hours view

For Ammo, Runes, Food, Combat Elixirs, and Profession Tonics show stock, consumption/hour, production/hour, net change/hour, and hours remaining. This is a planning view and does not add an extra profession activity slot.

## Persistent and offline behavior

The Planner stores personal queue, conditions, fallback, hard reserves, protected items, and supply targets. Worker schedules and background loadouts are distinct persisted assignments. Offline simulation processes the same action, crop, worker, Estate, consumable, and planner events using the online economic formulas.
