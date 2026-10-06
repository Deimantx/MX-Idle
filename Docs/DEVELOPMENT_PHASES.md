# DEVELOPMENT_PHASES

**Project:** MX-Idle
**Status:** High-level development roadmap
**Location:** `Docs/DEVELOPMENT_PHASES.md`
**Purpose:** Keep implementation focused on playable phases instead of expanding many unfinished systems at once.

---

# 1. Core development rule

MX-Idle is built in **playable phases**.

A phase is not complete because the systems exist in code.

A phase is complete when its intended gameplay can be played from the beginning of that phase through its full progression range.

Each implementation slice should follow:

```text
Implement
→ Play
→ Fix blockers / UX problems
→ Expand
→ Play again
```

Avoid long periods of design-only work after implementation has started.

---

# 2. Tier rule

The baseline game uses:

**10 tiers / Levels 1–100**

```text
T1   1–10
T2  11–20
T3  21–30
T4  31–40
T5  41–50
T6  51–60
T7  61–70
T8  71–80
T9  81–90
T10 91–100
```

When this roadmap says a system is **complete**, it means its planned baseline progression exists through **T10 / Level 100**, not only the first tutorial tier.

---

# 3. PHASE 1 — CORE MELEE GAME

## Goal

Create a fully playable MX-Idle game based around:

- Mining
- Smithing
- Fishing
- Cooking
- Melee Combat

All five reach their complete baseline:

**T1 → T10 / Level 1 → 100**

Melee Combat must contain substantial content across the full progression, not only one arena per ten levels.

Phase 1 should already be able to stand on its own as a real idle RPG.

---

# 4. Phase 1 economy loop

Primary Phase 1 loop:

```text
Mining
↓
Smithing
↓
Melee Equipment
↓
Combat
↓
Loot / progression
```

Parallel sustain loop:

```text
Fishing
↓
Cooking
↓
Food
↓
Combat Sustain
```

These systems must eventually form one integrated progression economy.

---

# 5. Phase 1 Combat scope

Player Combat Style:

**Melee**

Player does NOT need playable Ranged or Magic during Phase 1.

Enemies may already use:

- Melee
- Ranged
- Magic

because this is required to make:

- armor resistances
- encounter preparation
- enemy identity

meaningful.

---

# 6. Phase 1 Combat content

Phase 1 should contain substantial combat content through all ten tiers:

- Combat Areas / Arenas
- normal enemies
- Elites
- Dungeons
- Bosses
- deterministic enemy patterns
- typed resistances
- melee weapon choices
- off-hands
- Food sustain
- Combat loot
- unique hooks where appropriate

Do not treat T1 Road Wolf as the final structure.

It is only the first implementation proof.

---

# 7. Phase 1 implementation blocks

Phase 1 implementation proceeds in system-complete blocks rather than mandatory tier-wave gates:

```text
A. Foundation / architecture
B. Mining + Smithing
C. Fishing + Cooking
D. Food / Combat sustain + Combat core
E. Combat world/content expansion
F. remaining Phase-1 content fill
G. Phase-1 balancing / QA / polish
```

Once a system's architecture is ready, its baseline content may be implemented across T1–T10. Correctness and regression checks remain continuous. Tier-by-tier balance certification is deferred to the Phase 1 completion pass.

---
# 8. Foundation / architecture status

The former Phase 1A foundation-hardening checklist is historical. Current work follows the system-complete blocks and risk-based verification policy below. Do not treat Phase 1A or tier-wave gates as current sequencing requirements.

---
# 9. Phase 1 implementation detail

Implementation follows the system-complete blocks above. Tier bands are content data, not mandatory implementation or balance gates.

## A. Foundation / architecture

Harden shared save, simulation, telemetry, registry, and reusable UI contracts. Correctness and migration checks run continuously.

## B. Mining + Smithing

Implement the full T1–T10 Mining and Smithing economy with data-driven deposits, tools, materials, recipes, equipment, and offline progress.

## C. Fishing + Cooking

Implement Fishing 1–100 with ten Spots, weighted pools and all forty baseline species. Implement Cooking 1–100 with all canonical recipes, tagged ingredients, utility outputs, and explicit temporary dependency bridges.

## D. Food / Combat sustain + Combat core

Integrate three Food slots, Auto Eat, Satiety, Overeat, persistent HP, death handling, deterministic offline Combat, generic enemies/actions/statuses, and supply analytics.

## E. Combat world/content expansion

Populate Combat Areas, normal enemies, Elites, Dungeons, Bosses, gates, loot, Bestiary data, and unique hooks. This is the next separate Combat implementation block.

## F. Remaining Phase-1 content fill

Complete cross-system recipe, item, gear, and progression registries that belong to the Melee-era game. Keep temporary cross-phase bridges explicit and documented.

## G. Phase-1 balancing / QA / polish

After the systems and content exist, run integrated progression, economy, XP, drop, Combat, offline, accessibility, responsive UI, and long-session performance passes. Balance certification happens here rather than after each tier or small tier group.

---
# 21. PHASE 1F — PHASE COMPLETION PASS

Before starting Ranged:

perform:

- full fresh-profile playthrough
- T1–T10 progression test
- save/offline testing
- economy sanity
- combat sanity
- XP sanity
- drop sanity
- UI density pass
- navigation pass
- performance pass
- bug fixing
- major UX pain-point cleanup

Do not try to lock final perfect balance yet.

The goal is:

**Phase 1 feels like a coherent finished game mode.**

---

# 22. UI policy during Phase 1

UI is improved continuously, but not all at once.

Use three rules.

## Rule A — Fix blockers immediately

Fix immediately if UI:

- clips
- becomes unreadable
- loses buttons
- overlaps
- breaks at scale
- hides important data
- causes wrong player decisions
- feels obviously broken

---

# 23. Rule B — Fix severe annoyances when encountered

Examples:

- bad tooltip positioning
- terrible progress communication
- missing XP/hour
- broken Activity HUD
- profile management
- unusable filters

These should be fixed during normal implementation.

---

# 24. Rule C — Delay full aesthetic polish

Do NOT spend weeks finalizing:

- perfect item-card layout
- final profession art
- final recipe browsing
- final Bank density
- final Combat browser

while each screen contains only one or two content entries.

A final design decision should be made with realistic content density.

---

# 25. PHASE 2 — RANGED ERA

After Phase 1 completion, add playable:

**Ranged Combat**

and the profession/economy systems needed to support it.

Primary associated professions:

- Woodcutting
- Fletching
- Hunting
- Leatherworking

Potential supporting systems are integrated only when actually required.

---

# 26. Phase 2 goals

Implement through T1–T10 / Level 1–100 where applicable:

- Woodcutting
- Fletching
- Hunting
- Leatherworking
- Ranged Skill
- bows
- crossbows
- Ammo
- Ranged armor
- Ranged Guard
- Ranged Specials
- Ranged Combat presets
- existing Combat content support for Ranged

The existing T1–T10 combat world should be reused.

Do not build a completely separate Ranged world.

---

# 27. PHASE 3 — MAGIC ERA

Add playable:

**Magic Combat**

and its economy.

Primary associated professions:

- Runecrafting
- Tailoring

Supporting systems as required.

Implement:

- Magic Skill
- Wand
- Staff
- Magic Ward
- Magic armor
- Runes
- Spellbook
- Air
- Fire
- Water
- Earth
- Augments
- Magic Specials
- existing Combat content support

Again:

reuse the existing combat world.

---

# 28. PHASE 4 — REMAINING PROFESSIONS / META SYSTEMS

After the three primary combat/economy eras are playable, expand remaining systems.

Likely:

- Farming
- Foraging
- Alchemy
- Jewelcrafting
- remaining profession dependencies
- Home / Estate
- Workers
- Guilds
- broader account progression
- late-game infrastructure

Exact sequencing may change based on what the playable game needs.

---

# 29. PHASE 5 — COMPLETION / POLISH / QA

Only when all primary gameplay pillars exist:

- final economy tuning
- final XP curves
- final drop rates
- final Combat balance
- TTK tuning
- Food/Satiety tuning
- profession pacing
- late-game pacing
- offline-performance tuning
- accessibility
- final UI/UX pass
- final assets
- audio/VFX pass
- save migration hardening
- performance
- full regression testing

Do not perform premature full-game balance simulation before the game exists.

---

# 30. Phase boundaries are development tools, not player Acts

Do not expose:

`Phase 1`
`Phase 2`

as player-facing progression unless later intentionally designed.

These are internal development milestones.

The player sees:

- Skills
- tiers
- areas
- unlocks
- progression

not developer roadmap terminology.

---

# 31. Current implementation direction

Work proceeds in the system-complete blocks in sections 7 and 9. Mining, Smithing, Fishing, Cooking, and the T1–T10 Melee Combat world are implemented as the Phase 1 playable scope. The next implementation task is Phase 1 Integration / Balance / UI Polish: play the full loop, validate pacing and save/offline behavior, then refine interaction where the complete content reveals friction. Do not automatically start Phase 2 Ranged.

The former Mastery design is removed and must not return through historical requirements below. The combat budgets and reward economy remain provisional until the Phase 1 completion pass.

The screens should continue to improve as content density grows. Use realistic registry sizes when tuning layout and keep visual polish alongside implementation instead of deferring all UI work to a final tier pass.

---

# 32. Definition of Phase 1 Complete

Phase 1 is complete only when its baseline Mining, Smithing, Fishing, Cooking, and Melee Combat progressions are playable through T10 / Level 100; the economy loops integrate; saves and offline progression remain stable; and realistic content density is usable across the core UI.

Historical details below this heading are superseded if they conflict with the system-complete roadmap, current implementation reports, or the Mastery removal notice.

---
# 35. Final roadmap principle

Do not optimize development around completing documents.

Optimize around completing **playable progression bands**.

The correct question after each slice is:

> Can I keep playing the game meaningfully now?

If the answer becomes "no, there is nothing useful left to do", build the next progression slice.

If the answer is "yes, but this UI/system is broken or painful", fix the blocker.

That is the development rhythm for MX-Idle.
