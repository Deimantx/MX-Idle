# 24 — GUILDS

**Status:** Complete Baseline System Draft  
**Version:** 1.0  
**Guilds:** Slayer's Guild, Wizard's Guild, Archer's Guild, Craftsman's Guild  
**References:** Combat Core, Combat Content, Magic Spellbook, Devotion, all production professions  
**Purpose:** Define four independent long-term Guild progression systems with their own XP, ranks, assignments, currencies and reward catalogs without turning them into normal Skills or duplicating one another.

---

# 1. GUILD ROLE

Guilds are long-term specialization layers built on top of systems the player already uses.

They do not replace:
- Combat Skills;
- Magic;
- Ranged;
- professions;
- Chronicles.

Each Guild answers a different question.

## Slayer's Guild

> What do I hunt?

## Wizard's Guild

> How well can I use the Magic system?

## Archer's Guild

> How well can I specialize in Ranged weapons and Ammo economy?

## Craftsman's Guild

> How well can I coordinate the production economy?

---

# 2. GLOBAL GUILD RULES

| Rule | Baseline |
|---|---|
| Guilds are optional progression layers | Yes |
| Guilds are Skills | No |
| Guild XP shared | No; each Guild has its own XP |
| Guild Rank shared | No; each Guild ranks independently |
| Daily/weekly reset quests | No baseline |
| Personal Activity Slot | Guild assignment itself does not occupy it |
| One active assignment per Guild | Yes baseline |
| Multiple Guilds progress simultaneously | Yes if the same action satisfies each assignment |
| Guild task generation | Only from content already unlocked by the player |
| Impossible assignment protection | Required |
| Rank loss | None |
| Task streak loss | None baseline |

---

# 3. GUILD OVERVIEW

| Guild | Core Identity | Main Assignment Type | Currency | Primary Rewards |
|---|---|---|---|---|
| Slayer's Guild | Targeted Combat hunting | Kill Contracts / Elite Hunts / Boss Contracts | Slayer Marks | Task control, special hunts, combat Blueprints, Slayer utilities |
| Wizard's Guild | Mastery of Magic systems | Arcane Trials / Elemental Challenges | Arcane Seals | Unique spells, Augments, Magic gear/utility |
| Archer's Guild | Weapon precision and ranged mastery | Marksmanship Contracts / Weapon Trials | Marksman's Crests | Ranged techniques, Ammo utility, unique ranged Blueprints |
| Craftsman's Guild | Cross-profession production mastery | Commissions / Grand Orders | Artisan Scrip | Unique recipes, project components, crafting utility |

---

# 4. GUILD UNLOCKS

| Guild | Baseline Unlock |
|---|---|
| Slayer's Guild | Defeat T1 Boss Captain Veyr |
| Wizard's Guild | Magic 10 + Runecrafting unlocked |
| Archer's Guild | Ranged 10 + Fletching unlocked |
| Craftsman's Guild | Any 3 production professions at Level 20+ |

Unlocks are account milestones.

They are not random invitations.

Once unlocked, Guild remains permanently accessible.

---

# 5. INDEPENDENT XP / RANK

Every Guild stores:
- Guild XP;
- Guild Rank;
- completed assignments;
- Guild currency;
- unlocks;
- active assignment;
- candidate pool;
- reward catalog state.

Guild XP is not a normal Level 1–100 Skill.

Progression is rank-based.

---

# 6. SHARED TEN-RANK FRAMEWORK

| Rank | General Meaning | Assignment Expansion |
|---|---|---|
| I | Initiate | Basic assignments |
| II | Proven | Wider target/item pool |
| III | Adept | First assignment-choice improvement |
| IV | Veteran | Higher-tier assignments / first block or specialization tools |
| V | Expert | Elite/specialized assignments |
| VI | Master | Complex assignments / stronger rewards |
| VII | High Master | Boss/project assignments |
| VIII | Grandmaster | Endgame Guild content |
| IX | Exemplar | T9/T10 specialization |
| X | Guild Paragon | Full baseline Guild system unlocked |

Each Guild uses its own thematic rank names while following the same broad ten-rank length.

Exact XP thresholds are balance data for later.

---

# 7. NO DAILY / WEEKLY QUEST MODEL

Baseline Guilds do not depend on:
- daily login;
- weekly reset;
- limited daily energy;
- FOMO reward calendar.

An assignment stays active until:
- completed;
- abandoned;
- rerolled.

This fits long idle progression.

---

# 8. ASSIGNMENT RULES

| Rule | Baseline |
|---|---|
| Active assignments | 1 per Guild |
| Assignment timer expiration | None baseline |
| Daily reset | None |
| Abandon assignment | Allowed; no Guild XP/rank loss |
| Reroll | Guild-specific currency/QoL rules |
| Candidate pool | Only unlocked and valid content |
| Progress before accepting | Does not count baseline |
| Offline progress | Yes if underlying action occurs offline |
| Simultaneous Guild progress | Allowed if conditions overlap |

---

# 9. GUILD CURRENCIES

| Currency | Source | Spend |
|---|---|---|
| Slayer Marks | Slayer assignment completion | Slayer rerolls, block/control, Blueprints |
| Arcane Seals | Wizard Trial completion | Trial control, spell/augment/gear Guild rewards |
| Marksman's Crests | Archer Contract completion | Contract control, Ammo/weapon Guild rewards |
| Artisan Scrip | Craftsman Commission completion | Commission control, recipes/projects |

Currencies are Guild-specific.

Do not create one universal:
`Guild Token`

because it removes specialization.

---

# 10. RANK PROMOTION

Promotion requires:
- enough Guild XP;
- previous Rank;
- optional milestone at higher ranks.

Examples of milestone:
- first Elite Hunt;
- first Boss Trial;
- first Grand Order.

Do not require hidden reputation.

Guild XP is the visible progression measure.

---

# 11. NO RANK LOSS

Abandoning/skipping:
- does not reduce Rank;
- does not reduce Guild XP.

The penalty is only:
- currency/reroll cost where applicable;
- lost assignment progress.

---

# 12. NO PUNITIVE STREAK

Guilds may track:
- lifetime completions;
- consecutive completions for statistics.

But no core reward multiplier disappears because the player:
- switches target;
- abandons one impossible task;
- stops playing for a week.

---

# 13. ASSIGNMENT CANDIDATES

Higher Ranks unlock more choice.

Typical progression:
- 1 assignment offered;
- then choose 1 of 2;
- later choose 1 of 3.

This is preferred over endlessly rerolling one random assignment.

---

# 14. IMPOSSIBLE ASSIGNMENT PROTECTION

Never generate an assignment requiring:
- locked enemy;
- locked Dungeon;
- unknown spell;
- weapon type the player cannot access;
- recipe/item the player cannot produce;
- Boss not yet unlocked.

Generation uses current account unlock state.

---

# 15. SLAYER'S GUILD — IDENTITY

Slayer's Guild is the dedicated targeted-kill system.

It is the replacement for a normal Slayer Skill.

It has:
- its own XP;
- ranks;
- Slayer Marks;
- Contracts;
- Elite Hunts;
- Boss Contracts;
- task-control progression.

It does not grant:
- Slayer combat level;
- Slayer Evasion;
- generic combat stats simply for ranking.

---

# 16. SLAYER RANKS

| Rank | Name | Key Unlock |
|---|---|---|
| I | Tracker | Basic normal-monster Contracts |
| II | Hunter | Wider kill ranges + first free reroll after completion |
| III | Slayer | Choose 1 of 2 Contract candidates |
| IV | Veteran Slayer | 1 Block Slot + harder target pools |
| V | Elite Slayer | Elite Hunts |
| VI | Warden | Choose 1 of 3 candidates + second Block Slot |
| VII | Master Slayer | Boss Contracts |
| VIII | High Slayer | Third Block Slot + special multi-target Hunts |
| IX | Grand Slayer | T9/T10 elite/boss assignment pools |
| X | Slayer Paragon | Fourth Block Slot + Paragon Hunts / full task control |

---

# 17. SLAYER ASSIGNMENT TYPES

| Type | Unlock | Structure | Reward |
|---|---|---|---|
| Kill Contract | Rank I | Kill one eligible normal enemy a generated number of times | Slayer XP + Slayer Marks |
| Elite Hunt | Rank V | Kill selected Elite a smaller number of times | More XP/Marks + Elite-component bonus chance later |
| Boss Contract | Rank VII | Defeat selected unlocked Boss several times | High XP/Marks + Guild reward roll/Blueprint progress |
| Paragon Hunt | Rank X | Curated difficult multi-step Combat objective | Large Guild reward; not baseline daily content |

---

# 18. BASIC KILL CONTRACT

The Guild generates an eligible normal enemy.

Contract stores:
- target enemy ID;
- required kills;
- progress;
- XP reward;
- Slayer Marks reward.

Only kills after accepting count baseline.

Combat can occur:
- online;
- offline.

---

# 19. KILL COUNT SIZE

Do not deeply balance counts now.

Design direction:
- normal Contracts = long enough to matter in idle play;
- Elite Hunts = fewer kills;
- Boss Contracts = much fewer kills.

Avoid:
- 5-kill meaningless tasks;
- 2,000-kill mandatory early tasks.

---

# 20. SLAYER CANDIDATE CHOICE

Rank I–II:
- one Contract.

Rank III:
- choose 1 of 2.

Rank VI:
- choose 1 of 3.

The other candidates disappear when one is accepted.

---

# 21. SLAYER BLOCK LIST

Rank IV:
1 Block Slot.

Rank VI:
2.

Rank VIII:
3.

Rank X:
4.

Blocking an enemy prevents it from being generated as a normal Contract target.

Block does not:
- remove the enemy from world;
- affect loot;
- affect Guild Boss Contracts.

---

# 22. SLAYER REROLL

Reroll:
- replaces current unaccepted candidate set;
- or abandons/replaces active task depending UI.

Uses:
- Slayer Marks.

At low ranks, completion may grant occasional free reroll.

No real-time waiting required.

---

# 23. ELITE HUNTS

Rank V.

Targets:
- unlocked Elite enemies only.

Rewards:
- more Slayer XP;
- more Marks;
- future small Elite Component bonus/pity acceleration if desired.

Do not guarantee huge extra unique loot simply because it is a Guild task.

---

# 24. BOSS CONTRACTS

Rank VII.

Targets:
- previously unlocked Bosses.

Boss Contract never unlocks a Boss early.

Rewards:
- high Guild XP;
- Marks;
- later Guild Blueprint progress.

It does not replace normal Boss drops.

---

# 25. PARAGON HUNTS

Rank X.

Curated difficult assignments.

Examples:
- defeat three specified Elites;
- complete specified Boss kills;
- multi-target hunt.

They are long-term optional Guild content.

Not daily resets.

---

# 26. SLAYER REWARD CATALOG

| Unlock Band | Reward Type | Examples |
|---|---|---|
| I–III | Task QoL | Reroll tokens, target preview, task history |
| IV–VI | Control | Block Slots, candidate choice, Elite Hunt access |
| VII–IX | Combat Blueprints | Guild-only off-hands/utility items; exact gear later |
| X | Paragon | Prestige cosmetics, endgame Guild Blueprints, no raw universal +damage tax |

---

# 27. SLAYER GEAR PHILOSOPHY

Slayer rewards should tend toward:
- target control;
- specific hunt utility;
- unique Combat Blueprints.

Avoid a mandatory passive:
**+20% damage everywhere just for Rank X**

because then Slayer becomes compulsory for all Combat.

---

# 28. SLAYER + COMBAT CONTENT

Combat Content exposes:
- enemy ID;
- Elite flag;
- Boss flag;
- tags;
- kill events.

Slayer listens to those events.

No duplicate enemy implementation exists inside Guild code.

---

# 29. WIZARD'S GUILD — IDENTITY

Wizard's Guild is not:
- baseline Magic Skill;
- baseline Spellbook;
- Runecrafting.

It is a specialization/challenge layer for players using Magic.

The baseline 40 elemental spells remain Magic-level unlocks.

Wizard's Guild adds:
- Trials;
- unique spells;
- alternate Augments;
- Magic Guild gear/utility.

---

# 30. WIZARD RANKS

| Rank | Name | Key Unlock |
|---|---|---|
| I | Apprentice | Basic Elemental Trials |
| II | Invoker | Rune-economy Trials |
| III | Adept | Choose 1 of 2 Trials |
| IV | Arcanist | First specialized Magic challenge slot |
| V | Spellbinder | Advanced Augment Trials |
| VI | Magister | Choose 1 of 3 Trials |
| VII | Archmage | Boss Magic Trials |
| VIII | High Arcanist | Unique spell/augment Blueprints |
| IX | Grand Magister | T9/T10 Arcane Trials |
| X | Guild Archon | Paragon Magic Trials / full Guild unlock |

---

# 31. WIZARD TRIAL TYPES

| Trial Type | Example Objective | What It Tests |
|---|---|---|
| Elemental Trial | Defeat eligible enemies using a specified element | Resistance reading / spell selection |
| Counter-Element Trial | Defeat a target using its known elemental vulnerability | Bestiary knowledge |
| Rune Discipline | Complete kills under a Rune-use or preservation condition | Runecrafting economy |
| Augment Trial | Complete objective with Spirit Infusion or Arcane Overcast active | Augment mastery |
| Precision Trial | Meet hit/crit or accuracy-oriented objective | Magic setup |
| Boss Trial | Defeat an unlocked Boss using Magic under explicit constraints | Late Magic mastery |

---

# 32. ELEMENTAL TRIAL

Example:
> Defeat 120 eligible enemies using Fire damage.

The target pool is generated only from unlocked content.

A more advanced version may require:
> use the target's actual negative elemental Resistance.

This encourages Bestiary knowledge.

---

# 33. COUNTER-ELEMENT TRIAL

Objective:
defeat enemies using an element where the target is:
- Vulnerable (<0 Resistance)
- or the lowest elemental resistance if no vulnerability exists.

This makes the resistance system matter to Guild progression.

---

# 34. RUNE DISCIPLINE

Examples:
- complete X kills while using Staff;
- complete X kills with Rune Preservation above a threshold;
- complete target set without exceeding a Rune budget.

Exact numerical constraints wait until playable balance.

---

# 35. AUGMENT TRIAL

Requires:
- Spirit Infusion;
- or Arcane Overcast.

This gives those Magic systems Guild relevance without making them baseline mandatory.

---

# 36. BOSS MAGIC TRIAL

Rank VII+.

Target:
an already unlocked Boss.

Possible conditions:
- use specified element;
- use Wand;
- use Staff;
- use Augment.

Do not demand impossible resistance matchup purely for difficulty.

---

# 37. WIZARD REWARDS

| Reward Layer | Examples |
|---|---|
| Early | Trial rerolls, saved Magic Trial preset, Rune-cost preview |
| Mid | Alternate Spell Augments, Magic utility recipes, cosmetic spell visuals |
| Late | Unique spells that are mechanically distinct from baseline 40 spells |
| Endgame | Guild Magic weapon/off-hand Blueprints, Paragon Trials |

---

# 38. UNIQUE WIZARD SPELLS

Guild spells should be mechanically distinct.

Good:
- chain spell;
- delayed detonation;
- barrier spell;
- multi-element spell;
- specialized execute.

Bad:
- Fire Bolt but +7% more damage than Astral Inferno.

Unique Guild spells should widen builds rather than obsolete baseline Spellbook.

---

# 39. WIZARD GUILD CURRENCY

Currency:
**Arcane Seals**

Earned only through Wizard Trials baseline.

Used for:
- Trial rerolls;
- Guild Blueprint unlocks;
- unique spell unlock costs where designed;
- utility rewards.

No random loot box.

---

# 40. WIZARD + RUNECRAFTING

Wizard rewards may consume:
- Runes;
- Filaments;
- magical components

in their final crafting recipes.

Guild unlocks knowledge.

Runecrafting still supplies economy.

---

# 41. ARCHER'S GUILD — IDENTITY

Archer's Guild specializes in:
- bows;
- crossbows;
- standalone Ranged weapons;
- Ammo economy;
- precision.

It is not the Ranged Skill itself.

Ranged Level continues to determine baseline progression.

---

# 42. ARCHER RANKS

| Rank | Name | Key Unlock |
|---|---|---|
| I | Bowhand | Basic Marksmanship Contracts |
| II | Marksman | Bow/Crossbow-specific objectives |
| III | Sharpshooter | Choose 1 of 2 Contracts |
| IV | Pathfinder | First weapon-type specialization filter |
| V | Deadeye | Elite Marksmanship Contracts |
| VI | Master Archer | Choose 1 of 3 Contracts |
| VII | Hawkeye | Boss Marksmanship Trials |
| VIII | High Marksman | Unique Ammo/weapon Blueprints |
| IX | Grand Archer | T9/T10 specialist Contracts |
| X | Guild Deadeye | Paragon ranged challenges |

---

# 43. ARCHER CONTRACT TYPES

| Contract Type | Example | Purpose |
|---|---|---|
| Bow Contract | Kill target using Shortbow/Longbow-tagged weapon | Bow progression |
| Crossbow Contract | Kill target using Light/Heavy Crossbow-tagged weapon | Crossbow progression |
| Precision Contract | Kill targets while meeting a minimum Hit Chance / accuracy condition | Accuracy build |
| Ammo Discipline | Complete a target count under an Ammo-spent ceiling | Ammo economy |
| Penetration Trial | Defeat high-Pierce/Puncture-resistance enemy with the appropriate setup | Resistance understanding |
| Boss Marksmanship | Defeat unlocked Boss using Ranged with specified weapon/resource condition | Late ranged mastery |

---

# 44. BOW CONTRACT

Weapon must have:
- Shortbow tag;
- Longbow tag;
- or explicit `countsAsBowForGuild = true`.

This lets future unique bows participate.

---

# 45. CROSSBOW CONTRACT

Weapon must have:
- Light Crossbow;
- Heavy Crossbow;
- or explicit crossbow tag.

Do not classify Blowpipe as Crossbow.

---

# 46. STANDALONE RANGED WEAPONS

Unique weapons like:
**Venomglass Blowpipe**

can have their own Guild eligibility tags.

Example:
`guildArcherEligible = true`

They do not need to pretend to be a Bow family.

---

# 47. AMMO DISCIPLINE

Objective can track:
- Ammo consumed;
- kills;
- Ammo Preservation.

This tests supply economy.

Do not require exact impossible shot counts before Combat balance exists.

---

# 48. PRECISION CONTRACT

Uses:
- Accuracy;
- Hit Chance;
- Crit

as possible challenge axes.

The UI should show whether current preset satisfies the condition before combat starts.

---

# 49. BOSS MARKSMANSHIP

Rank VII+.

Use already-unlocked Boss.

Conditions may specify:
- Bow;
- Crossbow;
- one-handed Ranged;
- two-handed Ranged;
- Ammo economy.

No hidden condition.

---

# 50. ARCHER REWARDS

| Reward Layer | Examples |
|---|---|
| Early | Ammo supply analytics, preset slots, reroll QoL |
| Mid | Unique Arrow/Bolt utility recipes, Ranged Guard variants |
| Late | Guild ranged weapon Blueprints, specialized Ammo recipes |
| Endgame | Paragon ranged items/cosmetics; no mandatory universal +damage passive |

---

# 51. ARCHER GUILD CURRENCY

Currency:
**Marksman's Crests**

Used for:
- rerolls;
- candidate control;
- Ammo utility recipes;
- unique ranged Blueprints.

---

# 52. UNIQUE AMMO REWARDS

Guild may unlock:
- specialized Arrows;
- specialized Bolts;
- one-off Ammo recipes.

Do not create ten more parallel Ammo tiers.

Unique Ammo should have a distinct purpose:
- penetration;
- status;
- boss utility.

---

# 53. CRAFTSMAN'S GUILD — IDENTITY

Craftsman's Guild is the production-economy Guild.

It has **no kill objectives**.

It rewards:
- production;
- supply planning;
- cross-profession integration.

It is not a profession itself.

---

# 54. INCLUDED PRODUCTION PROFESSIONS

| Included Production Profession | Commission Examples |
|---|---|
| Smithing | Ingots, components, melee gear, shields |
| Leatherworking | Leather, armor, utility parts |
| Tailoring | Thread, cloth, robes, bowstrings |
| Fletching | Bows, crossbows, Ammo, rods, utility blanks |
| Cooking | Meals, provisions, banquet items |
| Alchemy | Extracts, Elixirs, Tonics, Remedies |
| Jewelcrafting | Faceted Gems, Frames, combat jewelry |
| Runecrafting | Runes, Filaments, magical components |

Gathering professions feed these systems but are not the main Commission owners.

---

# 55. CRAFTSMAN RANKS

| Rank | Name | Key Unlock |
|---|---|---|
| I | Apprentice Artisan | Basic single-profession Commissions |
| II | Journeyman | Larger orders / more profession pools |
| III | Artisan | Choose 1 of 2 Commissions |
| IV | Specialist | Cross-profession Commission chains |
| V | Master Artisan | Grand Orders |
| VI | Guildsmith | Choose 1 of 3 / first project Blueprints |
| VII | Master Craftsman | Boss/Elite component Commissions |
| VIII | High Artisan | Unique cross-profession recipes |
| IX | Grand Craftsman | T9/T10 Grand Orders |
| X | Guild Architect | Paragon Projects / full Guild recipe catalog |

---

# 56. COMMISSION TYPES

| Type | Example | Rule |
|---|---|---|
| Single Profession | Deliver 200 Frostsilver Ingots | Turn-in consumes requested items |
| Finished Goods | Deliver 50 Astral Bowstrings | Uses real crafted output |
| Cross-Profession Chain | Deliver Staff + Ward + Runes package | Tests integrated economy |
| Supply Package | Food + Ammo + Runes package | Multi-system logistics |
| Grand Order | Large deterministic order across several professions | Long-term goal, high Scrip/XP |
| Relic Commission | Boss/Elite component + crafted base item | High-rank unique Blueprint/project |

---

# 57. SINGLE-PROFESSION COMMISSION

Example:
> Deliver 250 Frostsilver Ingots.

The player crafts them normally.

Normal Smithing XP/Mastery occurs during crafting.

Turn-in:
- consumes items;
- gives Craftsman's Guild XP;
- gives Artisan Scrip.

No duplicate Guild XP from each individual craft baseline.

---

# 58. FINISHED GOODS COMMISSION

Examples:
- Bowstrings;
- Armor;
- Ammo;
- Elixirs;
- Runes;
- Jewelry.

Commission uses exact Item IDs.

No generic:
`deliver 20 high-tier items`

if the UI can identify the actual item.

---

# 59. CROSS-PROFESSION COMMISSION

Example:
> Deliver:
> - 1 Aetherwood Staff
> - 1 Aquamarine Ward
> - 500 Resonant Runes

This tests the whole economy rather than one profession timer.

---

# 60. SUPPLY PACKAGE

Possible:
- Food;
- Ammo;
- Runes;
- Combat Elixir.

These can tie Craftsman's Guild to Combat preparation without requiring kills.

---

# 61. GRAND ORDER

Rank V+.

Large deterministic request.

Characteristics:
- multiple professions;
- long completion time;
- clear inputs;
- large XP/Scrip.

No expiration.

This is good idle content.

---

# 62. RELIC COMMISSION

Rank VII+.

May request:
- Elite Component;
- Boss Component;
- crafted base item.

Reward:
- unique Blueprint;
- advanced Guild recipe.

Protected components require explicit turn-in confirmation.

---

# 63. CRAFTSMAN REWARDS

| Reward Layer | Examples |
|---|---|
| Early | Commission rerolls, delivery presets, turn-in protection |
| Mid | Batch-delivery QoL, special utility recipes |
| Late | Guild project recipes, cross-profession unique Blueprints |
| Endgame | Paragon Projects, Holdings/Craftsman integration |

---

# 64. ARTISAN SCRIP

Earned by completed Commissions.

Used for:
- Commission rerolls;
- recipe unlocks;
- Grand Project access;
- Guild utility.

No direct conversion:
Gold → unlimited Artisan Scrip.

---

# 65. CRAFTSMAN + ESTATE/HOLDINGS

Late Craftsman's Guild can integrate with:
- Estate Projects;
- worker production;
- Holdings logistics.

Workers may produce Commission items because they perform real profession actions.

But:
- player must already have content Proven;
- Guild turn-in remains deliberate.

This makes late workforce useful.

---

# 66. WORKER COMMISSION PROGRESS

Workers can create requested items.

The Guild does not care who crafted the stack.

However:
- worker crafting still grants no player profession XP/Mastery;
- turn-in grants Guild XP normally.

This fits Estate progression.

---

# 67. COMMISSION RESERVE SAFETY

Turn-in UI must show:
- Bank quantity;
- protected reserve;
- required quantity;
- after-turn-in quantity.

Do not consume below Reserve without explicit override.

---

# 68. GUILD REWARD BLUEPRINTS

Guild Blueprint:
- permanent unlock;
- not inventory item.

Final item is crafted by its owning profession.

Same philosophy as Boss unique gear.

Guilds unlock designs; professions manufacture them.

---

# 69. GUILD REWARDS SHOULD NOT BYPASS BASELINE

A Guild reward can be:
- unique;
- specialized;
- QoL;
- alternative.

It should not make every baseline profession/Combat reward obsolete.

---

# 70. SIMULTANEOUS GUILD PROGRESS

One combat kill can validly progress:
- Slayer Contract;
- Wizard Trial

if:
- target matches Slayer;
- player used required Magic condition.

Or:
- Slayer + Archer.

This is allowed.

The player does not need to choose one Guild allegiance.

---

# 71. NO EXCLUSIVE GUILD CHOICE

Joining one Guild does not lock another.

The account may eventually rank all four.

Specialization comes from:
- time;
- assignments;
- reward priorities.

Not permanent faction lockout.

---

# 72. GUILD ASSIGNMENT UI

| Screen | Core Content |
|---|---|
| Guild Overview | All Guild ranks, XP, active assignment, currency |
| Guild Detail | Rank track, current assignment, candidates, reward catalog |
| Assignment Card | Objective, eligibility, progress, reward, abandon/reroll |
| Rank Track | Current rank, next rank, unlock preview |
| Reward Catalog | Unlocked/locked recipes/QoL/Blueprints |
| History | Completed assignments, target/item history, no punitive streak |

---

# 73. OVERVIEW SCREEN

Top cards:
- Slayer
- Wizard
- Archer
- Craftsman

Each shows:
- Rank;
- XP to next Rank;
- currency;
- active assignment progress;
- ready reward/promotion alert.

---

# 74. ASSIGNMENT CANDIDATE UI

Candidate card:
- objective;
- eligibility;
- expected content source;
- reward;
- reroll cost;
- relevant weapon/spell/item requirement.

No hidden objective modifier after acceptance.

---

# 75. PROMOTION UI

Rank-up screen shows:
- new rank;
- unlocks;
- new assignment categories;
- new candidate count;
- Block Slots / Blueprints / Trial access.

Promotion itself should feel significant.

---

# 76. REWARD CATALOG

Show:
- unlocked;
- locked;
- rank requirement;
- currency cost;
- Blueprint/utility description.

Do not hide future Guild rewards completely.

---

# 77. GUILD HISTORY

Track:
- assignments completed;
- most hunted target;
- most-used Wizard element;
- Archer weapon-type completions;
- Craftsman items delivered;
- total currency earned/spent.

History is informational.

No streak punishment.

---

# 78. OFFLINE PROGRESS

If underlying action runs offline:
Guild assignment can progress offline.

Examples:
- Slayer target killed offline;
- Wizard Fire Trial kills offline;
- Archer Contract offline;
- worker crafts Commission items offline.

Turn-in/promotion choices wait for player.

---

# 79. COMPLETION EVENT

When assignment reaches target:
- stop counting extra progress baseline;
- mark Complete;
- reward waits or auto-claims according to Guild design.

Recommended:
Guild XP/currency claim immediately and generate new candidates only when player returns/opens Guild.

Do not silently select next assignment offline.

---

# 80. ABANDON

Player can abandon any assignment.

Effects:
- progress lost;
- no XP/currency reward;
- no rank penalty.

A small reroll/currency cost can exist.

No cooldown baseline.

---

# 81. GUILD CURRENCY STORAGE

Currencies are account values, not Bank items.

Store:
- Slayer Marks
- Arcane Seals
- Marksman's Crests
- Artisan Scrip

They do not consume Bank slots.

---

# 82. NO GUILD ITEM QUALITY RNG

Guild Blueprints produce deterministic items.

No:
- Rare Guild Sword;
- Perfect Guild Sword roll.

---

# 83. NO GUILD WORKER SYSTEM

Guilds do not hire separate:
- Slayer NPC workers;
- Wizard students;
- Archer retainers.

Estate Workers remain the workforce system.

Guilds are progression organizations, not another worker layer.

---

# 84. GUILD + CHRONICLES

Chronicles can introduce:
- join first Guild;
- complete first assignment;
- reach first Rank III;
- complete first Boss Contract/Grand Order.

Chronicles does not duplicate every rank objective.

---

# 85. GUILD + BESTIARY

Slayer assignment panel links:
- target Bestiary;
- weaknesses;
- sequence;
- location.

Wizard/Archer Trials link to the same target data.

No duplicate monster database.

---

# 86. GUILD + PRESETS

Accepting Wizard/Archer challenge may offer:
**Create Preset from Trial**

This pre-fills:
- required style/weapon;
- spell/element;
- objective notes.

It does not auto-equip unavailable gear.

---

# 87. GUILD NOTIFICATIONS

Useful:
- Assignment complete
- Rank promotion available
- New Guild reward unlocked

Avoid:
- repeated progress spam
- daily reminder pressure

---

# 88. RANK XP THRESHOLDS

Do not finalize now.

Use data-driven thresholds.

Design target:
- early ranks reasonably fast;
- middle ranks long;
- VIII–X long-term.

Ranks should outlive the initial Combat tier clear.

---

# 89. CURRENCY BALANCE

Do not deeply tune now:
- Marks per task;
- Seal costs;
- Crest costs;
- Scrip costs.

First make systems playable.

Then tune:
- time per rank;
- reroll economy;
- Blueprint acquisition.

---

# 90. SLAYER TASK GENERATION TAGS

Useful enemy metadata:
- `slayerEligible`
- `elite`
- `boss`
- `combatTier`
- `tags`
- `areaId`

Task generator reads these.

---

# 91. WIZARD TRIAL TAGS

Useful:
- enemy elemental Resistances
- spell element used
- Magic weapon type
- Augment
- Rune consumption
- Boss flag

No separate duplicated tags when event data already provides the condition.

---

# 92. ARCHER CONTRACT TAGS

Useful:
- `weaponTags`
- Ammo type
- Ranged damage type
- Ammo consumed
- Accuracy/Hit Chance
- Boss/Elite flag

Standalone unique weapons use explicit Guild eligibility tag.

---

# 93. CRAFTSMAN COMMISSION DATA

Commission input:
- Item ID
- quantity
- minimum unlock requirement
- profession owner
- optional component restriction

No subjective "high quality" because baseline items have deterministic quality.

---

# 94. DEVTOOLS

| Control | Purpose |
|---|---|
| Set Guild XP/Rank | Unlock testing |
| Generate assignment candidates | Pool testing |
| Force target/item | Objective testing |
| Complete assignment | Reward testing |
| Add/remove Guild currency | Shop/catalog testing |
| Add Block Slot target | Slayer control testing |
| Unlock Guild Blueprint | Recipe testing |
| Offline progress simulation | Connector to combat/profession action progress |

---

# 95. VALIDATION

1. No Guild generates locked content.
2. No Guild requires another Guild Rank unless explicitly designed later.
3. Guilds have separate XP.
4. Guilds have separate currency.
5. No daily/weekly expiration baseline.
6. Slayer targets real Combat enemy IDs.
7. Wizard uses real spell/element events.
8. Archer uses real weapon/resource events.
9. Craftsman uses real Item IDs.
10. Commission turn-in respects Reserve.
11. Boss/Elite components require explicit protected-item override.
12. Guild Blueprints point to real profession recipe owner.
13. Simultaneous Guild progress works.
14. Offline progress uses underlying system events.
15. Abandon never reduces Rank/XP.
16. No Guild reward requires random quality.

---

# 96. LOCKED BASELINE

1. Four baseline Guilds.
2. Slayer's Guild = targeted kill progression.
3. Wizard's Guild = Magic challenge progression.
4. Archer's Guild = Ranged challenge progression.
5. Craftsman's Guild = production Commission progression.
6. Every Guild has its own XP.
7. Every Guild has its own Rank.
8. Every Guild has its own currency.
9. Ten broad ranks per Guild baseline.
10. One active assignment per Guild.
11. Multiple Guilds can progress simultaneously.
12. No exclusive faction choice.
13. No daily/weekly quest reset baseline.
14. No rank loss.
15. No punitive task streak.
16. Higher ranks increase candidate choice/control.
17. Slayer unlocks Block Slots / Elite / Boss Contracts.
18. Wizard baseline spells remain Magic-level unlocks.
19. Wizard Guild adds unique Magic content, not baseline replacement.
20. Archer Guild supports bows/crossbows/standalone Ranged through tags.
21. Craftsman has no kill objectives.
22. Craftsman uses real production items and consumes them on turn-in.
23. Workers may produce Commission items late game.
24. Guild assignments do not consume Personal Activity Slot themselves.
25. Guild Blueprints are permanent knowledge, not inventory items.
26. Guild gear is deterministic.
27. Guilds do not create another worker system.
28. Exact XP/currency balance waits until playable.

---

# 97. FUTURE GUILD EXPANSION

Possible later:
- Guild-exclusive Dungeons;
- Guild bosses;
- multi-stage Paragon assignments;
- special Guild storylines;
- rank cosmetics;
- Holdings Guild projects.

Do not add more Guilds until these four have distinct, useful gameplay.

---

# 98. FINAL GUILD FANTASY

Slayer:
> I want structured reasons to hunt specific enemies and progressively gain more control over my assignments.

Wizard:
> I want Magic challenges that make me use elements, Runes and Augments intelligently.

Archer:
> I want Ranged challenges that make bows, crossbows, Ammo and precision feel distinct.

Craftsman:
> I want large orders that make the entire production economy work together.

Together they create long-term goals without replacing the underlying Skills and professions.
