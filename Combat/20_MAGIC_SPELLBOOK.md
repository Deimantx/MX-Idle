# 20 — MAGIC SPELLBOOK

**Status:** Complete Baseline Design Draft  
**Version:** 1.0  
**References:** `18_COMBAT_CORE_v1.1.md`, `19_COMBAT_EQUIPMENT_INTEGRATION_v0.2.md`, `09_RUNECRAFTING.md`  
**Purpose:** Define the baseline Level 1–100 Magic Spellbook, Air/Fire/Water/Earth identities, spell unlocks, Rune costs, Spell Augments, Wand/Staff interaction, statuses, UI, offline behavior and future expansion hooks.

---

# 1. MAGIC ROLE

Magic is one of the three primary Combat styles.

Its baseline identity is not:

> one generic Magic attack with different colors.

Magic asks the player to choose:

- element;
- spell tier;
- Wand vs Staff / unique Magic weapon;
- Rune economy;
- optional Spirit/Arcane Augment;
- enemy elemental weakness/resistance.

Magic directly depends on Runecrafting.

There is no Mana bar.

---

# 2. BASELINE DAMAGE TYPES

Magic has exactly four baseline direct damage types:

- **Air**
- **Fire**
- **Water**
- **Earth**

`Arcane Rune` is **not** an Arcane damage type.

`Spirit Rune` is **not** a Spirit damage type.

Spirit and Arcane Runes support advanced casting.

---

# 3. FOUR ELEMENT IDENTITIES

| Element | Primary Identity | Raw Power | Accuracy | Cast Speed | Secondary Effect |
|---|---|---|---|---|---|
| Air | Tempo / reliable casting | Low | Highest | Fastest | None baseline; value is speed + accuracy |
| Fire | Damage-over-time pressure | High | Normal | Slightly slow | Burn |
| Water | Control / safety | Moderate | High | Normal | Chill increases enemy Action Time |
| Earth | Heavy direct damage / armor breaking | Highest | Lowest | Slowest | Matching elemental Penetration |

The differences must remain visible even if later balance changes exact numbers.

---

# 4. PRIMARY SPELL MODEL

The player selects exactly one **Primary Spell** for normal Magic Basic Attacks.

The selected spell determines:

- damage type;
- Base Power;
- base Rune cost;
- Accuracy modifier;
- Cast Interval modifier;
- elemental effect.

Wand/Staff then modifies that spell.

---

# 5. SPELL UNLOCK STRUCTURE

Each tier follows the existing Runecrafting unlock order:

- x1 → Fire / Ember
- x2 → Water / Frost
- x3 → Air / Storm
- x4 → Earth / Stone

Examples:

T1:
- Magic 1 Fire
- Magic 2 Water
- Magic 3 Air
- Magic 4 Earth

T10:
- Magic 91 Fire
- Magic 92 Water
- Magic 93 Air
- Magic 94 Earth

---

# 6. COMPLETE T1–T10 ELEMENTAL SPELLBOOK

| Tier | Magic Lvl | Spell | Damage Type | Rune Grade | Base Cost | Base Power | Accuracy Mod | Cast Mod | Identity / Effect |
|---|---|---|---|---|---|---|---|---|---|
| T1 | 1 | Ember Dart | Fire | Minor | 1 Minor Ember Rune | 18 | ±0% | +0.05s | On hit: Burn for 8% of final direct hit over 6s |
| T1 | 2 | Frost Shard | Water | Minor | 1 Minor Frost Rune | 15 | +8% | ±0.00s | On hit: Chill +5% enemy Action Time for 4s |
| T1 | 3 | Wind Dart | Air | Minor | 1 Minor Storm Rune | 14 | +15% | -0.20s | Tempo spell; no extra status |
| T1 | 4 | Stone Shard | Earth | Minor | 1 Minor Stone Rune | 18 | -5% | +0.20s | +4 pp Earth Penetration |
| T2 | 11 | Flame Bolt | Fire | Lesser | 1 Lesser Ember Rune | 24 | ±0% | +0.05s | On hit: Burn for 10% of final direct hit over 6s |
| T2 | 12 | Ice Bolt | Water | Lesser | 1 Lesser Frost Rune | 21 | +8% | ±0.00s | On hit: Chill +6% enemy Action Time for 4s |
| T2 | 13 | Gale Bolt | Air | Lesser | 1 Lesser Storm Rune | 20 | +15% | -0.20s | Tempo spell; no extra status |
| T2 | 14 | Rock Spike | Earth | Lesser | 1 Lesser Stone Rune | 25 | -5% | +0.20s | +5 pp Earth Penetration |
| T3 | 21 | Scorch Orb | Fire | Common | 1 Common Ember Rune | 32 | ±0% | +0.05s | On hit: Burn for 12% of final direct hit over 6s |
| T3 | 22 | Rime Lance | Water | Common | 1 Common Frost Rune | 28 | +8% | ±0.00s | On hit: Chill +7% enemy Action Time for 4s |
| T3 | 23 | Storm Needle | Air | Common | 1 Common Storm Rune | 26 | +15% | -0.20s | Tempo spell; no extra status |
| T3 | 24 | Granite Lance | Earth | Common | 1 Common Stone Rune | 33 | -5% | +0.20s | +6 pp Earth Penetration |
| T4 | 31 | Inferno Lance | Fire | Greater | 1 Greater Ember Rune | 41 | ±0% | +0.05s | On hit: Burn for 14% of final direct hit over 6s |
| T4 | 32 | Glacial Spear | Water | Greater | 1 Greater Frost Rune | 35 | +8% | ±0.00s | On hit: Chill +8% enemy Action Time for 4s |
| T4 | 33 | Sky Lance | Air | Greater | 1 Greater Storm Rune | 33 | +15% | -0.20s | Tempo spell; no extra status |
| T4 | 34 | Earthen Spear | Earth | Greater | 1 Greater Stone Rune | 43 | -5% | +0.20s | +7 pp Earth Penetration |
| T5 | 41 | Cinderburst | Fire | Refined | 1 Refined Ember Rune | 51 | ±0% | +0.05s | On hit: Burn for 16% of final direct hit over 6s |
| T5 | 42 | Winter Orb | Water | Refined | 1 Refined Frost Rune | 44 | +8% | ±0.00s | On hit: Chill +9% enemy Action Time for 4s |
| T5 | 43 | Tempest Arc | Air | Refined | 1 Refined Storm Rune | 41 | +15% | -0.20s | Tempo spell; no extra status |
| T5 | 44 | Fault Burst | Earth | Refined | 1 Refined Stone Rune | 53 | -5% | +0.20s | +8 pp Earth Penetration |
| T6 | 51 | Pyre Spear | Fire | Empowered | 1 Empowered Ember Rune | 62 | ±0% | +0.05s | On hit: Burn for 18% of final direct hit over 6s |
| T6 | 52 | Frozen Torrent | Water | Empowered | 1 Empowered Frost Rune | 53 | +8% | ±0.00s | On hit: Chill +10% enemy Action Time for 4s |
| T6 | 53 | Cyclone Spear | Air | Empowered | 1 Empowered Storm Rune | 50 | +15% | -0.20s | Tempo spell; no extra status |
| T6 | 54 | Mountain Fang | Earth | Empowered | 1 Empowered Stone Rune | 64 | -5% | +0.20s | +9 pp Earth Penetration |
| T7 | 61 | Aetherflame | Fire | Aetheric | 1 Aetheric Ember Rune | 74 | ±0% | +0.05s | On hit: Burn for 20% of final direct hit over 6s |
| T7 | 62 | Aetherfrost | Water | Aetheric | 1 Aetheric Frost Rune | 64 | +8% | ±0.00s | On hit: Chill +11% enemy Action Time for 4s |
| T7 | 63 | Aether Gale | Air | Aetheric | 1 Aetheric Storm Rune | 60 | +15% | -0.20s | Tempo spell; no extra status |
| T7 | 64 | Aether Stone | Earth | Aetheric | 1 Aetheric Stone Rune | 77 | -5% | +0.20s | +10 pp Earth Penetration |
| T8 | 71 | Solar Pyre | Fire | Resonant | 1 Resonant Ember Rune | 87 | ±0% | +0.05s | On hit: Burn for 22% of final direct hit over 6s |
| T8 | 72 | Crystal Deluge | Water | Resonant | 1 Resonant Frost Rune | 75 | +8% | ±0.00s | On hit: Chill +12% enemy Action Time for 4s |
| T8 | 73 | Thunderwind | Air | Resonant | 1 Resonant Storm Rune | 71 | +15% | -0.20s | Tempo spell; no extra status |
| T8 | 74 | Prismatic Quake | Earth | Resonant | 1 Resonant Stone Rune | 91 | -5% | +0.20s | +11 pp Earth Penetration |
| T9 | 81 | Eclipse Flame | Fire | Umbral | 1 Umbral Ember Rune | 101 | ±0% | +0.05s | On hit: Burn for 24% of final direct hit over 6s |
| T9 | 82 | Nightfrost | Water | Umbral | 1 Umbral Frost Rune | 87 | +8% | ±0.00s | On hit: Chill +13% enemy Action Time for 4s |
| T9 | 83 | Void Gale | Air | Umbral | 1 Umbral Storm Rune | 83 | +15% | -0.20s | Tempo spell; no extra status |
| T9 | 84 | Umbral Spire | Earth | Umbral | 1 Umbral Stone Rune | 106 | -5% | +0.20s | +12 pp Earth Penetration |
| T10 | 91 | Astral Inferno | Fire | Astral | 1 Astral Ember Rune | 117 | ±0% | +0.05s | On hit: Burn for 26% of final direct hit over 6s |
| T10 | 92 | Astral Glacier | Water | Astral | 1 Astral Frost Rune | 101 | +8% | ±0.00s | On hit: Chill +14% enemy Action Time for 4s |
| T10 | 93 | Astral Tempest | Air | Astral | 1 Astral Storm Rune | 95 | +15% | -0.20s | Tempo spell; no extra status |
| T10 | 94 | Astral Cataclysm | Earth | Astral | 1 Astral Stone Rune | 122 | -5% | +0.20s | +13 pp Earth Penetration |

---

# 7. BASE RUNE COST RULE

Every baseline elemental spell costs:

**1 matching Rune of the spell's grade per cast**

Examples:

- Ember Dart → 1 Minor Ember Rune
- Sky Lance → 1 Greater Storm Rune
- Astral Cataclysm → 1 Astral Stone Rune

This keeps the basic combat economy readable.

---

# 8. HIGHER-GRADE RUNE SUBSTITUTION

Use the existing Runecrafting rule.

A higher-grade Rune may satisfy a lower-grade spell only if:

**Allow Higher Grade Substitution = ON**

Default:

**OFF**

One higher Rune pays one lower Rune requirement.

---

# 9. AIR SPELLS

Air uses **Storm Runes** and deals **Air** damage.

Identity:

- lowest direct Power;
- highest Accuracy;
- fastest cast modifier;
- no mandatory status effect.

Air wins through reliable, frequent casting rather than extra DoT/control.

---

# 10. FIRE SPELLS

Fire uses **Ember Runes** and deals **Fire** damage.

Identity:

- high direct Power;
- normal Accuracy;
- slightly slower cast;
- Burn.

Burn:
- derives from final direct hit;
- lasts 6s;
- cannot Crit;
- refreshes rather than infinitely stacking baseline.

---

# 11. WATER SPELLS

Water uses **Frost Runes** but deals **Water** damage.

Identity:

- moderate Power;
- good Accuracy;
- normal cast;
- Chill.

Chill:
- increases enemy Action Time;
- lasts 4s;
- refreshes;
- strongest active Chill wins.

---

# 12. EARTH SPELLS

Earth uses **Stone Runes** and deals **Earth** damage.

Identity:
- highest direct Base Power;
- lowest Accuracy;
- slowest cast;
- innate Earth Penetration.

---

# 13. NO BASELINE ELEMENTAL REACTION SYSTEM

Do not automatically create:
- Steam;
- Lava;
- Frozen;
- Shock combos.

Unique future spells may define specific interactions.

---

# 14. SPELL AUGMENTS

One optional Augment may be active:

- None
- Spirit Infusion
- Arcane Overcast

Only one at a time.

This gives Spirit and Arcane Runes direct Combat demand without creating extra damage types.

---

# 15. AUGMENT PROGRESSION

| Magic Lvl | Augment Upgrade | Extra Rune Cost | Effect |
|---|---|---|---|
| 6 | Spirit Infusion I | +1 matching-grade Spirit Rune | Heal 3% of final direct spell damage; cap 1% Max HP per cast |
| 8 | Arcane Overcast I | +1 matching-grade Arcane Rune | +15% direct spell damage; +0.15s Cast Interval |
| 26 | Spirit Infusion II | +1 Spirit Rune | Heal 4% of final direct spell damage; same cap |
| 28 | Arcane Overcast II | +1 Arcane Rune | +18% direct spell damage; +0.15s Cast Interval |
| 46 | Spirit Infusion III | +1 Spirit Rune | Heal 5% of final direct spell damage; same cap |
| 48 | Arcane Overcast III | +1 Arcane Rune | +21% direct spell damage; +0.15s Cast Interval |
| 66 | Spirit Infusion IV | +1 Spirit Rune | Heal 6% of final direct spell damage; same cap |
| 68 | Arcane Overcast IV | +1 Arcane Rune | +24% direct spell damage; +0.15s Cast Interval |
| 86 | Spirit Infusion V | +1 Spirit Rune | Heal 7% of final direct spell damage; same cap |
| 88 | Arcane Overcast V | +1 Arcane Rune | +27% direct spell damage; +0.15s Cast Interval |

---

# 16. SPIRIT INFUSION

Adds **1 matching-grade Spirit Rune** per normal Primary Spell cast.

Effect:
- heals a small percentage of final direct spell damage;
- cap = 1% Max HP per cast.

It does not replace Food.

---

# 17. ARCANE OVERCAST

Adds **1 matching-grade Arcane Rune** per normal Primary Spell cast.

Effect:
- increases direct spell damage;
- increases Cast Interval by +0.15s.

It is a power-for-supply trade.

---

# 18. AUGMENT FAILURE

If the selected Augment Rune is unavailable, baseline preset behavior is:

**Stop Combat**

Optional preset behavior later:

**Disable Augment and Continue**

Default remains safe/explicit.

---

# 19. MAGIC WEAPON REQUIREMENT

Magic requires a compatible Magic weapon.

Baseline:
- Apprentice Wand
- Wand
- Staff
- future unique Magic weapons.

No bare-handed casting baseline.

---

# 20. T0 STARTER MAGIC

The first crafted T1 Wand arrives after Magic Level 1.

Therefore tutorial grants:

| Starter Item | Source | Purpose |
|---|---|---|
| Apprentice Wand | Magic tutorial / first Magic unlock | T0 1H Magic weapon; 0% Spell Damage; no Rune Preservation |
| 20 Minor Ember Runes | Tutorial grant | Start Fire immediately |
| 20 Minor Frost Runes | Tutorial grant | Start Water after Magic 2 |
| 20 Minor Storm Runes | Tutorial grant | Start Air after Magic 3 |
| 20 Minor Stone Runes | Tutorial grant | Start Earth after Magic 4 |
| 10 Minor Spirit Runes | Tutorial / Runecrafting bridge | Allows Spirit Infusion experimentation |
| 10 Minor Arcane Runes | Tutorial / Runecrafting bridge | Allows Arcane Overcast experimentation after Magic 8 |

`Apprentice Wand` must be added to Item/Gear Registry.

---

# 21. WAND IDENTITY

Wand:
- 1H;
- faster;
- lower Spell Damage than Staff;
- allows Magic Ward;
- small Crit support.

Wands are not element-locked unless a unique item explicitly is.

---

# 22. STAFF IDENTITY

Staff:
- 2H;
- slower;
- higher Spell Damage;
- better Rune Preservation;
- elemental Penetration;
- no Ward.

---

# 23. WAND SPECIAL — ELEMENTAL SURGE

Uses selected spell's damage type.

Cost:
- Stamina;
- normal spell Rune cost;
- +1 matching primary Rune.

Does not inherit Spirit/Arcane Augment baseline.

---

# 24. STAFF SPECIAL — GRAND CAST

Uses selected spell's damage type.

Cost:
- Stamina;
- normal spell Rune cost;
- +1 Arcane Rune.

Does not inherit Primary Spell Augment baseline.

---

# 25. MAGIC CRITICAL HITS

Direct Magic spell hits can Crit.

Burn cannot Crit.

Chill does not scale with Crit.

Spirit Infusion healing uses final direct damage but remains capped.

---

# 26. MAGIC DAMAGE FORMULA

**Magic Max Hit = Spell Base Power × (1 + Magic / 100) × (1 + Weapon Spell Damage %) × other modifiers**

Spell supplies Base Power.

Weapon supplies Spell Damage.

---

# 27. SPELL ACCURACY

Spell Accuracy modifier applies to final Magic Accuracy.

Then compare against target Magic Evasion using Combat Core formula.

---

# 28. CAST INTERVAL

**Final cast interval = Weapon base cast + Spell modifier + Augment modifier + other modifiers**

Then apply global interval floor.

---

# 29. ELEMENTAL RESISTANCE

After hit/Crit, target exact elemental Resistance applies:
- Air → Air Resistance
- Fire → Fire Resistance
- Water → Water Resistance
- Earth → Earth Resistance

Enemy broad Style never replaces the exact value.

---

# 30. SPELL SELECTION AGAINST TARGET

The Bestiary/Combat UI must show exact elemental Resistances.

The player should pick an element because of:
- resistance;
- status;
- tempo;
- Rune supply.

Not because one color has permanently highest DPS.

---

# 31. SPELL UNLOCKS ARE SKILL-BASED

Baseline spellbook unlocks through **Magic Level**.

Wizard's Guild does not gate the baseline T1–T10 spellbook.

Guild content may later add unique spells.

---

# 32. SPELLS ARE NOT CRAFTED ITEMS

No scroll-item ladder for baseline spells.

Magic Level unlocks knowledge.

Runecrafting supplies consumable Runes.

---

# 33. NO SPELL DURABILITY / CHARGES

A learned spell is permanent.

Rune supply limits use.

---

# 34. COMBAT PRESET DATA

Preset stores:
- Primary Spell;
- Augment;
- higher-grade substitution;
- stop-on-Rune-empty behavior;
- Magic weapon;
- Ward if compatible;
- Food;
- Elixir;
- Devotions.

---

# 35. RUNE SUPPLY ANALYTICS

Show:
- primary Rune stock;
- cost/cast;
- Augment Rune stock;
- Rune Preservation;
- casts/hour;
- Runes/hour;
- expected supply hours.

---

# 36. OFFLINE MAGIC

Offline uses identical:
- spell;
- Augment;
- Rune use;
- preservation;
- Burn;
- Chill;
- Crit;
- resistance;
- Specials.

No free offline casting.

---

# 37. STATUS REFRESH

## Burn
Newest Burn refreshes/replaces existing player Burn baseline.

## Chill
Equal/stronger Chill refreshes; weaker Chill does not overwrite stronger Chill.

---

# 38. BOSS STATUS RULES

Boss may separately define:
- Burn Resistance;
- Chill duration reduction;
- status immunity.

Elemental resistance and status resistance are different systems.

---

# 39. SPELLBOOK UI

| Panel | Shows |
|---|---|
| Element Tabs | Air / Fire / Water / Earth |
| Spell Card | Name, level, Base Power, Rune cost, Accuracy/Cast modifiers, effect |
| Selected Spell | Current primary spell and element icon |
| Augment | None / Spirit Infusion / Arcane Overcast |
| Rune Supply | Current Rune stock, cost/cast, expected casts remaining, Runes/hour |
| Target Interaction | Enemy matching Resistance, final effective Resistance, expected hit chance |
| Weapon Interaction | Wand/Staff Spell Damage, cast modifier, Rune Preservation, Special |

---

# 40. SPELL CARD TOOLTIP

Example:

**Astral Inferno**

Magic 91  
Fire  
Base Power: 117  
Accuracy: ±0%  
Cast: +0.05s  
Cost: 1 Astral Ember Rune  
Burn: 26% of final direct hit over 6s

Also show current target Fire Resistance.

---

# 41. ELEMENT FILTERS

Top tabs:
- Air
- Fire
- Water
- Earth

Filters:
- Unlocked
- Locked
- Current Tier
- All

---

# 42. LOCKED SPELL CARDS

Show:
- name;
- Magic level;
- Rune grade;
- short identity.

Future progression should remain visible.

---

# 43. TARGET COMPARISON

Hover/inspect should show:
- Hit Chance;
- Avg Hit;
- target matching Resistance;
- final Cast Interval;
- status value;
- Runes/hour.

---

# 44. AUGMENT UI

Selector:
- None
- Spirit Infusion
- Arcane Overcast

Show exact current extra Rune burn and effect.

---

# 45. CONTENT PHILOSOPHY

Baseline launch uses:

**40 elemental spells + 2 evolving Augments**

rather than hundreds of near-identical spell names.

Future additions should be genuinely mechanically distinct.

---

# 46. FUTURE UNIQUE SPELLS

Possible:
- multi-hit;
- hybrid damage;
- execute;
- barrier;
- delayed burst;
- chain spell;
- two-family Rune spell;
- Guild spell;
- boss spell.

Each still defines explicit cost/type/timing.

---

# 47. HYBRID SPELL SUPPORT

Future engine may support `damageComponents[]`.

Baseline spellbook does not use hybrid damage.

---

# 48. WIZARD'S GUILD INTEGRATION

Wizard's Guild may later own:
- unique spell challenges;
- alternate Augments;
- rare spells;
- Magic contracts;
- rank rewards.

It does not replace the baseline spellbook.

---

# 49. RUNECRAFTING INTEGRATION

Mapping:
- Fire → Ember
- Water → Frost
- Air → Storm
- Earth → Stone
- Spirit Infusion → Spirit
- Arcane Overcast → Arcane

All six Rune families therefore have Combat relevance.

---

# 50. MAGIC PROGRESSION LOOP

Train Magic  
→ unlock stronger elemental spell  
→ craft higher-grade Runes  
→ choose enemy weakness  
→ choose Wand/Staff  
→ choose Augment  
→ sustain Rune supply  
→ progress.

---

# 51. REQUIRED BACK-PATCHES

## Item Registry
Add Apprentice Wand.

## Combat Equipment
Add T0 Apprentice Wand.

## Runecrafting
Reference Spirit Infusion and Arcane Overcast as baseline Combat consumers.

## Combat Core
Reference this file as Spellbook source-of-truth.

---

# 52. DEVTOOLS

| Control | Use |
|---|---|
| Set Magic Level | Test unlocks T1–T10 |
| Unlock all spells | UI/content verification |
| Set Rune stock | Supply testing |
| Set Rune Preservation | Consumption testing |
| Select spell | Direct target test |
| Select augment | Spirit/Arcane cost/effect test |
| Set enemy elemental resistances | Air/Fire/Water/Earth interaction |
| Force Burn/Chill | Status-duration validation |
| Force Wand/Staff | Weapon-spell integration |

---

# 53. LOCKED BASELINE

1. Magic 1–100.
2. Four baseline damage types: Air/Fire/Water/Earth.
3. No Arcane damage type baseline.
4. No Spirit damage type baseline.
5. Fire → Ember Rune.
6. Water → Frost Rune.
7. Air → Storm Rune.
8. Earth → Stone Rune.
9. One core spell per element per tier.
10. Core spell cost = one matching-grade Rune.
11. Air = speed/accuracy.
12. Fire = direct damage + Burn.
13. Water = Chill/control.
14. Earth = heavy damage + Penetration.
15. One Primary Spell.
16. One optional Augment.
17. Spirit Infusion = sustain.
18. Arcane Overcast = power.
19. Wand/Staff Specials have separate costs.
20. Direct hits can Crit.
21. Burn cannot Crit.
22. No Mana.
23. Skill unlocks baseline spells.
24. Wizard's Guild does not gate them.
25. Apprentice Wand closes starter gap.
26. Rune substitution is optional and OFF by default.
27. Enemy exact elemental resistances matter.
28. Unique spells can expand later.
29. Deep balance waits until playable.
30. This document is implementation-ready content structure.

---

# 54. NEXT STEP

After implementation, tune:
- Base Power;
- Burn;
- Chill;
- Penetration;
- Rune burn;
- Augments;
- Cast Interval.

For now the target is:

**complete, coherent Magic content ready to build.**
