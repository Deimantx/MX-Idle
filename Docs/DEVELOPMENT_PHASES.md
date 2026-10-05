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

Once a system's architecture is ready, its baseline content may be implemented across T1�T10. Correctness and regression checks remain continuous. Tier-by-tier balance certification is deferred to the Phase 1 completion pass.

---
# 8. PHASE 1A — FOUNDATION HARDENING

Current stage.

Complete the post–First Victory audit before expanding heavily.

Required:

- Activity telemetry correctness
- readable ETA formatting
- one authoritative XP curve
- explicit simulation events
- remove remaining `lastEvent` dependency
- correct Forge ETA
- remove fixed Activity HUD height regressions
- README cleanup
- persistence cleanup where safe
- browser QA

Reference:

`29_POST_FIRST_VICTORY_AUDIT_AND_NEXT_SLICE.md`

This is a short hardening pass.

Do not turn it into another redesign.

---

# 9. Phase 1 implementation detail

Implementation follows the system-complete blocks above. Tier bands are content data, not mandatory implementation or balance gates.

## A. Foundation / architecture

Harden shared save, simulation, telemetry, registry, and reusable UI contracts. Correctness and migration checks run continuously.

## B. Mining + Smithing

Implement the full T1�T10 Mining and Smithing economy with data-driven deposits, tools, materials, recipes, equipment, Mastery, and offline progress.

## C. Fishing + Cooking

Implement Fishing 1�100 with ten Spots, weighted pools and all forty baseline species. Implement Cooking 1�100 with all canonical recipes, tagged ingredients, utility outputs, Mastery, and explicit temporary Phase-1 dependency bridges.

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

# 31. Immediate next step from current repo

The project is currently inside:

# **Phase 1A — Foundation Hardening**

Current first vertical slice:

```text
Copper Mining
→ Copper Smithing
→ Equipment
→ Road Wolf
→ First Victory
```

already works.

Immediate action:

finish the issues identified in:

`29_POST_FIRST_VICTORY_AUDIT_AND_NEXT_SLICE.md`

Then begin:

# **Phase 1B — Complete T1 Ecosystem**

Recommended internal order:

```text
1. Hardening
2. Generalize Mining / Smithing / Combat data architecture
3. Finish T1 Mining + Smithing progression
4. Implement T1 Fishing
5. Implement T1 Cooking
6. Implement Food / sustain
7. Expand T1 Melee Combat normals / Elite
8. Implement T1 Dungeon / Captain Veyr
9. Play complete T1
10. Fix
11. Begin T2
```

---

# 32. Why not go straight to T2 Mining now?

Because T1 is not yet a complete Phase 1 ecosystem.

Without Fishing / Cooking / Food sustain:

- Combat survival loop is incomplete;
- Dungeon/Boss design is missing a core mechanic;
- profession integration is unproven.

Complete one full tier across the Phase 1 ecosystem first.

Then scaling to T2–T10 becomes safer.

---

# 33. Why not fully polish UI now?

Because the current screens do not yet contain realistic content density.

Examples:

- Mining has too few selectable deposits;
- Smithing has too few recipes;
- Combat has too few enemies;
- Bank has too few item types.

A layout that looks perfect with one item can fail with 30.

Therefore:

- fix broken/annoying UI now;
- continue improving game feel;
- do a serious density/design pass after enough content exists;
- do final polish after Phase 1 content is complete.

---

# 34. Definition of Phase 1 Complete

Phase 1 is complete only when:

## Mining

- full baseline Level 1–100
- all intended T1–T10 content
- tools
- mastery/progression hooks
- offline
- UI scales with full content

## Smithing

- full Level 1–100
- T1–T10 metals
- tools
- melee equipment
- Heat/Reheat
- recipe progression
- offline

## Fishing

- full Level 1–100
- T1–T10 fishing content
- weighted catches
- meaningful fish progression
- offline

## Cooking

- full Level 1–100
- T1–T10 food
- real Combat sustain
- food priority loadout
- offline

## Melee Combat

- full T1–T10 baseline
- substantial enemy roster
- multiple areas/arenas
- Elites
- Dungeons
- Bosses
- food sustain
- armor/resistance gameplay
- weapon choices
- Specials/Stamina
- loot
- offline

## General

- fresh profile can progress through the entire Phase 1 game
- no mandatory Ranged/Magic player progression
- save/reload/offline stable
- core UI usable at realistic content density
- major bugs fixed

---

# 35. Final roadmap principle

Do not optimize development around completing documents.

Optimize around completing **playable progression bands**.

The correct question after each slice is:

> Can I keep playing the game meaningfully now?

If the answer becomes "no, there is nothing useful left to do", build the next progression slice.

If the answer is "yes, but this UI/system is broken or painful", fix the blocker.

That is the development rhythm for MX-Idle.
