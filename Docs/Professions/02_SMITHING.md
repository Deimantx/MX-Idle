# 02 — SMITHING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `Mining.md`, `Woodcutting.md`, `Fletching.md`, `Leatherworking.md`, `Runecrafting.md`
**Purpose:** Define Smithing as one complete profession in a single source-of-truth file: core loop, Smelting, Forging, Heat, Work Required, 10-tier metal progression, alloys, recipe families, tools, heavy equipment, profession gear, Mastery, Specializations, Estate Forge, automation, workers, Chronicles, UI, formulas, balance rules, and endgame progression.

**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)

---

# 1. SMITHING ROLE IN THE GAME

Smithing is the primary metal-processing and metal-production profession.

Mining supplies raw material.

Smithing turns that material into usable account power.

Core consumers include:

- Melee Combat;
- heavy armor;
- shields;
- Mining;
- Woodcutting;
- Hunting;
- worker equipment;
- profession tools;
- Fletching components;
- Estate / facilities;
- Long-Term Projects.

Smithing should not become:

**Select Bar → wait → receive Bar**

or:

**Select Sword → wait → receive Sword**

Its defining gameplay should come from:

- Smelting versus Forging;
- furnace Heat requirements;
- batches;
- alloys;
- Work Required;
- Hammer Power;
- Workpiece Heat;
- automatic reheating;
- material preservation;
- recipe Mastery;
- specialization;
- equipment;
- facility progression;
- worker production;
- resource planning.

---

# 2. CORE FANTASY

The player begins with a primitive hammer and simple Copper work.

Over time they become capable of:

- smelting stronger metals;
- combining metals into alloys;
- maintaining hotter and more stable forges;
- shaping increasingly demanding workpieces;
- crafting profession tools;
- supplying heavy Combat equipment;
- creating mechanisms and Estate components;
- recycling unwanted metal gear;
- equipping specialist Smithing workers;
- operating a large Estate foundry;
- forging Astral and Worldforged materials.

Long-term fantasy:

**Village Smith → Skilled Forgeman → Alloy Specialist → Master Smith → Master of an Estate Foundry**

The player personally pushes newly unlocked recipes.

Workers increasingly maintain:

- Bars;
- common alloys;
- components;
- replacement worker gear;
- established production lines.

---

# 3. SMITHING HAS TWO PRIMARY LOOPS

Smithing is one profession with two main production modes:

## Smelting

Turns:

- Ore;
- Ingots;
- catalysts;
- magical minerals;

into:

- Ingots;
- Alloys.

Smelting is driven primarily by:

- Furnace Heat Rating;
- recipe Heat Requirement;
- Batch Size;
- warm-up;
- material preservation;
- optional heat assists.

## Forging

Turns:

- Ingots / Alloys;
- handles;
- shafts;
- leather wraps;
- components;

into:

- Weapons;
- Heavy Armor;
- Shields;
- Tools;
- mechanisms;
- Estate components.

Forging is driven primarily by:

- Work Required;
- Hammer Forge Power;
- Hammer Strike Time;
- Workpiece Heat;
- Reheat cycles;
- recipe Mastery;
- profession equipment.

Both modes grant:

- Smithing XP;
- Recipe Mastery XP.

---

# 4. CORE LOOP — SMELTING

Smelting loop:

1. Select an Ingot or Alloy recipe.
2. Select Batch Size.
3. Check recipe inputs.
4. Check Furnace Heat Rating against recipe Heat Requirement.
5. Load the Batch.
6. Furnace performs warm-up if necessary.
7. Smelting progress runs automatically.
8. Inputs are processed.
9. Completed Ingots / Alloy are deposited into Bank.
10. XP and Mastery XP are granted.
11. Next Batch begins automatically.
12. Continue until:
   - inputs run out;
   - output target is reached;
   - planner switches activity;
   - player stops.

Smelting must be able to run indefinitely while idle.

---

# 5. CORE LOOP — FORGING

Forging loop:

1. Select a Forging recipe.
2. Equip Smithing loadout.
3. Required inputs are reserved.
4. Workpiece is heated to **100 Heat**.
5. Workpiece begins with a recipe-defined **Work Required** value.
6. Every Hammer Strike:
   - takes Hammer Strike Time;
   - removes Work based on Forge Power;
   - reduces Workpiece Heat.
7. If Workpiece Heat falls below the recipe's Minimum Working Heat:
   - forging pauses;
   - automatic Reheat occurs;
   - Workpiece returns to 100 Heat.
8. Forging continues.
9. When Work reaches 0:
   - item is completed;
   - output enters Bank;
   - XP and Mastery XP are granted.
10. Next item begins automatically.

No active clicking is required.

The core Smithing feeling is:

**keep metal hot enough to work efficiently while Hammer Power gradually shapes the item.**

---

# 6. WORK REQUIRED

Every Forging recipe has:

**Work Required**

Think of Work as the amount of shaping required before the item is complete.

Every Hammer Strike removes:

**Forge Power**

after modifiers.

Formula:

**Remaining Work = Remaining Work - Final Forge Power**

When Remaining Work reaches 0:

**recipe completes**

Higher-tier and larger items require more Work.

Examples:

- Gauntlets require much less Work than Chestplate;
- Tool Head requires less Work than Shield;
- T10 Astralite recipes require substantially more Work than T1 Copper.

---

# 7. WORKPIECE HEAT

Every new workpiece begins at:

**100 Heat**

Every Hammer Strike reduces Heat.

Baseline Heat loss:

**10 Heat per strike**

Recipe / tier modifiers can increase required Minimum Working Heat.

Profession gear, Hammer effects, Mastery, and Specializations can reduce Heat loss.

When Heat would fall below Minimum Working Heat:

**Auto-Reheat triggers before the next Hammer Strike.**

---

# 8. MINIMUM WORKING HEAT

Higher-tier materials are harder to work and require hotter metal.

| Tier | Primary Metal | Base Work | Min Workpiece Heat | Base Reheat Time | Tier XP Coefficient |
|---|---|---|---|---|---|
| T1 | Copper | 28 | 25 | 2.00s | 7 |
| T2 | Iron | 36 | 30 | 2.12s | 11 |
| T3 | Cobalt | 46 | 35 | 2.24s | 17 |
| T4 | Argent | 58 | 40 | 2.36s | 25 |
| T5 | Emberite | 72 | 45 | 2.48s | 36 |
| T6 | Frostsilver | 88 | 50 | 2.60s | 50 |
| T7 | Stormiron | 106 | 55 | 2.72s | 68 |
| T8 | Aetherite | 126 | 60 | 2.84s | 90 |
| T9 | Umbral | 148 | 65 | 2.96s | 118 |
| T10 | Astralite | 172 | 70 | 3.08s | 152 |

The Minimum Working Heat creates natural progression.

Example:

Copper remains workable while relatively cool.

Astralite must be kept extremely hot.

Therefore high-tier Smithing gains more value from:

- better Hammer;
- Heat-retention gear;
- Reheat reduction;
- advanced Forge;
- Mastery.

---

# 9. REHEAT

Reheat:

- pauses Forging;
- consumes Reheat Time;
- restores Workpiece Heat to 100;
- does not reset Work progress;
- happens automatically.

There is no manual button requirement.

The player optimizes:

**how many Reheats are needed per item**

through build choices.

This creates a clear visible improvement when gear becomes stronger.

---

# 10. OPTIONAL HEAT ASSIST

Smithing can use Mining resources to accelerate Heat management.

## Coal Assist

Unlocked with Coal / early Smithing.

When enabled:

- Reheat Time -35%;
- consumes 1 Coal per Reheat.

Player can configure:

**Use Coal Assist only while Coal > Reserve**

Example:

> Use Coal Assist while Coal Bank > 2,000.

## Fluxstone Assist

Midgame upgrade.

When enabled:

- Reheat Time -55%;
- Workpiece Heat loss -10%;
- consumes 1 Fluxstone every 4 Reheats.

Fluxstone counter persists through the active Smithing session.

## Aether Assist

Late-game option using Aether Essence.

Recommended baseline:

- Reheat Time -65%;
- Workpiece Heat loss -15%;
- consumes 1 Aether Essence every 6 Reheats.

It is deliberately expensive and intended for:

- T9–T10;
- Mastery pushing;
- endgame crafting.

No Heat Assist is mandatory.

The player can always Smith more slowly without consuming these resources.

---

# 11. WHY HEAT ASSIST EXISTS

Heat Assist creates a real idle planning question:

> Do I spend valuable resources to finish items faster, or preserve them and accept lower throughput?

This is preferable to:

- manual timing minigames;
- random forging failures;
- durability chores.

The UI must show:

- Reheats/item;
- assist resource/hour;
- time saved;
- Smithing output/hour.

---

# 12. SMELTING HEAT REQUIREMENTS

Every Ingot Tier has a Furnace Heat Requirement.

| Tier | Material | Raw Input | Smelt Output | Smithing Lvl | Heat Req. | Base Unit Time | Base XP |
|---|---|---|---|---|---|---|---|
| T1 | Copper | Copper Ore | Copper Ingot | 1 | 26 | 3.0s | 7 |
| T2 | Iron | Iron Ore | Iron Ingot | 11 | 34 | 3.3s | 11 |
| T3 | Cobalt | Cobalt Ore | Cobalt Ingot | 21 | 42 | 3.6s | 17 |
| T4 | Argent | Argent Ore | Argent Ingot | 31 | 50 | 3.9s | 25 |
| T5 | Emberite | Emberite Ore | Emberite Ingot | 41 | 58 | 4.2s | 36 |
| T6 | Frostsilver | Frostsilver Ore | Frostsilver Ingot | 51 | 66 | 4.5s | 50 |
| T7 | Stormiron | Stormiron Ore | Stormiron Ingot | 61 | 74 | 4.8s | 68 |
| T8 | Aetherite | Aetherite Ore | Aetherite Ingot | 71 | 82 | 5.1s | 90 |
| T9 | Umbral | Umbral Ore | Umbral Ingot | 81 | 90 | 5.4s | 118 |
| T10 | Astralite | Astralite Ore | Astralite Ingot | 91 | 100 | 5.8s | 152 |

A Furnace whose Heat Rating is below requirement cannot normally smelt the recipe.

Fluxstone can temporarily boost Furnace Heat Rating.

---

# 13. FURNACE HEAT RATING

Furnace Heat Rating is mainly controlled by Estate infrastructure.

| Forge | Account Stage | Heat Rating | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|---|
| Field Forge | Pre-House / baseline | 40 | 1 | 1 | T1–T3 baseline Smithing; basic smelting / forging |
| Forge I | House | 52 | 5 | 2 | T4 support; saved Smithing presets; Coal Assist automation |
| Forge II | Lodge | 64 | 10 | 4 | T5–T6 support; Salvage; worker assignments; larger batches |
| Forge III | Manor | 76 | 25 | 6 | T7 support; tempering station; worker templates; cross-recipe queue |
| Forge IV | Estate | 92 | 50 | 10 | T8–T9 support; advanced alloy automation; worker teams |
| Forge V | Late Estate / Holdings | 108 | 100 | Expanded | T10 / Worldforged; advanced schedules; endgame heat control |

The early Field Forge exists before the player owns a developed Estate.

It allows the profession to begin independently.

The Estate later transforms Smithing from:

**personal craft**

into:

**industrial support system**

without turning Estate progression into a Smithing level.

---

# 14. TEMPORARY FURNACE OVERHEAT

If Furnace Heat Rating is slightly below recipe requirement, the player can use:

**Fluxstone Overheat**

Effect:

- +10 Furnace Heat Rating for the current Batch;
- consumes 1 Fluxstone per Batch;
- Smelting time -5%.

This allows:

- limited early access;
- emergency production;
- flexible planning.

It should not replace upgrading the Forge permanently.

---

# 15. BATCH SIZE

Smelting supports Batch Size.

Baseline progression:

- Field Forge: 1;
- Forge I: 5;
- Forge II: 10;
- Forge III: 25;
- Forge IV: 50;
- Forge V: 100.

Batching does **not** multiply output for free.

It reduces repeated warm-up overhead and makes long idle sessions cleaner.

---

# 16. BATCH TIME FORMULA

Recommended:

**Batch Time = Warm-Up Time + (Unit Time × Batch Size × Batch Efficiency)**

Batch Efficiency:

| Batch | Efficiency Multiplier |
|---:|---:|
| 1 | 1.00x |
| 5 | 0.97x |
| 10 | 0.94x |
| 25 | 0.91x |
| 50 | 0.89x |
| 100 | 0.87x |

This means larger batches:

- slightly improve output/hour;
- delay the first output;
- lock more inputs at once.

Warm-Up Time baseline:

**2.0 seconds + 0.04 × recipe Heat Requirement**

Forge and Mastery modifiers can reduce it.

---

# 17. PRIMARY METAL LADDER

Mining already establishes the raw Ore ladder.

Smithing converts it into:

| Tier | Material | Raw Input | Smelt Output | Smithing Lvl | Heat Req. | Base Unit Time | Base XP |
|---|---|---|---|---|---|---|---|
| T1 | Copper | Copper Ore | Copper Ingot | 1 | 26 | 3.0s | 7 |
| T2 | Iron | Iron Ore | Iron Ingot | 11 | 34 | 3.3s | 11 |
| T3 | Cobalt | Cobalt Ore | Cobalt Ingot | 21 | 42 | 3.6s | 17 |
| T4 | Argent | Argent Ore | Argent Ingot | 31 | 50 | 3.9s | 25 |
| T5 | Emberite | Emberite Ore | Emberite Ingot | 41 | 58 | 4.2s | 36 |
| T6 | Frostsilver | Frostsilver Ore | Frostsilver Ingot | 51 | 66 | 4.5s | 50 |
| T7 | Stormiron | Stormiron Ore | Stormiron Ingot | 61 | 74 | 4.8s | 68 |
| T8 | Aetherite | Aetherite Ore | Aetherite Ingot | 71 | 82 | 5.1s | 90 |
| T9 | Umbral | Umbral Ore | Umbral Ingot | 81 | 90 | 5.4s | 118 |
| T10 | Astralite | Astralite Ore | Astralite Ingot | 91 | 100 | 5.8s | 152 |

All baseline Primary Ingots use:

**2 matching Ore → 1 Ingot**

Material Preservation can reduce actual Ore consumption.

No extra fuel item is mandatory for Primary Ingot recipes.

Coal and Fluxstone remain optional / alloy / Heat-management resources rather than becoming tedious mandatory fuel for every single Bar.

---

# 18. WHY PRIMARY INGOTS STAY SIMPLE

The main Ore → Ingot conversion should remain readable.

Complexity belongs in:

- Heat;
- Batch size;
- alloys;
- gear;
- preservation;
- advanced recipes.

If every T7 Bar requires five unrelated materials, Mining / Smithing becomes inventory bookkeeping instead of planning.

---

# 19. ALLOY SYSTEM

Smithing begins with pure Ingots.

Starting in T2, stronger multi-material Alloys become available.

Alloys are used for:

- reinforced crafted gear;
- advanced profession tools;
- Estate components;
- worker equipment;
- endgame recipes.

| Tier | Alloy | Lvl | Inputs | Output | Primary Role |
|---|---|---|---|---|---|
| T2 | Hardened Iron | 18 | 2 Iron Ingots + 1 Coal | 2 Hardened Iron Ingots | Early reinforced tools / armor / fixtures |
| T3 | Cobalt Steel | 28 | 1 Cobalt Ingot + 1 Iron Ingot + 1 Coal | 2 Cobalt Steel Ingots | T3 reinforced gear / tools |
| T4 | Argentsteel | 38 | 1 Argent Ingot + 1 Cobalt Ingot + 1 Coal | 2 Argentsteel Ingots | T4 reinforced gear / facilities |
| T5 | Embersteel | 48 | 1 Emberite Ingot + 1 Iron Ingot + 1 Fluxstone | 2 Embersteel Ingots | Heat-resistant gear / tools |
| T6 | Frostbound Alloy | 58 | 1 Frostsilver Ingot + 1 Argent Ingot + 1 Fluxstone | 2 Frostbound Ingots | T6 reinforced gear / advanced tools |
| T7 | Stormsilver | 68 | 1 Stormiron Ingot + 1 Frostsilver Ingot + 1 Fluxstone | 2 Stormsilver Ingots | T7 advanced gear / mechanisms |
| T8 | Aethersteel | 78 | 1 Aetherite Ingot + 1 Runic Crystal + 1 Fluxstone | 2 Aethersteel Ingots | Runic tools / high facilities |
| T9 | Umbralsteel | 88 | 1 Umbral Ingot + 1 Stormiron Ingot + 1 Aether Essence | 2 Umbralsteel Ingots | T9 endgame gear / worker equipment |
| T10 | Astral Alloy | 98 | 1 Astralite Ingot + 1 Aetherite Ingot + 1 Aether Essence + 1 Fluxstone | 2 Astral Alloy Ingots | T10 tools / endgame components |
| T10+ | Worldforged Alloy | 100 | 2 Astral Alloy Ingots + 2 Worldstone + 1 Worldheart Shard | 2 Worldforged Ingots | Highest permanent projects / endgame recipes |

---

# 20. ALLOY DESIGN RULE

A Tier's **Primary Ingot** is enough for normal progression.

The Tier's **Alloy** is used for stronger or more specialized crafting.

Therefore:

**Iron Ingot**

is still useful after:

**Hardened Iron**

unlocks.

This avoids immediately invalidating the simple metal.

---

# 21. OLD MATERIAL RELEVANCE THROUGH ALLOYS

Alloys deliberately reuse older materials.

Examples:

- Cobalt Steel uses Iron;
- Argentsteel uses Cobalt;
- Embersteel returns to Iron;
- Frostbound uses Argent;
- Stormsilver uses Frostsilver;
- Astral Alloy uses Aetherite.

This means older Mining / Smithing tiers remain economically relevant.

Workers can maintain these lower-tier inputs later.

---

# 22. WORLD FORGED MATERIAL

Level 100 Smithing can unlock:

**Worldforged Alloy**

Recipe:

- 2 Astral Alloy Ingots;
- 2 Worldstone;
- 1 Worldheart Shard;

Output:

- 2 Worldforged Ingots.

This is not normal T10 mass-production material.

It is used for:

- top Estate projects;
- Holdings;
- future endgame tools;
- selected endgame combat / profession recipes.

Worldheart Shards are protected inputs:

**Material Preservation cannot save Worldheart Shards.**

This prevents extreme preservation builds from trivializing the rarest Mining material.

---

# 23. SMITHING RECIPE CATEGORIES

Baseline categories:

## Smelting

- Primary Ingots;
- Alloys.

## Weapons

- Sword;
- Battle Axe;
- Mace;
- Spear.

## Heavy Equipment

- Shield;
- Helm;
- Chestplate;
- Legguards;
- Gauntlets;
- Greaves.

## Profession Tools

- Pickaxe;
- Logging Axe;
- Smithing Hammer;
- Hunting Knife.

## Components

- Fasteners;
- Fittings;
- Mechanisms;
- Frames;
- structural assemblies.

## Salvage

- reclaim materials from smithable metal equipment.

---

# 24. STANDARD FORGING RECIPE FAMILIES

| Recipe Family | Ingot Cost | Category | Work Mult. | Notes |
|---|---|---|---|---|
| Sword | 4 | Weapon | 1.1 | Melee weapon |
| Battle Axe | 4 | Weapon | 1.15 | Melee weapon |
| Mace | 4 | Weapon | 1.1 | Melee weapon |
| Spear | 3 | Weapon | 1.05 | Consumes 1 crafted Shaft in addition to metal |
| Shield | 5 | Armor/Off-hand | 1.25 | Heavy defensive off-hand |
| Helm | 3 | Armor | 0.9 | Heavy armor |
| Chestplate | 7 | Armor | 1.8 | Heavy armor |
| Legguards | 5 | Armor | 1.35 | Heavy armor |
| Gauntlets | 2 | Armor | 0.7 | Heavy armor |
| Greaves | 2 | Armor | 0.75 | Heavy armor |
| Pickaxe Upgrade | 3 | Tool | 1.0 | Consumes previous Pickaxe + handle |
| Logging Axe Upgrade | 3 | Tool | 1.0 | Consumes previous Logging Axe + handle |
| Smithing Hammer Upgrade | 2 | Tool | 0.9 | Consumes previous Hammer + handle |
| Hunting Knife Upgrade | 2 | Tool | 0.85 | Consumes previous Hunting Knife + leather wrap |

The exact Combat stats belong to Combat / Equipment design.

Smithing owns:

- recipe unlock;
- metal tier;
- inputs;
- Work Required;
- crafting progression;
- Mastery;
- production rules.

---

# 25. COMPLETE BASELINE METAL EQUIPMENT FAMILIES

| Tier | Weapons | Off-Hand | Heavy Armor | Profession Tools |
|---|---|---|---|---|
| T1 | Copper Sword; Copper Battle Axe; Copper Mace; Copper Spear | Copper Shield | Copper Helm; Copper Chestplate; Copper Legguards; Copper Gauntlets; Copper Greaves | Copper Pickaxe; Copper Logging Axe; Copper Smithing Hammer; Copper Hunting Knife |
| T2 | Iron Sword; Iron Battle Axe; Iron Mace; Iron Spear | Iron Shield | Iron Helm; Iron Chestplate; Iron Legguards; Iron Gauntlets; Iron Greaves | Iron Pickaxe; Iron Logging Axe; Iron Smithing Hammer; Iron Hunting Knife |
| T3 | Cobalt Sword; Cobalt Battle Axe; Cobalt Mace; Cobalt Spear | Cobalt Shield | Cobalt Helm; Cobalt Chestplate; Cobalt Legguards; Cobalt Gauntlets; Cobalt Greaves | Cobalt Pickaxe; Cobalt Logging Axe; Cobalt Smithing Hammer; Cobalt Hunting Knife |
| T4 | Argent Sword; Argent Battle Axe; Argent Mace; Argent Spear | Argent Shield | Argent Helm; Argent Chestplate; Argent Legguards; Argent Gauntlets; Argent Greaves | Argent Pickaxe; Argent Logging Axe; Argent Smithing Hammer; Argent Hunting Knife |
| T5 | Emberite Sword; Emberite Battle Axe; Emberite Mace; Emberite Spear | Emberite Shield | Emberite Helm; Emberite Chestplate; Emberite Legguards; Emberite Gauntlets; Emberite Greaves | Emberite Pickaxe; Emberite Logging Axe; Emberite Smithing Hammer; Emberite Hunting Knife |
| T6 | Frostsilver Sword; Frostsilver Battle Axe; Frostsilver Mace; Frostsilver Spear | Frostsilver Shield | Frostsilver Helm; Frostsilver Chestplate; Frostsilver Legguards; Frostsilver Gauntlets; Frostsilver Greaves | Frostsilver Pickaxe; Frostsilver Logging Axe; Frostsilver Smithing Hammer; Frostsilver Hunting Knife |
| T7 | Stormiron Sword; Stormiron Battle Axe; Stormiron Mace; Stormiron Spear | Stormiron Shield | Stormiron Helm; Stormiron Chestplate; Stormiron Legguards; Stormiron Gauntlets; Stormiron Greaves | Stormiron Pickaxe; Stormiron Logging Axe; Stormiron Smithing Hammer; Stormiron Hunting Knife |
| T8 | Aetherite Sword; Aetherite Battle Axe; Aetherite Mace; Aetherite Spear | Aetherite Shield | Aetherite Helm; Aetherite Chestplate; Aetherite Legguards; Aetherite Gauntlets; Aetherite Greaves | Aetherite Pickaxe; Aetherite Logging Axe; Aetherite Smithing Hammer; Aetherite Hunting Knife |
| T9 | Umbral Sword; Umbral Battle Axe; Umbral Mace; Umbral Spear | Umbral Shield | Umbral Helm; Umbral Chestplate; Umbral Legguards; Umbral Gauntlets; Umbral Greaves | Umbral Pickaxe; Umbral Logging Axe; Umbral Smithing Hammer; Umbral Hunting Knife |
| T10 | Astralite Sword; Astralite Battle Axe; Astralite Mace; Astralite Spear | Astralite Shield | Astralite Helm; Astralite Chestplate; Astralite Legguards; Astralite Gauntlets; Astralite Greaves | Astralite Pickaxe; Astralite Logging Axe; Astralite Smithing Hammer; Astralite Hunting Knife |

This creates a predictable crafted baseline.

It does **not** mean crafted metal equipment must always be best-in-slot.

Combat can later provide:

- rare drops;
- boss components;
- upgrade materials;
- unique weapons.

Smithing remains the reliable deterministic equipment path.

---

# 26. ADVANCED ALLOY EQUIPMENT

Starting T2, reinforced versions can use the Tier Alloy.

Recommended naming:

- Hardened Iron;
- Cobalt Steel;
- Argentsteel;
- Embersteel;
- Frostbound;
- Stormsilver;
- Aethersteel;
- Umbralsteel;
- Astral.

Do not duplicate every normal recipe automatically.

Advanced Alloy recipes should focus on:

- profession tools;
- selected weapons;
- heavy Chest / Shield pieces;
- worker equipment;
- Estate components.

This prevents the recipe list from doubling for no reason.

---

# 27. SPEAR CROSS-PROFESSION RULE

A full Spear requires:

- Smithing metal;
- crafted Shaft.

Baseline:

**3 Ingots + 1 Shaft**

Shaft is expected from:

- Fletching;
- Woodcutting-linked production.

This creates a deliberate Smithing ↔ Fletching dependency.

---

# 28. TOOL CROSS-PROFESSION RULE

Metal tools generally require:

- previous Tool;
- new Tier metal;
- matching-tier Utility Blank or named grip.

Examples:

**Previous Pickaxe + 3 current Ingots + matching-tier Utility Blank → new Pickaxe**

**Previous Logging Axe + 3 current Ingots + matching-tier Utility Blank → new Logging Axe**

**Previous Smithing Hammer + 2 current Ingots + matching-tier Utility Blank → new Hammer**

**Previous Hunting Knife + 2 current Ingots + Leather Wrap → new Knife**

Higher tiers can additionally consume:

- Core Fragments;
- Alloy;
- rare profession components.

Exact cross-profession component recipes belong to the producing profession.

---

# 29. TOOL UPGRADE PHILOSOPHY

The game should usually upgrade tools rather than craft every tier from nothing.

Benefits:

- old items retain value;
- tools feel like long-term possessions;
- worker hand-me-downs matter;
- progression is easy to understand.

Workers can use lower-tier tools after the player upgrades.

---

# 30. SMITHING HAMMER

Smithing's primary profession Tool is:

**Smithing Hammer**

| Tier | Hammer | Equip Lvl | Forge Power | Strike Time | Material Tier | Mechanical Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Smithing Hammer | 1 | 5 | 2.20s | Starter | Baseline |
| T1 | Copper Smithing Hammer | 5 | 7 | 2.14s | Copper | Forge Power +40% vs Worn |
| T2 | Iron Smithing Hammer | 15 | 9 | 2.08s | Iron | Workpiece Heat loss -2% |
| T3 | Cobalt Smithing Hammer | 25 | 12 | 2.02s | Cobalt | Forge Power increase |
| T4 | Argent Smithing Hammer | 35 | 15 | 1.96s | Argent | Reheat time -5% |
| T5 | Emberite Smithing Hammer | 45 | 19 | 1.90s | Emberite | Heat loss -5% |
| T6 | Frostsilver Smithing Hammer | 55 | 24 | 1.84s | Frostsilver | Material preservation +2 pp |
| T7 | Stormiron Smithing Hammer | 65 | 30 | 1.78s | Stormiron | Reheat time -10% |
| T8 | Aetherite Smithing Hammer | 75 | 37 | 1.72s | Aetherite | Forge Power +5% multiplicative |
| T9 | Umbral Smithing Hammer | 85 | 45 | 1.66s | Umbral | Heat loss -10% |
| T10 | Astralite Smithing Hammer | 95 | 54 | 1.60s | Astralite | Forge Power +8%; Worldforged-capable |

Hammer affects Forging only.

Smelting is primarily influenced by:

- Furnace;
- profession gear;
- jewelry;
- Mastery;
- Specialization.

---

# 31. HAMMER FORGE POWER

Every Strike removes Work equal to:

**Final Forge Power**

Recommended calculation:

**Base Hammer Forge Power  
× Mastery Forge Power modifier  
× Specialization modifier  
× profession gear modifier  
× jewelry modifier  
× global Smithing modifier**

A stronger Hammer visibly reduces:

**Strikes Remaining**

The UI must show this.

---

# 32. HAMMER STRIKE TIME

Hammer Strike Time is the time between automatic Forging Strikes.

It is affected by:

- Hammer;
- profession gear;
- recipe Mastery;
- Forge;
- Smithing global modifiers.

Minimum final Strike Time:

**45% of recipe-independent base Strike Time**

This prevents runaway stacking.

---

# 33. FORGING WORK FORMULA

Every Tier has a Base Work value.

| Tier | Primary Metal | Base Work | Min Workpiece Heat | Base Reheat Time | Tier XP Coefficient |
|---|---|---|---|---|---|
| T1 | Copper | 28 | 25 | 2.00s | 7 |
| T2 | Iron | 36 | 30 | 2.12s | 11 |
| T3 | Cobalt | 46 | 35 | 2.24s | 17 |
| T4 | Argent | 58 | 40 | 2.36s | 25 |
| T5 | Emberite | 72 | 45 | 2.48s | 36 |
| T6 | Frostsilver | 88 | 50 | 2.60s | 50 |
| T7 | Stormiron | 106 | 55 | 2.72s | 68 |
| T8 | Aetherite | 126 | 60 | 2.84s | 90 |
| T9 | Umbral | 148 | 65 | 2.96s | 118 |
| T10 | Astralite | 172 | 70 | 3.08s | 152 |

Final Work Required:

**Tier Base Work × Recipe Family Work Multiplier**

Example T5 Chestplate:

- T5 Base Work = 72;
- Chestplate multiplier = 1.80;

Final:

**129.6 → 130 Work**

With Emberite Hammer Forge Power 19:

roughly:

**7 Strikes**

before other modifiers / Reheat interactions.

---

# 34. RECIPE SIZE SHOULD BE FELT

Large items should feel physically larger in Smithing.

Examples:

- Gauntlets finish quickly;
- Sword is moderate;
- Shield is heavier;
- Chestplate takes the most Work.

The difference should be visible through:

- Work Required;
- Strikes Remaining;
- Reheats Expected;
- total craft time.

---

# 35. MATERIAL PRESERVATION

Smithing can preserve consumed materials.

Preservation is checked per normal input unit.

Cap:

**50% Material Preservation**

Protected endgame inputs can ignore Preservation.

Examples:

- Worldheart Shard;
- future unique boss components.

Preservation should reduce resource cost.

It should not create extra output.

---

# 36. DOUBLE OUTPUT

Smithing should use Double Output sparingly.

Recommended:

- available mainly on Smelting;
- small late-game bonuses;
- not a universal baseline stat.

Reason:

Material Preservation already provides a strong efficiency axis.

Stacking both too aggressively makes resource balance unstable.

---

# 37. SALVAGE / RECLAMATION

Smithing includes:

**Salvage**

Unlocked around Smithing 18.

Salvage allows the player to destroy smithable metal equipment and recover part of its metal cost.

No new generic Scrap currency is created.

The system directly returns relevant Ingots / Alloys.

---

# 38. SALVAGE RETURN

Baseline recovery:

**35% of original recoverable metal input value**

Improved by:

- Smithing Level;
- Forge tier;
- relevant recipe Mastery;
- selected Specialization / gear where applicable.

Recommended cap:

**60% recovery**

Unique / boss materials may be non-recoverable unless explicitly supported.

---

# 39. WHY SALVAGE EXISTS

Salvage gives unwanted metal gear a purpose.

Sources:

- old player equipment;
- Combat drops;
- replaced worker gear;
- overproduced Smithing items.

It also avoids creating:

- dozens of Scrap item tiers;
- inventory trash;
- a completely separate recycling profession.

---

# 40. SMITHING COMPONENT LADDER

Smithing supplies permanent infrastructure and other professions.

| Lvl | Component | Inputs | Output | Main Uses |
|---|---|---|---|---|
| 8 | Iron Fasteners | 1 Iron Ingot | 12 Fasteners | House / basic facilities / traps |
| 18 | Hardened Fittings | 1 Hardened Iron Ingot | 4 Fittings | Lodge / tools / reinforced traps |
| 38 | Argent Mechanism | 1 Argentsteel Ingot + 1 Cobalt Steel Ingot | 2 Mechanisms | Mid facilities / automation |
| 58 | Tempered Assembly | 1 Frostbound Ingot + 1 Embersteel Ingot | 2 Assemblies | Manor / worker infrastructure |
| 68 | Precision Mechanism | 1 Stormsilver Ingot + 1 Fluxstone | 1 Mechanism | Advanced traps / Estate machinery |
| 78 | Runic Frame | 1 Aethersteel Ingot + 1 Runic Crystal | 1 Frame | Runic facilities / advanced tools |
| 88 | Umbral Reinforcement | 1 Umbralsteel Ingot + 1 Blackstone | 1 Reinforcement | Estate / endgame worker gear |
| 98 | Astral Framework | 1 Astral Alloy Ingot + 1 Aetherstone | 1 Framework | Holdings / T10 facilities |
| 100 | Worldforged Assembly | 1 Worldforged Ingot + 2 Astral Frameworks | 1 Assembly | Top permanent projects |

This ladder intentionally uses a small number of meaningful component families rather than one component for every Tier.

---

# 41. PROFESSION INTERDEPENDENCY

Smithing consumes:

- Mining Ores;
- Coal;
- Fluxstone;
- Runic Crystal;
- Aether Essence;
- Worldstone;
- Worldheart Shard;
- Utility Blanks / Shafts;
- Leather wraps;
- future boss components.

Smithing supplies:

- Combat;
- Mining;
- Woodcutting;
- Hunting;
- Estate;
- Workers;
- Fletching;
- other profession tools.

This should make Smithing one of the central economy professions.

---

# 42. SMITHING ↔ MINING

Core loop:

**Mining → Ore → Smithing → Tools → Better Mining**

Examples:

- Mining provides Copper;
- Smithing creates Copper Pickaxe;
- stronger Pickaxe increases Mining capability;
- Mining reaches Iron;
- Smithing upgrades tool again.

Mining also provides:

- Coal;
- Fluxstone;
- Runic materials;
- Worldheart materials.

This relationship should remain strong across the whole game.

---

# 43. SMITHING ↔ WOODCUTTING / FLETCHING

Smithing creates:

- metal tool heads;
- arrowheads;
- bolt heads;
- Spear metal;
- metal mechanisms.

Woodcutting / Fletching provide:

- Utility Blanks;
- Shafts;
- wooden components.

This prevents either profession from becoming isolated.

---

# 44. SMITHING ↔ HUNTING

Smithing supports Hunting through:

- Knives;
- trap springs;
- metal jaws;
- hooks;
- weights;
- reinforced trap mechanisms.

Higher Hunting tiers can require:

- Woodcutting frame;
- Fletching assembly;
- Smithing mechanism.

---

# 45. SMITHING ↔ ESTATE

Estate consumes:

- Fasteners;
- Fittings;
- Mechanisms;
- Frames;
- Reinforcements;
- advanced Alloy;
- Worldforged components.

Smithing should remain relevant even after most player equipment has been upgraded.

Infrastructure becomes a permanent material sink.

---

# 46. SMITHING PROFESSION CLOTHING

Early game can use shared Artisan gear.

Smithing-specific sets begin around T3.

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Forgehand Cap | Forge Power +4% |
| T3 / L25 | Forgehand Apron | Material Preservation +3 pp |
| T3 / L25 | Forgehand Trousers | Smithing Mastery XP +4% |
| T3 / L25 | Forgehand Gloves | Workpiece Heat loss -5% |
| T3 / L25 | Forgehand Boots | Reheat time -4% |
| Set | Forgehand 5/5 | Smithing action time -4% |
| T5 / L45 | Foundry Visor | Smelting action time -5% |
| T5 / L45 | Foundry Coat | Batch warm-up time -10% |
| T5 / L45 | Foundry Legguards | Alloy Smithing XP +6% |
| T5 / L45 | Foundry Gloves | Smelting Material Preservation +4 pp |
| T5 / L45 | Foundry Boots | Coal / Fluxstone assist consumption -10% |
| Set | Foundry 5/5 | Smelting output has +5% chance for +1 extra Ingot |
| T7 / L65 | Tempered Helm | Forge Power +6% |
| T7 / L65 | Tempered Apron | Forging Material Preservation +4 pp |
| T7 / L65 | Tempered Trousers | Forging Mastery XP +6% |
| T7 / L65 | Tempered Gauntlets | Heat loss -8% |
| T7 / L65 | Tempered Boots | Reheat time -7% |
| Set | Tempered 5/5 | Weapons / tools / armor forging time -5% |
| T9 / L85 | Master Smith Visor | Forge Power +8% |
| T9 / L85 | Master Smith Coat | Material Preservation +5 pp |
| T9 / L85 | Master Smith Legguards | Smithing Mastery XP +8% |
| T9 / L85 | Master Smith Gauntlets | Heat loss -10% |
| T9 / L85 | Master Smith Boots | Smelting and Reheat time -8% |
| Set | Master Smith 5/5 | All Smithing action time -5%; Preservation +3 pp |

Players can mix pieces.

Full sets are optional focused builds.

---

# 47. CLOTHING PHILOSOPHY

Smithing clothing supports different playstyles:

- Forging Power;
- Heat retention;
- Reheat speed;
- Smelting throughput;
- Preservation;
- Mastery.

No set should be universally best.

Examples:

**Foundry gear** for mass Ingots.

**Tempered gear** for heavy Forging.

**Master Smith pieces** for endgame general use.

---

# 48. SMITHING JEWELRY

| Smithing Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Bellows Ring | Reheat time -6% | Forging speed |
| 25 | Crucible Pendant | Smelting time -6% | Bars |
| 35 | Preserver's Band | Material Preservation +4 pp | Resource efficiency |
| 45 | Foundry Seal | Alloy smelting time -8%; Alloy Mastery XP +6% | Alloys |
| 55 | Hammerer's Chain | Forge Power +7% | Weapons / tools |
| 65 | Armorer's Signet | Armor / Shield Work Required -8% | Armor |
| 75 | Thermal Loop | Workpiece Heat loss -10% | Deep forging |
| 85 | Aether Crucible Charm | Fluxstone / Aether Essence assist effect +20% | High-tier Smithing |
| 95 | Astral Smith's Emblem | Forge Power +8%; Preservation +3 pp | Endgame general |

Jewelry creates build choices.

A Smithing 100 player can still deliberately use an early:

**Preserver's Band**

if saving rare material is more important than maximum throughput.

---

# 49. SMITHING LOADOUTS

Recommended saved presets:

## Foundry

- smelting speed;
- batch efficiency;
- preservation.

## Toolsmith

- Forge Power;
- Heat retention;
- tool recipes.

## Armorer

- heavy armor Work reduction;
- preservation.

## Endgame Alloy

- Furnace Heat;
- Fluxstone / Aether assist;
- Mastery.

Presets remember:

- equipment;
- jewelry;
- Specialization;
- Heat Assist settings;
- planner rules.

---

# 50. RECIPE MASTERY

Every important Smithing recipe has:

**Mastery 1–100**

Examples:

- Copper Ingot Mastery;
- Iron Sword Mastery;
- Copper Pickaxe Mastery;
- Hardened Iron Mastery;
- Astral Framework Mastery.

Mastery belongs to the recipe.

---

# 51. RECIPE MASTERY MILESTONES

| Mastery | Recipe Effect |
|---|---|
| 10 | Recipe action time -2% |
| 25 | Material Preservation +3 percentage points |
| 50 | Workpiece Heat loss -8% (Forging) / Batch warm-up -8% (Smelting) |
| 75 | Smithing XP +5% and Mastery XP +5% for this recipe |
| 100 | Recipe action time -5% additional; Material Preservation +3 pp additional |

These are baseline universal Smithing Mastery rewards.

Some special recipes can replace a milestone effect if a recipe-specific bonus is more interesting.

---

# 52. SKILL-WIDE SMITHING MASTERY

Skill-Wide Smithing Mastery measures total Mastery across Smithing recipes.

Recommended milestones:

| Completion | Reward |
|---:|---|
| 10% | Smithing action time -2% |
| 25% | Material Preservation +2 pp; second Smithing preset |
| 50% | Worker Smithing efficiency +5%; Reheat time -5% |
| 75% | Smithing Mastery XP +10%; third preset |
| 100% | Forge Power +5%; Smelting time -5%; Master Smith completion marker |

100% is long-term completion content.

Not required for normal progression.

---

# 53. SMITHING SPECIALIZATIONS

Unlock:

**Smithing Level 35**

Three baseline Specializations:

1. Foundry Master;
2. Forge Master;
3. Armorer.

They are reversible.

No permanent lock.

---

# 54. FOUNDRY MASTER

Focus:

**Ingots / Alloys / resource efficiency**

Effects:

- Smelting time -10%;
- Batch warm-up -15%;
- Material Preservation +5 pp on Smelting;
- Alloy Mastery XP +10%;
- Forging action time +5%.

Best for:

- mass Bars;
- Alloys;
- Estate supply;
- worker material supply.

---

# 55. FORGE MASTER

Focus:

**Weapons / Tools / Components**

Effects:

- Forge Power +12%;
- Reheat time -10%;
- Workpiece Heat loss -8%;
- Weapons / Tools / Components Mastery XP +10%;
- Armor Work Required +5%.

Best for:

- Pickaxes;
- Hammers;
- Logging Axes;
- Hunting tools;
- weapon crafting;
- mechanisms.

---

# 56. ARMORER

Focus:

**Heavy Armor / Shields / material economy**

Effects:

- Armor / Shield Work Required -12%;
- Material Preservation +6 pp on Armor / Shields;
- Armor / Shield Mastery XP +10%;
- Forge Power -3% on Weapon / Tool recipes.

Best for:

- player heavy sets;
- worker heavy equipment if applicable;
- shields;
- large metal pieces.

---

# 57. SPECIALIZATION SWITCHING

Rules:

- free;
- outside active Smithing action;
- switching restarts current incomplete workpiece / batch;
- reserved inputs return safely if action has not completed;
- presets remember Specialization.

No respec currency.

No permanent character mistake.

---

# 58. ESTATE FORGE

Smithing can begin using a basic:

**Field Forge**

before major Estate development.

Estate progression later upgrades the profession.

| Forge | Account Stage | Heat Rating | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|---|
| Field Forge | Pre-House / baseline | 40 | 1 | 1 | T1–T3 baseline Smithing; basic smelting / forging |
| Forge I | House | 52 | 5 | 2 | T4 support; saved Smithing presets; Coal Assist automation |
| Forge II | Lodge | 64 | 10 | 4 | T5–T6 support; Salvage; worker assignments; larger batches |
| Forge III | Manor | 76 | 25 | 6 | T7 support; tempering station; worker templates; cross-recipe queue |
| Forge IV | Estate | 92 | 50 | 10 | T8–T9 support; advanced alloy automation; worker teams |
| Forge V | Late Estate / Holdings | 108 | 100 | Expanded | T10 / Worldforged; advanced schedules; endgame heat control |

The Forge is account infrastructure.

It does not have Smithing XP.

---

# 59. FORGE TIER GATING

Recommended normal Heat progression:

- Field Forge → T1–T3;
- Forge I → T4;
- Forge II → T5–T6;
- Forge III → T7;
- Forge IV → T8–T9;
- Forge V → T10 / Worldforged.

Fluxstone Overheat can bridge a small Heat gap temporarily.

This ensures facilities unlock real options rather than only +5% stats.

---

# 60. FORGE DOES NOT REPLACE SKILL LEVEL

A high Forge does not let Smithing 20 craft Astralite.

A high Smithing level does not let a primitive Field Forge melt Astralite.

Advanced Smithing requires both:

- character profession progression;
- account infrastructure.

This is intentional.

---

# 61. SMITHING WORKERS

Workers can perform Smithing.

Worker data:

- Smithing Proficiency;
- Smithing Hammer;
- profession clothing;
- profession jewelry;
- assigned Forge;
- recipe assignment;
- Batch Size;
- Heat Assist policy;
- production rate.

Workers consume real materials.

They do not generate Bars from nothing.

---

# 62. PROVEN RECIPE RULE

Workers cannot immediately automate every newly unlocked recipe.

A recipe becomes:

**Proven**

when the player personally reaches:

**Mastery 10**

on that recipe.

Only Proven recipes can be assigned to workers.

This ensures:

**the player pioneers production; workers maintain established production.**

---

# 63. WORKER SMITHING PROFICIENCY

Recommended worker efficiency:

**50% + (Proficiency × 0.50%)**

Therefore:

- Proficiency 1 = 50.5%;
- 50 = 75%;
- 100 = 100%.

Equipment and Forge bonuses apply afterward.

Workers do not have their own Recipe Mastery.

Player Recipe Mastery provides account knowledge.

---

# 64. FRONTIER RECIPE PENALTY

For recipes in the highest Smithing Tier currently unlocked:

| Player Recipe Mastery | Worker Frontier Multiplier |
|---:|---:|
| 10–24 | 75% |
| 25–49 | 85% |
| 50–74 | 92.5% |
| 75–99 | 97.5% |
| 100 | 100% |

Older Tier recipes have no Frontier penalty.

Workers naturally take over old production.

---

# 65. WORKER EQUIPMENT HAND-ME-DOWNS

Old Smithing equipment remains useful.

Example:

Player:

**Astralite Hammer**

Workers:

- Stormiron Hammer;
- Aetherite Hammer;
- Umbral Hammer.

The same applies to:

- clothing;
- jewelry;
- relevant worker tools.

Worker UI needs:

- equipment templates;
- auto-equip;
- reserve rules;
- bulk assignment.

---

# 66. WORKER FORGE CAPACITY

Forge infrastructure limits simultaneous Smithing workers.

Recommended baseline:

| Forge | Smithing Worker Slots |
|---|---:|
| Field Forge | 0 |
| Forge I | 0 |
| Forge II | 1 |
| Forge III | 3 |
| Forge IV | 6 |
| Forge V | 10 |

Additional Estate systems can increase organization-wide worker capacity later.

---

# 67. ACTIVITY PLANNER — SMITHING

Starter rules:

- Smith indefinitely;
- stop at output quantity;
- stop at Smithing Level;
- stop when input runs out.

House / early infrastructure:

- stop at Recipe Mastery target;
- queue 2 actions.

Lodge:

- maintain material reserve;
- queue 4 actions;
- toggle Heat Assist based on reserve.

Manor:

- queue 6 actions;
- cross-recipe production chains;
- fallback recipe;
- saved Smithing preset changes.

Estate:

- queue 10 actions;
- worker production schedules;
- reserve-based component production.

Holdings:

- department-level Smithing schedules;
- worker team templates;
- multi-resource production policies.

---

# 68. PRODUCTION CHAIN PLANNER

Smithing should support chained production.

Example:

> Smelt 500 Iron Ingots  
> → produce 200 Hardened Iron  
> → craft 20 Iron Pickaxes  
> → craft Hardened Fittings until Bank reaches 100.

Another:

> Maintain 2,000 Stormiron Ingots.  
> If below 2,000 → smelt Stormiron.  
> Otherwise → produce Stormsilver.

This is a major mid/late-game idle planning tool.

---

# 69. RESOURCE RESERVES

Smithing respects protected Bank reserves.

Example:

**Iron Ingot Reserve: 1,000**

A Cobalt Steel recipe cannot consume Iron below 1,000 unless:

**Ignore Reserve**

is explicitly enabled.

Worker Smithing follows the same rule.

This prevents automation from accidentally consuming materials reserved for:

- Estate;
- Combat gear;
- tools;
- other professions.

---

# 70. COMPLETE PRIMARY INGOT PROGRESSION

| Tier | Material | Raw Input | Smelt Output | Smithing Lvl | Heat Req. | Base Unit Time | Base XP |
|---|---|---|---|---|---|---|---|
| T1 | Copper | Copper Ore | Copper Ingot | 1 | 26 | 3.0s | 7 |
| T2 | Iron | Iron Ore | Iron Ingot | 11 | 34 | 3.3s | 11 |
| T3 | Cobalt | Cobalt Ore | Cobalt Ingot | 21 | 42 | 3.6s | 17 |
| T4 | Argent | Argent Ore | Argent Ingot | 31 | 50 | 3.9s | 25 |
| T5 | Emberite | Emberite Ore | Emberite Ingot | 41 | 58 | 4.2s | 36 |
| T6 | Frostsilver | Frostsilver Ore | Frostsilver Ingot | 51 | 66 | 4.5s | 50 |
| T7 | Stormiron | Stormiron Ore | Stormiron Ingot | 61 | 74 | 4.8s | 68 |
| T8 | Aetherite | Aetherite Ore | Aetherite Ingot | 71 | 82 | 5.1s | 90 |
| T9 | Umbral | Umbral Ore | Umbral Ingot | 81 | 90 | 5.4s | 118 |
| T10 | Astralite | Astralite Ore | Astralite Ingot | 91 | 100 | 5.8s | 152 |

Current baseline:

**2 matching Ore → 1 matching Ingot**

This is the standard deterministic metal backbone.

---

# 71. COMPLETE ALLOY PROGRESSION

| Tier | Alloy | Lvl | Inputs | Output | Primary Role |
|---|---|---|---|---|---|
| T2 | Hardened Iron | 18 | 2 Iron Ingots + 1 Coal | 2 Hardened Iron Ingots | Early reinforced tools / armor / fixtures |
| T3 | Cobalt Steel | 28 | 1 Cobalt Ingot + 1 Iron Ingot + 1 Coal | 2 Cobalt Steel Ingots | T3 reinforced gear / tools |
| T4 | Argentsteel | 38 | 1 Argent Ingot + 1 Cobalt Ingot + 1 Coal | 2 Argentsteel Ingots | T4 reinforced gear / facilities |
| T5 | Embersteel | 48 | 1 Emberite Ingot + 1 Iron Ingot + 1 Fluxstone | 2 Embersteel Ingots | Heat-resistant gear / tools |
| T6 | Frostbound Alloy | 58 | 1 Frostsilver Ingot + 1 Argent Ingot + 1 Fluxstone | 2 Frostbound Ingots | T6 reinforced gear / advanced tools |
| T7 | Stormsilver | 68 | 1 Stormiron Ingot + 1 Frostsilver Ingot + 1 Fluxstone | 2 Stormsilver Ingots | T7 advanced gear / mechanisms |
| T8 | Aethersteel | 78 | 1 Aetherite Ingot + 1 Runic Crystal + 1 Fluxstone | 2 Aethersteel Ingots | Runic tools / high facilities |
| T9 | Umbralsteel | 88 | 1 Umbral Ingot + 1 Stormiron Ingot + 1 Aether Essence | 2 Umbralsteel Ingots | T9 endgame gear / worker equipment |
| T10 | Astral Alloy | 98 | 1 Astralite Ingot + 1 Aetherite Ingot + 1 Aether Essence + 1 Fluxstone | 2 Astral Alloy Ingots | T10 tools / endgame components |
| T10+ | Worldforged Alloy | 100 | 2 Astral Alloy Ingots + 2 Worldstone + 1 Worldheart Shard | 2 Worldforged Ingots | Highest permanent projects / endgame recipes |

Alloy recipes are deliberately cross-tier.

Their purpose is to:

- create stronger crafting paths;
- keep old materials useful;
- connect Mining resources;
- support tools / Estate / endgame recipes.

---

# 72. COMPLETE TOOL PROGRESSION

| Tier | Hammer | Equip Lvl | Forge Power | Strike Time | Material Tier | Mechanical Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Smithing Hammer | 1 | 5 | 2.20s | Starter | Baseline |
| T1 | Copper Smithing Hammer | 5 | 7 | 2.14s | Copper | Forge Power +40% vs Worn |
| T2 | Iron Smithing Hammer | 15 | 9 | 2.08s | Iron | Workpiece Heat loss -2% |
| T3 | Cobalt Smithing Hammer | 25 | 12 | 2.02s | Cobalt | Forge Power increase |
| T4 | Argent Smithing Hammer | 35 | 15 | 1.96s | Argent | Reheat time -5% |
| T5 | Emberite Smithing Hammer | 45 | 19 | 1.90s | Emberite | Heat loss -5% |
| T6 | Frostsilver Smithing Hammer | 55 | 24 | 1.84s | Frostsilver | Material preservation +2 pp |
| T7 | Stormiron Smithing Hammer | 65 | 30 | 1.78s | Stormiron | Reheat time -10% |
| T8 | Aetherite Smithing Hammer | 75 | 37 | 1.72s | Aetherite | Forge Power +5% multiplicative |
| T9 | Umbral Smithing Hammer | 85 | 45 | 1.66s | Umbral | Heat loss -10% |
| T10 | Astralite Smithing Hammer | 95 | 54 | 1.60s | Astralite | Forge Power +8%; Worldforged-capable |

Pickaxe progression is shared with Mining.

Logging Axe progression will be finalized in Woodcutting.

Hunting Knife progression will be finalized in Hunting.

Smithing owns the metal crafting side of all these tools.

---

# 73. COMPLETE PROFESSION GEAR

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Forgehand Cap | Forge Power +4% |
| T3 / L25 | Forgehand Apron | Material Preservation +3 pp |
| T3 / L25 | Forgehand Trousers | Smithing Mastery XP +4% |
| T3 / L25 | Forgehand Gloves | Workpiece Heat loss -5% |
| T3 / L25 | Forgehand Boots | Reheat time -4% |
| Set | Forgehand 5/5 | Smithing action time -4% |
| T5 / L45 | Foundry Visor | Smelting action time -5% |
| T5 / L45 | Foundry Coat | Batch warm-up time -10% |
| T5 / L45 | Foundry Legguards | Alloy Smithing XP +6% |
| T5 / L45 | Foundry Gloves | Smelting Material Preservation +4 pp |
| T5 / L45 | Foundry Boots | Coal / Fluxstone assist consumption -10% |
| Set | Foundry 5/5 | Smelting output has +5% chance for +1 extra Ingot |
| T7 / L65 | Tempered Helm | Forge Power +6% |
| T7 / L65 | Tempered Apron | Forging Material Preservation +4 pp |
| T7 / L65 | Tempered Trousers | Forging Mastery XP +6% |
| T7 / L65 | Tempered Gauntlets | Heat loss -8% |
| T7 / L65 | Tempered Boots | Reheat time -7% |
| Set | Tempered 5/5 | Weapons / tools / armor forging time -5% |
| T9 / L85 | Master Smith Visor | Forge Power +8% |
| T9 / L85 | Master Smith Coat | Material Preservation +5 pp |
| T9 / L85 | Master Smith Legguards | Smithing Mastery XP +8% |
| T9 / L85 | Master Smith Gauntlets | Heat loss -10% |
| T9 / L85 | Master Smith Boots | Smelting and Reheat time -8% |
| Set | Master Smith 5/5 | All Smithing action time -5%; Preservation +3 pp |

---

# 74. COMPLETE PROFESSION JEWELRY

| Smithing Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Bellows Ring | Reheat time -6% | Forging speed |
| 25 | Crucible Pendant | Smelting time -6% | Bars |
| 35 | Preserver's Band | Material Preservation +4 pp | Resource efficiency |
| 45 | Foundry Seal | Alloy smelting time -8%; Alloy Mastery XP +6% | Alloys |
| 55 | Hammerer's Chain | Forge Power +7% | Weapons / tools |
| 65 | Armorer's Signet | Armor / Shield Work Required -8% | Armor |
| 75 | Thermal Loop | Workpiece Heat loss -10% | Deep forging |
| 85 | Aether Crucible Charm | Fluxstone / Aether Essence assist effect +20% | High-tier Smithing |
| 95 | Astral Smith's Emblem | Forge Power +8%; Preservation +3 pp | Endgame general |

---

# 75. COMPLETE INFRASTRUCTURE COMPONENT LADDER

| Lvl | Component | Inputs | Output | Main Uses |
|---|---|---|---|---|
| 8 | Iron Fasteners | 1 Iron Ingot | 12 Fasteners | House / basic facilities / traps |
| 18 | Hardened Fittings | 1 Hardened Iron Ingot | 4 Fittings | Lodge / tools / reinforced traps |
| 38 | Argent Mechanism | 1 Argentsteel Ingot + 1 Cobalt Steel Ingot | 2 Mechanisms | Mid facilities / automation |
| 58 | Tempered Assembly | 1 Frostbound Ingot + 1 Embersteel Ingot | 2 Assemblies | Manor / worker infrastructure |
| 68 | Precision Mechanism | 1 Stormsilver Ingot + 1 Fluxstone | 1 Mechanism | Advanced traps / Estate machinery |
| 78 | Runic Frame | 1 Aethersteel Ingot + 1 Runic Crystal | 1 Frame | Runic facilities / advanced tools |
| 88 | Umbral Reinforcement | 1 Umbralsteel Ingot + 1 Blackstone | 1 Reinforcement | Estate / endgame worker gear |
| 98 | Astral Framework | 1 Astral Alloy Ingot + 1 Aetherstone | 1 Framework | Holdings / T10 facilities |
| 100 | Worldforged Assembly | 1 Worldforged Ingot + 2 Astral Frameworks | 1 Assembly | Top permanent projects |

These components are intended to be used by:

- Estate;
- Hunting;
- automation infrastructure;
- advanced facilities.

Do not create a separate "Metal Part T1–T10" item series unless a real gameplay need appears.

---

# 76. SMITHING XP FORMULA

Each Tier has an XP coefficient.

For Smelting:

**Smithing XP = Tier XP Coefficient × Output Units × Recipe XP Multiplier**

Primary Ingot multiplier:

**1.00**

Alloy multiplier:

**1.20**

For Forging:

**Smithing XP = Tier XP Coefficient × Metal Cost × Category Multiplier**

Recommended category multipliers:

| Category | XP Multiplier |
|---|---:|
| Component | 0.90 |
| Armor | 1.10 |
| Shield | 1.15 |
| Weapon | 1.20 |
| Tool | 1.30 |

This gives tools strong profession XP because they are important cross-profession progression items.

---

# 77. MASTERY XP FORMULA

Recommended:

**Recipe Mastery XP = Smithing XP × 0.40**

then apply:

- Recipe Mastery modifiers;
- clothing;
- jewelry;
- Specialization;
- Skill-Wide bonuses.

Mastery remains a longer progression than normal Skill Level.

---

# 78. SMELTING TIME FORMULA

Base Unit Time is listed in the Primary Metal table.

Recommended:

**Batch Time = Warm-Up + (Base Unit Time × Units × Batch Efficiency) × all time modifiers**

Warm-Up:

**2.0s + (Heat Requirement × 0.04s)**

Fluxstone Overheat and Forge modifiers apply after calculation.

---

# 79. FORGING TIME MODEL

Forging completion is simulated through Hammer Strikes.

For each Strike:

1. wait Final Strike Time;
2. subtract Final Forge Power from Work;
3. subtract Final Heat Loss from Workpiece Heat;
4. if Heat is too low for next Strike:
   - Reheat;
5. continue until Work ≤ 0.

This same logic is used:

- active;
- offline;
- workers.

No separate simplified offline crafting table.

---

# 80. FINAL HEAT LOSS

Baseline:

**10 Heat / Strike**

Formula:

**Final Heat Loss = 10 × recipe/tier modifier × gear modifiers × Mastery modifiers × Specialization modifiers**

Minimum:

**4 Heat per Strike**

A workpiece should never become effectively immune to cooling.

---

# 81. MATERIAL PRESERVATION FORMULA

For each preservable input unit:

**roll Material Preservation Chance**

If successful:

input is not consumed.

Cap:

**50%**

Protected inputs ignore this check.

The UI displays:

- expected input/hour;
- expected preserved/hour;
- actual Bank requirement.

---

# 82. HEAT ASSIST RESOURCE FORMULAS

## Coal

1 Coal per Reheat.

Coal Assist:

**Reheat Time × 0.65**

## Fluxstone

1 Fluxstone per 4 Reheats.

Fluxstone Assist:

**Reheat Time × 0.45**  
**Heat Loss × 0.90**

## Aether Essence

1 Aether Essence per 6 Reheats.

Aether Assist:

**Reheat Time × 0.35**  
**Heat Loss × 0.85**

Only one Heat Assist mode can be active at a time.

---

# 83. REHEAT RESOURCE RESERVE

Heat Assist has its own reserve logic.

Example:

> Use Fluxstone Assist only while Fluxstone > 500.

If Bank reaches 500:

- Smithing continues;
- Heat Assist automatically disables;
- no activity failure.

This is important for unattended idle sessions.

---

# 84. SALVAGE FORMULA

Recoverable metal value:

**Original Smithing Metal Inputs × Salvage Recovery Rate**

Base:

**35%**

Suggested improvement sources:

- Smithing Level: up to +5 pp;
- Forge Tier: up to +8 pp;
- relevant Recipe Mastery: up to +7 pp;
- gear / future bonuses: up to +5 pp.

Hard cap:

**60%**

Fractional returns use a hidden accumulation counter so value is not lost.

---

# 85. SALVAGE LIMITATIONS

Do not recover:

- handles;
- leather wraps;
- consumable catalysts;
- protected boss materials;
- Worldheart Shards.

Normal Ingots / Alloy are recoverable.

This prevents Salvage loops from becoming infinite material generators.

---

# 86. COMPLETE SMITHING LEVEL ROADMAP

| Smithing Lvl | Major Unlock |
|---|---|
| 1 | Copper Ingot; Copper Sword; Worn Smithing Hammer |
| 3 | Copper Battle Axe / Mace / Spear |
| 5 | Copper armor family; Copper Pickaxe / Logging Axe / Smithing Hammer / Hunting Knife |
| 8 | Iron Fasteners |
| 11 | Iron Ingot; Iron weapon family |
| 15 | Iron tools; Bellows Ring |
| 18 | Hardened Iron; Hardened Fittings; Salvage introduction |
| 21 | Cobalt Ingot / weapon family |
| 25 | Cobalt tools; Forgehand set; Crucible Pendant |
| 28 | Cobalt Steel |
| 31 | Argent Ingot / weapon family |
| 35 | Argent tools; Smithing Specializations; Preserver's Band |
| 38 | Argentsteel; Argent Mechanism |
| 41 | Emberite Ingot / weapon family |
| 45 | Emberite tools; Foundry set; Foundry Seal |
| 48 | Embersteel |
| 51 | Frostsilver Ingot / weapon family |
| 55 | Frostsilver tools; Hammerer's Chain |
| 58 | Frostbound Alloy; Tempered Assembly |
| 61 | Stormiron Ingot / weapon family |
| 65 | Stormiron tools; Tempered set; Armorer's Signet |
| 68 | Stormsilver; Precision Mechanism |
| 71 | Aetherite Ingot / weapon family |
| 75 | Aetherite tools; Thermal Loop |
| 78 | Aethersteel; Runic Frame |
| 81 | Umbral Ingot / weapon family |
| 85 | Umbral tools; Master Smith set; Aether Crucible Charm |
| 88 | Umbralsteel; Umbral Reinforcement |
| 91 | Astralite Ingot / weapon family |
| 95 | Astralite tools; Astral Smith's Emblem |
| 98 | Astral Alloy; Astral Framework |
| 100 | Worldforged Alloy / Worldforged Assembly after endgame Chronicle milestone |

Smaller recipe unlocks can occur between these points.

The table defines major system milestones.

---

# 87. CHRONICLES — EARLY SMITHING

Suggested goals:

1. Smelt first Copper Ingot.
2. Forge first Copper item.
3. Equip Copper Smithing Hammer.
4. Craft Copper Pickaxe for Mining.
5. Explain Work Required.
6. Experience first automatic Reheat.
7. Smelt Iron.
8. Enable Coal Assist.
9. Reach first Recipe Mastery milestone.

Chronicles should explain **why** each mechanic matters.

---

# 88. CHRONICLES — MIDGAME SMITHING

Suggested goals:

- craft first Alloy;
- unlock Smithing Specialization;
- build Forge I / II;
- create first profession component for Estate;
- reach Recipe Mastery 50;
- Salvage an old metal item;
- make a Proven recipe;
- assign first Smithing worker;
- use production-chain planner.

---

# 89. CHRONICLES — LATE SMITHING

Suggested goals:

- produce Stormsilver;
- operate worker Smithing production;
- craft Aethersteel;
- maintain Ingot reserves automatically;
- craft Umbralsteel;
- unlock Forge V;
- reach Smithing 100;
- create Astral Alloy;
- forge Worldforged Alloy.

---

# 90. ENDGAME CHRONICLE — MASTER OF THE FORGE

Recommended unlock requirements:

- Smithing 100;
- Forge V;
- Astralite Smithing Hammer;
- Astral Alloy Mastery 50;
- personally craft at least one Astral Framework;
- Mining Chronicle has unlocked Worldheart Deposit.

Reward:

**Unlock Worldforged Alloy**

This is a legitimate Chronicle gate because it represents explicit endgame cross-profession mastery.

---

# 91. SMITHING SCREEN — HIGH-LEVEL UI

Recommended layout:

## Recipe Browser

Tabs:

- Smelting;
- Alloys;
- Weapons;
- Armor;
- Tools;
- Components;
- Salvage.

Each recipe card shows:

- icon;
- level;
- inputs;
- output;
- Mastery;
- expected time;
- worker availability.

## Active Production Panel

For Smelting:

- Furnace Heat Rating;
- recipe Heat Requirement;
- Batch Size;
- Batch Progress;
- Heat Assist;
- inputs remaining.

For Forging:

- Work Remaining;
- Workpiece Heat;
- Hammer Power;
- Strikes Remaining;
- Reheats Expected;
- current Reheat state.

## Planning Panel

- preset;
- Specialization;
- Heat Assist policy;
- stop condition;
- queue;
- reserve logic.

## Analytics Panel

- output/hour;
- input/hour;
- Coal / Fluxstone / Essence/hour;
- XP/hour;
- Mastery/hour;
- Preservation/hour;
- Reheats/item;
- ETA to level / Mastery target.

---

# 92. FORGING VISUAL FEEDBACK

Forging should visually show:

**Work Bar**

and

**Heat Bar**

Example:

> Astralite Chestplate  
> Work: 148 / 310  
> Heat: 72 / 100  
> Hammer Power: 54  
> Next Reheat in ~2 strikes

This makes profession progression tangible.

A better Hammer visibly reduces Strikes Remaining.

Heat-retention gear visibly reduces Reheat frequency.

---

# 93. SMELTING VISUAL FEEDBACK

Smelting should show:

- Batch 7 / 25;
- Furnace Rating;
- Heat Requirement;
- Warm-Up state;
- Preservation;
- expected output;
- current inputs;
- ETA.

The player should understand why:

**Forge IV**

is better than:

**Forge II**

without reading hidden formulas.

---

# 94. ANALYTICS REQUIREMENTS

Smithing must show:

- items/hour;
- Ingots/hour;
- Ore/hour;
- Alloy input/hour;
- Coal/hour;
- Fluxstone/hour;
- Aether Essence/hour;
- Preservation/hour;
- XP/hour;
- Mastery XP/hour;
- average Reheats/item;
- average Strikes/item;
- worker output/hour;
- ETA to next Level;
- ETA to Mastery target.

Changing:

- Hammer;
- gear;
- jewelry;
- Specialization;
- Forge;
- Heat Assist;

updates estimates immediately.

---

# 95. OFFLINE SMITHING

Offline simulation stores:

- active recipe;
- mode;
- current Batch;
- Batch progress;
- current Work Remaining;
- Workpiece Heat;
- Reheat state;
- reserved inputs;
- active Specialization;
- loadout;
- Heat Assist;
- planner state.

Offline uses the exact same production rules.

---

# 96. OFFLINE RESULTS

Return screen should show:

- elapsed time;
- recipes completed;
- Ingots / items produced;
- materials consumed;
- materials preserved;
- Heat Assist resources consumed;
- items Salvaged;
- resources recovered;
- Smithing XP;
- levels gained;
- Mastery XP;
- Mastery milestones;
- planner transitions;
- worker production separately.

---

# 97. INPUT FAILURE BEHAVIOR

If required inputs run out:

1. finish only the currently valid action if inputs were already reserved;
2. do not create partial output;
3. attempt configured fallback;
4. move to next valid queue step;
5. if nothing is valid, pause and report reason.

Never consume half a recipe and lose materials because the next input was missing.

---

# 98. BANK / RESERVATION RULE

When a Forging action begins:

inputs are:

**reserved**

not immediately deleted from user-facing logic.

If the player manually cancels before the first Hammer Strike:

all inputs return.

After the first Strike:

normal cancellation completes according to global activity cancellation rules.

Recommended baseline:

**cancelling an in-progress item returns unconsumed reserved inputs but loses current Work progress.**

No finished output is granted.

---

# 99. DEVTOOLS

Smithing DevTools should support:

- set Smithing Level;
- set Recipe Mastery;
- set Skill-Wide Mastery;
- unlock all recipes;
- spawn Ingots / Alloys;
- spawn Hammer;
- spawn Smithing clothing / jewelry;
- set Forge Tier;
- set Work Remaining;
- set Workpiece Heat;
- force Reheat;
- toggle Heat Assist;
- set Material Preservation;
- instantly complete Batch / item;
- spawn worker;
- set worker Proficiency;
- mark recipe Proven;
- simulate 1m / 5m / 1h / 8h / 24h;
- compare expected/hour to actual simulation.

---

# 100. ANTI-BLOAT RULES

Avoid:

- a separate fuel item every Tier;
- a separate Smithing "scrap" item every Tier;
- normal / fine / superior / perfect quality versions of every Sword;
- random affixes on baseline Smithing items;
- 10 different identical Fastener items;
- one unique Forge building per metal;
- mandatory active timing minigames.

Prefer:

- 10 clear Primary Metals;
- meaningful cross-tier Alloys;
- a limited Component ladder;
- deterministic crafted gear;
- visible Heat / Work mechanics;
- equipment / specialization build choices.

---

# 101. MAJOR OPEN QUESTIONS — RECOMMENDED ANSWERS

These answers are the recommended baseline and only need review.

## Should Smithing be one profession or split Smelting / Forging?

**One profession.**

Smelting and Forging are two modes within Smithing.

Splitting them would create unnecessary skill bloat.

---

## Should every metal require Coal?

**No.**

Primary Ingots use only matching Ore.

Coal is used for:

- early Alloys;
- optional Heat Assist.

This keeps Coal important without turning every Bar into repetitive fuel bookkeeping.

---

## Should every higher Tier require Fluxstone?

**No.**

Fluxstone appears mainly in:

- T5–T8 Alloys;
- Furnace Overheat;
- advanced Heat Assist.

It should remain useful without becoming a universal tax.

---

## Should Smithing items have random quality?

**No baseline item quality RNG.**

A crafted Astralite Sword is an Astralite Sword.

Progression comes from:

- item Tier;
- combat upgrades;
- Mastery;
- gear;
- future systems.

Do not add Normal / Rare / Perfect variants to ordinary Smithing.

---

## Should Forging be manually timed?

**No.**

Heat / Reheat is automatic.

The planning is in:

- equipment;
- resource policy;
- Heat Assist;
- recipe choice;
- Specialization.

---

## Can Forging fail?

**No normal random failure.**

If requirements are met, production succeeds.

The game is long-term idle progression, not punishment through random recipe destruction.

---

## Should the player select Reheat timing manually?

**No.**

Auto-Reheat triggers at Minimum Working Heat.

Future advanced presets may alter policy slightly, but baseline is automatic and predictable.

---

## Should Smithing use Tool durability?

**No.**

Smithing Hammers are permanent until upgraded/replaced.

---

## Should Smithing Hammer affect Smelting?

**Mostly no.**

Hammer is a Forging tool.

Smelting progression comes mainly from:

- Forge;
- gear;
- jewelry;
- Mastery;
- Foundry specialization.

---

## Should Estate Forge be mandatory for Smithing?

**Not at the beginning.**

Field Forge supports T1–T3.

Higher metal temperatures increasingly require Estate Forge development.

---

## Should a high Forge let a low-level player skip tiers?

**No.**

Both Skill Level and infrastructure matter.

---

## Should Fluxstone let player bypass Forge progression entirely?

**No.**

Fluxstone Overheat adds only a limited Heat Rating boost.

It bridges a small gap, not five progression tiers.

---

## Should Batch Size increase output for free?

**No.**

It mainly reduces warm-up overhead.

Bigger batches provide modest efficiency but not multiplied resources.

---

## Should Smelting and Forging share Mastery?

**No.**

Mastery belongs to each recipe.

Copper Ingot and Copper Sword are separate Masteries.

---

## Should every equipment recipe have Mastery?

**Yes.**

This supports long-tail completion and recipe specialization.

---

## Should Mastery 100 be required for progression?

**No.**

Mastery is optimization/completion.

Only a small number of endgame Chronicle goals may require moderate Mastery such as 50.

---

## Should Smithing level 100 mean profession is finished?

**No.**

Post-100 goals include:

- Mastery;
- Worldforged Alloy;
- profession gear;
- worker production;
- Estate Forge;
- completion;
- endgame projects.

---

## Should Specializations be permanent?

**No.**

They are freely switchable outside the active action.

---

## Why only three Specializations?

Because they represent the three genuinely different Smithing jobs:

- material production;
- weapons/tools/components;
- armor/shields.

Add more only if a truly different production identity appears.

---

## Should Workers immediately craft newly unlocked recipes?

**No.**

Player reaches Recipe Mastery 10 first.

Then recipe becomes Proven.

---

## Should Worker Smiths use actual materials?

**Yes.**

Workers are real parallel production.

No free Ingots/hour.

---

## Should Workers use Hammers / clothes / jewelry?

**Yes.**

But management uses templates / bulk assignment.

---

## Should Worker Smithing have individual Recipe Mastery?

**No.**

Workers have Smithing Proficiency.

The player's Recipe Mastery represents account knowledge.

---

## Should workers forge frontier recipes?

**Yes, after Proven status, but with a frontier efficiency penalty.**

The player remains best at newly unlocked production.

---

## Should Salvage create a Scrap item?

**No.**

Return a portion of actual Ingots / Alloys.

Avoid inventory bloat.

---

## Can Salvage recover 100%?

**No.**

Hard cap 60%.

Otherwise crafting / Salvage loops can become exploitable.

---

## Can Worldheart Shards be preserved or Salvaged?

**No.**

Protected unique endgame inputs are always consumed and not recoverable.

---

## Should old Ingots remain relevant?

**Yes.**

Main mechanisms:

- Alloys;
- worker gear;
- Estate;
- tools;
- components;
- traps;
- Salvage / replacement economy.

---

## Should crafted gear always beat Combat loot?

**No.**

Smithing provides:

- reliable baseline;
- profession tools;
- upgrade path;
- components.

Combat can provide stronger unique equipment / upgrade materials.

---

## Should Smithing craft every Melee weapon family?

**Baseline recommendation: Sword, Battle Axe, Mace, Spear.**

Additional weapon families can be added by Combat design only if they have distinct gameplay.

Avoid 15 weapon families purely for content count.

---

## Should Smithing craft Heavy Armor?

**Yes.**

Baseline:

- Helm;
- Chestplate;
- Legguards;
- Gauntlets;
- Greaves;
- Shield.

Leatherworking and Tailoring cover other combat archetypes.

---

## Should Smithing craft Ranged ammo?

**Smithing produces metal heads / mechanisms.**

Fletching should own final ammunition assembly.

This preserves profession identity.

---

## Should Smithing have active random events?

**No baseline random events.**

Predictable planning and rates are more important.

---

## Should Heat ever damage items?

**No.**

Heat is an efficiency mechanic, not a random failure mechanic.

---

## Should Smithing have a Stamina / Energy bar?

**No.**

The Personal Activity Slot is already the opportunity cost.

---

# 102. COMPLETE LOCKED SMITHING BASELINE

1. Smithing is one profession with Smelting and Forging modes.
2. Primary Ingots use 2 matching Ore → 1 Ingot.
3. 10 Primary Metal Tiers match Mining.
4. T2–T10 introduce meaningful cross-tier Alloys.
5. Level 100 introduces Worldforged Alloy.
6. Smelting uses Furnace Heat Rating, Heat Requirement, Batch Size, Warm-Up, Preservation.
7. Forging uses Work Required, Hammer Forge Power, Strike Time, Workpiece Heat, automatic Reheat.
8. No active timing minigame.
9. No random forging failure.
10. No Hammer durability.
11. Coal / Fluxstone / Aether Essence are optional Heat Assist resources.
12. Heat Assist respects Bank reserves.
13. Field Forge supports early Smithing before developed Estate.
14. Forge I–V unlock real higher-temperature / management functionality.
15. Higher Smithing needs both profession level and infrastructure.
16. Smithing crafts baseline Melee metal equipment and Heavy Armor.
17. Smithing creates cross-profession metal Tools.
18. Tools normally upgrade from previous Tools.
19. Smithing creates a limited infrastructure Component ladder.
20. Salvage returns real metal materials; no Scrap currency.
21. Recipe Mastery is 1–100.
22. Skill-Wide Smithing Mastery exists.
23. Three reversible Specializations:
    - Foundry Master;
    - Forge Master;
    - Armorer.
24. Profession clothing and jewelry support distinct Smithing builds.
25. Workers use actual Smithing rules and actual materials.
26. Player Mastery 10 makes a recipe Proven for workers.
27. Frontier worker penalty decreases as player Recipe Mastery rises.
28. Old Hammers / gear naturally transfer to workers.
29. Planner supports full production chains and reserves.
30. Chronicles guide Smithing from first Copper Ingot to Worldforged Alloy.
31. Offline and active Smithing use identical formulas.
32. UI exposes output/hour, input/hour, Heat, Work, Reheats, Preservation, XP, Mastery, and assist consumption.
33. All Smithing baseline content lives in this one MD.

---

# 103. FINAL SUMMARY

Smithing begins with:

**Copper Ore**

↓

**Copper Ingot**

↓

**Copper Tools / Weapons / Armor**

and eventually grows into:

**Cross-Tier Alloys**

↓

**Advanced Tools**

↓

**Estate Components**

↓

**Worker Production**

↓

**Astral Alloy**

↓

**Worldforged Alloy**

The moment-to-moment profession identity is:

**Smelting**

> plan Heat, batches, preservation, and material supply.

**Forging**

> Hammer Power works through recipe Work while the heated workpiece cools and automatically reheats.

The long-term progression identity is:

**I personally forge everything**

↓

**I build a better Forge**

↓

**I specialize my Smithing setup**

↓

**I establish proven production lines**

↓

**workers maintain Bars, Alloys, and components**

↓

**I personally push Astral / Worldforged production and endgame recipes**

Smithing should feel like the profession that turns the player's accumulated raw economy into:

**equipment, tools, infrastructure, and permanent account capability.**


# INTEGRATION HARDENING — LATER TOOL AND FLETCHING COMPONENT RECIPES

Smithing owns every metal Tool and component previously labeled `Source: Smithing`. T0 starter Tools are granted by the profession-introduction Chronicle or bought cheaply from the Shop; the first metal item is never required to begin its own production chain.

## Tool upgrades

For each physical tier after T0, inputs are explicit by Tool family: **Pickaxe = previous Pickaxe + 3 current-tier Ingots + matching-tier Utility Blank**; **Logging Axe = previous Axe + 3 current-tier Ingots + matching-tier Utility Blank**; **Smithing Hammer = previous Hammer + 2 current-tier Ingots + matching-tier Utility Blank**; **Hunting Knife = previous Knife + 2 current-tier Ingots + matching-tier Utility Blank + Leatherworking Wrap**. Fletching Knife/Drawknife, Tailor's Shears, Rune Chisel, and Skiving Knife use the previous Tool + 2 current-tier Ingots + matching-tier Utility Blank. Each recipe unlocks at its next Tool's documented equip unlock level. No durability is added.

## Projectile Head Bundles

| Smithing unlock | Output | Exact inputs |
|---:|---|---|
| 1 | Copper Projectile Head Bundle × 8 | 1 Copper Ingot |
| 11 | Iron Projectile Head Bundle × 8 | 1 Iron Ingot |
| 21 | Cobalt Projectile Head Bundle × 8 | 1 Cobalt Ingot |
| 31 | Argent Projectile Head Bundle × 8 | 1 Argent Ingot |
| 41 | Emberite Projectile Head Bundle × 8 | 1 Emberite Ingot |
| 51 | Frostsilver Projectile Head Bundle × 8 | 1 Frostsilver Ingot |
| 61 | Stormiron Projectile Head Bundle × 8 | 1 Stormiron Ingot |
| 71 | Aetherite Projectile Head Bundle × 8 | 1 Aetherite Ingot |
| 81 | Umbral Projectile Head Bundle × 8 | 1 Umbral Ingot |
| 91 | Astralite Projectile Head Bundle × 8 | 1 Astralite Ingot |

Fletching consumes one matching Bundle per Arrow or Bolt recipe batch. Arrow and Bolt batches differ in their Fletching structure/recipe and output quantity; Smithing does not create separate head stacks.

## Crossbow mechanisms

Smithing produces shared mechanisms; they are reusable equipment components, not consumables.

| Smithing unlock | Output | Exact inputs |
|---:|---|---|
| 5 | Basic Trigger Assembly | 2 Copper Ingots |
| 8 | Basic Winch Assembly | 2 Copper Ingots |
| 25 | Reinforced Trigger Assembly | 1 Cobalt Ingot + 1 Hardened Fittings |
| 25 | Reinforced Winch Assembly | 1 Cobalt Ingot + 1 Hardened Fittings |
| 35 | Precision Trigger Assembly | 2 Argent Ingots + 1 Hardened Fittings |
| 38 | Runic Winch Assembly | 2 Argent Ingots + 1 Runic Crystal |
| 91 | Astral Trigger Assembly | 1 Umbral Reinforcement + 1 Astralite Ingot |
| 91 | Astral Winch Assembly | 1 Umbral Reinforcement + 1 Astralite Ingot |

Fletching uses Basic at T1–T3, Reinforced at T4–T6, Precision Trigger/Runic Winch at T7–T9, and Astral at T10. No variant without a matching Smithing producer is valid.

## Multi-profession Tool kits

- Gardening Set: Smithing makes tiered metal parts from 1 current-tier Ingot; Fletching supplies the matching Utility Blank; Farming assembles the Set.
- Apothecary/Retort Kit: Smithing makes the tiered metal vessel/frame from 2 current-tier Ingots; Alchemy assembles the Kit with its existing apparatus ingredients.
- Jeweler's Tools/Lapidary Kit: Smithing makes the tiered precision metal frame from 2 current-tier Ingots; Jewelcrafting assembles the Kit with its existing precision parts.

Smithing is the metal-component producer; it does not take ownership of finished profession kits.







