# 18 — COMBAT CORE

**Status:** Complete Design Draft  
**Version:** 1.1 — Flexible Weapons / Auto Eat / Enemy Sequence Rework  
**Baseline inspiration:** Melvor-like idle combat structure, expanded for MX-Idle  
**Purpose:** Canonical definition of Combat Skills, styles, typed damage/resistances, Accuracy/Evasion, Critical Hits, flexible weapon identities, weapon Stances, Stamina Specials, Food/Satiety/Overeat, configurable Auto Eat, Devotion, Ammo/Runes, equipment, deterministic enemy action sequences, areas, dungeons, bosses, death, offline combat and analytics.

---

## 1. Combat identity

MX-Idle Combat is a preparation-first idle RPG system. The player wins primarily through equipment, damage-type knowledge, resistance planning, Food quality, Satiety management, Ammo/Runes, Devotion, Elixirs and target choice. Once combat begins, Basic Attacks are automatic. Weapon Specials and unique weapon mechanics add identity without turning the game into an action-RPG rotation.

**Core loop:** Prepare → choose target → start combat → automatic actions resolve → supplies are consumed → target dies/respawns → repeat until stop/death/completion.

## 2. Combat Skills

| Skill | Range | Role | Pace |
|---|---|---|---|
| Attack | 1–100 | Melee Accuracy + Melee Damage + melee weapon requirements | Normal |
| Ranged | 1–100 | Ranged Accuracy + Ranged Damage + ranged equipment requirements | Normal |
| Magic | 1–100 | Magic Accuracy + Magic Damage + spell/equipment requirements | Normal |
| Defence | 1–100 | Melee/Ranged/Magic Evasion + armor requirements | Slow |
| Devotion | 1–100 | Prayer-like support system, Devotion unlocks/efficiency | Slow |
| Hitpoints | 1–100 | Maximum HP | Slow |

There is **no separate Strength skill**. Attack intentionally combines classic Attack + Strength into one Melee offensive progression so Melee does not require two offensive skills while Ranged and Magic use one each.

## 3. Hitpoints

Baseline Max HP formula: **Max HP = 90 + Hitpoints Level × 10 + flat bonuses**. Hitpoints 1 = 100 HP; Hitpoints 100 = 1,090 HP before gear/account modifiers. HP persists between ordinary kills and target switches. Combat start and enemy respawn do not heal the player.

## 4. Style triangle

| Style | Strong against | Weak against | Neutral |
|---|---|---|---|
| Melee | Ranged | Magic | Melee |
| Ranged | Magic | Melee | Ranged |
| Magic | Melee | Ranged | Magic |

Recommended broad matchup anchor:

| Matchup | Final damage | Effective resistance vs enemy style |
|---|---|---|
| Strong | +10% | +5 percentage points |
| Neutral | 0% | 0 pp |
| Weak | -10% | -5 pp |

The triangle remains deliberately modest because MX-Idle also has detailed typed resistances. A good style can still be a poor choice if the actual damage type is heavily resisted.

## 5. Damage types

| Style | Damage type | Identity |
|---|---|---|
| Melee | Slash | Balanced physical damage; bleed/cleave identity |
| Melee | Stab | Precision; accuracy/crit-friendly |
| Melee | Crush | Heavy impact; resistance-break/control identity |
| Ranged | Pierce | Arrow-style sustained precision |
| Ranged | Puncture | Bolt-style slower high-penetration damage |
| Magic | Air | Speed/accuracy/control |
| Magic | Fire | High damage/Burn |
| Magic | Water | Sustain/Chill/control |
| Magic | Earth | Heavy/control/resistance-break |

Every baseline direct hit deals exactly **one** damage type. The data model should support future `damageComponents[]` for hybrid attacks, but launch Combat should not use hybrid damage unless a specific item/boss deliberately requires it.

## 6. Armor archetypes and resistances

| Armor archetype | Slash/Stab/Crush | Pierce/Puncture | Air/Fire/Water/Earth | Intent |
|---|---|---|---|---|
| Heavy / Melee | High | Medium | Low / may be negative | Strong physical profile, weak to Magic |
| Ranged | Low | High | Medium–High | Weak to Melee, strong into Magic matchup |
| Magic / Ward | Medium | Low / may be negative | High | Weak to Ranged, strong elemental/ward profile |

Actual items store their own resistance values; these are archetype directions, not fixed templates. Mixed armor builds are allowed.

Normal resistance range: **-25% vulnerability floor to +75% resistance cap**. Positive resistance reduces matching damage; negative resistance increases it. Penetration subtracts percentage points before the final clamp.

**Typed Damage = Pre-Resistance Damage × (1 - Effective Resistance)**.

### Enemy Resistance Contract

**Every single combat enemy in the game uses the same nine-resistance model as the player.**

Every monster, elite and boss must explicitly store:

- Slash Resistance
- Stab Resistance
- Crush Resistance
- Pierce Resistance
- Puncture Resistance
- Air Resistance
- Fire Resistance
- Water Resistance
- Earth Resistance

Enemy Combat Style may provide an archetype direction, but it does **not** replace these values.

Example Melee-oriented monster profile:

| Damage type group | Example profile |
|---|---|
| Slash / Stab / Crush | Good resistance |
| Pierce / Puncture | Very high resistance |
| Air / Fire / Water / Earth | Low resistance / one or more vulnerabilities |

That creates a readable version of the broad style triangle:

- Melee enemy can resist Melee reasonably well;
- strongly punish Ranged;
- remain vulnerable to Magic.

Another Melee monster can still have a different profile. For example, a stone creature may be weak to Crush while heavily resisting Slash.

The final nine values are **authored per enemy**, not generated blindly from the Style label.

### Resistance Weakness UI

Enemy weakness/resistance information must be visible in Combat inspection / Bestiary.

The player should be able to look at an enemy and immediately understand:

- which broad style is favored;
- which exact damage types are resisted;
- which exact damage types are weak;
- the final percentage for all nine resistances.

Do not hide the core resistance puzzle behind vague text such as `Weak to Magic` when the actual Fire/Water/Earth/Air values are different.


## 7. Core combat stats

- **Max Hitpoints**

- **Attack Interval**

- **Special Action Time**

- **Accuracy Rating**

- **Melee Evasion**

- **Ranged Evasion**

- **Magic Evasion**

- **Minimum Hit**

- **Maximum Hit**

- **Critical Rate**

- **Critical Damage**

- **Slash/Stab/Crush Resistance**

- **Pierce/Puncture Resistance**

- **Air/Fire/Water/Earth Resistance**

- **Resistance Penetration**

- **Max Stamina**

- **Stamina Regeneration**

- **Satiety**

- **Devotion Points**

- **Rune Preservation**

- **Ammo Preservation**

- **Food Healing**

- **Status Resistance**

## 8. Accuracy and Evasion

There are three Evasion stats. Melee damage types test against Melee Evasion; Pierce/Puncture test against Ranged Evasion; Air/Fire/Water/Earth test against Magic Evasion. Damage type affects mitigation after the hit roll, not the Evasion category.

Baseline hit formula:

- If Accuracy < Evasion: **Hit Chance = 0.5 × Accuracy / Evasion**

- If Accuracy ≥ Evasion: **Hit Chance = 1 - 0.5 × Evasion / Accuracy**

Clamp ordinary hit chance to **5%–95%**. Equal ratings produce 50% hit chance.

## 9. Damage roll

Every direct attack has Minimum Hit and Maximum Hit. Default Basic Attack Minimum Hit = **20% of Maximum Hit** unless weapon/spell data says otherwise. Roll uniformly inside that interval.

Recommended offensive scaling anchors:

- Melee Max Hit = Weapon Base Power × (1 + Attack Level / 100) × modifiers

- Ranged Max Hit = Weapon/Ammo Base Power × (1 + Ranged Level / 100) × modifiers

- Magic Max Hit = Spell Base Power × (1 + Magic Level / 100) × modifiers

Final coefficients are equipment-balance data, but the relationship should remain stable.

## 10. Critical Hits

| Rule | Baseline |
|---|---|
| Base Critical Rate | 5% |
| Base Critical Damage | 150% |
| Crit Rate hard cap | 75% |
| DoT ticks crit? | No |
| Normal enemy attacks crit? | No baseline; explicit Specials may create burst |

Recommended damage order: Hit roll → Base damage roll → Crit → style modifier → typed resistance/penetration → final encounter modifiers → round.

Crit progression should mainly come from equipment, Jewelcrafting, Devotion, weapon identity and Specials rather than directly from offensive skill level.

## 11. Combat XP

| Skill | Baseline XP rule |
|---|---|
| Attack | 0.40 XP per point of final Melee damage |
| Ranged | 0.40 XP per point of final Ranged damage |
| Magic | 0.40 XP per point of final Magic damage |
| Hitpoints | 0.10 XP per point of final damage dealt by any style |
| Defence — hit | 0.10 XP per point of final damage dealt by any style |
| Defence — miss | 0xp |
| Devotion | Coefficient × Devotion Points actually spent in valid combat |

Attack/Ranged/Magic are normal-speed active combat skills. Defence, Devotion and Hitpoints are intentionally slow universal progression skills.

## 12. Combat equipment slots

| Slot | Rule |
|---|---|
| Weapon | Primary weapon |
| Off-hand | Shield/Defender/off-hand blade, ranged off-hand, or Ward/Orb/Focus/Tome |
| Head | Combat head gear |
| Armor | Unified torso + legs combat armor slot |
| Hands | Combat gloves/gauntlets |
| Feet | Combat boots |
| Ring | Combat ring |
| Necklace | Combat necklace |
| Ammo | Arrow/Bolt supply when required |
| Spell/Rune Setup | Selected spell + Rune costs |
| Food 1/2/3 | Priority Food slots |
| Combat Elixir | One active Alchemy Combat Elixir |
| Remedy | Reactive Alchemy remedy policy |
| Devotion 1/2 | Two active Devotions |

Two-handed weapons disable Off-hand. Combat Armor deliberately combines Body+Legs into one slot. Profession Tool slots remain separate.

## 13. Off-hand families

| Style | Off-hand families | Role |
|---|---|---|
| Melee | Shield, Defender, off-hand sword/dagger | Defence or hybrid offense |
| Ranged | Quiver/offensive focus, Ranged Guard/defensive off-hand | Mostly for 1H ranged weapons |
| Magic | Ward, Orb, Focus, Tome | Resistance, spell power, Rune economy, utility |

Off-hand swords/daggers do **not** create a second independent attack timer baseline; they grant stats/passives and may modify the equipped weapon's Special.

## 14. Common weapon archetypes — directional examples, not a closed taxonomy

The following table is a **design direction and reusable template library**, not a rule that every weapon in the game must belong to one of these families.

| Common archetype | Style | Hands | Default type | Alternate stance | Typical identity |
|---|---|---|---|---|---|
| Sword | Melee | 1H | Slash | Stab | Flexible |
| Axe | Melee | 1H | Slash | — | High damage/execute |
| Mace | Melee | 1H | Crush | — | Resistance break/control |
| Dagger | Melee | 1H | Stab | Slash | Fast/crit |
| Spear | Melee | 2H | Stab | — | Penetration |
| Greatsword | Melee | 2H | Slash | Stab | Heavy flexible |
| Greataxe | Melee | 2H | Slash | — | Maximum burst/execute |
| Warhammer | Melee | 2H | Crush | — | Heavy resistance break |
| Shortbow | Ranged | 2H | Pierce | — | Fast sustained arrows |
| Longbow | Ranged | 2H | Pierce | — | Slower accurate power shots |
| Light Crossbow | Ranged | 1H | Puncture | — | Fast one-hand bolt precision |
| Heavy Crossbow | Ranged | 2H | Puncture | — | Slow high-penetration bolts |
| Wand | Magic | 1H | Selected spell element | — | Fast casting + off-hand access |
| Staff | Magic | 2H | Selected spell element | — | High power / Rune efficiency |

A weapon may:

- use one of these archetypes as a reusable template;
- override part or all of the archetype defaults;
- have **no family/archetype at all** and define its own complete combat profile.

Do **not** create a new permanent weapon family merely because one unique item behaves differently.

Examples of valid standalone weapons:

- **Whip**
- **Toxic Blowpipe**
- future boss weapons
- relic weapons
- unusual hybrid/utility weapons

A standalone weapon can define its own:

- style;
- one-handed/two-handed rule;
- damage type;
- Ammo/resource behavior;
- Attack Interval;
- Accuracy/Max Hit profile;
- Stance(s), if any;
- Special;
- passive effects.

The data model should therefore treat `weaponArchetype` / `weaponFamily` as **optional metadata**, never as a required gameplay identity.

## 15. Weapon Stances

A weapon may expose zero, one or multiple Stances. Stance can change active damage type and small Accuracy/Max Hit/Evasion/Penetration values. Example Sword: Slash stance = harder balanced Slash; Stab stance = higher Accuracy, Stab damage. A unique weapon may define completely different Stances, or none at all.

Changing Stance in combat does not interrupt the current action; the new Stance applies when the next action starts. Presets remember Stance.

## 16. Weapon Specials

The baseline rule is:

> **A weapon may have one primary Special Attack.**

Common archetypes can provide a default Special template, but an individual weapon may override it with its own Special. Unique standalone weapons do not need a new family in order to have a unique Special.

No multi-button rotation or giant skill bar. Weapon identity comes from some combination of:

- Basic Attack profile;
- damage type;
- Stance;
- one Special;
- passive effects;
- resource/Ammo behavior.

| Common archetype | Example Special | Stamina | Identity |
|---|---|---|---|
| Sword | Precision Lunge | 35 | High-accuracy Stab hit |
| Axe | Executioner's Chop | 50 | Heavy Slash; bonus vs low HP |
| Mace | Concussive Blow | 45 | Crush + physical resistance break |
| Dagger | Twin Fang | 30 | Two crit-friendly hits |
| Spear | Impale | 40 | Stab + penetration |
| Greatsword | Heavy Cleave | 55 | Large direct hit |
| Greataxe | Reaper Swing | 60 | Very large execute-style Slash |
| Warhammer | Shatter | 55 | Crush + strong resistance debuff |
| Shortbow | Rapid Volley | 35 | Several smaller Pierce hits; multi-Arrow |
| Longbow | Power Shot | 45 | Large accurate Pierce hit |
| Light Crossbow | Double Tap | 40 | Two Puncture hits; multi-Bolt |
| Heavy Crossbow | Penetrating Bolt | 55 | Very high Puncture + penetration |
| Wand | Elemental Surge | 40 | Amplified selected spell element |
| Staff | Grand Cast | 55 | Large selected-element cast; higher Rune cost |

These are examples, not a complete list of all future weapons.

Exact multipliers/status durations are later equipment-balance data.

## 17. Stamina

| Rule | Baseline |
|---|---|
| Maximum Stamina | 100 |
| Regeneration | 1 Stamina/sec |
| Regens during Basic Attack | Yes |
| Regens during Overeat Stun | Yes |
| Regens while dead | No |
| Special interrupts current attack? | No |
| Queued Specials | Maximum 1 |
| Special cost paid | When Special becomes Current Action |
| No Stamina | Continue Basic Attacks |
| Mana | None |

At 1 Stamina/sec, a 40-Stamina Special naturally fires about every 40 seconds before modifiers. Stamina is a pacing resource, not a consumable inventory tax.

## 18. Special queue

Player has a Current Action and at most one queued Special. If a Special is requested during a Basic Attack, the Basic finishes normally, then the Special becomes Current Action. After the Special resolves, the Basic loop resumes. The Special never cancels the current attack.

Special control modes: **Auto / Manual / Off**. Auto queues when Stamina is sufficient; Manual queues on button press; Off uses only Basics.

## 19. Independent action timers

Player and enemy action timers are independent. Fast weapons may resolve multiple attacks during one slow enemy action. Slow Heavy Crossbows may allow the enemy to attack several times. Combat is not alternate-turn. Recommended global direct-action floor: **0.75s**.

## 20. Magic has no Mana

Magic uses **Runes + attack time + Stamina Specials**. Basic Magic does not consume Stamina; weapon Specials do. There is no Mana bar baseline.

## 21. Magic damage elements

| Element | Damage type | Identity | Primary Rune relationship |
|---|---|---|---|
| Air | Air | Fast/accurate/control | Storm + support Runes |
| Fire | Fire | High damage/Burn | Ember + support Runes |
| Water | Water | Sustain/Chill/control | Frost + support Runes |
| Earth | Earth | Heavy/control/resistance break | Stone + support Runes |

Existing Runecrafting families remain functional cost components:

- Ember → Fire core costs
- Frost → Water core costs
- Storm → Air core costs
- Stone → Earth core costs
- Spirit → support/utility costs
- Arcane → advanced support/catalyst costs; **not an Arcane baseline damage type**

## 22. Magic Basic Attack

Player selects one primary spell. Spell data stores Magic requirement, Air/Fire/Water/Earth type, Base Power, Base Accuracy, interval modifier, Rune Costs and optional status. Each cast checks Runes, rolls Rune Preservation, then resolves Accuracy/damage/status. If required Runes are unavailable, free casting is never allowed.

## 23. Ranged Ammo

Shortbow/Longbow use **Arrows**. Light/Heavy Crossbow use **Bolts**. Normal Basic Attack consumes one Ammo unless preservation succeeds. Specials define their own Ammo count. Ammo/Rune Preservation hard cap recommendation: **80%** so the supply economy cannot be completely deleted.

## 24. Food system

Food is the primary HP sustain system. Combat loadout has **3 priority Food slots**. Slot 1 is used first; when empty, slot 2, then slot 3.

| Rule | Baseline |
|---|---|
| Normal Eat cooldown | 1.0s |
| Auto Eat availability | Available immediately; no unlock tier |
| Auto Eat minimum interval | Configurable 1–30s between automatic Food uses |
| Eating interrupts attack? | yes |
| Healing above Max HP | Capped; excess heal wasted |
| Satiety gain on overheal | Full listed Satiety still gained |
| Satiety range | 0–100% |
| Satiety decay | 1 percentage point/sec |
| Decay out of combat | Yes |
| Decay during Stun/Food Lock | Yes |

## 25. Satiety

Every Food has a fixed **Heal** and **Satiety** value. Higher-tier Food should generally heal more for similar Satiety within its category. Example: low-tier meal Heal 120 / Satiety 20; high-tier meal Heal 500 / Satiety 20. This makes Cooking progression directly improve long-idle safety.

## 26. Overeat mechanic

| Event | Rule |
|---|---|
| Trigger | Food use raises Satiety to 100% |
| Stored value | Clamp to 100% |
| Immediate consequence | 5s Overeat Stun |
| During Stun | Player cannot attack/cast/use Special; enemy continues |
| Food during Stun | Blocked |
| After Stun | Additional 20s Food Lock |
| Total from trigger until Food usable | 25s |
| Stamina regen | Continues |
| Satiety decay | Continues at 1%/sec |
| Offline | Exact same rules; can cause death |

Overeat is intended to make weak Food spam dangerous. The Food may save the immediate hit but create a 25-second sustain gap that kills the player.

## 27. Auto Eat — available from the start

Auto Eat is **not an unlock tier system**.

It is available immediately once Combat/Food is available.

The player configures two values:

| Setting | Baseline |
|---|---|
| Auto Eat enabled | On / Off |
| HP threshold | Player chooses 1–99% Max HP |
| Auto Eat minimum interval | Player chooses 1–30 seconds between automatic Food uses |
| Normal manual Eat cooldown | Still uses the normal 1.0s Food cooldown |
| Food priority | Food Slot 1 → 2 → 3 |

The HP threshold answers:

> **At what HP percentage am I willing to eat?**

The Auto Eat minimum interval answers:

> **How aggressively am I willing to repeat automatic eating?**

Auto Eat uses exactly the same Food action as manual eating:

- eating interrupts the attack according to the normal Food rule;
- healing can overheal/waste value;
- full listed Satiety is gained;
- Overeat can trigger;
- Food Lock is respected.

The configurable interval exists primarily as a Satiety-safety tool.

Example:

- Auto Eat threshold: 60% HP
- Auto Eat minimum interval: 6 seconds

If one Food does not heal the player above 60%, Auto Eat will **not** immediately spam another Food after only the global 1s Eat cooldown. It waits until at least 6 seconds have elapsed since the previous automatic eat.

Manual eating remains possible whenever the normal Food rules allow it; manual eating does not bypass Satiety or Food Lock.

## 28. Auto Eat tradeoff

The player now balances **three** variables:

1. Food Heal/Satiety efficiency;
2. Auto Eat HP threshold;
3. Auto Eat minimum interval.

Higher HP threshold:

- reacts earlier;
- protects against burst;
- can consume Food more often.

Shorter Auto Eat interval:

- heals aggressively;
- improves immediate survival;
- increases the chance of repeated low-tier Food pushing Satiety to 100%.

Longer Auto Eat interval:

- deliberately limits eating frequency;
- helps prevent Overeat;
- increases the chance that incoming damage kills the player before the next automatic Food use.

High-tier Food remains the cleanest solution because it restores more HP per Satiety and often needs fewer eating events.

## 29. Satiety analytics

- Satiety loss/min = **60pp/min**

- Expected gain/min = **eats/min × Food Satiety**

- Net Satiety/min = **gain - 60**

- Positive net means the setup trends toward eventual Overeat.

- Negative net is sustainable on average, though burst eating can still trigger Overeat.

Combat UI should show Low / Moderate / High / Critical Overeat Risk and projected time to 100 when net Satiety is positive.

## 30. Devotion

Devotion is MX-Idle's Prayer-like support Skill. It is a normal Combat Skill, not a Guild.

| Rule | Baseline |
|---|---|
| Skill cap | 100 |
| Leveling | Slow |
| Active slots | 2 |
| Resource | Devotion Points |
| Passive point regen | None baseline |
| Point source | Combat drops with Offering Value converted through Devotion/Shrine interface |
| XP source | Devotion Points actually spent in valid combat |
| No points | Affected Devotion deactivates |
| Offline | Same consumption/XP rules |

Devotion categories: Offensive, Defensive, Sustain, Style-Specific and Utility. Effects may include damage, Accuracy, Crit, Evasion, typed resistance, Food healing, Satiety efficiency, Ammo/Rune preservation and Stamina support. No Devotion should completely disable Satiety or reduce Special cost to zero.

## 31. Devotion resource loop

1. Combat drops selected items with an Offering Value.
2. Player Offers them at Devotion/Shrine.
3. They convert into banked Devotion Points.
4. Active Devotions spend Points on their trigger.
5. Points spent grant slow Devotion XP.
Exact Offering items belong to loot/content design, not this Core.

## 32. Status framework

| Status | Core effect |
|---|---|
| Stun | Pauses affected combatant actions |
| Bleed | Physical periodic damage; no crit |
| Burn | Fire periodic damage; no crit |
| Poison | Status periodic damage |
| Chill | Longer Attack Interval / slower actions |
| Resistance Break | Reduces specified typed resistance |
| Accuracy Down | Reduces Accuracy |
| Evasion Down | Reduces Evasion |
| Silence | Blocks Magic where explicitly used |
| Food Lock | Blocks Food use; Overeat uses this |

Normal Stun does not automatically block Food. Overeat specifically combines Stun with a Food Lock. Bosses can have reduced duration or immunity to hard control.

## 33. Enemy action engine — deterministic sequence combat

Player and enemies share the same conceptual Current Action → timer → resolution pipeline. There is no separate reflex/dodge engine.

**Every enemy uses a deterministic repeating Action Sequence.**

Examples:

Simple enemy:

**Basic → Basic → Basic → repeat**

Monster with one Special:

**Basic → Basic → Crushing Slam → repeat**

More complex enemy:

**Basic → Quick Strike → Basic → Crushing Slam → Basic → repeat**

Boss:

**Basic → Basic → Flame Wave → Basic → Crushing Slam → Guard Break → repeat**

The sequence makes enemy behavior predictable and learnable.

Counterplay is:

- prepare the correct resistances;
- understand when large actions occur;
- sustain through the sequence;
- select the correct Food/Auto Eat settings;
- use the right weapon damage type.

No weighted/random action selection is used as the baseline enemy-AI model.

## 34. Monster data contract

Every monster must define:

- Max HP
- Combat Style
- Basic Damage Type
- Attack Interval / per-action Action Time where an action overrides it
- Accuracy Rating
- Minimum/Maximum Hit
- Melee/Ranged/Magic Evasion
- **all 9 explicit typed resistances**
- optional Penetration
- Basic Attack definition
- 0+ Special Action definitions
- **Action Sequence**
- Sequence position/state
- status resistance/immunity
- Drops
- XP/difficulty metadata
- Boss/phase data when relevant

Monster Combat Style never replaces the nine resistance values.

## 35. Enemy sequences and Specials

Normal farming monsters should usually remain simple:

- Basic-only loop;
- or a short 3–5 action sequence with one Special.

Bosses can use longer sequences and multiple Specials.

The baseline rule is always:

> **the next enemy action is determined by sequence position, not a random weighted roll.**

### Sequence reset

Normal monster:

- new spawn begins at Sequence Step 1.

Dungeon/Boss phase:

- phase data defines whether a new phase begins at its own Step 1 or continues a specific scripted transition.

### Conditional phase changes

A boss may switch to another deterministic sequence when a condition is met.

Example:

Phase 1 (>50% HP):

**Basic → Basic → Flame Wave → repeat**

Phase 2 (≤50% HP):

**Crushing Slam → Basic → Flame Wave → Guard Break → repeat**

The phase transition condition may be deterministic; action selection inside the phase remains sequence-based.

### Sequence visibility

Because prediction is part of combat preparation:

Bestiary/Combat inspection should show the enemy's known sequence.

Combat UI should show at least:

- Current Action;
- **Next Action**.

For bosses or fully discovered enemies, UI may show the next several sequence steps.

No manual dodge is required; prediction informs build/sustain planning.

## 36. Enemy Criticals

Normal enemy Basics do not randomly crit baseline. Idle survival should be analyzable. Burst comes from explicit Specials and boss patterns. A monster may have a named Critical-like Special, but it is visible data.

## 37. Content types

| Content | Structure | Result |
|---|---|---|
| Combat Area | Choose one monster; respawns indefinitely | Farm loop |
| Dungeon | Fixed ordered encounters ending in boss | Death/stop ends run |
| Boss Encounter | Explicit progression boss | Progression gate/unique reward |
| Guild Assignment | Normal Combat target referenced externally | Guild adds task/rank rewards; Combat engine unchanged |

## 38. Combat Areas

Normal Area target respawn recommendation: **3 seconds**. During respawn, Satiety decays and Stamina regenerates. No free HP refill. Loot goes directly to the central Bank.

## 39. Dungeons

Dungeon state carries player HP, Satiety, Stamina, Food, Ammo, Runes, Devotion and Elixir from encounter to encounter. No free full heal between rooms. Death ends the run. Fixed checkpoints may be added only where explicitly designed later.

## 40. Bosses

Bosses are progression gates and should emphasize typed damage, meaningful resistance profiles and known Specials. Do not create bosses that are only ordinary monsters with 20× HP.

## 41. Target switching

Switching normal target abandons the current enemy. Enemy partial HP is not saved baseline. Player HP, Satiety and Stamina persist; supplies already consumed remain consumed. This prevents target-switch healing/reset exploits.

## 42. Starting combat

Starting combat does **not** heal HP, clear Satiety, refill Stamina, restore Ammo/Runes or refill Devotion Points. Player state is persistent. Stamina may naturally regenerate while out of combat.

## 43. Combat Elixir and Remedies

Alchemy keeps one active Combat Elixir slot. Remedies are reactive and separate from the Elixir slot. Preset options: Never Auto Use / Auto Use on matching removable status / Preserve Above Reserve. Final Alchemy combat values must later be audited against this Combat Core.

## 44. Death

| Rule | Baseline |
|---|---|
| Equipment loss | None |
| XP earned before death | Kept |
| Loot earned before death | Kept |
| Consumed Food/Ammo/Runes/Devotion | Remain consumed |
| Offline time after death | No combat progress |
| Current monster/dungeon | Lost / run ends |
| Post-death HP/recovery | Balance pass; player returns out of combat |

If death occurs 2h13m into an 8h offline period, only the first 2h13m produces combat progress.

## 45. Offline Combat

Offline uses the exact same mechanics: action timers, hit chance, crit, resistances, Stamina, Specials, Satiety, Overeat, Food Lock, Ammo, Runes, Devotion, Elixir, statuses and death. Use event-based simulation rather than a simplified offline DPS equation.

Relevant events: player action, enemy action, Eat cooldown, Overeat Stun end, Food Lock end, status expiry, kill, respawn, resource exhaustion, death.

## 46. Combat analytics

| Panel | Metrics |
|---|---|
| Outgoing | Hit Chance, Avg Hit, Crit Rate, Crit Damage, Effective DPS, Special DPS |
| Incoming | Enemy Hit Chance, Avg/Max Incoming Hit, Incoming DPS, damage type |
| Resistances | All 9 final typed resistances |
| Kills | Kill time, Kills/hour, respawn downtime |
| XP | Attack/Ranged/Magic/Defence/Hitpoints/Devotion XP/h |
| Food | Food/h, Heal/use, Satiety/use, gain/min, net Satiety/min, Overeat risk |
| Supplies | Ammo/h, Runes/h, Devotion Points/h, Elixir duration, Remedy use |
| Stamina | Stamina regen/h, Specials/h, average time between Specials |
| Loot | Expected items/hour and value/hour where applicable |
| Safety | Max incoming hit, time-to-death without Food, supply duration, lethal Special warnings |

## 47. Safe-idle view

Do not reduce safety to one hidden green check. Show the components: Max Incoming Hit, HP, Auto Eat threshold, Food heal, Satiety trend, enemy Special max hit, resistances and supply hours. A summary label (Stable / Risky / Unsustainable) may sit on top.

## 48. Supply-hours panel

Show stock, consumption/hour, production/hour where worker infrastructure is linked, net/hour and hours remaining for Food, Ammo, Runes, Devotion Points and Elixirs. This is the main bridge between Combat and the profession economy.

## 49. Combat Presets

Preset stores Weapon, Off-hand, Head, Armor, Hands, Feet, Ring, Necklace, weapon Stance, Special mode, Ammo, selected Magic spell/Rune setup, Food slots 1–3, Auto Eat enabled/disabled, Auto Eat HP threshold, Auto Eat minimum interval, Combat Elixir, Remedy policy and two Devotions. Preset switching is outside active combat baseline.

## 50. Armor requirements

Attack gates Melee weapons, Ranged gates Ranged equipment, Magic gates Magic equipment/spells, Defence gates armor. Some high-tier gear may require both style skill + Defence. Hitpoints normally does not gate equipment.

## 51. Bestiary information

Monster inspection should support: Combat Style, Basic Damage Type, Attack Interval, Accuracy, Min/Max Hit, Evasions, **all 9 explicit resistances with clear weakness/strength presentation**, deterministic Action Sequence, Specials/statuses, drops, XP, expected kill time with current setup, expected Food/Ammo/Rune/Devotion usage. Exact visibility may later be discovery-gated, but once known the values should be precise rather than vague.

## 52. Damage breakdown tooltip

Example resolved hit:

Base Roll 240 → Crit ×1.85 = 444 → Style Strong ×1.10 = 488 → Stab Resistance 18%, Penetration 6pp → Effective 12% → Final 429.

This breakdown is valuable for both players and DevTools.

## 53. Puncture vs Pierce

The names are mechanically distinct despite semantic similarity. **Pierce** = arrow-style sustained/accurate damage with lower penetration. **Puncture** = bolt-style slower impact with stronger Resistance Penetration. If future UI testing finds the names too similar, terminology may change without changing the two mechanics.

## 54. Slash / Stab / Crush

- Slash: balanced, common on swords/axes.
- Stab: precision, common on swords/daggers/spears.
- Crush: heavy impact, common on maces/warhammers.

## 55. Air / Fire / Water / Earth

These are true Magic damage types, not cosmetic labels. Enemy resistance can make one element dramatically better than another. No Arcane damage type baseline.

## 56. Special damage type

Each Special explicitly uses either a fixed damage type or `Use Current Stance/Spell Type`. Example Precision Lunge = Stab; Wand Elemental Surge = selected spell element. Multi-hit Specials roll Accuracy/Crit per hit unless data says one shared roll.

## 57. Stamina balance rules

No normal Stamina potion that instantly refills 100. Stamina progression comes from Regen, Max Stamina, weapon, Devotion and gear. Specials should remain periodic identity moments, not every-second spam.

## 58. Satiety balance rules

Satiety should not be removable by one universal cheap consumable or one mandatory Devotion. High-tier Cooking remains the main way to improve Heal-per-Satiety. Some Sustain Devotions/gear may modestly help Satiety but cannot nullify the mechanic.

## 59. Profession integration

- Cooking → Food / Heal + Satiety
- Fletching → Shortbow, Longbow, Light/Heavy Crossbow, Arrows, Bolts
- Runecrafting → Runes
- Smithing → Melee weapons, Heavy armor, metal combat components
- Tailoring → Magic/cloth armor
- Leatherworking → Ranged/leather armor
- Jewelcrafting → Combat Rings/Necklaces, Crit/Accuracy/defensive build stats
- Alchemy → Combat Elixirs + Remedies

## 60. Slayer's Guild integration

Slayer is **not** a Combat Skill. Future Slayer's Guild owns its own XP, ranks, tasks, task tiers, currency, block/reroll systems and unlocks. Combat Core only emits monster kill events and target metadata. A Slayer task kill may grant normal Combat XP/loot plus separate Guild XP/currency.

## 61. Future Guilds

Reserve separate future MDs for **Slayer's Guild, Wizard's Guild, Archer's Guild, Craftsman's Guild**. Combat Core should only provide integration hooks. Wizard Guild may focus on Magic trials/spells; Archer Guild on Ranged challenges; Craftsman Guild on cross-profession commissions/equipment. Do not design their full progression here.

## 62. No World Tier dependency

Combat Core does not need a generic World Tier multiplier. Progression can use Areas, Dungeons, Bosses, Guilds and post-100/endless systems later.

## 63. UI — main combat screen

Recommended hierarchy:
- Target header: monster, HP, style, type, resistance shortcut
- Enemy Current Action + progress + Next Action
- Player HP / Stamina / Satiety / Current Action / queued Special
- Supply strip: Food, Ammo/Runes, Devotion, Elixir
- Start/Stop + target selection + Loot + Bestiary + Analytics

## 64. Resistance grid UI

Compact 3-row grid:
- Melee: Slash / Stab / Crush
- Ranged: Pierce / Puncture
- Magic: Air / Fire / Water / Earth
Each cell shows icon + percentage + tooltip. Never rely on color only.

## 65. Satiety UI

Satiety bar 0–100. At ~70% show warning; 90% danger; if the next Food triggers Overeat show explicit warning. On Overeat, display center status **OVEREAT — 5s STUN** then **FOOD LOCK — 20s**.

## 66. Stamina UI

Compact bar: current/100, Regen/sec, Special name/cost, Auto/Manual/Off, queued state, expected Specials/min. No full skill bar.

## 67. Magic UI

Show selected spell, element, Runes per cast, Bank quantities, preservation and expected casts remaining.

## 68. Ranged UI

Show Ammo type, quantity, Ammo/basic, Ammo/Special, preservation and expected shots remaining.

## 69. Devotion UI

Two compact slots showing icon, effect, point-cost trigger, current pool and expected hours of supply.

## 70. Stop rules

Preset safety options: Stop when Food empty; Stop when Ammo empty; Stop when required Rune unavailable; Stop when Devotion Points below reserve; Stop at configured Satiety warning; Stop after X kills; Stop after target drop quantity. Keep this simple — not a programmable combat AI.

Recommended defaults: Food empty → Stop; Ammo/Rune empty → Stop; Devotion empty → continue without Devotion unless preset says Stop; Elixir expiry → continue unless preset says Stop.

## 71. Respawn and recovery

During 3s normal respawn: no attacks; Satiety decays; Stamina regenerates; no free HP refill. Out-of-combat HP recovery should be slow and globally defined later. Food can be used outside combat and still adds Satiety / can trigger Overeat.

## 72. Save state

Persist combat active state, content/target ID, player HP, Satiety, Stamina, action timers, queued Special, stance, enemy HP/action, statuses, Food Lock/Eat cooldown, spell/ammo, Devotion toggles/points, Elixir, preset and Dungeon state. Reload must not clear Satiety, refill HP/Stamina, clear Food Lock or reset Dungeon encounter.

## 73. Deterministic RNG

Use a controlled game RNG stream for hit, damage roll, crit, loot, preservation and status chance. Online/offline use the same resolver. Tests can seed the RNG.

## 74. Required tests

- equal Accuracy/Evasion = 50%

- hit chance clamps

- crit multiplier order

- negative resistance

- penetration

- style strong/weak

- stance type switch

- Special queue

- Stamina regen

- multi-hit Special

- Rune consumption/preservation

- Ammo consumption/preservation

- Auto Eat threshold

- Auto Eat minimum interval / anti-spam behavior

- repeated weak Food eating

- Overeat trigger

- 5s Stun +20s Food Lock

- Satiety decay

- offline Overeat death

- Devotion point depletion

- persistent HP between kills

- death stops offline progress

## 75. DevTools

- Set Attack/Ranged/Magic/Defence/Devotion/Hitpoints levels/XP
- Set Accuracy/Evasions/Crit/typed resistances/Stamina/Satiety
- Spawn/select target; override target HP/style/type
- Equip weapon family; choose Stance; force Special
- Spawn Food; set Satiety; force Overeat; configure Auto Eat threshold + minimum interval
- Select Magic spell; add/remove Runes; preservation override
- Set Ammo; preservation override
- Set Devotion Points; toggle Devotions
- Apply/remove statuses
- Simulate 1m / 1h / 8h / 24h / 7d
- Compare expected vs actual hit rate, Crit, DPS, Food use, Overeat frequency and death time

## 76. Core balance targets

Equal-tier farming with correct setup should generally have 70–90% Hit Chance, sustainable same-tier Food, meaningful but not mandatory Crit, and a clear difference between correct vs poor style/type choice. Weak style should be worse but not hard-locked. Every monster has all nine resistance values. Most ordinary monsters should have 1–2 notable resistance strengths, at least 1 meaningful weakness and several neutral-ish values. Style-oriented archetypes can strongly bias the full profile, but the exact nine values remain authored per enemy.

## 77. Critical balance target

Baseline 5% ×150%. Typical developed build ~10–25% Crit. Dedicated Crit build can go higher. 75% hard cap protects the model. Crit Damage should have opportunity cost.

## 78. Resistance balance target

Same-tier defensive gear should not automatically reach 75% across every type. High resistance should be specific and encounter-focused. Defence skill mainly improves Evasion and armor access; typed resistance comes primarily from equipment/builds so damage types remain important.

## 79. Food balance target

Same-tier Food should usually keep Net Satiety sustainable against ordinary equal-tier farming when defenses are reasonable. Using outdated low-tier Food should push eats/min high enough that Overeat becomes a real risk. Bosses may intentionally demand much stronger Food/mitigation.

## 80. Equipment integration pass after Core

Next pass should assign exact T1–T10 stats/requirements/recipes to Melee weapons, Heavy/Ranged/Magic armor, Off-hands, common Fletching weapon archetypes, standalone/unique weapons where applicable, Magic weapons, Crit values, typed resistances, attack intervals and exact Special numbers. Existing 306 equipment recipe gaps can be closed in that same pass.

## 81. Magic Spellbook pass after Equipment

Define Air/Fire/Water/Earth spell ladders, Rune costs, statuses and progression after weapon/gear baselines are known.

## 82. Devotion content pass

Define the full Level 1–100 Devotion unlock list, exact point costs and Offering sources after Combat math is simulated.

## 83. Monster/Boss content pass

After player equipment is numerically anchored, design Areas, monsters, resistances, damage types, Specials, boss patterns and loot.

## 84. Guild pass

Only after Combat Core is stable: separate MDs for Slayer's Guild, Wizard's Guild, Archer's Guild and Craftsman's Guild.

## 85. Locked baseline summary

1. Melvor-like automatic idle combat is the baseline structure.

2. Skills are Attack, Ranged, Magic, Defence, Devotion, Hitpoints.

3. No separate Strength skill.

4. Defence, Devotion and Hitpoints level slowly.

5. Melee > Ranged > Magic > Melee style triangle.

6. Nine direct damage types: Slash/Stab/Crush, Pierce/Puncture, Air/Fire/Water/Earth.

7. Every baseline attack uses one damage type.

8. Every player and every enemy explicitly stores all nine typed resistances; enemy strengths/weaknesses are visible in UI/Bestiary.

9. Critical Rate and Critical Damage are first-class stats.

10. Base Crit = 5%; Base Critical Damage = 150%.

11. Weapons may have Stances; Sword can switch Slash/Stab.

12. Common weapon archetypes are optional templates, not a closed weapon taxonomy; standalone weapons such as Whips/Toxic Blowpipe-style uniques can define their own full profile without creating a new family.

13. Max Stamina 100; Regen 1/sec.

14. Special never interrupts current Basic Attack; one Special queues next.

15. Player/enemy action timers are independent.

16. No Mana.

17. Magic consumes Runes; Ranged consumes Arrows/Bolts.

18. Combat Food uses 3 priority slots.

19. Every Food has fixed Heal + Satiety.

20. Satiety decays 1pp/sec.

21. Reaching 100% from eating triggers 5s Stun + 20s Food Lock.

22. Auto Eat is available from the start; the player configures HP threshold and a minimum interval between automatic Food uses, and Auto Eat can still trigger Overeat.

23. Higher-tier Food should improve Heal-per-Satiety.

24. Devotion replaces Prayer.

25. Two active Devotions baseline.

26. Devotion Points are consumed in combat and train Devotion.

27. Slayer is not a Combat Skill; future Slayer's Guild has separate XP/ranks/tasks.

28. Wizard/Archer/Craftsman Guilds are future separate systems.

29. Combat Armor uses one unified Armor slot, not Body+Legs.

30. Off-hand supports all styles.

31. No free heal on combat start/between normal kills.

32. Death keeps XP/loot already earned; remaining offline time after death is lost.

33. No equipment-loss death penalty baseline.

34. Offline Combat uses the same resolver.

35. Every enemy uses a deterministic repeating Action Sequence; Combat UI exposes Current + Next Action and Bestiary can show known sequence steps.

36. Combat UI exposes DPS, kills/h, XP/h, supply/h and Satiety sustainability.

37. No World Tier dependency in Combat Core.

## 86. Final Combat fantasy

The target decisions are things like:

> This boss is Ranged so Melee has the broad advantage, but it has +45% Slash and only +5% Stab Resistance. I should use Sword/Stab instead of Axe/Slash.


> My Food heals enough, but I need 4–5 eats per minute at 20 Satiety each. Satiety only drains 60 per minute, so this setup will eventually Overeat. I need better Food or more mitigation.


> Heavy Crossbow is slower, but the boss has low Puncture Resistance and Penetrating Bolt aligns perfectly with the resistance profile.


> Heavy armor can brute-force some Magic damage with Food, but its elemental weakness causes too much Satiety pressure. The correct fix is resistance, not carrying 100,000 weak meals.


**Combat is won in preparation, damage-type knowledge, supply sustainability and build choice — then proven through idle simulation.**
