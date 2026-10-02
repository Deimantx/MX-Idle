# GAME FOUNDATION BRAINSTORM

**Status:** Early Brainstorm  
**Version:** 0.3  
**Purpose:** Define the foundation of the game before detailed systems, balance, content, UI, items, monsters, or progression are designed.

---

# 1. PROJECT IDEA

The goal is to build a large-scale single-player idle RPG inspired by the same fundamental design philosophy as games such as Melvor Idle:

- long-term account progression;
- many interconnected skills;
- gathering;
- processing;
- crafting;
- combat;
- equipment progression;
- monsters and bosses;
- large item ecosystem;
- offline progression;
- deterministic long-term advancement;
- increasingly interconnected systems as the player progresses;
- a persistent player home/base that grows from a simple house into larger estates;
- facilities that improve storage, skills, production, and available gameplay options;
- later worker and estate/empire systems that expand the idle layer beyond the player character.

The initial goal is **not** to immediately reinvent the genre.

The first milestone is to create a strong, understandable and fully functional idle RPG foundation.

Once that foundation works, individual systems can be expanded far beyond their baseline versions.

---

# 2. CORE DEVELOPMENT PHILOSOPHY

The development approach will be:

**Baseline → Functional Game → Expansion → Original Identity**

Instead of creating every advanced idea immediately, each system should first receive a simple working version.

Example:

### Mining Baseline

Select ore → wait for action → receive ore → gain Mining XP.

Later this may become:

Select deposit → mine stages → deeper stages → different yields → tool interaction → rare resources → regional deposits → mastery systems → special mining mechanics.

But the expanded version should only be designed after the basic system has a stable role in the game.

---

# 3. REFERENCE RULE

Melvor Idle and similar games can be used as:

- genre reference;
- feature checklist;
- progression reference;
- economy reference;
- UX reference;
- inspiration for how systems connect.

They should **not** be treated as content to reproduce directly.

We create our own:

- code;
- UI;
- names;
- world;
- monsters;
- items;
- equipment;
- icons;
- text;
- balance values;
- progression curves;
- recipes;
- content structure.

The goal is eventually to create a game that clearly belongs to the same genre but has its own systems and identity.

---

# 4. CORE GAME LOOP

The initial high-level loop:

**Gather Resources**

↓

**Process Resources**

↓

**Craft Equipment / Supplies**

↓

**Fight Monsters**

↓

**Gain Combat Resources / Equipment / Unlocks**

↓

**Unlock Stronger Skills and Content**

↓

**Repeat at a Higher Progression Tier**

Combat and non-combat should support each other.

Neither should exist as a completely isolated part of the game.

---

# 5. GAME PILLARS

## 5.1 Long-Term Progression

The player should always have another meaningful objective.

Progression should exist across:

- skill levels;
- equipment;
- combat power;
- resource access;
- regions;
- monsters;
- bosses;
- recipes;
- tools;
- account systems;
- collection progression.

The game should support hundreds or potentially thousands of hours of progression.

---

## 5.2 Idle First

The game should remain an idle game.

The player should not be required to constantly:

- click;
- react;
- micromanage;
- babysit combat;
- restart activities.

Active interaction may improve efficiency or allow more advanced decisions, but the baseline experience must remain suitable for long idle sessions.

---

## 5.3 Predictable Progress

The player should usually understand:

- what they are currently gaining 
- how fast they are gaining it;
- what they need next;
- how long progression approximately takes;
- what a new unlock provides.

- - Everything is clearly show in game UI: xp/h, items/h, ETA to next level.

Randomness can exist, especially for loot, but major progression should not rely entirely on extreme RNG.

---

## 5.4 Interconnected Systems

Skills should feed other systems.

Example:

Mining  
→ Smithing  
→ Weapons / Armor  
→ Combat  
→ Monster Materials  
→ Crafting  
→ Better Equipment  
→ Harder Combat

Fishing  
→ Cooking  
→ Food  
→ Combat sustain

Woodcutting  
→ Crafting / Fletching / Construction-type systems

The exact network will be designed later.

---

## 5.5 Persistent Home, Estate & Worker Progression

The player should eventually have a persistent place that represents their long-term growth outside normal skill levels and equipment.

The progression may begin with something small such as:

**House → Lodge → Estate / Manor → larger late-game holdings**

Exact names and tiers are not final.

This system should not exist only as cosmetic housing.

The player's home/base can gradually provide:

- additional storage;
- specialized rooms;
- better crafting and processing facilities;
- faster or more efficient skill actions;
- new recipes and activity options;
- access to higher-tier tools or stations;
- utility features;
- passive production;
- worker capacity;
- estate management;
- additional long-term progression goals.

Facilities should matter mechanically.

Examples could eventually include:

- workshop;
- forge;
- kitchen;
- storage rooms;
- alchemy room;
- greenhouse;
- training room;
- library;
- stable;
- worker quarters;
- specialized profession rooms.

These are examples only and require a dedicated brainstorm later.

### Workers

Later progression may unlock workers, retainers, specialists, or similar NPC helpers.

Workers should expand the idle side of the game rather than replace the player.

Potential roles:

- gather basic resources;
- process materials;
- maintain farms or other passive systems;
- run assigned production tasks;
- support specific skills;
- operate estate facilities;
- perform long-duration jobs while the player is doing another activity.

The player should still be responsible for progression, planning, upgrades, specialization, and unlocking content.

Workers primarily add:

- parallel progression;
- automation;
- resource support;
- long-term optimization;
- additional idle depth.

### Estate / Empire Layer

At sufficiently high progression, the home system may grow beyond a single residence.

Possible future direction:

**Personal Home → Developed Estate → Worker Network → Large-Scale Holdings / Empire**

The exact scale is intentionally undecided.

This should eventually become one of the game's major long-term progression systems, but it should be layered on top of the normal skill/combat foundation rather than replacing it.

A dedicated brainstorm is required before implementation.

---

## 5.6 Skill Identity Rule

Every major skill should have at least one mechanic that makes it meaningfully different from the others.

The game should avoid a situation where every profession becomes:

**Select action → wait → receive item → repeat**

The exact complexity can differ between skills, but each one should have its own identity.

Examples of possible skill-specific mechanics:

- Mining: multi-stage deposits, depth, yield decisions, tool interaction;
- Woodcutting: grove management, tree rotations, resource priorities;
- Fishing: fishing spots, bait, tackle, catch pools, species targeting;
- Farming: plots, growth cycles, soil, crop planning;
- Hunting: tracking, target selection, carcass/resource processing;
- Smithing: smelting, alloys, production chains, furnace/facility requirements;
- Cooking: batch production, recipe progression, ingredient combinations;
- Alchemy: ingredient properties, discovery, recipe specialization;
- Jewelcrafting: gem cutting, profession jewelry, advanced crafting choices.

These are only direction examples.

The final mechanic for each skill should be defined in its own design document.

A useful design template for every skill:

| Field | Purpose |
|---|---|
| Core Action | What the player actually does |
| Unique Mechanic | What makes this skill different |
| Main Inputs | What it consumes |
| Main Outputs | What it produces |
| Main Consumers | Which systems use its outputs |
| Progression Axes | Level, tool, clothing, jewelry, mastery, facility, etc. |
| Automation Options | What can eventually be queued or delegated |
| Long-Term Role | Why the skill still matters later |

---

## 5.7 Multi-Axis Profession Progression

Skill level should not be the only thing determining profession power.

A profession may eventually be influenced by several parallel progression axes:

**Skill Level + Tool + Profession Clothes + Profession Jewelry + Mastery + Facility + Account Unlocks**

Not every profession must use every axis equally.

### Tools

Tools can affect:

- action speed;
- yield;
- preservation;
- rare find chance;
- special profession mechanics;
- access to higher-tier actions.

### Profession Clothes

Dedicated profession equipment can provide non-combat progression.

Possible slots can include profession-focused clothing such as:

- head;
- body;
- hands;
- feet;
- other profession-specific garments if needed.

Profession clothing can influence:

- efficiency;
- output;
- preservation;
- mastery gain;
- special resource chance;
- action mechanics.

The exact equipment structure is not final.

### Profession Jewelry

Profession jewelry can provide another layer of specialization.

Possible examples:

- profession rings;
- profession necklaces;
- charms or similar utility pieces.

Jewelry should preferably support specialized bonuses or mechanics instead of existing only as another generic percentage source.

The interaction between combat jewelry and profession jewelry should be designed carefully later.

---

## 5.8 Activity Planner & Automation

Idle gameplay should gradually become more about planning than repeatedly restarting activities.

The player should eventually be able to create simple activity conditions and queues.

Potential rules:

- perform activity until X items are obtained;
- continue until a skill reaches a selected level;
- continue until a mastery milestone is reached;
- stop when a resource drops below a reserve amount;
- continue until the Bank contains X of an item;
- switch activity when an input resource is exhausted;
- use a fallback activity;
- queue several activities in sequence.

Example:

**Mine Copper Ore until 5,000 → Mine Coal until 2,000 → Smith Copper Ingots until 500 Bars**

Another example:

**Fish current target until Cooking reaches the required level → switch to the next fish**

The baseline game does not need the entire automation system immediately.

Automation depth can expand through:

- account progression;
- facilities;
- residence upgrades;
- worker systems;
- other permanent unlocks.

The goal is for the player to eventually enjoy constructing efficient long idle plans.

---

## 5.9 Facilities Must Unlock Gameplay

Facilities should not exist only as passive percentage upgrades.

Higher facility tiers can unlock:

- new recipes;
- batch production;
- new processing methods;
- additional profession options;
- worker assignments;
- automation features;
- new resource interactions;
- higher-tier production;
- efficiency bonuses;
- specialized mechanics.

Example concept:

**Forge I**
- basic Smithing functionality.

**Forge II**
- improved production and batch smelting.

**Forge III**
- alloy recipes.

**Forge IV**
- worker assignment.

**Forge V**
- advanced Smithing mechanics.

Exact facility progression will be designed later.

Percentage bonuses are allowed, but they should support meaningful unlocks rather than replace them.

---

## 5.10 Resource Longevity

Low-tier resources should not become permanently useless shortly after being unlocked.

Higher progression should often reuse earlier materials through:

- cross-tier recipes;
- construction;
- facilities;
- worker upkeep;
- consumables;
- processing chains;
- large account projects;
- advanced crafting;
- infrastructure expansion.

Example philosophy:

A player reaching Tier 8 should still occasionally care about Tier 1–4 materials.

This creates a long-term economy instead of a sequence of disposable resource tiers.

Workers can later become especially useful for maintaining supplies of older basic resources while the player focuses on higher-level activities.

---

## 5.11 Chronicles — Account Guidance & Progression Path

Chronicles should exist from the beginning of the game.

It is not only a tutorial.

Chronicles should act as a persistent account guidance system that tells the player:

- what systems currently matter;
- what major goal they should consider next;
- what content has just become available;
- what progression milestone they are approaching;
- why a newly unlocked system matters;
- what broad path leads toward the next stage of the game.

Chronicles can combine:

- onboarding;
- tutorials;
- account goals;
- milestone tracking;
- progression suggestions;
- system introductions;
- long-term objectives.

The system should help answer:

**"What should I roughly work toward next?"**

without forcing the player into one exact route.

Chronicles should guide rather than hard-lock normal progression.

Potential structure:

- Chapters;
- milestone groups;
- account objectives;
- optional recommended goals;
- system tutorials;
- completion progress;
- rewards for major milestones where appropriate.

Chronicles should evolve throughout the entire game instead of disappearing after the tutorial.

A dedicated Chronicles design document will later define:

- chapter structure;
- goal categories;
- rewards;
- progression recommendations;
- UI;
- skip/dev testing tools;
- how optional versus required objectives work.

---

## 5.12 Flexible Specialization

Skills can eventually gain specialization choices that change how the player optimizes them.

Example direction for Mining:

- higher base yield;
- better rare-resource chance;
- stronger deep-stage bonuses.

Specialization should usually be changeable rather than permanently locking an account.

The purpose is:

- planning;
- optimization;
- adapting to current goals;
- creating meaningful loadout decisions.

Specialization should not punish experimentation.

---

## 5.13 Combat as Preparation & Planning

Combat does not need to rely on high active-input gameplay.

Its main depth should come from preparation before the idle session.

The player can make decisions around:

- weapon;
- off-hand;
- armor;
- food;
- potions;
- abilities;
- spells;
- special attacks;
- defensive setup;
- resistances;
- utility effects;
- other future combat systems.

Enemies can create planning problems through:

- damage types;
- defensive strengths;
- weaknesses;
- attack speed;
- status effects;
- special attacks;
- sustain pressure;
- accuracy/evasion interactions;
- other predictable mechanics.

The UI should eventually help the player understand expected performance with metrics such as:

- estimated kills per hour;
- expected food usage;
- expected consumable usage;
- approximate death risk;
- expected loot per hour;
- expected XP per hour.

The interesting decision should happen largely before pressing **Start**.

---

## 5.14 Workers as a Second Idle Layer

Workers should eventually provide parallel activity rather than simply granting passive resources from nothing.

Workers may require:

- housing;
- profession assignment;
- facility access;
- tools;
- profession clothing;
- profession jewelry where appropriate;
- resources or upkeep if the final design needs it.

Possible roles:

- Miner;
- Woodcutter;
- Fisher;
- Farmer;
- Cook;
- Blacksmith;
- other profession specialists.

The player decides which parts of the economy to automate.

Worker progression may eventually include:

- worker slots;
- skill/profession proficiency;
- equipment;
- facility requirements;
- specialization;
- assignment priorities;
- production limits;
- efficiency progression.

The exact system will be designed later.

Workers must support the player rather than make direct skill progression irrelevant.

---

## 5.15 Progression Eras

The game should gradually change how it feels as the account develops.

### Era 1 — I Do Everything

The player personally performs almost every important activity.

Focus:

- learning systems;
- leveling skills;
- acquiring first tools;
- basic combat;
- building the first residence;
- establishing the economy.

### Era 2 — I Build Infrastructure

The player starts investing heavily into:

- house upgrades;
- storage;
- facilities;
- profession equipment;
- permanent projects;
- automation unlocks.

The account becomes more efficient because of infrastructure, not only higher stats.

### Era 3 — I Manage Infrastructure

Workers and advanced facilities begin handling selected lower-level or repetitive economic tasks.

The player focuses more on:

- planning;
- allocation;
- advanced skills;
- harder combat;
- large projects;
- optimization.

### Era 4 — Infrastructure Supports My Endgame

The player still directly performs the most important high-level progression and combat, but a developed estate/workforce supports the economy behind it.

The intended progression arc is:

**I do everything → I build infrastructure → I manage infrastructure → infrastructure supports my endgame.**

This should be one of the defining long-term identities of the game.

---

# 6. BASELINE SYSTEM MAP

The following is the initial candidate foundation.

Nothing here is permanently locked yet.

---

## ACCOUNT / GLOBAL

- Character / Save
- Skill Levels
- XP
- Offline Progress
- Statistics
- Completion / Collection
- Settings
- Save / Import / Export
- Dev Tools
- Chronicles / Account Guidance

---

## INVENTORY

- Bank
- Item Categories
- Item Inspection
- Search
- Sorting
- Filtering
- Stackable Resources (unlimited)
- Equipment Storage
- Consumables

---

## HOME / ESTATE

Long-term candidate system:

- Player House
- House Upgrades
- Storage Expansion
- Specialized Facilities
- Profession Stations
- Facility Tiers
- Worker Housing
- Worker Slots
- Worker Assignments
- Passive Production
- Estate Expansion
- Late-game large-scale management
- Facility-gated profession options
- Activity automation unlocks
- Worker profession support
- Profession equipment storage / loadouts where useful
- Long-term account projects

This system is part of the intended long-term direction, but its exact mechanics should be designed separately after the baseline skill ecosystem is defined.

---

## GATHERING SKILLS

Candidate baseline:

- Mining
- Woodcutting
- Fishing
- Farming
- Hunting
- Foraging
- - - 

Possible later additions:


- Excavation
- Sailing / Exploration
- other world-specific gathering skills

---

## PROCESSING SKILLS

Candidate baseline:

- Smithing

- Leatherworking
- Tailoring
- Fletching
- Alchemy
- Jewelcrafting
- Runecrafting
- Cooking
- 

Possible later:


- Enchanting


Exact skill list is not final.


---

# 7. COMBAT FOUNDATION

Combat initially uses three broad archetypes:

### Melee

Physical close-range weapons.

Possible future families:

- Sword
- Axe
- Mace
- Spear
- Dagger
- Great Weapon
- Shield-based styles

### Ranged

Projectile-based combat.

Possible future families:

- Bow
- Crossbow
- Throwing Weapons
- other ranged archetypes

### Magic

Spell / magical weapon based combat.

Possible future families:

- Staff
- Wand
- Tome
- magical off-hands
- different schools or spell archetypes

Detailed combat mechanics will receive their own design document.

---

# 8. COMBAT CONTENT STRUCTURE

Initial structure may contain:

### Standard Combat Areas

Normal enemies designed for sustained farming.

### Elite Areas

Harder enemies or higher progression requirements.

### Dungeons

Structured encounters ending in a boss or major reward.

### Boss Encounters

Major progression gates and equipment sources.

Future systems may introduce additional encounter types, but they are not required for the first playable foundation.

---

# 9. MONSTER DESIGN BASELINE

Every monster initially needs only:

- Name
- Combat Level / Power
- HP
- Attack information
- Defensive stats
- Loot table
- XP reward
- Area
- basic visual identity

Not every early monster needs complex mechanics.

More advanced monsters can later receive:

- special attacks;
- phases;
- status effects;
- resistances;
- unique behaviours;
- conditional mechanics.

We should avoid designing hundreds of complicated enemies before baseline combat is functional.

---

# 10. ITEM FOUNDATION

Every item belongs to a clear functional category.

Candidate categories:

- Raw Resources
- Processed Resources
- Bars / Materials
- Herbs
- Hides
- Scraps
- Food
- Weapons
- Armor
- Tools
- Profession Clothes
- Profession Jewelry
- Ammunition
- Crafting Components
- Monster Materials
- Rare Drops
- Quest / Progression Items
- Consumables

Items should have a reason to exist.

Avoid creating large amounts of resources that are only used once and then permanently become irrelevant.

Universal or reusable materials should be preferred when they reduce unnecessary inventory clutter.

---

# 11. EQUIPMENT FOUNDATION

Candidate equipment structure:

- Weapon
- Off-Hand
- Head
- Body
- Legs
- Hands
- Feet
- Cape
- Ring
- Necklace

Potential additional slots:


- Relic / Artifact

These are not final.

Before additional slots are approved, they need to provide meaningful progression rather than simply adding more stat sticks.

Profession equipment should be treated separately from normal combat progression where that improves clarity.

The game may support profession-specific clothing and jewelry loadouts so players do not need to constantly rebuild their combat setup every time they train a non-combat skill.

Exact profession slots and loadout behavior require a dedicated equipment brainstorm.

---

# 12. PROGRESSION TIERS

The game will likely use progression tiers spanning the entire game.

Example conceptual structure:

Tier 1  
Tier 2  
Tier 3  
Tier 4  
Tier 5  
...

Each tier can introduce:

- stronger resources;
- new equipment;
- harder enemies;
- new recipes;
- new regions;
- new bosses;
- new mechanics.

However, tiers should not mean that every previous item immediately becomes useless.

Some materials should remain relevant through cross-tier recipes and secondary systems.

---

# 13. SKILL LEVEL STRUCTURE

Initial target:

**Level 1–100 baseline**

This gives enough room for:

- multiple progression tiers;
- gradual recipe unlocks;
- long-term skill progression.

Whether progression later continues beyond level 100 is a future decision.

We should separate:

**Level Cap**

from

**XP progression after cap**

if post-100 progression is eventually introduced.

---

# 14. OFFLINE PROGRESSION

Offline progression is a foundation feature, not an optional late addition.

The game should remember:

- current activity;
- activity speed;
- resources available;
- required consumables;
- combat state where applicable.

When the player returns, the game calculates the elapsed period.

The result screen should clearly show:

- elapsed time;
- XP gained;
- resources gained;
- resources consumed;
- important drops;
- levels gained;
- unlocks gained.

Offline simulation should use the same game rules as active gameplay whenever practical.

---

# 15. FIRST PLAYABLE VERSION

The first playable version should intentionally be small.

Suggested content:

### Skills

- Mining
- Smithing
- Fishing
- Cooking

### Combat

- Melee only initially
- Basic Equipment
- Food
- Several Combat Areas
- Several Monsters
- One early Boss

### Global Systems

- Bank
- Equipment
- XP / Levels
- Item Database
- Monster Database
- Offline Progress
- Save System
- Basic Chronicles onboarding / account goals

This is enough to prove the complete gameplay loop:

**Mine → Smith → Equip → Fish → Cook → Fight → Loot → Upgrade**

Once this loop feels good, expansion becomes much safer.

---

# 16. SYSTEMS WE SHOULD NOT DESIGN YET

Unless required by the foundation, postpone systems such as:

- endgame modifiers;
- world tiers;
- anomalies;
- prestige;
- complex artifact trees;
- sigil systems;
- guild progression;
- contracts;
- huge quest systems;
- seasonal mechanics;
- raids;
- advanced random item affixes;
- complicated account-wide talent trees;
- advanced worker management;
- large-scale estate / empire management;
- advanced conditional automation;
- deep worker optimization.

The home / estate concept itself is part of the core long-term direction, but its advanced mechanics should not be implemented before the baseline game works.

They may eventually become excellent systems.

The rule is simply:

**Do not build expansion systems before there is a game to expand.**

---

# 17. CONTENT DESIGN ORDER

The project should be brainstormed approximately in this order:

1. Game Foundation
2. Complete Skill List
3. Chronicles / Account Guidance Foundation
4. Combat Foundation
5. Item / Equipment Architecture
6. Profession Equipment Architecture
7. Progression Tier Structure
8. Mining
9. Smithing
10. Fishing
11. Cooking
12. Woodcutting
13. Remaining Processing Skills
14. Monsters
15. Combat Areas
16. Dungeons
17. Bosses
18. Loot Economy
19. Mastery / Specialization / Long-Term Skill Progression
20. Home / Construction / Estate Foundation
21. Facilities & Long-Term Projects
22. Activity Planner / Automation
23. Workers / Automation Economy
24. Collections / Completion
25. Expansion Systems

Individual systems can change this order when dependencies require it.

---

# 18. BRAINSTORM RULES

During brainstorming:

### Rule 1 — Foundation Before Complexity

Always define the simplest working version first.

### Rule 2 — Every Feature Needs a Purpose

Do not add mechanics only because another game has them.

### Rule 3 — Avoid Content Bloat

More ores, monsters and equipment do not automatically mean better gameplay.

### Rule 4 — Reuse Systems

Prefer systems capable of supporting hundreds of pieces of content rather than custom logic for every item.

### Rule 5 — Think About Idle Gameplay

Every feature should be evaluated for long unattended sessions.

### Rule 6 — Avoid Excessive RNG Progression

Random rare rewards are fine.

Mandatory progression should generally have deterministic paths.

### Rule 7 — Every Skill Needs an Identity

Major skills should have at least one mechanic that meaningfully distinguishes them from other skills.

### Rule 8 — Old Resources Should Keep Uses

Earlier materials should continue to have meaningful sinks through crafting, construction, facilities, projects, workers, or other systems.

### Rule 9 — Progression Should Have Multiple Axes

Skill level alone should not determine profession strength. Tools, profession clothes, jewelry, mastery, facilities, and account unlocks can all matter.

### Rule 10 — Guidance Without Railroading

Chronicles should help the player understand what to do next without forcing every account into one exact route.

### Rule 11 — UI Is Part of System Design

Every system should eventually answer:

- What does the player see?
- What can they change?
- What information matters?
- What progress is shown?
- What requires attention?

---

# 19. MAJOR OPEN QUESTIONS

These need to be solved during the next brainstorming phase.

### Skills

What is the final baseline skill list?

What is this is MD is moslty done list.

Should we stay close to traditional RPG professions or introduce original professions immediately?

We should try to make each skill unique not just click and action happens all the time, more fun, more planning, more direction, rng and so on.

### Combat

How complicated should baseline combat be?

Similar to melvor idle, i dont think you can make combat fun in idle game, planning should be more fun and reaping rewards later on.

How much control should the player have over attacks and abilities?

Planning before combat is everything lots ofd options to chose from.

### Equipment

How many gear slots?

Like in this md.

How much of equipment is crafted versus dropped?

hard to speculate for now

### Progression

How many major progression tiers should levels 1–100 contain?

At least 10tiers

### World

Do skills exist globally, or do regions contain different resources and activities?

Its Interface based game, whole world is techinicaly in game screen.

### Loot

How deterministic should equipment progression be?

crafting help to progress but is also required in later tiers to create stronger items.

### Mastery

Do individual actions/items have their own progression similar to mastery systems?

Yes like in melvor

### Death

What happens when combat is lost?

offline time is wasted because you died, you keep xp, drops and everything.

### Profession Equipment

How many profession clothing slots should exist?

Should every profession use the same slot structure?

Should profession clothing be crafted, dropped, earned through mastery, or use several acquisition methods?

Should profession jewelry use the same Ring / Necklace slots as combat or have separate profession loadouts?

How quickly should the game allow swapping between profession setups?

### Activity Planner

Which automation rules are available from the beginning?

Which rules require account, facility, or estate progression?

Should queues have a maximum number of steps?

How should the system behave when an action becomes impossible because an input resource runs out?

### Chronicles

How linear should Chapters be?

Which goals are required versus optional recommendations?

Should major Chronicle milestones grant rewards or primarily provide guidance?

How does Chronicles introduce new systems without becoming a long checklist of trivial tasks?

How much future content should it preview?

### Long-Term Projects

Large account projects may consume significant resources and unlock permanent infrastructure.

Still to define:

- project categories;
- typical duration;
- resource scale;
- whether several projects can progress at once;
- whether workers can contribute;
- how projects connect to facilities, residence upgrades, and Chronicles.

### Home / Estate / Workers

The game is intended to eventually have a persistent player residence that improves over time.

Current high-level direction:

- begin with a house;
- later upgrade into larger residences such as a lodge, estate, manor, or equivalent;
- residence upgrades unlock more storage and facilities;
- facilities can improve skill speed, efficiency, production, or available options;
- Construction or an equivalent system may be one of the main resource and gold sinks;
- workers become available later;
- workers allow more parallel idle activities;
- late-game progression may grow into estate or empire-style management.

Still to brainstorm:

- exact residence progression tiers;
- whether Construction is a full skill or account system;
- how rooms/facilities are built and upgraded;
- which skills receive facility bonuses;
- whether facilities increase speed, output, efficiency, unlock options, or combinations of these;
- how many worker slots exist;
- whether workers have levels, professions, equipment, traits, wages, or upkeep;
- how workers gain efficiency;
- whether workers can equip tools, profession clothes, and profession jewelry;
- what workers can and cannot automate;
- whether workers consume the player's tools/resources;
- how passive production is balanced against active skill training;
- whether multiple properties eventually exist;
- how large the late-game "empire" layer should become.

This requires a dedicated future design document.

### Economy

Is there a Shop / Gold economy?

Could be you buy small stuff like T0/T1 stuff 

What are the major gold sinks?

Construction / home and estate development should be one of the major long-term gold and material sinks.

---

# 20. CURRENT DIRECTION

For now, assume:

- single-player;
- idle-first;
- Level 1–100 skills;
- large connected skill ecosystem;
- Melee / Ranged / Magic eventually;
- Bank-based inventory;
- offline progression;
- gathering → processing → crafting → combat loop;
- original content and world;
- persistent home / estate progression as a major future system;
- residence upgrades that unlock storage, facilities, and skill-related benefits;
- workers and larger-scale idle management later in progression;
- each skill should have its own gameplay identity rather than repeating the same click-and-wait structure;
- long-term progression should depend on more than skill level alone;
- tools, profession clothing, profession jewelry, mastery, facilities, and account unlocks can all influence skill performance;
- planning and automation should become an important part of idle optimization;
- Chronicles should guide the player from the beginning with account goals, tutorials, progression direction, and suggestions for what to pursue next;
- combat should focus heavily on preparation, build planning, and expected efficiency rather than active reaction gameplay;
- progression should evolve from doing everything personally into building infrastructure and eventually managing systems that support endgame play;
- simple baseline systems before advanced expansion mechanics.

Everything else remains open for brainstorming.

---

# 21. NEXT DOCUMENT

The next design document should be:

**01_SKILLS_AND_PROFESSIONS_BRAINSTORM.md**

Its purpose will be to decide:

- complete skill list;
- skill categories;
- which skills interact;
- what each skill produces;
- which skills are required for baseline;
- which skills are expansion content;
- what traditional skills should be removed, merged or replaced;
- where our first major differences from Melvor-style progression begin.

Only after the skill ecosystem is understood should detailed ore, log, fish, bar, monster and equipment lists begin.

Important later dedicated documents should include:

**CHRONICLES / ACCOUNT GUIDANCE BRAINSTORM**

Defines the tutorial, account goals, Chapters, recommended progression path, milestone guidance, and long-term player direction from the beginning of the game.

**PROFESSION EQUIPMENT BRAINSTORM**

Defines tools, profession clothes, profession jewelry, loadouts, stat types, acquisition, crafting, and how profession gear interacts with mastery and facilities.

**HOME / CONSTRUCTION / ESTATE / WORKERS BRAINSTORM**

Defines the house → larger residence → facilities → workers → estate/empire progression in detail.

**ACTIVITY PLANNER / AUTOMATION BRAINSTORM**

Defines queues, conditions, fallback activities, resource targets, level/mastery targets, facility unlocks, and how worker automation differs from player automation.
