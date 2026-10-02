# 06 — FLETCHING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md`  
**Reference Professions:** `02_SMITHING.md`, `03_FISHING.md`, `05_WOODCUTTING.md`

---

# 1. ROLE

Fletching is the precision woodcraft profession. It converts timber and cross-profession components into:

- ranged weapons;
- Arrows;
- Bolts;
- Fishing Rods;
- Tool Handles;
- Hunting trap frames;
- shafts, limbs, stocks and utility parts.

Its core suppliers are Woodcutting, Smithing, Hunting, Tailoring and later Runecrafting.

Its permanent economic value comes from the fact that Ranged Combat consumes ammunition continuously.

---

# 2. CORE IDENTITY

Fletching is built around:

**Shaping → Components → Assembly → Ammunition Supply**

It is deliberately not:

**1 Log → 1 Bow**

The profession turns raw Logs into useful intermediate parts, then assembles complete equipment.

---

# 3. RANGED WEAPON FAMILIES

| Weapon | Hands | Ammo | Speed | Per-Hit Damage | Accuracy | Armor Pen | Identity |
|---|---|---|---|---|---|---|---|
| Shortbow | 2H | Arrows | Fast | Lower | Neutral | Low | Fast sustained ranged farming |
| Longbow | 2H | Arrows | Medium-Slow | High | High | Medium | Slower, stronger and accurate heavy shots |
| Light Crossbow | 1H | Bolts | Medium | Medium | Neutral | Medium | One-handed; enables Ranged Off-Hand |
| Heavy Crossbow | 2H | Bolts | Very Slow | Very High | High | High | Largest single-shot / penetration identity |

These are the baseline Ranged weapon families.

Combat will later own exact damage, attack speed, accuracy, penetration and special attacks.

---

# 4. SHORTBOW

**2H — Arrows**

Shortbow identity:

- fastest baseline ranged weapon;
- lower damage per shot;
- strong sustained farming;
- highest Arrow consumption;
- simple Primary Timber construction.

Shortbow is not an early Longbow. Both remain parallel weapon families.

---

# 5. LONGBOW

**2H — Arrows**

Longbow identity:

- slower shots;
- higher single-hit damage;
- higher accuracy target;
- stronger deliberate-shot identity;
- Specialty Timber + Resin construction.

Longbow gives Specialty Woodcutting a direct Combat consumer.

---

# 6. LIGHT CROSSBOW

**1H — Bolts**

Light Crossbow is locked as one-handed.

Its main gameplay identity is:

**Ranged Off-Hand access**

rather than raw maximum damage.

It should be attractive for flexible builds.

---

# 7. HEAVY CROSSBOW

**2H — Bolts**

Identity:

- slowest ranged family;
- highest per-hit damage target;
- strongest armor-penetration target;
- most expensive baseline assembly chain.

---

# 8. AMMO RULE

Shortbow + Longbow use:

**Arrows**

Light + Heavy Crossbows use:

**Bolts**

Do not split ammo further by weapon family.

---

# 9. WHY AMMO IS CONSUMABLE

Ammo creates ongoing demand for:

- Logs;
- metal heads;
- Feathers;
- Fletching workers;
- Estate production.

Without consumable ammo, Fletching would lose relevance after one weapon per tier.

---

# 10. PRODUCTION MODES

Fletching has three primary modes:

## Shaping

Turns Logs into:

- Shaft Bundles;
- Bow Limbs;
- Crossbow Stocks;
- Utility Blanks.

## Assembly

Turns components into:

- Bows;
- Crossbows;
- Fishing Rods;
- Handles;
- trap parts.

## Ammunition

Mass-produces:

- Arrows;
- Bolts.

---

# 11. COMPONENT TYPES

| Component | Main Input | Consumers | Role |
|---|---|---|---|
| Shaft Bundle | Primary Logs | Arrows / Bolts / traps | High-volume component |
| Bow Limbs | Primary or Specialty Logs | Shortbow / Longbow | Flexible weapon part |
| Crossbow Stock | Primary or Specialty Logs | Light / Heavy Crossbow | Rigid body |
| Utility Blank | Primary Logs | Rods / Handles / traps | Cross-profession part |

---

# 12. SHAFT BUNDLES

One shared Shaft Bundle supports both Arrows and Bolts.

Do not create separate Arrow Shaft and Bolt Shaft items.

This reduces inventory bloat.

---

# 13. BOW LIMBS

Primary Timber produces normal Bow Limbs.

Specialty Timber produces Reinforced Limbs.

Normal Limbs feed Shortbows.

Reinforced Limbs feed Longbows.

---

# 14. CROSSBOW STOCKS

Primary Timber Crossbow Stock feeds Light Crossbows.

Specialty Heavy Stock feeds Heavy Crossbows.

---

# 15. UTILITY BLANKS

Utility Blanks feed:

- Fishing Rods;
- Pickaxe/Axe/Hammer handles;
- Hunting frames;
- future profession tools.

This ensures Fletching stays useful beyond ranged weapons.

---

# 16. SHAPING RECIPES

| Lvl | Tier | Recipe | Input | Output | Main Use |
|---|---|---|---|---|---|
| 1 | T1 | Alder Shaft Bundle | 1 Alder Log | 6 | Ammo |
| 2 | T1 | Alder Bow Limbs | 2 Alder Logs | 2 | Shortbow |
| 3 | T1 | Alder Crossbow Stock | 2 Alder Logs | 1 | Light Crossbow |
| 4 | T1 | Alder Utility Blank | 2 Alder Logs | 2 | Rods / Handles / Traps |
| 7 | T1 | Birch Reinforced Limbs | 2 Birch Logs | 2 | Longbow |
| 8 | T1 | Birch Heavy Stock | 3 Birch Logs | 1 | Heavy Crossbow |
| 11 | T2 | Oak Shaft Bundle | 1 Oak Log | 6 | Ammo |
| 12 | T2 | Oak Bow Limbs | 2 Oak Logs | 2 | Shortbow |
| 13 | T2 | Oak Crossbow Stock | 2 Oak Logs | 1 | Light Crossbow |
| 14 | T2 | Oak Utility Blank | 2 Oak Logs | 2 | Rods / Handles / Traps |
| 17 | T2 | Willow Reinforced Limbs | 2 Willow Logs | 2 | Longbow |
| 18 | T2 | Willow Heavy Stock | 3 Willow Logs | 1 | Heavy Crossbow |
| 21 | T3 | Ironwood Shaft Bundle | 1 Ironwood Log | 6 | Ammo |
| 22 | T3 | Ironwood Bow Limbs | 2 Ironwood Logs | 2 | Shortbow |
| 23 | T3 | Ironwood Crossbow Stock | 2 Ironwood Logs | 1 | Light Crossbow |
| 24 | T3 | Ironwood Utility Blank | 2 Ironwood Logs | 2 | Rods / Handles / Traps |
| 27 | T3 | Cedar Reinforced Limbs | 2 Cedar Logs | 2 | Longbow |
| 28 | T3 | Cedar Heavy Stock | 3 Cedar Logs | 1 | Heavy Crossbow |
| 31 | T4 | Silverpine Shaft Bundle | 1 Silverpine Log | 7 | Ammo |
| 32 | T4 | Silverpine Bow Limbs | 2 Silverpine Logs | 2 | Shortbow |
| 33 | T4 | Silverpine Crossbow Stock | 2 Silverpine Logs | 1 | Light Crossbow |
| 34 | T4 | Silverpine Utility Blank | 2 Silverpine Logs | 2 | Rods / Handles / Traps |
| 37 | T4 | Moonwood Reinforced Limbs | 2 Moonwood Logs | 2 | Longbow |
| 38 | T4 | Moonwood Heavy Stock | 3 Moonwood Logs | 1 | Heavy Crossbow |
| 41 | T5 | Emberwood Shaft Bundle | 1 Emberwood Log | 7 | Ammo |
| 42 | T5 | Emberwood Bow Limbs | 2 Emberwood Logs | 2 | Shortbow |
| 43 | T5 | Emberwood Crossbow Stock | 2 Emberwood Logs | 1 | Light Crossbow |
| 44 | T5 | Emberwood Utility Blank | 2 Emberwood Logs | 2 | Rods / Handles / Traps |
| 47 | T5 | Cinderbark Reinforced Limbs | 2 Cinderbark Logs | 2 | Longbow |
| 48 | T5 | Cinderbark Heavy Stock | 3 Cinderbark Logs | 1 | Heavy Crossbow |
| 51 | T6 | Frostbark Shaft Bundle | 1 Frostbark Log | 7 | Ammo |
| 52 | T6 | Frostbark Bow Limbs | 2 Frostbark Logs | 2 | Shortbow |
| 53 | T6 | Frostbark Crossbow Stock | 2 Frostbark Logs | 1 | Light Crossbow |
| 54 | T6 | Frostbark Utility Blank | 2 Frostbark Logs | 2 | Rods / Handles / Traps |
| 57 | T6 | Icewillow Reinforced Limbs | 2 Icewillow Logs | 2 | Longbow |
| 58 | T6 | Icewillow Heavy Stock | 3 Icewillow Logs | 1 | Heavy Crossbow |
| 61 | T7 | Stormwillow Shaft Bundle | 1 Stormwillow Log | 8 | Ammo |
| 62 | T7 | Stormwillow Bow Limbs | 2 Stormwillow Logs | 2 | Shortbow |
| 63 | T7 | Stormwillow Crossbow Stock | 2 Stormwillow Logs | 1 | Light Crossbow |
| 64 | T7 | Stormwillow Utility Blank | 2 Stormwillow Logs | 2 | Rods / Handles / Traps |
| 67 | T7 | Thunder Oak Reinforced Limbs | 2 Thunder Oak Logs | 2 | Longbow |
| 68 | T7 | Thunder Oak Heavy Stock | 3 Thunder Oak Logs | 1 | Heavy Crossbow |
| 71 | T8 | Aetherwood Shaft Bundle | 1 Aetherwood Log | 8 | Ammo |
| 72 | T8 | Aetherwood Bow Limbs | 2 Aetherwood Logs | 2 | Shortbow |
| 73 | T8 | Aetherwood Crossbow Stock | 2 Aetherwood Logs | 1 | Light Crossbow |
| 74 | T8 | Aetherwood Utility Blank | 2 Aetherwood Logs | 2 | Rods / Handles / Traps |
| 77 | T8 | Prismwood Reinforced Limbs | 2 Prismwood Logs | 2 | Longbow |
| 78 | T8 | Prismwood Heavy Stock | 3 Prismwood Logs | 1 | Heavy Crossbow |
| 81 | T9 | Umbralwood Shaft Bundle | 1 Umbralwood Log | 8 | Ammo |
| 82 | T9 | Umbralwood Bow Limbs | 2 Umbralwood Logs | 2 | Shortbow |
| 83 | T9 | Umbralwood Crossbow Stock | 2 Umbralwood Logs | 1 | Light Crossbow |
| 84 | T9 | Umbralwood Utility Blank | 2 Umbralwood Logs | 2 | Rods / Handles / Traps |
| 87 | T9 | Nightbark Reinforced Limbs | 2 Nightbark Logs | 2 | Longbow |
| 88 | T9 | Nightbark Heavy Stock | 3 Nightbark Logs | 1 | Heavy Crossbow |
| 91 | T10 | Starwood Shaft Bundle | 1 Starwood Log | 9 | Ammo |
| 92 | T10 | Starwood Bow Limbs | 2 Starwood Logs | 2 | Shortbow |
| 93 | T10 | Starwood Crossbow Stock | 2 Starwood Logs | 1 | Light Crossbow |
| 94 | T10 | Starwood Utility Blank | 2 Starwood Logs | 2 | Rods / Handles / Traps |
| 97 | T10 | Astral Cedar Reinforced Limbs | 2 Astral Cedar Logs | 2 | Longbow |
| 98 | T10 | Astral Cedar Heavy Stock | 3 Astral Cedar Logs | 1 | Heavy Crossbow |

---

# 17. SHAPING WORK

Every Shaping recipe has Work Required.

Tier Base Work:

| Tier | Work |
|---|---:|
| T1 | 24 |
| T2 | 32 |
| T3 | 42 |
| T4 | 54 |
| T5 | 68 |
| T6 | 84 |
| T7 | 102 |
| T8 | 122 |
| T9 | 144 |
| T10 | 168 |

Recipe multipliers:

- Shaft Bundle 0.70x;
- Bow Limbs 1.00x;
- Crossbow Stock 1.10x;
- Utility Blank 0.85x;
- Reinforced Limbs 1.25x;
- Heavy Stock 1.40x.

---

# 18. SHAPING LOOP

Each automatic Tool action:

**Remaining Work -= Final Shaping Power**

After Work reaches 0:

- component is created;
- preservation resolves;
- XP/Mastery is awarded;
- next batch craft begins.

No active clicking.

---

# 19. FLETCHING TOOL

| Tier | Tool | Lvl | Shaping Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Fletching Knife | 1 | 5 | 2.10s | Starter | None |
| T1 | Copper Fletching Knife | 5 | 7 | 2.04s | Smithing | Material Preservation +2 pp |
| T2 | Iron Drawknife | 15 | 10 | 1.98s | Smithing | Shaping Work -3% |
| T3 | Cobalt Fletching Knife | 25 | 14 | 1.92s | Smithing | Ammo Output +3 pp |
| T4 | Argent Drawknife | 35 | 19 | 1.86s | Smithing | Assembly Time -4% |
| T5 | Emberite Fletching Knife | 45 | 25 | 1.80s | Smithing | Material Preservation +4 pp |
| T6 | Frostsilver Drawknife | 55 | 32 | 1.74s | Smithing | Shaping Work -6% |
| T7 | Stormiron Fletching Knife | 65 | 40 | 1.68s | Smithing | Ammo Output +5 pp |
| T8 | Aetherite Fletching Knife | 75 | 49 | 1.62s | Smithing | Assembly Time -6% |
| T9 | Umbral Drawknife | 85 | 59 | 1.56s | Smithing | Heartwood/Resin Preservation +5 pp |
| T10 | Astralite Master Knife | 95 | 70 | 1.50s | Smithing | Shaping Power +8%; Ammo Output +5 pp |

No durability.

---

# 20. TOOL UPGRADE CHAIN

Default:

**Previous Fletching Knife + current Smithing metal + Handle → next Fletching Knife**

Old knives naturally transfer to workers.

---

# 21. BOWSTRINGS

Fletching consumes but does not primarily produce textile strings.

Baseline:

| Tier Range | String |
|---|---|
| T1–T3 | Simple Bowstring |
| T4–T6 | Reinforced Bowstring |
| T7–T9 | Runic Bowstring |
| T10 | Astral Bowstring |
| T10+ | Worldroot Bowstring |

Tailoring is expected to own ordinary string production.

Runecrafting can support later magical strings.

---

# 22. RESIN

Woodcutting Resin is used mainly in:

- Longbows;
- Heavy Crossbows;
- advanced Rods;
- rare utility components.

Shortbow and Light Crossbow baseline recipes do not require Resin.

---

# 23. METAL COMPONENTS

Smithing supplies:

- Arrowheads;
- Bolt Heads;
- Trigger Assemblies;
- Winch Assemblies;
- fittings.

This creates a strong Smithing ↔ Fletching chain.

---

# 24. FEATHER BUNDLES

Arrows and Bolts use:

**Feather Bundle**

Primary future source:

**Hunting**

Use one universal Feather Bundle, not one Feather stack per bird.

Early Shop/Chronicle supply prevents progression deadlock.

---

# 25. AMMO RECIPES

| Tier | Lvl | Ammo | Inputs | Base Output |
|---|---|---|---|---|
| T1 | 5 | Copper Arrows | 1 Alder Shaft Bundle + 1 Copper Arrowhead + 1 Feather Bundle | 24 |
| T1 | 6 | Copper Bolts | 1 Alder Shaft Bundle + 1 Copper Bolt Head + 1 Feather Bundle | 20 |
| T2 | 15 | Iron Arrows | 1 Oak Shaft Bundle + 1 Iron Arrowhead + 1 Feather Bundle | 28 |
| T2 | 16 | Iron Bolts | 1 Oak Shaft Bundle + 1 Iron Bolt Head + 1 Feather Bundle | 24 |
| T3 | 25 | Cobalt Arrows | 1 Ironwood Shaft Bundle + 1 Cobalt Arrowhead + 1 Feather Bundle | 32 |
| T3 | 26 | Cobalt Bolts | 1 Ironwood Shaft Bundle + 1 Cobalt Bolt Head + 1 Feather Bundle | 28 |
| T4 | 35 | Argent Arrows | 1 Silverpine Shaft Bundle + 1 Argent Arrowhead + 1 Feather Bundle | 36 |
| T4 | 36 | Argent Bolts | 1 Silverpine Shaft Bundle + 1 Argent Bolt Head + 1 Feather Bundle | 32 |
| T5 | 45 | Emberite Arrows | 1 Emberwood Shaft Bundle + 1 Emberite Arrowhead + 1 Feather Bundle | 40 |
| T5 | 46 | Emberite Bolts | 1 Emberwood Shaft Bundle + 1 Emberite Bolt Head + 1 Feather Bundle | 36 |
| T6 | 55 | Frostsilver Arrows | 1 Frostbark Shaft Bundle + 1 Frostsilver Arrowhead + 1 Feather Bundle | 44 |
| T6 | 56 | Frostsilver Bolts | 1 Frostbark Shaft Bundle + 1 Frostsilver Bolt Head + 1 Feather Bundle | 40 |
| T7 | 65 | Stormiron Arrows | 1 Stormwillow Shaft Bundle + 1 Stormiron Arrowhead + 1 Feather Bundle | 48 |
| T7 | 66 | Stormiron Bolts | 1 Stormwillow Shaft Bundle + 1 Stormiron Bolt Head + 1 Feather Bundle | 44 |
| T8 | 75 | Aetherite Arrows | 1 Aetherwood Shaft Bundle + 1 Aetherite Arrowhead + 1 Feather Bundle | 52 |
| T8 | 76 | Aetherite Bolts | 1 Aetherwood Shaft Bundle + 1 Aetherite Bolt Head + 1 Feather Bundle | 48 |
| T9 | 85 | Umbral Arrows | 1 Umbralwood Shaft Bundle + 1 Umbral Arrowhead + 1 Feather Bundle | 56 |
| T9 | 86 | Umbral Bolts | 1 Umbralwood Shaft Bundle + 1 Umbral Bolt Head + 1 Feather Bundle | 52 |
| T10 | 95 | Astralite Arrows | 1 Starwood Shaft Bundle + 1 Astralite Arrowhead + 1 Feather Bundle | 60 |
| T10 | 96 | Astralite Bolts | 1 Starwood Shaft Bundle + 1 Astralite Bolt Head + 1 Feather Bundle | 56 |

---

# 26. AMMO OUTPUT BONUS

Every ammo craft can roll:

**Ammo Output Chance**

On success:

**+25% of Base Output**, rounded up.

Example:

40 Arrows → +10 bonus Arrows.

Hard cap:

**75% chance**

No chained bonus rolls.

---

# 27. AMMO PRESERVATION

Each normal ammo input can be preserved independently:

- Shaft Bundle;
- Arrowhead/Bolt Head;
- Feather Bundle.

Material Preservation cap:

**50%**

---

# 28. COMPLETE WEAPON ASSEMBLY

| Lvl | Tier | Weapon | Inputs |
|---|---|---|---|
| 5 | T1 | Alder Shortbow | 2 Alder Bow Limbs + 1 Simple Bowstring |
| 6 | T1 | Alder Light Crossbow | 1 Alder Crossbow Stock + 1 Light Trigger Assembly + 1 Simple Bowstring |
| 8 | T1 | Birch Longbow | 2 Birch Reinforced Limbs + 1 Simple Bowstring + 1 Resin |
| 9 | T1 | Birch Heavy Crossbow | 1 Birch Heavy Stock + 1 Heavy Winch Assembly + 1 Simple Bowstring + 1 Resin |
| 15 | T2 | Oak Shortbow | 2 Oak Bow Limbs + 1 Simple Bowstring |
| 16 | T2 | Oak Light Crossbow | 1 Oak Crossbow Stock + 1 Light Trigger Assembly + 1 Simple Bowstring |
| 18 | T2 | Willow Longbow | 2 Willow Reinforced Limbs + 1 Simple Bowstring + 1 Resin |
| 19 | T2 | Willow Heavy Crossbow | 1 Willow Heavy Stock + 1 Heavy Winch Assembly + 1 Simple Bowstring + 1 Resin |
| 25 | T3 | Ironwood Shortbow | 2 Ironwood Bow Limbs + 1 Simple Bowstring |
| 26 | T3 | Ironwood Light Crossbow | 1 Ironwood Crossbow Stock + 1 Light Trigger Assembly + 1 Simple Bowstring |
| 28 | T3 | Cedar Longbow | 2 Cedar Reinforced Limbs + 1 Simple Bowstring + 1 Resin |
| 29 | T3 | Cedar Heavy Crossbow | 1 Cedar Heavy Stock + 1 Heavy Winch Assembly + 1 Simple Bowstring + 1 Resin |
| 35 | T4 | Silverpine Shortbow | 2 Silverpine Bow Limbs + 1 Reinforced Bowstring |
| 36 | T4 | Silverpine Light Crossbow | 1 Silverpine Crossbow Stock + 1 Reinforced Trigger Assembly + 1 Reinforced Bowstring |
| 38 | T4 | Moonwood Longbow | 2 Moonwood Reinforced Limbs + 1 Reinforced Bowstring + 1 Resin |
| 39 | T4 | Moonwood Heavy Crossbow | 1 Moonwood Heavy Stock + 1 Reinforced Winch Assembly + 1 Reinforced Bowstring + 1 Resin |
| 45 | T5 | Emberwood Shortbow | 2 Emberwood Bow Limbs + 1 Reinforced Bowstring |
| 46 | T5 | Emberwood Light Crossbow | 1 Emberwood Crossbow Stock + 1 Reinforced Trigger Assembly + 1 Reinforced Bowstring |
| 48 | T5 | Cinderbark Longbow | 2 Cinderbark Reinforced Limbs + 1 Reinforced Bowstring + 1 Resin |
| 49 | T5 | Cinderbark Heavy Crossbow | 1 Cinderbark Heavy Stock + 1 Reinforced Winch Assembly + 1 Reinforced Bowstring + 1 Resin |
| 55 | T6 | Frostbark Shortbow | 2 Frostbark Bow Limbs + 1 Reinforced Bowstring |
| 56 | T6 | Frostbark Light Crossbow | 1 Frostbark Crossbow Stock + 1 Reinforced Trigger Assembly + 1 Reinforced Bowstring |
| 58 | T6 | Icewillow Longbow | 2 Icewillow Reinforced Limbs + 1 Reinforced Bowstring + 1 Resin |
| 59 | T6 | Icewillow Heavy Crossbow | 1 Icewillow Heavy Stock + 1 Reinforced Winch Assembly + 1 Reinforced Bowstring + 1 Resin |
| 65 | T7 | Stormwillow Shortbow | 2 Stormwillow Bow Limbs + 1 Runic Bowstring |
| 66 | T7 | Stormwillow Light Crossbow | 1 Stormwillow Crossbow Stock + 1 Precision Trigger Assembly + 1 Runic Bowstring |
| 68 | T7 | Thunder Oak Longbow | 2 Thunder Oak Reinforced Limbs + 1 Runic Bowstring + 1 Resin |
| 69 | T7 | Thunder Oak Heavy Crossbow | 1 Thunder Oak Heavy Stock + 1 Runic Winch Assembly + 1 Runic Bowstring + 1 Resin |
| 75 | T8 | Aetherwood Shortbow | 2 Aetherwood Bow Limbs + 1 Runic Bowstring |
| 76 | T8 | Aetherwood Light Crossbow | 1 Aetherwood Crossbow Stock + 1 Precision Trigger Assembly + 1 Runic Bowstring |
| 78 | T8 | Prismwood Longbow | 2 Prismwood Reinforced Limbs + 1 Runic Bowstring + 1 Resin |
| 79 | T8 | Prismwood Heavy Crossbow | 1 Prismwood Heavy Stock + 1 Runic Winch Assembly + 1 Runic Bowstring + 1 Resin |
| 85 | T9 | Umbralwood Shortbow | 2 Umbralwood Bow Limbs + 1 Runic Bowstring |
| 86 | T9 | Umbralwood Light Crossbow | 1 Umbralwood Crossbow Stock + 1 Precision Trigger Assembly + 1 Runic Bowstring |
| 88 | T9 | Nightbark Longbow | 2 Nightbark Reinforced Limbs + 1 Runic Bowstring + 1 Resin |
| 89 | T9 | Nightbark Heavy Crossbow | 1 Nightbark Heavy Stock + 1 Runic Winch Assembly + 1 Runic Bowstring + 1 Resin |
| 95 | T10 | Starwood Shortbow | 2 Starwood Bow Limbs + 1 Astral Bowstring |
| 96 | T10 | Starwood Light Crossbow | 1 Starwood Crossbow Stock + 1 Astral Trigger Assembly + 1 Astral Bowstring |
| 98 | T10 | Astral Cedar Longbow | 2 Astral Cedar Reinforced Limbs + 1 Astral Bowstring + 1 Resin |
| 99 | T10 | Astral Cedar Heavy Crossbow | 1 Astral Cedar Heavy Stock + 1 Astral Winch Assembly + 1 Astral Bowstring + 1 Resin |

---

# 29. WEAPON QUALITY

No random:

- Poor;
- Fine;
- Perfect;
- Legendary

craft quality.

One recipe produces one deterministic weapon item.

---

# 30. SHORTBOW MATERIAL RULE

Shortbow uses:

- Primary Timber;
- standard Bowstring.

It is the cheapest and simplest ranged weapon family.

---

# 31. LONGBOW MATERIAL RULE

Longbow uses:

- Specialty Timber;
- Bowstring;
- Resin.

Its extra material burden supports its heavier ranged identity.

---

# 32. LIGHT CROSSBOW MATERIAL RULE

Light Crossbow uses:

- Primary Timber Stock;
- Trigger Assembly;
- Bowstring.

Its cost comes from Smithing mechanisms rather than rare wood.

---

# 33. HEAVY CROSSBOW MATERIAL RULE

Heavy Crossbow uses:

- Specialty Heavy Stock;
- Heavy Winch Assembly;
- Bowstring;
- Resin.

It is the most component-heavy baseline ranged weapon.

---

# 34. HEARTWOOD

Heartwood is used in selected:

- reinforced bows;
- reinforced crossbows;
- advanced Rods;
- T10/endgame crafts.

Do not create Heartwood versions of every weapon every tier.

Grades follow Woodcutting:

- Seasoned;
- Refined;
- Primal;
- Astral;
- Worldroot.

---

# 35. FISHING RODS

Fletching owns Fishing Rod assembly.

Rod progression directly consumes the timber ladder already defined by Woodcutting.

This creates:

**Woodcutting → Fletching → Fishing → Cooking**

---

# 36. TOOL HANDLES

Fletching creates tiered Handles from Utility Blanks.

Handles feed:

- Pickaxes;
- Logging Axes;
- Smithing Hammers;
- Hunting Knives;
- future tools.

---

# 37. HUNTING COMPONENTS

Fletching can produce:

- trap frames;
- stakes;
- trigger shafts;
- light structural parts.

Future Hunting should combine:

**Fletching frame + Smithing mechanism + Hunting materials**

---

# 38. BATCHING

Shaping and Ammo support large batches.

Weapon assembly uses smaller batches.

Suggested batch efficiency:

| Batch | Time Mult./Craft |
|---:|---:|
| 1 | 1.00x |
| 5 | 0.96x |
| 10 | 0.93x |
| 25 | 0.90x |
| 50 | 0.88x |
| 100 | 0.86x |

Ammo gains an additional small batch-efficiency advantage.

---

# 39. MATERIAL PRESERVATION

Normal Fletching inputs can be preserved.

Hard cap:

**50%**

Protected rare inputs may ignore preservation:

- Worldroot Heartwood;
- future boss materials.

---

# 40. RECIPE MASTERY

Every important recipe has:

**Mastery 1–100**

Examples:

- Alder Shaft Bundle;
- Copper Arrows;
- Birch Longbow;
- Stormwillow Rod;
- Starwood Handle.

---

# 41. MASTERY MILESTONES

| Mastery | Effect |
|---:|---|
| 10 | Recipe action time -2% |
| 25 | Material Preservation +3 pp |
| 50 | Shaping/Ammo Output +4 pp or Weapon Assembly Time -3% |
| 75 | Mastery XP +8% |
| 100 | Action Time -4% additional; Preservation +3 pp |

---

# 42. SKILL-WIDE MASTERY

| Completion | Reward |
|---:|---|
| 10% | Fletching action time -2% |
| 25% | Preservation +2 pp; second preset |
| 50% | Worker efficiency +5%; Ammo Output +3 pp |
| 75% | Shaping Power +5%; third preset |
| 100% | Action Time -4%; Ammo Output +4 pp; Master Fletcher marker |

---

# 43. SPECIALIZATIONS

Unlock at:

**Fletching 35**

Three:

- Bowyer;
- Arbalist;
- Ammunitioner.

All reversible.

---

# 44. BOWYER

Effects:

- Shortbow/Longbow Assembly Time -12%;
- Bow Material Preservation +6 pp;
- Bow Mastery XP +10%;
- Fishing Rod Assembly Time -8%;
- Crossbow Assembly Time +5%.

---

# 45. ARBALIST

Effects:

- Crossbow Assembly Work -12%;
- Trigger/Winch Preservation +6 pp;
- Bolt crafting time -8%;
- Crossbow Mastery XP +10%;
- Bow Assembly Time +5%.

---

# 46. AMMUNITIONER

Effects:

- Ammo crafting time -12%;
- Ammo Output +15 pp;
- Ammo Material Preservation +6 pp;
- Shaft Bundle shaping time -10%;
- Weapon Assembly Time +5%.

---

# 47. SPECIALIZATION SWITCHING

Free outside active craft.

Switching cancels unfinished craft progress and returns reserved normal inputs.

No respec currency.

---

# 48. PROFESSION CLOTHING

Use four broad set identities:

## Fletcher — T3

General Shaping + early ammo.

## Bowyer — T5

Shortbow/Longbow.

## Arbalist — T7

Crossbows/Bolts.

## Master Fletcher — T9

High-tier hybrid.

Pieces should mix freely.

---

# 49. PROFESSION JEWELRY

Recommended situational jewelry:

- Carver's Ring — Shaping Work;
- Stringer's Pendant — weapon assembly;
- Ammunition Band — Ammo Output;
- Bowyer's Knot — Bow Preservation;
- Arbalist Seal — Crossbow Work;
- Resinbound Loop — rare wood preservation;
- Batchmaker Chain — Ammo batches;
- Astral Fletcher Emblem — endgame general.

No purely linear replacement chain.

---

# 50. SAVED LOADOUTS

Recommended presets:

- Bow Production;
- Crossbow Production;
- Ammo Factory;
- Utility Workshop;
- Mastery.

Presets remember:

- Tool;
- clothing;
- jewelry;
- Specialization;
- Batch;
- reserve rules.

---

# 51. ESTATE FLETCHING BENCH

Early Fletching uses a personal Hand Bench.

Estate progression:

| Bench | Estate Stage | Max Batch | Queue | Main Unlock |
|---|---|---:|---:|---|
| I | House | 5 | 2 | presets / analytics |
| II | Lodge | 10 | 4 | ammo batching / first worker |
| III | Manor | 25 | 6 | chain production / 3 workers |
| IV | Estate | 50 | 10 | worker teams |
| V | Holdings | 100 | Expanded | Worldroot / endgame production |

The Bench is infrastructure, not a skill.

---

# 52. WORKERS

Workers can perform:

- Shaping;
- Ammo;
- Rods;
- Handles;
- Weapon Assembly.

They consume real materials.

---

# 53. PROVEN RECIPES

Recipe becomes worker-eligible at:

**Recipe Mastery 10**

Player pioneers; workers maintain.

---

# 54. WORKER PROFICIENCY

Base worker efficiency:

**50% + Proficiency ×0.50%**

Worker 1 = 50.5%  
Worker 50 = 75%  
Worker 100 = 100%

Workers do not grant player XP/Mastery.

---

# 55. FRONTIER PENALTY

Highest unlocked Fletching Tier:

| Recipe Mastery | Worker Multiplier |
|---:|---:|
| 10–24 | 75% |
| 25–49 | 85% |
| 50–74 | 92.5% |
| 75–99 | 97.5% |
| 100 | 100% |

Older tiers have no frontier penalty.

---

# 56. AMMO WORKERS

Fletching workers are especially valuable for maintaining:

- Arrow reserve;
- Bolt reserve.

Example:

> Maintain 25,000 Stormiron Arrows.  
> If target met → switch to Bolts.  
> If both met → fallback to Shafts.

---

# 57. OLD TOOL HAND-ME-DOWNS

Old:

- Fletching Knife;
- clothing;
- jewelry

can move to workers.

Use equipment templates.

---

# 58. ACTIVITY PLANNER

Starter:

- craft indefinitely;
- stop at quantity;
- stop at level;
- stop when input missing.

Later:

- Mastery target;
- resource reserves;
- ammo reserve;
- production chains;
- preset switching;
- worker schedules.

---

# 59. ARROW PRODUCTION CHAIN

Example:

**Woodcutting → Stormwillow Logs**

↓

**Fletching → Shaft Bundles**

+

**Smithing → Stormiron Arrowheads**

+

**Hunting → Feather Bundles**

↓

**Fletching → Stormiron Arrows**

---

# 60. CROSSBOW PRODUCTION CHAIN

Example Heavy Crossbow:

**Specialty Wood → Heavy Stock**

+

**Smithing → Winch Assembly**

+

**Tailoring/Runecrafting → Bowstring**

+

**Woodcutting → Resin**

↓

**Heavy Crossbow**


---

# 61. RESOURCE RESERVES

Fletching respects protected Bank reserves for:

- Primary Logs;
- Specialty Logs;
- Resin;
- Heartwood;
- Strings;
- Feather Bundles;
- Arrowheads;
- Bolt Heads;
- Trigger / Winch Assemblies.

Example:

**Primal Heartwood Reserve: 100**

The planner and workers cannot consume below this value unless:

**Ignore Reserve**

is explicitly enabled.

---

# 62. PRODUCTION PRIORITY

When multiple recipes consume the same component, the player can assign priority.

Example:

1. Maintain 25,000 Stormiron Arrows.
2. Maintain 10,000 Stormiron Bolts.
3. Keep 250 Stormwillow Shaft Bundles.
4. Use remaining resources on worker weapon replacements.

This prevents automation from exhausting a shared component line.

---

# 63. FLETCHING XP

Every completed recipe grants Fletching XP.

Recommended relative XP weights:

| Category | XP Weight |
|---|---:|
| Shaft Bundle | 0.80x |
| Utility Blank / Handle | 0.90x |
| Bow Limb / Stock | 1.00x |
| Ammo Batch | 1.00x |
| Shortbow | 1.15x |
| Light Crossbow | 1.20x |
| Fishing Rod | 1.20x |
| Longbow | 1.30x |
| Heavy Crossbow | 1.45x |

Actual numeric XP is finalized by the global 1–100 skill curve.

---

# 64. MASTERY XP

Recommended:

**Recipe Mastery XP = Fletching XP ×0.40**

then apply:

- profession clothing;
- jewelry;
- Specialization;
- Skill-Wide modifiers.

Ammo Mastery is awarded per crafting action, not per individual Arrow/Bolt.

---

# 65. ASSEMBLY TIME

Recommended base Assembly Time by Tier:

| Tier | Base Time |
|---|---:|
| T1 | 4.0s |
| T2 | 4.4s |
| T3 | 4.8s |
| T4 | 5.2s |
| T5 | 5.6s |
| T6 | 6.0s |
| T7 | 6.4s |
| T8 | 6.8s |
| T9 | 7.2s |
| T10 | 7.6s |

Family multipliers:

- Shortbow 1.00x;
- Light Crossbow 1.15x;
- Longbow 1.20x;
- Heavy Crossbow 1.40x;
- Fishing Rod 1.00x;
- Handle 0.65x.

---

# 66. ASSEMBLY FORMULA

**Final Assembly Time = Tier Base Time × Family Multiplier × gear × Mastery × Specialization × Bench modifiers**

Minimum final Assembly Time:

**40% of original**

This prevents runaway speed stacking.

---

# 67. SHAPING FORMULA

**Final Work = Tier Base Work × Recipe-Type Multiplier × Work modifiers**

Each Tool action:

**Remaining Work -= Final Shaping Power**

Action Time:

**Tool Action Time × all action-speed modifiers**

Minimum action time:

**45% of Tool base**

---

# 68. FINAL SHAPING POWER

Recommended:

**Final Shaping Power = Tool Shaping Power × gear × Mastery × Specialization × global modifiers**

Display:

- Shaping Power;
- Work Remaining;
- actions remaining.

Keep simulation precision internally.

---

# 69. PRESERVATION FORMULA

For every preservable input unit:

**roll Material Preservation**

Success:

input is not consumed.

Hard cap:

**50%**

Protected rare resources ignore Preservation.

---

# 70. AMMO BONUS FORMULA

Each Ammo craft:

1. create Base Output;
2. roll Ammo Output Chance;
3. success grants:
   **ceil(Base Output ×0.25)** additional Ammo.

No chain roll.

Hard cap:

**75%**

---

# 71. AMMO PRESERVATION ECONOMY

Ammo has three main input families:

- wood component;
- metal head;
- Feather Bundle.

Preservation applies to each independently.

This allows setups like:

- timber saver;
- metal saver;
- feather saver

if future items target specific inputs.

Baseline generic Preservation treats all equally.

---

# 72. WEAPON REPAIR / DURABILITY

Baseline ranged weapons do:

**not**

have durability.

Fletching is already economically sustained by consumable Ammo.

Adding weapon repair would duplicate maintenance.

---

# 73. AMMO PRESERVATION IN COMBAT

Combat may later include:

**Ammo Preservation**

This is separate from:

**Fletching Material Preservation**

One reduces Ammo consumed during Combat.

The other reduces materials used to craft Ammo.

Both can coexist.

---

# 74. OFFLINE FLETCHING

Save state includes:

- active recipe;
- production mode;
- Batch;
- Work Remaining;
- Assembly Progress;
- Tool;
- clothing;
- jewelry;
- Specialization;
- reserves;
- queue;
- worker assignments.

Offline uses identical formulas.

---

# 75. OFFLINE RESULTS

Show:

- elapsed time;
- components produced;
- Arrows;
- Bolts;
- weapons;
- Fishing Rods;
- Handles;
- materials consumed;
- materials preserved;
- bonus Ammo;
- Fletching XP;
- Recipe Mastery;
- planner transitions;
- worker output separately.

---

# 76. SCREEN STRUCTURE

Recommended tabs:

- Shaping;
- Bows;
- Crossbows;
- Arrows;
- Bolts;
- Fishing Rods;
- Utility.

Do not mix everything into one giant recipe list.

---

# 77. RECIPE CARDS

Each card should show:

- icon;
- recipe name;
- level;
- Tier;
- required inputs;
- output;
- Mastery;
- current expected time;
- worker eligibility;
- resource reserve warning.

Ammo cards additionally show:

- Base Output;
- Bonus Output Chance;
- Ammo/hour.

---

# 78. ACTIVE SHAPING PANEL

Show:

- current component;
- Work Remaining;
- Shaping Power;
- Tool action time;
- actions remaining;
- Batch progress;
- input reserve.

This should visually resemble a production activity, not a generic spinner.

---

# 79. ACTIVE ASSEMBLY PANEL

Show:

- current weapon/item;
- Assembly progress;
- required components;
- remaining Batch;
- Preservation;
- output/hour.

---

# 80. AMMO PANEL

Ammo production needs especially clear analytics:

- Base Output/action;
- bonus output chance;
- average Ammo/action;
- Ammo/hour;
- Shaft Bundles/hour consumed;
- metal heads/hour;
- Feathers/hour;
- preservation/hour.

Because Ammo supports long Combat, these numbers are critical.

---

# 81. WEAPON FAMILY INSPECTION

Weapon cards clearly state family role:

## Shortbow
- 2H;
- Arrows;
- fastest family.

## Longbow
- 2H;
- Arrows;
- slower / accurate / heavy shot.

## Light Crossbow
- 1H;
- Bolts;
- enables Ranged Off-Hand.

## Heavy Crossbow
- 2H;
- Bolts;
- slowest / highest-impact.

No need to hide these rules in tooltips.

---

# 82. ANALYTICS

Fletching analytics should show:

- components/hour;
- weapon/hour;
- Rod/hour;
- Handle/hour;
- Arrows/hour;
- Bolts/hour;
- Logs/hour consumed;
- Resin/hour;
- Heartwood/hour;
- metal heads/hour;
- Feathers/hour;
- Bowstrings/hour;
- material preserved/hour;
- XP/hour;
- Mastery/hour;
- ETA to Level;
- ETA to Recipe Mastery.

Workers shown separately.

---

# 83. COMPLETE LEVEL ROADMAP

| Fletching Lvl | Major Unlock |
|---|---|
| 1 | Alder Shaft Bundle; Worn Fletching Knife |
| 2 | Alder Bow Limbs |
| 3 | Alder Crossbow Stock / Handle |
| 4 | Copper Shortbow / Copper Arrows |
| 5 | Copper Bolts; Reed Rod; Copper Fletching Knife |
| 7 | Birch Reinforced Limbs |
| 8 | Birch Heavy Stock |
| 9 | Birch Longbow / Heavy Crossbow |
| 11 | Oak shaping family |
| 15 | Iron Arrows/Bolts; Iron Drawknife; Carver's Ring |
| 18 | Willow Longbow / Heavy Crossbow |
| 21 | Ironwood shaping family |
| 25 | Cobalt ammo; Cobalt Fletching Knife; Fletcher set; Stringer's Pendant |
| 28 | Cedar Longbow / Heavy Crossbow |
| 31 | Silverpine shaping family |
| 35 | Argent ammo; Argent Drawknife; Specializations; Ammunition Band |
| 38 | Moonwood Longbow / Heavy Crossbow |
| 41 | Emberwood shaping family |
| 45 | Emberite ammo; Emberite Knife; Bowyer set; Bowyer's Knot |
| 48 | Cinderbark Longbow / Heavy Crossbow |
| 51 | Frostbark shaping family |
| 55 | Frostsilver ammo; Frostsilver Drawknife; Arbalist Seal |
| 58 | Icewillow Longbow / Heavy Crossbow |
| 61 | Stormwillow shaping family |
| 65 | Stormiron ammo; Stormiron Knife; Arbalist set; Resinbound Loop |
| 68 | Thunder Oak Longbow / Heavy Crossbow |
| 71 | Aetherwood shaping family |
| 75 | Aetherite ammo; Aetherite Drawknife; Batchmaker Chain |
| 78 | Prismwood Longbow / Heavy Crossbow |
| 81 | Umbralwood shaping family |
| 85 | Umbral ammo; Umbral Knife; Master Fletcher set |
| 88 | Nightbark Longbow / Heavy Crossbow |
| 91 | Starwood shaping family |
| 95 | Astralite ammo; Astralite Master Knife; Astral Fletcher Emblem |
| 98 | Astral Cedar Longbow / Heavy Crossbow |
| 100 | Fletching cap; Worldroot endgame line unlock path |

This roadmap intentionally interleaves:

- components;
- Ammo;
- weapons;
- Rods;
- Tools;
- gear;
- Specialization.

---

# 84. CHRONICLES — EARLY FLETCHING

Suggested goals:

1. Shape first Alder Shaft Bundle.
2. Shape first Bow Limbs.
3. Craft first Copper Arrows.
4. Assemble first Shortbow.
5. Explain consumable Ammo.
6. Craft first Tool Handle.
7. Craft first Fishing Rod.
8. Reach Recipe Mastery 10.
9. Explain Proven recipe for workers.

---

# 85. CHRONICLES — MIDGAME

Suggested:

- craft first Longbow;
- craft first Light Crossbow;
- craft first Heavy Crossbow;
- choose Fletching Specialization;
- create 5,000 Ammo;
- use Resin;
- use Heartwood;
- build Fletching Bench II/III;
- assign worker;
- create Ammo reserve automation.

---

# 86. CHRONICLES — LATE

Suggested:

- craft Stormiron Arrows/Bolts;
- create Runic Bowstring weapon;
- maintain 25,000 Ammo through workers;
- craft Umbral ranged weapon;
- craft Starwood Fishing Rod;
- reach Fletching 100;
- complete Worldroot unlock requirements.

---

# 87. MASTER FLETCHER CHRONICLE

Recommended requirements:

- Fletching 100;
- Fletching Bench V;
- Astralite Master Knife;
- at least one T10 weapon recipe Mastery 50;
- Astralite Arrows or Bolts Mastery 50;
- Woodcutting has unlocked Worldroot.

Reward:

**Worldroot Fletching**

and:

- fourth Fletching preset;
- Master Fletcher completion marker.

---

# 88. WORLDROOT ENDGAME LINE

Worldroot should not create a full second T11 weapon tier.

Keep it selective.

Recommended baseline Worldroot weapons:

- Worldroot Longbow;
- Worldroot Heavy Crossbow.

These are high-end specialist crafts.

---

# 89. WORLDROOT LONGBOW

Expected inputs:

- Worldroot Timber;
- Worldroot Heartwood;
- Worldroot Bowstring;
- Resin;
- Astral metal fitting.

Identity:

- ultimate heavy Bow baseline.

Combat finalizes stats.

---

# 90. WORLDROOT HEAVY CROSSBOW

Expected inputs:

- Worldroot Timber;
- Worldroot Heartwood;
- Worldforged/Astral Winch Assembly;
- Worldroot Bowstring;
- Resin.

Identity:

- ultimate baseline Heavy Crossbow.

---

# 91. WHY NO WORLDROOT SHORTBOW / LIGHT CROSSBOW YET

Worldroot should feel special.

Adding all four families automatically would create unnecessary duplication.

Combat can later justify additional endgame recipes if:

- Shortbow;
- Light Crossbow

need equivalent unique endgame paths.

---

# 92. FLETCHING ↔ WOODCUTTING

Woodcutting supplies:

- Primary Logs;
- Specialty Logs;
- Resin;
- Heartwood;
- Worldroot.

Fletching turns these into:

- components;
- ranged weapons;
- Rods;
- Handles;
- trap parts.

This is the profession's strongest material link.

---

# 93. FLETCHING ↔ SMITHING

Smithing supplies:

- Arrowheads;
- Bolt Heads;
- Trigger Assemblies;
- Winch Assemblies;
- Tool metal.

Fletching returns:

- Handles;
- ranged equipment.

The two professions should remain heavily interconnected.

---

# 94. FLETCHING ↔ HUNTING

Hunting supplies:

- Feather Bundles;
- future fibres/sinew if needed.

Fletching supplies:

- trap frames;
- shafts;
- ranged equipment.

This creates a strong mutual support loop.

---

# 95. FLETCHING ↔ TAILORING

Tailoring is expected to supply:

- Simple Bowstrings;
- Reinforced Bowstrings;
- Runic/Astral textile bases.

Fletching assembles them into weapons.

Do not duplicate textile production inside Fletching.

---

# 96. FLETCHING ↔ FISHING

Fletching assembles all major Fishing Rods.

This ensures Fishing gear has a real production source.

---

# 97. OLD-TIER RELEVANCE

Old Logs/components remain useful through:

- old Ammo for cheap farming;
- worker weapons;
- Tool Handles;
- Fishing Rods;
- Hunting traps;
- Estate components;
- cross-tier recipes.

Do not force absurd old-resource requirements into T10 recipes.

---

# 98. WORKER RANGED SUPPLY

Late-game worker economy can maintain:

- cheap low-tier Ammo for old content;
- expensive high-tier Ammo for current Combat;
- Fishing Rod replacement/progression;
- worker Tool Handles;
- trap components.

This is one of the clearest "infrastructure supports endgame" examples.

---

# 99. DEVTOOLS

Fletching DevTools should support:

- set Fletching Level;
- set Recipe Mastery;
- set Skill-Wide Mastery;
- unlock all recipes;
- spawn components;
- spawn Ammo;
- spawn weapons;
- spawn Bowstrings;
- spawn Resin/Heartwood;
- spawn Tool;
- spawn gear/jewelry;
- set Bench Tier;
- set Specialization;
- mark Proven;
- set Shaping Work;
- instant complete;
- spawn worker;
- set worker Proficiency;
- simulate 1m / 5m / 1h / 8h / 24h;
- compare expected vs actual Ammo production.

---

# 100. DATA MODEL

Recipe data:

- ID;
- category;
- Tier;
- level;
- input list;
- output;
- Base Quantity;
- Shaping Work or Assembly Time;
- XP;
- Mastery ID;
- Batch eligibility.

Weapon data:

- family;
- hands;
- Ammo class;
- combat-profile key.

Player data:

- Recipe Mastery;
- Proven flags;
- presets;
- Specialization;
- reserves;
- planner.

---

# 101. ANTI-BLOAT RULES

Avoid:

- separate Arrow Shaft and Bolt Shaft;
- random weapon quality;
- 10 Bowstring tiers;
- Feather per bird species;
- Resin per Tree;
- Heartwood weapon copy every tier;
- Tool durability;
- manual crafting minigame;
- separate Ammo for Shortbow vs Longbow;
- separate Bolts for Light vs Heavy Crossbow.

Prefer:

- shared Shaft Bundles;
- four broad String grades;
- universal Feather Bundle;
- universal Resin;
- limited Heartwood variants;
- clear weapon identities;
- big Ammo batches.

---

# 102. MAJOR OPEN QUESTIONS — RECOMMENDED ANSWERS

## Which baseline Ranged weapon families?

**Shortbow, Longbow, Light Crossbow, Heavy Crossbow.**

---

## Shortbow hands?

**2H.**

---

## Longbow hands?

**2H.**

---

## Light Crossbow hands?

**1H.**

This is its defining identity.

---

## Heavy Crossbow hands?

**2H.**

---

## Should Light Crossbow allow Off-Hand?

**Yes.**

A dedicated Ranged Off-Hand slot/item system should be designed later.

---

## Should Quiver automatically be that Off-Hand?

**Not locked.**

Do not create one mandatory Quiver that makes every Light Crossbow build obvious.

Combat should decide meaningful Ranged Off-Hand options.

---

## Should Bows and Crossbows use consumable Ammo?

**Yes.**

---

## Should Shortbow and Longbow use separate Arrow types?

**No.**

Shared Arrows.

---

## Should Light and Heavy Crossbow use separate Bolt types?

**No.**

Shared Bolts.

---

## Should Ammo be recoverable?

Combat may add Ammo Preservation.

Fletching itself does not recover fired Ammo.

---

## Should Ammo have quality tiers beyond metal tier?

**No baseline.**

Avoid Normal/Fine/Perfect Ammo stacks.

---

## Should every Tier have all four weapon families?

**Yes.**

This preserves player weapon preference through 1–100.

---

## Should one family be universally strongest?

**No.**

Combat should trade:

- speed;
- per-hit damage;
- accuracy;
- armor penetration;
- Off-Hand access;
- Ammo consumption.

---

## Should Fletching directly use raw Logs for weapons?

**No for baseline precision weapons.**

Use shaped components.

---

## Should every Log be converted into Planks first?

**No.**

No generic plank system is needed.

Use profession-specific components.

---

## Should Fletching produce Bowstrings?

**No baseline.**

Tailoring/Hunting-linked systems should supply them.

---

## Should Smithing provide Arrow/Bolt heads?

**Yes.**

---

## Should Hunting provide Feathers?

**Yes.**

---

## Should each bird drop unique Feather types?

**No.**

Use universal Feather Bundle.

---

## Should Resin be mandatory on all bows?

**No.**

Mainly Longbows / Heavy Crossbows / advanced items.

---

## Should Heartwood be mandatory for normal tier progression?

**No.**

Use it for advanced selected recipes.

---

## Should Fishing Rods be Fletching recipes?

**Yes.**

---

## Should Tool Handles be Fletching recipes?

**Yes.**

This creates permanent support value.

---

## Should Fletching have random craft failures?

**No.**

---

## Should Fletching Tool have durability?

**No.**

---

## Should weapons have durability?

**No baseline.**

Ammo already creates upkeep.

---

## Should Fletching have three Specializations?

**Yes.**

Bowyer / Arbalist / Ammunitioner clearly cover the major jobs.

---

## Separate Fishing-Rod specialization?

**No.**

Bowyer can support Rod production.

---

## Should workers be especially important for Ammo?

**Yes.**

Ammo is ideal for repeatable worker production.

---

## When can workers craft a recipe?

At:

**Recipe Mastery 10**

---

## Do workers grant player XP/Mastery?

**No.**

---

## Should workers use real resources?

**Yes.**

---

## Should Fletching require Estate Bench at Level 1?

**No.**

Hand Bench works early.

---

## Should Ammo batches be large?

**Yes.**

They must support long unattended Combat.

---

## Should Ammo bonus double full batch?

**No.**

Use +25% of Base Output on proc.

---

## Should old Ammo remain usable?

**Yes.**

It can be used for cheaper older Combat, workers, or resource conservation.

Higher Ammo should generally be stronger, but old stacks should not become invalid items.

---

## Should Fletching 100 finish the profession?

**No.**

Post-100:

- Mastery;
- worker production;
- Worldroot;
- completion;
- endgame weapons.

---

# 103. COMPLETE LOCKED BASELINE

1. Fletching uses Shaping → Components → Assembly.
2. Four Ranged weapon families.
3. Shortbow = 2H / Arrows / fast.
4. Longbow = 2H / Arrows / heavier accurate shots.
5. Light Crossbow = 1H / Bolts / Off-Hand access.
6. Heavy Crossbow = 2H / Bolts / largest impact.
7. Arrows shared by both Bow families.
8. Bolts shared by both Crossbow families.
9. Ammo is consumable.
10. 10 normal Ammo tiers.
11. Deterministic weapons; no random quality.
12. Component types:
    - Shaft Bundle;
    - Bow Limbs;
    - Crossbow Stock;
    - Utility Blank.
13. Primary Timber mainly supports Shortbow / Light Crossbow.
14. Specialty Timber mainly supports Longbow / Heavy Crossbow.
15. Resin supports heavier/specialty builds.
16. Heartwood supports selected advanced recipes.
17. Strings come from Tailoring/Hunting-linked systems.
18. metal heads/mechanisms come from Smithing.
19. Feathers mainly come from Hunting.
20. Fletching makes Fishing Rods.
21. Fletching makes Tool Handles.
22. Fletching makes Hunting components.
23. Fletching Knife/Drawknife is primary Tool.
24. No durability.
25. Recipe Mastery 1–100.
26. Skill-Wide Mastery.
27. Three reversible Specializations.
28. Estate Fletching Bench expands scale.
29. Workers use real resources.
30. Mastery 10 makes recipe Proven.
31. Workers gain Proficiency.
32. Workers are ideal Ammo suppliers.
33. Planner supports reserves and chains.
34. Offline uses identical rules.
35. Worldroot adds selective endgame crafts.
36. All baseline Fletching rules live in this file.

---

# 104. FINAL SUMMARY

Fletching begins with:

**Alder Logs**

↓

**Shaft Bundles / Bow Limbs / Crossbow Stocks**

↓

**Copper Arrows / Bolts**

↓

**Shortbow / Light Crossbow**

↓

**Specialty Timber**

↓

**Longbow / Heavy Crossbow**

↓

**better Strings + Smithing mechanisms**

↓

**Fishing Rods / Handles / Hunting parts**

↓

**Fletching Specialization**

↓

**large Ammo production**

↓

**worker Ammo factories**

↓

**Starwood / Astral Cedar**

↓

**Fletching 100**

↓

**Worldroot endgame ranged crafting**

Weapon identities:

> **Shortbow — speed**

> **Longbow — deliberate heavy/accurate shots**

> **Light Crossbow — 1H flexibility**

> **Heavy Crossbow — maximum 2H impact**

Economic identity:

> **Woodcutting supplies timber, Smithing supplies metal, Hunting/Tailoring supply flexible components, and Fletching turns all of them into the complete Ranged supply chain.**

Core identity:

> **Shape the wood, assemble the weapon, and keep the ranged economy supplied.**
