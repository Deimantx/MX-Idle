# Home, Estate, and Workers

**Status:** Canonical account-system contract v1.0

## Account progression

Home is infrastructure, not a fifteenth profession. It grants no normal Skill XP, Mastery, or Specialization. Canonical residence stages are **House → Lodge → Manor → Estate → Holdings**. Stages unlock land, storage, stations, worker capacity, logistics, planning, and permanent projects. A profession station is a facility within this hierarchy; it is not a separate giant building unless its profession document explicitly needs one.

Profession facility upgrades use consistent **Station I–V** names. Their owning profession documents retain each station's material cost and level requirement. The account stage is the upper bound for available facility tier; a skill level alone does not silently bypass its residence gate.

| Residence | Account role | Worker baseline |
|---|---|---|
| House | Starter home, basic storage and stations | No automated profession output; first starter Tool comes from Chronicle or Shop |
| Lodge | First expanded stations, planning and logistics | First specialist worker assignments may unlock where a profession specifies Lodge |
| Manor | Major property expansion and management | First full worker/farmhand automation; use profession-specific capacities |
| Estate | Worker teams and reserve-driven operations | Established work can be scheduled across professions |
| Holdings | Late account network and selective endgame projects | Large-scale logistics; frontier materials remain player-led |

These are shared stage meanings, not a replacement for each station's explicit unlock table. If a station table currently places a worker feature at a different residence, use the table only when it is an explicit profession-specific gate and record it in the dependency matrix.

## Worker contract

Workers create real recipe outputs and consume actual inputs. They gain profession Proficiency, not player XP or Mastery. Proven content normally requires the player's action/resource/recipe Mastery to reach 10. Workers cannot use a content frontier the player has not personally unlocked; current/highest content also applies the owning profession's frontier multiplier.

Where the existing efficiency model applies: **Worker Efficiency = 50% + Proficiency × 0.50%**. Do not replace this with a second global worker curve. Worker gear can be handed down and is equipped as a unique item instance. Worker schedules honor reserves, protected-item metadata, targets, fallback, and stop conditions.

## Persistent loadouts and item ownership

Any physical equipment in a Farming Management Loadout or other background/station loadout is assigned to that system while active. It cannot also be player-worn, assigned to a worker, or assigned to another persistent loadout. Moving the item requires an explicit unequip/reassignment transition; the system never clones equipment.

## Automated consumption guard

Before workers or an automated station consume an item, check: (1) protected-item permission, (2) hard reserve, (3) recipe target, (4) fallback, and (5) stop condition. Protected candidates default to `workerAutoConsumeDefault = false`. Workers do not crush Diamond/Astral Prism or consume Worldheart Shard, Quintessence, World Prism, or rare Catalysts below reserve without explicit permission.

## Project, Gold, and simulation contracts

Estate projects may consume resources permanently and may run as background timers. Gold sources can include Combat, surplus sales, and contracts/Chronicles; economy rates remain unbalanced. Estate/infrastructure is the primary long-term Gold sink. Offline advancement must use the active simulation formulas and jump between events (harvest, action completion, worker batch, project completion, buff depletion, or planner transition).
