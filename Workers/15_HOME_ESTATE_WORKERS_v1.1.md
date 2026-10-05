# 15 — HOME / ESTATE / WORKERS

**Status:** Complete Design Draft  
**Version:** 1.1 — Worker System Rework  
**Purpose:** Canonical account-infrastructure design for House → Lodge → Manor → Estate → Holdings, late-midgame Worker progression, individualized Worker Levels/Profession Levels/Traits, profession Stations, Farming land, logistics, projects, planning and offline simulation.

---

# 1. SYSTEM ROLE

Home / Estate / Workers is the account's **infrastructure progression system**.

It is not a profession.

It has no:

- Construction Skill;
- Estate XP;
- profession Mastery;
- profession Specialization.

The system exists to transform the account from:

**one character personally building every profession**

into:

**a late-game organization of individually developed specialists.**

Macro progression:

**House → Lodge → Manor → Estate → Holdings**

New worker progression:

**Player-only account → Player-only infrastructure → First hired specialists → Worker teams → Managed workforce**

The most important change in v1.1:

> **Workers do not exist during House or Lodge. The worker game begins at Manor, around late-midgame / T7 progression, approximately the level-70 part of the account.**

---

# 2. CORE DESIGN PHILOSOPHY

The worker system should feel like a **new late-game progression layer**, not a convenience toggle unlocked near the start.

Early game fantasy:

> I personally learn every system.

Midgame fantasy:

> I build a strong self-sufficient Lodge and master my profession economy.

Late-midgame fantasy:

> My Manor becomes large enough that I can finally hire specialists.

Late game fantasy:

> I identify which worker is naturally suited to Mining, Smithing, Farming, Alchemy, and so on, then build those workers over time.

Endgame fantasy:

> My Estate/Holdings contain a roster of named specialists with different histories, levels, traits, equipment and jobs.

---

# 3. NON-NEGOTIABLE RULES

1. Home/Estate is not a fifteenth profession.
2. House has **zero workers**.
3. Lodge has **zero workers**.
4. Manor is the first worker stage.
5. Manor is targeted around broad T7 / ~Level-70 account progression.
6. Workers are individuals, not identical efficiency clones.
7. Every worker has Worker Level 1–100.
8. Every worker has separate Profession Levels 1–100.
9. Workers have visible positive Traits.
10. Trait combinations make some workers much better suited to specific professions.
11. Worker Traits are visible before recruitment.
12. Workers develop more Traits / stronger Traits as Worker Level increases.
13. Workers cannot unlock content before the player.
14. Player must still make content Proven before a worker automates it.
15. Workers never grant player Skill XP or Mastery XP.
16. Workers use real Tools, equipment, ingredients and outputs.
17. One equipment item can have one physical owner.
18. No worker death.
19. No worker hunger punishment.
20. No continuous wages.
21. No paid/gacha-style hidden rarity.
22. Farming Growth remains background from early game, but Farming **workers** do not exist before Manor.
23. Automation follows player progression; it never replaces discovery.

---

# 4. RESIDENCE PROGRESSION

| Stage | Target Phase | Max Station Tier | Worker Capacity | Worker Seats / Station | Project Slots | Farming Capacity | Core Identity |
|---|---|---|---|---|---|---|---|
| House | Early | I | 0 | 0 | 1 | 6 | Pure player homestead |
| Lodge | Early → mid | II | 0 | 0 | 1 | 14 | Advanced player infrastructure; still no workers |
| Manor | Late-mid / T7 (~70) | III | 6 | 1 | 2 | 28 | Worker system unlock; first specialists |
| Estate | Late / T9-ish | IV | 16 | 3 | 3 | 48 | Worker teams, mentoring, departments |
| Holdings | Post-100 / endgame | V | 32 | 6 | 5 | 80 | Large workforce, targeted recruitment, account-scale logistics |

Exact Gold/resource requirements are balance anchors for later.

The structural progression is locked.

---

# 5. HOUSE — PURE PLAYER PHASE

Identity:

> **I do everything myself.**

House contains:

- central Bank;
- Station I infrastructure;
- basic profession inspection;
- basic Tool/loadout management;
- one Project slot;
- Farming Capacity 6;
- simple reserves;
- starter planner rules.

House does **not** contain:

- Recruitment Board;
- Worker Quarters;
- worker candidates;
- worker automation;
- worker teams.

This phase teaches the actual professions before delegation exists.

---

# 6. LODGE — ADVANCED PLAYER-ONLY PHASE

Identity:

> **I have infrastructure, but the account still runs through my character.**

This is an important change from v1.0.

Lodge unlocks:

- Station II;
- better player batches;
- more saved presets;
- deeper player queues;
- stronger reserves;
- improved Storehouse;
- Nursery;
- Farming Capacity 14;
- more sophisticated Activity Planner rules.

Lodge still has:

**0 workers**

and:

**0 worker seats**

No profession receives an early worker exception.

The Lodge should be capable and satisfying without worker automation.

---

# 7. WHY WORKERS WAIT UNTIL MANOR

Worker automation is powerful.

If it unlocks in early-midgame:

- the player stops learning profession loops too early;
- old content becomes automated before it matters;
- worker progression competes with player progression;
- the Estate fantasy peaks too soon.

Therefore worker recruitment is a **late-midgame system reveal**.

Target timing:

**T7 / around Level 70 progression**

rather than:

**T2/T3**

The exact Manor requirement does not need to be one universal account level.

Recommended baseline gate:

- at least one profession around Level 70;
- several additional professions established in T6/T7;
- Lodge infrastructure Chronicle completed;
- Manor Upgrade Project completed.

This should place the first workers roughly where the player already understands the economy.

---

# 8. MANOR — WORKER SYSTEM UNLOCK

Identity:

> **My property is finally large enough to hire specialists.**

Manor unlocks:

- Worker Recruitment Board;
- Worker Quarters I;
- Worker Level system;
- Worker Profession Levels;
- Traits;
- Trait Growth;
- six-worker roster capacity;
- Station III;
- one worker seat per Station III;
- worker equipment;
- worker plans;
- Farming worker assignment;
- Greenhouse;
- Mycology;
- Farming Capacity 28.

Manor is deliberately the moment the game opens a new management layer.

---

# 9. ESTATE — SPECIALIST TEAMS

Identity:

> **I am managing specialists, not merely owning workers.**

Estate unlocks:

- Worker Capacity 16;
- Station IV;
- up to 3 worker seats per Station;
- category-targeted recruitment;
- Mentorship;
- worker teams;
- Department UI;
- shared stock policies;
- advanced worker schedules;
- Great Orchard;
- Farming Capacity 48.

Estate is where the player begins constructing deliberate workforce composition.

---

# 10. HOLDINGS — WORKFORCE ENDGAME

Identity:

> **My account operates through a developed roster of specialists.**

Holdings unlocks:

- Worker Capacity 32;
- Station V;
- up to 6 workers on one Station/worksite;
- profession-targeted recruitment;
- advanced Mentorship / Trait Retraining;
- linked sites;
- workforce calendars;
- department orders;
- large agriculture blocks;
- post-100 projects.

Holdings does not auto-solve frontier progression.

The player still unlocks new content first.

---

# 11. STATION PROGRESSION

| Tier | Residence | Worker Seats | Player Plans | Queue Depth | Key Role |
|---|---|---|---|---|---|
| I | House | 0 | 1 | 2 | Personal inspection, Tool slot, manual batches |
| II | Lodge | 0 | 3 | 6 | Advanced player presets, reserves, larger batches; still player-only |
| III | Manor | 1 | 5 | 8 | First worker seat, recruitment integration, worker plan |
| IV | Estate | 3 | 10 | 12 | Worker team, department targets, mentorship |
| V | Holdings | 6 | 16 | 20 | Large team, targeted hiring, long orders, endgame routing |

Key rule:

> **Station I and Station II are entirely player-facing infrastructure.**

The first worker seat does not appear until:

**Station III / Manor**

---

# 12. CANONICAL PROFESSION STATIONS

| Profession | Station | Worker Trait Themes |
|---|---|---|
| Mining | Mining Bay | Effective Mining Level, ore quantity, Gem/rare finds, Deep/Core output |
| Woodcutting | Forestry Yard | Effective Woodcutting Level, log quantity, Heartwood, Mature/Ancient output |
| Fishing | Angler Station | Effective Fishing Level, catch quantity, Preferred Species, Aquatic Finds |
| Farming | Farm Office | Effective Farming Level, crop yield, Orchard yield, assigned-plot Growth |
| Hunting | Hunting Lodge | Effective Hunting Level, tracking speed, Hide/Meat yield, components |
| Foraging | Herbarium | Effective Foraging Level, category yield, Wild Reagent chance, route speed |
| Smithing | Forge | Effective Smithing Level, preservation, Smelting, Forging |
| Leatherworking | Tannery | Effective Leatherworking Level, tanning yield, preservation, assembly |
| Tailoring | Textile Room | Effective Tailoring Level, thread/cloth output, preservation, pattern speed |
| Fletching | Fletching Bench | Effective Fletching Level, Ammo quantity, Bowyer, Arbalist |
| Cooking | Kitchen | Effective Cooking Level, extra servings, preservation, cook speed |
| Alchemy | Apothecary | Effective Alchemy Level, Extract output, Brew output, catalyst efficiency |
| Jewelcrafting | Jewelcrafting Atelier | Effective Jewelcrafting Level, Gem preservation, Dust recovery, setting |
| Runecrafting | Runic Study | Effective Runecrafting Level, Rune output, Essence preservation, stabilization |

Every profession remains usable manually before its worker infrastructure exists.

---

# 13. NO STATION-SLOT TETRIS

All 14 professions may eventually own their canonical Station.

The player does not demolish one profession's infrastructure to use another.

Residence limits:

- Station Tier;
- total Worker Capacity;
- seats per Station;
- queue depth;
- planning sophistication;
- Project slots;
- Farming land.

Not the existence of the profession itself.

---

# 14. WORKER AS AN INDIVIDUAL CHARACTER

Every worker is a persistent named character.

Store:

- Worker ID;
- name;
- portrait/icon;
- Worker Level;
- Worker XP;
- 14 Worker Profession Levels;
- 14 Worker Profession XP tracks;
- Traits;
- Trait ranks;
- Growth history;
- current profession assignment;
- Tool;
- gear;
- Station/worksite;
- Plan;
- schedule;
- lifetime statistics.

A worker is therefore something the player can become attached to and intentionally develop.

---

# 15. TWO LEVEL SYSTEMS

| System | Range | Purpose |
|---|---|---|
| Worker Level | 1–100 | Career progression; Trait Growth milestones and trait slots |
| Worker Profession Level | 1–100 per profession | Content requirement, profession efficiency and long-term specialization |
| Effective Profession Level | Actual profession level + applicable Level Boost traits | Used for worker-side content requirement and base efficiency; never bypasses player unlocks |
| Player Mastery / Proven | Player-owned | Determines whether worker is allowed to automate content at all |

This distinction is important.

## Worker Level

Represents the worker's overall career.

It controls:

- Trait Growth milestones;
- Trait slots;
- veteran progression.

## Worker Profession Level

Represents competence in a specific profession.

Examples:

- Mining 73;
- Smithing 12;
- Woodcutting 1.

A great Miner is not automatically a great Woodcutter.

---

# 16. WORKER PROFESSION LEVELS USE THE SAME 1–100 SCALE

| Worker Profession Level | Tier |
|---|---|
| 1 | T1 |
| 11 | T2 |
| 21 | T3 |
| 31 | T4 |
| 41 | T5 |
| 51 | T6 |
| 61 | T7 |
| 71 | T8 |
| 81 | T9 |
| 91 | T10 |

A worker's Mining Level uses the same content-level language as player Mining.

Example:

Worker Mining 61:

- naturally reaches the T7 worker-side level gate.

But worker access is still constrained by:

1. player has unlocked the content;
2. player has made the content Proven;
3. worker Effective Mining Level meets the content requirement.

All three must be true.

---

# 17. WORKER PROFESSION LEVEL CAP

A worker's actual Profession Level cannot progress beyond the player's corresponding Profession Level.

Example:

Player Mining = 74.

Worker Mining can train to:

**74**

but not 75.

Worker XP at the cap pauses until the player advances.

This guarantees:

> the worker follows the player rather than becoming the frontier.

---

# 18. EFFECTIVE PROFESSION LEVEL

Traits can provide:

**+Effective Profession Level**

Example:

Worker actual Mining:

65

Trait:

`Born Miner V = +10 Effective Mining Levels`

Effective Mining:

75

However:

- player Mining must still be at least 75;
- Deposit must already be unlocked;
- Deposit must be Proven.

The Trait helps a specialist catch up and perform better.

It never unlocks the player's progression.

---

# 19. WORKER PROFESSION XP

Workers gain profession-specific XP by doing that profession.

Examples:

- Mining tasks → Worker Mining XP;
- Smithing tasks → Worker Smithing XP;
- Cooking tasks → Worker Cooking XP.

They do not receive player XP.

They use the same broad 1–100 progression shape as player professions, but worker XP rates are separately balanceable.

---

# 20. LATE-UNLOCK CATCH-UP XP

Because workers begin only at Manor, a new worker must not require months of T1 grinding.

Use catch-up XP.

| Worker Skill Behind Player By | Worker Profession XP Multiplier |
|---|---|
| 40+ levels | ×4.0 |
| 25–39 | ×3.0 |
| 10–24 | ×2.0 |
| 1–9 | ×1.25 |
| 0 / capped by player | ×1.0 |

The multiplier compares:

**Player Profession Level – Worker Profession Level**

This keeps worker training meaningful while letting a late-unlocked system catch up.

---

# 21. WORKER LEVEL 1–100

Worker Level is independent of profession level.

It increases through all valid worker activity.

Recommended:

**Career XP gained = 35% of profession XP earned before catch-up modifiers**

Exact value can be tuned.

Worker Level controls:

- Trait slots;
- Trait Growth;
- Mentorship access;
- veteran status.

Switching professions does not reset Worker Level.

---

# 22. TRAIT SYSTEM — CORE IDENTITY

Traits are what make worker selection meaningful.

A worker may be mechanically allowed to perform every unlocked profession.

But their Trait combination strongly suggests what they are best at.

Example:

Worker A:

- `Born Miner III`
- `Ore Hauler IV`
- `Prospector II`
- `Quick Learner I`

is obviously valuable as a Miner.

Sending that worker to Woodcutting is allowed.

It is simply inefficient because most of the worker's Trait power does nothing there.

This is intentional.

---

# 23. NO HIDDEN WORKER RARITY

Workers do not have:

- Common;
- Rare;
- Epic;
- Legendary

rarity.

There is no hidden:

**Potential 83/100**

stat.

Individuality comes from:

- visible Traits;
- Trait ranks;
- Worker Level;
- Profession Levels;
- gear;
- work history.

---

# 24. RECRUITMENT BOARD

Worker candidates are visible before recruitment.

Candidate card shows:

- name;
- portrait;
- Worker Level;
- two starting Traits;
- exact Trait ranks/effects;
- Top Recommended Professions;
- recruitment Gold cost.

The player sees what they are buying.

No hidden Trait reveal after purchase.

---

# 25. RECRUITMENT PROGRESSION

| Stage | Candidates Shown | Refresh | Targeting | Worker Capacity |
|---|---|---|---|---|
| Manor | 3 | Free every 12h; optional Gold refresh | General candidate pool | 6 |
| Estate | 5 | Free every 8h | Choose broad category bias: Gathering / Production / Provisioning / Arcane | 16 |
| Holdings | 8 | Free every 6h | Choose profession-targeted search; at least one matching profession trait offered | 32 |

Trait combination does not increase recruitment price.

A perfect Mining combination is not secretly ten times more expensive.

The opportunity cost is:

- limited candidate pool;
- limited Worker Capacity;
- training time.

---

# 26. MANOR RECRUITMENT

Manor Recruitment Board:

- 3 visible candidates;
- all start with 2 Rank I Traits;
- free refresh every 12 hours;
- optional manual Gold refresh;
- no category targeting.

This phase asks:

> Which of these candidates is worth one of my six worker slots?

---

# 27. ESTATE RECRUITMENT

Estate expands candidate choice.

The player chooses a broad recruitment focus:

- Gathering;
- Production;
- Provisioning;
- Arcane.

Candidate Trait generation is biased toward that category.

It does not guarantee one exact profession.

This keeps worker discovery interesting.

---

# 28. HOLDINGS RECRUITMENT

Holdings allows profession-targeted search.

Example:

**Search for Mining candidates**

Guarantee:

- every candidate has at least one Mining-specific starting Trait.

It does not guarantee:

- Prospector;
- Ore Hauler;
- perfect Trait combination.

The player still compares candidates.

---

# 29. TRAIT SLOTS

| Worker Level | Trait Slots | Growth Milestone |
|---|---|---|
| 1 | 2 | Starts with 2 visible Rank I traits |
| 10 | 2 | Growth Choice |
| 20 | 3 | Growth Choice + third slot |
| 30 | 3 | Growth Choice |
| 40 | 4 | Growth Choice + fourth slot |
| 50 | 4 | Growth Choice |
| 60 | 5 | Growth Choice + fifth slot |
| 70 | 5 | Growth Choice |
| 80 | 6 | Growth Choice + sixth slot |
| 90 | 6 | Growth Choice |
| 100 | 6 | Veteran Growth Choice |

A new worker starts with:

**2 Traits**

Maximum:

**6 Traits**

Trait slots represent breadth of developed specialization.

---

# 30. TRAIT RANKS

Every Trait has:

**Rank I → Rank V**

Higher rank means the same identity becomes stronger.

Standard specialized Trait scaling:

| Rank | Specific Output | Specific Action Time | Preservation | Effective Level | Rare Chance Multiplier | Worker XP |
|---|---|---|---|---|---|---|
| I | +3% | -2% | +2 pp | +2 | +10% | +10% |
| II | +6% | -4% | +4 pp | +4 | +20% | +20% |
| III | +9% | -6% | +6 pp | +6 | +30% | +30% |
| IV | +12% | -8% | +8 pp | +8 | +40% | +40% |
| V | +15% | -10% | +10 pp | +10 | +50% | +50% |

Not every trait uses every column.

The table defines shared balance anchors.

---

# 31. GENERAL TRAITS

| Trait | Ranks I→V | Effect | Identity |
|---|---|---|---|
| Industrious | -1/-2/-3/-4/-5% action time | All professions | Weak universal speed trait |
| Productive | +1/+2/+3/+4/+5% normal output | All professions | Weak universal yield trait |
| Careful | +1/+2/+3/+4/+5 pp Preservation | Where Preservation exists | Weak universal economy trait |
| Quick Learner | +10/+20/+30/+40/+50% Worker Level + Worker Profession XP | All professions | Training trait |

General Traits are deliberately weaker than profession-specific Traits.

This prevents the optimal worker from simply being:

> universally good at everything.

---

# 32. PROFESSION-SPECIFIC TRAIT POOLS

| Profession | Level Trait | Quantity / Core Trait | Rare / Specialty Trait | Speed / Economy Trait |
|---|---|---|---|---|
| Mining | Born Miner — +Effective Mining Level | Ore Hauler — primary Ore quantity | Prospector — Gem/rare chance | Deep Delver — Deep/Core output |
| Woodcutting | Born Logger — +Effective Woodcutting Level | Timber Hand — Log quantity | Heartwood Eye — Heartwood chance | Ancient Cutter — Mature/Ancient action time |
| Fishing | Natural Angler — +Effective Fishing Level | School Reader — catch quantity | Treasure Sense — Aquatic Finds | Target Specialist — Preferred Species weighting |
| Farming | Green Thumb — +Effective Farming Level | Bountiful Harvest — crop yield | Orchard Keeper — Orchard yield | Cultivator — Growth speed on worker-assigned plots |
| Hunting | Natural Tracker — +Effective Hunting Level | Butcher — Meat yield | Trophy Sense — special component chance | Skinner — Hide yield / Dressing efficiency |
| Foraging | Naturalist — +Effective Foraging Level | Gatherer's Hand — normal yield | Wild Sense — known Wild Reagent chance | Route Specialist — search/action time |
| Smithing | Forgeborn — +Effective Smithing Level | Foundry Hand — Smelting output | Master Armorer — selected gear assembly efficiency | Metal Saver — Preservation |
| Leatherworking | Tanner's Instinct — +Effective Leatherworking Level | Leather Yield — leather output | Outfitter — utility/profession gear efficiency | Hide Saver — Preservation |
| Tailoring | Weaver's Instinct — +Effective Tailoring Level | Loom Expert — Thread/Cloth output | Pattern Cutter — equipment assembly | Material Saver — Preservation |
| Fletching | Fletcher's Instinct — +Effective Fletching Level | Ammunitioner — Ammo output | Bowyer — Bow assembly | Arbalist — Crossbow assembly |
| Cooking | Chef's Instinct — +Effective Cooking Level | Extra Serving — normal servings | Banquet Chef — high-tier/Banquet output | Ingredient Saver — Preservation |
| Alchemy | Alchemical Instinct — +Effective Alchemy Level | Extractor — Extract output | Elixirist — Brew output | Catalyst Keeper — Catalyst efficiency / Preservation |
| Jewelcrafting | Lapidary Instinct — +Effective Jewelcrafting Level | Gem Saver — Gem Preservation | Dust Eye — Prismatic Dust recovery | Goldsmith — Frame/jewelry assembly |
| Runecrafting | Runic Instinct — +Effective Runecrafting Level | Rune Echo — Rune output | Stabilizer — Pattern/Stability efficiency | Essence Keeper — Essence Preservation |

These are baseline pools.

More specialized Traits can be added later only when the profession has a clear mechanic worth supporting.

---

# 33. EXAMPLE — MINING SPECIALIST

Worker:

**Rena**

Worker Level:

58

Mining Level:

67

Traits:

- Born Miner III = +6 Effective Mining Levels
- Ore Hauler IV = +12% primary Ore quantity
- Prospector II = +20% multiplicative Gem/rare chance
- Deep Delver II = +6% Deep/Core output

Effective Mining Level:

73

If the player has:

- Mining ≥73;
- unlocked the target Deposit;
- made it Proven;

Rena can run it.

This is exactly the type of worker the player would not waste on Woodcutting.

---

# 34. EXAMPLE — GENERALIST WORKER

Worker:

**Tomas**

Traits:

- Industrious IV
- Productive III
- Quick Learner II
- Careful II

This worker is useful in many professions.

But compared with a true profession specialist:

- lower maximum output;
- weaker rare/resource specialization.

Generalists are flexible.

Specialists are stronger.

---

# 35. TRAIT GROWTH EVENTS

Worker Level milestones:

**10 / 20 / 30 / 40 / 50 / 60 / 70 / 80 / 90 / 100**

trigger:

**Trait Growth**

At each event the game generates:

**3 visible options**

The player chooses one.

This gives randomness without removing agency.

---

# 36. TRAIT GROWTH OPTION WEIGHTS

| Offer Type | Baseline Weight | Rule |
|---|---|---|
| Upgrade existing trait | 45% | Only traits below Rank V |
| Gain new profession-specific trait | 35% | Only if a trait slot is open |
| Gain new general trait | 20% | Only if a trait slot is open |

The actual options are generated before the player chooses.

No option can:

- lower an existing Trait;
- add a negative Trait;
- exceed Rank V.

---

# 37. CAREER-BIASED TRAIT GROWTH

Trait Growth is influenced by how the worker has actually been used.

| Recent Career Share | Growth Bias |
|---|---|
| ≥70% one profession | At least 1 of 3 Growth Choices is guaranteed from that profession's trait pool |
| 40–69% one profession | Strong weight toward that profession |
| No dominant profession | General + currently assigned profession are weighted |
| Worker is idle | Uses lifetime most-worked profession as bias |

This lets specialization emerge naturally.

If the player has used one worker almost entirely for Mining:

future Trait Growth is more likely to make them an even better Miner.

---

# 38. WHY TRAIT GROWTH IS NOT PURE RNG

Pure random Trait rolls can ruin a worker after dozens of hours of investment.

Therefore:

- randomness creates the three offers;
- player chooses the result.

This preserves:

- individuality;
- surprise;
- planning;
- attachment.

without:

- permanent bad-luck punishment.

---

# 39. TRAIT SLOT FULL

If all Trait slots are full:

Growth Events only offer:

- rank upgrades;
- or later retraining options where allowed.

They do not create a seventh hidden Trait.

Maximum baseline Trait count:

**6**

---

# 40. WORKER LEVEL 100

At Worker Level 100:

trigger:

**Veteran Growth Choice**

Guarantee:

- at least one offer upgrades a profession-specific Trait associated with the worker's lifetime most-used profession;
- if all relevant Traits are Rank V, offer another eligible specialization Trait or a general Trait upgrade.

Worker Level 100 does not create a prestige/reset loop.

---

# 41. MENTORSHIP / RETRAINING

| Stage | System | Rule |
|---|---|---|
| Manor | No reroll | Growth choices matter; traits are always positive |
| Estate | Mentor Reroll | Once per Growth Event, pay Gold to reroll one of the three offered options |
| Holdings | Trait Retraining | Expensive project can replace one trait with a new Rank I trait; Worker Level/skills retained |

Traits are never worthless because all are positive.

Retraining is a late safety valve, not a routine reroll loop.

---

# 42. TRAIT REPLACEMENT

Holdings Trait Retraining:

- replaces one Trait;
- replacement begins at Rank I;
- Worker Level remains;
- Profession Levels remain;
- other Traits remain.

This preserves worker history while allowing long-term correction.

Do not allow complete instant respec of all Traits.

---

# 43. TRAITS DO NOT DISCOVER CONTENT

Rare/resource Traits only affect content that the player has already unlocked.

Examples:

`Prospector`

cannot discover an unknown Mining rare outside the player's unlocked drop table.

`Wild Sense`

cannot reveal a Foraging Wild Reagent the player has never discovered.

Trait boosts improve:

**known content**

only.

---

# 44. WORKER BASE EFFICIENCY

Replace the old generic Proficiency formula.

New base formula:

**Worker Base Efficiency = 40% + Effective Profession Level ×0.60%**

Examples:

| Effective Profession Level | Base Efficiency |
|---|---|
| 1 | 40.6% |
| 20 | 52% |
| 40 | 64% |
| 50 | 70% |
| 60 | 76% |
| 70 | 82% |
| 80 | 88% |
| 90 | 94% |
| 100 | 100% |

At Effective Profession Level 100:

**100% base efficiency**

before:

- player Mastery Frontier Multiplier;
- Station;
- gear;
- Traits;
- provisions.

---

# 45. PLAYER MASTERY FRONTIER MULTIPLIER

Keep the player-first frontier rule.

| Player Mastery | Frontier Multiplier |
|---|---|
| 10–24 | 75% |
| 25–49 | 85% |
| 50–74 | 92.5% |
| 75–99 | 97.5% |
| 100 | 100% |

Recommended formula:

**Final Worker Core Efficiency = Base Efficiency × Frontier Multiplier × Station Modifier × Gear Modifier**

Then apply action-specific Traits:

- quantity;
- rare chance;
- preservation;
- action time;
- specialty bonuses.

---

# 46. WHY BOTH WORKER LEVEL AND PLAYER MASTERY MATTER

Worker Profession Level answers:

> How competent is this worker?

Player Mastery answers:

> How established is this content for my account?

A Worker Mining 100 should still be inefficient on a Deposit the player barely proved.

This keeps the player relevant.

---

# 47. WORKER XP DOES NOT AFFECT PLAYER XP

Worker actions grant:

- Worker Profession XP;
- Worker Career XP;
- items/resources.

They do not grant:

- player Profession XP;
- player Mastery XP;
- Crop Mastery;
- Species Mastery;
- Recipe Mastery.

Locked.

---

# 48. WORKER CAPACITY

One unified Worker Capacity replaces separate Production/Field bed pools.

Reason:

Trait specialization should create real workforce composition decisions.

Capacity:

- House: 0
- Lodge: 0
- Manor: 6
- Estate: 16
- Holdings: 32

If the player hires four amazing Miners at Manor:

they have deliberately spent four of six available worker slots on Mining.

That is a meaningful choice.

---

# 49. WORKER QUARTERS

Worker Quarters first appear at:

**Manor**

not Lodge.

They unlock:

- Recruitment Board;
- roster;
- worker equipment;
- Worker Level UI;
- Traits;
- worker plans.

Upgrades:

## Worker Quarters I — Manor

Capacity 6.

## Worker Quarters II — Estate

Capacity 16.

## Worker Quarters III — Holdings

Capacity 32.

No worker system exists before Quarters I.

---

# 50. STATION WORKER SEATS

Even if roster capacity is high, each Station/worksite also has seat limits.

- Station III: 1
- Station IV: 3
- Station V: 6

This prevents one Station from consuming the entire roster early.

Field worksites use the same per-worksite seat logic.

---

# 51. WORKER ASSIGNMENT

A worker can be assigned to any profession the player has unlocked.

But the game shows:

**Recommended Professions**

based on visible Traits.

Example:

Top Fit:

1. Mining — 94
2. Foraging — 31
3. Woodcutting — 25

Fit score is a UI helper.

It must be calculated only from:

- visible Trait applicability;
- Trait ranks.

No hidden stat.

---

# 52. SWITCHING PROFESSION

Worker can switch profession outside active action.

On switch:

- Worker Level remains;
- all Profession Levels remain;
- Traits remain;
- previous profession level is not lost.

If a Mining specialist switches to Woodcutting:

Mining Traits simply stop applying.

The player can intentionally create:

- specialists;
- generalists;
- hybrid workers.

---

# 53. WORKER EQUIPMENT

Worker equipment shell:

- Tool;
- Head;
- Body;
- Legs;
- Hands;
- Feet;
- Ring;
- Necklace.

Tool:

**required** for normal worker action unless profession says otherwise.

Old player equipment remains useful as worker gear.

---

# 54. PHYSICAL EQUIPMENT OWNERSHIP

One physical item may be:

- worn by player;
- equipped by one worker;
- assigned to Farm Management Loadout;
- stored in Bank.

Never two simultaneously.

No duplicate loadout copies.

---

# 55. TRAITS + EQUIPMENT

Traits and gear stack.

Example Miner:

- Ore Hauler IV;
- Mining profession clothing;
- good Pickaxe.

The Trait gives identity.

The gear gives investment.

A good Trait worker without gear is useful.

A well-geared specialist is excellent.

---

# 56. WORKER TEAMS

Worker Teams begin at Estate.

A Team is several individual workers following one shared plan.

They retain individual:

- levels;
- Traits;
- gear;
- action results;
- XP gains.

The UI aggregates them.

Do not mathematically merge them into one anonymous multiplier.

---

# 57. TEAM CARD

Show:

- Team name;
- profession;
- task;
- workers;
- each worker Level / Profession Level;
- key Traits;
- total output/hour;
- rare output/hour;
- input/hour;
- reserve;
- next blocker.

Expanding the card shows individual results.

---

# 58. RECRUITMENT COST

Recruiting a worker costs:

- available Worker Capacity;
- one-time Gold.

No continuous wage.

Trait combination does not change the Gold price.

Gold cost may rise modestly with roster size as an Estate sink.

---

# 59. NO WORKER HUNGER OR ENERGY

Workers do not have:

- daily energy;
- sleep meter;
- food requirement;
- injury downtime.

Optional provisions may exist as small bonuses.

They never determine whether a worker is allowed to function.

---

# 60. OPTIONAL WORKER PROVISIONS

Baseline:

**no provision required**

Optional:

- Basic Provision → small final-output bonus;
- profession-specific late provision may exist later.

Default auto-consume:

OFF.

Do not create another mandatory upkeep loop.

---

# 61. CENTRAL BANK

All workers and Stations use the same account inventory ledger.

No hidden worker inventories.

No Station item duplication.

Worker gear is an assignment reference to a real item instance.

---

# 62. RESERVES

Automation respects:

- hard reserve;
- protected status;
- plan target;
- fallback.

Example:

Astral Essence Reserve:

500

Worker cannot consume below 500.

A high-level worker Trait cannot bypass a reserve.

---

# 63. PROTECTED ITEMS

Protected by default:

- Worldheart Shard;
- Wildheart Essence;
- Worldroot Heartwood;
- Primal endgame materials;
- World Matrix;
- Quintessence;
- World Prism;
- unique boss resources.

Automation needs explicit permission.

---

# 64. AUTOMATED CONSUMPTION ORDER

1. Protected and not allowed? → STOP.
2. Reserve would be broken? → STOP.
3. Target complete? → next rule.
4. Worker meets skill requirement? If not → STOP/fallback.
5. Player unlock/Proven missing? → STOP/fallback.
6. Inputs available? → execute.
7. Otherwise → fallback.
8. No fallback → pause and report.

---

# 65. HOUSE / LODGE PLANNER VS WORKER PLANNER

House/Lodge can have sophisticated **player plans**.

This does not mean workers exist.

Examples:

- stop Mining at quantity;
- switch personal activity when target reached;
- save profession preset;
- maintain Farming Crop Plan.

Worker plans become available only at Manor.

---

# 66. MANOR WORKER PLAN

Manor worker plan stores:

- assigned profession;
- task;
- target;
- reserve;
- allowed inputs;
- fallback;
- gear profile.

One worker per Station/worksite.

This is intentionally readable.

---

# 67. ESTATE WORKER PLAN

Estate adds:

- Team plans;
- shared target;
- multiple fallbacks;
- department reserve;
- schedules;
- category-targeted recruitment;
- Mentorship.

---

# 68. HOLDINGS WORKER PLAN

Holdings adds:

- workforce calendar;
- multiple linked sites;
- profession-targeted recruitment;
- Trait Retraining;
- very large supply targets;
- department priority rules.

Holdings should feel like workforce management.

---

# 69. FARMING + WORKERS

| Stage | Cultivation Capacity | Worker Status |
|---|---|---|
| House | 6 | Player-managed only |
| Lodge | 14 | Player-managed only; Nursery / plans may exist but no worker |
| Manor | 28 | Farming workers unlock through normal worker roster |
| Estate | 48 | Worker teams / reserve-driven agriculture |
| Holdings | 80 | Managed Field Blocks / department agriculture |

Farming Growth remains background from House.

But workers do not participate until Manor.

A Farming worker is a normal recruited worker assigned to Farming.

There is no separate magical Farmhand entity.

---

# 70. FARMING WORKER TRAITS

Examples:

## Green Thumb

+Effective Farming Level.

## Bountiful Harvest

+normal crop yield.

## Orchard Keeper

+Orchard yield.

## Cultivator

reduces Growth Time for plots assigned to that worker.

Trait bonuses apply only to plots/work groups the worker manages.

---

# 71. FARM MANAGEMENT LOADOUT

The persistent property loadout remains.

It uses physical:

- Gardening Set;
- clothing;
- jewelry.

It applies to Farming background rules.

A Farming worker can also have their own equipment.

No item can exist in both assignments simultaneously.

---

# 72. PROJECT PROGRESSION

| Stage | Concurrent Projects | Worker Infrastructure |
|---|---|---|
| House | 1 | No Worker Projects |
| Lodge | 1 | No Worker Projects |
| Manor | 2 | Recruitment Board + Worker Quarters I |
| Estate | 3 | Worker Quarters II, Mentorship Office, Department Logistics |
| Holdings | 5 | Worker Quarters III, Recruitment Office V, Advanced Training / multi-site workforce |

House/Lodge can build property infrastructure.

They simply cannot build worker infrastructure yet.

Worker Projects begin with Manor.

---

# 73. MANOR WORKER PROJECTS

Key Manor projects:

- Recruitment Board;
- Worker Quarters I;
- Worker Management Office;
- Station III upgrades;
- first field-worksite support;
- Greenhouse;
- Mycology;
- Planning Office.

These visually and mechanically introduce the workforce system.

---

# 74. ESTATE WORKER PROJECTS

Key Estate projects:

- Worker Quarters II;
- Mentorship Office;
- Department Storehouse;
- Station IV;
- Logistics Office;
- Great Orchard;
- Team Planning upgrade.

---

# 75. HOLDINGS WORKER PROJECTS

Key Holdings projects:

- Worker Quarters III;
- Recruitment Office V;
- profession-targeted search;
- Advanced Mentorship;
- Station V;
- Linked Depots;
- Grand Project Office;
- multi-site workforce planning.

---

# 76. MENTORSHIP OFFICE

Estate Mentorship allows:

- one reroll of one option during a Trait Growth Event.

It does not:

- give a Trait directly;
- pick an exact perfect Trait;
- reroll the worker infinitely.

This preserves individuality.

---

# 77. ADVANCED TRAINING — HOLDINGS

Holdings unlocks costly:

**Trait Retraining**

One Trait can be replaced.

Requirements may include:

- Gold;
- time;
- training project;
- matching profession materials.

Replacement Trait starts Rank I.

No full instant respec.

---

# 78. WORKER LEVEL UI

Worker inspection shows two major progression bars.

## Career

Worker Level 58 →59

Controls Traits.

## Profession

Mining 67 →68

Controls Mining competence.

This distinction must be obvious.

---

# 79. WORKER CARD UI

| Worker Card Field | Shown Information |
|---|---|
| Identity | Name, portrait/icon, Worker Level |
| Assignment | Profession, current Station/worksite, task |
| Skill | Actual Worker Profession Level + Effective Level |
| Traits | All traits with Rank and exact effect |
| Fit | Top 3 Recommended Professions based only on visible traits |
| Output | Output/h, rare chance, input/h, next blocker |
| Progression | Worker XP, Profession XP, next Trait Growth milestone |

The worker's Traits should be visible directly on the card or one click away.

Do not hide their identity behind a generic:

**Efficiency 81.2%**

number.

---

# 80. RECRUITMENT UI

Candidate card must show before purchase:

- portrait/name;
- two Traits;
- Rank;
- exact values;
- suggested profession fit;
- recruitment cost.

Buttons:

- Recruit;
- Pin candidate until next refresh;
- Compare with roster.

Estate/Holdings add recruitment filters.

---

# 81. TRAIT GROWTH UI

When a Growth Event occurs:

show 3 large choices.

Example:

### Option A

Upgrade:

`Ore Hauler III → IV`

### Option B

New Trait:

`Prospector I`

### Option C

New Trait:

`Quick Learner I`

Show exact before/after effect.

Player chooses one.

---

# 82. PENDING GROWTH CHOICE

A worker may continue working with a pending Growth Choice.

However:

- no second unresolved Growth Event can stack indefinitely.

If another milestone is reached:

the next event waits until the previous one is resolved.

This prevents choice spam.

---

# 83. WORKER HISTORY

Optional inspection tab:

- recruited date;
- most-worked profession;
- lifetime actions;
- lifetime resources produced;
- rare finds;
- Trait Growth choices;
- professions trained.

This reinforces individuality without affecting balance.

---

# 84. SPECIALIST FIT SCORE

UI calculates a recommendation score.

Example weights:

- applicable Rank V profession Trait > Rank I;
- profession-specific > general;
- exact action Trait can be highlighted.

Fit score is advisory.

It never blocks assignment.

---

# 85. MINING TRAIT EXAMPLES

## Born Miner

+Effective Mining Level.

## Ore Hauler

+primary Ore quantity.

## Prospector

multiplicative Gem/rare chance.

## Deep Delver

+Deep Seam/Core output.

A Miner with all four is a highly valuable specialist.

---

# 86. WOODCUTTING TRAIT EXAMPLES

## Born Logger

+Effective Woodcutting Level.

## Timber Hand

+normal Log quantity.

## Heartwood Eye

+Heartwood chance.

## Ancient Cutter

faster Mature/Ancient actions.

---

# 87. FISHING TRAIT EXAMPLES

## Natural Angler

+Effective Fishing Level.

## School Reader

+normal catch quantity.

## Treasure Sense

+Aquatic Find chance.

## Target Specialist

improves Preferred Species weighting.

---

# 88. HUNTING TRAIT EXAMPLES

## Natural Tracker

+Effective Hunting Level.

## Butcher

+Meat output.

## Skinner

+Hide output / Dressing efficiency.

## Trophy Sense

+special component chance.

---

# 89. FORAGING TRAIT EXAMPLES

## Naturalist

+Effective Foraging Level.

## Gatherer's Hand

+normal route yield.

## Wild Sense

+known Wild Reagent chance.

## Route Specialist

reduces search/action time.

---

# 90. SMITHING TRAIT EXAMPLES

## Forgeborn

+Effective Smithing Level.

## Foundry Hand

improves Smelting throughput.

## Metal Saver

Material Preservation.

## Master Armorer

improves selected Forging/equipment assembly.

---

# 91. LEATHERWORKING TRAIT EXAMPLES

## Tanner's Instinct

+Effective Leatherworking Level.

## Leather Yield

+Leather output.

## Hide Saver

Preservation.

## Outfitter

profession/worker-gear assembly efficiency.

---

# 92. TAILORING TRAIT EXAMPLES

## Weaver's Instinct

+Effective Tailoring Level.

## Loom Expert

Thread/Cloth output.

## Material Saver

Preservation.

## Pattern Cutter

equipment assembly efficiency.

---

# 93. FLETCHING TRAIT EXAMPLES

## Fletcher's Instinct

+Effective Fletching Level.

## Ammunitioner

Ammo output.

## Bowyer

Bow crafting efficiency.

## Arbalist

Crossbow crafting efficiency.

---

# 94. COOKING TRAIT EXAMPLES

## Chef's Instinct

+Effective Cooking Level.

## Extra Serving

normal serving output.

## Ingredient Saver

Preservation.

## Banquet Chef

high-tier/Banquet production.

---

# 95. ALCHEMY TRAIT EXAMPLES

## Alchemical Instinct

+Effective Alchemy Level.

## Extractor

Extract output.

## Elixirist

finished Brew output.

## Catalyst Keeper

Catalyst efficiency / Preservation.

---

# 96. JEWELCRAFTING TRAIT EXAMPLES

## Lapidary Instinct

+Effective Jewelcrafting Level.

## Gem Saver

Raw Gem Preservation.

## Dust Eye

Prismatic Dust recovery.

## Goldsmith

Frame/jewelry assembly efficiency.

---

# 97. RUNECRAFTING TRAIT EXAMPLES

## Runic Instinct

+Effective Runecrafting Level.

## Rune Echo

Rune output.

## Essence Keeper

Essence Preservation.

## Stabilizer

Pattern/Stability efficiency.

---

# 98. FARMING TRAIT EXAMPLES

Already defined:

- Green Thumb;
- Bountiful Harvest;
- Orchard Keeper;
- Cultivator.

---

# 99. GENERALIST VS SPECIALIST BALANCE

General Traits:

- weaker;
- universally useful.

Profession Traits:

- stronger;
- narrower.

Therefore:

a six-general-Trait worker is flexible.

A six-Mining-Trait worker is significantly better in Mining.

This produces meaningful roster identity.

---

# 100. NO NEGATIVE TRAITS BASELINE

Do not add:

- Lazy;
- Clumsy;
- Sickly;
- Greedy

as baseline economic traits.

The player's interesting decision should be:

> Which positive specialization do I value?

not:

> Which worker did RNG ruin?

Personality flavor can exist without negative output modifiers.

---

# 101. NO TRAIT RARITY

Traits use:

**Rank I–V**

not:

- Common;
- Rare;
- Legendary.

A Trait's identity remains the same and improves over time.

This is clearer for an idle progression game.

---

# 102. WORKER LEVELING SHOULD BE SLOW-LONG-TERM

Worker Level 100 should not happen in one weekend.

This system opens around Level 70 because it is meant to become a **second long progression axis**.

Recommended:

- early Worker Levels fast;
- 50+ noticeably slower;
- 80–100 long-term.

Exact XP curve should be modeled during economy simulation.

---

# 103. PROFESSION LEVELING SHOULD CATCH UP FASTER

Worker Profession Levels need faster catch-up than Worker Career Level.

Reason:

a newly hired late-game worker must become useful before reaching Career Level 100.

Therefore:

- profession catch-up multipliers are strong;
- Career Trait progression stays long-term.

This separation is deliberate.

---

# 104. WORKER CONTENT ACCESS CHECK

Before assigning a worker to content:

1. Does player have profession/content unlocked?
2. Is player Profession Level high enough?
3. Is content Proven / Mastery requirement met?
4. Does worker Effective Profession Level meet requirement?
5. Does worker have required Tool?
6. Are Station/worksite requirements met?
7. Are inputs/reserves valid?

Only then:

worker may execute.

---

# 105. RARE FIND TRAIT RULE

Rare Trait bonuses are:

**multiplicative to the existing rare chance**

not percentage points unless a profession explicitly says otherwise.

Example:

Base rare chance:

2%

Prospector III:

+30%

Final:

2.6%

not:

32%

This is important for balance.

---

# 106. QUANTITY TRAIT RULE

Normal quantity Traits apply to:

- common/primary outputs.

They do not automatically multiply:

- boss uniques;
- protected endgame materials;
- explicit one-per-event rewards.

Each profession can mark outputs:

`worker_quantity_trait_eligible = true/false`

---

# 107. EFFECTIVE LEVEL TRAIT RULE

+Effective Level:

- counts for worker-side content requirement;
- can improve formulas that scale with worker level;
- cap baseline at 100;
- never raises player level;
- never unlocks content for the account.

---

# 108. PRODUCTION PRESERVATION TRAIT RULE

Worker Preservation Traits respect:

- profession-specific Preservation cap.

A Rank V Trait cannot exceed the cap.

Do not create separate worker-only cap.

---

# 109. WORKER SCHEDULES

Manor:

simple:

- always work;
- pause at target.

Estate:

- shift windows;
- team schedules;
- department priorities.

Holdings:

- calendar rules;
- linked-site scheduling.

No daily energy system is required.

---

# 110. WORKER OFFLINE SIMULATION

Offline processes:

- each worker action;
- Profession XP;
- Career XP;
- Trait Growth milestone flags;
- items;
- inputs;
- reserves;
- fallbacks.

Trait Growth selection itself never auto-chooses.

If worker reaches a milestone offline:

- event becomes pending;
- worker continues with current Traits;
- choice waits for player.

---

# 111. OFFLINE LEVEL CAP

If Worker Profession Level reaches player's profession level offline:

- further profession XP pauses;
- Career XP can continue at a reduced rate only from valid work;
- worker keeps producing if content remains valid.

Worker never surpasses player.

---

# 112. OFFLINE REPORT — WORKERS

Show:

- worker levels gained;
- profession levels gained;
- pending Trait Growth choices;
- resources produced;
- rare finds;
- input consumption;
- blocked time;
- reason for pause;
- worker with best output.

A milestone should be visible immediately on login.

---

# 113. WORKER ANALYTICS

For selected worker show:

- Base Efficiency;
- Effective Profession Level;
- player Mastery Frontier Multiplier;
- Tool contribution;
- gear contribution;
- Trait contribution;
- Station contribution;
- output/hour;
- rare/hour;
- input/hour;
- Profession XP/hour;
- Worker XP/hour.

This makes worker build decisions understandable.

---

# 114. HOME OVERVIEW

House/Lodge:

worker panel does not appear.

Manor+:

top Home dashboard adds:

**Workers**

with:

- active;
- idle;
- pending Trait Choices;
- blocked;
- roster cap.

The UI visibly changes when Manor unlocks.

That makes worker arrival feel like a major system unlock.

---

# 115. MANOR WORKER INTRODUCTION FLOW

Chronicle sequence:

1. Complete Manor Upgrade.
2. Build Worker Quarters I.
3. Build Recruitment Board.
4. Inspect first 3 candidates.
5. Compare Traits.
6. Recruit first worker.
7. Assign profession.
8. Equip old profession Tool.
9. Train first Profession Level.
10. Reach Worker Level 10.
11. Choose first Trait Growth.
12. Create first worker Plan.

This should teach the system gradually.

---

# 116. ESTATE WORKER CHRONICLES

Suggested goals:

- maintain 10+ workers;
- create first 3-worker Team;
- recruit with category focus;
- rank a Trait to III;
- reach Worker Level 50;
- train one worker to Profession Level 80;
- use Mentor Reroll;
- maintain three supply targets.

---

# 117. HOLDINGS WORKER CHRONICLES

Suggested:

- 20+ worker roster;
- profession-targeted recruitment;
- one Worker Level 100;
- one Profession Level 100 worker;
- one Rank V profession Trait;
- one worker with 5+ profession-relevant Traits;
- Trait Retraining Project;
- multi-site workforce calendar.

---

# 118. PROJECT STRUCTURE

| Stage | Concurrent Projects | Worker Infrastructure |
|---|---|---|
| House | 1 | No Worker Projects |
| Lodge | 1 | No Worker Projects |
| Manor | 2 | Recruitment Board + Worker Quarters I |
| Estate | 3 | Worker Quarters II, Mentorship Office, Department Logistics |
| Holdings | 5 | Worker Quarters III, Recruitment Office V, Advanced Training / multi-site workforce |

House/Lodge remain meaningful through infrastructure projects without worker automation.

---

# 119. GOLD ROLE

Gold sinks:

- Residence upgrades;
- Station upgrades;
- Manor Recruitment;
- Worker Quarters;
- manual Recruitment Board refresh;
- Mentorship;
- Trait Retraining;
- logistics;
- land;
- projects.

No continuous salary.

---

# 120. RECRUITMENT REFRESH SAFETY

Manual candidate refresh costs Gold.

Do not use:

- premium currency;
- loot boxes;
- real-time monetization mechanics.

The player can always wait for a free refresh.

Pinned candidate:

can survive one normal refresh cycle.

---

# 121. CANDIDATE DUPLICATE RULE

Candidate generation may create similar Trait combinations.

Do not guarantee every refresh contains a unique profession specialist.

But avoid exact duplicate:

- name;
- Trait pair;
- portrait

within one board.

---

# 122. WORKER DISMISSAL

Dismiss:

- returns all equipment;
- frees roster slot.

No refund of:

- recruitment Gold;
- training time.

Worker is removed permanently.

Require confirmation for:

- Worker Level 20+;
- Rank III+ Trait;
- equipped protected gear.

---

# 123. WORKER LOCK / FAVORITE

Player can:

**Lock Worker**

Locked worker cannot:

- be dismissed;
- be accidentally used in destructive future systems.

Useful for highly developed specialists.

---

# 124. NO WORKER SALVAGE

Do not create:

- sacrifice workers to level another worker;
- merge duplicates;
- feed worker XP.

Workers are characters.

Not upgrade materials.

---

# 125. DEPARTMENTS

Estate Departments remain:

- Materials;
- Manufacturing;
- Provisioning;
- Arcane.

But Departments do not own worker identity.

A worker always remains individually inspectable.

Departments only group:

- plans;
- targets;
- workers;
- analytics.

---

# 126. WORKER TEAMS AND TRAIT SYNERGY

Do not add complicated team-combo bonuses baseline.

If a Mining Team contains:

- one Prospector;
- one Ore Hauler;
- one Deep Delver;

each worker applies their own Trait to their own action.

No hidden:

`3 Miner synergy +20%`

needed.

This keeps simulation readable.

---

# 127. HOLDINGS MULTI-SITE WORKERS

At Holdings:

workers can be assigned across:

- primary Estate;
- satellite mining site;
- forestry site;
- fishing operation;
- agricultural block.

The worker still has:

- one active assignment.

No worker duplicates across sites.

---

# 128. WORKER FRONTIER RULE — LOCKED

A Worker Level 100 / Mining 100 / perfect Mining Traits still cannot:

- enter a Deposit the player has not unlocked;
- discover a boss-gated material first;
- unlock T11 content;
- skip Chronicle requirements.

Worker strength scales the known economy.

It never becomes autonomous progression.

---

# 129. FARMING BACKGROUND RULE — LOCKED

House/Lodge:

Farming grows in background through property mechanics.

No Farming workers.

Manor:

recruited worker may be assigned Farming.

This worker can:

- harvest;
- replant;
- manage assigned Crop Plan.

Worker Traits then create individuality in Farming just like other professions.

---

# 130. STATION II PLAYER-ONLY FEATURES

Because Lodge no longer has workers, Station II should be worth upgrading for the player.

Station II can improve:

- batch size;
- inspection;
- analytics;
- saved presets;
- personal queue depth;
- resource reserve UI;
- profession-specific QoL.

It must not be described as a worker tier anywhere.

---

# 131. UPDATE OLD DOCUMENT CONTRACTS

Any other profession document that currently says:

- first worker at Lodge;
- Station II first worker;
- production worker at Lodge;

must be updated during the next profession integration sync.

Canonical new rule:

> **No workers anywhere before Manor.**

If an old profession file disagrees:

this Home/Estate/Workers v1.1 document is the newer source of truth.

---

# 132. CANONICAL WORKER UNLOCK

Manor worker-system target:

**late-midgame / broad T7 progression**

Recommended balance anchor:

- Manor Project complete;
- at least one Level 70 profession;
- broad Lodge progression established.

Do not lock final exact account requirements until economy/progression simulation.

But do not move worker recruitment earlier than Manor.

---

# 133. DEVTOOLS

| Group | Controls |
|---|---|
| Residence | Set House/Lodge/Manor/Estate/Holdings |
| Recruitment | Generate candidates, lock/refresh pool, set traits |
| Worker | Set Worker Level, Career XP, profession levels, profession XP |
| Traits | Add/remove, set Rank I–V, force Growth Event, reroll offers |
| Assignment | Assign profession, Station/worksite, plan |
| Gear | Equip Tool/gear; test item ownership conflicts |
| Simulation | 1m / 1h / 8h / 24h / 7d worker simulation |
| Analytics | Expected vs actual worker output, XP, rare finds, resource burn |

Worker Trait testing is essential.

DevTools should support generating:

- perfect specialist;
- generalist;
- bad-fit-but-positive worker;
- Level 1 recruit;
- Level 100 veteran.

---

# 134. DEVTOOLS SCENARIOS

## Manor First Hire

- Manor;
- 3 candidates;
- 1 empty worker slot;
- old profession Tools in Bank.

## Mining Specialist

- Worker Level 50;
- Mining 70;
- Born Miner III;
- Ore Hauler III;
- Prospector II.

## Generalist

- several general Traits;
- multiple profession levels.

## Estate Team

- 12 workers;
- 3-worker Mining Team;
- 3-worker Smithing Team;
- category recruitment.

## Holdings Workforce

- 28+ workers;
- several Level 100 veterans;
- profession-targeted recruitment;
- pending Growth Events;
- multi-site schedules.

---

# 135. SAVE DATA — WORKER

Store:

- Worker ID;
- name;
- cosmetic portrait ID;
- Worker Level;
- Worker XP;
- Profession Level per profession;
- Profession XP per profession;
- Traits;
- Trait Rank;
- Trait slot unlocks;
- pending Growth Choice;
- Growth history;
- current profession;
- assignment;
- Tool;
- gear;
- Plan;
- schedule;
- lifetime statistics;
- lock/favorite state.

---

# 136. SAVE DATA — RECRUITMENT

Store:

- current candidate IDs;
- visible Traits;
- next free refresh timestamp;
- pinned candidate;
- recruitment focus;
- manual refresh state.

Candidate Trait results must not change on reload.

---

# 137. SAVE DATA — TRAIT GROWTH

When Growth Event is generated:

save all 3 offered options immediately.

Reloading must not reroll them.

This prevents:

**save-scumming Trait choices**

through normal reload.

---

# 138. PERFORMANCE

32 Holdings workers × multiple skills/traits is still manageable if simulation is event-based.

Do not update every worker every render frame.

Worker simulation triggers on:

- action complete;
- level up;
- reserve hit;
- target hit;
- schedule change;
- offline event.

UI can aggregate Teams/Departments.

---

# 139. ANTI-BLOAT RULES

Avoid:

- worker rarity;
- negative economic Traits;
- hidden Potential;
- worker gacha;
- early Lodge automation;
- separate Production/Field worker slot pools;
- permanent profession lock;
- losing old profession levels on reassignment;
- full Trait reroll;
- worker sacrifice/merge;
- daily worker energy;
- continuous salary;
- starvation;
- worker death;
- team-combo spreadsheet mechanics.

Prefer:

- visible candidates;
- limited roster;
- Worker Level;
- profession-specific levels;
- positive Trait specialization;
- rank growth;
- three-option Growth Choices;
- long-term worker attachment.

---

# 140. MAJOR LOCKED ANSWERS

## Do workers exist in House?

**No.**

## Do workers exist in Lodge?

**No.**

## When does the worker system begin?

**Manor.**

## Target progression timing?

**Late-midgame / broad T7 / around the Level-70 phase.**

## Do workers have individual levels?

**Yes. Worker Level 1–100.**

## Do workers have profession levels?

**Yes. Separate 1–100 levels for each profession.**

## Can a worker become better than the player in a profession?

**No. Actual Worker Profession Level is capped by Player Profession Level.**

## Can traits boost effective level?

**Yes.**

## Can boosted level unlock player content?

**No.**

## Do workers have Traits?

**Yes.**

## Are Traits visible before hiring?

**Yes.**

## Are Traits random?

**Candidate Traits and Growth offers are randomized, but fully visible.**

## Does player choose Trait growth?

**Yes, one of three generated options.**

## Can existing Traits become stronger?

**Yes, Rank I–V.**

## Can workers gain new Traits?

**Yes, when an unlocked Trait slot and Growth Event permit it.**

## Maximum baseline Traits?

**6.**

## Do workers have rarity?

**No.**

## Negative Traits?

**No baseline.**

## Can worker change profession?

**Yes.**

## Does changing profession delete old levels?

**No.**

## Why not send a Mining specialist Woodcutting?

**Allowed, but Mining Traits do not help there, so it is normally inefficient.**

## First worker roster capacity?

**6 at Manor.**

## Estate?

**16.**

## Holdings?

**32.**

## Separate Production/Field bed pools?

**No. One roster capacity.**

## Continuous wages?

**No.**

## Worker hunger?

**No.**

## Worker equipment?

**Yes.**

## Can old player gear go to workers?

**Yes.**

## Can workers grant player XP/Mastery?

**No.**

## Can workers discover new content?

**No.**

---

# 141. COMPLETE WORKER PROGRESSION LOOP

**Reach late-midgame**

↓

**Upgrade Lodge → Manor**

↓

**Build Worker Quarters + Recruitment Board**

↓

**See 3 candidates and their Traits**

↓

**Choose worker based on Trait combination**

↓

**Assign profession**

↓

**Worker trains Profession Level**

↓

**Worker Level increases**

↓

**Level 10 Trait Growth**

↓

**Choose one of 3 Trait options**

↓

**Worker becomes more specialized**

↓

**Equip old player gear**

↓

**Train to higher profession tiers**

↓

**Estate unlocks teams + Mentorship**

↓

**Holdings unlocks profession-targeted recruitment + retraining**

↓

**Build a roster of named endgame specialists**

---

# 142. FINAL SYSTEM IDENTITY

The original worker model treated workers mainly as:

**generic efficiency slots.**

Version 1.1 changes the identity to:

> **Workers are late-game characters that the player recruits, trains, specializes and equips.**

The player should remember:

- which worker is their best Miner;
- which one became an exceptional Alchemist;
- which generalist can cover several professions;
- which veteran rolled exactly the Trait combination they wanted.

The system should create questions like:

> I only have six Manor worker slots. Do I hire this excellent Prospector, or keep the slot open for a Smithing candidate?

and later:

> This worker has Mining 92, Born Miner V, Prospector IV and Ore Hauler V. I am absolutely not moving them to Woodcutting.

That is the intended Worker fantasy.

---

# 143. SOURCE-OF-TRUTH OVERRIDES FROM V1.0

Version 1.1 explicitly replaces the following older rules:

1. **Lodge production workers → REMOVED.**
2. **Production/Field separate worker-bed pools → REMOVED.**
3. **Generic worker Proficiency-only identity → REPLACED.**
4. **Workers with no random economic Traits → REPLACED by visible positive Trait system.**
5. **Worker Base Efficiency 50% + Proficiency ×0.5% → REPLACED by profession-level efficiency formula.**
6. **Farmhands as a separate worker-type concept → replaced by normal workers assigned Farming.**
7. **Station II first worker seat → REMOVED.**
8. **Worker Quarters at Lodge → moved to Manor.**

New canon:

- House/Lodge player-only;
- Manor first workers;
- Worker Level 1–100;
- per-profession Worker Levels 1–100;
- visible Traits;
- Rank I–V;
- Trait Growth every 10 Worker Levels;
- one unified roster capacity;
- Manor/Estate/Holdings = 6/16/32 worker baseline.

---

# 144. IMPLEMENTATION HANDOFF

When implemented later:

1. Worker candidate Trait results must be deterministic after generation.
2. Growth offers must be persisted immediately.
3. Worker Level and Profession Levels are separate data.
4. Trait calculations must use tags, not hardcoded worker names.
5. Profession Trait effects should query profession systems through stable stat modifiers.
6. Worker content access must always check player unlock + Proven state.
7. Worker Profession Level cannot exceed player Profession Level.
8. Effective Level Trait cannot bypass player progression.
9. Roster Capacity and Station Seats are data-driven.
10. House/Lodge UI must not expose dead worker controls.
11. Manor unlock should visibly introduce the worker UI as a new system.
12. Old profession docs that still mention Lodge workers need synchronization to this v1.1 canon.
