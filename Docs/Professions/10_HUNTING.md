# 10 — HUNTING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `Woodcutting.md`, `Smithing.md`, `Fletching.md`, `Leatherworking.md`, `Cooking.md`, `Tailoring.md`, `Alchemy.md`
**Purpose:** Define Hunting as one complete profession in a single source-of-truth file: Hunting Grounds, explicit prey targeting, Tracking, Hunt Methods, Field Dressing, tiered Hides/Meat, Feathers/Sinew/Fur/Bone/Fang components, profession Tool/gear, Mastery, Specializations, Hunting Lodge, workers, planner, Chronicles, UI, formulas, Cooking/Fletching/Leatherworking integration, and post-100 endgame hunting.

**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)

---

# 1. HUNTING ROLE IN THE GAME

Hunting is the profession for deliberately acquiring animal resources.

Main outputs feed:

- Leatherworking;
- Cooking;
- Fletching;
- Tailoring;
- Estate;
- selected profession equipment;
- future Alchemy/Jewelcrafting recipes.

Hunting should not become:

- mini Combat;
- random wandering;
- unknown spawn tables;
- "kill whatever appears."

The player selects:

**Hunting Ground → specific Prey Target**

and can see:

- kills/hunts per hour;
- expected Hide/hour;
- Meat/hour;
- Feather/Sinew/component/hour.

Predictability is critical.

---

# 2. CORE FANTASY

The player begins tracking small prey near civilization.

Over time they learn to:

- read tracks;
- hunt different animal archetypes;
- use Stalk, Snare, Ambush, and Trophy methods;
- field-dress carcasses efficiently;
- focus on Meat, Hide, or special animal materials;
- supply Leatherworking and Cooking;
- maintain Feather and Sinew supply for Fletching/Tailoring;
- establish worker hunting parties;
- personally pursue dangerous late-game predators and rare endgame prey.

Long-term fantasy:

**Hunter → Tracker → Skinner/Gamekeeper → Master Hunter → Leader of an Estate Hunting Network**

---

# 3. HUNTING IS NOT COMBAT

Hunting prey does not use the normal Combat battle system.

Reason:

Hunting is a profession.

Its challenge is:

- tracking efficiency;
- target selection;
- method;
- field dressing;
- economic setup.

Normal Combat remains the system for:

- enemies;
- dangerous monsters;
- bosses;
- loot-driven battles.

Hunting uses predictable profession timers and Work.

---

# 4. CORE HUNT LOOP

Every hunt:

1. Select Hunting Ground.
2. Select specific Prey.
3. Equip Hunting loadout.
4. Select Hunt Method.
5. Select Field Dressing Priority.
6. **Tracking Phase** begins.
7. Target is located.
8. **Hunt Phase** begins.
9. Prey is successfully taken.
10. **Field Dressing Phase** begins.
11. Hunting Knife processes the carcass.
12. Award:
    - Meat;
    - Hide;
    - special components;
    - Hunting XP;
    - Prey Mastery XP.
13. Next hunt begins automatically.
14. Continue until player/planner stops.

No manual aim/reaction minigame.

---

# 5. NO NORMAL HUNT FAILURE

If:

- Ground unlocked;
- Prey unlocked;
- method valid;

the hunt succeeds.

There is no random:

- prey escaped;
- missed shot;
- broken trap;
- lost carcass.

Difficulty is represented through:

- Tracking Time;
- Hunt Time;
- Dressing Work;
- lower/higher output.

This preserves idle predictability.

---

# 6. TEN HUNTING GROUNDS

| Tier | Hunting Ground | Lvl | Small Game | Bird | Grazer | Predator | Hide Tier | Meat Tier | Base Track |
|---|---|---|---|---|---|---|---|---|---|
| T1 | Greenbank Hunting Ground | 1 | Grasshare | Redcrest Grouse | Meadow Deer | Brushfox | Light Hide | Lean Game Meat | 2.4 |
| T2 | Reedfen Hunting Ground | 11 | Marsh Rabbit | Reedwing Duck | Fen Boar | Mire Lynx | Tough Hide | Wild Game Meat | 2.6 |
| T3 | Ironwood Hunting Ground | 21 | Stone Hare | Ironcrest Turkey | Ironwood Elk | Greyfang Wolf | Rugged Hide | Prime Game Meat | 2.8 |
| T4 | Moonridge Hunting Ground | 31 | Moonhare | Pale Crane | Silver Antelope | Nightcat | Moonhide | Rich Game Meat | 3.0 |
| T5 | Emberwild Hunting Ground | 41 | Cinder Rabbit | Ashwing Raptor | Emberhorn Ram | Cinderfang Cougar | Emberhide | Ember Game Meat | 3.2 |
| T6 | Frostwild Hunting Ground | 51 | Snow Hare | Frostgrouse | Ice Elk | Whitefang Wolf | Frosthide | Frost Game Meat | 3.4 |
| T7 | Stormmoor Hunting Ground | 61 | Gale Hare | Stormhawk | Thunderhorn Bison | Razorclaw Lynx | Stormhide | Storm Game Meat | 3.6 |
| T8 | Aetherwild Hunting Ground | 71 | Prism Hare | Skyfeather Crane | Aether Stag | Rift Panther | Aetherhide | Aether Game Meat | 3.8 |
| T9 | Umbral Hunting Ground | 81 | Shade Hare | Dusk Raven | Gloomhorn Beast | Nightstalker | Umbral Hide | Umbral Game Meat | 4.0 |
| T10 | Starfall Hunting Ground | 91 | Star Hare | Comet Falcon | Celestial Hart | Astral Prowler | Astral Hide | Astral Game Meat | 4.2 |

Every Ground contains exactly four baseline prey archetypes:

- Small Game;
- Bird;
- Grazer;
- Predator.

---

# 7. PREY ARCHETYPES

| Prey Type | Tracking | Hunt | Meat | Hide | Special Outputs | Identity |
|---|---|---|---|---|---|---|
| Small Game | Fast | Fast | Low | Low | Fur Bundle / Sinew | Bulk small prey / trap-friendly |
| Bird | Medium | Fast | Low | Low | Feather Bundle / Sinew | Fletching supply |
| Grazer | Medium-Slow | Medium | High | High | Bone Fragment / Sinew | Meat + Hide bulk |
| Predator | Slow | Slow | Medium | High | Fang/Claw Fragment / Sinew | Rare components + Hide |

Each archetype has a clear economy role.

---

# 8. SMALL GAME

Identity:

- fastest tracking;
- fast hunts;
- low individual meat/hide;
- Fur/Sinew source;
- especially efficient with Snare.

Best for:

- bulk low-tier food;
- Fur;
- Sinew;
- quick Mastery cycles.

---

# 9. BIRDS

Identity:

- Feather Bundle source;
- modest Meat;
- no normal Hide;
- fast Hunts.

This is the primary long-term supply for:

**Fletching ammunition**

---

# 10. GRAZERS

Identity:

- highest Meat output;
- highest Hide output;
- slower cycle;
- Bone/Sinew.

This is the backbone of:

**Leatherworking + Cooking**

---

# 11. PREDATORS

Identity:

- slowest Tracking/Hunt;
- strong Hide;
- rarer components;
- Fang/Claw material;
- stronger XP/Mastery.

Predators should not be mandatory for ordinary Leather progression.

They are a specialist resource path.

---

# 12. COMPLETE PREY ROSTER

Hunting v1.0 contains:

**40 prey species**

Four per Tier.

| Tier | Lvl | Prey | Type | Base Track | Base Hunt | Dress Work | Meat | Qty | Hide | Qty | Special | Base XP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T1 | 1 | Grasshare | Small Game | 1.92s | 1.50s | 16 | Lean Game Meat | 1 | Light Hide | 1 | Fur Bundle | 6 |
| T1 | 3 | Redcrest Grouse | Bird | 2.28s | 1.70s | 17 | Lean Game Meat | 1 | — | 0 | Feather Bundle | 7 |
| T1 | 6 | Meadow Deer | Grazer | 2.76s | 2.20s | 30 | Lean Game Meat | 4 | Light Hide | 3 | Bone Fragment | 9 |
| T1 | 9 | Brushfox | Predator | 3.24s | 2.70s | 28 | Lean Game Meat | 2 | Light Hide | 2 | Fang & Claw Fragment | 10 |
| T2 | 11 | Marsh Rabbit | Small Game | 2.08s | 1.64s | 27 | Wild Game Meat | 1 | Tough Hide | 1 | Fur Bundle | 10 |
| T2 | 13 | Reedwing Duck | Bird | 2.47s | 1.85s | 29 | Wild Game Meat | 1 | — | 0 | Feather Bundle | 11 |
| T2 | 16 | Fen Boar | Grazer | 2.99s | 2.40s | 52 | Wild Game Meat | 4 | Tough Hide | 3 | Bone Fragment | 14 |
| T2 | 19 | Mire Lynx | Predator | 3.51s | 2.94s | 48 | Wild Game Meat | 2 | Tough Hide | 2 | Fang & Claw Fragment | 16 |
| T3 | 21 | Stone Hare | Small Game | 2.24s | 1.77s | 39 | Prime Game Meat | 1 | Rugged Hide | 1 | Fur Bundle | 15 |
| T3 | 23 | Ironcrest Turkey | Bird | 2.66s | 2.01s | 42 | Prime Game Meat | 1 | — | 0 | Feather Bundle | 17 |
| T3 | 26 | Ironwood Elk | Grazer | 3.22s | 2.60s | 75 | Prime Game Meat | 4 | Rugged Hide | 3 | Bone Fragment | 21 |
| T3 | 29 | Greyfang Wolf | Predator | 3.78s | 3.19s | 69 | Prime Game Meat | 2 | Rugged Hide | 2 | Fang & Claw Fragment | 26 |
| T4 | 31 | Moonhare | Small Game | 2.40s | 1.91s | 51 | Rich Game Meat | 1 | Moonhide | 1 | Fur Bundle | 22 |
| T4 | 33 | Pale Crane | Bird | 2.85s | 2.16s | 55 | Rich Game Meat | 1 | — | 0 | Feather Bundle | 25 |
| T4 | 36 | Silver Antelope | Grazer | 3.45s | 2.79s | 98 | Rich Game Meat | 4 | Moonhide | 3 | Bone Fragment | 31 |
| T4 | 39 | Nightcat | Predator | 4.05s | 3.43s | 90 | Rich Game Meat | 2 | Moonhide | 2 | Fang & Claw Fragment | 38 |
| T5 | 41 | Cinder Rabbit | Small Game | 2.56s | 2.04s | 62 | Ember Game Meat | 1 | Emberhide | 1 | Fur Bundle | 32 |
| T5 | 43 | Ashwing Raptor | Bird | 3.04s | 2.31s | 67 | Ember Game Meat | 1 | — | 0 | Feather Bundle | 36 |
| T5 | 46 | Emberhorn Ram | Grazer | 3.68s | 2.99s | 120 | Ember Game Meat | 4 | Emberhide | 3 | Bone Fragment | 45 |
| T5 | 49 | Cinderfang Cougar | Predator | 4.32s | 3.67s | 110 | Ember Game Meat | 2 | Emberhide | 2 | Fang & Claw Fragment | 54 |
| T6 | 51 | Snow Hare | Small Game | 2.72s | 2.17s | 74 | Frost Game Meat | 1 | Frosthide | 1 | Fur Bundle | 45 |
| T6 | 53 | Frostgrouse | Bird | 3.23s | 2.46s | 80 | Frost Game Meat | 1 | — | 0 | Feather Bundle | 50 |
| T6 | 56 | Ice Elk | Grazer | 3.91s | 3.19s | 142 | Frost Game Meat | 4 | Frosthide | 3 | Bone Fragment | 62 |
| T6 | 59 | Whitefang Wolf | Predator | 4.59s | 3.92s | 131 | Frost Game Meat | 2 | Frosthide | 2 | Fang & Claw Fragment | 75 |
| T7 | 61 | Gale Hare | Small Game | 2.88s | 2.31s | 86 | Storm Game Meat | 1 | Stormhide | 1 | Fur Bundle | 61 |
| T7 | 63 | Stormhawk | Bird | 3.42s | 2.62s | 92 | Storm Game Meat | 1 | — | 0 | Feather Bundle | 68 |
| T7 | 66 | Thunderhorn Bison | Grazer | 4.14s | 3.39s | 165 | Storm Game Meat | 4 | Stormhide | 3 | Bone Fragment | 85 |
| T7 | 69 | Razorclaw Lynx | Predator | 4.86s | 4.16s | 152 | Storm Game Meat | 2 | Stormhide | 2 | Fang & Claw Fragment | 102 |
| T8 | 71 | Prism Hare | Small Game | 3.04s | 2.44s | 98 | Aether Game Meat | 1 | Aetherhide | 1 | Fur Bundle | 81 |
| T8 | 73 | Skyfeather Crane | Bird | 3.61s | 2.77s | 105 | Aether Game Meat | 1 | — | 0 | Feather Bundle | 90 |
| T8 | 76 | Aether Stag | Grazer | 4.37s | 3.59s | 188 | Aether Game Meat | 4 | Aetherhide | 3 | Bone Fragment | 112 |
| T8 | 79 | Rift Panther | Predator | 5.13s | 4.40s | 172 | Aether Game Meat | 2 | Aetherhide | 2 | Fang & Claw Fragment | 135 |
| T9 | 81 | Shade Hare | Small Game | 3.20s | 2.58s | 109 | Umbral Game Meat | 1 | Umbral Hide | 1 | Fur Bundle | 106 |
| T9 | 83 | Dusk Raven | Bird | 3.80s | 2.92s | 118 | Umbral Game Meat | 1 | — | 0 | Feather Bundle | 118 |
| T9 | 86 | Gloomhorn Beast | Grazer | 4.60s | 3.78s | 210 | Umbral Game Meat | 4 | Umbral Hide | 3 | Bone Fragment | 148 |
| T9 | 89 | Nightstalker | Predator | 5.40s | 4.64s | 193 | Umbral Game Meat | 2 | Umbral Hide | 2 | Fang & Claw Fragment | 177 |
| T10 | 91 | Star Hare | Small Game | 3.36s | 2.71s | 121 | Astral Game Meat | 1 | Astral Hide | 1 | Fur Bundle | 137 |
| T10 | 93 | Comet Falcon | Bird | 3.99s | 3.08s | 130 | Astral Game Meat | 1 | — | 0 | Feather Bundle | 152 |
| T10 | 96 | Celestial Hart | Grazer | 4.83s | 3.98s | 232 | Astral Game Meat | 4 | Astral Hide | 3 | Bone Fragment | 190 |
| T10 | 99 | Astral Prowler | Predator | 5.67s | 4.89s | 214 | Astral Game Meat | 2 | Astral Hide | 2 | Fang & Claw Fragment | 228 |

---

# 13. PREY UNLOCK RHYTHM

Within each Tier:

- Tier start → Small Game;
- +2 levels → Bird;
- +5 levels → Grazer;
- +8 levels → Predator.

This gives regular unlocks without dumping four species at once.

---

# 14. TRACKING PHASE

Tracking locates the selected prey.

Tracking Time is determined by:

- Ground Tier;
- prey archetype;
- method;
- gear;
- jewelry;
- Mastery;
- Specialization;
- Hunting Lodge bonuses.

Player always sees exact current Tracking Time.

---

# 15. HUNT PHASE

After tracking:

Hunt Phase represents:

- positioning;
- pursuing;
- taking the prey.

This is not normal Combat.

Hunt Time depends on:

- prey type;
- Hunt Method;
- gear;
- Mastery;
- specialization.

---

# 16. FIELD DRESSING PHASE

After prey is taken:

the player processes the carcass.

This is where the primary Hunting Tool matters most.

The carcass has:

**Dressing Work**

Hunting Knife provides:

**Dressing Power**

Every Knife action:

**Remaining Dressing Work -= Final Dressing Power**

When Work ≤0:

resources are awarded.

---

# 17. WHY FIELD DRESSING EXISTS

Without Field Dressing:

Hunting would only be two timers.

Field Dressing gives the profession:

- a meaningful Tool;
- a resource-yield decision;
- a strong Leatherworking/Cooking link;
- a visible improvement from better Knives.

---

# 18. DRESSING PRIORITY

| Dressing Priority | Meat | Hide | Special Component | Dressing Work | Purpose |
|---|---|---|---|---|---|
| Balanced | 1.00x | 1.00x | 1.00x | 1.00x | General |
| Hide First | 0.85x | 1.20x | 1.00x | 1.05x | Leatherworking supply |
| Meat First | 1.20x | 0.85x | 1.00x | 1.00x | Cooking supply |
| Components First | 0.90x | 0.90x | 1.35x | 1.15x | Feathers/Sinew/Bones/Fangs |

The player chooses how the carcass is processed.

No Priority creates resources from nothing; it shifts expected value.

---

# 19. BALANCED DRESSING

Default.

Normal:

- Meat;
- Hide;
- special components.

Best for general progression.

---

# 20. HIDE FIRST

Effects:

- Meat ×0.85;
- Hide ×1.20;
- special component normal;
- Dressing Work ×1.05.

Best for:

**Leatherworking**

---

# 21. MEAT FIRST

Effects:

- Meat ×1.20;
- Hide ×0.85;
- special component normal.

Best for:

**Cooking**

---

# 22. COMPONENTS FIRST

Effects:

- Meat ×0.90;
- Hide ×0.90;
- special components ×1.35;
- Dressing Work ×1.15.

Best for:

- Feathers;
- Sinew;
- Fur;
- Bone;
- Fang/Claw.

---

# 23. HUNT METHODS

| Method | Unlock | Valid Prey | Track Mult. | Hunt Mult. | Effect | Identity |
|---|---|---|---|---|---|---|
| Stalk | 1 | All | 1.00x | 1.00x | Baseline | No modifiers; default hunt |
| Snare | 12 | Small Game / Bird | 0.95x | 0.70x | Extra Prey Chance +15 pp; rare component -10% | Fast bulk small prey / feathers |
| Ambush | 32 | Grazer / Predator | 1.10x | 0.80x | Meat/Hide yield +10%; Mastery +5% | Efficient large-prey harvesting |
| Trophy Hunt | 52 | All | 1.15x | 1.15x | Rare component chance +50%; Mastery +20%; normal yield -5% | Rare components / completion |

Hunt Method determines how the target is taken.

---

# 24. STALK

Universal baseline.

No bonuses.

No consumable required.

Always valid.

---

# 25. SNARE

Valid:

- Small Game;
- Bird.

Effects:

- Hunt Time -30%;
- Extra Prey Chance +15 pp;
- rare-component chance slightly reduced.

Requires ownership of:

**Basic Snare Kit**

The kit is reusable.

No durability.

---

# 26. AMBUSH

Valid:

- Grazer;
- Predator.

Effects:

- Tracking Time +10%;
- Hunt Time -20%;
- Meat/Hide yield +10%;
- Mastery +5%.

Requires:

**Reinforced Trap Frame**

This represents prepared hunting infrastructure, not a consumed trap every hunt.

---

# 27. TROPHY HUNT

Valid:

all prey.

Effects:

- Tracking Time +15%;
- Hunt Time +15%;
- special/rare component chance +50%;
- Mastery XP +20%;
- normal Meat/Hide yield -5%.

Best for:

- completion;
- rare components;
- high Mastery.

---

# 28. REUSABLE TRAP EQUIPMENT — FLETCHING ASSEMBLY

Hunting has reusable method-enabling equipment.

| Lvl | Trap Equipment | Inputs | Consumption | Role |
|---|---|---|---|---|
| 12 | Basic Snare Kit | 1 Alder Utility Blank + 1 Sinew Cord + 1 Iron Fasteners | Reusable method unlock component | Snare access |
| 32 | Reinforced Trap Frame | 1 Silverpine Utility Blank + 1 Hardened Fittings | Reusable method unlock component | Ambush/trap upgrade |
| 54 | Master Trap Kit | 1 Frostbark Utility Blank + 1 Argent Mechanism + 1 Resin | Reusable equipment upgrade | Better Snare/Ambush analytics |
| 74 | Aether Trap Assembly | 1 Aetherwood Utility Blank + 1 Precision Mechanism + 1 Sinew Cord + 1 Aether Filament | Reusable late-game trap kit | Worker/hunt efficiency |
| 94 | Astral Trap Assembly | 1 Starwood Utility Blank + 1 Umbral Reinforcement + 1 Sinew Cord + 1 Astral Filament | Reusable endgame trap kit | T10 hunting methods |

Fletching owns these reusable assembly recipes (see its Trap Kit Assembly table); Hunting equips and uses them. These are not consumables.

No Trap durability.

---

# 29. WHY TRAPS ARE REUSABLE

Fletching/Smithing already provide enough economy pressure.

Making every Hunt consume a full Trap would create:

- excessive maintenance;
- too many hidden costs;
- frustrating long offline failures.

Instead, better Trap Equipment:

- unlocks/strengthens methods;
- remains permanent;
- transfers to workers later.

---

# 30. HIDE PROGRESSION

Normal Grazer/Predator Hides:

**Light Hide**

→ **Tough Hide**

→ **Rugged Hide**

→ **Moonhide**

→ **Emberhide**

→ **Frosthide**

→ **Stormhide**

→ **Aetherhide**

→ **Umbral Hide**

→ **Astral Hide**

These are raw Hunting resources.

Leatherworking will process them into final Leather tiers.

---

# 31. WHY HIDES ARE TIERED

Leatherworking needs a clear 1–100 material ladder.

Using only one generic Hide would make:

- high-tier Hunting less distinct;
- Leatherworking progression flat.

Ten Hide tiers are justified because each is a major crafting material family.

---

# 32. BIRDS DO NOT DROP HIDES

Normal Bird output:

- Game Meat;
- Feather Bundle;
- Sinew chance;
- rare Bird component where future recipes require.

Do not force "Bird Hide."

---

# 33. MEAT PROGRESSION

Each Ground has one broad Meat tier.

Current baseline:

- Lean Game Meat;
- Wild Game Meat;
- Prime Game Meat;
- Rich Game Meat;
- Ember Game Meat;
- Frost Game Meat;
- Storm Game Meat;
- Aether Game Meat;
- Umbral Game Meat;
- Astral Game Meat.

Cooking treats these as:

**[Game Meat] / [Rich Meat]**

depending tier/recipe.

---

# 34. MEAT CLASS MAPPING

Recommended:

T1–T4:

**[Game Meat]**

T5–T7:

**[Game Meat] or selected [Rich Meat] recipes**

T8–T10:

**[Rich Meat]**

This plugs directly into the existing Cooking tag system.

---

# 35. FEATHER BUNDLE

Universal item:

**Feather Bundle**

Main source:

Bird Hunting.

Consumers:

- Fletching Arrows;
- Fletching Bolts;
- selected Tailoring;
- profession gear.

Do not create 10 Feather types.

---

# 36. SINEW

Universal item:

**Sinew**

Possible from:

- Small Game;
- Grazer;
- Predator;
- some Birds.

Main uses:

- Bowstrings;
- reinforced Tailoring;
- Leatherworking;
- traps.

---

# 37. FUR BUNDLE

Universal:

**Fur Bundle**

Primarily Small Game.

Uses:

- Leatherworking linings;
- Tailoring;
- worker clothing;
- cold-themed profession gear.

---

# 38. BONE FRAGMENT

Universal:

**Bone Fragment**

Primarily Grazers.

Uses:

- Alchemy;
- Hunting tools;
- Leatherworking reinforcements;
- future Jewelcrafting/ritual recipes.

---

# 39. FANG & CLAW FRAGMENT

Universal:

**Fang & Claw Fragment**

Primarily Predators.

Uses:

- advanced Leatherworking;
- Alchemy;
- trophy jewelry;
- profession equipment.

Avoid species-specific Fang stacks unless a future unique recipe truly needs one.

---

# 40. SPECIAL COMPONENT CHANCE

Baseline per successful Dressing:

| Prey Type | Special Component Chance |
|---|---:|
| Small Game | 25% Fur; 12% Sinew |
| Bird | 100% Feather Bundle; 10% Sinew |
| Grazer | 35% Bone Fragment; 18% Sinew |
| Predator | 35% Fang & Claw; 20% Sinew |

The guaranteed Bird Feather output exists because Ranged Ammo needs predictable supply.

---

# 41. EXTRA PREY CHANCE

Some methods/gear grant:

**Extra Prey Chance**

On success:

the hunt counts as:

**2 prey taken**

and doubles:

- base Meat;
- base Hide;
- normal guaranteed Bird Feather;
- XP;
- Mastery.

Special-component chances roll separately for each prey.

Hard cap:

**50%**

---

# 42. WHY EXTRA PREY IS LIMITED

Large prey should not become absurd multiplication.

50% cap keeps:

- Grazer Hide economy;
- Meat economy;
- XP

manageable.

---

# 43. HUNTING KNIFE

Primary Tool:

**Hunting Knife**

| Tier | Knife | Lvl | Dressing Power | Action Time | Source | Mechanical Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Hunting Knife | 1 | 5 | 2.10s | Starter | None |
| T1 | Copper Hunting Knife | 5 | 7 | 2.04s | Smithing | Field Dressing Work -2% |
| T2 | Iron Hunting Knife | 15 | 10 | 1.98s | Smithing | Tracking Time -3% |
| T3 | Cobalt Hunting Knife | 25 | 14 | 1.92s | Smithing | Special Component Chance +5% |
| T4 | Argent Hunting Knife | 35 | 19 | 1.86s | Smithing | Field Dressing Time -4% |
| T5 | Emberite Hunting Knife | 45 | 25 | 1.80s | Smithing | Hide Yield +4% |
| T6 | Frostsilver Hunting Knife | 55 | 32 | 1.74s | Smithing | Dressing Work -6% |
| T7 | Stormiron Hunting Knife | 65 | 40 | 1.68s | Smithing | Extra Prey Chance +4 pp |
| T8 | Aetherite Hunting Knife | 75 | 49 | 1.62s | Smithing | Special Component Chance +10% |
| T9 | Umbral Hunting Knife | 85 | 59 | 1.56s | Smithing | Hide/Meat Preservation +5% |
| T10 | Astralite Hunting Knife | 95 | 70 | 1.50s | Smithing | Dressing Power +8%; rare component +12% |

No durability.

---

# 44. KNIFE ROLE

Knife mainly affects:

- Field Dressing Work;
- action time;
- selected tracking/yield mechanics.

It does not act as a Combat weapon for this profession.

Combat can separately equip weapons.

---

# 45. KNIFE SOURCE

Hunting Knife progression is crafted through:

**Smithing**

with:

- Fletching Utility Blank;
- Leatherworking grip;
- current metal.

This matches the already-established Smithing tool family.

---

# 46. DRESSING POWER

Every carcass has:

**Dressing Work**

Every Knife action:

**Remaining Work -= Final Dressing Power**

UI shows:

- Work Remaining;
- Dressing Power;
- actions remaining.

---

# 47. DRESSING WORK FORMULA

Base Tier Dressing Work:

| Tier | Base Work |
|---|---:|
| T1 | 24 |
| T2 | 42 |
| T3 | 60 |
| T4 | 82 |
| T5 | 108 |
| T6 | 138 |
| T7 | 172 |
| T8 | 210 |
| T9 | 252 |
| T10 | 298 |

Archetype multiplier:

- Small Game 0.65x;
- Bird 0.70x;
- Grazer 1.25x;
- Predator 1.15x.

Dressing Priority applies afterward.

---

# 48. DRESSING ACTION TIME

Hunting Knife has base action time.

Final:

**Knife Action Time × gear × Mastery × Specialization × facility modifiers**

Minimum:

**45% of Knife base**

---

# 49. YIELD FORMULA

Normal expected Meat:

**Base Meat Qty × Dressing Priority × Method × gear × specialization**

Normal Hide:

**Base Hide Qty × Dressing Priority × Method × gear × specialization**

Resolve fractional yield as:

- guaranteed integer;
- fractional +1 chance.

---

# 50. PREY XP

XP is granted when Field Dressing finishes.

No XP during Tracking alone.

This ensures completed hunts matter.

Formula:

**Base Prey XP × Extra Prey Quantity × XP modifiers**

Prey table defines baseline XP.

---

# 51. PREY MASTERY

Every species has:

**Mastery 1–100**

Examples:

- Meadow Deer Mastery;
- Mire Lynx Mastery;
- Stormhawk Mastery;
- Astral Prowler Mastery.

---

# 52. PREY MASTERY MILESTONES

| Prey Mastery | Permanent Effect |
|---|---|
| 10 | Tracking Time -2% |
| 25 | Hunt Time -2%; Extra Prey Chance +3 pp |
| 50 | Field Dressing Work -5% |
| 75 | Special Component Chance +15% multiplicative |
| 100 | Tracking/Hunt Time -3% additional; Hide/Meat yield +5% |

Mastery improves the full hunt loop.

---

# 53. MASTERY XP

Recommended:

**Prey Mastery XP = Hunting XP ×0.40**

then apply:

- Method;
- gear;
- jewelry;
- specialization;
- Skill-Wide Mastery.

Trophy Hunt strongly favors Mastery.

---

# 54. SKILL-WIDE HUNTING MASTERY

Recommended:

| Completion | Reward |
|---:|---|
| 10% | Tracking Time -2% |
| 25% | Extra Prey Chance +2 pp; second preset |
| 50% | Worker Hunting efficiency +5%; Dressing Work -3% |
| 75% | Special Component Chance +10%; third preset |
| 100% | Tracking/Hunt Time -4%; Master Hunter marker |

---

# 55. HUNTING SPECIALIZATIONS

Unlock:

**Hunting Level 35**

Three baseline Specializations:

1. Tracker;
2. Skinner;
3. Gamekeeper.

All reversible.

---

# 56. TRACKER SPECIALIZATION

Focus:

**hunt speed / target acquisition**

Effects:

- Tracking Time -12%;
- Hunt Time -8%;
- Extra Prey Chance +5 pp;
- Prey Mastery XP +5%;
- Dressing Work +5%.

Best for:

- leveling;
- broad Hunting;
- frequent targets.

---

# 57. SKINNER SPECIALIZATION

Focus:

**Hide / Leatherworking**

Effects:

- Hide Yield +15%;
- Field Dressing Work -10%;
- Hide-first Dressing penalty to Meat reduced by half;
- Grazer/Predator Mastery XP +8%;
- Meat Yield -5%.

Best for:

- Leatherworking supply.

---

# 58. GAMEKEEPER SPECIALIZATION

Focus:

**balanced resources / special components**

Effects:

- Meat Yield +8%;
- Special Component Chance +25% multiplicative;
- Bird Feather output +1 every 3 hunts;
- Sinew Chance +15%;
- Tracking Time +3%.

Best for:

- Fletching/Tailoring;
- Cooking;
- Estate supply.

---

# 59. SPECIALIZATION SWITCHING

Rules:

- free;
- outside active hunt;
- changing Specialization resets unfinished Track/Hunt/Dress progress;
- no resources lost because none are granted until Dressing completes;
- presets remember Specialization.

---

# 60. PROFESSION CLOTHING

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Tracker Hood | Tracking Time -4% |
| T3 / L25 | Tracker Jacket | Hunt Time -3% |
| T3 / L25 | Tracker Legguards | Hunting Mastery XP +4% |
| T3 / L25 | Tracker Gloves | Field Dressing Work -4% |
| T3 / L25 | Tracker Boots | Tracking Time -4% |
| Set | Tracker 5/5 | Extra Prey Chance +3 pp |
| T5 / L45 | Skinner Hood | Hide Yield +5% |
| T5 / L45 | Skinner Coat | Hide Preservation +4 pp |
| T5 / L45 | Skinner Trousers | Hide-prey Mastery XP +6% |
| T5 / L45 | Skinner Gloves | Field Dressing Work -6% |
| T5 / L45 | Skinner Boots | Grazer/Predator Hunt Time -4% |
| Set | Skinner 5/5 | Hide Yield +6% additional |
| T7 / L65 | Gamekeeper Hood | Tracking Time -6% |
| T7 / L65 | Gamekeeper Coat | Meat Yield +5% |
| T7 / L65 | Gamekeeper Legguards | Hunting XP +5% |
| T7 / L65 | Gamekeeper Gloves | Special Component Chance +10% |
| T7 / L65 | Gamekeeper Boots | Hunt Time -5% |
| Set | Gamekeeper 5/5 | Balanced Dressing normal yields +5% |
| T9 / L85 | Master Hunter Hood | Tracking Time -7% |
| T9 / L85 | Master Hunter Coat | Hide/Meat Yield +5% |
| T9 / L85 | Master Hunter Legguards | Hunting Mastery XP +8% |
| T9 / L85 | Master Hunter Gloves | Rare Component Chance +15% |
| T9 / L85 | Master Hunter Boots | Hunt/Dressing Time -5% |
| Set | Master Hunter 5/5 | Extra Prey +4 pp; all Dressing yields +3% |

---

# 61. CLOTHING IDENTITIES

## Tracker

Tracking/Hunt speed.

## Skinner

Hide/Dressing.

## Gamekeeper

balanced resources/components.

## Master Hunter

late hybrid.

---

# 62. PROFESSION JEWELRY

| Hunting Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Tracker's Ring | Tracking Time -6% | Tracking |
| 25 | Skinner's Pendant | Hide Yield +7% | Leatherworking supply |
| 35 | Provisioner's Band | Meat Yield +8% | Cooking supply |
| 45 | Fletcher's Trophy Charm | Feather Bundle Chance +15% | Fletching supply |
| 55 | Sinew Loop | Sinew Chance +20% | Bowstrings / Leatherworking |
| 65 | Bonecarver Seal | Bone/Fang/Claw component chance +18% | Advanced crafting |
| 75 | Gamekeeper Chain | Extra Prey Chance +5 pp | Bulk hunting |
| 85 | Umbral Hunter Charm | Predator Tracking/Hunt Time -8% | Late predators |
| 95 | Astral Hunter Emblem | Tracking/Dressing Time -5%; rare component +10% | Endgame general |

Jewelry allows clear target setups:

- tracking;
- hide;
- meat;
- feathers;
- Sinew;
- predator components.

---

# 63. SAVED LOADOUTS

Recommended:

## Leather Supply

- Grazer;
- Hide First;
- Skinner;
- Hide jewelry.

## Cooking Supply

- Grazer;
- Meat First;
- Gamekeeper/Tracker.

## Feather Supply

- Bird;
- Snare;
- Components First;
- Feather charm.

## Predator Components

- Predator;
- Trophy Hunt;
- Components First.

## Mastery

- target species;
- Trophy Hunt;
- Mastery gear.

---

# 64. HUNTING LODGE

Estate support:

**Hunting Lodge I–V**

| Facility | Estate Stage | Hunting Req. | Queue | Main Unlocks |
|---|---|---|---|---|
| Hunting Lodge I | House | 20 | 2 | Target presets; exact prey/hour analytics; trophy ledger |
| Hunting Lodge II | Lodge | 40 | 4 | Method/Dressing presets; first worker slot; reserve targets |
| Hunting Lodge III | Manor | 60 | 6 | Worker hunt assignments; 3 workers; trap templates |
| Hunting Lodge IV | Estate | 80 | 10 | Worker hunting teams; automated meat/hide targets; +6% worker efficiency |
| Hunting Lodge V | Holdings / late Estate | 100 | Expanded | Astral/endgame hunting support; 10 workers; advanced schedules |

Personal Hunting works without Lodge.

Lodge expands:

- presets;
- analytics;
- workers;
- trap templates;
- resource-target scheduling.

---

# 65. HUNTING LODGE IS NOT A SKILL

No Lodge XP.

No Construction skill.

It is Estate infrastructure.

---

# 66. WORKER HUNTING

Workers can hunt Established prey.

Worker data:

- Hunting Proficiency;
- Knife;
- Trap equipment;
- clothing;
- jewelry;
- Ground;
- Target Prey;
- Hunt Method;
- Dressing Priority;
- reserve targets.

Workers use the same core phases.

---

# 67. ESTABLISHING A HUNTING GROUND

Ground becomes:

**Established**

after player personally completes:

**25 hunts in that Ground**

and has hunted:

- at least 1 Bird;
- at least 1 Grazer.

Then worker assignments become available.

---

# 68. PROVEN PREY

Prey species becomes worker-eligible at:

**Prey Mastery 10**

Workers cannot learn a new prey species for the player.

---

# 69. WORKER PROFICIENCY

Base Worker Hunting Efficiency:

**50% + Proficiency ×0.50%**

Examples:

- 1 → 50.5%;
- 50 → 75%;
- 100 → 100%.

Workers gain Proficiency.

No player XP/Mastery from workers.

---

# 70. FRONTIER PREY PENALTY

Highest Hunting Tier:

| Prey Mastery | Worker Multiplier |
|---:|---:|
| 10–24 | 75% |
| 25–49 | 85% |
| 50–74 | 92.5% |
| 75–99 | 97.5% |
| 100 | 100% |

Older tiers have no frontier penalty.

---

# 71. WORKER METHOD ACCESS

Workers can use:

- Stalk;
- Snare;
- Ambush;
- Trophy Hunt

only if the account owns the required reusable Trap equipment.

No separate consumable Trap cost.

---

# 72. OLD EQUIPMENT TO WORKERS

Old:

- Hunting Knives;
- Trap Kits;
- clothing;
- jewelry

move naturally to workers.

Use templates.

---

# 73. ACTIVITY PLANNER

Starter:

- hunt indefinitely;
- stop at prey quantity;
- stop at Hunting Level;
- select Method/Priority.

House:

- stop at Prey Mastery;
- 2-step queue.

Lodge:

- Meat/Hide reserve targets;
- 4-step queue;
- preset switching.

Manor:

- 6-step cross-profession chains;
- worker target rules;
- component targets.

Estate:

- 10-step player queue;
- worker hunting teams;
- Leatherworking/Cooking supply policies.

Holdings:

- large Hunting departments;
- multi-ground reserve schedules.

---

# 74. LEATHER SUPPLY PLANNER

Example:

> Hunt Thunderhorn Bison until Stormhide ≥2,000.

Setup:

- Ambush;
- Hide First;
- Skinner.

Then:

> switch to Leatherworking.

This is a core Hunting → Leatherworking chain.

---

# 75. FEATHER SUPPLY PLANNER

Example:

> Maintain Feather Bundle ≥5,000.

If below:

- assign Bird target;
- Snare;
- Components First.

When target reached:

- switch worker to Grazer Meat supply.

This closes Fletching ammo logistics.

---

# 76. COOKING SUPPLY PLANNER

Example:

> Maintain Rich Game Meat ≥2,000.

Use:

- Grazer;
- Meat First.

Then:

Cooking worker converts into:

- stews;
- roasts;
- provisions.

---

# 77. SINEW SUPPLY

Sinew is shared across multiple prey archetypes.

The planner can target:

**Sinew quantity**

and automatically prefer configured prey/setup.

Recommended default:

- Predator or Grazer;
- Components First.

---

# 78. RESOURCE RESERVES

Other professions should respect Hunting resources.

Examples:

**Astral Hide Reserve: 100**  
**Sinew Reserve: 500**  
**Feather Bundle Reserve: 2,000**

Leatherworking/Fletching cannot consume below without override.

---

# 79. HUNTING ↔ LEATHERWORKING

This is Hunting's strongest crafting link.

Hunting supplies:

- tiered Hides;
- Fur;
- Sinew;
- Fang/Claw components.

Leatherworking processes them into:

- Leather;
- ranged/leather armor;
- grips;
- profession equipment;
- worker gear.

Next `11_LEATHERWORKING.md` should use this exact Hide ladder.

---

# 80. HUNTING ↔ COOKING

Hunting supplies:

- tiered Game Meat.

Cooking consumes:

- [Game Meat];
- [Rich Meat].

This creates an alternative food economy to Fishing.

---

# 81. HUNTING ↔ FLETCHING

Hunting supplies:

- Feather Bundles;
- Sinew.

Fletching uses:

- Feathers for Arrows/Bolts;
- Sinew in selected strings/advanced crafts.

Fletching supplies:

- Trap frames;
- utility components.

---

# 82. HUNTING ↔ TAILORING

Hunting supplies:

- Sinew;
- Fur Bundle.

Tailoring can use:

- Fur linings;
- reinforced strings;
- worker uniforms;
- cold-weather profession clothing.

---

# 83. HUNTING ↔ SMITHING

Smithing supplies:

- Hunting Knives;
- trap mechanisms;
- metal components.

Hunting returns:

- some animal components used in specialty equipment.

---

# 84. HUNTING ↔ ESTATE

Estate can consume:

- Hides;
- Fur;
- Bone;
- trap equipment;
- worker provisions;
- trophy components

for:

- Hunting Lodge;
- worker gear;
- Long-Term Projects.

Avoid decorative-only trophy clutter unless used by Collections/Chronicles.

---

# 85. TROPHY LEDGER

Instead of creating one Trophy item per prey:

Hunting Lodge stores:

**Trophy Ledger**

Tracks:

- lifetime hunts;
- best/prestige counts;
- Predator milestones;
- Mastery completion.

This avoids 40 trophy item stacks.

---

# 86. NO RANDOM TROPHY ITEM BLOAT

Do not create:

- Brushfox Tail;
- Mire Lynx Tooth;
- 40 unique skulls

unless a future recipe specifically needs one.

Use universal:

- Fang & Claw Fragment;
- Bone Fragment;
- Fur Bundle;
- Sinew.

Species identity lives in:

- prey;
- Mastery;
- Chronicle/Trophy Ledger.

---

# 87. OLD-TIER RELEVANCE

Old Hunting resources remain useful through:

- Leatherworking;
- Cooking;
- Feather supply;
- Sinew;
- worker gear;
- Estate;
- cross-tier recipes.

Workers eventually maintain old Grounds.

---

# 88. COMPLETE LEVEL ROADMAP

| Hunting Lvl | Major Unlock |
|---|---|
| 1 | Greenbank Hunting Ground; Grasshare; Stalk; Worn Hunting Knife |
| 3 | Redcrest Grouse |
| 5 | Copper Hunting Knife |
| 6 | Meadow Deer |
| 9 | Brushfox |
| 11 | Reedfen Hunting Ground; Marsh Rabbit |
| 12 | Snare method / Basic Snare Kit |
| 13 | Reedwing Duck |
| 15 | Iron Hunting Knife; Tracker's Ring |
| 16 | Fen Boar |
| 19 | Mire Lynx |
| 21 | Ironwood Hunting Ground |
| 25 | Cobalt Hunting Knife; Tracker set; Skinner's Pendant |
| 31 | Moonridge Hunting Ground |
| 32 | Ambush method / Reinforced Trap Frame |
| 35 | Argent Hunting Knife; Hunting Specializations; Provisioner's Band |
| 41 | Emberwild Hunting Ground |
| 45 | Emberite Hunting Knife; Skinner set; Fletcher's Trophy Charm |
| 51 | Frostwild Hunting Ground |
| 52 | Trophy Hunt method / Master Trap Kit |
| 55 | Frostsilver Hunting Knife; Sinew Loop |
| 61 | Stormmoor Hunting Ground |
| 65 | Stormiron Hunting Knife; Gamekeeper set; Bonecarver Seal |
| 71 | Aetherwild Hunting Ground |
| 74 | Aether Trap Assembly |
| 75 | Aetherite Hunting Knife; Gamekeeper Chain |
| 81 | Umbral Hunting Ground |
| 85 | Umbral Hunting Knife; Master Hunter set; Umbral Hunter Charm |
| 91 | Starfall Hunting Ground |
| 94 | Astral Trap Assembly |
| 95 | Astralite Hunting Knife; Astral Hunter Emblem |
| 100 | Hunting cap; Primal Hunt endgame path |

Each Ground still staggers its four prey through the Tier.

---

# 89. PRIMAL HUNT — POST-100

Post-100 Hunting endgame:

**Primal Hunt**

Not normal T11 progression.

It is a selective endgame Hunting Ground.

---

# 90. PRIMAL HUNT PREY

Recommended four endgame prey:

- **Worldhare** — Small Game;
- **Genesis Roc** — Bird;
- **Worldhorn Greatbeast** — Grazer;
- **Primal Stalker** — Predator.

Outputs can include:

- Primal Hide;
- Primal Game Meat;
- Worldfeather Bundle;
- Primal Sinew;
- Primal Fang Fragment.

Keep item count limited.

---

# 91. PRIMAL HUNT UNLOCK

Recommended:

- Hunting 100;
- Astralite Hunting Knife;
- Hunting Lodge V;
- at least 10 prey Mastery 100;
- Astral Prowler Mastery 50;
- complete Chronicle:
  **Master of the Hunt**

---

# 92. PRIMAL HIDE

Primal Hunt's major Leatherworking bridge:

**Primal Hide**

Expected use:

- post-100 Leatherworking;
- Holdings gear;
- Worldroot/World Matrix equipment components.

Not required for ordinary T10 progression.

---

# 93. PRIMAL WORKER RULE

Workers cannot hunt Primal prey immediately.

Requirements:

- player personally hunts each target at least 10 times;
- relevant Prey Mastery 25;
- Primal Ground Established.

Frontier penalty remains until Mastery improves.

---

# 94. TRACKING TIME FORMULA

**Final Tracking Time = Base Prey Track Time × Method × gear × jewelry × Mastery × Specialization × Lodge modifiers**

Minimum:

**40% of Base**

---

# 95. HUNT TIME FORMULA

**Final Hunt Time = Base Hunt Time × Method × gear × Mastery × Specialization**

Minimum:

**40% of Base**

---

# 96. FIELD DRESSING FORMULA

**Final Dressing Work = Base Tier Work × Prey Archetype × Dressing Priority × Work modifiers**

Each action:

**Remaining Work -= Final Dressing Power**

Action time uses Knife.

---

# 97. SPECIAL COMPONENT FORMULA

**Final Chance = Base Component Chance × Dressing Priority × Method × gear × jewelry × specialization × Mastery**

Bird guaranteed Feather Bundle remains guaranteed.

Extra component bonuses can add chance for additional Feather Bundle.

---

# 98. EXTRA PREY FORMULA

Roll after successful Hunt phase.

If success:

**Prey Quantity = 2**

else:

**1**

Then Field Dressing processes both in one combined action:

recommended Work:

**1.65x normal Work**, not 2.00x.

This makes Extra Prey meaningful without doubling total cycle time.

---

# 99. EXTRA PREY DRESSING

For 2 prey:

- Meat/Hide base rewards double;
- special-component rolls occur twice;
- XP/Mastery double;
- Dressing Work ×1.65.

This is a powerful but capped efficiency mechanic.

---

# 100. OFFLINE HUNTING

If Hunting active:

simulate:

- Tracking;
- Hunt;
- Extra Prey;
- Field Dressing;
- resource yields;
- XP;
- Mastery;
- planner transitions.

Workers separately.

Same formulas as active.

---

# 101. OFFLINE RESULTS

Show:

- elapsed time;
- prey hunted by species;
- Meat;
- Hides;
- Feather Bundles;
- Sinew;
- Fur;
- Bone;
- Fang/Claw;
- extra-prey procs;
- XP;
- Mastery;
- planner transitions;
- worker output.

---

# 102. SAVE STATE

Store:

- active Ground;
- target Prey;
- current phase;
- phase progress;
- Dressing Work;
- Method;
- Dressing Priority;
- loadout;
- specialization;
- planner;
- Prey Mastery;
- Established Grounds;
- worker assignments.

---

# 103. HUNTING SCREEN — HIGH-LEVEL UI

Recommended layout:

## Ground Browser

Each Ground card:

- Tier;
- 4 prey icons;
- Hide tier;
- Meat tier;
- worker assignments.

## Target Selection

Shows each prey:

- type;
- Tracking Time;
- Hunt Time;
- base outputs;
- Mastery;
- expected/hour.

## Active Hunt

Three clear phases:

**Tracking → Hunt → Field Dressing**

## Dressing Panel

Shows:

- Priority;
- Dressing Work;
- Knife Power;
- expected resources.

## Planner

- Method;
- Priority;
- target quantity;
- reserve goals;
- queue.

---

# 104. PREY INSPECTION

Selecting prey shows:

- Name;
- Ground;
- Type;
- level;
- Tracking Time;
- Hunt Time;
- Dressing Work;
- Meat;
- Hide;
- special components;
- XP;
- Mastery;
- expected prey/hour;
- expected resources/hour;
- valid Methods.

No wiki required.

---

# 105. ANALYTICS REQUIREMENTS

Show:

- prey/hour;
- Track % of cycle;
- Hunt %;
- Dressing %;
- Meat/hour;
- Hide/hour;
- Feather/hour;
- Sinew/hour;
- Fur/hour;
- Bone/hour;
- Fang/Claw/hour;
- Extra Prey rate;
- XP/hour;
- Mastery/hour;
- ETA to Level;
- ETA to Mastery.

Changing:

- target;
- Method;
- Priority;
- Knife;
- gear;
- specialization

updates immediately.

---

# 106. CHRONICLES — EARLY HUNTING

Suggested:

1. Hunt Grasshare.
2. Explain Tracking.
3. Field-dress first prey.
4. hunt Redcrest Grouse.
5. obtain Feather Bundle.
6. hunt Meadow Deer.
7. obtain Light Hide.
8. change Dressing Priority.
9. use Hide in Leatherworking later.

---

# 107. CHRONICLES — MIDGAME

Suggested:

- unlock Snare;
- use Bird Snare for Feathers;
- unlock Ambush;
- choose Hunting Specialization;
- craft/equip Trap equipment;
- build Hunting Lodge II;
- establish first Ground;
- make prey Proven;
- assign worker;
- maintain Hide reserve.

---

# 108. CHRONICLES — LATE

Suggested:

- use Trophy Hunt;
- maintain Feather supply for Fletching;
- maintain Meat supply for Cooking;
- hunt Rift Panther;
- hunt Nightstalker;
- equip Astralite Hunting Knife;
- hunt Astral Prowler;
- reach Hunting 100;
- unlock Primal Hunt.

---

# 109. MASTER OF THE HUNT

Recommended requirements:

- Hunting 100;
- Hunting Lodge V;
- Astralite Hunting Knife;
- hunt all 40 normal prey at least once;
- 10 prey Mastery 100;
- Astral Prowler Mastery 50;
- at least 100 lifetime Predator hunts T8+.

Reward:

- Primal Hunt;
- fourth Hunting preset;
- Master Hunter marker.

---

# 110. DEVTOOLS

Support:

- set Hunting Level;
- set Prey Mastery;
- set Skill-Wide Mastery;
- unlock Grounds/prey;
- select target;
- set Method;
- set Dressing Priority;
- set Track/Hunt/Dress progress;
- set Extra Prey Chance;
- force special component;
- spawn Knife;
- spawn Trap equipment;
- spawn profession gear;
- establish Ground;
- mark prey Proven;
- spawn worker;
- set worker Proficiency;
- instant hunt;
- simulate 1m / 5m / 1h / 8h / 24h;
- compare expected vs actual yields.

---

# 111. DATA MODEL

Ground:

- ID;
- Tier;
- Name;
- unlock level;
- prey IDs;
- Hide tier;
- Meat tier.

Prey:

- ID;
- name;
- archetype;
- level;
- Base Track Time;
- Base Hunt Time;
- Dress Work;
- Meat output;
- Hide output;
- special component table;
- XP.

Player:

- Prey Mastery;
- Established Grounds;
- Proven prey;
- presets;
- Method;
- Priority;
- planner.

---

# 112. ANTI-BLOAT RULES

Avoid:

- random prey spawns;
- combat-style fight simulations;
- one trophy item per animal;
- one Feather item per bird;
- one Fang item per predator;
- trap durability;
- Knife durability;
- 4 Hide quality rarities per Tier;
- random carcass quality.

Prefer:

- explicit target selection;
- four prey archetypes;
- predictable yields;
- one Hide tier per Ground;
- universal support materials;
- Method/Priority choices;
- clear hourly analytics.

---

# 113. MAJOR OPEN QUESTIONS — RECOMMENDED ANSWERS

## Should Hunting use normal Combat?

**No.**

Keep profession and Combat separate.

---

## Should prey spawn randomly?

**No.**

Player selects exact prey.

---

## Should hunts fail?

**No baseline random failure.**

Time/output represent difficulty.

---

## Should every Hunting Ground have four prey?

**Yes baseline.**

Small Game / Bird / Grazer / Predator creates a strong consistent structure.

---

## Should every species have unique Meat?

**No.**

Use one Meat tier per Ground.

Avoid 40 Meat stacks.

---

## Should every species have unique Hide?

**No.**

Use one Hide tier per Ground for hide-bearing prey.

---

## Should Birds drop Hide?

**No.**

---

## Should every Bird have unique Feathers?

**No.**

Universal Feather Bundle.

---

## Should every Predator have unique Fang/Claw items?

**No.**

Universal Fang & Claw Fragment.

---

## Should Sinew be universal?

**Yes.**

Much cleaner for Fletching/Tailoring.

---

## Should Hunting have consumable traps?

**No baseline.**

Use reusable method-enabling Trap equipment.

---

## Should Trap equipment have durability?

**No.**

---

## Should Hunting Knife have durability?

**No.**

---

## Should Hunting have a Field Dressing phase?

**Yes.**

This is core identity and makes Knife progression meaningful.

---

## Should the player choose what to prioritize from the carcass?

**Yes.**

Dressing Priority is a major setup decision.

---

## Should Hide First create more Hide by destroying Meat?

**Yes, modestly.**

It represents careful processing/time allocation rather than magic multiplication.

---

## Should Trophy Hunt give unique trophy items?

**No baseline.**

Use Trophy Ledger plus universal rare components.

---

## Should Hunting supply Fletching Feathers?

**Yes.**

This closes the Ranged Ammo economy.

---

## Should Hunting supply Cooking meat?

**Yes.**

It becomes the major non-Fishing food source.

---

## Should Hunting supply Leatherworking Hides?

**Yes.**

This is its strongest progression relationship.

---

## Should Hunting supply Tailoring?

**Yes through Fur/Sinew.**

---

## Should Extra Prey double the entire cycle efficiency?

**No.**

Dressing Work rises to 1.65x when two prey are taken.

---

## Should workers hunt new prey before the player?

**No.**

Prey Mastery 10 required.

---

## Do worker hunts grant player XP/Mastery?

**No.**

---

## Should workers use the same methods/priorities?

**Yes.**

---

## Should old Hides remain useful?

**Yes through Leatherworking, worker gear, cross-tier recipes, Estate.**

---

## Should Hunting 100 finish the skill?

**No.**

Post-100:
- Mastery;
- Primal Hunt;
- worker supply chains;
- rare components;
- Leatherworking endgame.

---

# 114. COMPLETE LOCKED HUNTING BASELINE

1. Hunting uses explicit Hunting Grounds + exact prey targeting.
2. Hunting is not normal Combat.
3. No random prey spawns.
4. No normal hunt failure.
5. 10 normal Hunting Grounds.
6. 4 prey archetypes per Ground.
7. 40 normal prey.
8. Archetypes:
   - Small Game;
   - Bird;
   - Grazer;
   - Predator.
9. Core phases:
   - Tracking;
   - Hunt;
   - Field Dressing.
10. Hunting Knife uses Dressing Power.
11. No Knife durability.
12. Hunt Methods:
    - Stalk;
    - Snare;
    - Ambush;
    - Trophy Hunt.
13. Trap equipment is reusable.
14. No Trap durability.
15. Dressing Priorities:
    - Balanced;
    - Hide First;
    - Meat First;
    - Components First.
16. Ten Hide tiers.
17. Ten Meat tiers.
18. Universal Feather Bundle.
19. Universal Sinew.
20. Universal Fur Bundle.
21. Universal Bone Fragment.
22. Universal Fang & Claw Fragment.
23. Extra Prey Chance cap 50%.
24. Prey Mastery 1–100.
25. Skill-Wide Hunting Mastery.
26. Three reversible Specializations:
    - Tracker;
    - Skinner;
    - Gamekeeper.
27. Hunting Lodge is Estate support.
28. Workers use same hunting logic.
29. Ground must be Established.
30. Prey Mastery 10 makes prey Proven.
31. Workers gain Proficiency, not player XP/Mastery.
32. Planner supports exact prey/resource targets.
33. Hunting strongly feeds Leatherworking.
34. Hunting feeds Cooking with Game Meat.
35. Hunting feeds Fletching with Feathers/Sinew.
36. Hunting feeds Tailoring with Fur/Sinew.
37. Offline Hunting uses identical formulas.
38. Post-100 uses Primal Hunt.
39. All baseline Hunting content lives in this single MD.

---

# 115. FINAL SUMMARY

Hunting begins with:

**Greenbank Hunting Ground**

↓

**Grasshare / Grouse / Deer / Brushfox**

↓

**Tracking**

↓

**Stalk / Snare**

↓

**Field Dressing**

↓

**Meat / Light Hide / Feather / Sinew**

↓

**Ambush**

↓

**Dressing Priorities**

↓

**Leatherworking + Cooking + Fletching supply**

↓

**Hunting Specialization**

↓

**Hunting Lodge**

↓

**worker hunting parties**

↓

**Astral Prowler**

↓

**Hunting 100**

↓

**Primal Hunt**

The player always knows:

> **what prey is being hunted, what it can produce, how long the cycle takes, and what the expected hourly output is.**

That predictability is deliberate.

Core Hunting identity:

> **Choose the prey, track it deliberately, choose how to take it, then decide what part of the carcass matters most to your economy.**








