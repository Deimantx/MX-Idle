# 01 â€” MINING

**Status:** Complete Design Draft â€” Core Loop Corrected  
**Version:** 1.1  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `Smithing.md`, `Jewelcrafting.md`, `Runecrafting.md`
**Purpose:** Define Mining as a full profession: its core loop, unique mechanics, 10-tier progression, resources, tools, profession gear, Mastery, Specializations, facilities, automation, workers, UI, economy links, and long-term relevance.


**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)

---

# 1. MINING ROLE IN THE GAME

Mining is one of the primary foundation professions.

It supplies materials used by:

- Smithing;
- Jewelcrafting;
- Runecrafting;
- Home / Estate / Infrastructure;
- profession tools;
- worker equipment;
- Hunting traps and components;
- advanced facilities;
- Long-Term Projects.

Mining should remain important from early game through endgame.

It should not become:

**Select Ore â†’ wait forever â†’ receive Ore**

The defining Mining gameplay should come from:

- multi-stage deposits;
- depth planning;
- different resource profiles;
- tool progression;
- by-product targeting;
- Mastery;
- Specializations;
- profession gear;
- worker support;
- long-term infrastructure demand.

---

# 2. CORE FANTASY

The player starts as an individual miner extracting basic surface resources.

Over time the player becomes capable of:

- working deeper deposits;
- extracting valuable secondary minerals;
- targeting gems and rare materials;
- handling difficult high-tier veins;
- using advanced profession equipment;
- optimizing deposits for different purposes;
- delegating established mines to workers;
- supplying a large Estate and crafting economy.

The long-term fantasy is:

**Surface Miner â†’ Skilled Prospector â†’ Deep Miner â†’ Master Extractor â†’ Owner of an Automated Mining Network**

Mining should still be something the player personally pushes at the frontier, while workers increasingly maintain older resource tiers.

---

# 3. CORE LOOP

Mining always follows the full Deposit from the outside to the center.

The player does **not** choose a Depth Target and cannot intentionally reset a Deposit early.

Core loop:

1. Select a Deposit.
2. Equip the Mining loadout.
3. Begin Mining the **Outcrop**.
4. Mining actions reduce the current Stage's **Density**.
5. When Density reaches 0, the Stage is completed and its reward is granted.
6. The player automatically moves to the next deeper Stage.
7. Repeat through all five Stages:
   - Outcrop;
   - Shallow Vein;
   - Main Vein;
   - Deep Seam;
   - Core.
8. Completing the Core finishes the Deposit.
9. A fresh Deposit of the same type immediately begins at Outcrop.
10. Repeat until the player or Activity Planner stops/switches the activity.

The intended feeling is:

**work through a large, dense outer mass â†’ progressively expose richer material â†’ reach a small, valuable Core â†’ finish the Deposit â†’ start the next one.**

The player chooses **which Deposit to mine and how to build for it**, not how far into the Deposit to go.

---

# 4. UNIQUE MECHANIC â€” FIVE-STAGE DEPOSITS

Every standard Mining Deposit has exactly five sequential Stages:

1. **Outcrop**
2. **Shallow Vein**
3. **Main Vein**
4. **Deep Seam**
5. **Core**

The five Stages are not five separate selectable actions.

They are one continuous Deposit lifecycle.

Each Stage has:

- Density;
- a Stage progress bar;
- a reward on completion;
- Mining XP;
- Mastery XP;
- Primary Resource payout;
- Stage-specific rare / Crystal / Gem chances.

The defining progression across the Deposit is:

**Density decreases as the player moves deeper.**

At the same time:

**reward value increases as the player moves deeper.**

Therefore:

- Outcrop contains the most material to work through and takes the longest;
- Core contains the least Density and is reached fastest once exposed;
- Core provides the strongest Ore payout and the best rare-drop chances.

This inversion is the central Mining identity.

---

# 5. STAGE DENSITY

**Density** is the amount of material that must be mined through before a Stage is completed.

Think of Density as the Stage's Mining HP.

Every Mining action:

1. takes the current Strike Time;
2. removes Density equal to the active Pickaxe's Mining Power after modifiers;
3. updates the Stage progress bar;
4. completes the Stage when remaining Density reaches 0 or below.

Global Stage Density multipliers:

| Stage | Name | Density Multiplier | Relative Density |
|---|---|---:|---:|
| 1 | Outcrop | 1.00x | Highest |
| 2 | Shallow Vein | 0.78x | High |
| 3 | Main Vein | 0.58x | Medium |
| 4 | Deep Seam | 0.38x | Low |
| 5 | Core | 0.20x | Lowest |

Every Deposit defines a **Base Density**.

Stage Density is:

**Base Density Ã— Stage Density Multiplier**

Example:

A Deposit with Base Density 100 has:

- Outcrop = 100 Density;
- Shallow = 78;
- Main = 58;
- Deep = 38;
- Core = 20.

The exact number of Mining actions required depends on Pickaxe Mining Power and other Mining Power modifiers.

---

# 6. FULL-CYCLE PROGRESSION

Every normal Mining cycle always completes:

**Outcrop â†’ Shallow â†’ Main â†’ Deep â†’ Core**

There is no:

- early Deposit reset;
- "mine only Outcrop" mode;
- selectable Stage endpoint;
- manual node hopping to skip low-value outer layers.

This is deliberate.

The outer layers are the cost of reaching the more valuable center.

The reward curve therefore becomes a built-in anticipation loop:

**large amount of work / lower-value payout early â†’ progressively less work / better payout deeper â†’ valuable Core finish.**

After Core completion:

- the full Deposit is counted as completed;
- the Deposit lifecycle resets;
- a fresh Deposit of the same type begins automatically at Outcrop.

The player can stop or switch Deposits between Mining actions, but changing target abandons current Stage progress unless a future global activity-switching rule explicitly preserves it.

Recommended baseline:

**switching Deposit loses the unfinished current Deposit progress.**

Completed Stage rewards are never removed.

---

# 7. GLOBAL STAGE REWARD CURVE

The Stage curve should reward deeper progression strongly because the player cannot skip the outer layers.

Recommended baseline:

| Stage | Density Mult. | Primary Quantity Mult. | Mining XP Mult. | Mastery XP Mult. | Rare / Crystal Chance Mult. |
|---|---:|---:|---:|---:|---:|
| 1 â€” Outcrop | 1.00x | 1.00x | 1.00x | 1.00x | 1.00x |
| 2 â€” Shallow Vein | 0.78x | 1.25x | 1.40x | 1.50x | 1.75x |
| 3 â€” Main Vein | 0.58x | 1.60x | 2.00x | 2.30x | 3.00x |
| 4 â€” Deep Seam | 0.38x | 2.20x | 3.00x | 3.50x | 5.50x |
| 5 â€” Core | 0.20x | 3.20x | 4.50x | 5.50x | 10.00x |

Design intent:

- Outcrop is the longest and most ordinary Stage.
- Shallow starts improving payout.
- Main Vein feels noticeably richer.
- Deep Seam becomes highly valuable.
- Core is short, high-value, and has the best rare-drop table.

The player experiences a strong "getting closer to the good part" rhythm every cycle.

---

# 8. REWARD EVERY STAGE

Every completed Stage grants its reward immediately.

The player does not wait until Core to receive everything.

Benefits:

- the long Outcrop still produces progress;
- short sessions remain productive;
- offline simulation is easy to understand;
- the player visibly feels reward quality improving toward the Core;
- abandoning a Deposit never removes rewards from already completed Stages.

Core gives the best single Stage payout, but it does not retroactively contain all earlier rewards.

---

# 9. DEPOSIT COMPLETION AND RESET

A Deposit is complete only after the Core Stage is completed.

Then:

- Deposit Completed counter increases by 1;
- full-cycle completion effects can trigger;
- a fresh Deposit of the same type appears immediately;
- Stage resets to Outcrop;
- Density resets to the new Outcrop value;
- Mining continues automatically.

There is no manual respawn click and no idle-breaking respawn timer.

A special Deposit can later have a bespoke post-Core event, but normal Mining always loops automatically.

---

# 10. DEPOSIT ARCHETYPES

Mining should contain several deposit archetypes rather than only Ore nodes.

Recommended core archetypes:

## Ore Deposit

Primary source of metal ores.

Main consumers:

- Smithing;
- tools;
- equipment;
- Estate components.

## Quarry Deposit

Primary source of structural materials.

Examples:

- Stone;
- higher-grade building stone;
- mineral aggregates.

Main consumers:

- Estate;
- facilities;
- Long-Term Projects.

## Mineral / Catalyst Deposit

Produces utility minerals used across production systems.

Potential purposes:

- Smithing alloys;
- Alchemy;
- high-tier crafting;
- facility construction.

## Gem Deposit

Lower primary material output but much higher Uncut Gem potential.

Main consumer:

- Jewelcrafting.

## Runic / Essence Deposit

Produces magical minerals / essence.

Main consumer:

- Runecrafting;
- magical facilities;
- advanced crafting.

## Deep-Core Deposit

High-level deposit type focused on rare endgame materials.

Can require:

- high Mining level;
- advanced Pickaxe;
- relevant account milestone;
- strong Mining setup.

---

# 11. CONTENT BUDGET

Avoid creating dozens of nearly identical Mining nodes per tier.

Recommended baseline content budget:

For each major progression Tier:

- 1 primary Ore family;
- 0â€“1 secondary utility mineral;
- shared Stone / structural progression where needed;
- access to a relevant Gem / rare-resource table;
- occasional special Deposit rather than one in every Tier.

Across 10 Tiers this should create enough variety without producing 50 nearly identical ores.

Target initial scale:

**Approximately 15â€“20 major Mining targets**, not 40â€“60.

Additional special deposits can be added later.

---

# 12. TEN-TIER STRUCTURE

Mining follows the global 10-tier profession structure.

| Tier | Approx. Skill Level | Main Purpose |
|---|---:|---|
| T1 | 1â€“10 | Learn Mining, first Ore, Stone, basic Pickaxe |
| T2 | 11â€“20 | Second material family, first meaningful by-products |
| T3 | 21â€“30 | Deeper resource interactions, improved Gem access |
| T4 | 31â€“40 | Specialization unlock, more advanced deposits |
| T5 | 41â€“50 | Midgame alloys / catalysts / stronger profession gear |
| T6 | 51â€“60 | Advanced deposits and stronger deep-stage rewards |
| T7 | 61â€“70 | Rare minerals, worker economy becomes more important |
| T8 | 71â€“80 | Runic / exotic materials, advanced infrastructure demand |
| T9 | 81â€“90 | High-end deep deposits and rare crafting materials |
| T10 | 91â€“100 | Endgame deposits, Core materials, highest profession progression |

Exact resource names, deposit unlocks, Pickaxes, stage values, by-products, and progression tables are defined in the complete content sections below.

---

# 13. TIER UNLOCK PHILOSOPHY

A Tier should not unlock everything at its first level.

Example structure:

### Level X1

New primary Deposit.

### Level X3

New utility/by-product interaction.

### Level X5

Profession equipment or recipe.

### Level X7

Special Deposit / richer variant / Jewelcrafting interaction.

### Level X9â€“X0

Major Tier milestone.

This is a design rhythm, not a rigid formula.

---

# 14. PRIMARY RESOURCE FAMILIES

Mining resources should be divided into functional groups.

## Primary Ores

Used mainly for:

- Bars;
- Weapons;
- Armor;
- Tools;
- worker equipment;
- metal infrastructure.

## Structural Stone

Used mainly for:

- House / Lodge / Manor / Estate;
- facilities;
- Long-Term Projects;
- storage expansion;
- worker buildings.

## Fuel / Catalyst Minerals

Used mainly for:

- Smithing;
- alloys;
- Alchemy;
- advanced processing.

## Uncut Gems

Used mainly for:

- Jewelcrafting;
- combat jewelry;
- profession jewelry;
- advanced facility components.

## Runic Minerals / Essence

Used mainly for:

- Runecrafting;
- magic;
- advanced facilities.

## Deep-Core Materials

Rare high-tier outputs.

Used mainly for:

- endgame profession equipment;
- advanced tools;
- Estate projects;
- high-tier crafting.

---

# 15. BY-PRODUCT SYSTEM

Mining should provide by-products without making every Ore into a giant loot table.

Recommended by-product families:

- Stone;
- Uncut Gems;
- Catalyst Minerals;
- Crystal fragments;
- Runic / magical mineral fragments;
- rare Core materials.

Each Deposit clearly displays:

- Primary Resource;
- Secondary Resource;
- Rare Resources;
- Stage requirements;
- exact or expected drop rates.

No important Mining drop chance should be hidden from the player.

---

# 16. STAGE-BASED BY-PRODUCT VALUE

By-product quality and rare-drop chance increase automatically as the player progresses through the five Stages.

The player does not choose a Stage.

Recommended structure:

### Outcrop

- mostly Primary Resource;
- very low Gem / Crystal chance;
- low rare-material chance.

### Shallow Vein

- slightly better secondary drops;
- first noticeable Gem / Crystal chance.

### Main Vein

- meaningful by-product chance;
- rare-resource table becomes relevant.

### Deep Seam

- high Gem / Crystal chance;
- stronger Core-material chance.

### Core

- highest rare / Gem / Crystal chance;
- strongest Core-material chance;
- selected Core-only drops can exist here.

This creates one predictable reward arc every Deposit cycle.

---

# 17. GEMS â€” BY-PRODUCTS AND DEDICATED DEPOSITS

Recommended answer:

**Use both systems.**

## Normal Ore Deposits

Can produce Uncut Gems as rare by-products.

## Gem Deposits

Provide substantially better Gem/hour and allow the player to deliberately target Gems.

This avoids two problems:

- Gems being purely random;
- dedicated Gem Mining making normal Ore deposits irrelevant for Gems.

Rare Gems can require deeper Stages or higher-tier dedicated deposits.

Exact Gem names and tiers should be designed with Jewelcrafting.

---

# 18. TOOL â€” PICKAXE

Mining requires a Pickaxe.

The Pickaxe is:

- permanent equipment;
- not consumed;
- no durability;
- upgradeable through progression;
- primarily produced through Smithing.

A Mining loadout cannot begin if the Deposit requires a stronger Pickaxe than the player owns.

---

# 19. PICKAXE REQUIREMENT MODEL

Recommended model:

A newly unlocked Tier should generally be mineable using the **previous major Pickaxe Tier**.

Example concept:

- T5 Deposit requires T4 Pickaxe;
- T5 resources allow crafting/upgrading into T5 Pickaxe;
- T5 Pickaxe then improves T5 Mining and prepares for T6.

This prevents progression deadlocks.

---

# 20. PICKAXE PROGRESSION

Pickaxe progression uses two core stats:

## Mining Power

How much Density each Mining action removes.

More Mining Power means fewer actions are needed to break a Stage.

## Mining Speed

Reduces the time of each Mining action / strike.

This means tool progression can improve Mining in two distinct ways:

- hit harder;
- strike faster.

Major Pickaxe milestones can additionally improve mechanics such as:

- Primary Quantity;
- Gem chance;
- Core chance;
- by-product extraction;
- late-stage efficiency.

A stronger Pickaxe should be visibly felt in the Density bar, not only in an invisible +X% rate.

---

# 21. PICKAXE UPGRADE CHAINS

Strong recommendation:

Do not always craft the next Pickaxe from nothing.

Example:

**T4 Pickaxe + T5 Materials â†’ T5 Pickaxe**

Benefits:

- continuous progression;
- old tools remain meaningful;
- Smithing receives long-term demand;
- workers can inherit older Pickaxes.

Some special Pickaxes can still be independent rewards.

---

# 22. PROFESSION CLOTHING

Mining uses the standard profession loadout structure:

- Head;
- Body;
- Legs;
- Hands;
- Feet.

Early game can use shared Gathering gear.

Later Mining can gain dedicated specialist pieces.

Recommended slot identities:

## Head

Prospecting / rare-resource focus.

## Body

General yield / efficiency.

## Legs

Stage-speed or movement/depth efficiency.

## Hands

Precision / preservation / extraction.

## Feet

Deep-stage efficiency / Core bonuses.

These identities are direction only.

---

# 23. PROFESSION JEWELRY

Mining can use:

- Ring;
- Necklace.

Recommended jewelry themes:

## Yield Setup

More primary Ore.

## Prospecting Setup

Better Gem / rare-material chance.

## Mastery Setup

More Mastery XP.

## Deep-Mining Setup

Better Stage 4â€“5 performance.

## Infrastructure Setup

Better worker / facility synergy later.

Profession jewelry should create choices rather than one universally best setup.

---

# 24. MINING LOADOUTS

The game should support saved Mining loadouts.

Examples:

### Bulk Extractor

- Primary Quantity gear;
- Extractor specialization;
- useful for Ore, Stone, Coal, and Estate material supply.

### Prospector

- Gem / Crystal / by-product gear;
- Prospector specialization;
- useful when rare secondary resources are the objective.

### Mastery

- Mastery-focused equipment;
- useful when pushing Deposit Mastery.

### Core Hunter

- late-stage / Core-focused gear;
- Deep Delver specialization;
- useful for Core Fragments and Core-only drops.

Every loadout still mines the complete five-Stage Deposit.

Loadouts change **what the cycle is good at**, not which Stages are skipped.

---

# 25. MINING MASTERY

Each major Mining target has:

**Mastery Level 1â€“100**

Examples:

- T1 Ore Deposit Mastery;
- Quarry Deposit Mastery;
- Gem Deposit Mastery;
- higher-tier Ore Mastery.

Mastery belongs to the Deposit/action, not to individual item drops.

---

# 26. MINING MASTERY MILESTONES

Recommended baseline:

## Mastery 10

Small Mining Power bonus on that Deposit.

## Mastery 25

Improved Primary Quantity.

## Mastery 50

Improved Deep Seam / Core efficiency.

## Mastery 75

Improved by-product / Gem / Crystal extraction.

## Mastery 100

Major Deposit-specific Core bonus.

Possible Mastery-100 effects:

- extra Core Primary reward roll;
- improved Core rare roll;
- full-cycle completion bonus;
- Deposit-specific mechanical improvement.

Exact final values are defined in the complete content sections below.

---

# 27. SKILL-WIDE MINING MASTERY

Mining also gains overall Skill-Wide Mastery progression.

Possible Skill-Wide rewards:

### Early Milestones

- Mining loadout slot;
- better Mining analytics;
- small global efficiency.

### Mid Milestones

- specialization improvements;
- saved Depth Profiles;
- better worker Mining support.

### High Milestones

- advanced automation rules;
- improved Deep-Core interaction;
- additional Mining preset slots.

Skill-Wide Mastery should unlock quality-of-life and mechanics, not only raw percentage stacking.

---

# 28. MINING SPECIALIZATIONS

Unlock recommendation:

**Around Mining Level 35 / T4**

The player chooses one active Mining Specialization.

It is freely swappable outside the current action.

---

# 29. SPECIALIZATION â€” EXTRACTOR

Focus:

**Primary Resource Quantity**

Potential identity:

- more Ore / Stone / Essence per completed Stage;
- slightly higher Mining Power;
- strongest bulk resource output;
- lower rare-resource emphasis.

Best for:

- Smithing supply;
- Estate projects;
- worker-equipment production;
- large old-tier material requirements.

Extractor still completes the full Deposit cycle.

---

# 30. SPECIALIZATION â€” PROSPECTOR

Focus:

**Gems / Crystals / Secondary Materials**

Potential identity:

- improved Gem chance;
- improved by-product chance;
- improved rare mineral extraction;
- better dedicated Gem Deposit performance.

Best for:

- Jewelcrafting;
- rare crafting;
- Crystal / reagent goals;
- specialized Estate projects.

Prospector does not alter Stage order.

---

# 31. SPECIALIZATION â€” DEEP DELVER

Focus:

**Deep Seam / Core value**

Potential identity:

- higher Mining Power during Stages 4â€“5;
- more Mining XP from Stages 4â€“5;
- more Mastery XP from Stages 4â€“5;
- higher Core-material chance;
- stronger Core-only drop rate.

Best for:

- leveling;
- Mastery;
- endgame rare materials;
- Worldheart progression.

Deep Delver makes the end of the mandatory full cycle stronger rather than letting the player skip to it.

---

# 32. SPECIALIZATION RULES

Recommended:

- no permanent lock;
- no Gold respec fee;
- cannot change mid-action without restarting the current Mining action;
- saved Mining presets can remember specialization;
- higher Estate progression can unlock more saved specialization/loadout combinations.

The decision should be about current objectives, not fear of making a permanent mistake.

---

# 33. WORKSHOP / FACILITY SUPPORT

Mining should not require a dedicated building merely to function.

Mining exists independently.

Estate facilities improve it.

Recommended primary support:

**Workshop â€” Mining Branch / Mining Bay**

This keeps facility count manageable.

---

# 34. MINING FACILITY PROGRESSION

Candidate 5-tier Mining-support progression:

## Mining Support I

- Mining loadout storage;
- basic profession analytics;
- tool management.

## Mining Support II

- improved material sorting;
- first Mining planner improvements;
- small deep-stage support.

## Mining Support III

- worker Mining assignment support;
- better worker logistics;
- additional saved Mining preset.

## Mining Support IV

- advanced Ore sorting;
- worker team templates;
- improved Deep Mining support.

## Mining Support V

- endgame Mining logistics;
- advanced worker schedules;
- Deep-Core support;
- high-level Mining automation options.

The facility should mostly unlock functionality and convenience.

Raw percentage bonuses should remain secondary.

---

# 35. ESTATE INTERACTION

Mining is one of the largest suppliers of Estate development materials.

Major Estate requirements can consume:

- Stone;
- metal ores indirectly through Smithing;
- advanced minerals;
- Gems;
- rare Core resources.

This gives Mining permanent relevance even when the player outgrows early combat equipment.

Example:

A late Estate upgrade may still require large amounts of basic Stone plus high-tier components.

Workers can maintain the basic supply while the player focuses on advanced materials.

---

# 36. LONG-TERM PROJECT INTERACTION

Mining should frequently contribute to Long-Term Projects.

Examples:

- expand Storehouse;
- restore Forge;
- reinforce Worker Quarters;
- build advanced Workshop;
- construct Manor wing;
- create Runic Facility;
- develop secondary Holding.

Projects should create meaningful demand for:

- basic Stone;
- common Ores;
- advanced Bars;
- Gems;
- special Mining materials.

---

# 37. WORKER MINING

Workers can eventually perform Mining.

A Mining worker can have:

- Mining Proficiency;
- Pickaxe;
- profession clothing;
- profession jewelry;
- assigned Deposit;
- facility support;
- production rate.

Workers follow the **same full five-Stage Deposit lifecycle** as the player:

**Outcrop â†’ Shallow â†’ Main â†’ Deep â†’ Core â†’ Reset**

They cannot be configured to skip outer Stages or farm Core directly.

This prevents worker automation from bypassing Mining's defining mechanic.

---

# 38. ESTABLISHING A MINING SITE FOR WORKERS

Recommended rule:

The player must personally complete at least one full Deposit cycle to the deepest Stage before that Deposit becomes:

**Established**

An Established Deposit can be assigned to workers.

Benefits:

- player personally discovers/pushes new Mining content;
- workers maintain known content;
- clear relationship between personal progression and automation.

---

# 39. WORKERS IN THE NEWEST MINING TIER

Recommended model:

Workers may mine the player's newest Established Tier, but initially at reduced efficiency.

The penalty represents unfamiliarity with a newly pushed resource and is reduced by the player's Deposit Mastery.

Workers still complete the full five-Stage cycle.

Example direction:

- newly Established Deposit: significant worker penalty;
- player reaches Mastery 25: penalty reduced;
- player reaches Mastery 50: worker efficiency improves further;
- Mastery 100: frontier penalty is fully removed.

Older Deposits run at normal established efficiency.

Exact values are defined later in this document.

---

# 40. WORKER EQUIPMENT

Old Mining gear should have a second life.

Example:

Player upgrades:

T5 Pickaxe â†’ T6 Pickaxe

Old T5 Pickaxe can move to a worker.

The same can apply to:

- clothing;
- Ring;
- Necklace.

Worker UI must support:

- equipment templates;
- auto-equip;
- bulk assignment;
- "best available below player reserve" rules.

Avoid manual micromanagement of dozens of workers.

---

# 41. ACTIVITY PLANNER â€” MINING

Mining supports Activity Planner rules without changing the five-Stage lifecycle.

Starter rules:

- Mine indefinitely.
- Stop when Bank contains X Primary Resource.
- Stop at Mining Level X.
- Stop at Deposit Mastery X.

Later rules:

- Stop when Bank contains X Gems / Crystals.
- Mine until Stone reserve reaches X.
- Maintain minimum Ore reserve.
- Switch Deposit after a quantity goal.
- Switch saved Mining loadout / Specialization between completed actions.
- Use a fallback Deposit if the current plan is complete.

Planner logic controls **when Mining changes activity**, not how far into a Deposit the player mines.

---

# 42. FULL-CYCLE PLANNER RULE

Mining has one important planner safety rule:

> **By default, planner transitions wait until the current Stage is completed.**

Recommended options:

### Safe Transition â€” Default

Finish the current Stage, grant its reward, then switch.

### Finish Deposit

Finish the entire current Deposit through Core, then switch.

This can be selected for players who do not want to abandon partial Deposit progress.

There is no "reset at Stage X" automation rule.

Examples:

### Ore Supply Plan

Mine Iron until Bank contains 10,000 Iron Ore, then finish the current Stage and switch to Coal.

### Core-Material Plan

Mine Astralite until 20 Astral Core Fragments are obtained, then finish the current Deposit and move to Worldheart.

### Mastery Plan

Mine Cobalt until Deposit Mastery reaches 75, then finish the current Stage and proceed to the next queued profession action.

---

# 43. WORKER PLANNER

At later Estate stages the player can create worker Mining assignments.

Example:

**Team A**
- Maintain Iron Ore above 10,000.

**Team B**
- Maintain Stone above 25,000.

**Team C**
- Mine Celestial Geode continuously.

Workers always perform complete Stage progression.

If a reserve target is reached:

- finish the current Stage;
- switch to configured fallback;
- join another assignment;
- or pause.

A later Worker/ Estate system can allow a stricter **Finish Current Deposit Before Reassignment** option.

---

# 44. OLD-TIER RELEVANCE

Mining should be one of the clearest examples of old resources staying useful.

Low and mid-tier materials can remain relevant through:

- Estate construction;
- facilities;
- worker tools;
- Hunting traps;
- ammunition/components;
- cross-tier alloys;
- profession gear upgrades;
- Long-Term Projects;
- bulk structural requirements.

The player should not personally need to mine T1 Stone forever.

Workers eventually handle this.

---

# 45. CROSS-TIER MATERIAL RULE

Do not force every high-tier recipe to consume low-tier material.

Old-resource relevance must remain logical.

Good examples:

- structural construction uses large quantities of Stone;
- high-tier alloy uses one lower-tier catalyst;
- worker equipment uses old metal tiers;
- trap production uses Wood + metal components;
- facility upgrades use both common structural materials and rare high-tier materials.

Bad example:

- T10 Sword arbitrarily requires 20,000 T1 Ore only to create a sink.

---

# 46. MINING â†” SMITHING

Mining and Smithing form one of the game's most important economy loops.

Mining supplies:

- Ores;
- catalysts;
- rare minerals.

Smithing returns:

- Pickaxes;
- profession tools;
- equipment;
- worker gear;
- metal facility components.

The two skills should progress together without being completely dependent.

A player should not become permanently stuck because Mining requires an item that itself requires inaccessible Mining material.

---

# 47. MINING â†” JEWELCRAFTING

Mining supplies:

- Uncut Gems;
- rare crystals;
- special deep materials.

Jewelcrafting returns:

- profession Rings;
- profession Necklaces;
- combat jewelry;
- specialized Mining jewelry.

This creates a circular optimization loop:

**Mine Gems â†’ Craft Mining Jewelry â†’ Mine More Efficiently**

The loop must provide progression without becoming mandatory too early.

---

# 48. MINING â†” RUNECRAFTING

Higher Mining tiers can provide:

- Runic Essence;
- magical minerals;
- crystalline reagents.

Runecrafting converts these into:

- Runes;
- magical components;
- facility materials.

This gives Mining importance to Magic progression without requiring every magical material to come from Combat.

---

# 49. MINING â†” HUNTING

Mining can support Hunting indirectly through:

- metal trap components;
- weights;
- blades;
- hooks;
- advanced trap mechanisms.

Woodcutting supplies wood-based trap components.

Smithing / Fletching can assemble them.

This strengthens profession interdependence.

---

# 50. MINING XP

Mining XP is granted when a Stage is completed.

The XP curve increases strongly toward the Core:

- Outcrop gives the lowest Stage-completion XP;
- Core gives the highest Stage-completion XP.

This is intentional because:

- outer Stages contain more Density and take longer;
- deeper Stages contain less Density but represent more valuable geological material;
- completing the full Deposit should feel progressively more rewarding.

XP is not awarded merely for selecting a deeper Stage because Stages cannot be selected independently.

The exact XP multipliers are defined later.

---

# 51. MASTERY XP

Mastery XP is earned for the currently mined Deposit when each Stage is completed.

Deep Seam and Core grant substantially more Mastery XP than Outcrop.

Mastery progression remains significantly longer than basic Mining Level progression.

Expected outcome:

The player can reach Mining 100 while still having substantial Deposit Mastery goals remaining.

The exact formula is defined later in this document.

---

# 52. RARE RNG PHILOSOPHY

Mining can contain rare RNG.

However:

- odds must be visible;
- expected/hour should be shown;
- required progression should not depend entirely on extremely rare drops;
- dedicated Deposit options should exist for important resource families where reasonable.

Rare finds should feel exciting without making progression impossible to plan.

---

# 53. MINING SCREEN â€” HIGH-LEVEL UI

Recommended layout:

## Deposit Browser

Shows:

- Deposit icon;
- Tier;
- required Mining Level;
- required Pickaxe;
- Primary Resource;
- relevant tags;
- current Mastery;
- worker availability / Established status.

## Active Mining Panel

Shows:

- current Deposit;
- current Stage;
- current Density / maximum Density;
- five-Stage lifecycle track;
- Strike timer;
- Pickaxe Mining Power;
- estimated actions remaining in Stage;
- current Stage reward;
- current rare / Gem / Crystal chances.

## Planning Panel

Shows:

- Specialization;
- Loadout;
- stop condition;
- transition mode:
  - finish current Stage;
  - finish current Deposit;
- queue / fallback when unlocked.

## Analytics Panel

Shows expected:

- Primary Resource/hour;
- secondary resources/hour;
- Gems / Crystals/hour;
- XP/hour;
- Mastery XP/hour;
- full Deposit cycle time;
- average Deposits/hour;
- percentage of cycle time spent in each Stage;
- ETA to next Level;
- ETA to selected Mastery target.

---

# 54. FIVE-STAGE DENSITY UI

The five-Stage lifecycle must be visually obvious.

Example:

**Outcrop â†’ Shallow Vein â†’ Main Vein â†’ Deep Seam â†’ Core**

Each Stage tile should show:

- completed / current / upcoming state;
- Density value;
- current Density remaining;
- expected Primary reward;
- rare / Crystal multiplier;
- completed reward summary after clearing the Stage.

The active Stage has its own Density bar.

Example:

**Main Vein â€” 31 / 58 Density remaining**

Below it:

**Mining Power: 14 per strike**  
**Estimated Strikes Remaining: 3**

The player should immediately see two things:

1. the Stage gets thinner as the Deposit goes deeper;
2. the rewards get stronger as the Deposit approaches Core.

---

# 55. ITEM / RATE INSPECTION

Selecting a Deposit should show:

- exact Primary Resource;
- Base Density;
- Density of all five Stages;
- Pickaxe Mining Power;
- estimated strikes per Stage;
- base Strike Time;
- final Strike Time;
- reward quantity by Stage;
- by-product pool;
- rare / Gem / Crystal chance by Stage;
- Mastery bonuses;
- tool effects;
- clothing effects;
- jewelry effects;
- Specialization effects;
- facility effects;
- expected resources/hour;
- expected full-cycle time.

The player should not need a wiki to understand Mining efficiency.

---

# 56. OFFLINE MINING

Offline Mining uses the exact same Density and Stage rules as active Mining.

The save stores:

- active Deposit;
- current Stage;
- current Stage Density remaining;
- progress within the current Mining strike;
- active Specialization;
- active loadout;
- planner rules.

Offline simulation calculates:

- Mining strikes;
- Density removed;
- completed Stages;
- completed Deposits;
- Primary Resources;
- by-products;
- Gems / Crystals;
- XP;
- Mastery XP;
- Level-ups;
- Mastery milestones;
- planner transitions.

The simulation must never jump directly to Core or flatten the Deposit into a generic reward/hour table if doing so changes actual outcomes.

---

# 57. OFFLINE RESULTS

Mining offline results should clearly show:

- time elapsed;
- Deposits completed;
- current Deposit / Stage if still in progress;
- resources gained;
- by-products gained;
- Gems / Crystals / rare finds;
- Mining XP;
- Mining Levels;
- Mastery XP;
- Mastery Levels;
- planner actions completed;
- worker production separately if relevant.

A compact breakdown may additionally show:

- Outcrops completed;
- Shallow Veins completed;
- Main Veins completed;
- Deep Seams completed;
- Cores completed.

This helps verify that offline Mining is actually following the five-Stage lifecycle.

---

# 58. FAILURE / STOP CONDITIONS

Mining should rarely fail.

Potential stop / switch conditions:

- selected Bank target reached;
- Mining Level target reached;
- Mastery target reached;
- required Pickaxe is removed / unavailable;
- planner switches activity;
- manual stop.

By default:

- manual Stop pauses immediately and preserves current Stage Density progress;
- switching to a different activity after a planner condition finishes the current Stage first;
- switching to a different Deposit abandons unfinished Density on the current Deposit unless the player explicitly chooses **Finish Current Deposit**.

Because stackable Bank resources are unlimited, Mining does not stop from inventory capacity.

---

# 59. CHRONICLES â€” EARLY MINING GOALS

Chronicles should introduce Mining gradually.

Possible early goals:

1. Equip first Pickaxe.
2. Start Copper Vein.
3. Complete the Outcrop.
4. Watch Density decrease with each Mining strike.
5. Reach the Main Vein.
6. Complete first Core.
7. Complete first full Deposit cycle.
8. Reach Mining Level 10.
9. Craft / upgrade first Pickaxe through Smithing.
10. Discover first Gem / Crystal by-product.
11. Reach first Deposit Mastery milestone.

Chronicles should explain:

- why Outcrop takes longer;
- why deeper Stages have less Density;
- why Core rewards are better;
- why a stronger Pickaxe reduces the number of strikes required.

---

# 60. CHRONICLES â€” MIDGAME MINING GOALS

Possible goals:

- unlock Mining Specialization;
- create first dedicated Mining loadout;
- reach Mastery 50 on a Deposit;
- build Mining-support Workshop upgrade;
- establish first worker Mining site;
- assign first Mining worker;
- mine first dedicated Gem Deposit;
- complete first high-value Core reward;
- supply a Long-Term Project with Mining materials.

---

# 61. CHRONICLES â€” LATE MINING GOALS

Possible goals:

- establish a high-tier Mining network;
- equip workers with inherited profession gear;
- reach Mining 100;
- master selected T10 Deposit;
- complete a major Estate project using Deep-Core materials;
- maintain multiple resource reserves through workers;
- unlock endgame Mining facility support;
- unlock and complete Worldheart Core.

Chronicles should show direction without requiring 100% completion of every Deposit Mastery.

---

# 62. MINING ACHIEVEMENT / COLLECTION IDEAS

Not required for core progression, but possible completion goals:

- mine every Deposit;
- reach Mastery 100 on every primary Ore;
- obtain every Gem;
- complete all Stage-5 Core discoveries;
- produce a large lifetime quantity of Stone;
- fully equip a Mining worker team.

These belong to completion systems rather than mandatory progression.

---

# 63. CONTENT NAMING â€” FINAL DIRECTION

This document now owns the complete baseline Mining content.

There is **no separate `01A_MINING_CONTENT_AND_TIERS.md`**.

The exact baseline defined below includes:

- 10 primary Ore families;
- 4 structural Quarry resources;
- 2 catalyst deposits;
- 3 magical / Runic deposits;
- 3 dedicated Gem deposits;
- 1 Level-100 Deep-Core deposit;
- 10 Gems;
- 4 Core-material families;
- Starter + 10 Pickaxe progression;
- Mining clothing progression;
- profession jewelry;
- exact Deposit unlock levels;
- exact Pickaxe requirements;
- exact base action times;
- exact Stage multipliers;
- exact XP baselines;
- exact by-product rules;
- exact Mastery milestones;
- exact Specialization effects;
- Estate / worker interaction;
- complete Mining unlock roadmap.

Names are considered the **current canon baseline** for Mining and may only change later for world/lore consistency, not because a second Mining content document is expected.

---

# 64. CONTENT IMPLEMENTATION RULE

Every Mining target should use one shared data model.

Each Deposit stores:

- ID;
- Name;
- Tier;
- Mining Level requirement;
- Pickaxe requirement;
- Deposit Archetype;
- Primary Resource;
- Base Primary Quantity;
- **Base Density**;
- Base Strike Time;
- Stage-1 Base XP;
- Mastery ID;
- by-product table;
- Core-material family where applicable;
- worker Establishment state;
- icon / visual key.

Global Stage data stores:

- Density multiplier;
- Primary Quantity multiplier;
- Mining XP multiplier;
- Mastery XP multiplier;
- Rare / Gem / Crystal chance multiplier.

Pickaxes store:

- Mining Power;
- Mining Speed;
- mechanical effect.

This keeps Mining data-driven rather than creating custom code for every Ore.

---

# 65. BALANCE GOALS

Mining should support several valid build goals even though every Deposit always completes all five Stages.

The player can optimize for:

- Primary Resource/hour;
- XP/hour;
- Mastery/hour;
- Gems / Crystals/hour;
- rare materials/hour;
- Core materials/hour;
- Estate resources/hour;
- worker efficiency.

There should not be one universally correct equipment / jewelry / Specialization setup.

The five-Stage order is fixed.

The optimization comes from **how efficiently and profitably the player traverses that fixed cycle**.

---

# 66. ANTI-BLOAT RULES

Avoid:

- one unique Stone per Tier unless mechanically justified;
- dozens of Ore variants that exist only as recolors;
- a different Mining clothing set every 10 levels;
- too many Gems with identical purposes;
- separate facilities for every Deposit type;
- random tool affixes unless a future item system explicitly requires them.

Prefer:

- reusable resource families;
- clear Tier progression;
- meaningful mechanical differences;
- shared profession equipment where appropriate;
- a limited number of strong choices.

---

# 67. CURRENT LOCK CANDIDATES

Recommended Mining baseline:

1. Mining uses **5 sequential Stages**.
2. Stage order is always Outcrop â†’ Shallow Vein â†’ Main Vein â†’ Deep Seam â†’ Core.
3. The player cannot choose a Depth Target.
4. The player cannot intentionally reset a Deposit early.
5. Every Stage has Density.
6. Density decreases with depth.
7. Pickaxe Mining Power removes Density per strike.
8. Pickaxe Mining Speed reduces Strike Time.
9. Every completed Stage gives resources, XP, and Mastery XP.
10. Primary reward quantity increases with depth.
11. Rare / Gem / Crystal chance increases strongly with depth.
12. Core has the least Density and the best reward profile.
13. Completing Core completes the Deposit.
14. A fresh Deposit automatically begins at Outcrop.
15. No manual respawn clicking.
16. No tool durability.
17. Mining requires a Pickaxe.
18. Pickaxes often upgrade through previous Pickaxes.
19. Mining has approximately 20+ meaningful targets across 10 Tiers.
20. Gems exist both as by-products and dedicated Deposits.
21. Mining uses individual Deposit Mastery 1â€“100.
22. Skill-Wide Mining Mastery also exists.
23. Mining Specializations unlock around Level 35.
24. Specializations:
    - Extractor;
    - Prospector;
    - Deep Delver.
25. Specializations are freely swappable outside the active action.
26. Mining profession gear includes Tool + Clothes + Ring + Necklace.
27. Shared Gathering gear is common early; specialist Mining gear becomes more important later.
28. Mining is supported by a Workshop / Mining Bay infrastructure branch.
29. Player must personally complete a full Deposit through Core before workers can use that Deposit.
30. Workers always perform full five-Stage cycles.
31. Workers are less effective on frontier Mining until the player develops Mastery.
32. Old Pickaxes and Mining gear can be reassigned to workers.
33. Low-tier Mining resources remain useful through Estate, facilities, worker gear, traps, projects, and cross-tier recipes.
34. Mining strongly interacts with Smithing, Jewelcrafting, Runecrafting, Hunting, and the Estate.
35. Mining analytics clearly show Density, strikes remaining, cycle time, and expected/hour values.
36. Offline Mining uses the exact same Density / Stage rules as active Mining.
37. Exact resource names and implementation values are defined in this single Mining MD.

---

# 68. MAJOR OPEN QUESTIONS â€” RECOMMENDED ANSWERS

These are filled with the recommended baseline so the Mining design can be reviewed instead of re-invented from scratch.

## Is Depth Target a player choice?

**No.**

There is no Depth Target system.

Every Deposit always runs:

**Outcrop â†’ Shallow Vein â†’ Main Vein â†’ Deep Seam â†’ Core**

before it resets.

---

## Can the player intentionally reset after Outcrop / Shallow / Main / Deep?

**No.**

Skipping the outer layers would undermine the entire Mining identity.

The reward is reaching the richer center after working through the denser outside.

---

## What exactly is Density?

**Density is Stage HP.**

Each Mining strike removes Density based on Pickaxe Mining Power.

When Density reaches 0:

- Stage completes;
- reward is granted;
- next Stage begins automatically.

---

## Should Density always decrease deeper into the Deposit?

**Yes.**

Baseline Stage Density multipliers are:

- Outcrop 1.00x;
- Shallow 0.78x;
- Main 0.58x;
- Deep 0.38x;
- Core 0.20x.

Special future Deposits can bend this only if the mechanic genuinely requires it.

---

## Should Core always have the best payout?

**Yes.**

Core has:

- highest Primary Quantity multiplier;
- highest Mining XP multiplier;
- highest Mastery XP multiplier;
- highest Gem / Crystal / rare multiplier;
- access to selected Core-only drops.

It is the payoff for completing the full Deposit.

---

## Should rewards be granted only after Core?

**No.**

Every Stage grants a reward.

Core is the best Stage, not the only rewarding Stage.

---

## What happens if the player presses Stop mid-Stage?

**Pause and preserve the current Stage Density progress.**

When the player resumes the same Mining activity, the Stage can continue from the saved Density.

---

## What happens if the player changes to another Deposit?

**Recommended baseline: unfinished current-Stage Density is abandoned.**

Already completed Stage rewards remain.

The UI must warn when switching would abandon partial Deposit progress.

Activity Planner can avoid this through:

- Finish Current Stage;
- Finish Current Deposit.

---

## Should every Deposit always have exactly five Stages?

**Yes for baseline Mining.**

A universal five-Stage lifecycle makes:

- UI;
- Mastery;
- Pickaxes;
- workers;
- analytics;
- offline simulation

consistent across all Mining content.

---

## Are all five Stages available from Mining Level 1?

**Yes.**

The defining mechanic should be learned immediately.

Higher progression makes the player better at reaching and exploiting Core rather than hiding Core behind another unlock.

---

## Do Deposits permanently deplete?

**No.**

Completing Core finishes the Deposit and immediately starts a fresh Deposit of the same type at Outcrop.

---

## Is there a respawn timer?

**No.**

There is no idle-breaking waiting period between Deposits.

---

## What determines Stage duration?

Primarily:

- Stage Density;
- Pickaxe Mining Power;
- Strike Time;
- Mining Speed;
- Mastery;
- clothing;
- jewelry;
- Specialization.

Stage duration is therefore emergent rather than directly hard-coded as five unrelated timers.

---

## Pickaxe durability?

**No durability.**

Tools are permanent progression items.

---

## Should Pickaxes have both Mining Power and Mining Speed?

**Yes.**

Mining Power visibly removes more Density per strike.

Mining Speed makes strikes occur faster.

This makes tool upgrades more tactile and understandable.

---

## How many main Mining targets should exist?

**23 baseline Deposits** in the completed 1â€“100 design, including Worldheart.

This includes Ore, Quarry, Gem, Catalyst, Essence, and Deep-Core targets with different economic roles.

---

## How many primary Ore tiers?

**10 primary Ore families**, aligned to the 10 profession content tiers.

---

## Should Stone have 10 tiers?

**No.**

Use only four structural grades:

- Stone;
- Granite;
- Blackstone;
- Aetherstone.

This is enough to support House â†’ Holdings progression without useless inventory bloat.

---

## Should Gems only be RNG by-products?

**No.**

Use both:

- Gem / Crystal by-products from normal Deposits;
- dedicated Gem Deposits for intentional farming.

---

## Should rare Mining drops be required for basic progression?

**Usually no.**

Rare resources support:

- optimization;
- special gear;
- high-tier facilities;
- advanced projects;
- endgame content.

Core profession progression must still have deterministic paths.

---

## Should exact rare chances be visible?

**Yes.**

UI should show:

- current Stage chance;
- final modified chance;
- expected/hour.

---

## Should some drops exist only from Core?

**Yes, selectively.**

Core-only items give the final Stage unique excitement.

They should not include every basic progression material.

---

## Should Mining require an Estate facility to function?

**No.**

Personal Mining only requires:

- Mining Level;
- required Pickaxe.

Estate infrastructure improves planning, logistics, analytics, and workers.

---

## Can workers skip to Core?

**No.**

Workers always perform the same five-Stage lifecycle.

---

## How does a Deposit become available to workers?

The player must personally complete at least one full cycle through Core.

The Deposit then becomes **Established**.

---

## Should workers be forbidden from the newest Tier?

**No hard ban.**

They can work an Established frontier Deposit at reduced efficiency.

Player Deposit Mastery reduces that penalty.

---

## Should workers have full Deposit Mastery?

**No.**

Workers have simplified Mining Proficiency.

Player Deposit Mastery helps define how well the account understands that Deposit.

---

## Should workers use profession equipment?

**Yes.**

They can use:

- Pickaxe;
- clothing;
- Ring;
- Necklace.

Bulk management / templates are mandatory for usability.

---

## Should worker Mining have unique upkeep?

**No Mining-specific upkeep currency.**

Any worker provisions belong to the global Worker / Estate system.

---

## Should Mining Specializations be permanent?

**No.**

They are freely swappable outside the active Mining action.

---

## Should there be more than three Mining Specializations?

**Not initially.**

The three clean goals are:

- Extractor â€” Primary quantity;
- Prospector â€” Gems / Crystals / by-products;
- Deep Delver â€” Deep/Core progression.

Only add a fourth if it creates a genuinely different build.

---

## Should Mining Mastery go beyond 100?

**No for baseline.**

Use:

- Deposit Mastery 1â€“100;
- Skill-Wide Mastery completion.

Post-100 systems can be considered with future endgame expansion.

---

## Is Mastery 100 required for normal progression?

**No.**

Mastery 100 is optimization / completion content.

Selected endgame content can require moderate Mastery milestones such as 50, but not 100 on every Deposit.

---

## Does Mining Level 100 finish Mining?

**No.**

Level 100 unlocks the end of the normal level track.

Remaining progression includes:

- Deposit Mastery;
- Worldheart;
- profession gear;
- worker network;
- Estate infrastructure;
- completion goals.

---

## Should normal Deposits have random traits?

**No.**

Baseline Mining should remain predictable and plannable.

Random modifiers can belong to a future special endgame system if desired.

---

## Should Mining use active clicking / critical-hit minigames?

**No baseline active minigame.**

The gameplay is:

- target choice;
- build;
- equipment;
- specialization;
- Mastery;
- worker planning;
- long-term economy.

---

## Should deep Stages contain random hazards?

**No baseline fail-state hazards.**

The deeper layers are rewarding, not random punishment.

Special future endgame content can introduce environmental requirements separately.

---

## Should Mining use Energy / Stamina?

**No.**

The Personal Activity Slot already creates the opportunity cost.

---

## Should Mining generate Gold directly?

**Generally no.**

Mining produces resources.

Gold can come from selling or other economy systems.

---

## Should Ore be sellable?

**Yes if global item selling exists**, but selling should usually be secondary to:

- Smithing;
- Estate;
- workers;
- projects;
- crafting.

---

## Should Mining be mandatory for every account?

**Strongly useful, but not the only theoretical source of every material.**

Some resources can appear through:

- Combat;
- Shops;
- rewards.

Mining remains the best reliable source of its core material families.

---

## Should the Core be the shortest Stage?

**Yes under the baseline Density curve.**

It has only 20% of Base Density.

Its high payout is intentionally concentrated into a short final Stage.

---

## Should a stronger Pickaxe reduce the visible number of strikes?

**Yes.**

This is one of the main reasons Density exists.

A tool upgrade should visibly turn:

**6 strikes â†’ 5 strikes**

or:

**3 strikes â†’ 2 strikes**

on appropriate Stages.

---

## Should Stage payout occur per strike or per Stage completion?

**Stage completion.**

Strikes are progress through Density.

The meaningful item payout happens when the geological layer is cleared.

This keeps reward moments distinct and makes Core completion satisfying.

---

## Should partial Density produce partial Ore?

**No.**

An unfinished Stage does not grant a fraction of its Stage-completion reward.

Completed earlier Stages remain safely earned.

---

# 69. COMPLETE 10-TIER RESOURCE LADDER

The baseline Mining metal progression is:

| Tier | Deposit | Primary Ore | Lvl | Required Pickaxe | Base Density | Tier Gem | Core Family | Smithing Metal |
|---|---|---|---|---|---|---|---|---|
| T1 | Copper Vein | Copper Ore | 1 | Worn Pickaxe | 36 | Opal | Mineral Core Fragment | Copper Ingot |
| T2 | Iron Vein | Iron Ore | 11 | Copper Pickaxe | 48 | Sapphire | Mineral Core Fragment | Iron Ingot |
| T3 | Cobalt Vein | Cobalt Ore | 21 | Iron Pickaxe | 66 | Garnet | Mineral Core Fragment | Cobalt Ingot |
| T4 | Argent Vein | Argent Ore | 31 | Cobalt Pickaxe | 84 | Emerald | Refined Core Fragment | Argent Ingot |
| T5 | Emberite Vein | Emberite Ore | 41 | Argent Pickaxe | 108 | Ruby | Refined Core Fragment | Emberite Ingot |
| T6 | Frostsilver Vein | Frostsilver Ore | 51 | Emberite Pickaxe | 132 | Topaz | Refined Core Fragment | Frostsilver Ingot |
| T7 | Stormiron Vein | Stormiron Ore | 61 | Frostsilver Pickaxe | 162 | Amethyst | Prismatic Core Fragment | Stormiron Ingot |
| T8 | Aetherite Vein | Aetherite Ore | 71 | Stormiron Pickaxe | 198 | Aquamarine | Prismatic Core Fragment | Aetherite Ingot |
| T9 | Umbral Vein | Umbral Ore | 81 | Aetherite Pickaxe | 240 | Diamond | Prismatic Core Fragment | Umbral Ingot |
| T10 | Astralite Vein | Astralite Ore | 91 | Umbral Pickaxe | 288 | Astral Prism | Astral Core Fragment | Astralite Ingot |

## Naming direction

The first three Tiers remain grounded and immediately readable:

- Copper;
- Iron;
- Cobalt.

From T4 onward the world becomes increasingly fantastical:

- Argent;
- Emberite;
- Frostsilver;
- Stormiron;
- Aetherite;
- Umbral;
- Astralite.

The listed Smithing Metal is the intended bar / ingot identity.

Smithing owns final recipes.

Mining owns raw acquisition.

---

# 70. COMPLETE MINING DEPOSIT ROSTER

The baseline 1â€“100 Mining game contains **23 major Deposits**.

| Lvl | Tier | Deposit | Archetype | Primary | Base Qty | Required Pickaxe | Base Density | Strike Time | S1 XP |
|---|---|---|---|---|---|---|---|---|---|
| 1 | T1 | Copper Vein | Ore | Copper Ore | 1 | Worn Pickaxe | 36 | 2.40s | 6 |
| 5 | T1 | Fieldstone Quarry | Quarry | Stone | 3 | Worn Pickaxe | 42 | 2.50s | 5 |
| 11 | T2 | Iron Vein | Ore | Iron Ore | 1 | Copper Pickaxe | 48 | 2.55s | 10 |
| 15 | T2 | Coal Seam | Catalyst | Coal | 2 | Copper Pickaxe | 48 | 2.70s | 9 |
| 18 | T2 | Shallow Geode Field | Gem | Gem Roll | 1 | Copper Pickaxe | 56 | 2.90s | 12 |
| 21 | T3 | Cobalt Vein | Ore | Cobalt Ore | 1 | Iron Pickaxe | 66 | 2.70s | 16 |
| 1 | T1 | Raw Essence Seam | Essence | Raw Essence | 1 | Worn Pickaxe | 77 | 3.00s | 18 |
| 31 | T4 | Argent Vein | Ore | Argent Ore | 1 | Cobalt Pickaxe | 84 | 2.85s | 24 |
| 35 | T4 | Granite Shelf | Quarry | Granite | 2 | Cobalt Pickaxe | 98 | 3.10s | 22 |
| 41 | T5 | Emberite Vein | Ore | Emberite Ore | 1 | Argent Pickaxe | 108 | 3.00s | 35 |
| 45 | T5 | Fluxstone Vein | Catalyst | Fluxstone | 1 | Argent Pickaxe | 126 | 3.25s | 32 |
| 48 | T5 | Prismatic Gem Vein | Gem | Gem Roll | 1 | Argent Pickaxe | 144 | 3.35s | 40 |
| 51 | T6 | Frostsilver Vein | Ore | Frostsilver Ore | 1 | Emberite Pickaxe | 132 | 3.15s | 49 |
| 31 | T4 | Runic Crystal Seam | Essence | Runic Crystal | 1 | Copper Pickaxe | 154 | 3.50s | 55 |
| 61 | T7 | Stormiron Vein | Ore | Stormiron Ore | 1 | Frostsilver Pickaxe | 162 | 3.30s | 67 |
| 65 | T7 | Blackstone Quarry | Quarry | Blackstone | 2 | Frostsilver Pickaxe | 189 | 3.65s | 60 |
| 71 | T8 | Aetherite Vein | Ore | Aetherite Ore | 1 | Stormiron Pickaxe | 198 | 3.45s | 89 |
| 78 | T8 | Celestial Geode | Gem | Gem Roll | 1 | Stormiron Pickaxe | 264 | 3.85s | 98 |
| 81 | T9 | Umbral Vein | Ore | Umbral Ore | 1 | Aetherite Pickaxe | 240 | 3.60s | 116 |
| 61 | T7 | Aether Essence Core | Essence | Aether Essence | 1 | Frostsilver Pickaxe | 320 | 4.05s | 125 |
| 91 | T10 | Astralite Vein | Ore | Astralite Ore | 1 | Umbral Pickaxe | 288 | 3.80s | 149 |
| 95 | T10 | Aetherstone Quarry | Quarry | Aetherstone | 1 | Umbral Pickaxe | 384 | 4.20s | 140 |
| 100 | T10+ | Worldheart Deposit | Deep-Core | Worldstone | 1 | Astralite Pickaxe | 580 | 4.50s | 200 |

Archetype count:

- 10 Ore Deposits;
- 4 Quarries;
- 2 Catalyst Deposits;
- 3 dedicated Gem Deposits;
- 3 Essence / Runic Deposits;
- 1 Level-100 Deep-Core Deposit.

No baseline Deposit should be added only to fill space.

A new Deposit needs a distinct economic or progression role.

---

# 71. GLOBAL FIVE-STAGE MODEL â€” FINAL

All normal Mining Deposits use:

| Stage | Name | Density | Primary Qty | Mining XP | Mastery XP | Rare / Crystal |
|---|---|---|---|---|---|---|
| 1 | Outcrop | 1.00x | 1.00x | 1.00x | 1.00x | 1.00x |
| 2 | Shallow Vein | 0.78x | 1.25x | 1.40x | 1.50x | 1.75x |
| 3 | Main Vein | 0.58x | 1.60x | 2.00x | 2.30x | 3.00x |
| 4 | Deep Seam | 0.38x | 2.20x | 3.00x | 3.50x | 5.50x |
| 5 | Core | 0.20x | 3.20x | 4.50x | 5.50x | 10.00x |

The most important relationship is:

**Density â†“ as depth increases**

while:

**Reward quality â†‘ as depth increases**

This produces the intended cycle:

**large outer layer â†’ progressively thinner rich layers â†’ small high-value Core**

---

# 72. WHAT THE FIVE-STAGE CURVE MEANS

Because the Stage order is mandatory, Stage share is useful for understanding the feel of one complete Deposit.

| Stage | Share of Density | Share of Primary Mult. | Share of XP Mult. | Share of Mastery Mult. | Share of Rare Weight |
|---|---|---|---|---|---|
| Outcrop | 34.0% | 10.8% | 8.4% | 7.2% | 4.7% |
| Shallow Vein | 26.5% | 13.5% | 11.8% | 10.9% | 8.2% |
| Main Vein | 19.7% | 17.3% | 16.8% | 16.7% | 14.1% |
| Deep Seam | 12.9% | 23.8% | 25.2% | 25.4% | 25.9% |
| Core | 6.8% | 34.6% | 37.8% | 39.9% | 47.1% |

Interpretation:

- Outcrop contains about one-third of the total raw Density in a Deposit.
- Core contains less than 7% of the total Density.
- Core contributes more than one-third of the total Primary reward multiplier.
- Core carries almost half of the full-cycle rare-drop weighting.

This is intentional.

The player spends most of the physical Mining effort breaking into the Deposit, while the most exciting rewards are concentrated near the center.

---

# 73. EXACT DEPOSIT DENSITY

Every Deposit has one Base Density.

Stage Density is derived from the global multipliers.

| Deposit | Base | Outcrop | Shallow | Main | Deep | Core |
|---|---|---|---|---|---|---|
| Copper Vein | 36 | 36 | 29 | 21 | 14 | 8 |
| Fieldstone Quarry | 42 | 42 | 33 | 25 | 16 | 9 |
| Iron Vein | 48 | 48 | 38 | 28 | 19 | 10 |
| Coal Seam | 48 | 48 | 38 | 28 | 19 | 10 |
| Shallow Geode Field | 56 | 56 | 44 | 33 | 22 | 12 |
| Cobalt Vein | 66 | 66 | 52 | 39 | 26 | 14 |
| Raw Essence Seam | 77 | 77 | 61 | 45 | 30 | 16 |
| Argent Vein | 84 | 84 | 66 | 49 | 32 | 17 |
| Granite Shelf | 98 | 98 | 77 | 57 | 38 | 20 |
| Emberite Vein | 108 | 108 | 85 | 63 | 42 | 22 |
| Fluxstone Vein | 126 | 126 | 99 | 74 | 48 | 26 |
| Prismatic Gem Vein | 144 | 144 | 113 | 84 | 55 | 29 |
| Frostsilver Vein | 132 | 132 | 103 | 77 | 51 | 27 |
| Runic Crystal Seam | 154 | 154 | 121 | 90 | 59 | 31 |
| Stormiron Vein | 162 | 162 | 127 | 94 | 62 | 33 |
| Blackstone Quarry | 189 | 189 | 148 | 110 | 72 | 38 |
| Aetherite Vein | 198 | 198 | 155 | 115 | 76 | 40 |
| Celestial Geode | 264 | 264 | 206 | 154 | 101 | 53 |
| Umbral Vein | 240 | 240 | 188 | 140 | 92 | 48 |
| Aether Essence Core | 320 | 320 | 250 | 186 | 122 | 64 |
| Astralite Vein | 288 | 288 | 225 | 168 | 110 | 58 |
| Aetherstone Quarry | 384 | 384 | 300 | 223 | 146 | 77 |
| Worldheart Deposit | 580 | 580 | 453 | 337 | 221 | 116 |

Density is not cosmetic.

It directly determines how many Mining strikes are required.

---

# 74. BASELINE STRIKES AT MINIMUM REQUIRED PICKAXE

The following shows strike counts before clothing, Mastery, Specialization, or other Mining-Power bonuses.

| Deposit | Min Pickaxe | Power | Outcrop | Shallow | Main | Deep | Core | Full Cycle |
|---|---|---|---|---|---|---|---|---|
| Copper Vein | Worn Pickaxe | 6 | 6 | 5 | 4 | 3 | 2 | 20 |
| Fieldstone Quarry | Worn Pickaxe | 6 | 7 | 6 | 5 | 3 | 2 | 23 |
| Iron Vein | Copper Pickaxe | 8 | 6 | 5 | 4 | 3 | 2 | 20 |
| Coal Seam | Copper Pickaxe | 8 | 6 | 5 | 4 | 3 | 2 | 20 |
| Shallow Geode Field | Copper Pickaxe | 8 | 7 | 6 | 5 | 3 | 2 | 23 |
| Cobalt Vein | Iron Pickaxe | 11 | 6 | 5 | 4 | 3 | 2 | 20 |
| Raw Essence Seam | Worn Pickaxe | 11 | 7 | 6 | 5 | 3 | 2 | 23 |
| Argent Vein | Cobalt Pickaxe | 14 | 6 | 5 | 4 | 3 | 2 | 20 |
| Granite Shelf | Cobalt Pickaxe | 14 | 7 | 6 | 5 | 3 | 2 | 23 |
| Emberite Vein | Argent Pickaxe | 18 | 6 | 5 | 4 | 3 | 2 | 20 |
| Fluxstone Vein | Argent Pickaxe | 18 | 7 | 6 | 5 | 3 | 2 | 23 |
| Prismatic Gem Vein | Argent Pickaxe | 18 | 8 | 7 | 5 | 4 | 2 | 26 |
| Frostsilver Vein | Emberite Pickaxe | 22 | 6 | 5 | 4 | 3 | 2 | 20 |
| Runic Crystal Seam | Copper Pickaxe | 22 | 7 | 6 | 5 | 3 | 2 | 23 |
| Stormiron Vein | Frostsilver Pickaxe | 27 | 6 | 5 | 4 | 3 | 2 | 20 |
| Blackstone Quarry | Frostsilver Pickaxe | 27 | 7 | 6 | 5 | 3 | 2 | 23 |
| Aetherite Vein | Stormiron Pickaxe | 33 | 6 | 5 | 4 | 3 | 2 | 20 |
| Celestial Geode | Stormiron Pickaxe | 33 | 8 | 7 | 5 | 4 | 2 | 26 |
| Umbral Vein | Aetherite Pickaxe | 40 | 6 | 5 | 4 | 3 | 2 | 20 |
| Aether Essence Core | Frostsilver Pickaxe | 40 | 8 | 7 | 5 | 4 | 2 | 26 |
| Astralite Vein | Umbral Pickaxe | 48 | 6 | 5 | 4 | 3 | 2 | 20 |
| Aetherstone Quarry | Umbral Pickaxe | 48 | 8 | 7 | 5 | 4 | 2 | 26 |
| Worldheart Deposit | Astralite Pickaxe | 58 | 10 | 8 | 6 | 4 | 2 | 30 |

The goal is that a newly accessible Deposit feels workable with the previous Pickaxe, while the new Pickaxe visibly reduces strike count on that same content.

This creates an immediate tool-upgrade payoff.

---

# 75. BASELINE STAGE TIMES

Using the minimum required Pickaxe and no Mining-Speed bonuses:

| Deposit | Outcrop | Shallow | Main | Deep | Core | Full Cycle |
|---|---|---|---|---|---|---|
| Copper Vein | 14.4s | 12.0s | 9.6s | 7.2s | 4.8s | 48.0s |
| Fieldstone Quarry | 17.5s | 15.0s | 12.5s | 7.5s | 5.0s | 57.5s |
| Iron Vein | 15.3s | 12.8s | 10.2s | 7.6s | 5.1s | 51.0s |
| Coal Seam | 16.2s | 13.5s | 10.8s | 8.1s | 5.4s | 54.0s |
| Shallow Geode Field | 20.3s | 17.4s | 14.5s | 8.7s | 5.8s | 66.7s |
| Cobalt Vein | 16.2s | 13.5s | 10.8s | 8.1s | 5.4s | 54.0s |
| Raw Essence Seam | 21.0s | 18.0s | 15.0s | 9.0s | 6.0s | 69.0s |
| Argent Vein | 17.1s | 14.2s | 11.4s | 8.6s | 5.7s | 57.0s |
| Granite Shelf | 21.7s | 18.6s | 15.5s | 9.3s | 6.2s | 71.3s |
| Emberite Vein | 18.0s | 15.0s | 12.0s | 9.0s | 6.0s | 60.0s |
| Fluxstone Vein | 22.8s | 19.5s | 16.2s | 9.8s | 6.5s | 74.8s |
| Prismatic Gem Vein | 26.8s | 23.4s | 16.8s | 13.4s | 6.7s | 87.1s |
| Frostsilver Vein | 18.9s | 15.8s | 12.6s | 9.4s | 6.3s | 63.0s |
| Runic Crystal Seam | 24.5s | 21.0s | 17.5s | 10.5s | 7.0s | 80.5s |
| Stormiron Vein | 19.8s | 16.5s | 13.2s | 9.9s | 6.6s | 66.0s |
| Blackstone Quarry | 25.6s | 21.9s | 18.2s | 10.9s | 7.3s | 84.0s |
| Aetherite Vein | 20.7s | 17.2s | 13.8s | 10.4s | 6.9s | 69.0s |
| Celestial Geode | 30.8s | 26.9s | 19.2s | 15.4s | 7.7s | 100.1s |
| Umbral Vein | 21.6s | 18.0s | 14.4s | 10.8s | 7.2s | 72.0s |
| Aether Essence Core | 32.4s | 28.3s | 20.2s | 16.2s | 8.1s | 105.3s |
| Astralite Vein | 22.8s | 19.0s | 15.2s | 11.4s | 7.6s | 76.0s |
| Aetherstone Quarry | 33.6s | 29.4s | 21.0s | 16.8s | 8.4s | 109.2s |
| Worldheart Deposit | 45.0s | 36.0s | 27.0s | 18.0s | 9.0s | 135.0s |

These are baseline examples.

Actual Stage duration changes with:

- Pickaxe Mining Power;
- Pickaxe Mining Speed;
- profession gear;
- Mastery;
- Specialization;
- account modifiers.

The Core is normally the shortest Stage because it has the least Density.

---

# 76. PRIMARY RESOURCE PAYOUT BY STAGE

Expected Primary payout uses:

**Base Quantity Ã— Stage Primary Quantity Multiplier**

| Base Qty | Outcrop | Shallow | Main | Deep | Core | Expected Cycle Total |
|---|---|---|---|---|---|---|
| 1 | 1.00 | 1.25 | 1.60 | 2.20 | 3.20 | 9.25 |
| 2 | 2.00 | 2.50 | 3.20 | 4.40 | 6.40 | 18.50 |
| 3 | 3.00 | 3.75 | 4.80 | 6.60 | 9.60 | 27.75 |

For fractional expected Quantity:

- whole number becomes guaranteed;
- fractional remainder becomes chance for +1.

Example:

**1.60 expected**

means:

- 1 guaranteed;
- 60% chance for +1.

This allows rewards to scale smoothly without requiring every Stage to drop giant stacks.

---

# 77. EXACT BASE MINING XP

Stage-completion XP uses:

**Stage-1 Base XP Ã— Stage XP Multiplier**

| Deposit | Outcrop XP | Shallow XP | Main XP | Deep XP | Core XP | Cycle XP |
|---|---|---|---|---|---|---|
| Copper Vein | 6.0 | 8.4 | 12.0 | 18.0 | 27.0 | 71.4 |
| Fieldstone Quarry | 5.0 | 7.0 | 10.0 | 15.0 | 22.5 | 59.5 |
| Iron Vein | 10.0 | 14.0 | 20.0 | 30.0 | 45.0 | 119.0 |
| Coal Seam | 9.0 | 12.6 | 18.0 | 27.0 | 40.5 | 107.1 |
| Shallow Geode Field | 12.0 | 16.8 | 24.0 | 36.0 | 54.0 | 142.8 |
| Cobalt Vein | 16.0 | 22.4 | 32.0 | 48.0 | 72.0 | 190.4 |
| Raw Essence Seam | 18.0 | 25.2 | 36.0 | 54.0 | 81.0 | 214.2 |
| Argent Vein | 24.0 | 33.6 | 48.0 | 72.0 | 108.0 | 285.6 |
| Granite Shelf | 22.0 | 30.8 | 44.0 | 66.0 | 99.0 | 261.8 |
| Emberite Vein | 35.0 | 49.0 | 70.0 | 105.0 | 157.5 | 416.5 |
| Fluxstone Vein | 32.0 | 44.8 | 64.0 | 96.0 | 144.0 | 380.8 |
| Prismatic Gem Vein | 40.0 | 56.0 | 80.0 | 120.0 | 180.0 | 476.0 |
| Frostsilver Vein | 49.0 | 68.6 | 98.0 | 147.0 | 220.5 | 583.1 |
| Runic Crystal Seam | 55.0 | 77.0 | 110.0 | 165.0 | 247.5 | 654.5 |
| Stormiron Vein | 67.0 | 93.8 | 134.0 | 201.0 | 301.5 | 797.3 |
| Blackstone Quarry | 60.0 | 84.0 | 120.0 | 180.0 | 270.0 | 714.0 |
| Aetherite Vein | 89.0 | 124.6 | 178.0 | 267.0 | 400.5 | 1059.1 |
| Celestial Geode | 98.0 | 137.2 | 196.0 | 294.0 | 441.0 | 1166.2 |
| Umbral Vein | 116.0 | 162.4 | 232.0 | 348.0 | 522.0 | 1380.4 |
| Aether Essence Core | 125.0 | 175.0 | 250.0 | 375.0 | 562.5 | 1487.5 |
| Astralite Vein | 149.0 | 208.6 | 298.0 | 447.0 | 670.5 | 1773.1 |
| Aetherstone Quarry | 140.0 | 196.0 | 280.0 | 420.0 | 630.0 | 1666.0 |
| Worldheart Deposit | 200.0 | 280.0 | 400.0 | 600.0 | 900.0 | 2380.0 |

Deep Seam and Core pay more XP despite having less Density.

This makes reaching the deeper part of the Deposit feel increasingly rewarding.

---

# 78. MASTERY XP FORMULA

Base Mastery XP per completed Stage:

**Stage-1 Base XP Ã— 0.35 Ã— Stage Mastery Multiplier**

Therefore, for a Deposit with Stage-1 Base XP = 100:

- Outcrop = 35 Mastery XP;
- Shallow = 52.5;
- Main = 80.5;
- Deep = 122.5;
- Core = 192.5.

Global Mastery-XP modifiers apply afterward.

This intentionally makes the Core the most valuable Mastery moment in the cycle.

---

# 79. COMPLETE GEM / CRYSTAL LADDER

Mining introduces 10 main Gem / Crystal families.

| Tier | Gem / Crystal | Ore By-Product | Dedicated Source |
|---|---|---|---|
| T1 | Opal | Copper Vein | Shallow Geode Field |
| T2 | Sapphire | Iron Vein | Shallow Geode Field |
| T3 | Garnet | Cobalt Vein | Shallow Geode Field |
| T4 | Emerald | Argent Vein | Prismatic Gem Vein |
| T5 | Ruby | Emberite Vein | Prismatic Gem Vein |
| T6 | Topaz | Frostsilver Vein | Prismatic Gem Vein |
| T7 | Amethyst | Stormiron Vein | Prismatic Gem Vein |
| T8 | Aquamarine | Aetherite Vein | Celestial Geode |
| T9 | Diamond | Umbral Vein | Celestial Geode |
| T10 | Astral Prism | Astralite Vein | Celestial Geode / Worldheart |

They are obtained through:

1. rare by-product rolls from matching Ore Deposits;
2. dedicated Gem Deposits for deliberate farming.

Jewelcrafting therefore never depends only on blind RNG.

---

# 80. ORE-DEPOSIT BY-PRODUCT RULES

Every normal Ore Deposit has three secondary reward families.

## Structural Rubble

Base chance per completed Stage:

**8%**

Reward family:

- T1â€“T3 â†’ Stone;
- T4â€“T6 â†’ Granite;
- T7â€“T9 â†’ Blackstone;
- T10 â†’ Aetherstone.

Structural Rubble is a common by-product and does not use the rare multiplier.

## Tier Gem / Crystal

Base Outcrop chance:

**0.25%**

After Stage multiplier:

- Outcrop: 0.25%;
- Shallow: 0.44%;
- Main: 0.75%;
- Deep: 1.38%;
- Core: 2.50%.

Gear, Mastery, Pickaxe, and Prospector bonuses apply afterward.

## Core Material

Core materials begin only once the Deposit is meaningfully exposed.

Base chance:

- Outcrop: 0%;
- Shallow: 0%;
- Main: 0.05%;
- Deep: 0.25%;
- Core: 1.25%.

Core Chance modifiers apply afterward.

Core family:

- T1â€“T3 â†’ Mineral Core Fragment;
- T4â€“T6 â†’ Refined Core Fragment;
- T7â€“T9 â†’ Prismatic Core Fragment;
- T10 â†’ Astral Core Fragment.

---

# 81. DEDICATED GEM DEPOSITS

Dedicated Gem Deposits use **Gem Roll** as Primary Resource.

Every completed Stage gives at least one Gem Roll.

Extra Primary Quantity creates additional independent Gem Rolls.

## Shallow Geode Field â€” Level 18

| Stage | Opal | Sapphire | Garnet |
|---|---:|---:|---:|
| Outcrop | 55% | 35% | 10% |
| Shallow | 50% | 35% | 15% |
| Main | 45% | 35% | 20% |
| Deep | 40% | 35% | 25% |
| Core | 35% | 35% | 30% |

## Prismatic Gem Vein â€” Level 48

| Stage | Emerald | Ruby | Topaz | Amethyst |
|---|---:|---:|---:|---:|
| Outcrop | 40% | 30% | 20% | 10% |
| Shallow | 35% | 30% | 22% | 13% |
| Main | 30% | 30% | 25% | 15% |
| Deep | 25% | 28% | 27% | 20% |
| Core | 20% | 25% | 30% | 25% |

## Celestial Geode â€” Level 78

| Stage | Aquamarine | Diamond | Astral Prism |
|---|---:|---:|---:|
| Outcrop | 60% | 30% | 10% |
| Shallow | 55% | 32% | 13% |
| Main | 48% | 34% | 18% |
| Deep | 40% | 37% | 23% |
| Core | 30% | 40% | 30% |

## Prismatic Dust

Dedicated Gem Deposits also have an independent Prismatic Dust roll.

Base Outcrop chance:

**0.75%**

Using Stage rare multipliers:

- Outcrop 0.75%;
- Shallow 1.31%;
- Main 2.25%;
- Deep 4.13%;
- Core 7.50%.

Prismatic Dust is a universal Jewelcrafting reagent. Jewelcrafting creates it by Gem crushing; dedicated Gem Deposits also have an independent Mining drop roll.

---

# 82. QUARRY CONTENT

Mining uses four structural Quarry resources.

| Quarry | Level | Primary | Base Qty | Main Role |
|---|---:|---|---:|---|
| Fieldstone Quarry | 5 | Stone | 3 | House / early projects |
| Granite Shelf | 35 | Granite | 2 | Lodge / midgame facilities |
| Blackstone Quarry | 65 | Blackstone | 2 | Manor / Estate |
| Aetherstone Quarry | 95 | Aetherstone | 1 | endgame Estate / Holdings |

Quarries use the same full five-Stage Density lifecycle.

## Quarry Gem chance

Base Outcrop chance:

**0.10%**

Pools:

- Fieldstone â†’ Opal / Sapphire;
- Granite â†’ Emerald / Ruby;
- Blackstone â†’ Amethyst / Aquamarine;
- Aetherstone â†’ Diamond / Astral Prism.

Stage rare multipliers apply.

## Quarry Core chance

Quarries use the same Main / Deep / Core Core-material chances as Ore Deposits.

---

# 83. CATALYST DEPOSITS

## Coal Seam â€” Level 15

Primary:

**Coal**

Base Quantity:

**2**

Main uses:

- Smithing fuel;
- alloy recipes;
- selected Estate processes.

By-products:

- Stone: 6% per Stage;
- Sapphire: 0.12% Outcrop base chance;
- Mineral Core Fragment: normal Core rule.

Coal remains useful beyond T2.

## Fluxstone Vein â€” Level 45

Primary:

**Fluxstone**

Base Quantity:

**1**

Main uses:

- alloy processing;
- Smithing purification;
- selected Alchemy recipes;
- facility construction.

By-products:

- Granite: 6%;
- Ruby / Topaz: 0.12% Outcrop base chance, equal weighting;
- Refined Core Fragment: normal Core rule.

---

# 84. ESSENCE / RUNIC DEPOSITS

## Raw Essence Seam â€” Level 1

Primary:

**Raw Essence**

Rare:

- Runic Shard: 0.20% Outcrop base chance;
- Mineral Core Fragment: normal Core rule.

## Runic Crystal Seam â€” Level 31

Primary:

**Runic Crystal**

Rare:

- Runic Shard: 0.30% Outcrop base chance;
- Refined Core Fragment: normal Core rule.

## Aether Essence Core â€” Level 61

Primary:

**Aether Essence**

Rare:

- Runic Shard: 0.50% Outcrop base chance;
- Prismatic Core Fragment: normal Core rule;
- Astral Prism: 0.08% Outcrop base chance.

All rare chances scale automatically toward Core using the global rare multiplier.

---

# 85. WORLDHEART DEPOSIT â€” LEVEL 100

Worldheart is Mining's first major Level-100 objective.

Unlock requirements:

- Mining Level 100;
- Astralite Pickaxe;
- Chronicle milestone **Master of the Deep**;
- personally complete Astralite Vein through Core;
- Astralite Vein Mastery 50.

Primary:

**Worldstone**

Base Quantity:

**1**

Special Core-only drop:

**Worldheart Shard**

Base chance:

**4.00% from Core only**

It does not drop from Outcrop, Shallow, Main, or Deep.

Additional rare rewards:

- Astral Prism: 0.50% Outcrop base chance using normal Stage rare multipliers;
- Astral Core Fragment: normal Core-material rule.

Worldheart still follows the same mandatory five-Stage lifecycle.

The player must work through the full Deposit to reach the Worldheart Shard roll.

---

# 86. CORE MATERIAL FAMILIES

Mining uses only four normal Core-material families.

| Progression | Core Material | Main Uses |
|---|---|---|
| T1â€“T3 | Mineral Core Fragment | early tools, profession gear, facilities |
| T4â€“T6 | Refined Core Fragment | midgame tools, gear, facilities |
| T7â€“T9 | Prismatic Core Fragment | advanced profession gear, Estate |
| T10 | Astral Core Fragment | endgame tools, Holdings, high-tier facilities |

Special:

**Worldheart Shard**

is a unique Level-100 project material.

---

# 87. PICKAXE PROGRESSION â€” FINAL

| Tier | Pickaxe | Lvl | Mining Power | Mining Speed | Source | Mechanical Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Pickaxe | 1 | 6 | 0% | Starter / Chronicles | No extra mechanic |
| T1 | Copper Pickaxe | 5 | 8 | 2% | Smithing | Primary Quantity extra chance +2 pp |
| T2 | Iron Pickaxe | 15 | 11 | 4% | Smithing | Primary Quantity extra chance +4 pp |
| T3 | Cobalt Pickaxe | 25 | 14 | 6% | Smithing | By-product chance +5% multiplicative |
| T4 | Argent Pickaxe | 35 | 18 | 8% | Smithing | Deep/Core Mining Power +5% |
| T5 | Emberite Pickaxe | 45 | 22 | 10% | Smithing | Primary Quantity extra chance +7 pp |
| T6 | Frostsilver Pickaxe | 55 | 27 | 12% | Smithing | Gem / Crystal chance +8% multiplicative |
| T7 | Stormiron Pickaxe | 65 | 33 | 14% | Smithing | Deep/Core Mining Power +10% |
| T8 | Aetherite Pickaxe | 75 | 40 | 16% | Smithing | All by-product chance +10% multiplicative |
| T9 | Umbral Pickaxe | 85 | 48 | 18% | Smithing | Core-material chance +15% multiplicative |
| T10 | Astralite Pickaxe | 95 | 58 | 20% | Smithing | Stage-5 rare rolls +15%; Primary extra chance +10 pp |

## Acquisition

- Worn Pickaxe comes from Mining introduction / Chronicles.
- Normal Pickaxes are primarily created through Smithing.
- A new Ore Tier is mineable with the previous major Pickaxe.
- That Ore contributes to the next Pickaxe upgrade.

## Default upgrade chain

**Previous Pickaxe + New-Tier Metal + supporting components â†’ New Pickaxe**

Exact recipe quantities belong to Smithing.

## Mining Power

Each strike removes:

**Pickaxe Mining Power Ã— Mining-Power modifiers**

from current Stage Density.

## Mining Speed

Mining Speed reduces Strike Time multiplicatively.

A Pickaxe upgrade should therefore visibly:

- remove more Density per hit;
- and/or hit faster.

---

# 88. MINING PROFESSION CLOTHING â€” FINAL

Early game can use shared Gathering equipment.

Mining-specific sets begin around T3.

| Unlock | Item | Mining Effect |
|---|---|---|
| T3 / L25 | Prospector Hood | +8% Gem / Crystal chance |
| T3 / L25 | Prospector Coat | +6% all by-product chance |
| T3 / L25 | Prospector Trousers | +3% Mastery XP |
| T3 / L25 | Prospector Gloves | +4 pp Primary extra-quantity chance |
| T3 / L25 | Prospector Boots | +5% Mining Power |
| Set | Prospector 5/5 | +5% Gem / Crystal chance and +5% Mastery XP |
| T5 / L45 | Deepminer Helm | Deep/Core Mining Power +6% |
| T5 / L45 | Deepminer Jacket | Deep/Core Mining XP +6% |
| T5 / L45 | Deepminer Legguards | Deep/Core Mastery XP +6% |
| T5 / L45 | Deepminer Gloves | Core-material chance +10% |
| T5 / L45 | Deepminer Boots | Core Mining Power +8% |
| Set | Deepminer 5/5 | Core Mining Power +8% and Core chance +10% |
| T7 / L65 | Excavator Helmet | +3 pp Primary extra-quantity chance |
| T7 / L65 | Excavator Harness | +4 pp Primary extra-quantity chance |
| T7 / L65 | Excavator Legguards | +3 pp Primary extra-quantity chance |
| T7 / L65 | Excavator Gauntlets | +5 pp Primary extra-quantity chance |
| T7 / L65 | Excavator Boots | +6% Mining Power |
| Set | Excavator 5/5 | +6 pp Primary extra-quantity chance |
| T9 / L85 | Coreseeker Visor | +12% all rare/by-product chance |
| T9 / L85 | Coreseeker Coat | Deep/Core Mining Power +8% |
| T9 / L85 | Coreseeker Legguards | +8% Mastery XP |
| T9 / L85 | Coreseeker Gauntlets | +12% Gem / Crystal chance |
| T9 / L85 | Coreseeker Boots | +12% Core-material chance |
| Set | Coreseeker 5/5 | Core has 6% chance to repeat its rare/by-product roll |

Pieces can be mixed.

Full-set bonuses support focused builds but are not mandatory.

Intended crafting sources:

- Tailoring;
- Leatherworking;
- Smithing fittings;
- Gems at higher Tiers.

---

# 89. MINING JEWELRY â€” FINAL

| Mining Lvl | Jewelry | Effect | Use |
|---|---|---|---|
| 15 | Surveyor's Ring | +5% Mining Mastery XP | Mastery |
| 25 | Prospector's Pendant | +15% Gem / Crystal chance | Prospecting |
| 35 | Extractor's Band | +4 pp Primary extra-quantity chance | Bulk |
| 45 | Delver's Locket | Deep/Core Mining Power +8% | Deep Mining |
| 55 | Stoneheart Ring | +8% Quarry Primary Quantity | Estate stone |
| 65 | Vein Compass | +10% all by-product chance | Secondary resources |
| 75 | Aether Lens | +10% Essence Primary Quantity; +10% Runic Shard chance | Runecrafting supply |
| 85 | Coreseeker Signet | +20% Core-material chance | Core farming |
| 95 | Astral Chain | Core: +4% repeat rare roll; Deep/Core XP +5% | Endgame |

Mining jewelry is primarily produced through Jewelcrafting.

The design is horizontal enough that older pieces can remain useful for a specific objective.

Example:

A Level-95 player may still use:

**Extractor's Band**

for a large Stone / Ore project.

---

# 90. DEPOSIT MASTERY â€” FINAL VALUES

Every major Deposit has Mastery 1â€“100.

| Mastery | Deposit Effect |
|---:|---|
| 10 | Mining Power +3% on this Deposit |
| 25 | +5 pp Primary extra-quantity chance |
| 50 | Deep + Core Mining Power +7% |
| 75 | all Gem / Crystal / rare / by-product chances +15% multiplicative |
| 100 | Core has 10% chance to repeat its Primary reward roll |

Mastery does not let the player skip Stages.

It makes the full cycle more efficient and more valuable.

## Skill-Wide Mining Mastery

Completion:

**sum of Deposit Mastery / total possible Deposit Mastery**

Milestones:

| Completion | Reward |
|---:|---|
| 10% | global Mining Power +2% |
| 25% | second saved Mining preset; Mastery XP +5% |
| 50% | worker Mining efficiency +5%; advanced Stage analytics |
| 75% | Gem / Crystal / by-product chance +10%; third Mining preset |
| 100% | global Deep + Core Mining Power +5%; Master Miner completion marker |

---

# 91. MINING SPECIALIZATIONS â€” FINAL

Specializations unlock at:

**Mining Level 35**

One active at a time.

## Extractor

Purpose:

**Primary Resource output**

Effects:

- Mining Power +8%;
- +12 pp Primary extra-quantity chance;
- Gem / Crystal / rare chances -10% multiplicative.

## Prospector

Purpose:

**Gems / Crystals / by-products**

Effects:

- Gem / Crystal chance +35% multiplicative;
- other by-product chance +20% multiplicative;
- Primary extra-quantity chance -5 pp.

## Deep Delver

Purpose:

**Deep Seam / Core / XP / Mastery**

Effects:

- Deep + Core Mining Power +18%;
- Deep + Core Mining XP +15%;
- Deep + Core Mastery XP +15%;
- Core-material chance +25% multiplicative.

## Switching

- free;
- only outside the active strike;
- current Stage can be preserved when pausing;
- saved Mining presets remember Specialization.

---

# 92. MINING BAY â€” ESTATE SUPPORT

Mining uses an Estate Workshop branch called:

**Mining Bay**

It is infrastructure, not a skill.

| Tier | Estate Stage | Mining Req. | Main Unlocks |
|---|---|---:|---|
| I | House | 20 | detailed Stage analytics; 2 Mining presets; tool storage |
| II | Lodge | 40 | planner reserve conditions; cycle analytics; sorting rules |
| III | Manor | 60 | worker Mining assignments; equipment templates; +3% worker efficiency |
| IV | Estate | 80 | worker teams; reserve schedules; +6% worker efficiency |
| V | Holdings / late Estate | 100 | Worldheart worker support; advanced schedules; +10% worker efficiency |

Mining Bay mostly improves:

- information;
- planning;
- worker support;
- logistics.

It should not replace personal gear progression.

---

# 93. WORKER MINING â€” FINAL

Workers use the same Mining model as the player.

They have:

- Mining Proficiency 1â€“100;
- Pickaxe;
- profession clothing;
- profession jewelry;
- assigned Deposit;
- Mining Bay support;
- schedule.

They always mine:

**Outcrop â†’ Shallow â†’ Main â†’ Deep â†’ Core**

and then reset.

No worker can farm Core directly.

## Establishment

The player must personally complete one full Deposit through Core.

Then it becomes:

**Established**

and can be assigned to workers.

## Worker Proficiency

Base Worker Efficiency:

**50% + (Proficiency Ã— 0.50%)**

Examples:

- Proficiency 1 â†’ 50.5%;
- Proficiency 50 â†’ 75%;
- Proficiency 100 â†’ 100%.

Equipment / Estate modifiers apply afterward.

## Frontier penalty

For the highest currently unlocked Mining Tier:

| Player Deposit Mastery | Worker Frontier Multiplier |
|---:|---:|
| 0â€“24 | 75% |
| 25â€“49 | 85% |
| 50â€“74 | 92.5% |
| 75â€“99 | 97.5% |
| 100 | 100% |

Older established Tiers have no Frontier penalty.

---

# 94. ACTIVITY PLANNER â€” FINAL MINING RULES

## From the start

- Mine indefinitely.
- Stop at Primary Resource quantity.
- Stop at Mining Level.
- Manual Stop.

## House

- queue up to 2 steps;
- Deposit Mastery target;
- Finish Current Stage transition.

## Lodge

- queue up to 4 steps;
- resource reserves;
- Gem / Crystal target;
- Finish Current Deposit transition.

## Manor

- queue up to 6 steps;
- fallback Deposit;
- saved Mining preset switching;
- cross-profession transition.

## Estate

- queue up to 10 player steps;
- worker reserve rules;
- team schedules.

## Holdings

- department schedules;
- multiple worker-team templates;
- broader resource-maintenance policies.

There is no Stage endpoint rule because Stages are not selectable content.

---

# 95. RESOURCE RESERVE RULE

The Bank can protect a minimum quantity.

Example:

**Coal Reserve: 5,000**

Consumers may use Coal only while quantity remains above 5,000 unless:

**Ignore Reserve**

is explicitly enabled.

Workers can use the same reserve to decide when to resume Mining.

---

# 96. COMPLETE MINING LEVEL ROADMAP

| Lvl | Major Unlock |
|---|---|
| 1 | Copper Vein; Worn Pickaxe; full five-Stage lifecycle available immediately |
| 5 | Fieldstone Quarry; Copper Pickaxe |
| 11 | Iron Vein |
| 15 | Coal Seam; Iron Pickaxe; Surveyor's Ring |
| 18 | Shallow Geode Field |
| 21 | Cobalt Vein |
| 25 | Cobalt Pickaxe; Prospector clothing set; Prospector's Pendant |
| 1 | Raw Essence Seam |
| 31 | Argent Vein |
| 35 | Granite Shelf; Argent Pickaxe; Extractor's Band; Mining Specializations unlock |
| 41 | Emberite Vein |
| 45 | Fluxstone Vein; Emberite Pickaxe; Deepminer set; Delver's Locket |
| 48 | Prismatic Gem Vein |
| 51 | Frostsilver Vein |
| 55 | Frostsilver Pickaxe; Stoneheart Ring |
| 31 | Runic Crystal Seam |
| 61 | Stormiron Vein |
| 65 | Blackstone Quarry; Stormiron Pickaxe; Excavator set; Vein Compass |
| 71 | Aetherite Vein |
| 75 | Aetherite Pickaxe; Aether Lens |
| 78 | Celestial Geode |
| 81 | Umbral Vein |
| 85 | Umbral Pickaxe; Coreseeker set; Coreseeker Signet |
| 61 | Aether Essence Core |
| 91 | Astralite Vein |
| 95 | Aetherstone Quarry; Astralite Pickaxe; Astral Chain |
| 100 | Mining level cap; Worldheart becomes available after Master of the Deep Chronicle milestone |

This is the major-unlock baseline.

Smaller Mastery, Chronicles, and Estate unlocks can occur between these levels.

---

# 97. CHRONICLES â€” COMPLETE MINING PATH

## First Deposit

- receive Worn Pickaxe;
- start Copper Vein;
- complete Outcrop;
- understand Density;
- reach Main Vein;
- reach Core;
- complete first Deposit.

## Early Mining

- unlock Stone;
- craft Copper Pickaxe;
- unlock Iron;
- mine Coal;
- find first Gem / Crystal;
- use Shallow Geode Field.

## Developing Mining

- unlock Cobalt;
- mine Raw Essence;
- reach Deposit Mastery 25;
- craft Cobalt Pickaxe;
- unlock Specializations at 35.

## Midgame

- mine Emberite;
- build Mining Bay II;
- use Prismatic Gem Vein;
- equip first Mining-specific set;
- Establish first worker Deposit.

## Advanced

- mine Stormiron;
- assign inherited Pickaxe to a worker;
- maintain an Ore / Stone reserve;
- unlock Aetherite;
- reach Mastery 75 on one Deposit.

## Late Game

- mine Umbral;
- mine Aether Essence;
- unlock Astralite;
- build Mining Bay V;
- reach Mining 100.

## Master of the Deep

Requirements:

- Mining 100;
- Astralite Pickaxe;
- complete Astralite through Core;
- Astralite Mastery 50;
- Mining Bay V.

Reward:

**Worldheart Deposit**

This is an intentional Chronicle gate for endgame Mining.

---

# 98. RESOURCE USE MAP

| Mining Resource | Primary Consumers |
|---|---|
| Copper / Iron / Cobalt Ore | Smithing, early tools, workers, facilities |
| Argent / Emberite / Frostsilver Ore | midgame Smithing, profession gear, Estate |
| Stormiron / Aetherite / Umbral Ore | advanced gear, workers, Estate |
| Astralite Ore | endgame Smithing, tools, facilities |
| Stone | House, Workshop, early projects |
| Granite | Lodge, midgame facilities |
| Blackstone | Manor / Estate |
| Aetherstone | endgame Estate / Holdings |
| Coal | Smithing fuel / alloys |
| Fluxstone | advanced Smithing, Alchemy, facilities |
| Gems / Crystals | Jewelcrafting |
| Raw Essence | early Runecrafting |
| Runic Crystal | advanced Runecrafting |
| Aether Essence | endgame Runecrafting / magical facilities |
| Runic Shard | rare Runecrafting reagent |
| Prismatic Dust | Mining independent Gem-Deposit roll and Jewelcrafting Gem crushing |
| Core Fragments | tools, profession gear, facilities, Estate |
| Worldstone | endgame Estate / Holdings |
| Worldheart Shard | top-end permanent projects / recipes |

---

# 99. IMPLEMENTATION FORMULAS

## Stage Density

**Stage Density = ceil(Base Density Ã— Stage Density Multiplier)**

## Effective Mining Power

**Pickaxe Mining Power Ã— Mining-Power modifiers**

Stage-specific bonuses can apply afterward.

## Strikes Required

**ceil(Stage Density / Effective Mining Power)**

## Final Strike Time

**Base Strike Time Ã— (1 - Mining Speed)**

then apply other Strike-Time modifiers.

Recommended minimum Strike Time:

**40% of original Base Strike Time**

## Stage Duration

**Strikes Required Ã— Final Strike Time**

## Primary Quantity

**Base Quantity Ã— Stage Quantity Multiplier**

Then apply Primary extra-quantity modifiers.

Fractional Quantity becomes an extra-item roll.

## Mining XP

**Stage-1 Base XP Ã— Stage XP Multiplier Ã— XP modifiers**

## Mastery XP

**Stage-1 Base XP Ã— 0.35 Ã— Stage Mastery Multiplier Ã— Mastery modifiers**

## Rare Chance

**Base Chance Ã— Stage Rare Multiplier Ã— rare modifiers**

Chance above 100%:

- 100% = one guaranteed roll;
- overflow becomes chance for an extra roll.

---

# 100. MINING STAT DEFINITIONS

## Mining Power

Density removed per strike.

## Mining Speed

Strike-Time reduction.

## Primary Quantity

Expected main-resource payout.

## Gem / Crystal Chance

Gem / Crystal roll multiplier.

## By-Product Chance

Non-Core secondary drop multiplier.

## Core Chance

Core-material multiplier.

## Deep / Core Mining Power

Mining Power bonus only for Deep Seam and Core.

## Mining XP

Normal profession XP modifier.

## Mining Mastery XP

Deposit Mastery modifier.

## Quarry Quantity

Structural-resource output modifier.

## Essence Quantity

Essence / Runic output modifier.

## Worker Mining Efficiency

Worker-only production multiplier.

Avoid adding additional Mining stats unless they enable a clearly different build.

---

# 101. BALANCE CAPS

Recommended baseline caps:

- total Strike-Time reduction: 60%;
- Mining Power bonuses can stack but should target no more than roughly 2.0Ã— baseline personal Power during the original 1â€“100 game;
- Primary extra-quantity chance converts every 100 pp into one guaranteed additional unit;
- rare-chance overflow converts into extra rolls;
- worker efficiency can exceed 100% through equipment / facilities but baseline design should generally remain below ~140%.

Caps are tuning safeguards, not player-facing progression goals.

---

# 102. SAVE / OFFLINE DATA

Mining save state stores:

- active Deposit ID;
- current Stage;
- current Density remaining;
- progress within current Strike;
- active Mining preset;
- active Specialization;
- planner target;
- transition mode;
- fallback action;
- Deposit Establishment;
- Deposit Mastery;
- Skill-Wide Mastery;
- worker assignments;
- worker Proficiency;
- worker loadouts.

Offline simulation runs the same Density / strike / Stage formulas as active Mining.

---

# 103. DEVTOOLS + ANALYTICS REQUIREMENTS

## DevTools

Support:

- set Mining Level;
- set Deposit Mastery;
- set Skill-Wide Mastery;
- unlock Deposits;
- Establish / un-Establish Deposit;
- spawn Pickaxes;
- spawn Mining gear / jewelry;
- set Specialization;
- set current Stage;
- set current Density;
- instantly complete Strike;
- instantly complete Stage;
- instantly complete Deposit;
- spawn worker;
- set worker Proficiency;
- simulate 1m / 5m / 1h / 8h / 24h;
- compare expected/h to simulated results.

## Analytics

Show:

- current Density;
- Mining Power;
- strikes remaining;
- current Stage time;
- full Deposit cycle time;
- Deposits/hour;
- Primary Resource/hour;
- Gems / Crystals/hour;
- Core materials/hour;
- other by-products/hour;
- XP/hour;
- Mastery XP/hour;
- percentage of cycle time spent in each Stage;
- ETA to next Level;
- ETA to Mastery target;
- worker output separately.

Changing gear or Specialization should update estimates immediately.

---

# 104. FINAL MINING BASELINE

Mining is considered design-complete under these rules:

1. Five mandatory sequential Stages.
2. Outcrop â†’ Shallow Vein â†’ Main Vein â†’ Deep Seam â†’ Core.
3. No player-selected Depth Target.
4. No intentional early reset.
5. Density is Stage HP.
6. Density decreases toward Core.
7. Reward quantity increases toward Core.
8. XP and Mastery increase toward Core.
9. Gem / Crystal / rare chances increase strongly toward Core.
10. Core is the least dense and highest-value Stage.
11. Every Stage grants a completion reward.
12. Core completion finishes the Deposit.
13. A fresh Deposit automatically begins at Outcrop.
14. Pickaxes have Mining Power and Mining Speed.
15. Stronger Pickaxes visibly reduce strike count.
16. No durability.
17. 10 main Ore families.
18. 23 baseline Deposits.
19. 10 Gem / Crystal progression families.
20. Four Quarry resources.
21. Coal + Fluxstone catalysts.
22. Three Essence / Runic Deposit families.
23. Four normal Core-material families.
24. Worldheart Shard is Core-only endgame content.
25. Deposit Mastery 1â€“100.
26. Skill-Wide Mining Mastery.
27. Extractor / Prospector / Deep Delver Specializations.
28. Mining-specific clothes and jewelry.
29. Mining Bay as Estate support infrastructure.
30. Workers use the exact same five-Stage lifecycle.
31. Workers cannot skip to Core.
32. Player must Establish Deposits first.
33. Old Mining gear naturally transfers to workers.
34. Planner controls goals and transitions, not Stage depth.
35. Offline simulation preserves current Stage and Density.
36. UI exposes Density, Power, strikes, rewards, and expected/hour.
37. All resource names and baseline values live in this single Mining MD.

The profession fantasy is:

**break through the dense exterior â†’ expose increasingly rich material â†’ reach the valuable Core â†’ finish the Deposit â†’ begin again.**

Over the account lifetime:

**the player pushes new Deposits personally, while the Estate's workers maintain the established Mining economy behind them.**



# INTEGRATION HARDENING — ESSENCE ACCESS

Essence deposits align to the Runecrafting grade bands: Raw Essence Seam unlocks at Mining 1/T1 with Worn Pickaxe; Runic Crystal Seam at Mining 31/T4 with Copper Pickaxe; Aether Essence Core at Mining 61/T7 with Frostsilver Pickaxe. The existing deposit stage, density, XP, and reward formulas remain unchanged. Astral Essence remains a Runecrafting refinement from Aether Essence and Astral Core Fragment. See the Unlock Dependency Matrix for the cross-skill contract.











