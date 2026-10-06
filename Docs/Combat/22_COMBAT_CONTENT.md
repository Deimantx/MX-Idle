# 22 — COMBAT CONTENT

**Status:** Complete Baseline Content Draft  
**Version:** 1.0  
**References:** `18_COMBAT_CORE_v1.1.md`, `19_COMBAT_EQUIPMENT_INTEGRATION_v0.2.md`, `20_MAGIC_SPELLBOOK.md`, `21_DEVOTION.md`  
**Purpose:** Define the baseline T1–T10 Combat content ladder: Combat Areas, normal enemies, elites, dungeons, bosses, explicit damage/resistance profiles, deterministic action sequences, loot contracts, Offering hooks, progression gates and future Guild integration.

---

# 1. CONTENT PHILOSOPHY

Combat content is built around:

**inspect → prepare → fight → farm → elite → dungeon → boss → next tier**

The player should understand an enemy before committing long idle time.

Every enemy exposes:

- Combat Style;
- Basic Damage Type;
- all nine Resistances;
- deterministic Action Sequence;
- Specials/status effects;
- drops;
- Offering value category.

This is not a reflex game.

The challenge is:

**build selection + resistance knowledge + supply sustainability + predictable enemy sequence.**

---

# 2. NO REGION PACKAGE SYSTEM

Combat Areas are independent world/map nodes.

Do not turn each Tier into a giant mandatory:

`Region = 12 systems + city + gathering + combat + quests`

package.

The map may visually connect locations, but Combat progression only requires the content nodes defined here.

---

# 3. BASELINE TIER LOOP

Each baseline Combat Tier contains:

1. **one Combat Area**
2. **four normal farm enemies**
3. **one farmable Elite**
4. **one Dungeon**
5. **two unique Dungeon enemy types**
6. **the Tier Elite as the Dungeon's third encounter**
7. **one progression Boss**

This gives:

- 40 normal area enemies;
- 10 elites;
- 20 unique dungeon enemies;
- 10 bosses.

Total baseline enemy identities:

**80**

without creating hundreds of meaningless variants.

---

# 4. T1–T10 CONTENT OVERVIEW


| Tier | Combat Area | Dungeon | Boss | Target Band | Unlock |
|---|---|---|---|---|---|
| 1 | Broken Road | Ruined Watch | Captain Veyr | 1–10 | Start |
| 2 | Thornfen | Drowned Burrow | Miremother Ilyss | 11–20 | T1 boss + any offensive skill 10 |
| 3 | Ironcliff Pass | Hollow Forge | Forgemaster Korr | 21–30 | T2 boss + any offensive skill 20 |
| 4 | Moonlit Barrows | Mooncrypt | The Pale Castellan | 31–40 | T3 boss + any offensive skill 30 |
| 5 | Cinder Wastes | Embervault | Cindermaw | 41–50 | T4 boss + any offensive skill 40 |
| 6 | Frostbound Vale | Frostspire | Winter Matriarch | 51–60 | T5 boss + any offensive skill 50 |
| 7 | Stormreach Heights | Tempest Bastion | Skybreaker Raal | 61–70 | T6 boss + any offensive skill 60 |
| 8 | Aetherfall Expanse | Aetherglass Sanctum | Aetherbound Oracle | 71–80 | T7 boss + any offensive skill 70 |
| 9 | Umbral Depths | Umbral Citadel | The Hollow Regent | 81–90 | T8 boss + any offensive skill 80 |
| 10 | Astral Verge | Astral Nexus | The Zenith Warden | 91–100 | T9 boss + any offensive skill 90 |

# 5. TIER ACCESS

Baseline unlock rule:

## T1

Available from the start of Combat.

## T2–T10

Require:

1. previous Tier Dungeon Boss first kill;
2. at least one offensive Combat Skill at the previous tier threshold.

Offensive skills:

- Attack;
- Ranged;
- Magic.

Defence/Hitpoints/Devotion are **not** used as hard access gates.

This means a player can specialize in one style without training all three just to reach content.

Once a Tier unlocks, it remains permanently unlocked.

---

# 6. AREA → ELITE → DUNGEON FLOW

Within a Tier:

## Normal Area

Four normal enemies are available immediately with the Tier.

## Elite

Elite unlocks when the player has killed each of the four normal enemies at least once.

No large kill-count grind is required just to see the Elite.

## Dungeon

Dungeon unlocks after first Elite kill.

## Next Tier

Next Tier unlocks after first Dungeon Boss kill plus offensive-skill threshold.

This creates a simple progression chain without a quest maze.

---

# 7. NO FINAL BALANCE PASS YET

This document deliberately does **not** lock final:

- enemy HP;
- Base Max Hit;
- Accuracy values;
- XP/hour;
- Gold/hour;
- drop rates.

Those are tuned after Combat becomes playable.

Instead, each enemy uses a relative Combat Class.


| Class | HP Budget | Damage Budget | Accuracy Budget | Role |
|---|---|---|---|---|
| Light | 0.80× tier normal | 0.90× | 1.00× | Fast/easy farm target |
| Normal | 1.00× | 1.00× | 1.00× | Default normal enemy |
| Heavy | 1.25× | 1.10× | 0.95× | Durable normal |
| Elite | 2.25× | 1.15× | 1.05× | Farmable elite |
| Dungeon | 1.25× | 1.05× | 1.05× | Dungeon encounter |
| Boss | 5.00× | 1.25× | 1.10× | Progression boss |

These classes are implementation/tuning hooks.

Do not interpret them as final balance numbers.

---

# 8. RESISTANCE SYSTEM — EVERY ENEMY

Every enemy stores all nine Resistances:

- Slash
- Stab
- Crush
- Pierce
- Puncture
- Air
- Fire
- Water
- Earth

No enemy uses only:

`Weak to Magic`

as its underlying implementation.

Broad Style only suggests the profile direction.

---

# 9. BASE RESISTANCE PROFILES

These are first-pass content profiles.

They are **not final balance** and may be tuned globally once playable.


| ID | Style | Slash | Stab | Crush | Pierce | Puncture | Air | Fire | Water | Earth | Identity |
|---|---|---|---|---|---|---|---|---|---|---|---|
| M-A | Melee | 16 | 14 | 18 | 28 | 24 | 2 | -8 | 4 | 0 | Balanced melee fighter; excellent vs Ranged, weak to Magic |
| M-B | Melee | 24 | 18 | 28 | 32 | 28 | -5 | -10 | 0 | 8 | Plated/construct melee; especially physical-resistant |
| M-C | Melee | 12 | 18 | 14 | 24 | 20 | 0 | -5 | 8 | -8 | Beast melee; weaker Earth, modest Water resist |
| R-A | Ranged | -8 | 0 | 4 | 16 | 18 | 28 | 24 | 22 | 26 | Standard ranged; weak Melee, strongest vs Magic |
| R-B | Ranged | 0 | -5 | 6 | 22 | 16 | 30 | 26 | 20 | 28 | Armored ranged; slightly better physical profile |
| R-C | Ranged | -10 | 2 | 0 | 14 | 22 | 24 | 30 | 18 | 24 | Precision/poison ranged; especially weak Slash |
| G-A | Magic | 28 | 24 | 30 | -8 | 0 | 16 | 18 | 14 | 16 | Standard caster; strong Melee defense, weak Ranged |
| G-B | Magic | 24 | 30 | 22 | 0 | -6 | 20 | 12 | 18 | 16 | Ward caster; weak Puncture |
| G-C | Magic | 32 | 26 | 24 | -10 | -5 | 14 | 20 | 16 | 18 | Heavy ward caster; very weak Ranged |

# 10. RESISTANCE PROFILE RULE

Enemy row specifies:

- Base Profile ID;
- explicit Overrides.

Final enemy values are:

**Base Profile + Overrides**

An override may:

- replace one resistance;
- replace a whole style group;
- create a deliberate weakness.

Example:

`M-B; Water -25`

means:

use the full M-B profile, but Water Resistance becomes -25%.

The runtime/registry should materialize the final nine values.

---

# 11. STYLE IDENTITY OF ENEMIES

Baseline broad triangle remains:

## Melee enemy

Usually:
- good vs Melee;
- **very good vs Ranged**;
- weak vs Magic.

## Ranged enemy

Usually:
- weak vs Melee;
- good vs Ranged;
- **very good vs Magic**.

## Magic enemy

Usually:
- **very good vs Melee**;
- weak vs Ranged;
- good vs Magic.

Individual enemy biology/equipment can override specific types.

Example:

a stone Melee monster can still be weak to Crush.

---

# 12. DETERMINISTIC ACTION SEQUENCES

Every enemy uses an authored repeating sequence.

No baseline weighted/random move choice.

Example:

**Basic → Basic → Crushing Slam → repeat**

The Bestiary shows the full sequence.

Combat UI shows at minimum:

- Current Action;
- Next Action.

Boss phase changes are also deterministic.

---

# 13. ACTION POWER LANGUAGE

This document uses multipliers such as:

- `0.70×`
- `1.20×`
- `1.55×`

These are relative to the enemy's eventual Base Hit budget.

They describe **mechanical identity**, not final damage balance.

Action Time modifiers are similarly relative to the enemy's base Attack Interval.

---

# 14. LOOT PHILOSOPHY

Normal Combat should not invalidate professions.

Normal enemies do **not** become the main source of:

- Ore;
- Logs;
- Cloth;
- Leather;
- Runes;
- Food.

Professions remain the reliable source of those economies.

Combat primarily drops:

- Gold;
- Offering items;
- trophy/components;
- boss/elite components;
- rare unique-equipment hooks.

---

# 15. DEVOTION OFFERING FAMILIES


| Tier | Offering Item | Offering Value | Typical Source |
|---|---|---|---|
| T1 | T1 Beast Trophy | 5 | Beast/animal enemies |
| T1 | T1 War Mark | 5 | Humanoid/martial enemies |
| T1 | T1 Arcane Remnant | 5 | Caster/construct/magical enemies |
| T2 | T2 Beast Trophy | 8 | Beast/animal enemies |
| T2 | T2 War Mark | 8 | Humanoid/martial enemies |
| T2 | T2 Arcane Remnant | 8 | Caster/construct/magical enemies |
| T3 | T3 Beast Trophy | 12 | Beast/animal enemies |
| T3 | T3 War Mark | 12 | Humanoid/martial enemies |
| T3 | T3 Arcane Remnant | 12 | Caster/construct/magical enemies |
| T4 | T4 Beast Trophy | 18 | Beast/animal enemies |
| T4 | T4 War Mark | 18 | Humanoid/martial enemies |
| T4 | T4 Arcane Remnant | 18 | Caster/construct/magical enemies |
| T5 | T5 Beast Trophy | 26 | Beast/animal enemies |
| T5 | T5 War Mark | 26 | Humanoid/martial enemies |
| T5 | T5 Arcane Remnant | 26 | Caster/construct/magical enemies |
| T6 | T6 Beast Trophy | 36 | Beast/animal enemies |
| T6 | T6 War Mark | 36 | Humanoid/martial enemies |
| T6 | T6 Arcane Remnant | 36 | Caster/construct/magical enemies |
| T7 | T7 Beast Trophy | 50 | Beast/animal enemies |
| T7 | T7 War Mark | 50 | Humanoid/martial enemies |
| T7 | T7 Arcane Remnant | 50 | Caster/construct/magical enemies |
| T8 | T8 Beast Trophy | 70 | Beast/animal enemies |
| T8 | T8 War Mark | 70 | Humanoid/martial enemies |
| T8 | T8 Arcane Remnant | 70 | Caster/construct/magical enemies |
| T9 | T9 Beast Trophy | 95 | Beast/animal enemies |
| T9 | T9 War Mark | 95 | Humanoid/martial enemies |
| T9 | T9 Arcane Remnant | 95 | Caster/construct/magical enemies |
| T10 | T10 Beast Trophy | 130 | Beast/animal enemies |
| T10 | T10 War Mark | 130 | Humanoid/martial enemies |
| T10 | T10 Arcane Remnant | 130 | Caster/construct/magical enemies |

Offering items are stackable physical drops.

They may later also be used by:

- Slayer's Guild;
- Wizard's Guild;
- Archer's Guild

if those Guild systems deliberately choose to consume them.

Do not duplicate a second Guild-only trophy automatically.

---

# 16. OFFERING CATEGORY MAPPING

## Beast

Drops:

`T# Beast Trophy`

## War

Humanoid/martial enemies drop:

`T# War Mark`

## Arcane

Caster/construct/magical enemies drop:

`T# Arcane Remnant`

Elite/Boss special components are separate.

---

# 17. DROP RATE STRUCTURE — PLACEHOLDER

Do not deeply balance rates now.

Baseline categories:

## Common

Gold.

## Uncommon

Offering item.

## Rare

Tier/monster-specific component where defined.

## Elite Rare

Elite Component.

## Boss Guaranteed / First Kill

Protected Boss Component / progression flag.

## Boss Rare

Unique equipment hook.

Actual percentages later.

---

# 18. ELITE COMPONENTS


| Tier | Elite Component |
|---|---|
| T1 | Ironjaw Tusk |
| T2 | Mirecoil Gland |
| T3 | Granite Core |
| T4 | Moonbound Crest |
| T5 | Magmahorn Core |
| T6 | Whitehorn Tusk |
| T7 | Venomglass Sac |
| T8 | Prismatic Coil |
| T9 | Nightglass Core |
| T10 | Astral Heart |

Elite Components are intended for future:

- unique equipment;
- upgrades;
- Guild turn-ins;
- endgame crafting.

They should not be required for basic deterministic crafted progression.

---

# 19. BOSS REWARDS / UNIQUE HOOKS


| Tier | Boss | Protected Boss Component | Unique Equipment Hook | First-Kill Unlock |
|---|---|---|---|---|
| T1 | Captain Veyr | Veyr's Broken Crest | Rusthook Blade (unique hook; stats later) | Unlock next Combat Tier |
| T2 | Miremother Ilyss | Miremother Broodheart | Mirecoil Whip (standalone Melee unique hook) | Unlock next Combat Tier |
| T3 | Forgemaster Korr | Korr's Forge Sigil | Forgeheart Maul upgrade component | Unlock next Combat Tier |
| T4 | The Pale Castellan | Pale Crown Fragment | Moonward Shield component | Unlock next Combat Tier |
| T5 | Cindermaw | Cindermaw Core | Cinderchain Whip component | Unlock next Combat Tier |
| T6 | Winter Matriarch | Winterheart | Winterheart Ward component | Unlock next Combat Tier |
| T7 | Skybreaker Raal | Skybreaker Dynamo | Toxic Blowpipe / Venomglass Blowpipe component hook | Unlock next Combat Tier |
| T8 | Aetherbound Oracle | Oracle Lens | Aetherbound Wand / Oracle Focus hook | Unlock next Combat Tier |
| T9 | The Hollow Regent | Hollow Crown | Nightglass weapon/armor upgrade hooks | Unlock next Combat Tier |
| T10 | The Zenith Warden | Zenith Core | Zenith Staff / endgame unique equipment hook | Baseline Combat completion / endgame hook |

Boss Components are:

- protected by default;
- Auto Offer OFF;
- not normal Devotion fuel.

Unique Equipment Hooks reserve content space only.

Their exact item stats belong in a later Unique Combat Equipment pass.

---

# 20. DUNGEON RULES

Every baseline Dungeon:

- has fixed ordered encounters;
- carries player HP/Satiety/Stamina forward;
- carries Food/Ammo/Runes/Devotion forward;
- has no free heal between encounters;
- ends on death;
- grants completion reward after Boss.

The Dungeon sequence is fully visible once unlocked.

---

# 21. DUNGEON COMPLETION REWARD

Baseline completion resolves immediately:

- Gold;
- Offering loot;
- Boss loot;
- completion count.

Do not create a physical `Dungeon Chest` item unless future content needs one.

---

# 22. BOSS PHASE VISIBILITY

Boss phase rules are visible before combat baseline.

Example:

**≤50% HP → switch to Phase 2 sequence**

This keeps preparation-first combat predictable.

No hidden first-attempt wipe mechanic is required.

---


# 23. T1 — BROKEN ROAD

**Target band:** 1–10  
**Elite:** Ironjaw Boar  
**Dungeon:** Ruined Watch  
**Boss:** {'name': 'Captain Veyr', 'style': 'Melee', 'dtype': 'Slash', 'profile': 'M-B', 'overrides': 'Fire -15; Stab +10', 'phases': [('>0% HP', 'Slash → Slash → Crushing Pommel → Guard Break → repeat')], 'actions': 'Slash = 1.00× Slash; Crushing Pommel = 1.45× Crush + Stun 1.0s; Guard Break = 1.10× Slash + -8 pp Slash/Stab/Crush Resistance for 8s', 'component': "Veyr's Broken Crest", 'unique': 'Rusthook Blade (unique hook; stats later)'}

The Tier follows the global normal → Elite → Dungeon flow.

## Enemy roster


| Enemy | Class | Style | Basic Type | Res Profile | Overrides | Deterministic Sequence | Offering | Tags |
|---|---|---|---|---|---|---|---|---|
| Road Wolf | Normal | Melee | Stab | M-C | — | Bite → Bite → Rending Fang → repeat | Beast | Beast |
| Dust Rat | Light | Melee | Stab | M-C | Earth +0 instead of -8 | Bite → Quick Bite → Bite → repeat | Beast | Beast |
| Ragged Poacher | Normal | Ranged | Pierce | R-A | Fire +18 | Arrow → Arrow → Barbed Shot → repeat | War | Humanoid; Archer |
| Hedge Spark | Normal | Magic | Air | G-A | Air +28; Earth -8 | Gust → Gust → Static Burst → repeat | Arcane | Elemental; Caster |
| Ironjaw Boar | Elite | Melee | Crush | M-C | Crush +26; Fire -12 | Gore → Gore → Iron Charge → repeat | Beast | Beast; Elite |
| Watch Deserter | Dungeon | Melee | Slash | M-A | Stab +20 | Slash → Slash → Shield Bash → repeat | War | Humanoid; Dungeon |
| Tower Bowman | Dungeon | Ranged | Pierce | R-B | Slash -8 | Arrow → Aimed Shot → Arrow → repeat | War | Humanoid; Archer; Dungeon |

## Enemy action definitions

| Enemy | Action Definitions |
|---|---|
| Road Wolf | Bite = 1.00× Stab; Rending Fang = 1.25× Stab + Bleed 10% hit over 6s |
| Dust Rat | Quick Bite = 0.70× Stab, 0.75× action time |
| Ragged Poacher | Barbed Shot = 1.15× Pierce + Bleed 8% hit over 6s |
| Hedge Spark | Static Burst = 1.20× Air + Accuracy Down 8% for 5s |
| Ironjaw Boar | Gore = 1.00× Crush; Iron Charge = 1.55× Crush, 1.25× time + Stun 1.0s |
| Watch Deserter | Shield Bash = 1.10× Crush + Accuracy Down 10% for 5s |
| Tower Bowman | Aimed Shot = 1.40× Pierce, 1.20× time, +10% Accuracy |
| Captain Veyr | Slash = 1.00× Slash; Crushing Pommel = 1.45× Crush + Stun 1.0s; Guard Break = 1.10× Slash + -8 pp Slash/Stab/Crush Resistance for 8s |

## Boss — Captain Veyr

**Primary Style:** Melee  
**Basic Damage Type:** Slash  
**Resistance Profile:** M-B  
**Overrides:** Fire -15; Stab +10

### Boss phases


| HP Condition | Sequence |
|---|---|
| >0% HP | Slash → Slash → Crushing Pommel → Guard Break → repeat |

### Boss action definitions

Slash = 1.00× Slash; Crushing Pommel = 1.45× Crush + Stun 1.0s; Guard Break = 1.10× Slash + -8 pp Slash/Stab/Crush Resistance for 8s

### Boss component

**Veyr's Broken Crest**

### Unique equipment hook

**Rusthook Blade (unique hook; stats later)**

## Dungeon encounter order


| Encounter | Enemy |
|---|---|
| 1 | Watch Deserter |
| 2 | Tower Bowman |
| 3 | Ironjaw Boar |
| 4 | Captain Veyr |

---

# 24. T2 — THORNFEN

**Target band:** 11–20  
**Elite:** Mirecoil Serpent  
**Dungeon:** Drowned Burrow  
**Boss:** {'name': 'Miremother Ilyss', 'style': 'Magic', 'dtype': 'Water', 'profile': 'G-C', 'overrides': 'Fire -20; Water +32; Pierce -15', 'phases': [('>50% HP', 'Mire Bolt → Mire Bolt → Brood Chill → repeat'), ('≤50% HP', 'Brood Chill → Venom Wave → Mire Bolt → repeat')], 'actions': 'Mire Bolt = 1.00× Water; Brood Chill = 1.25× Water + Chill 10% for 6s; Venom Wave = 1.15× Water + Poison 5% Max HP over 10s', 'component': 'Miremother Broodheart', 'unique': 'Mirecoil Whip (standalone Melee unique hook)'}

The Tier follows the global normal → Elite → Dungeon flow.

## Enemy roster


| Enemy | Class | Style | Basic Type | Res Profile | Overrides | Deterministic Sequence | Offering | Tags |
|---|---|---|---|---|---|---|---|---|
| Mirewolf | Normal | Melee | Stab | M-C | Fire -12; Water +14 | Bite → Bite → Bog Lunge → repeat | Beast | Beast |
| Shellback Toad | Heavy | Melee | Crush | M-B | Puncture +36; Fire -8 | Headbutt → Headbutt → Shell Slam → repeat | Beast | Beast |
| Briar Archer | Normal | Ranged | Pierce | R-A | Fire -6; Earth +32 | Arrow → Arrow → Thornshot → repeat | War | Humanoid; Archer |
| Bog Witch | Normal | Magic | Water | G-B | Fire -15; Water +30 | Frost Hex → Frost Hex → Mire Chill → repeat | Arcane | Humanoid; Caster |
| Mirecoil Serpent | Elite | Melee | Stab | M-C | Stab +26; Fire -15 | Fang → Coil Strike → Fang → Venom Bite → repeat | Beast | Beast; Elite |
| Drowned Stalker | Dungeon | Melee | Slash | M-A | Water +24; Fire -10 | Claw → Claw → Drown Grip → repeat | War | Undead; Dungeon |
| Fen Channeler | Dungeon | Magic | Water | G-A | Water +28; Puncture -10 | Water Bolt → Water Bolt → Silt Ward → repeat | Arcane | Caster; Dungeon |

## Enemy action definitions

| Enemy | Action Definitions |
|---|---|
| Mirewolf | Bog Lunge = 1.30× Stab + Evasion Down 8% for 5s |
| Shellback Toad | Shell Slam = 1.45× Crush + -6 pp Crush Resistance for 6s |
| Briar Archer | Thornshot = 1.10× Pierce + Bleed 12% over 6s |
| Bog Witch | Mire Chill = 1.05× Water + Chill 8% for 5s |
| Mirecoil Serpent | Coil Strike = 1.20× Crush; Venom Bite = 1.15× Stab + Poison 4% Max HP over 8s |
| Drowned Stalker | Drown Grip = 1.30× Crush + Chill 6% for 4s |
| Fen Channeler | Silt Ward = 0.80× Earth + self +8 pp Melee Resistances for next 2 actions |
| Miremother Ilyss | Mire Bolt = 1.00× Water; Brood Chill = 1.25× Water + Chill 10% for 6s; Venom Wave = 1.15× Water + Poison 5% Max HP over 10s |

## Boss — Miremother Ilyss

**Primary Style:** Magic  
**Basic Damage Type:** Water  
**Resistance Profile:** G-C  
**Overrides:** Fire -20; Water +32; Pierce -15

### Boss phases


| HP Condition | Sequence |
|---|---|
| >50% HP | Mire Bolt → Mire Bolt → Brood Chill → repeat |
| ≤50% HP | Brood Chill → Venom Wave → Mire Bolt → repeat |

### Boss action definitions

Mire Bolt = 1.00× Water; Brood Chill = 1.25× Water + Chill 10% for 6s; Venom Wave = 1.15× Water + Poison 5% Max HP over 10s

### Boss component

**Miremother Broodheart**

### Unique equipment hook

**Mirecoil Whip (standalone Melee unique hook)**

## Dungeon encounter order


| Encounter | Enemy |
|---|---|
| 1 | Drowned Stalker |
| 2 | Fen Channeler |
| 3 | Mirecoil Serpent |
| 4 | Miremother Ilyss |

---

# 25. T3 — IRONCLIFF PASS

**Target band:** 21–30  
**Elite:** Graniteback Ram  
**Dungeon:** Hollow Forge  
**Boss:** {'name': 'Forgemaster Korr', 'style': 'Melee', 'dtype': 'Crush', 'profile': 'M-B', 'overrides': 'Crush +40; Water -18; Fire +22', 'phases': [('>40% HP', 'Hammer → Hammer → Furnace Slam → Tempered Guard → repeat'), ('≤40% HP', 'Furnace Slam → Molten Hammer → Hammer → repeat')], 'actions': 'Hammer = 1.00× Crush; Furnace Slam = 1.50× Crush + Burn 12% hit over 6s; Tempered Guard = self +10 pp Melee/Ranged Resistance for next 2 actions; Molten Hammer = 1.35× Crush + 0.35× Fire component (future hybrid hook; baseline may resolve as Crush+Fire components)', 'component': "Korr's Forge Sigil", 'unique': 'Forgeheart Maul upgrade component'}

The Tier follows the global normal → Elite → Dungeon flow.

## Enemy roster


| Enemy | Class | Style | Basic Type | Res Profile | Overrides | Deterministic Sequence | Offering | Tags |
|---|---|---|---|---|---|---|---|---|
| Cliff Ram | Normal | Melee | Crush | M-C | Crush +26; Air -8 | Ram → Ram → Cliff Charge → repeat | Beast | Beast |
| Ironcloak Skirmisher | Normal | Melee | Slash | M-B | Crush +8 instead of 28 | Slash → Stab → Shield Hook → repeat | War | Humanoid |
| Cragbow Scout | Normal | Ranged | Pierce | R-B | Earth +34; Slash -10 | Arrow → Quick Shot → Arrow → Stonehead Shot → repeat | War | Humanoid; Archer |
| Stonecaller | Normal | Magic | Earth | G-B | Earth +30; Air -12 | Stone Bolt → Stone Bolt → Fracture → repeat | Arcane | Humanoid; Caster |
| Graniteback Ram | Elite | Melee | Crush | M-B | Crush +38; Puncture +18; Air -15 | Horn → Horn → Granite Charge → Quake → repeat | Beast | Beast; Elite |
| Forge Thrall | Dungeon | Melee | Crush | M-B | Fire +20 | Hammer → Hammer → Furnace Smash → repeat | War | Construct; Dungeon |
| Cinder Smith | Dungeon | Magic | Fire | G-A | Fire +30; Water -15 | Fire Bolt → Fire Bolt → Molten Brand → repeat | Arcane | Humanoid; Caster; Dungeon |

## Enemy action definitions

| Enemy | Action Definitions |
|---|---|
| Cliff Ram | Cliff Charge = 1.50× Crush, 1.25× time |
| Ironcloak Skirmisher | Shield Hook = 1.10× Crush + Evasion Down 10% for 5s |
| Cragbow Scout | Quick Shot = 0.70× Pierce; Stonehead Shot = 1.25× Crush |
| Stonecaller | Fracture = 1.15× Earth + -8 pp Earth Resistance for 6s |
| Graniteback Ram | Granite Charge = 1.55× Crush; Quake = 1.20× Earth + Stun 1.0s |
| Forge Thrall | Furnace Smash = 1.40× Crush + Burn 10% hit over 6s |
| Cinder Smith | Molten Brand = 1.20× Fire + -8 pp Fire Resistance for 6s |
| Forgemaster Korr | Hammer = 1.00× Crush; Furnace Slam = 1.50× Crush + Burn 12% hit over 6s; Tempered Guard = self +10 pp Melee/Ranged Resistance for next 2 actions; Molten Hammer = 1.35× Crush + 0.35× Fire component (future hybrid hook; baseline may resolve as Crush+Fire components) |

## Boss — Forgemaster Korr

**Primary Style:** Melee  
**Basic Damage Type:** Crush  
**Resistance Profile:** M-B  
**Overrides:** Crush +40; Water -18; Fire +22

### Boss phases


| HP Condition | Sequence |
|---|---|
| >40% HP | Hammer → Hammer → Furnace Slam → Tempered Guard → repeat |
| ≤40% HP | Furnace Slam → Molten Hammer → Hammer → repeat |

### Boss action definitions

Hammer = 1.00× Crush; Furnace Slam = 1.50× Crush + Burn 12% hit over 6s; Tempered Guard = self +10 pp Melee/Ranged Resistance for next 2 actions; Molten Hammer = 1.35× Crush + 0.35× Fire component (future hybrid hook; baseline may resolve as Crush+Fire components)

### Boss component

**Korr's Forge Sigil**

### Unique equipment hook

**Forgeheart Maul upgrade component**

## Dungeon encounter order


| Encounter | Enemy |
|---|---|
| 1 | Forge Thrall |
| 2 | Cinder Smith |
| 3 | Graniteback Ram |
| 4 | Forgemaster Korr |

---

# 26. T4 — MOONLIT BARROWS

**Target band:** 31–40  
**Elite:** Moonbound Knight  
**Dungeon:** Mooncrypt  
**Boss:** {'name': 'The Pale Castellan', 'style': 'Magic', 'dtype': 'Water', 'profile': 'G-C', 'overrides': 'Fire -25; Water +34; Pierce -15', 'phases': [('>50% HP', 'Pale Bolt → Pale Bolt → Moon Spear → repeat'), ('≤50% HP', 'Moon Spear → Grave Decree → Pale Bolt → Soul Chill → repeat')], 'actions': 'Pale Bolt = 1.00× Water; Moon Spear = 1.45× Water; Grave Decree = 0.90× Earth + -12 pp Magic Resistance for 8s; Soul Chill = 1.10× Water + Chill 12% for 6s', 'component': 'Pale Crown Fragment', 'unique': 'Moonward Shield component'}

The Tier follows the global normal → Elite → Dungeon flow.

## Enemy roster


| Enemy | Class | Style | Basic Type | Res Profile | Overrides | Deterministic Sequence | Offering | Tags |
|---|---|---|---|---|---|---|---|---|
| Graveblade | Normal | Melee | Slash | M-A | Fire -10; Water +12 | Slash → Slash → Grave Rend → repeat | War | Undead |
| Wight Hound | Normal | Melee | Stab | M-C | Fire -12; Earth +14 | Bite → Quick Bite → Soul Fang → repeat | Beast | Undead; Beast |
| Bone Archer | Normal | Ranged | Pierce | R-A | Crush -15; Fire +8 | Arrow → Arrow → Splinter Volley → repeat | War | Undead; Archer |
| Pale Hexer | Normal | Magic | Water | G-A | Fire -20; Water +26 | Rime Bolt → Hex → Rime Bolt → repeat | Arcane | Undead; Caster |
| Moonbound Knight | Elite | Melee | Slash | M-B | Stab +32; Fire -12 | Slash → Guard Break → Stab → Moon Cleave → repeat | War | Undead; Elite |
| Crypt Sentinel | Dungeon | Melee | Crush | M-B | Crush +36; Fire -15 | Mace → Mace → Bone Crush → repeat | War | Undead; Dungeon |
| Moon Priest | Dungeon | Magic | Water | G-C | Fire -18; Pierce -12 | Moon Bolt → Pale Ward → Moon Bolt → Soul Chill → repeat | Arcane | Undead; Caster; Dungeon |

## Enemy action definitions

| Enemy | Action Definitions |
|---|---|
| Graveblade | Grave Rend = 1.25× Slash + Bleed 14% over 6s |
| Wight Hound | Soul Fang = 1.20× Stab + Accuracy Down 10% for 6s |
| Bone Archer | Splinter Volley = 2 ×0.65× Pierce; two hit rolls |
| Pale Hexer | Hex = 0.90× Water + Accuracy Down 12% for 6s |
| Moonbound Knight | Guard Break = 1.05× Crush + -10 pp Melee Resistances 7s; Moon Cleave = 1.50× Slash |
| Crypt Sentinel | Bone Crush = 1.45× Crush + Stun 1.0s |
| Moon Priest | Pale Ward = self +8 pp all Magic Res for 2 actions; Soul Chill = 1.20× Water + Chill 10% 5s |
| The Pale Castellan | Pale Bolt = 1.00× Water; Moon Spear = 1.45× Water; Grave Decree = 0.90× Earth + -12 pp Magic Resistance for 8s; Soul Chill = 1.10× Water + Chill 12% for 6s |

## Boss — The Pale Castellan

**Primary Style:** Magic  
**Basic Damage Type:** Water  
**Resistance Profile:** G-C  
**Overrides:** Fire -25; Water +34; Pierce -15

### Boss phases


| HP Condition | Sequence |
|---|---|
| >50% HP | Pale Bolt → Pale Bolt → Moon Spear → repeat |
| ≤50% HP | Moon Spear → Grave Decree → Pale Bolt → Soul Chill → repeat |

### Boss action definitions

Pale Bolt = 1.00× Water; Moon Spear = 1.45× Water; Grave Decree = 0.90× Earth + -12 pp Magic Resistance for 8s; Soul Chill = 1.10× Water + Chill 12% for 6s

### Boss component

**Pale Crown Fragment**

### Unique equipment hook

**Moonward Shield component**

## Dungeon encounter order


| Encounter | Enemy |
|---|---|
| 1 | Crypt Sentinel |
| 2 | Moon Priest |
| 3 | Moonbound Knight |
| 4 | The Pale Castellan |

---

# 27. T5 — CINDER WASTES

**Target band:** 41–50  
**Elite:** Magmahorn  
**Dungeon:** Embervault  
**Boss:** {'name': 'Cindermaw', 'style': 'Melee', 'dtype': 'Crush', 'profile': 'M-B', 'overrides': 'Fire +50; Water -30; Puncture +34', 'phases': [('>60% HP', 'Bite → Bite → Cinder Breath → repeat'), ('31–60% HP', 'Cinder Breath → Tail Crush → Bite → repeat'), ('≤30% HP', 'Tail Crush → Cinder Breath → Magma Roar → repeat')], 'actions': 'Bite = 1.00× Stab; Cinder Breath = 1.30× Fire + Burn 16% hit over 8s; Tail Crush = 1.55× Crush + Stun 1.0s; Magma Roar = 0.90× Fire + -12 pp Fire/Crush Resistance for 8s', 'component': 'Cindermaw Core', 'unique': 'Cinderchain Whip component'}

The Tier follows the global normal → Elite → Dungeon flow.

## Enemy roster


| Enemy | Class | Style | Basic Type | Res Profile | Overrides | Deterministic Sequence | Offering | Tags |
|---|---|---|---|---|---|---|---|---|
| Emberclaw | Normal | Melee | Stab | M-C | Fire +32; Water -18 | Claw → Claw → Burning Pounce → repeat | Beast | Beast |
| Ash Reaver | Normal | Melee | Slash | M-A | Fire +28; Water -15 | Slash → Slash → Ash Cleave → repeat | War | Humanoid |
| Cinder Archer | Normal | Ranged | Pierce | R-A | Fire +30; Water -15 | Arrow → Ember Arrow → Arrow → repeat | War | Humanoid; Archer |
| Flame Seer | Normal | Magic | Fire | G-B | Fire +38; Water -22 | Fire Bolt → Fire Bolt → Cinderburst → repeat | Arcane | Caster |
| Magmahorn | Elite | Melee | Crush | M-B | Fire +45; Water -25; Crush +34 | Horn → Lava Charge → Horn → Magma Slam → repeat | Beast | Beast; Elite |
| Ember Guard | Dungeon | Melee | Slash | M-B | Fire +34; Water -18 | Slash → Slash → Heat Guard → Flame Cleave → repeat | War | Humanoid; Dungeon |
| Pyre Channeler | Dungeon | Magic | Fire | G-C | Fire +42; Water -25; Pierce -12 | Pyre Bolt → Pyre Bolt → Furnace Wave → repeat | Arcane | Caster; Dungeon |

## Enemy action definitions

| Enemy | Action Definitions |
|---|---|
| Emberclaw | Burning Pounce = 1.25× Stab + Burn 12% hit over 6s |
| Ash Reaver | Ash Cleave = 1.35× Slash + Accuracy Down 8% 5s |
| Cinder Archer | Ember Arrow = 1.10× Pierce + Burn 10% hit over 6s |
| Flame Seer | Cinderburst = 1.35× Fire + Burn 14% hit over 6s |
| Magmahorn | Lava Charge = 1.35× Crush + Burn; Magma Slam = 1.50× Crush + -10 pp Crush Resistance 7s |
| Ember Guard | Heat Guard = self +10 pp Melee Res for next action; Flame Cleave = 1.40× Slash + Burn |
| Pyre Channeler | Furnace Wave = 1.35× Fire + -10 pp Fire Resistance 7s |
| Cindermaw | Bite = 1.00× Stab; Cinder Breath = 1.30× Fire + Burn 16% hit over 8s; Tail Crush = 1.55× Crush + Stun 1.0s; Magma Roar = 0.90× Fire + -12 pp Fire/Crush Resistance for 8s |

## Boss — Cindermaw

**Primary Style:** Melee  
**Basic Damage Type:** Crush  
**Resistance Profile:** M-B  
**Overrides:** Fire +50; Water -30; Puncture +34

### Boss phases


| HP Condition | Sequence |
|---|---|
| >60% HP | Bite → Bite → Cinder Breath → repeat |
| 31–60% HP | Cinder Breath → Tail Crush → Bite → repeat |
| ≤30% HP | Tail Crush → Cinder Breath → Magma Roar → repeat |

### Boss action definitions

Bite = 1.00× Stab; Cinder Breath = 1.30× Fire + Burn 16% hit over 8s; Tail Crush = 1.55× Crush + Stun 1.0s; Magma Roar = 0.90× Fire + -12 pp Fire/Crush Resistance for 8s

### Boss component

**Cindermaw Core**

### Unique equipment hook

**Cinderchain Whip component**

## Dungeon encounter order


| Encounter | Enemy |
|---|---|
| 1 | Ember Guard |
| 2 | Pyre Channeler |
| 3 | Magmahorn |
| 4 | Cindermaw |

---

# 28. T6 — FROSTBOUND VALE

**Target band:** 51–60  
**Elite:** Whitehorn Mammoth  
**Dungeon:** Frostspire  
**Boss:** {'name': 'Winter Matriarch', 'style': 'Magic', 'dtype': 'Water', 'profile': 'G-C', 'overrides': 'Water +50; Fire -30; Pierce -15', 'phases': [('>50% HP', 'Ice Spear → Ice Spear → Whiteout → repeat'), ('≤50% HP', 'Whiteout → Glacial Crush → Ice Spear → repeat')], 'actions': 'Ice Spear = 1.10× Water; Whiteout = 1.20× Water + Accuracy Down 15% 7s; Glacial Crush = 1.55× Crush + Chill 15% 7s', 'component': 'Winterheart', 'unique': 'Winterheart Ward component'}

The Tier follows the global normal → Elite → Dungeon flow.

## Enemy roster


| Enemy | Class | Style | Basic Type | Res Profile | Overrides | Deterministic Sequence | Offering | Tags |
|---|---|---|---|---|---|---|---|---|
| Frostfang Wolf | Normal | Melee | Stab | M-C | Water +34; Fire -20 | Bite → Frost Bite → Bite → repeat | Beast | Beast |
| Iceguard Raider | Normal | Melee | Slash | M-B | Water +30; Fire -18 | Slash → Shield Bash → Slash → repeat | War | Humanoid |
| Snowstalker Archer | Normal | Ranged | Pierce | R-A | Water +32; Fire -18 | Arrow → Arrow → Rime Shot → repeat | War | Humanoid; Archer |
| Rimecaller | Normal | Magic | Water | G-B | Water +42; Fire -25 | Rime Bolt → Rime Bolt → Deep Freeze → repeat | Arcane | Caster |
| Whitehorn Mammoth | Elite | Melee | Crush | M-B | Water +38; Fire -25; Crush +40 | Tusk → Tusk → Avalanche Charge → repeat | Beast | Beast; Elite |
| Frost Warden | Dungeon | Melee | Crush | M-B | Water +40; Fire -24 | Hammer → Hammer → Icebreaker → repeat | War | Humanoid; Dungeon |
| Glacial Adept | Dungeon | Magic | Water | G-C | Water +45; Fire -28; Pierce -14 | Ice Spear → Ice Spear → Whiteout → repeat | Arcane | Caster; Dungeon |

## Enemy action definitions

| Enemy | Action Definitions |
|---|---|
| Frostfang Wolf | Frost Bite = 1.15× Stab + Chill 8% 5s |
| Iceguard Raider | Shield Bash = 1.15× Crush + Stun 0.75s |
| Snowstalker Archer | Rime Shot = 1.20× Pierce + Chill 8% 5s |
| Rimecaller | Deep Freeze = 1.25× Water + Chill 12% 6s |
| Whitehorn Mammoth | Avalanche Charge = 1.65× Crush + Chill 10% 6s |
| Frost Warden | Icebreaker = 1.45× Crush + -10 pp Crush Resistance 8s |
| Glacial Adept | Whiteout = 1.20× Water + Accuracy Down 15% 6s |
| Winter Matriarch | Ice Spear = 1.10× Water; Whiteout = 1.20× Water + Accuracy Down 15% 7s; Glacial Crush = 1.55× Crush + Chill 15% 7s |

## Boss — Winter Matriarch

**Primary Style:** Magic  
**Basic Damage Type:** Water  
**Resistance Profile:** G-C  
**Overrides:** Water +50; Fire -30; Pierce -15

### Boss phases


| HP Condition | Sequence |
|---|---|
| >50% HP | Ice Spear → Ice Spear → Whiteout → repeat |
| ≤50% HP | Whiteout → Glacial Crush → Ice Spear → repeat |

### Boss action definitions

Ice Spear = 1.10× Water; Whiteout = 1.20× Water + Accuracy Down 15% 7s; Glacial Crush = 1.55× Crush + Chill 15% 7s

### Boss component

**Winterheart**

### Unique equipment hook

**Winterheart Ward component**

## Dungeon encounter order


| Encounter | Enemy |
|---|---|
| 1 | Frost Warden |
| 2 | Glacial Adept |
| 3 | Whitehorn Mammoth |
| 4 | Winter Matriarch |

---

# 29. T7 — STORMREACH HEIGHTS

**Target band:** 61–70  
**Elite:** Stormcoil Viper  
**Dungeon:** Tempest Bastion  
**Boss:** {'name': 'Skybreaker Raal', 'style': 'Ranged', 'dtype': 'Puncture', 'profile': 'R-C', 'overrides': 'Air +48; Earth -28; Slash -15', 'phases': [('>50% HP', 'Bolt → Bolt → Skybreaker Shot → repeat'), ('≤50% HP', 'Skybreaker Shot → Tempest Barrage → Bolt → repeat')], 'actions': 'Bolt = 1.00× Puncture; Skybreaker Shot = 1.60× Puncture +15 pp Puncture Penetration; Tempest Barrage = 3 ×0.55× Air, separate hit rolls', 'component': 'Skybreaker Dynamo', 'unique': 'Toxic Blowpipe / Venomglass Blowpipe component hook'}

The Tier follows the global normal → Elite → Dungeon flow.

## Enemy roster


| Enemy | Class | Style | Basic Type | Res Profile | Overrides | Deterministic Sequence | Offering | Tags |
|---|---|---|---|---|---|---|---|---|
| Stormfang | Normal | Melee | Stab | M-C | Air +34; Earth -18 | Bite → Bite → Static Fang → repeat | Beast | Beast |
| Gale Raider | Normal | Melee | Slash | M-A | Air +28; Earth -15 | Slash → Quick Slash → Gale Cleave → repeat | War | Humanoid |
| Thunderbow | Normal | Ranged | Pierce | R-B | Air +36; Earth -16 | Arrow → Arrow → Storm Shot → repeat | War | Humanoid; Archer |
| Tempest Adept | Normal | Magic | Air | G-A | Air +42; Earth -22 | Gale Bolt → Gale Bolt → Cyclone → repeat | Arcane | Caster |
| Stormcoil Viper | Elite | Melee | Stab | M-C | Air +38; Earth -22; Fire -8 | Fang → Static Coil → Fang → Venom Burst → repeat | Beast | Beast; Elite |
| Tempest Guard | Dungeon | Melee | Crush | M-B | Air +38; Earth -20 | Hammer → Hammer → Thunder Slam → repeat | War | Humanoid; Dungeon |
| Storm Savant | Dungeon | Magic | Air | G-C | Air +46; Earth -25; Puncture -12 | Air Lance → Air Lance → Tempest Cage → repeat | Arcane | Caster; Dungeon |

## Enemy action definitions

| Enemy | Action Definitions |
|---|---|
| Stormfang | Static Fang = 1.20× Stab + Accuracy Down 10% 5s |
| Gale Raider | Gale Cleave = 1.30× Slash, 0.90× time |
| Thunderbow | Storm Shot = 1.20× Pierce + Accuracy Down 10% 5s |
| Tempest Adept | Cyclone = 1.25× Air + Evasion Down 12% 6s |
| Stormcoil Viper | Static Coil = 1.15× Air; Venom Burst = 1.15× Stab + Poison 6% Max HP over 10s |
| Tempest Guard | Thunder Slam = 1.50× Crush + Accuracy Down 12% 6s |
| Storm Savant | Tempest Cage = 1.15× Air + Evasion Down 15% 7s |
| Skybreaker Raal | Bolt = 1.00× Puncture; Skybreaker Shot = 1.60× Puncture +15 pp Puncture Penetration; Tempest Barrage = 3 ×0.55× Air, separate hit rolls |

## Boss — Skybreaker Raal

**Primary Style:** Ranged  
**Basic Damage Type:** Puncture  
**Resistance Profile:** R-C  
**Overrides:** Air +48; Earth -28; Slash -15

### Boss phases


| HP Condition | Sequence |
|---|---|
| >50% HP | Bolt → Bolt → Skybreaker Shot → repeat |
| ≤50% HP | Skybreaker Shot → Tempest Barrage → Bolt → repeat |

### Boss action definitions

Bolt = 1.00× Puncture; Skybreaker Shot = 1.60× Puncture +15 pp Puncture Penetration; Tempest Barrage = 3 ×0.55× Air, separate hit rolls

### Boss component

**Skybreaker Dynamo**

### Unique equipment hook

**Toxic Blowpipe / Venomglass Blowpipe component hook**

## Dungeon encounter order


| Encounter | Enemy |
|---|---|
| 1 | Tempest Guard |
| 2 | Storm Savant |
| 3 | Stormcoil Viper |
| 4 | Skybreaker Raal |

---

# 30. T8 — AETHERFALL EXPANSE

**Target band:** 71–80  
**Elite:** Prismcoil Serpent  
**Dungeon:** Aetherglass Sanctum  
**Boss:** {'name': 'Aetherbound Oracle', 'style': 'Magic', 'dtype': 'Air', 'profile': 'G-C', 'overrides': 'All Magic Res treated as +34; Pierce -18; Puncture -14', 'phases': [('>66% HP', 'Air Decree → Water Decree → Earth Decree → Fire Decree → repeat'), ('34–66% HP', 'Prism Lance → Air Decree → Prism Lance → Water Decree → repeat'), ('≤33% HP', 'Prism Collapse → Fire Decree → Earth Decree → repeat')], 'actions': "Element Decree = 1.10× matching element; Prism Lance = 1.45× current sequence element +10 pp Penetration; Prism Collapse = 1.40× against player's currently lowest elemental Resistance", 'component': 'Oracle Lens', 'unique': 'Aetherbound Wand / Oracle Focus hook'}

The Tier follows the global normal → Elite → Dungeon flow.

## Enemy roster


| Enemy | Class | Style | Basic Type | Res Profile | Overrides | Deterministic Sequence | Offering | Tags |
|---|---|---|---|---|---|---|---|---|
| Aetherblade | Normal | Melee | Stab | M-A | Air +16; Fire +16; Water +16; Earth +16 | Stab → Slash → Aether Cut → repeat | War | Humanoid |
| Rift Hound | Normal | Melee | Stab | M-C | Magic resistances +14 each; Puncture +12 | Bite → Rift Lunge → Bite → repeat | Beast | Beast |
| Prism Archer | Normal | Ranged | Pierce | R-A | Magic resistances +32 each | Arrow → Prism Shot → Arrow → repeat | War | Humanoid; Archer |
| Aether Seer | Normal | Magic | Air | G-B | All Magic Res 26; Puncture -12 | Air Bolt → Water Bolt → Earth Bolt → Fire Bolt → repeat | Arcane | Caster |
| Prismcoil Serpent | Elite | Melee | Stab | M-C | All Magic Res 22; Slash -10 | Fang → Prism Coil → Fang → Aether Venom → repeat | Beast | Beast; Elite |
| Aetherglass Sentinel | Dungeon | Melee | Crush | M-B | All Magic Res 20; Crush +42 | Hammer → Hammer → Glassbreak → repeat | Arcane | Construct; Dungeon |
| Prismatic Channeler | Dungeon | Magic | Fire | G-C | All Magic Res 28; Pierce -15 | Fire → Water → Air → Earth → Prism Collapse → repeat | Arcane | Caster; Dungeon |

## Enemy action definitions

| Enemy | Action Definitions |
|---|---|
| Aetherblade | Aether Cut = 1.30× Stab + -8 pp matching Resistance 6s |
| Rift Hound | Rift Lunge = 1.30× Stab + Evasion Down 10% 6s |
| Prism Archer | Prism Shot = 1.20× Pierce + Accuracy Down 12% 6s |
| Aether Seer | Each bolt = 1.00× matching element; fixed four-element sequence |
| Prismcoil Serpent | Prism Coil = 1.20× Crush + -8 pp all Evasion 6s; Aether Venom = Poison 7% Max HP over 10s |
| Aetherglass Sentinel | Glassbreak = 1.55× Crush + -12 pp Crush Resistance 8s |
| Prismatic Channeler | Element hits = 0.90×; Prism Collapse = 1.35× element matching player's lowest current Magic Resistance |
| Aetherbound Oracle | Element Decree = 1.10× matching element; Prism Lance = 1.45× current sequence element +10 pp Penetration; Prism Collapse = 1.40× against player's currently lowest elemental Resistance |

## Boss — Aetherbound Oracle

**Primary Style:** Magic  
**Basic Damage Type:** Air  
**Resistance Profile:** G-C  
**Overrides:** All Magic Res treated as +34; Pierce -18; Puncture -14

### Boss phases


| HP Condition | Sequence |
|---|---|
| >66% HP | Air Decree → Water Decree → Earth Decree → Fire Decree → repeat |
| 34–66% HP | Prism Lance → Air Decree → Prism Lance → Water Decree → repeat |
| ≤33% HP | Prism Collapse → Fire Decree → Earth Decree → repeat |

### Boss action definitions

Element Decree = 1.10× matching element; Prism Lance = 1.45× current sequence element +10 pp Penetration; Prism Collapse = 1.40× against player's currently lowest elemental Resistance

### Boss component

**Oracle Lens**

### Unique equipment hook

**Aetherbound Wand / Oracle Focus hook**

## Dungeon encounter order


| Encounter | Enemy |
|---|---|
| 1 | Aetherglass Sentinel |
| 2 | Prismatic Channeler |
| 3 | Prismcoil Serpent |
| 4 | Aetherbound Oracle |

---

# 31. T9 — UMBRAL DEPTHS

**Target band:** 81–90  
**Elite:** Nightglass Devourer  
**Dungeon:** Umbral Citadel  
**Boss:** {'name': 'The Hollow Regent', 'style': 'Melee', 'dtype': 'Slash', 'profile': 'M-B', 'overrides': 'Fire -25; Puncture +40; Slash +42', 'phases': [('>60% HP', 'Regent Slash → Regent Slash → Hollow Decree → repeat'), ('31–60% HP', 'Hollow Decree → Nightglass Crush → Regent Slash → repeat'), ('≤30% HP', 'Nightglass Crush → Devouring Crown → Regent Slash → repeat')], 'actions': 'Regent Slash = 1.10× Slash; Hollow Decree = 1.20× Earth + -10 pp all Resistances 8s; Nightglass Crush = 1.60× Crush; Devouring Crown = 1.25× Stab + heal 4% Max HP on hit', 'component': 'Hollow Crown', 'unique': 'Nightglass weapon/armor upgrade hooks'}

The Tier follows the global normal → Elite → Dungeon flow.

## Enemy roster


| Enemy | Class | Style | Basic Type | Res Profile | Overrides | Deterministic Sequence | Offering | Tags |
|---|---|---|---|---|---|---|---|---|
| Nightstalker | Normal | Melee | Stab | M-C | Fire -12; Air +18 | Stab → Stab → Shadow Pounce → repeat | Beast | Beast |
| Umbral Reaver | Normal | Melee | Slash | M-B | Fire -10; Water +18 | Slash → Slash → Dread Cleave → repeat | War | Humanoid |
| Shade Archer | Normal | Ranged | Pierce | R-C | Fire -10; Air +28 | Arrow → Darkshot → Arrow → repeat | War | Humanoid; Archer |
| Voidcaller | Normal | Magic | Earth | G-B | Fire -18; Earth +30 | Earth Bolt → Air Bolt → Dread Pulse → repeat | Arcane | Caster |
| Nightglass Devourer | Elite | Melee | Crush | M-B | Puncture +38; Fire -20; Crush +42 | Bite → Glass Crush → Bite → Devour → repeat | Beast | Beast; Elite |
| Citadel Reaper | Dungeon | Melee | Slash | M-B | Fire -15 | Slash → Slash → Umbral Break → repeat | War | Humanoid; Dungeon |
| Hollow Magus | Dungeon | Magic | Earth | G-C | Fire -20; Pierce -18 | Earth Lance → Air Lance → Hollow Ward → repeat | Arcane | Caster; Dungeon |

## Enemy action definitions

| Enemy | Action Definitions |
|---|---|
| Nightstalker | Shadow Pounce = 1.35× Stab + Evasion Down 12% 6s |
| Umbral Reaver | Dread Cleave = 1.40× Slash + Accuracy Down 12% 6s |
| Shade Archer | Darkshot = 1.25× Pierce + -8 pp Pierce Resistance 7s |
| Voidcaller | Dread Pulse = 1.20× Earth + Accuracy Down 15% 7s |
| Nightglass Devourer | Glass Crush = 1.55× Crush; Devour = 1.20× Stab + heal 3% Max HP on hit |
| Citadel Reaper | Umbral Break = 1.40× Slash + -12 pp Melee Resistances 8s |
| Hollow Magus | Hollow Ward = self +12 pp all typed Resistances for next 2 actions |
| The Hollow Regent | Regent Slash = 1.10× Slash; Hollow Decree = 1.20× Earth + -10 pp all Resistances 8s; Nightglass Crush = 1.60× Crush; Devouring Crown = 1.25× Stab + heal 4% Max HP on hit |

## Boss — The Hollow Regent

**Primary Style:** Melee  
**Basic Damage Type:** Slash  
**Resistance Profile:** M-B  
**Overrides:** Fire -25; Puncture +40; Slash +42

### Boss phases


| HP Condition | Sequence |
|---|---|
| >60% HP | Regent Slash → Regent Slash → Hollow Decree → repeat |
| 31–60% HP | Hollow Decree → Nightglass Crush → Regent Slash → repeat |
| ≤30% HP | Nightglass Crush → Devouring Crown → Regent Slash → repeat |

### Boss action definitions

Regent Slash = 1.10× Slash; Hollow Decree = 1.20× Earth + -10 pp all Resistances 8s; Nightglass Crush = 1.60× Crush; Devouring Crown = 1.25× Stab + heal 4% Max HP on hit

### Boss component

**Hollow Crown**

### Unique equipment hook

**Nightglass weapon/armor upgrade hooks**

## Dungeon encounter order


| Encounter | Enemy |
|---|---|
| 1 | Citadel Reaper |
| 2 | Hollow Magus |
| 3 | Nightglass Devourer |
| 4 | The Hollow Regent |

---

# 32. T10 — ASTRAL VERGE

**Target band:** 91–100  
**Elite:** Astral Behemoth  
**Dungeon:** Astral Nexus  
**Boss:** {'name': 'The Zenith Warden', 'style': 'Magic', 'dtype': 'Earth', 'profile': 'G-C', 'overrides': 'All Magic Res +40; Pierce -22; Puncture -18; Melee +34 average', 'phases': [('>70% HP', 'Air Judgment → Water Judgment → Fire Judgment → Earth Judgment → repeat'), ('36–70% HP', 'Zenith Lance → Fire Judgment → Zenith Lance → Water Judgment → repeat'), ('≤35% HP', 'Astral Collapse → Earth Judgment → Starfall → Air Judgment → repeat')], 'actions': "Judgment = 1.10× matching element; Zenith Lance = 1.55× sequence element +12 pp Penetration; Astral Collapse = 1.45× element matching player's lowest Magic Resistance; Starfall = 1.60× Earth + Stun 1.0s", 'component': 'Zenith Core', 'unique': 'Zenith Staff / endgame unique equipment hook'}

The Tier follows the global normal → Elite → Dungeon flow.

## Enemy roster


| Enemy | Class | Style | Basic Type | Res Profile | Overrides | Deterministic Sequence | Offering | Tags |
|---|---|---|---|---|---|---|---|---|
| Starforged Sentinel | Heavy | Melee | Crush | M-B | All Magic Res 14; Crush +44 | Hammer → Hammer → Starfall Slam → repeat | Arcane | Construct |
| Prism Beast | Normal | Melee | Stab | M-C | All Magic Res 20; Slash -12 | Claw → Prism Fang → Claw → repeat | Beast | Beast |
| Astral Ranger | Normal | Ranged | Puncture | R-B | All Magic Res 36; Slash -12 | Bolt → Bolt → Starpiercer → repeat | War | Humanoid; Archer |
| Celestial Magus | Normal | Magic | Fire | G-C | All Magic Res 30; Pierce -20 | Air → Fire → Water → Earth → repeat | Arcane | Caster |
| Astral Behemoth | Elite | Melee | Crush | M-B | Crush +50; Puncture +40; Water -12 | Crush → Crush → Meteor Charge → Starquake → repeat | Beast | Beast; Elite |
| Nexus Guardian | Dungeon | Ranged | Puncture | R-B | Magic Res +40 each; Slash -15 | Bolt → Bolt → Astral Barrage → repeat | Arcane | Construct; Dungeon |
| Nexus Hierophant | Dungeon | Magic | Air | G-C | Magic Res +36 each; Pierce -20 | Air → Water → Fire → Earth → Zenith Seal → repeat | Arcane | Caster; Dungeon |

## Enemy action definitions

| Enemy | Action Definitions |
|---|---|
| Starforged Sentinel | Starfall Slam = 1.55× Crush + -10 pp Crush Resistance 8s |
| Prism Beast | Prism Fang = 1.25× Stab + matching elemental chip 0.20× based on sequence |
| Astral Ranger | Starpiercer = 1.55× Puncture +15 pp Puncture Penetration |
| Celestial Magus | Each = 1.05× matching element; deterministic four-element loop |
| Astral Behemoth | Meteor Charge = 1.65× Crush; Starquake = 1.30× Earth + Stun 1.0s |
| Nexus Guardian | Astral Barrage = 3 ×0.60× Puncture, separate rolls |
| Nexus Hierophant | Element = 0.95×; Zenith Seal = 1.30× Earth + -12 pp all Magic Resistances 8s |
| The Zenith Warden | Judgment = 1.10× matching element; Zenith Lance = 1.55× sequence element +12 pp Penetration; Astral Collapse = 1.45× element matching player's lowest Magic Resistance; Starfall = 1.60× Earth + Stun 1.0s |

## Boss — The Zenith Warden

**Primary Style:** Magic  
**Basic Damage Type:** Earth  
**Resistance Profile:** G-C  
**Overrides:** All Magic Res +40; Pierce -22; Puncture -18; Melee +34 average

### Boss phases


| HP Condition | Sequence |
|---|---|
| >70% HP | Air Judgment → Water Judgment → Fire Judgment → Earth Judgment → repeat |
| 36–70% HP | Zenith Lance → Fire Judgment → Zenith Lance → Water Judgment → repeat |
| ≤35% HP | Astral Collapse → Earth Judgment → Starfall → Air Judgment → repeat |

### Boss action definitions

Judgment = 1.10× matching element; Zenith Lance = 1.55× sequence element +12 pp Penetration; Astral Collapse = 1.45× element matching player's lowest Magic Resistance; Starfall = 1.60× Earth + Stun 1.0s

### Boss component

**Zenith Core**

### Unique equipment hook

**Zenith Staff / endgame unique equipment hook**

## Dungeon encounter order


| Encounter | Enemy |
|---|---|
| 1 | Nexus Guardian |
| 2 | Nexus Hierophant |
| 3 | Astral Behemoth |
| 4 | The Zenith Warden |

---

# 33. DUNGEON ORDER SUMMARY


| Tier | Dungeon | Fixed Encounter Order |
|---|---|---|
| T1 | Ruined Watch | Watch Deserter → Tower Bowman → Ironjaw Boar → Captain Veyr |
| T2 | Drowned Burrow | Drowned Stalker → Fen Channeler → Mirecoil Serpent → Miremother Ilyss |
| T3 | Hollow Forge | Forge Thrall → Cinder Smith → Graniteback Ram → Forgemaster Korr |
| T4 | Mooncrypt | Crypt Sentinel → Moon Priest → Moonbound Knight → The Pale Castellan |
| T5 | Embervault | Ember Guard → Pyre Channeler → Magmahorn → Cindermaw |
| T6 | Frostspire | Frost Warden → Glacial Adept → Whitehorn Mammoth → Winter Matriarch |
| T7 | Tempest Bastion | Tempest Guard → Storm Savant → Stormcoil Viper → Skybreaker Raal |
| T8 | Aetherglass Sanctum | Aetherglass Sentinel → Prismatic Channeler → Prismcoil Serpent → Aetherbound Oracle |
| T9 | Umbral Citadel | Citadel Reaper → Hollow Magus → Nightglass Devourer → The Hollow Regent |
| T10 | Astral Nexus | Nexus Guardian → Nexus Hierophant → Astral Behemoth → The Zenith Warden |

# 34. NORMAL ENEMY FARMING

Normal Area enemies:

- respawn indefinitely;
- can be individually selected;
- use their deterministic sequence from Step 1 on every spawn;
- drop normal Gold/Offering loot;
- contribute Bestiary kill count.

The player may farm one enemy for:

- Offering supply;
- Gold;
- Guild task later;
- rare component later.


# 35. ELITE FARMING

After first unlock, Elite remains farmable.

Elite:

- has substantially higher HP class;
- has longer/more dangerous sequence;
- drops Elite Component;
- can later appear in Slayer's Guild assignments.

Elite does not need a separate random spawn chance.

The player deliberately selects it.


# 36. BESTIARY DATA

Every enemy Bestiary entry should show:

- portrait/icon;
- tags;
- Combat Style;
- Basic Damage Type;
- HP class / eventually exact HP;
- Accuracy;
- Min/Max Hit;
- Melee/Ranged/Magic Evasion;
- **all nine exact Resistances**;
- deterministic sequence;
- every Special;
- statuses;
- drops;
- Offering category/value;
- kill count;
- fastest kill later;
- expected kill time with current preset;
- expected Food/Ammo/Rune/Devotion burn.

Baseline weakness information is not hidden behind repeated deaths.


# 37. RESISTANCE UI

Compact enemy resistance grid:

## Melee

Slash / Stab / Crush

## Ranged

Pierce / Puncture

## Magic

Air / Fire / Water / Earth

Each cell shows:

- percentage;
- resistance/weakness state;
- tooltip.

Suggested labels:

- **Vulnerable** < 0%
- **Neutral** 0–9%
- **Resistant** 10–24%
- **Highly Resistant** 25%+

These labels are UI only.

Exact value remains authoritative.


# 38. SEQUENCE UI

Before combat:

show full known loop.

Example:

`Bite → Bite → Iron Charge → repeat`

During combat:

- Current Action highlighted;
- Next Action highlighted;
- later steps visible in dimmer form.

Boss:

show current phase plus phase-transition condition.

This supports deliberate:

- Auto Eat interval;
- Food choice;
- defensive Devotion;
- resistance setup.


# 39. STATUS RULES IN CONTENT

This baseline content uses existing Combat Core statuses only:

- Stun;
- Bleed;
- Burn;
- Poison;
- Chill;
- Resistance Break;
- Accuracy Down;
- Evasion Down.

Do not create a new status keyword every time a monster needs flavor.

A new status requires a separate mechanical justification.


# 40. POISON

Poison is used sparingly by:

- Mirecoil Serpent;
- Stormcoil Viper;
- other future venomous enemies.

Baseline poison examples use:

**percentage of Max HP over time**

because it stays meaningful across tiers.

Exact percentages are later balance targets.

Alchemy Remedies may later counter Poison through existing Remedy rules.


# 41. BURN

Fire enemies can apply Burn.

Burn:

- uses Combat Core periodic-damage rules;
- cannot Crit;
- should clearly state source hit percentage and duration.

Magic player Fire Burn and enemy Burn use the same status framework, but separate source IDs.


# 42. CHILL

Frost/Water content can apply Chill.

Chill:

- increases player action time;
- is especially dangerous for slow Heavy Crossbow/Staff builds;
- should be visible in Combat Analytics.

This creates real value for:

- Water/status resistance;
- faster weapons;
- defensive preparation.


# 43. BOSS PROGRESSION FLAGS

Store:

- Boss ID;
- first-kill flag;
- kill count;
- fastest kill later.

First kill grants:

- protected Boss Component;
- Tier progression flag.

Do not require the player to consume the Boss Component to unlock the next Tier.

Progression flag and item are separate.


# 44. FIRST-KILL SAFETY

If Boss dies:

grant first-kill progression before any post-kill UI transition.

Do not risk:

- boss dies;
- save interruption;
- component exists but Tier remains locked.

Boss first-kill flag should be one atomic progression event.


# 45. GUILD INTEGRATION HOOKS

Combat Content exposes tags/events only.

## Slayer's Guild

Can reference:

- enemy ID;
- tags;
- Area;
- Elite;
- Boss;
- kill event.

Guild owns:

- XP;
- ranks;
- tasks;
- currency;
- rerolls;
- block list.

## Wizard's Guild

Can reference:

- Magic enemy;
- Magic kill;
- elemental kill condition;
- spell used.

## Archer's Guild

Can reference:

- Ranged enemy;
- bow/crossbow weapon tags;
- Ammo used;
- ranged kill condition.

## Craftsman's Guild

May later request:

- Boss Components;
- Elite Components;
- crafted equipment.

Do not put Guild progression inside Combat content data.


# 46. SLAYER ELIGIBILITY

Baseline:

- normal enemies: eligible;
- elites: eligible at higher Guild ranks later;
- dungeon normal enemies: optional task targets later;
- bosses: separate boss-contract category later.

No Slayer Guild details are locked here.


# 47. COMBAT LOOT VS PROFESSIONS

Combat loot should complement professions.

Avoid normal monsters dropping large stacks of:

- current-tier Ore;
- current-tier Logs;
- Cloth;
- Leather;
- finished Food;
- finished Runes.

Exceptions can exist when thematically important, but should not become better primary supply than the profession itself.

Combat primarily supplies:

- Gold;
- Offerings;
- monster components;
- unique equipment hooks.


# 48. UNIQUE EQUIPMENT CONTENT HOOKS

This document deliberately reserves a few unique items such as:

- Mirecoil Whip;
- Toxic/Venomglass Blowpipe;
- Moonward Shield;
- Oracle Magic weapon;
- Zenith Staff.

These do **not** require new global weapon families.

Each later unique item can define its own:

- style;
- hands;
- damage type;
- interval;
- resource rule;
- Special;
- passive.

Exact stats come later.


# 49. NO RANDOM ENEMY ACTION AI

Baseline prohibited:

- `30% chance to Slam`
- `20% chance to Heal`
- randomly selected Special each action.

If randomness is ever introduced later:

it must be explicit rare content, not the default combat engine.

Current baseline is deterministic sequence combat.


# 50. PHASE TRANSITIONS

Boss phase transitions are condition-based and deterministic.

Typical:

- HP threshold.

A phase transition:

- swaps to the new sequence;
- starts at Step 1 of that phase unless explicitly stated.

Do not randomly enter/exit phases.


# 51. MULTI-ELEMENT ENEMIES

Some late enemies use multiple elemental actions.

They still have:

- one Primary Combat Style;
- one explicit action sequence.

Example:

Aether Seer:

Air → Water → Earth → Fire → repeat.

This makes full elemental resistance planning relevant.


# 52. LATE CONTENT DOES NOT ADD NEW BASELINE DAMAGE TYPES

T8–T10 names such as:

- Aether;
- Umbral;
- Astral

are themes/materials.

They do not automatically create:

- Aether damage;
- Umbral damage;
- Astral damage.

Combat damage remains:

- Slash;
- Stab;
- Crush;
- Pierce;
- Puncture;
- Air;
- Fire;
- Water;
- Earth.

This keeps the resistance system readable.


# 53. FUTURE POST-100 CONTENT

After T10:

do not automatically create:

T11 metal + T11 area + T11 Rune grade forever.

Future endless/endgame content can reuse:

- existing Areas;
- existing enemy archetypes;
- upscaled encounters;
- anomalies/modifiers;
- special Boss variants.

That system is outside this baseline Combat Content MD.


# 54. COMBAT CONTENT UI

Main Combat content browser:

- Tier filter;
- Area/Dungeon filter;
- style icon;
- damage-type icon;
- resistance weakness preview;
- Elite/Boss marker;
- Guild task marker later.

Selecting an enemy opens:

- inspection;
- sequence;
- drops;
- Bestiary statistics;
- current-preset analytics.


# 55. DUNGEON UI

Dungeon card shows:

- encounter count;
- ordered enemy portraits;
- Boss;
- known phase count;
- first-clear reward;
- completion count;
- supply estimate later.

No random room generation baseline.


# 56. BOSS UI

Boss inspection emphasizes:

- phase thresholds;
- sequence;
- largest Special;
- damage types;
- exact Resistances;
- statuses;
- unique drop hooks.

The player should be able to prepare without reading an external wiki.


# 57. DEVTOOLS

Required:

- unlock Tier;
- lock Tier;
- first-kill Boss flag;
- spawn any normal/Elite/Dungeon/Boss;
- force sequence step;
- set Boss phase;
- show final nine Resistances after overrides;
- force drop table;
- force Elite Component;
- force Boss Component;
- reset Bestiary;
- simulate fixed number of enemy actions;
- simulate Dungeon from encounter N.


# 58. VALIDATION RULES

Before implementation/content sync is marked complete:

1. Every enemy has one Primary Style.
2. Every enemy has one Basic Damage Type.
3. Every enemy resolves to all nine Resistance values.
4. Every enemy has deterministic Action Sequence.
5. Every named Special has an action definition.
6. Every Elite has an Elite Component.
7. Every Boss has a protected Boss Component.
8. Every Boss has first-kill progression flag.
9. Every Dungeon has fixed ordered encounters.
10. No T1–T10 baseline enemy uses undefined damage type.
11. No normal Combat drop replaces a profession's core economy.
12. Offering category resolves to a valid Offering item.
13. No boss component defaults to Auto Offer.
14. Unique weapon hook does not create unnecessary weapon family.
15. Every T2–T10 Tier has previous-Boss dependency.


# 59. LOCKED BASELINE

1. Ten baseline Combat Tiers.
2. One normal Combat Area per Tier.
3. Four normal farm enemies per Tier.
4. One farmable Elite per Tier.
5. One Dungeon per Tier.
6. Two unique Dungeon enemies per Tier.
7. Tier Elite also appears as Dungeon encounter 3.
8. One progression Boss per Tier.
9. T1 open from Combat start.
10. T2–T10 require previous Boss + offensive skill threshold.
11. Every enemy has all nine Resistances.
12. Broad enemy triangle: Melee strong vs Ranged / weak Magic; Ranged strong vs Magic / weak Melee; Magic strong vs Melee / weak Ranged.
13. Exact individual damage-type values may override broad profile.
14. Every enemy uses deterministic sequence.
15. Bosses use deterministic phases.
16. Full sequence is inspectable.
17. Current + Next enemy action appear in Combat UI.
18. Normal combat loot does not replace core profession gathering/crafting.
19. Offering loot feeds Devotion.
20. Elite Components feed future special equipment/Guild content.
21. Boss Components are protected.
22. Boss first kill unlocks progression independently of the item.
23. Unique weapons do not require new global families.
24. No Arcane/Aether/Umbral/Astral baseline damage type.
25. Final HP/Accuracy/Damage/drop-rate balance waits until playable.


# 60. NEXT STEP AFTER THIS MD

Once this Combat Content structure is accepted, the remaining large Combat design work is no longer the core engine.

The next candidates are:

## A. Unique Combat Equipment

Turn reserved Boss/Elite hooks into real items:
- Whips;
- Blowpipe;
- boss weapons;
- shields;
- Wards;
- unique armor.

## B. Guilds

- Slayer's Guild
- Wizard's Guild
- Archer's Guild
- Craftsman's Guild

## C. Implementation

At that point the game has enough complete design to start making Combat actually playable.

Final numeric balance comes **after** that.

