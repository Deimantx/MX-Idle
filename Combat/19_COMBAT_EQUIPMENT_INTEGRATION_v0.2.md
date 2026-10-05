# 19 — COMBAT EQUIPMENT INTEGRATION

**Status:** Complete Baseline Design Draft  
**Version:** 0.2 — Corrected Armor Defence Triangle  
**References:** `18_COMBAT_CORE_v1.1.md`, Smithing, Fletching, Leatherworking, Tailoring, Runecrafting, Jewelcrafting, Item/Recipe Registries  
**Purpose:** Define deterministic T1–T10 baseline combat weapons, Ammo, armor, off-hands, Magic weapons, exact stats, equip requirements, ownership and recipes without turning weapon archetypes into a closed taxonomy.

---

# 1. DESIGN INTENT

This document creates the **reliable crafted combat baseline**.

It does **not** define every weapon the game will ever contain.

The baseline economy provides:

- four common crafted Melee weapon lines;
- four existing crafted Ranged weapon lines;
- two crafted Magic weapon lines;
- Heavy / Ranged / Magic crafted armor;
- one deterministic baseline off-hand line for each style;
- existing Jewelcrafting Ring/Necklace progression.

Combat/Boss/Guild content can later add:

- Whips;
- Toxic Blowpipes;
- boss weapons;
- relics;
- unusual one-off weapons;
- hybrid weapons;
- non-standard armor.

A unique weapon does **not** require a new global weapon family.

The common lines in this document are scalable crafting templates, not the full universe of equipment.

# 2. NUMERICAL STATUS

The values below are **real simulation-ready baseline numbers**.

They are no longer placeholders such as:

- Fast;
- High Accuracy;
- Strong defense.

They are intended to be entered into the eventual equipment registry and simulated.

However, global balance may later tune an entire column/curve after:

- monsters;
- spells;
- Food;
- Devotion;
- bosses

are numerically built.

If tuning is needed, prefer changing global tier curves rather than hand-changing hundreds of unrelated items.

# 3. EQUIPMENT OWNERSHIP

| Equipment Category | Canonical Producer | Notes |
|---|---|---|
| Melee baseline weapons | Smithing | Sword / Battle Axe / Mace / Spear deterministic T1–T10 baseline |
| Heavy armor | Smithing | Head / unified Armor / Hands / Feet |
| Melee Shield | Smithing | 1H Melee defensive off-hand |
| Ranged weapons | Fletching | Existing 4 parallel baseline archetypes |
| Ranged armor | Leatherworking | Head / unified Armor / Hands / Feet |
| Ranged Guard | Leatherworking | 1H Ranged off-hand baseline |
| Magic weapons | Runecrafting final assembly | Fletching Utility Blank + Jewelcrafting Gem + Runes; not a new profession |
| Magic armor | Tailoring | Head / unified Armor / Hands / Feet |
| Magic Ward | Runecrafting final assembly | Metal + Jewelcrafting Gem + Runes |
| Combat Ring/Necklace | Jewelcrafting | Existing modular Frame/Gem system remains canonical |

# 4. COMBAT SLOT NORMALIZATION

Combat Core v1.1 uses one **Armor** slot rather than separate Body + Legs.

Older profession documents were written before that decision.

Combat armor therefore uses four defensive slots:

| Combat Slot | Heavy baseline | Ranged baseline | Magic baseline |
|---|---|---|---|
| Head | Helm | Hood | Hood |
| Armor | Plate Armor | Leather Armor | Robes |
| Hands | Gauntlets | Gloves | Gloves |
| Feet | Greaves | Boots | Slippers |

The old deterministic material investment is preserved exactly when Body + Legs are merged.

| Old profession-doc combat pieces | New Combat item | Material rule |
|---|---|---|
| Smithing Chestplate + Legguards | Plate Armor | 7 + 5 = 12 matching Ingots |
| Leatherworking Jerkin + Leggings | Leather Armor | 5 + 4 = 9 matching Leather |
| Tailoring Robe + Legwraps | Robes | 5 + 4 = 9 matching Cloth |

This merge applies only to **combat armor**.

Profession clothing can still use:

- Body;
- Legs

as separate profession-equipment slots.

# 5. ACCURACY / EVASION INTEGRATION

| Derived Stat | Equipment-integration baseline |
|---|---|
| Melee Accuracy | 100 + Attack × 6 + Weapon Accuracy Bonus + other flat Accuracy; then % modifiers |
| Ranged Accuracy | 100 + Ranged × 6 + Weapon Accuracy Bonus + other flat Accuracy; then % modifiers |
| Magic Accuracy | 100 + Magic × 6 + Weapon Accuracy Bonus + other flat Accuracy; then % modifiers |
| Melee Evasion | 100 + Defence × 4 + Melee Evasion from gear; then % modifiers |
| Ranged Evasion | 100 + Defence × 4 + Ranged Evasion from gear; then % modifiers |
| Magic Evasion | 100 + Defence × 4 + Magic Evasion from gear; then % modifiers |
| Melee Max Hit | Weapon Power × (1 + Attack/100) × damage modifiers |
| Ranged Max Hit | (Weapon Power + Ammo Power) × (1 + Ranged/100) × damage modifiers |
| Magic Max Hit | Spell Base Power × (1 + Magic/100) × (1 + Spell Damage %) × other modifiers |

The existing Combat Core Hit Chance formula remains unchanged.

This document only locks how equipment contributes concrete rating values.

These formulas make weapon Accuracy and armor Evasion directly simulation-ready.

# 6. COMMON WEAPON ARCHETYPES ARE OPTIONAL

Sword, Axe, Mace, Spear, Shortbow, Longbow, Light Crossbow, Heavy Crossbow, Wand and Staff are **common baseline templates**.

They are not mandatory classifications for every weapon.

A standalone item can have:

- no archetype;
- its own stat block;
- its own resource rule;
- its own Special;
- its own Stances.

Examples:

| Example | Classification | Rule |
|---|---|---|
| Whip | Standalone Melee weapon | Defines own hands/type/interval/power/accuracy/Special; no new `Whip family` required |
| Toxic Blowpipe | Standalone Ranged weapon | Can define its own Ammo/resource rule, Puncture/Pierce type, passive toxin behavior and Special |
| Boss relic weapon | Standalone | May borrow an archetype or fully override it |
| Hybrid future weapon | Standalone / hybrid | May use `damageComponents[]` later; not part of baseline crafted ladders |

# 7. T1–T10 MELEE WEAPONS — EXACT STATS

| Tier | Weapon | Attack Req | Hands | Damage Type | Weapon Power | Accuracy Bonus | Interval | Passive Stat | Special |
|---|---|---|---|---|---|---|---|---|---|
| T1 | Copper Sword | 5 | 1H | Slash / Stab | 18 | 84 | 2.40s | +1.0 pp Crit Rate | Precision Lunge |
| T1 | Copper Battle Axe | 5 | 1H | Slash | 21 | 72 | 2.80s | +10% Critical Damage | Executioner's Chop |
| T1 | Copper Mace | 5 | 1H | Crush | 19 | 77 | 2.70s | +3 pp Crush Penetration | Concussive Blow |
| T1 | Copper Spear | 5 | 2H | Stab | 18 | 90 | 2.60s | +5 pp Stab Penetration | Impale |
| T2 | Iron Sword | 15 | 1H | Slash / Stab | 24 | 105 | 2.40s | +1.0 pp Crit Rate | Precision Lunge |
| T2 | Iron Battle Axe | 15 | 1H | Slash | 28 | 90 | 2.80s | +10% Critical Damage | Executioner's Chop |
| T2 | Iron Mace | 15 | 1H | Crush | 25 | 96 | 2.70s | +3 pp Crush Penetration | Concussive Blow |
| T2 | Iron Spear | 15 | 2H | Stab | 24 | 112 | 2.60s | +5 pp Stab Penetration | Impale |
| T3 | Cobalt Sword | 25 | 1H | Slash / Stab | 31 | 131 | 2.40s | +1.0 pp Crit Rate | Precision Lunge |
| T3 | Cobalt Battle Axe | 25 | 1H | Slash | 36 | 112 | 2.80s | +10% Critical Damage | Executioner's Chop |
| T3 | Cobalt Mace | 25 | 1H | Crush | 33 | 120 | 2.70s | +4 pp Crush Penetration | Concussive Blow |
| T3 | Cobalt Spear | 25 | 2H | Stab | 30 | 140 | 2.60s | +6 pp Stab Penetration | Impale |
| T4 | Argent Sword | 35 | 1H | Slash / Stab | 39 | 163 | 2.40s | +1.0 pp Crit Rate | Precision Lunge |
| T4 | Argent Battle Axe | 35 | 1H | Slash | 45 | 140 | 2.80s | +10% Critical Damage | Executioner's Chop |
| T4 | Argent Mace | 35 | 1H | Crush | 41 | 149 | 2.70s | +4 pp Crush Penetration | Concussive Blow |
| T4 | Argent Spear | 35 | 2H | Stab | 38 | 174 | 2.60s | +6 pp Stab Penetration | Impale |
| T5 | Emberite Sword | 45 | 1H | Slash / Stab | 48 | 200 | 2.40s | +1.0 pp Crit Rate | Precision Lunge |
| T5 | Emberite Battle Axe | 45 | 1H | Slash | 56 | 171 | 2.80s | +10% Critical Damage | Executioner's Chop |
| T5 | Emberite Mace | 45 | 1H | Crush | 51 | 182 | 2.70s | +5 pp Crush Penetration | Concussive Blow |
| T5 | Emberite Spear | 45 | 2H | Stab | 47 | 213 | 2.60s | +7 pp Stab Penetration | Impale |
| T6 | Frostsilver Sword | 55 | 1H | Slash / Stab | 58 | 242 | 2.40s | +1.0 pp Crit Rate | Precision Lunge |
| T6 | Frostsilver Battle Axe | 55 | 1H | Slash | 67 | 207 | 2.80s | +10% Critical Damage | Executioner's Chop |
| T6 | Frostsilver Mace | 55 | 1H | Crush | 61 | 221 | 2.70s | +5 pp Crush Penetration | Concussive Blow |
| T6 | Frostsilver Spear | 55 | 2H | Stab | 57 | 258 | 2.60s | +7 pp Stab Penetration | Impale |
| T7 | Stormiron Sword | 65 | 1H | Slash / Stab | 69 | 289 | 2.40s | +1.0 pp Crit Rate | Precision Lunge |
| T7 | Stormiron Battle Axe | 65 | 1H | Slash | 80 | 248 | 2.80s | +10% Critical Damage | Executioner's Chop |
| T7 | Stormiron Mace | 65 | 1H | Crush | 73 | 264 | 2.70s | +6 pp Crush Penetration | Concussive Blow |
| T7 | Stormiron Spear | 65 | 2H | Stab | 68 | 308 | 2.60s | +8 pp Stab Penetration | Impale |
| T8 | Aetherite Sword | 75 | 1H | Slash / Stab | 81 | 341 | 2.40s | +1.0 pp Crit Rate | Precision Lunge |
| T8 | Aetherite Battle Axe | 75 | 1H | Slash | 94 | 292 | 2.80s | +10% Critical Damage | Executioner's Chop |
| T8 | Aetherite Mace | 75 | 1H | Crush | 86 | 312 | 2.70s | +6 pp Crush Penetration | Concussive Blow |
| T8 | Aetherite Spear | 75 | 2H | Stab | 79 | 364 | 2.60s | +8 pp Stab Penetration | Impale |
| T9 | Umbral Sword | 85 | 1H | Slash / Stab | 94 | 399 | 2.40s | +1.0 pp Crit Rate | Precision Lunge |
| T9 | Umbral Battle Axe | 85 | 1H | Slash | 109 | 342 | 2.80s | +10% Critical Damage | Executioner's Chop |
| T9 | Umbral Mace | 85 | 1H | Crush | 100 | 365 | 2.70s | +7 pp Crush Penetration | Concussive Blow |
| T9 | Umbral Spear | 85 | 2H | Stab | 92 | 426 | 2.60s | +9 pp Stab Penetration | Impale |
| T10 | Astralite Sword | 95 | 1H | Slash / Stab | 108 | 462 | 2.40s | +1.0 pp Crit Rate | Precision Lunge |
| T10 | Astralite Battle Axe | 95 | 1H | Slash | 125 | 396 | 2.80s | +10% Critical Damage | Executioner's Chop |
| T10 | Astralite Mace | 95 | 1H | Crush | 114 | 422 | 2.70s | +8 pp Crush Penetration | Concussive Blow |
| T10 | Astralite Spear | 95 | 2H | Stab | 106 | 493 | 2.60s | +10 pp Stab Penetration | Impale |

# 8. MELEE BASELINE IDENTITIES

## Sword

- 1H;
- flexible Slash/Stab Stances;
- slightly above-baseline Accuracy;
- small Crit bonus;
- Shield compatible.

## Battle Axe

- 1H;
- Slash;
- highest normal 1H Melee Power;
- lower Accuracy;
- higher Critical Damage;
- execute Special.

## Mace

- 1H;
- Crush;
- moderate Power;
- built-in Crush Penetration;
- resistance-break Special.

## Spear

- 2H;
- Stab;
- high Accuracy;
- Stab Penetration;
- no Off-hand.

# 9. MELEE WEAPON RECIPES

| Tier | Weapon | Owner | Craft Lvl | Recipe | Output |
|---|---|---|---|---|---|
| T1 | Copper Sword | Smithing | 5 | 4 Copper Ingots | 1 |
| T1 | Copper Battle Axe | Smithing | 5 | 4 Copper Ingots | 1 |
| T1 | Copper Mace | Smithing | 5 | 4 Copper Ingots | 1 |
| T1 | Copper Spear | Smithing | 5 | 3 Copper Ingots + 1 Alder Shaft Bundle | 1 |
| T2 | Iron Sword | Smithing | 15 | 4 Iron Ingots | 1 |
| T2 | Iron Battle Axe | Smithing | 15 | 4 Iron Ingots | 1 |
| T2 | Iron Mace | Smithing | 15 | 4 Iron Ingots | 1 |
| T2 | Iron Spear | Smithing | 15 | 3 Iron Ingots + 1 Oak Shaft Bundle | 1 |
| T3 | Cobalt Sword | Smithing | 25 | 4 Cobalt Ingots | 1 |
| T3 | Cobalt Battle Axe | Smithing | 25 | 4 Cobalt Ingots | 1 |
| T3 | Cobalt Mace | Smithing | 25 | 4 Cobalt Ingots | 1 |
| T3 | Cobalt Spear | Smithing | 25 | 3 Cobalt Ingots + 1 Ironwood Shaft Bundle | 1 |
| T4 | Argent Sword | Smithing | 35 | 4 Argent Ingots | 1 |
| T4 | Argent Battle Axe | Smithing | 35 | 4 Argent Ingots | 1 |
| T4 | Argent Mace | Smithing | 35 | 4 Argent Ingots | 1 |
| T4 | Argent Spear | Smithing | 35 | 3 Argent Ingots + 1 Silverpine Shaft Bundle | 1 |
| T5 | Emberite Sword | Smithing | 45 | 4 Emberite Ingots | 1 |
| T5 | Emberite Battle Axe | Smithing | 45 | 4 Emberite Ingots | 1 |
| T5 | Emberite Mace | Smithing | 45 | 4 Emberite Ingots | 1 |
| T5 | Emberite Spear | Smithing | 45 | 3 Emberite Ingots + 1 Emberwood Shaft Bundle | 1 |
| T6 | Frostsilver Sword | Smithing | 55 | 4 Frostsilver Ingots | 1 |
| T6 | Frostsilver Battle Axe | Smithing | 55 | 4 Frostsilver Ingots | 1 |
| T6 | Frostsilver Mace | Smithing | 55 | 4 Frostsilver Ingots | 1 |
| T6 | Frostsilver Spear | Smithing | 55 | 3 Frostsilver Ingots + 1 Frostbark Shaft Bundle | 1 |
| T7 | Stormiron Sword | Smithing | 65 | 4 Stormiron Ingots | 1 |
| T7 | Stormiron Battle Axe | Smithing | 65 | 4 Stormiron Ingots | 1 |
| T7 | Stormiron Mace | Smithing | 65 | 4 Stormiron Ingots | 1 |
| T7 | Stormiron Spear | Smithing | 65 | 3 Stormiron Ingots + 1 Stormwillow Shaft Bundle | 1 |
| T8 | Aetherite Sword | Smithing | 75 | 4 Aetherite Ingots | 1 |
| T8 | Aetherite Battle Axe | Smithing | 75 | 4 Aetherite Ingots | 1 |
| T8 | Aetherite Mace | Smithing | 75 | 4 Aetherite Ingots | 1 |
| T8 | Aetherite Spear | Smithing | 75 | 3 Aetherite Ingots + 1 Aetherwood Shaft Bundle | 1 |
| T9 | Umbral Sword | Smithing | 85 | 4 Umbral Ingots | 1 |
| T9 | Umbral Battle Axe | Smithing | 85 | 4 Umbral Ingots | 1 |
| T9 | Umbral Mace | Smithing | 85 | 4 Umbral Ingots | 1 |
| T9 | Umbral Spear | Smithing | 85 | 3 Umbral Ingots + 1 Umbralwood Shaft Bundle | 1 |
| T10 | Astralite Sword | Smithing | 95 | 4 Astralite Ingots | 1 |
| T10 | Astralite Battle Axe | Smithing | 95 | 4 Astralite Ingots | 1 |
| T10 | Astralite Mace | Smithing | 95 | 4 Astralite Ingots | 1 |
| T10 | Astralite Spear | Smithing | 95 | 3 Astralite Ingots + 1 Starwood Shaft Bundle | 1 |

This intentionally preserves Smithing's simple deterministic baseline.

Advanced Alloys are reserved for:

- selected upgraded weapons;
- unique gear;
- boss-component upgrades;
- late specialty equipment.

Do not create an Alloy duplicate of every baseline weapon automatically.

# 10. BASELINE SPECIAL ATTACKS — EXACT EFFECTS

| Special | Stamina | Damage | Type | Extra | Resource |
|---|---|---|---|---|---|
| Sword — Precision Lunge | 35 | 1.35× | Stab | +25% Accuracy | Can crit; uses Stab regardless of current Sword stance |
| Battle Axe — Executioner's Chop | 50 | 1.65× | Slash | +25% final Special damage if target <30% HP | Can crit |
| Mace — Concussive Blow | 45 | 1.35× | Crush | On hit: -15 pp Slash/Stab/Crush Resistance for 8s | Can crit |
| Spear — Impale | 40 | 1.40× | Stab | +15 pp Stab Penetration for this hit | Can crit |
| Shortbow — Rapid Volley | 35 | 3 × 0.55× | Pierce | 3 separate hit/crit rolls; consumes 3 Arrows | Total potential 1.65× before crits |
| Longbow — Power Shot | 45 | 1.75× | Pierce | +20% Accuracy; +8 pp Pierce Penetration | Consumes 1 Arrow |
| Light Crossbow — Double Tap | 40 | 2 × 0.90× | Puncture | 2 separate hit/crit rolls | Consumes 2 Bolts |
| Heavy Crossbow — Penetrating Bolt | 55 | 2.00× | Puncture | +20 pp Puncture Penetration | Consumes 1 Bolt |
| Wand — Elemental Surge | 40 | 1.50× spell | Selected spell type | +10% Accuracy | Consumes normal spell Runes +1 matching primary Rune |
| Staff — Grand Cast | 55 | 1.90× spell | Selected spell type | +10 pp matching elemental Penetration | Consumes normal spell Runes +1 Arcane Rune |

All direct Special hits can Crit unless their item data later explicitly disables Crit.

A unique standalone weapon may define a completely different Special without creating a new family.

# 11. RANGED AMMO — EXACT COMBAT STATS

| Tier | Ammo | Type | Ammo Power | Ranged Req | Use | Recipe |
|---|---|---|---|---|---|---|
| T1 | Copper Arrows | Pierce | 4 | 5 | 1 per Basic | Fletching recipe already canonical |
| T1 | Copper Bolts | Puncture | 5 | 6 | 1 per Basic | Fletching recipe already canonical |
| T2 | Iron Arrows | Pierce | 5 | 15 | 1 per Basic | Fletching recipe already canonical |
| T2 | Iron Bolts | Puncture | 7 | 16 | 1 per Basic | Fletching recipe already canonical |
| T3 | Cobalt Arrows | Pierce | 7 | 25 | 1 per Basic | Fletching recipe already canonical |
| T3 | Cobalt Bolts | Puncture | 9 | 26 | 1 per Basic | Fletching recipe already canonical |
| T4 | Argent Arrows | Pierce | 9 | 35 | 1 per Basic | Fletching recipe already canonical |
| T4 | Argent Bolts | Puncture | 11 | 36 | 1 per Basic | Fletching recipe already canonical |
| T5 | Emberite Arrows | Pierce | 11 | 45 | 1 per Basic | Fletching recipe already canonical |
| T5 | Emberite Bolts | Puncture | 14 | 46 | 1 per Basic | Fletching recipe already canonical |
| T6 | Frostsilver Arrows | Pierce | 13 | 55 | 1 per Basic | Fletching recipe already canonical |
| T6 | Frostsilver Bolts | Puncture | 17 | 56 | 1 per Basic | Fletching recipe already canonical |
| T7 | Stormiron Arrows | Pierce | 16 | 65 | 1 per Basic | Fletching recipe already canonical |
| T7 | Stormiron Bolts | Puncture | 21 | 66 | 1 per Basic | Fletching recipe already canonical |
| T8 | Aetherite Arrows | Pierce | 19 | 75 | 1 per Basic | Fletching recipe already canonical |
| T8 | Aetherite Bolts | Puncture | 25 | 76 | 1 per Basic | Fletching recipe already canonical |
| T9 | Umbral Arrows | Pierce | 22 | 85 | 1 per Basic | Fletching recipe already canonical |
| T9 | Umbral Bolts | Puncture | 30 | 86 | 1 per Basic | Fletching recipe already canonical |
| T10 | Astralite Arrows | Pierce | 26 | 95 | 1 per Basic | Fletching recipe already canonical |
| T10 | Astralite Bolts | Puncture | 36 | 96 | 1 per Basic | Fletching recipe already canonical |

Ranged Max Hit uses:

**Weapon Power + Ammo Power**

before Ranged skill scaling.

This keeps ammunition tier relevant even when the player already owns a strong weapon.

# 12. T1–T10 RANGED WEAPONS — EXACT STATS

| Tier | Weapon | Ranged Req | Hands | Type | Weapon Power | Accuracy Bonus | Interval | Passive Stat | Special |
|---|---|---|---|---|---|---|---|---|---|
| T1 | Alder Shortbow | 5 | 2H | Pierce | 14 | 80 | 2.00s | +1.0 pp Crit Rate | Rapid Volley |
| T1 | Birch Longbow | 8 | 2H | Pierce | 19 | 90 | 2.80s | +2 pp Pierce Penetration; +10% Crit Damage | Power Shot |
| T1 | Alder Light Crossbow | 6 | 1H | Puncture | 17 | 82 | 2.60s | +4 pp Puncture Penetration | Double Tap |
| T1 | Birch Heavy Crossbow | 9 | 2H | Puncture | 23 | 88 | 3.60s | +8 pp Puncture Penetration; +15% Crit Damage | Penetrating Bolt |
| T2 | Oak Shortbow | 15 | 2H | Pierce | 18 | 100 | 2.00s | +1.0 pp Crit Rate | Rapid Volley |
| T2 | Willow Longbow | 18 | 2H | Pierce | 25 | 112 | 2.80s | +2 pp Pierce Penetration; +10% Crit Damage | Power Shot |
| T2 | Oak Light Crossbow | 16 | 1H | Puncture | 23 | 102 | 2.60s | +4 pp Puncture Penetration | Double Tap |
| T2 | Willow Heavy Crossbow | 19 | 2H | Puncture | 31 | 110 | 3.60s | +8 pp Puncture Penetration; +15% Crit Damage | Penetrating Bolt |
| T3 | Ironwood Shortbow | 25 | 2H | Pierce | 23 | 125 | 2.00s | +1.0 pp Crit Rate | Rapid Volley |
| T3 | Cedar Longbow | 28 | 2H | Pierce | 33 | 140 | 2.80s | +3 pp Pierce Penetration; +10% Crit Damage | Power Shot |
| T3 | Ironwood Light Crossbow | 26 | 1H | Puncture | 29 | 128 | 2.60s | +5 pp Puncture Penetration | Double Tap |
| T3 | Cedar Heavy Crossbow | 29 | 2H | Puncture | 40 | 138 | 3.60s | +9 pp Puncture Penetration; +15% Crit Damage | Penetrating Bolt |
| T4 | Silverpine Shortbow | 35 | 2H | Pierce | 29 | 155 | 2.00s | +1.0 pp Crit Rate | Rapid Volley |
| T4 | Moonwood Longbow | 38 | 2H | Pierce | 41 | 174 | 2.80s | +3 pp Pierce Penetration; +10% Crit Damage | Power Shot |
| T4 | Silverpine Light Crossbow | 36 | 1H | Puncture | 37 | 158 | 2.60s | +5 pp Puncture Penetration | Double Tap |
| T4 | Moonwood Heavy Crossbow | 39 | 2H | Puncture | 51 | 170 | 3.60s | +9 pp Puncture Penetration; +15% Crit Damage | Penetrating Bolt |
| T5 | Emberwood Shortbow | 45 | 2H | Pierce | 36 | 190 | 2.00s | +1.0 pp Crit Rate | Rapid Volley |
| T5 | Cinderbark Longbow | 48 | 2H | Pierce | 50 | 213 | 2.80s | +4 pp Pierce Penetration; +10% Crit Damage | Power Shot |
| T5 | Emberwood Light Crossbow | 46 | 1H | Puncture | 46 | 194 | 2.60s | +6 pp Puncture Penetration | Double Tap |
| T5 | Cinderbark Heavy Crossbow | 49 | 2H | Puncture | 62 | 209 | 3.60s | +10 pp Puncture Penetration; +15% Crit Damage | Penetrating Bolt |
| T6 | Frostbark Shortbow | 55 | 2H | Pierce | 44 | 230 | 2.00s | +1.0 pp Crit Rate | Rapid Volley |
| T6 | Icewillow Longbow | 58 | 2H | Pierce | 61 | 258 | 2.80s | +4 pp Pierce Penetration; +10% Crit Damage | Power Shot |
| T6 | Frostbark Light Crossbow | 56 | 1H | Puncture | 55 | 235 | 2.60s | +6 pp Puncture Penetration | Double Tap |
| T6 | Icewillow Heavy Crossbow | 59 | 2H | Puncture | 75 | 253 | 3.60s | +11 pp Puncture Penetration; +15% Crit Damage | Penetrating Bolt |
| T7 | Stormwillow Shortbow | 65 | 2H | Pierce | 52 | 275 | 2.00s | +1.0 pp Crit Rate | Rapid Volley |
| T7 | Thunder Oak Longbow | 68 | 2H | Pierce | 72 | 308 | 2.80s | +5 pp Pierce Penetration; +10% Crit Damage | Power Shot |
| T7 | Stormwillow Light Crossbow | 66 | 1H | Puncture | 66 | 280 | 2.60s | +7 pp Puncture Penetration | Double Tap |
| T7 | Thunder Oak Heavy Crossbow | 69 | 2H | Puncture | 90 | 302 | 3.60s | +12 pp Puncture Penetration; +15% Crit Damage | Penetrating Bolt |
| T8 | Aetherwood Shortbow | 75 | 2H | Pierce | 61 | 325 | 2.00s | +1.0 pp Crit Rate | Rapid Volley |
| T8 | Prismwood Longbow | 78 | 2H | Pierce | 85 | 364 | 2.80s | +5 pp Pierce Penetration; +10% Crit Damage | Power Shot |
| T8 | Aetherwood Light Crossbow | 76 | 1H | Puncture | 77 | 332 | 2.60s | +7 pp Puncture Penetration | Double Tap |
| T8 | Prismwood Heavy Crossbow | 79 | 2H | Puncture | 105 | 358 | 3.60s | +13 pp Puncture Penetration; +15% Crit Damage | Penetrating Bolt |
| T9 | Umbralwood Shortbow | 85 | 2H | Pierce | 70 | 380 | 2.00s | +1.0 pp Crit Rate | Rapid Volley |
| T9 | Nightbark Longbow | 88 | 2H | Pierce | 99 | 426 | 2.80s | +6 pp Pierce Penetration; +10% Crit Damage | Power Shot |
| T9 | Umbralwood Light Crossbow | 86 | 1H | Puncture | 89 | 388 | 2.60s | +8 pp Puncture Penetration | Double Tap |
| T9 | Nightbark Heavy Crossbow | 89 | 2H | Puncture | 122 | 418 | 3.60s | +14 pp Puncture Penetration; +15% Crit Damage | Penetrating Bolt |
| T10 | Starwood Shortbow | 95 | 2H | Pierce | 81 | 440 | 2.00s | +1.0 pp Crit Rate | Rapid Volley |
| T10 | Astral Cedar Longbow | 98 | 2H | Pierce | 113 | 493 | 2.80s | +6 pp Pierce Penetration; +10% Crit Damage | Power Shot |
| T10 | Starwood Light Crossbow | 96 | 1H | Puncture | 103 | 449 | 2.60s | +9 pp Puncture Penetration | Double Tap |
| T10 | Astral Cedar Heavy Crossbow | 99 | 2H | Puncture | 140 | 484 | 3.60s | +15 pp Puncture Penetration; +15% Crit Damage | Penetrating Bolt |

# 13. RANGED WEAPON RECIPES

| Tier | Weapon | Fletching Lvl | Exact Recipe |
|---|---|---|---|
| T1 | Alder Shortbow | 5 | 2 Alder Bow Limbs + 1 Simple Bowstring |
| T1 | Alder Light Crossbow | 6 | 1 Alder Crossbow Stock + 1 Basic Trigger Assembly + 1 Simple Bowstring |
| T1 | Birch Longbow | 8 | 2 Birch Reinforced Limbs + 1 Simple Bowstring + 1 Resin |
| T1 | Birch Heavy Crossbow | 9 | 1 Birch Heavy Stock + 1 Basic Winch Assembly + 1 Simple Bowstring + 1 Resin |
| T2 | Oak Shortbow | 15 | 2 Oak Bow Limbs + 1 Simple Bowstring |
| T2 | Oak Light Crossbow | 16 | 1 Oak Crossbow Stock + 1 Basic Trigger Assembly + 1 Simple Bowstring |
| T2 | Willow Longbow | 18 | 2 Willow Reinforced Limbs + 1 Simple Bowstring + 1 Resin |
| T2 | Willow Heavy Crossbow | 19 | 1 Willow Heavy Stock + 1 Basic Winch Assembly + 1 Simple Bowstring + 1 Resin |
| T3 | Ironwood Shortbow | 25 | 2 Ironwood Bow Limbs + 1 Simple Bowstring |
| T3 | Ironwood Light Crossbow | 26 | 1 Ironwood Crossbow Stock + 1 Basic Trigger Assembly + 1 Simple Bowstring |
| T3 | Cedar Longbow | 28 | 2 Cedar Reinforced Limbs + 1 Simple Bowstring + 1 Resin |
| T3 | Cedar Heavy Crossbow | 29 | 1 Cedar Heavy Stock + 1 Basic Winch Assembly + 1 Simple Bowstring + 1 Resin |
| T4 | Silverpine Shortbow | 35 | 2 Silverpine Bow Limbs + 1 Reinforced Bowstring |
| T4 | Silverpine Light Crossbow | 36 | 1 Silverpine Crossbow Stock + 1 Reinforced Trigger Assembly + 1 Reinforced Bowstring |
| T4 | Moonwood Longbow | 38 | 2 Moonwood Reinforced Limbs + 1 Reinforced Bowstring + 1 Resin |
| T4 | Moonwood Heavy Crossbow | 39 | 1 Moonwood Heavy Stock + 1 Reinforced Winch Assembly + 1 Reinforced Bowstring + 1 Resin |
| T5 | Emberwood Shortbow | 45 | 2 Emberwood Bow Limbs + 1 Reinforced Bowstring |
| T5 | Emberwood Light Crossbow | 46 | 1 Emberwood Crossbow Stock + 1 Reinforced Trigger Assembly + 1 Reinforced Bowstring |
| T5 | Cinderbark Longbow | 48 | 2 Cinderbark Reinforced Limbs + 1 Reinforced Bowstring + 1 Resin |
| T5 | Cinderbark Heavy Crossbow | 49 | 1 Cinderbark Heavy Stock + 1 Reinforced Winch Assembly + 1 Reinforced Bowstring + 1 Resin |
| T6 | Frostbark Shortbow | 55 | 2 Frostbark Bow Limbs + 1 Reinforced Bowstring |
| T6 | Frostbark Light Crossbow | 56 | 1 Frostbark Crossbow Stock + 1 Reinforced Trigger Assembly + 1 Reinforced Bowstring |
| T6 | Icewillow Longbow | 58 | 2 Icewillow Reinforced Limbs + 1 Reinforced Bowstring + 1 Resin |
| T6 | Icewillow Heavy Crossbow | 59 | 1 Icewillow Heavy Stock + 1 Reinforced Winch Assembly + 1 Reinforced Bowstring + 1 Resin |
| T7 | Stormwillow Shortbow | 65 | 2 Stormwillow Bow Limbs + 1 Runic Bowstring |
| T7 | Stormwillow Light Crossbow | 66 | 1 Stormwillow Crossbow Stock + 1 Precision Trigger Assembly + 1 Runic Bowstring |
| T7 | Thunder Oak Longbow | 68 | 2 Thunder Oak Reinforced Limbs + 1 Runic Bowstring + 1 Resin |
| T7 | Thunder Oak Heavy Crossbow | 69 | 1 Thunder Oak Heavy Stock + 1 Runic Winch Assembly + 1 Runic Bowstring + 1 Resin |
| T8 | Aetherwood Shortbow | 75 | 2 Aetherwood Bow Limbs + 1 Runic Bowstring |
| T8 | Aetherwood Light Crossbow | 76 | 1 Aetherwood Crossbow Stock + 1 Precision Trigger Assembly + 1 Runic Bowstring |
| T8 | Prismwood Longbow | 78 | 2 Prismwood Reinforced Limbs + 1 Runic Bowstring + 1 Resin |
| T8 | Prismwood Heavy Crossbow | 79 | 1 Prismwood Heavy Stock + 1 Runic Winch Assembly + 1 Runic Bowstring + 1 Resin |
| T9 | Umbralwood Shortbow | 85 | 2 Umbralwood Bow Limbs + 1 Runic Bowstring |
| T9 | Umbralwood Light Crossbow | 86 | 1 Umbralwood Crossbow Stock + 1 Precision Trigger Assembly + 1 Runic Bowstring |
| T9 | Nightbark Longbow | 88 | 2 Nightbark Reinforced Limbs + 1 Runic Bowstring + 1 Resin |
| T9 | Nightbark Heavy Crossbow | 89 | 1 Nightbark Heavy Stock + 1 Runic Winch Assembly + 1 Runic Bowstring + 1 Resin |
| T10 | Starwood Shortbow | 95 | 2 Starwood Bow Limbs + 1 Astral Bowstring |
| T10 | Starwood Light Crossbow | 96 | 1 Starwood Crossbow Stock + 1 Astral Trigger Assembly + 1 Astral Bowstring |
| T10 | Astral Cedar Longbow | 98 | 2 Astral Cedar Reinforced Limbs + 1 Astral Bowstring + 1 Resin |
| T10 | Astral Cedar Heavy Crossbow | 99 | 1 Astral Cedar Heavy Stock + 1 Astral Winch Assembly + 1 Astral Bowstring + 1 Resin |

These recipes are intentionally aligned with the existing Fletching source-of-truth.

No new Ranged crafting profession is introduced.

# 14. RANGED WEAPON IDENTITY

## Shortbow

- fastest baseline Ranged weapon;
- lower Weapon Power;
- Pierce;
- mild Crit support;
- ideal sustained farming.

## Longbow

- slower;
- larger hits;
- highest baseline Bow Accuracy;
- Pierce Penetration;
- higher Critical Damage.

## Light Crossbow

- 1H;
- Puncture;
- baseline access to Ranged Off-hand;
- meaningful Penetration;
- middle attack speed.

## Heavy Crossbow

- 2H;
- slowest baseline Ranged weapon;
- largest Weapon Power;
- strongest normal Puncture Penetration;
- no Off-hand.

# 15. MAGIC WEAPON MODEL

Magic damage still comes from the selected spell.

Magic weapons do **not** lock the player to:

- Fire Wand;
- Water Staff;
- etc.

A Wand/Staff can cast any spell the player is allowed to use.

The spell chooses:

- Air;
- Fire;
- Water;
- Earth.

The weapon modifies:

- Magic Accuracy;
- Spell Damage;
- Cast Interval;
- Rune Preservation;
- Penetration;
- Special.

# 16. T1–T10 MAGIC WEAPONS — EXACT STATS

| Tier | Weapon | Magic Req | Hands | Cast Modifier | Accuracy Bonus | Spell Damage | Rune Pres. | Extra | Special |
|---|---|---|---|---|---|---|---|---|---|
| T1 | Alder Wand | 8 | 1H | -0.10s | 80 | +3% | +0 pp | +1.0 pp Crit Rate | Elemental Surge |
| T1 | Alder Staff | 10 | 2H | +0.10s | 90 | +6% | +2 pp | +2 pp elemental Penetration | Grand Cast |
| T2 | Oak Wand | 18 | 1H | -0.10s | 100 | +5% | +0 pp | +1.0 pp Crit Rate | Elemental Surge |
| T2 | Oak Staff | 20 | 2H | +0.10s | 112 | +9% | +3 pp | +2 pp elemental Penetration | Grand Cast |
| T3 | Ironwood Wand | 28 | 1H | -0.10s | 125 | +7% | +1 pp | +1.0 pp Crit Rate | Elemental Surge |
| T3 | Ironwood Staff | 30 | 2H | +0.10s | 140 | +12% | +4 pp | +3 pp elemental Penetration | Grand Cast |
| T4 | Silverpine Wand | 38 | 1H | -0.10s | 155 | +9% | +1 pp | +1.0 pp Crit Rate | Elemental Surge |
| T4 | Silverpine Staff | 40 | 2H | +0.10s | 174 | +15% | +5 pp | +3 pp elemental Penetration | Grand Cast |
| T5 | Emberwood Wand | 48 | 1H | -0.10s | 190 | +12% | +2 pp | +1.0 pp Crit Rate | Elemental Surge |
| T5 | Emberwood Staff | 50 | 2H | +0.10s | 213 | +19% | +6 pp | +4 pp elemental Penetration | Grand Cast |
| T6 | Frostbark Wand | 58 | 1H | -0.10s | 230 | +15% | +2 pp | +1.0 pp Crit Rate | Elemental Surge |
| T6 | Frostbark Staff | 60 | 2H | +0.10s | 258 | +23% | +7 pp | +5 pp elemental Penetration | Grand Cast |
| T7 | Stormwillow Wand | 68 | 1H | -0.10s | 275 | +18% | +3 pp | +1.0 pp Crit Rate | Elemental Surge |
| T7 | Stormwillow Staff | 70 | 2H | +0.10s | 308 | +27% | +8 pp | +6 pp elemental Penetration | Grand Cast |
| T8 | Aetherwood Wand | 78 | 1H | -0.10s | 325 | +21% | +3 pp | +1.0 pp Crit Rate | Elemental Surge |
| T8 | Aetherwood Staff | 80 | 2H | +0.10s | 364 | +32% | +9 pp | +7 pp elemental Penetration | Grand Cast |
| T9 | Umbralwood Wand | 88 | 1H | -0.10s | 380 | +25% | +4 pp | +1.0 pp Crit Rate | Elemental Surge |
| T9 | Umbralwood Staff | 90 | 2H | +0.10s | 426 | +37% | +10 pp | +8 pp elemental Penetration | Grand Cast |
| T10 | Starwood Wand | 98 | 1H | -0.10s | 440 | +30% | +5 pp | +1.0 pp Crit Rate | Elemental Surge |
| T10 | Starwood Staff | 100 | 2H | +0.10s | 493 | +43% | +12 pp | +10 pp elemental Penetration | Grand Cast |

# 17. MAGIC WEAPON RECIPES

| Tier | Weapon | Final Assembly | Lvl | Recipe |
|---|---|---|---|---|
| T1 | Alder Wand | Runecrafting | 8 | 1 Alder Utility Blank + 1 Faceted Opal + 4 Minor Arcane Runes + 2 Minor Spirit Runes |
| T1 | Alder Staff | Runecrafting | 10 | 2 Alder Utility Blanks + 1 Faceted Opal + 6 Minor Arcane Runes + 4 Minor Spirit Runes |
| T2 | Oak Wand | Runecrafting | 18 | 1 Oak Utility Blank + 1 Faceted Sapphire + 4 Lesser Arcane Runes + 2 Lesser Spirit Runes |
| T2 | Oak Staff | Runecrafting | 20 | 2 Oak Utility Blanks + 1 Faceted Sapphire + 6 Lesser Arcane Runes + 4 Lesser Spirit Runes |
| T3 | Ironwood Wand | Runecrafting | 28 | 1 Ironwood Utility Blank + 1 Faceted Garnet + 4 Common Arcane Runes + 2 Common Spirit Runes |
| T3 | Ironwood Staff | Runecrafting | 30 | 2 Ironwood Utility Blanks + 1 Faceted Garnet + 6 Common Arcane Runes + 4 Common Spirit Runes |
| T4 | Silverpine Wand | Runecrafting | 38 | 1 Silverpine Utility Blank + 1 Faceted Emerald + 4 Greater Arcane Runes + 2 Greater Spirit Runes + 1 Runic Filament |
| T4 | Silverpine Staff | Runecrafting | 40 | 2 Silverpine Utility Blanks + 1 Faceted Emerald + 6 Greater Arcane Runes + 4 Greater Spirit Runes + 2 Runic Filament |
| T5 | Emberwood Wand | Runecrafting | 48 | 1 Emberwood Utility Blank + 1 Faceted Ruby + 4 Refined Arcane Runes + 2 Refined Spirit Runes + 1 Runic Filament |
| T5 | Emberwood Staff | Runecrafting | 50 | 2 Emberwood Utility Blanks + 1 Faceted Ruby + 6 Refined Arcane Runes + 4 Refined Spirit Runes + 2 Runic Filament |
| T6 | Frostbark Wand | Runecrafting | 58 | 1 Frostbark Utility Blank + 1 Faceted Topaz + 4 Empowered Arcane Runes + 2 Empowered Spirit Runes + 1 Runic Filament |
| T6 | Frostbark Staff | Runecrafting | 60 | 2 Frostbark Utility Blanks + 1 Faceted Topaz + 6 Empowered Arcane Runes + 4 Empowered Spirit Runes + 2 Runic Filament |
| T7 | Stormwillow Wand | Runecrafting | 68 | 1 Stormwillow Utility Blank + 1 Faceted Amethyst + 4 Aetheric Arcane Runes + 2 Aetheric Spirit Runes + 1 Aether Filament |
| T7 | Stormwillow Staff | Runecrafting | 70 | 2 Stormwillow Utility Blanks + 1 Faceted Amethyst + 6 Aetheric Arcane Runes + 4 Aetheric Spirit Runes + 2 Aether Filament |
| T8 | Aetherwood Wand | Runecrafting | 78 | 1 Aetherwood Utility Blank + 1 Faceted Aquamarine + 4 Resonant Arcane Runes + 2 Resonant Spirit Runes + 1 Aether Filament |
| T8 | Aetherwood Staff | Runecrafting | 80 | 2 Aetherwood Utility Blanks + 1 Faceted Aquamarine + 6 Resonant Arcane Runes + 4 Resonant Spirit Runes + 2 Aether Filament |
| T9 | Umbralwood Wand | Runecrafting | 88 | 1 Umbralwood Utility Blank + 1 Faceted Diamond + 4 Umbral Arcane Runes + 2 Umbral Spirit Runes + 1 Aether Filament |
| T9 | Umbralwood Staff | Runecrafting | 90 | 2 Umbralwood Utility Blanks + 1 Faceted Diamond + 6 Umbral Arcane Runes + 4 Umbral Spirit Runes + 2 Aether Filament |
| T10 | Starwood Wand | Runecrafting | 98 | 1 Starwood Utility Blank + 1 Faceted Astral Prism + 4 Astral Arcane Runes + 2 Astral Spirit Runes + 1 Astral Filament |
| T10 | Starwood Staff | Runecrafting | 100 | 2 Starwood Utility Blanks + 1 Faceted Astral Prism + 6 Astral Arcane Runes + 4 Astral Spirit Runes + 2 Astral Filament |

Final assembly belongs to **Runecrafting**.

This is not a new profession.

The recipe deliberately links:

**Woodcutting → Fletching Utility Blank → Mining/Jewelcrafting Gem → Runecrafting → Magic weapon**

without requiring a dedicated Magic-weapon crafting skill.

Filament rule:

- T1–T3: none;
- T4–T6: Runic Filament;
- T7–T9: Aether Filament;
- T10: Astral Filament.

# 18. WAND VS STAFF

## Wand

- 1H;
- faster casting;
- lower Spell Damage bonus;
- allows Magic Ward;
- small Crit Rate bonus.

## Staff

- 2H;
- slightly slower casting;
- substantially higher Spell Damage;
- better Rune Preservation;
- elemental Penetration;
- no Off-hand.

A unique Magic weapon can ignore both templates.

# 19. ARMOR POWER CURVE — FULL SET TARGETS
| Set | Melee Res | Ranged Res | Magic Res | Melee Eva | Ranged Eva | Magic Eva |
|---|---|---|---|---|---|---|
| T1 Heavy / Melee Armor | 10% each | 12% each | 0% each | 24 | 30 | 8 |
| T1 Ranged Armor | 0% each | 10% each | 12% each | 8 | 24 | 30 |
| T1 Magic Armor | 12% each | 0% each | 10% each | 30 | 8 | 24 |
| T2 Heavy / Melee Armor | 12% each | 15% each | 1% each | 30 | 38 | 10 |
| T2 Ranged Armor | 1% each | 12% each | 15% each | 10 | 30 | 38 |
| T2 Magic Armor | 15% each | 1% each | 12% each | 38 | 10 | 30 |
| T3 Heavy / Melee Armor | 14% each | 18% each | 1% each | 37 | 46 | 12 |
| T3 Ranged Armor | 1% each | 14% each | 18% each | 12 | 37 | 46 |
| T3 Magic Armor | 18% each | 1% each | 14% each | 46 | 12 | 37 |
| T4 Heavy / Melee Armor | 16% each | 20% each | 2% each | 45 | 56 | 15 |
| T4 Ranged Armor | 2% each | 16% each | 20% each | 15 | 45 | 56 |
| T4 Magic Armor | 20% each | 2% each | 16% each | 56 | 15 | 45 |
| T5 Heavy / Melee Armor | 18% each | 22% each | 2% each | 54 | 68 | 18 |
| T5 Ranged Armor | 2% each | 18% each | 22% each | 18 | 54 | 68 |
| T5 Magic Armor | 22% each | 2% each | 18% each | 68 | 18 | 54 |
| T6 Heavy / Melee Armor | 20% each | 25% each | 3% each | 64 | 80 | 22 |
| T6 Ranged Armor | 3% each | 20% each | 25% each | 22 | 64 | 80 |
| T6 Magic Armor | 25% each | 3% each | 20% each | 80 | 22 | 64 |
| T7 Heavy / Melee Armor | 22% each | 28% each | 4% each | 75 | 94 | 27 |
| T7 Ranged Armor | 4% each | 22% each | 28% each | 27 | 75 | 94 |
| T7 Magic Armor | 28% each | 4% each | 22% each | 94 | 27 | 75 |
| T8 Heavy / Melee Armor | 24% each | 30% each | 5% each | 87 | 109 | 33 |
| T8 Ranged Armor | 5% each | 24% each | 30% each | 33 | 87 | 109 |
| T8 Magic Armor | 30% each | 5% each | 24% each | 109 | 33 | 87 |
| T9 Heavy / Melee Armor | 27% each | 34% each | 6% each | 100 | 125 | 40 |
| T9 Ranged Armor | 6% each | 27% each | 34% each | 40 | 100 | 125 |
| T9 Magic Armor | 34% each | 6% each | 27% each | 125 | 40 | 100 |
| T10 Heavy / Melee Armor | 30% each | 38% each | 8% each | 114 | 142 | 48 |
| T10 Ranged Armor | 8% each | 30% each | 38% each | 48 | 114 | 142 |
| T10 Magic Armor | 38% each | 8% each | 30% each | 142 | 48 | 114 |

The defense triangle is now explicit:

- **Melee / Heavy Armor:** strongest against **Ranged**, strong against **Melee**, minimal against **Magic**.
- **Ranged Armor:** strongest against **Magic**, strong against **Ranged**, minimal against **Melee**.
- **Magic Armor:** strongest against **Melee**, strong against **Magic**, minimal against **Ranged**.

The strongest protection band is targeted at roughly:

**1.25 × the secondary strong protection band**

before individual item distribution.

Example T10 full-set targets:

- Heavy: 30% Melee / 38% Ranged / 8% Magic
- Ranged: 8% Melee / 30% Ranged / 38% Magic
- Magic: 38% Melee / 8% Ranged / 30% Magic

This intentionally mirrors:

**Melee > Ranged > Magic > Melee**

through defensive equipment without making the broad triangle the only combat decision.

`Melee Res` means the listed percentage applies individually to:

- Slash;
- Stab;
- Crush.

`Ranged Res` applies individually to:

- Pierce;
- Puncture.

`Magic Res` applies individually to:

- Air;
- Fire;
- Water;
- Earth.

Every actual item therefore still stores all nine values.

The grouping is only table compression.

# 20. HEAVY ARMOR — T1–T10 EXACT ITEMS / STATS / RECIPES
Heavy armor is the deterministic Smithing baseline.

Canonical defensive identity:

1. **Strongest against Ranged**
2. **Strong against Melee**
3. **Minimal against Magic**

The Ranged protection target is approximately **25% stronger** than the Melee protection target at the same tier.

This is the Melee-style armor set in the Combat Triangle.

Any combat style may still wear Heavy armor if Defence requirement is met.

| Tier | Item | Slot | Defence Req | Owner | Recipe | Slash/Stab/Crush | Pierce/Puncture | Air/Fire/Water/Earth | Melee Eva | Ranged Eva | Magic Eva |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T1 | Copper Helm | Head | 5 | Smithing | 3 Copper Ingots | 2% each | 2% each | 0% each | 5 | 6 | 2 |
| T1 | Copper Plate Armor | Armor | 5 | Smithing | 12 Copper Ingots | 4% each | 6% each | 0% each | 11 | 16 | 4 |
| T1 | Copper Gauntlets | Hands | 5 | Smithing | 2 Copper Ingots | 2% each | 2% each | 0% each | 4 | 4 | 1 |
| T1 | Copper Greaves | Feet | 5 | Smithing | 2 Copper Ingots | 2% each | 2% each | 0% each | 4 | 4 | 1 |
| T2 | Iron Helm | Head | 15 | Smithing | 3 Iron Ingots | 2% each | 3% each | 0% each | 6 | 8 | 2 |
| T2 | Iron Plate Armor | Armor | 15 | Smithing | 12 Iron Ingots | 6% each | 8% each | 1% each | 16 | 18 | 4 |
| T2 | Iron Gauntlets | Hands | 15 | Smithing | 2 Iron Ingots | 2% each | 2% each | 0% each | 4 | 6 | 2 |
| T2 | Iron Greaves | Feet | 15 | Smithing | 2 Iron Ingots | 2% each | 2% each | 0% each | 4 | 6 | 2 |
| T3 | Cobalt Helm | Head | 25 | Smithing | 3 Cobalt Ingots | 3% each | 4% each | 0% each | 7 | 9 | 2 |
| T3 | Cobalt Plate Armor | Armor | 25 | Smithing | 12 Cobalt Ingots | 7% each | 8% each | 1% each | 18 | 23 | 6 |
| T3 | Cobalt Gauntlets | Hands | 25 | Smithing | 2 Cobalt Ingots | 2% each | 3% each | 0% each | 6 | 7 | 2 |
| T3 | Cobalt Greaves | Feet | 25 | Smithing | 2 Cobalt Ingots | 2% each | 3% each | 0% each | 6 | 7 | 2 |
| T4 | Argent Helm | Head | 35 | Smithing | 3 Argent Ingots | 3% each | 4% each | 0% each | 9 | 11 | 3 |
| T4 | Argent Plate Armor | Armor | 35 | Smithing | 12 Argent Ingots | 9% each | 10% each | 2% each | 22 | 29 | 8 |
| T4 | Argent Gauntlets | Hands | 35 | Smithing | 2 Argent Ingots | 2% each | 3% each | 0% each | 7 | 8 | 2 |
| T4 | Argent Greaves | Feet | 35 | Smithing | 2 Argent Ingots | 2% each | 3% each | 0% each | 7 | 8 | 2 |
| T5 | Emberite Helm | Head | 45 | Smithing | 3 Emberite Ingots | 4% each | 4% each | 0% each | 11 | 14 | 4 |
| T5 | Emberite Plate Armor | Armor | 45 | Smithing | 12 Emberite Ingots | 8% each | 12% each | 2% each | 27 | 34 | 8 |
| T5 | Emberite Gauntlets | Hands | 45 | Smithing | 2 Emberite Ingots | 3% each | 3% each | 0% each | 8 | 10 | 3 |
| T5 | Emberite Greaves | Feet | 45 | Smithing | 2 Emberite Ingots | 3% each | 3% each | 0% each | 8 | 10 | 3 |
| T6 | Frostsilver Helm | Head | 55 | Smithing | 3 Frostsilver Ingots | 4% each | 5% each | 1% each | 13 | 16 | 4 |
| T6 | Frostsilver Plate Armor | Armor | 55 | Smithing | 12 Frostsilver Ingots | 10% each | 12% each | 2% each | 31 | 40 | 12 |
| T6 | Frostsilver Gauntlets | Hands | 55 | Smithing | 2 Frostsilver Ingots | 3% each | 4% each | 0% each | 10 | 12 | 3 |
| T6 | Frostsilver Greaves | Feet | 55 | Smithing | 2 Frostsilver Ingots | 3% each | 4% each | 0% each | 10 | 12 | 3 |
| T7 | Stormiron Helm | Head | 65 | Smithing | 3 Stormiron Ingots | 4% each | 6% each | 1% each | 15 | 19 | 5 |
| T7 | Stormiron Plate Armor | Armor | 65 | Smithing | 12 Stormiron Ingots | 12% each | 14% each | 1% each | 38 | 47 | 14 |
| T7 | Stormiron Gauntlets | Hands | 65 | Smithing | 2 Stormiron Ingots | 3% each | 4% each | 1% each | 11 | 14 | 4 |
| T7 | Stormiron Greaves | Feet | 65 | Smithing | 2 Stormiron Ingots | 3% each | 4% each | 1% each | 11 | 14 | 4 |
| T8 | Aetherite Helm | Head | 75 | Smithing | 3 Aetherite Ingots | 5% each | 6% each | 1% each | 17 | 22 | 7 |
| T8 | Aetherite Plate Armor | Armor | 75 | Smithing | 12 Aetherite Ingots | 11% each | 16% each | 2% each | 44 | 55 | 16 |
| T8 | Aetherite Gauntlets | Hands | 75 | Smithing | 2 Aetherite Ingots | 4% each | 4% each | 1% each | 13 | 16 | 5 |
| T8 | Aetherite Greaves | Feet | 75 | Smithing | 2 Aetherite Ingots | 4% each | 4% each | 1% each | 13 | 16 | 5 |
| T9 | Umbral Helm | Head | 85 | Smithing | 3 Umbral Ingots | 5% each | 7% each | 1% each | 20 | 25 | 8 |
| T9 | Umbral Plate Armor | Armor | 85 | Smithing | 12 Umbral Ingots | 14% each | 17% each | 3% each | 50 | 62 | 20 |
| T9 | Umbral Gauntlets | Hands | 85 | Smithing | 2 Umbral Ingots | 4% each | 5% each | 1% each | 15 | 19 | 6 |
| T9 | Umbral Greaves | Feet | 85 | Smithing | 2 Umbral Ingots | 4% each | 5% each | 1% each | 15 | 19 | 6 |
| T10 | Astralite Helm | Head | 95 | Smithing | 3 Astralite Ingots | 6% each | 8% each | 2% each | 23 | 28 | 10 |
| T10 | Astralite Plate Armor | Armor | 95 | Smithing | 12 Astralite Ingots | 16% each | 18% each | 4% each | 57 | 72 | 24 |
| T10 | Astralite Gauntlets | Hands | 95 | Smithing | 2 Astralite Ingots | 4% each | 6% each | 1% each | 17 | 21 | 7 |
| T10 | Astralite Greaves | Feet | 95 | Smithing | 2 Astralite Ingots | 4% each | 6% each | 1% each | 17 | 21 | 7 |

# 21. RANGED ARMOR — T1–T10 EXACT ITEMS / STATS / RECIPES
Ranged armor is the deterministic Leatherworking baseline.

Canonical defensive identity:

1. **Strongest against Magic**
2. **Strong against Ranged**
3. **Minimal against Melee**

The Magic protection target is approximately **25% stronger** than the Ranged protection target at the same tier.

Any style can still wear these pieces if Defence requirement is met.

| Tier | Item | Slot | Defence Req | Owner | Recipe | Slash/Stab/Crush | Pierce/Puncture | Air/Fire/Water/Earth | Melee Eva | Ranged Eva | Magic Eva |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T1 | Light Leather Hood | Head | 5 | Leatherworking | 2 Light Leather | 0% each | 2% each | 2% each | 2 | 5 | 6 |
| T1 | Light Leather Armor | Armor | 5 | Leatherworking | 9 Light Leather | 0% each | 4% each | 6% each | 4 | 11 | 16 |
| T1 | Light Leather Gloves | Hands | 5 | Leatherworking | 2 Light Leather | 0% each | 2% each | 2% each | 1 | 4 | 4 |
| T1 | Light Leather Boots | Feet | 5 | Leatherworking | 2 Light Leather | 0% each | 2% each | 2% each | 1 | 4 | 4 |
| T2 | Tough Leather Hood | Head | 15 | Leatherworking | 2 Tough Leather | 0% each | 2% each | 3% each | 2 | 6 | 8 |
| T2 | Tough Leather Armor | Armor | 15 | Leatherworking | 9 Tough Leather | 1% each | 6% each | 8% each | 4 | 16 | 18 |
| T2 | Tough Leather Gloves | Hands | 15 | Leatherworking | 2 Tough Leather | 0% each | 2% each | 2% each | 2 | 4 | 6 |
| T2 | Tough Leather Boots | Feet | 15 | Leatherworking | 2 Tough Leather | 0% each | 2% each | 2% each | 2 | 4 | 6 |
| T3 | Rugged Leather Hood | Head | 25 | Leatherworking | 2 Rugged Leather | 0% each | 3% each | 4% each | 2 | 7 | 9 |
| T3 | Rugged Leather Armor | Armor | 25 | Leatherworking | 9 Rugged Leather | 1% each | 7% each | 8% each | 6 | 18 | 23 |
| T3 | Rugged Leather Gloves | Hands | 25 | Leatherworking | 2 Rugged Leather | 0% each | 2% each | 3% each | 2 | 6 | 7 |
| T3 | Rugged Leather Boots | Feet | 25 | Leatherworking | 2 Rugged Leather | 0% each | 2% each | 3% each | 2 | 6 | 7 |
| T4 | Moon Leather Hood | Head | 35 | Leatherworking | 2 Moon Leather | 0% each | 3% each | 4% each | 3 | 9 | 11 |
| T4 | Moon Leather Armor | Armor | 35 | Leatherworking | 9 Moon Leather | 2% each | 9% each | 10% each | 8 | 22 | 29 |
| T4 | Moon Leather Gloves | Hands | 35 | Leatherworking | 2 Moon Leather | 0% each | 2% each | 3% each | 2 | 7 | 8 |
| T4 | Moon Leather Boots | Feet | 35 | Leatherworking | 2 Moon Leather | 0% each | 2% each | 3% each | 2 | 7 | 8 |
| T5 | Ember Leather Hood | Head | 45 | Leatherworking | 2 Ember Leather | 0% each | 4% each | 4% each | 4 | 11 | 14 |
| T5 | Ember Leather Armor | Armor | 45 | Leatherworking | 9 Ember Leather | 2% each | 8% each | 12% each | 8 | 27 | 34 |
| T5 | Ember Leather Gloves | Hands | 45 | Leatherworking | 2 Ember Leather | 0% each | 3% each | 3% each | 3 | 8 | 10 |
| T5 | Ember Leather Boots | Feet | 45 | Leatherworking | 2 Ember Leather | 0% each | 3% each | 3% each | 3 | 8 | 10 |
| T6 | Frost Leather Hood | Head | 55 | Leatherworking | 2 Frost Leather | 1% each | 4% each | 5% each | 4 | 13 | 16 |
| T6 | Frost Leather Armor | Armor | 55 | Leatherworking | 9 Frost Leather | 2% each | 10% each | 12% each | 12 | 31 | 40 |
| T6 | Frost Leather Gloves | Hands | 55 | Leatherworking | 2 Frost Leather | 0% each | 3% each | 4% each | 3 | 10 | 12 |
| T6 | Frost Leather Boots | Feet | 55 | Leatherworking | 2 Frost Leather | 0% each | 3% each | 4% each | 3 | 10 | 12 |
| T7 | Storm Leather Hood | Head | 65 | Leatherworking | 2 Storm Leather | 1% each | 4% each | 6% each | 5 | 15 | 19 |
| T7 | Storm Leather Armor | Armor | 65 | Leatherworking | 9 Storm Leather | 1% each | 12% each | 14% each | 14 | 38 | 47 |
| T7 | Storm Leather Gloves | Hands | 65 | Leatherworking | 2 Storm Leather | 1% each | 3% each | 4% each | 4 | 11 | 14 |
| T7 | Storm Leather Boots | Feet | 65 | Leatherworking | 2 Storm Leather | 1% each | 3% each | 4% each | 4 | 11 | 14 |
| T8 | Aether Leather Hood | Head | 75 | Leatherworking | 2 Aether Leather | 1% each | 5% each | 6% each | 7 | 17 | 22 |
| T8 | Aether Leather Armor | Armor | 75 | Leatherworking | 9 Aether Leather | 2% each | 11% each | 16% each | 16 | 44 | 55 |
| T8 | Aether Leather Gloves | Hands | 75 | Leatherworking | 2 Aether Leather | 1% each | 4% each | 4% each | 5 | 13 | 16 |
| T8 | Aether Leather Boots | Feet | 75 | Leatherworking | 2 Aether Leather | 1% each | 4% each | 4% each | 5 | 13 | 16 |
| T9 | Umbral Leather Hood | Head | 85 | Leatherworking | 2 Umbral Leather | 1% each | 5% each | 7% each | 8 | 20 | 25 |
| T9 | Umbral Leather Armor | Armor | 85 | Leatherworking | 9 Umbral Leather | 3% each | 14% each | 17% each | 20 | 50 | 62 |
| T9 | Umbral Leather Gloves | Hands | 85 | Leatherworking | 2 Umbral Leather | 1% each | 4% each | 5% each | 6 | 15 | 19 |
| T9 | Umbral Leather Boots | Feet | 85 | Leatherworking | 2 Umbral Leather | 1% each | 4% each | 5% each | 6 | 15 | 19 |
| T10 | Astral Leather Hood | Head | 95 | Leatherworking | 2 Astral Leather | 2% each | 6% each | 8% each | 10 | 23 | 28 |
| T10 | Astral Leather Armor | Armor | 95 | Leatherworking | 9 Astral Leather | 4% each | 16% each | 18% each | 24 | 57 | 72 |
| T10 | Astral Leather Gloves | Hands | 95 | Leatherworking | 2 Astral Leather | 1% each | 4% each | 6% each | 7 | 17 | 21 |
| T10 | Astral Leather Boots | Feet | 95 | Leatherworking | 2 Astral Leather | 1% each | 4% each | 6% each | 7 | 17 | 21 |

# 22. MAGIC ARMOR — T1–T10 EXACT ITEMS / STATS / RECIPES
Magic armor is the deterministic Tailoring baseline.

Canonical defensive identity:

1. **Strongest against Melee**
2. **Strong against Magic**
3. **Minimal against Ranged**

The Melee protection target is approximately **25% stronger** than the Magic protection target at the same tier.

Any style can still wear it if Defence requirement is met.

This preserves resistance mixing for boss preparation while maintaining the Combat Triangle.

| Tier | Item | Slot | Defence Req | Owner | Recipe | Slash/Stab/Crush | Pierce/Puncture | Air/Fire/Water/Earth | Melee Eva | Ranged Eva | Magic Eva |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T1 | Flax Cloth Hood | Head | 5 | Tailoring | 2 Flax Cloth | 2% each | 0% each | 2% each | 6 | 2 | 5 |
| T1 | Flax Cloth Robes | Armor | 5 | Tailoring | 9 Flax Cloth | 6% each | 0% each | 4% each | 16 | 4 | 11 |
| T1 | Flax Cloth Gloves | Hands | 5 | Tailoring | 2 Flax Cloth | 2% each | 0% each | 2% each | 4 | 1 | 4 |
| T1 | Flax Cloth Slippers | Feet | 5 | Tailoring | 2 Flax Cloth | 2% each | 0% each | 2% each | 4 | 1 | 4 |
| T2 | Rushcloth Hood | Head | 15 | Tailoring | 2 Rushcloth | 3% each | 0% each | 2% each | 8 | 2 | 6 |
| T2 | Rushcloth Robes | Armor | 15 | Tailoring | 9 Rushcloth | 8% each | 1% each | 6% each | 18 | 4 | 16 |
| T2 | Rushcloth Gloves | Hands | 15 | Tailoring | 2 Rushcloth | 2% each | 0% each | 2% each | 6 | 2 | 4 |
| T2 | Rushcloth Slippers | Feet | 15 | Tailoring | 2 Rushcloth | 2% each | 0% each | 2% each | 6 | 2 | 4 |
| T3 | Nettlecloth Hood | Head | 25 | Tailoring | 2 Nettlecloth | 4% each | 0% each | 3% each | 9 | 2 | 7 |
| T3 | Nettlecloth Robes | Armor | 25 | Tailoring | 9 Nettlecloth | 8% each | 1% each | 7% each | 23 | 6 | 18 |
| T3 | Nettlecloth Gloves | Hands | 25 | Tailoring | 2 Nettlecloth | 3% each | 0% each | 2% each | 7 | 2 | 6 |
| T3 | Nettlecloth Slippers | Feet | 25 | Tailoring | 2 Nettlecloth | 3% each | 0% each | 2% each | 7 | 2 | 6 |
| T4 | Silkweave Hood | Head | 35 | Tailoring | 2 Silkweave | 4% each | 0% each | 3% each | 11 | 3 | 9 |
| T4 | Silkweave Robes | Armor | 35 | Tailoring | 9 Silkweave | 10% each | 2% each | 9% each | 29 | 8 | 22 |
| T4 | Silkweave Gloves | Hands | 35 | Tailoring | 2 Silkweave | 3% each | 0% each | 2% each | 8 | 2 | 7 |
| T4 | Silkweave Slippers | Feet | 35 | Tailoring | 2 Silkweave | 3% each | 0% each | 2% each | 8 | 2 | 7 |
| T5 | Embercloth Hood | Head | 45 | Tailoring | 2 Embercloth | 4% each | 0% each | 4% each | 14 | 4 | 11 |
| T5 | Embercloth Robes | Armor | 45 | Tailoring | 9 Embercloth | 12% each | 2% each | 8% each | 34 | 8 | 27 |
| T5 | Embercloth Gloves | Hands | 45 | Tailoring | 2 Embercloth | 3% each | 0% each | 3% each | 10 | 3 | 8 |
| T5 | Embercloth Slippers | Feet | 45 | Tailoring | 2 Embercloth | 3% each | 0% each | 3% each | 10 | 3 | 8 |
| T6 | Frostcloth Hood | Head | 55 | Tailoring | 2 Frostcloth | 5% each | 1% each | 4% each | 16 | 4 | 13 |
| T6 | Frostcloth Robes | Armor | 55 | Tailoring | 9 Frostcloth | 12% each | 2% each | 10% each | 40 | 12 | 31 |
| T6 | Frostcloth Gloves | Hands | 55 | Tailoring | 2 Frostcloth | 4% each | 0% each | 3% each | 12 | 3 | 10 |
| T6 | Frostcloth Slippers | Feet | 55 | Tailoring | 2 Frostcloth | 4% each | 0% each | 3% each | 12 | 3 | 10 |
| T7 | Stormcloth Hood | Head | 65 | Tailoring | 2 Stormcloth | 6% each | 1% each | 4% each | 19 | 5 | 15 |
| T7 | Stormcloth Robes | Armor | 65 | Tailoring | 9 Stormcloth | 14% each | 1% each | 12% each | 47 | 14 | 38 |
| T7 | Stormcloth Gloves | Hands | 65 | Tailoring | 2 Stormcloth | 4% each | 1% each | 3% each | 14 | 4 | 11 |
| T7 | Stormcloth Slippers | Feet | 65 | Tailoring | 2 Stormcloth | 4% each | 1% each | 3% each | 14 | 4 | 11 |
| T8 | Aethercloth Hood | Head | 75 | Tailoring | 2 Aethercloth | 6% each | 1% each | 5% each | 22 | 7 | 17 |
| T8 | Aethercloth Robes | Armor | 75 | Tailoring | 9 Aethercloth | 16% each | 2% each | 11% each | 55 | 16 | 44 |
| T8 | Aethercloth Gloves | Hands | 75 | Tailoring | 2 Aethercloth | 4% each | 1% each | 4% each | 16 | 5 | 13 |
| T8 | Aethercloth Slippers | Feet | 75 | Tailoring | 2 Aethercloth | 4% each | 1% each | 4% each | 16 | 5 | 13 |
| T9 | Umbralcloth Hood | Head | 85 | Tailoring | 2 Umbralcloth | 7% each | 1% each | 5% each | 25 | 8 | 20 |
| T9 | Umbralcloth Robes | Armor | 85 | Tailoring | 9 Umbralcloth | 17% each | 3% each | 14% each | 62 | 20 | 50 |
| T9 | Umbralcloth Gloves | Hands | 85 | Tailoring | 2 Umbralcloth | 5% each | 1% each | 4% each | 19 | 6 | 15 |
| T9 | Umbralcloth Slippers | Feet | 85 | Tailoring | 2 Umbralcloth | 5% each | 1% each | 4% each | 19 | 6 | 15 |
| T10 | Astralcloth Hood | Head | 95 | Tailoring | 2 Astralcloth | 8% each | 2% each | 6% each | 28 | 10 | 23 |
| T10 | Astralcloth Robes | Armor | 95 | Tailoring | 9 Astralcloth | 18% each | 4% each | 16% each | 72 | 24 | 57 |
| T10 | Astralcloth Gloves | Hands | 95 | Tailoring | 2 Astralcloth | 6% each | 1% each | 4% each | 21 | 7 | 17 |
| T10 | Astralcloth Slippers | Feet | 95 | Tailoring | 2 Astralcloth | 6% each | 1% each | 4% each | 21 | 7 | 17 |

# 22A. ARMOR DEFENCE TRIANGLE — LOCKED

The armor triangle is:

**Melee Armor → strongest protection against Ranged**  
**Ranged Armor → strongest protection against Magic**  
**Magic Armor → strongest protection against Melee**

Secondary protection follows the wearer's own broad style:

- Melee Armor → strong Melee protection;
- Ranged Armor → strong Ranged protection;
- Magic Armor → strong Magic protection.

The remaining style is intentionally minimal.

This creates:

- Heavy/Melee: **Ranged > Melee >>> Magic**
- Ranged: **Magic > Ranged >>> Melee**
- Magic: **Melee > Magic >>> Ranged**

The `>` between strongest and strong is approximately a **25% relative protection advantage**.

The `>>>` band is intentionally much lower.

This is the canonical baseline for crafted armor.

Unique gear can break these patterns intentionally.

# 23. NO BASELINE ARMOR SET BONUS

The deterministic T1–T10 combat armor lines do **not** require set bonuses.

Their identity already comes from:

- nine resistances;
- Evasion profile;
- material tier.

This keeps mixed armor legitimate.

Named boss/unique sets may later have set bonuses.

# 24. BASELINE OFF-HANDS — T1–T10 EXACT STATS

| Tier | Off-hand | Style | Req | Compatibility | Melee Res | Ranged Res | Magic Res | Primary Stat | Trade/Utility |
|---|---|---|---|---|---|---|---|---|---|
| T1 | Copper Shield | Melee | 5 | 1H Melee | +4% each | +3% each | +0% each | +8 Melee / +6 Ranged | Attack Interval +0.10s |
| T1 | Light Leather Guard | Ranged | 5 | 1H Ranged | +0% each | +4% each | +1% each | +6 Ranged Accuracy | +0.0 pp Crit Rate |
| T1 | Opal Ward | Magic | 8 | 1H Magic | +1% each | +0% each | +4% each | +6 Magic Accuracy | +1 pp Rune Preservation |
| T2 | Iron Shield | Melee | 15 | 1H Melee | +5% each | +3% each | +0% each | +10 Melee / +7 Ranged | Attack Interval +0.10s |
| T2 | Tough Leather Guard | Ranged | 15 | 1H Ranged | +0% each | +5% each | +1% each | +8 Ranged Accuracy | +0.0 pp Crit Rate |
| T2 | Sapphire Ward | Magic | 18 | 1H Magic | +1% each | +0% each | +5% each | +8 Magic Accuracy | +1 pp Rune Preservation |
| T3 | Cobalt Shield | Melee | 25 | 1H Melee | +6% each | +4% each | +1% each | +12 Melee / +8 Ranged | Attack Interval +0.10s |
| T3 | Rugged Leather Guard | Ranged | 25 | 1H Ranged | +0% each | +6% each | +2% each | +10 Ranged Accuracy | +0.5 pp Crit Rate |
| T3 | Garnet Ward | Magic | 28 | 1H Magic | +2% each | +0% each | +6% each | +10 Magic Accuracy | +2 pp Rune Preservation |
| T4 | Argent Shield | Melee | 35 | 1H Melee | +7% each | +4% each | +1% each | +14 Melee / +10 Ranged | Attack Interval +0.10s |
| T4 | Moon Leather Guard | Ranged | 35 | 1H Ranged | +1% each | +7% each | +2% each | +12 Ranged Accuracy | +0.5 pp Crit Rate |
| T4 | Emerald Ward | Magic | 38 | 1H Magic | +2% each | +1% each | +7% each | +12 Magic Accuracy | +2 pp Rune Preservation |
| T5 | Emberite Shield | Melee | 45 | 1H Melee | +8% each | +5% each | +1% each | +17 Melee / +12 Ranged | Attack Interval +0.10s |
| T5 | Ember Leather Guard | Ranged | 45 | 1H Ranged | +1% each | +8% each | +3% each | +15 Ranged Accuracy | +1.0 pp Crit Rate |
| T5 | Ruby Ward | Magic | 48 | 1H Magic | +3% each | +1% each | +8% each | +15 Magic Accuracy | +3 pp Rune Preservation |
| T6 | Frostsilver Shield | Melee | 55 | 1H Melee | +9% each | +6% each | +2% each | +20 Melee / +14 Ranged | Attack Interval +0.10s |
| T6 | Frost Leather Guard | Ranged | 55 | 1H Ranged | +2% each | +9% each | +3% each | +18 Ranged Accuracy | +1.0 pp Crit Rate |
| T6 | Topaz Ward | Magic | 58 | 1H Magic | +3% each | +1% each | +9% each | +18 Magic Accuracy | +4 pp Rune Preservation |
| T7 | Stormiron Shield | Melee | 65 | 1H Melee | +10% each | +7% each | +2% each | +23 Melee / +16 Ranged | Attack Interval +0.10s |
| T7 | Storm Leather Guard | Ranged | 65 | 1H Ranged | +2% each | +10% each | +4% each | +21 Ranged Accuracy | +1.5 pp Crit Rate |
| T7 | Amethyst Ward | Magic | 68 | 1H Magic | +4% each | +2% each | +10% each | +21 Magic Accuracy | +5 pp Rune Preservation |
| T8 | Aetherite Shield | Melee | 75 | 1H Melee | +11% each | +8% each | +3% each | +26 Melee / +18 Ranged | Attack Interval +0.10s |
| T8 | Aether Leather Guard | Ranged | 75 | 1H Ranged | +3% each | +11% each | +5% each | +24 Ranged Accuracy | +1.5 pp Crit Rate |
| T8 | Aquamarine Ward | Magic | 78 | 1H Magic | +4% each | +2% each | +11% each | +24 Magic Accuracy | +6 pp Rune Preservation |
| T9 | Umbral Shield | Melee | 85 | 1H Melee | +12% each | +9% each | +3% each | +30 Melee / +21 Ranged | Attack Interval +0.10s |
| T9 | Umbral Leather Guard | Ranged | 85 | 1H Ranged | +3% each | +12% each | +6% each | +27 Ranged Accuracy | +2.0 pp Crit Rate |
| T9 | Diamond Ward | Magic | 88 | 1H Magic | +5% each | +2% each | +12% each | +27 Magic Accuracy | +7 pp Rune Preservation |
| T10 | Astralite Shield | Melee | 95 | 1H Melee | +14% each | +10% each | +4% each | +35 Melee / +24 Ranged | Attack Interval +0.10s |
| T10 | Astral Leather Guard | Ranged | 95 | 1H Ranged | +4% each | +14% each | +7% each | +30 Ranged Accuracy | +2.0 pp Crit Rate |
| T10 | Astral Prism Ward | Magic | 98 | 1H Magic | +6% each | +3% each | +14% each | +30 Magic Accuracy | +8 pp Rune Preservation |

# 25. OFF-HAND RECIPES

| Tier | Off-hand | Owner | Craft Lvl | Recipe |
|---|---|---|---|---|
| T1 | Copper Shield | Smithing | 5 | 5 Copper Ingots |
| T1 | Light Leather Guard | Leatherworking | 8 | 3 Light Leather + 1 Leather Strap Bundle |
| T1 | Opal Ward | Runecrafting | 8 | 1 Copper Ingot + 1 Faceted Opal + 4 Minor Arcane Runes + 4 Minor Spirit Runes |
| T2 | Iron Shield | Smithing | 15 | 5 Iron Ingots |
| T2 | Tough Leather Guard | Leatherworking | 15 | 3 Tough Leather + 1 Reinforced Strap Bundle |
| T2 | Sapphire Ward | Runecrafting | 18 | 1 Iron Ingot + 1 Faceted Sapphire + 4 Lesser Arcane Runes + 4 Lesser Spirit Runes |
| T3 | Cobalt Shield | Smithing | 25 | 5 Cobalt Ingots |
| T3 | Rugged Leather Guard | Leatherworking | 25 | 3 Rugged Leather + 1 Rugged Grip Wrap |
| T3 | Garnet Ward | Runecrafting | 28 | 1 Cobalt Ingot + 1 Faceted Garnet + 4 Common Arcane Runes + 4 Common Spirit Runes |
| T4 | Argent Shield | Smithing | 35 | 5 Argent Ingots |
| T4 | Moon Leather Guard | Leatherworking | 35 | 3 Moon Leather + 1 Moonbound Harness Parts |
| T4 | Emerald Ward | Runecrafting | 38 | 1 Argent Ingot + 1 Faceted Emerald + 4 Greater Arcane Runes + 4 Greater Spirit Runes + 1 Runic Filament |
| T5 | Emberite Shield | Smithing | 45 | 5 Emberite Ingots |
| T5 | Ember Leather Guard | Leatherworking | 45 | 3 Ember Leather + 1 Ember Grip Wrap |
| T5 | Ruby Ward | Runecrafting | 48 | 1 Emberite Ingot + 1 Faceted Ruby + 4 Refined Arcane Runes + 4 Refined Spirit Runes + 1 Runic Filament |
| T6 | Frostsilver Shield | Smithing | 55 | 5 Frostsilver Ingots |
| T6 | Frost Leather Guard | Leatherworking | 55 | 3 Frost Leather + 1 Frost Fur Lining |
| T6 | Topaz Ward | Runecrafting | 58 | 1 Frostsilver Ingot + 1 Faceted Topaz + 4 Empowered Arcane Runes + 4 Empowered Spirit Runes + 1 Runic Filament |
| T7 | Stormiron Shield | Smithing | 65 | 5 Stormiron Ingots |
| T7 | Storm Leather Guard | Leatherworking | 65 | 3 Storm Leather + 1 Storm Reinforced Straps |
| T7 | Amethyst Ward | Runecrafting | 68 | 1 Stormiron Ingot + 1 Faceted Amethyst + 4 Aetheric Arcane Runes + 4 Aetheric Spirit Runes + 1 Aether Filament |
| T8 | Aetherite Shield | Smithing | 75 | 5 Aetherite Ingots |
| T8 | Aether Leather Guard | Leatherworking | 75 | 3 Aether Leather + 1 Aether Binding Set |
| T8 | Aquamarine Ward | Runecrafting | 78 | 1 Aetherite Ingot + 1 Faceted Aquamarine + 4 Resonant Arcane Runes + 4 Resonant Spirit Runes + 1 Aether Filament |
| T9 | Umbral Shield | Smithing | 85 | 5 Umbral Ingots |
| T9 | Umbral Leather Guard | Leatherworking | 85 | 3 Umbral Leather + 1 Umbral Grip Set |
| T9 | Diamond Ward | Runecrafting | 88 | 1 Umbral Ingot + 1 Faceted Diamond + 4 Umbral Arcane Runes + 4 Umbral Spirit Runes + 1 Aether Filament |
| T10 | Astralite Shield | Smithing | 95 | 5 Astralite Ingots |
| T10 | Astral Leather Guard | Leatherworking | 95 | 3 Astral Leather + 1 Astral Binding Set |
| T10 | Astral Prism Ward | Runecrafting | 98 | 1 Astralite Ingot + 1 Faceted Astral Prism + 4 Astral Arcane Runes + 4 Astral Spirit Runes + 1 Astral Filament |

# 26. SHIELD IDENTITY

Shield:

- 1H Melee off-hand;
- substantial physical resistance;
- Evasion;
- small attack-speed cost.

The speed penalty prevents Shield from being free defense.

Unique Shields can specialize into:

- one damage type;
- reflect;
- status resistance;
- boss mechanics.

# 27. RANGED GUARD IDENTITY

Ranged Guard is the deterministic 1H Ranged off-hand.

It mainly supports:

**Light Crossbow**

and future standalone 1H Ranged weapons.

It grants:

- strong Pierce/Puncture resistance;
- Ranged Accuracy;
- small Crit;
- moderate elemental defense.

Shortbow/Longbow/Heavy Crossbow are 2H and cannot equip it.

# 28. MAGIC WARD IDENTITY

Magic Ward supports 1H Magic weapons.

It grants:

- strong elemental resistance;
- Magic Accuracy;
- Rune Preservation.

Staff is 2H and gives up the Ward in exchange for:

- stronger Spell Damage;
- better weapon Rune Preservation;
- elemental Penetration.

# 29. ARMOR MATERIAL COST NORMALIZATION

Combat armor total material costs per full 4-piece set:

## Heavy

- Helm: 3 Ingots
- Armor: 12 Ingots
- Hands: 2 Ingots
- Feet: 2 Ingots
- **Total: 19 Ingots**

This equals the old:

3 Helm +7 Chest +5 Legs +2 Hands +2 Feet =19.

## Ranged

- Hood: 2 Leather
- Armor: 9 Leather
- Hands: 2 Leather
- Feet: 2 Leather
- **Total: 15 Leather**

This equals old:

2 +5 +4 +2 +2 =15.

## Magic

- Hood: 2 Cloth
- Armor: 9 Cloth
- Hands: 2 Cloth
- Feet: 2 Cloth
- **Total: 15 Cloth**

This equals old:

2 +5 +4 +2 +2 =15.

No material value is lost by the slot merge.

# 30. EQUIPMENT REQUIREMENTS

## Weapons

- Melee → Attack requirement.
- Ranged → Ranged requirement.
- Magic → Magic requirement.

## Armor

All baseline armor uses:

**Defence requirement only.**

This intentionally allows resistance mixing.

Example:

A Magic player can wear Heavy Helm + Magic Robes if that helps a particular enemy.

Unique armor may later require:

- Defence + style skill.

## Off-hands

- Shield → Defence requirement + compatible 1H Melee weapon.
- Ranged Guard → Ranged requirement + compatible 1H Ranged weapon.
- Magic Ward → Magic requirement + compatible 1H Magic weapon.

# 31. JEWELRY — KEEP EXISTING CANON

Do not create a second Combat jewelry system.

Existing Jewelcrafting remains canonical:

- Ring Frame;
- Necklace Frame;
- Faceted Gem;
- Resonance;
- Core/Accent sockets.

Its combat effects should be audited against these equipment values later.

Critical Rate/Critical Damage are already first-class Combat stats, so Jewelcrafting can meaningfully participate in those builds.

# 32. CAPE / MANTLE STATUS

| Current Tailoring content | Combat Core status | Decision in this MD |
|---|---|---|
| Mantle / Cape | No Cape slot currently exists in Combat Core v1.1 | Do not delete; keep as dormant/future equipment content until a separate Cape-slot decision |

Do not silently create a Cape slot inside this document.

If the player later decides to add Cape:

make one explicit Combat Core slot decision and then activate the existing Tailoring Mantle ladder.

# 33. BASELINE VS UNIQUE EQUIPMENT

Crafted baseline equipment should be:

- reliable;
- deterministic;
- strong enough to progress;
- rarely absolute best-in-slot forever.

Unique/boss/Guild equipment can break normal patterns.

Examples:

## Whip

Could be:

- 1H Melee;
- Slash;
- 1.85s interval;
- low Weapon Power;
- unusual repeated-hit or stacking Special.

It does not need a `Whip family`.

## Toxic Blowpipe

Could be:

- standalone 1H/2H Ranged item as designed;
- unique Ammo/resource rule;
- Poison integration;
- its own interval;
- its own Special.

It does not require all future Ranged weapons to become Blowpipe variants.

This is the core reason archetypes remain optional.

# 34. UNIQUE ITEM BALANCE BUDGET

Unique item design should usually trade within the same broad tier budget.

A unique weapon may exceed one baseline axis if it gives something up.

Example:

+20% faster than baseline

but:

- lower per-hit Power;
- specific Ammo;
- narrower damage type;
- rare supply cost.

Avoid boss drops that are simply:

**same tier crafted weapon +25% to every stat**

because they erase professions.

# 35. RESISTANCE DESIGN RULE

Every combat equipment item and every enemy uses the same nine-resistance system.

Baseline crafted armor uses grouped equal values for readability.

Unique equipment is free to break the grouping.

Example unique helm:

- Slash +8
- Stab +20
- Crush +4
- Pierce +2
- Puncture -5
- Fire +25
- etc.

This is where boss-specific equipment becomes interesting.

# 36. DAMAGE TYPE + WEAPON CHOICE

The intended decision is not:

> Which weapon tier is highest?

It is:

> Which weapon at my tier best interacts with this enemy's exact resistance profile?

Example:

Enemy:

- Slash +38%
- Stab +5%
- Crush +22%

Even if Battle Axe has more sheet Power:

Sword/Stab or Spear can win through resistance advantage.

# 37. RANGED DAMAGE TYPE DECISION

Pierce and Puncture stay distinct.

If enemy has:

- Pierce +35%;
- Puncture +5%;

Crossbow becomes attractive.

If reversed:

Bows become attractive.

Weapon speed alone should not decide every matchup.

# 38. MAGIC WEAPON VS SPELL DECISION

Magic has two independent choices:

1. Weapon:
   - Wand vs Staff / unique weapon.
2. Spell:
   - Air / Fire / Water / Earth.

Example:

A Staff can be the strongest raw Magic weapon, but if the enemy strongly resists the selected element, changing spell can matter more than changing weapon.

# 39. ITEM ID / REGISTRY CONVENTION

Recommended stable IDs:

## Melee

`combat.weapon.melee.copper_sword`

## Ranged

`combat.weapon.ranged.alder_shortbow`

## Magic

`combat.weapon.magic.alder_wand`

## Armor

`combat.armor.heavy.copper_armor`  
`combat.armor.ranged.light_leather_armor`  
`combat.armor.magic.flax_cloth_robes`

## Off-hand

`combat.offhand.melee.copper_shield`  
`combat.offhand.ranged.light_leather_guard`  
`combat.offhand.magic.opal_ward`

Display names can change without changing IDs.

# 40. REQUIRED PROFESSION BACK-PATCHES

After this Equipment design is approved, update profession source documents.

## Smithing

Replace combat:

- Chestplate;
- Legguards

with:

- Plate Armor

for the baseline combat ladder.

Keep profession clothing/other non-combat slots unaffected.

Update Spear input to a real canonical:

- matching-tier Shaft Bundle.

Add Combat stat references rather than duplicating numbers.

## Leatherworking

Replace combat:

- Jerkin;
- Leggings

with:

- Leather Armor.

Add:

- Ranged Guard recipes.

## Tailoring

Replace combat:

- Robe;
- Legwraps

with:

- Robes unified Armor item.

Do not delete profession Legs items.

Mantle remains dormant until Cape-slot decision.

## Runecrafting

Add final assembly recipes for:

- Wands;
- Staffs;
- Magic Wards.

## Fletching

Keep current Ranged weapon recipes and Ammo recipes.

No major structural change required.

## Registries

Add/update:

- Item Registry;
- Recipe Registry;
- Gear Matrix;
- Unlock Dependency Matrix.

# 41. REQUIRED COMBAT CORE BACK-PATCH

Only minimal Combat Core changes are required:

1. Reference this document for baseline equipment numbers.
2. Clarify `Ranged Max Hit = Weapon Power + Ammo Power`.
3. Clarify Magic weapon Spell Damage percentage model.
4. Keep optional weapon archetype rule from Combat Core v1.1.
5. Do not add Cape unless separately approved.

# 42. SIMULATION CHECKS REQUIRED NEXT

Before finalizing these values as v1.0:

simulate at minimum:

## T1

- Attack 5 + Copper weapons vs equal-tier monster.
- Ranged 5–9 + Alder/Birch ranged weapons + Copper Ammo.
- Magic 8–10 + Alder Wand/Staff + T1 spells.
- each armor archetype vs each enemy style.

## T5

same cross-style matrix.

## T10

same cross-style matrix.

Measure:

- Hit Chance;
- DPS;
- time-to-kill;
- incoming hit chance;
- time-to-death;
- Food/h;
- Satiety;
- Ammo/h;
- Runes/h;
- Special frequency.

Target:

no baseline line should dominate all resistance profiles.

# 43. FIRST BALANCE EXPECTATIONS

Expected ranking if target resistances are neutral:

## Melee

- Axe: strongest 1H raw damage.
- Sword: best flexibility.
- Mace: wins where Crush/Penetration matters.
- Spear: accurate 2H Stab/penetration.

## Ranged

- Shortbow: fastest sustained.
- Longbow: accuracy/large hits.
- Light Crossbow: 1H flexibility.
- Heavy Crossbow: slowest / highest penetration.

## Magic

- Wand: safer/flexible through Ward.
- Staff: larger spell damage and Rune efficiency.

If simulation does not broadly produce these identities, tune global archetype multipliers rather than every tier individually.

# 44. LOCKED BASELINE DECISIONS

1. The T1–T10 lines in this document are deterministic crafted baselines, not the complete weapon catalog.

2. Weapon archetype/family metadata is optional.

3. Unique weapons such as Whip or Toxic Blowpipe do not require new global families.

4. Four baseline crafted Melee lines: Sword, Battle Axe, Mace, Spear.

5. Four baseline crafted Ranged lines remain Shortbow, Longbow, Light Crossbow, Heavy Crossbow.

6. Two baseline crafted Magic lines: Wand, Staff.

7. Magic weapons are element-neutral; the selected spell chooses Air/Fire/Water/Earth.

8. Magic weapon final assembly belongs to Runecrafting using existing cross-profession materials.

9. Combat armor has Head / Armor / Hands / Feet.

10. Old combat Body+Legs recipes merge into one Armor recipe without changing total material cost.

11. Profession clothing may still use separate Body + Legs.

12. Heavy / Melee baseline armor is Smithing and is strongest vs Ranged, strong vs Melee, minimal vs Magic.

13. Ranged baseline armor is Leatherworking and is strongest vs Magic, strong vs Ranged, minimal vs Melee.

14. Magic baseline armor is Tailoring and is strongest vs Melee, strong vs Magic, minimal vs Ranged.

15. Baseline Melee off-hand = Shield.

16. Baseline Ranged off-hand = Ranged Guard.

17. Baseline Magic off-hand = Ward.

18. Any style may mix baseline armor if Defence requirement is met.

19. 2H weapons disable Off-hand.

20. Ranged Max Hit uses Weapon Power + Ammo Power.

21. Magic Max Hit uses Spell Base Power × Magic scaling × weapon Spell Damage modifiers.

22. Baseline crafted armor has no mandatory set bonus.

23. All equipment contributes to the same nine-resistance combat system.

24. Unique equipment may use asymmetric individual resistance values.

25. Existing Jewelcrafting combat jewelry remains canonical.

26. Cape/Mantle is not activated until a separate Cape-slot decision.

# 45. NEXT PASS AFTER THIS DOCUMENT

Once these numbers are accepted, the next best step is:

## Combat Simulation + Monster Baseline

Create representative:

- T1;
- T5;
- T10

Melee/Ranged/Magic enemies with:

- HP;
- Accuracy;
- Evasions;
- all 9 resistances;
- deterministic Action Sequence;
- damage;
- Specials.

Then run the crafted equipment against them.

After that:

1. tune global equipment curves;
2. build full monster/zone ladder;
3. design Magic Spellbook;
4. design Devotion content;
5. design boss/unique equipment;
6. design Guild equipment.

Do **not** create hundreds of boss items before the crafted baseline is numerically proven.

# 46. FINAL EQUIPMENT FANTASY

The crafted equipment system should allow decisions such as:

> I have an Astralite Battle Axe, but this enemy has 40% Slash and 6% Stab Resistance, so my Astralite Sword in Stab stance performs better.

or:

> My Light Crossbow does less raw damage than the Heavy Crossbow, but it lets me equip an Astral Leather Guard and survive the enemy's Puncture sequence.

or:

> Staff gives much more Spell Damage, but Wand + Astral Prism Ward gives the elemental resistance and Rune economy I need for this boss.

and later:

> This Whip does not belong to any normal family. It has its own interval, Slash profile and Special, and that is completely valid.

That is the intended structure:

**reliable profession-crafted progression + open space for genuinely unique weapons and encounter-specific builds.**
