# 21 — DEVOTION

**Status:** Complete Baseline Design Draft  
**Version:** 1.0  
**References:** `18_COMBAT_CORE_v1.1.md`, Combat Equipment, Cooking, Alchemy, future Monster/Loot content  
**Purpose:** Define Devotion as the Prayer-like Level 1–100 Combat Skill: Offering → Devotion Points → active Devotions → slow Devotion XP, with offensive, defensive, sustain, utility and style-specialization choices.

---

# 1. DEVOTION ROLE

Devotion is a universal secondary Combat Skill.

It supports:
- Melee;
- Ranged;
- Magic.

It is not:
- a Guild;
- a profession;
- a spell school;
- a passive talent tree.

Its identity is:

> **spend a deliberately prepared combat resource to maintain powerful combat beliefs.**

---

# 2. CORE LOOP

Combat produces Offering-eligible loot  
→ player Offers selected items at Shrine  
→ receives Devotion Points  
→ equips active Devotions  
→ Devotions consume Points on explicit triggers  
→ Points actually spent grant Devotion XP  
→ higher Devotion unlocks stronger choices.

---

# 3. SKILL PROGRESSION

Devotion:
**Level 1–100**

Leveling pace:
**slow**

Reason:
it improves every combat style and should remain a long-term secondary progression axis.

---

# 4. ACTIVE SLOT PROGRESSION

| Rule | Baseline |
|---|---|
| Devotion Slot 1 | Available at Devotion 1 |
| Devotion Slot 2 | Unlocks at Devotion 25 |
| Duplicate | Cannot equip the same Devotion twice |
| Category restriction | None baseline |
| Outside combat change | Immediate |
| In-combat change | Queued; applies after current player action |
| No Points | Selected Devotion becomes inactive |
| Preset support | Yes |

One slot early creates real choice.

The second slot at 25 is a major progression milestone.

Maximum baseline:
**2 active Devotions**

---

# 5. CATEGORIES

| Category | Purpose | Examples |
|---|---|---|
| Offensive | Damage / Accuracy / Crit | Fervor, Focused Faith, Keen Edge |
| Defensive | Resistance / Evasion / Status | Guarded Soul, Iron Faith, Sanctuary |
| Sustain | Food / Satiety | Temperance, Measured Feast, Disciplined Appetite |
| Utility | Ammo / Runes / Stamina / Point economy | Arrowkeeper, Runekeeper, Weapon Discipline |
| Style | Melee / Ranged / Magic specialization | Oaths and Exaltations |

---

# 6. COMPLETE LEVEL 1–100 DEVOTION UNLOCKS

| Lvl | Devotion / Unlock | Category | Cost Trigger | Point Cost | Effect |
|---|---|---|---|---|---|
| 1 | Fervor | Offensive | Player direct attack starts | 1 | +3% Damage Done |
| 3 | Guarded Soul | Defensive | Enemy direct attack starts | 1 | +3 pp all 9 typed Resistances for that attack |
| 6 | Temperance | Sustain | Food consumed | 1 | -10% Satiety gained from that Food |
| 10 | Steel Oath | Style | Melee direct attack starts | 1 | +5% Melee Accuracy; +3% Melee Damage |
| 14 | Hunter Oath | Style | Ranged direct attack starts | 1 | +5% Ranged Accuracy; +3% Ranged Damage |
| 18 | Mystic Oath | Style | Magic direct attack starts | 1 | +5% Magic Accuracy; +3% Magic Damage |
| 22 | Bulwark | Defensive | Enemy direct attack starts | 1 | +6% matching Evasion for that attack |
| 25 | Second Devotion Slot | System | Permanent unlock | 0 | Can maintain 2 active Devotions at once |
| 28 | Measured Feast | Sustain | Food consumed | 1 | +12% Food Healing; -5% Satiety gained |
| 32 | Arrowkeeper | Utility | Ranged Ammo would be consumed | 1 | +8 pp Ammo Preservation for that event |
| 36 | Runekeeper | Utility | Magic Rune event would consume Runes | 1 | +8 pp Rune Preservation for that cast |
| 40 | Focused Faith | Offensive | Player direct attack starts | 2 | +5% Accuracy; +1.5 pp Critical Rate |
| 44 | Iron Faith | Defensive | Enemy direct attack starts | 2 | +6 pp matching typed Resistance for that attack |
| 48 | Weapon Discipline | Utility | Player weapon Special starts | 2 | Refund 12 Stamina after the Special resolves |
| 52 | Controlled Hunger | Sustain | Food consumed | 2 | -20% Satiety gained from that Food |
| 56 | Keen Edge | Offensive | Player direct attack starts | 2 | +20% Critical Damage |
| 60 | Unbroken | Defensive | Enemy direct attack starts | 2 | +8% effective Max HP for that incoming attack window; +5% Status Resistance |
| 64 | Melee Exaltation | Style | Melee direct attack starts | 2 | +8% Melee Accuracy; +5% Melee Damage; +2 pp matching Melee penetration |
| 68 | Ranged Exaltation | Style | Ranged direct attack starts | 2 | +8% Ranged Accuracy; +5% Ranged Damage; +2 pp matching Ranged penetration |
| 72 | Magic Exaltation | Style | Magic direct attack starts | 2 | +8% Magic Accuracy; +5% Magic Damage; +2 pp matching elemental penetration |
| 76 | Sacred Economy | Utility | Ammo/Rune consumption event | 2 | +10 pp Ammo/Rune Preservation; +5 pp Devotion Point Preservation |
| 80 | Sanctuary | Defensive | Enemy Special starts | 3 | +10 pp all typed Resistances and +10% Status Resistance against that Special |
| 84 | Disciplined Appetite | Sustain | Food consumed | 2 | +18% Food Healing; -20% Satiety gained |
| 88 | Relentless | Offensive | Player direct attack starts | 3 | +6% Damage Done; +0.20 Stamina/sec while active in combat |
| 92 | Perfect Focus | Offensive | Player direct attack starts | 3 | +8% Accuracy; +3 pp Critical Rate |
| 96 | Enduring Grace | Defensive | Enemy direct attack starts | 3 | +8 pp matching typed Resistance; Food Lock duration -10% while active |
| 99 | Ascendant Oath | Style | Matching style direct attack starts | 4 | Preset chooses Melee/Ranged/Magic: +7% matching Damage, +10% matching Accuracy, +4 pp matching Penetration |
| 100 | Sacred Mastery | Utility | Permanent unlock | 0 | +5 pp Devotion Point Preservation; does not occupy a slot |

---

# 7. DEVOTION DESIGN PHILOSOPHY

A Devotion should be:
- visible;
- deterministic;
- meaningful;
- supply-relevant.

Avoid:
- dozens of tiny +0.5% bonuses;
- hidden proc chains;
- random quality;
- a single mandatory best pair for all encounters.

Lower-level Devotions may remain relevant because they cost fewer Points or trigger less often.

---

# 8. TRIGGER-BASED POINT COST

Devotions do not simply drain Points every second.

Each has a trigger.

Examples:
- offensive → player direct attack;
- defensive → enemy direct attack;
- sustain → Food use;
- utility → Ammo/Rune/Special event;
- boss defense → enemy Special.

This makes Point burn naturally reflect the build and enemy sequence.

---

# 9. WHY NOT POINTS PER SECOND

Per-second drain would make:
- slow and fast weapons pay identically;
- fast/slow enemies cost the same defensively;
- downtime awkward.

Trigger-based costs are more readable and more compatible with deterministic enemy sequences.

---

# 10. OFFERING SYSTEM

| Rule | Baseline |
|---|---|
| Point source | Offer eligible combat-drop items at Shrine |
| Eligible metadata | `offeringValue` > 0 |
| Conversion | Consume item → gain its Offering Value as Devotion Points |
| XP from Offering | None |
| XP source | Devotion Points actually spent in valid Combat |
| Protected items | Cannot be offered without explicit override |
| Reserve | Offering respects item hard reserve |
| Bulk Offer | Allowed |
| Auto Offer | Later QoL; OFF by default |
| Passive point regeneration | None baseline |

---

# 11. OFFERING ITEMS

Monster/Loot content decides which physical items have:
`offeringValue`

Possible future examples:
- remains;
- trophies;
- spiritual fragments;
- boss fragments.

Do not create one new Offering-only item for every enemy unless content genuinely benefits.

The same physical item may have multiple uses if deliberately designed.

---

# 12. OFFERING VALUE

Offering conversion is deterministic.

Example:
Ancient Fang  
Offering Value: 40

Offer 10:
**400 Devotion Points**

No random conversion roll.

---

# 13. OFFERING SAFETY

Order:
1. Protected-item permission.
2. Hard Reserve.
3. Quantity selected.
4. Auto Offer permission.
5. Convert.

Protected progression items default:
**Auto Offer OFF**

---

# 14. SHRINE QoL

| Devotion Lvl | Shrine / QoL Unlock |
|---|---|
| 1 | Shrine + manual Offer |
| 15 | Offer X / Offer All Above Reserve |
| 30 | Saved Offering Presets |
| 45 | Auto Offer eligible drops above Reserve; OFF by default |
| 65 | Offering filters by item tag/tier |
| 85 | Priority Offering list |
| 100 | Master Offering preset + Sacred Mastery |

---

# 15. AUTO OFFER

Auto Offer means:

> offer this eligible item only while Bank quantity remains above Reserve.

It is opt-in.

It is not required to train Devotion.

---

# 16. DEVOTION XP

| Event | Devotion XP |
|---|---|
| Offer item at Shrine | 0 |
| Point actually spent in valid combat | 1 × enemy Devotion Difficulty Scalar baseline |
| Point preserved | 0 from that preserved point |
| Selected Devotion never triggered | 0 |
| Devotion inactive because pool/reserve reached | 0 |

Core rule:

> **Offering creates fuel. Spending fuel trains Devotion.**

This keeps Devotion a Combat Skill rather than a bank-processing profession.

---

# 17. DIFFICULTY SCALAR

Future enemies may define:
`devotionXpScalar`

Purpose:
trivial old enemies should not necessarily remain the best Devotion training forever.

Exact values wait until playable balance.

---

# 18. DEVOTION POINT PRESERVATION

| Rule | Baseline |
|---|---|
| Devotion Point Preservation | Percentage-point chance |
| Hard cap | 80% |
| Roll | One per Devotion trigger/cost event |
| Multi-point event | Successful preserve roll preserves full event cost baseline |
| XP when preserved | No XP from preserved Points |

Devotion Point Preservation behaves like other resource-preservation stats.

It never reaches 100% baseline.

---

# 19. FERVOR

Devotion 1.

Cost:
1 Point per player direct attack.

Effect:
**+3% Damage Done**

Cheap, general starter offense.

---

# 20. GUARDED SOUL

Devotion 3.

Cost:
1 Point per enemy direct attack.

Effect:
**+3 pp all typed Resistances for that attack**

Fast enemies naturally consume Points faster.

---

# 21. TEMPERANCE

Devotion 6.

Cost:
1 Point per Food use.

Effect:
**-10% Satiety gained**

Does not disable Overeat.

---

# 22. STYLE OATHS

## Steel Oath — 10
Melee.

## Hunter Oath — 14
Ranged.

## Mystic Oath — 18
Magic.

Each costs:
1 Point per matching direct attack.

Effect:
- +5% matching Accuracy
- +3% matching Damage

---

# 23. SECOND SLOT

Devotion 25.

Permanent unlock:
**second active Devotion slot**

No Point cost.

Examples:
- Steel Oath + Guarded Soul
- Mystic Oath + Runekeeper
- Fervor + Temperance

---

# 24. MEASURED FEAST

Level 28.

1 Point per Food use.

Effect:
- +12% Food Healing
- -5% Satiety gained

---

# 25. ARROWKEEPER

Level 32.

1 Point per Ammo-consumption event.

Effect:
**+8 pp Ammo Preservation**

This converts Devotion supply into saved Fletching supply.

---

# 26. RUNEKEEPER

Level 36.

1 Point per spell Rune-consumption event.

Effect:
**+8 pp Rune Preservation**

One cast is one trigger event even if the spell consumes multiple Rune families.

---

# 27. FOCUSED FAITH

Level 40.

2 Points per player direct attack.

Effect:
- +5% Accuracy
- +1.5 pp Critical Rate

---

# 28. IRON FAITH

Level 44.

2 Points per enemy direct attack.

Effect:
**+6 pp Resistance to the actual incoming damage type**

---

# 29. WEAPON DISCIPLINE

Level 48.

2 Points when weapon Special starts.

After Special resolves:
**refund 12 Stamina**

---

# 30. CONTROLLED HUNGER

Level 52.

2 Points per Food use.

Effect:
**-20% Satiety gained**

Still cannot reduce Satiety gain to zero.

---

# 31. KEEN EDGE

Level 56.

2 Points per player direct attack.

Effect:
**+20% Critical Damage**

No Crit Rate.

---

# 32. UNBROKEN

Level 60.

2 Points per enemy direct attack.

Effect:
- +8% effective Max HP for that incoming attack window
- +5% Status Resistance

Do not heal the player when temporary effective Max HP changes.

---

# 33. EXALTATIONS

## Melee Exaltation — 64
## Ranged Exaltation — 68
## Magic Exaltation — 72

2 Points per matching direct attack.

Effect:
- +8% matching Accuracy
- +5% matching Damage
- +2 pp matching Penetration

Early Oaths remain cheaper.

---

# 34. SACRED ECONOMY

Level 76.

2 Points per relevant Ammo/Rune consumption event.

Effect:
- +10 pp Ammo Preservation
- +10 pp Rune Preservation
- +5 pp Devotion Point Preservation

Only relevant effects apply to the current event.

---

# 35. SANCTUARY

Level 80.

3 Points when enemy **Special** starts.

Effect against that Special:
- +10 pp all typed Resistances
- +10% Status Resistance

Normal Basic Attacks do not trigger it.

---

# 36. DISCIPLINED APPETITE

Level 84.

2 Points per Food use.

Effect:
- +18% Food Healing
- -20% Satiety gained

---

# 37. RELENTLESS

Level 88.

3 Points per player direct attack.

Effect:
- +6% Damage Done
- +0.20 Stamina/sec while active in combat

---

# 38. PERFECT FOCUS

Level 92.

3 Points per player direct attack.

Effect:
- +8% Accuracy
- +3 pp Critical Rate

---

# 39. ENDURING GRACE

Level 96.

3 Points per enemy direct attack.

Effect:
- +8 pp matching typed Resistance
- Food Lock duration -10% while active

It does not reduce the initial Overeat Stun.

---

# 40. ASCENDANT OATH

Level 99.

One Devotion with three preset modes:
- Melee
- Ranged
- Magic

4 Points per matching direct attack.

Effect:
- +7% matching Damage
- +10% matching Accuracy
- +4 pp matching Penetration

Powerful but expensive.

---

# 41. SACRED MASTERY

Level 100.

Permanent passive:
**+5 pp Devotion Point Preservation**

Does not occupy a slot.

Does not unlock a third slot.

---

# 42. NO THIRD BASELINE SLOT

Baseline maximum:
**2**

A future expansion may revisit this deliberately.

---

# 43. CHANGE ACTIVE DEVOTION

Outside combat:
immediate.

During combat:
queued and applies after current player action completes.

This prevents last-frame defensive toggling.

---

# 44. ZERO POINTS

If cost cannot be paid:
- effect does not apply;
- no XP;
- Devotion remains selected but inactive.

UI:
**Inactive — No Devotion Points**

---

# 45. TWO DEVOTIONS ON SAME EVENT

Each pays independently.

Example:
Fervor + Steel Oath on Melee attack:
- Fervor 1
- Steel Oath 1
- total 2

Preservation rolls separately per Devotion event baseline.

---

# 46. DETERMINISTIC ENEMY SEQUENCE INTERACTION

Enemy:
Basic → Basic → Crushing Slam → repeat

Guarded Soul:
triggers on all three direct attacks.

Sanctuary:
triggers only when Crushing Slam is tagged Special.

Point burn can therefore be predicted accurately.

---

# 47. DEVOTION + OVEREAT

Devotion may improve:
- Food Healing
- Satiety gained
- Food Lock duration

It does not:
- delete Satiety
- prevent Overeat
- allow eating during Stun
- bypass Auto Eat interval

---

# 48. DEVOTION + CRIT

Crit bonuses obey global:
- Critical Rate cap
- Critical Damage rules

---

# 49. DEVOTION + RESISTANCE

Resistance bonuses use percentage points.

Example:
Fire Resistance 20%
Iron Faith +6 pp
= 26% for that event.

---

# 50. DEVOTION + PENETRATION

Matching Penetration applies to actual direct damage type.

Melee Exaltation with Stab:
+2 pp Stab Penetration.

Magic Exaltation with Fire:
+2 pp Fire Penetration.

---

# 51. DEVOTION + AMMO / RUNES

These are optional economy conversions:
- spend Devotion Points
- save crafted Ammo/Runes

They should never be mandatory.

---

# 52. DEVOTION + ALCHEMY

Combat Elixir and Devotion stack normally under global caps.

No baseline exclusivity.

---

# 53. DEVOTION + MAGIC AUGMENTS

Runekeeper may preserve the Rune-consumption event of:
- elemental Rune
- Spirit/Arcane Augment Rune

according to Combat resource rules.

Do not charge Devotion separately for each Rune family inside the same cast.

---

# 54. PRESET DATA

Preset stores:
- Slot 1
- Slot 2
- Ascendant Oath mode
- Devotion Point Reserve
- Stop/continue behavior if Devotion unavailable

---

# 55. DEVOTION POINT RESERVE

Player may set:
**Do not consume below X Points**

At Reserve:
Devotions become inactive instead of consuming below it.

Useful for boss preparation.

---

# 56. SUPPLY ANALYTICS

Show:
- Point pool
- expected Points/hour
- hours to Reserve
- trigger rate per Devotion
- preserved Points/hour
- Devotion XP/hour

---

# 57. SHRINE UI

Shows:
- eligible item
- Bank quantity
- Reserve
- Offering Value
- quantity
- Points gained

Controls:
- Offer 1
- Offer X
- Offer All Above Reserve
- later Auto Offer

---

# 58. DEVOTION UI

| Panel | Shows |
|---|---|
| Devotion List | Unlocked/locked Devotions, category, level |
| Active Slots | 1–2 selected Devotions, trigger, cost, effect |
| Point Pool | Current Devotion Points |
| Supply | Expected Points/hour and hours remaining |
| Shrine | Eligible Offerings, reserve, Offering Value |
| Preset | Saved Devotion selection and Reserve behavior |
| Target Preview | Expected trigger frequency from enemy deterministic sequence |

---

# 59. TOOLTIP EXAMPLE

**Iron Faith**

Devotion 44  
Defensive  
Cost: 2 Points per enemy direct attack

Effect:
+6 pp matching Resistance for that incoming attack.

Also show expected Point use/hour against selected enemy.

---

# 60. LOCKED DEVOTIONS

Show:
- name
- unlock level
- category
- effect
- Point cost

Do not hide future progression.

---

# 61. OFFLINE DEVOTION

Offline Combat uses identical:
- triggers
- Point costs
- Preservation
- Reserve
- XP

If pool reaches Reserve/0:
Devotion deactivates at that event time.

---

# 62. DEATH

Points already spent remain spent.

XP already earned remains.

Remaining offline combat after death is lost according to Combat Core.

---

# 63. DEVOTION IS NOT PERSONAL ACTIVITY

Offering is instant inventory conversion baseline.

Training happens in Combat.

Devotion never occupies Personal Activity Slot.

---

# 64. NO DEVOTION MASTERY

No:
- per-Devotion Mastery
- Devotion recipe Mastery

Skill Level is enough.

---

# 65. NO RANDOM QUALITY

No Common/Rare/Legendary Devotions.

Unlocks are deterministic.

---

# 66. NO GUILD GATE

Slayer's / Wizard's / Archer's Guilds do not gate baseline Devotion.

A future Guild may reward a special unique Devotion separately.

---

# 67. MONSTER CONTENT CONTRACT

Future Monster/Loot system must support:
- `offeringValue`
- `devotionXpScalar`

Not every enemy needs a unique Offering item.

---

# 68. BOSS OFFERINGS

Boss drops may have high Offering Value.

Protected progression items default:
**Auto Offer OFF**

---

# 69. BALANCE LATER

Do not deeply tune now:
- Point income
- Point costs
- XP rate
- Offering Values
- exact Crit/Resistance values

Do it after playable combat exists.

---

# 70. DEVTOOLS

| Control | Purpose |
|---|---|
| Set Devotion Level/XP | Unlock testing |
| Set Devotion Points | Supply/depletion testing |
| Toggle any Devotion | Effect testing |
| Force Point Preservation | Economy validation |
| Set Offering Value | Shrine testing |
| Spawn eligible Offering item | Conversion testing |
| Set item Reserve/Protected | Safety testing |
| Force enemy sequence | Defensive trigger testing |
| Offline simulate | Point burn + XP parity |

---

# 71. IMPLEMENTATION TESTS

1. One slot before 25.
2. Second slot at 25.
3. Offensive trigger only on player attack.
4. Defensive trigger only on enemy attack.
5. Sanctuary only on Special.
6. Food Devotion only on Food use.
7. Arrowkeeper only on Ammo event.
8. Runekeeper only on Rune event.
9. Preservation cap.
10. Preserved Points grant no XP.
11. Zero Points disables effect.
12. Reserve prevents lower consumption.
13. Two Devotions pay separately.
14. Offline equals online deterministic triggers.
15. Auto Offer respects Reserve.
16. Protected item cannot Auto Offer.
17. Sacred Mastery uses no slot.

---

# 72. REQUIRED BACK-PATCHES

## Combat Core
Change:
`two active Devotions baseline`

to:
- one slot from Level 1
- second slot at Level 25
- maximum 2 baseline

## Monster/Loot / Item Registry
Support:
- `offeringValue`
- Offering protection metadata

## Presets
Add:
- Point Reserve
- stop/continue behavior

## Analytics
Add:
- Point burn/hour
- hours remaining
- Devotion XP/hour

---

# 73. LOCKED BASELINE

1. Devotion is a Combat Skill.
2. Level 1–100.
3. Slow leveling.
4. Fuel = Devotion Points.
5. Points come from Offering eligible combat items.
6. Offering itself gives no Devotion XP.
7. Point spending gives XP.
8. One active slot at Level 1.
9. Second slot at Level 25.
10. Maximum 2 baseline.
11. Every Devotion has explicit trigger/cost.
12. Offensive = player-attack triggers.
13. Defensive = enemy-attack triggers.
14. Sustain = Food triggers.
15. Utility = relevant resource/Special triggers.
16. Point Preservation exists.
17. Preservation hard cap 80%.
18. Preserved Points give no XP.
19. Hard Point Reserve is supported.
20. No passive Point regeneration baseline.
21. No Mastery system.
22. No random Devotion quality.
23. No Guild gate for baseline Devotion.
24. Devotion supports Crit/resistance/Food/Satiety/Stamina/Ammo/Runes.
25. Devotion cannot remove Overeat.
26. Devotion cannot reach 100% resource preservation.
27. Enemy deterministic sequences make cost predictable.
28. Level-100 Sacred Mastery does not add third slot.
29. Auto Offer is opt-in and reserve-safe.
30. Deep numerical balance waits until playable combat.

---

# 74. DEVOTION FANTASY

The intended choices are:

> Do I use Steel Oath + Fervor for cheap Melee offense, or replace one with Guarded Soul for survival?

> My Food heals enough, but Satiety is climbing. Controlled Hunger may be more valuable than another damage Devotion.

> Astral Runes are expensive. Runekeeper lets me trade Devotion Points for Rune longevity.

> This boss has one massive Special every fourth action. Sanctuary is much more efficient than paying for defense on every Basic Attack.

Devotion is:

**a limited two-slot combat-support system powered by deliberately prepared consumable faith.**
