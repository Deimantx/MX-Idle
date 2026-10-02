# 11 — LEATHERWORKING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `Hunting.md`, `Woodcutting.md`, `Cooking.md`, `Smithing.md`, `Fletching.md`, `Tailoring.md`, `Runecrafting.md`
**Purpose:** Define Leatherworking as one complete profession in a single source-of-truth file: hide processing, curing, tanning methods, leather progression, pattern treatments, leather/ranged armor, profession gear, utility bindings/grips/straps, animal-component processing, profession Tool/gear, Mastery, Specializations, Tannery, workers, planner, Chronicles, UI, formulas, and post-100 Primal Leather progression.

**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)

---

# 1. LEATHERWORKING ROLE IN THE GAME

Leatherworking converts Hunting resources into durable equipment and utility components.

Main inputs:

- tiered Hides;
- Bark;
- Fish Oil;
- Sinew;
- Fur;
- Bone;
- Fang & Claw fragments;
- metal fittings;
- Runic/Astral Filaments.

Main outputs:

- Leather;
- baseline leather/ranged armor;
- profession equipment;
- worker equipment;
- tool grips;
- straps/bindings;
- Sinew Cord;
- Fur Linings;
- reinforced components.

Its strongest relationship is:

**Hunting → Leatherworking**

But Leatherworking also connects:

- Woodcutting;
- Cooking/Fishing;
- Smithing;
- Tailoring;
- Fletching;
- Runecrafting;
- Estate.

---

# 2. CORE IDENTITY

Leatherworking is built around:

**Curing → Tanning → Pattern Treatment → Assembly**

The profession should not be:

**1 Hide → 1 Leather → armor**

The player chooses:

- how the Hide is tanned;
- whether speed, yield, or preservation matters;
- which resources to protect;
- whether the final Leather becomes armor, profession equipment, or utility components.

---

# 3. CORE FANTASY

The player begins processing simple Light Hide.

Over time they learn to:

- cure tougher animal skins;
- use Bark as a tanning agent;
- use oils for deeper tanning;
- preserve valuable Hides;
- cut precise armor patterns;
- reinforce Leather with metal and animal materials;
- create professional grips and bindings;
- produce worker gear;
- use Runic Filaments;
- work Astral Hide;
- eventually process Primal Hide.

Long-term fantasy:

**Tanner → Leatherworker → Armorer/Outfitter → Master Leatherworker**

---

# 4. HIDE → LEATHER LADDER

The raw Hide ladder is inherited directly from Hunting.

| Tier | Raw Hide | Leather | Lvl | Base Cure Time | Tan Work | Base XP |
|---|---|---|---|---|---|---|
| T1 | Light Hide | Light Leather | 1 | 2.8 | 24 | 7 |
| T2 | Tough Hide | Tough Leather | 11 | 3.0 | 34 | 11 |
| T3 | Rugged Hide | Rugged Leather | 21 | 3.2 | 46 | 17 |
| T4 | Moonhide | Moon Leather | 31 | 3.4 | 60 | 25 |
| T5 | Emberhide | Ember Leather | 41 | 3.6 | 76 | 36 |
| T6 | Frosthide | Frost Leather | 51 | 3.8 | 94 | 50 |
| T7 | Stormhide | Storm Leather | 61 | 4.0 | 114 | 68 |
| T8 | Aetherhide | Aether Leather | 71 | 4.2 | 136 | 90 |
| T9 | Umbral Hide | Umbral Leather | 81 | 4.4 | 160 | 118 |
| T10 | Astral Hide | Astral Leather | 91 | 4.7 | 188 | 152 |

This is the baseline contract:

**Hunting produces Hide → Leatherworking produces Leather**

---

# 5. LEATHER NAMES

Normal progression:

**Light Leather**

→ **Tough Leather**

→ **Rugged Leather**

→ **Moon Leather**

→ **Ember Leather**

→ **Frost Leather**

→ **Storm Leather**

→ **Aether Leather**

→ **Umbral Leather**

→ **Astral Leather**

Post-100:

**Primal Leather**

---

# 6. WHY ONE LEATHER PER TIER

Do not create:

- Poor Light Leather;
- Fine Light Leather;
- Perfect Light Leather;
- Supple Light Leather;
- Hardened Light Leather;

as separate Bank stacks for every Tier.

One normal Leather per Tier keeps inventory readable.

Gameplay choice belongs to:

**Tanning Method + Pattern Treatment**

rather than random item quality.

---

# 7. CORE TANNING LOOP

A Leather tanning craft:

1. select Hide tier;
2. choose Tanning Method;
3. select Batch Size;
4. reserve Hide + Bark + optional Oil;
5. **Curing Phase** begins;
6. **Tanning Phase** begins;
7. Leather is produced;
8. Material Preservation resolves;
9. Leather Output bonus resolves;
10. XP / Recipe Mastery awarded;
11. next craft begins.

All automatic.

---

# 8. CURING PHASE

Curing stabilizes raw Hide.

It represents:

- scraping;
- drying;
- cleaning;
- preparing the skin for tanning.

The phase is time-based.

Base times are in the Hide table.

---

# 9. TANNING PHASE

After Curing:

the Hide enters Tanning.

Tanning uses:

**Tan Work**

The Skiving Knife / Leatherworking Tool contributes:

**Leatherworking Power**

Every action:

**Remaining Tan Work -= Final Leatherworking Power**

When Work reaches 0:

Leather is created.

---

# 10. TANNING METHODS

| Method | Unlock | Inputs | Output | Cure Time | Tan Work | XP/Mastery | Identity |
|---|---|---|---|---|---|---|---|
| Standard Tan | 1 | 2 Hide + 1 Bark | 2 Leather | 1.00x | 1.00x | 1.00x | Balanced baseline |
| Quick Tan | 15 | 2 Hide + 1 Bark | 2 Leather | 0.75x | 0.80x | 0.85x | Fast throughput; lower XP/Mastery |
| Deep Tan | 35 | 2 Hide + 1 Bark + 1 Fish Oil | 3 Leather | 1.20x | 1.15x | 1.15x | Best raw-hide yield; Cooking/Fishing link |
| Precision Tan | 55 | 2 Hide + 1 Bark | 2 Leather | 1.15x | 1.10x | 1.15x | Preservation +15 pp; Mastery-focused |

The player chooses the economic goal.

---

# 11. STANDARD TAN

Baseline.

Inputs:

**2 Hide + 1 Bark**

Output:

**2 Leather**

No special modifiers.

Reliable normal production.

---

# 12. QUICK TAN

Unlock:

Leatherworking 15.

Same normal material inputs.

Effects:

- Cure Time -25%;
- Tan Work -20%;
- XP/Mastery -15%.

Best for:

- emergency supply;
- old-tier worker production;
- fast Leather throughput.

It is not intended to be best for leveling or Mastery.

---

# 13. DEEP TAN

Unlock:

Leatherworking 35.

Inputs:

**2 Hide + 1 Bark + 1 Fish Oil**

Output:

**3 Leather**

Tradeoff:

- Cure Time +20%;
- Tan Work +15%;
- XP/Mastery +15%.

This deliberately links:

**Fishing → Cooking → Fish Oil → Leatherworking**

It gives Fish Oil a permanent non-Alchemy use.

---

# 14. PRECISION TAN

Unlock:

Leatherworking 55.

Inputs:

same as Standard.

Effects:

- Cure Time +15%;
- Tan Work +10%;
- Ingredient Preservation +15 pp;
- Mastery XP +15%.

Best for:

- valuable high-tier Hide;
- rare supplies;
- Mastery.

---

# 15. WHY METHODS PRODUCE SAME LEATHER ITEM

The method changes:

- time;
- yield;
- preservation;
- XP/Mastery;

not the identity of the Leather.

This keeps Bank item count controlled.

---

# 16. BARK AS TANNING AGENT

Woodcutting's universal:

**Bark**

is the baseline tanning agent.

This creates permanent demand for early/mid Woodcutting.

No need for:

- Oak Tannin;
- Ironwood Tannin;
- Starwood Tannin

as separate filler items.

---

# 17. FISH OIL AS DEEP-TAN AGENT

Cooking already produces:

**Fish Oil**

Leatherworking uses it in Deep Tan.

This creates an intentional cross-profession choice:

use Oily Fish for:

- food;
- Alchemy;
- Leather yield.

---

# 18. LEATHER OUTPUT CHANCE

Leatherworking uses:

**Leather Output Chance**

Normal Tanning craft outputs:

its method's base Leather amount.

Then roll:

**Leather Output Chance**

Success:

**+1 Leather**

Hard cap:

**60%**

No doubling.

---

# 19. MATERIAL PRESERVATION

Normal inputs can be preserved:

- Hide;
- Bark;
- Fish Oil;
- Sinew;
- Fur;
- metal fittings;
- Filaments.

Hard cap:

**50%**

Protected endgame resources may ignore Preservation.

---

# 20. PATTERN TREATMENTS

Finished equipment can use different pattern/treatment paths.

| Pattern Treatment | Unlock | Extra Input | Main Uses | Role |
|---|---|---|---|---|
| Standard Pattern | 1 | Leather only | Normal armor/utility | Baseline |
| Reinforced Pattern | 25 | Leather + Hardened Fittings | Defensive leather/profession gear | Smithing bridge |
| Fur-Lined Pattern | 45 | Leather + Fur Bundle | Cold/worker/profession gear | Hunting utility |
| Runic-Treated Pattern | 65 | Leather + Runic Filament | Magic-resistant / advanced profession gear | Runecrafting bridge |
| Astral-Treated Pattern | 95 | Astral Leather + Astral Filament + rare component | T10/endgame equipment | Endgame |

Treatments are recipe structures, not random item qualities.

---

# 21. STANDARD PATTERN

Uses:

normal Leather.

Main:

- baseline armor;
- simple utility;
- early profession gear.

---

# 22. REINFORCED PATTERN

Adds:

**Hardened Fittings**

Expected source:

Smithing.

Main uses:

- sturdier Leather armor;
- protective profession gear;
- worker equipment.

Combat finalizes exact defense values.

---

# 23. FUR-LINED PATTERN

Adds:

**Fur Bundle / Fur Lining**

Uses:

- worker gear;
- cold-region profession clothing;
- selected Hunting/Fishing/Foraging gear.

Not every armor Tier needs a Fur-Lined duplicate.

Use selectively.

---

# 24. RUNIC-TREATED PATTERN

Unlock:

65.

Adds:

**Runic Filament**

Uses:

- high-tier Leather armor;
- magical resistance-style gear;
- advanced profession clothing;
- specialist equipment.

Exact combat effects belong to Combat.

---

# 25. ASTRAL-TREATED PATTERN

T10/endgame.

Uses:

- Astral Leather;
- Astral Filament;
- selected rare component.

Use only for important T10 items.

Do not duplicate every baseline item automatically.

---

# 26. BASELINE LEATHER ARMOR

Leatherworking owns deterministic baseline leather/light-ranged armor.

Core slots:

| Piece | Leather Cost | Assembly Work Mult. | Slot |
|---|---|---|---|
| Hood | 2 | 0.7 | Head |
| Jerkin | 5 | 1.55 | Body |
| Leggings | 4 | 1.15 | Legs |
| Gloves | 2 | 0.6 | Hands |
| Boots | 2 | 0.65 | Feet |

---

# 27. COMPLETE LEATHER ARMOR LADDER

| Lvl | Tier | Armor | Base Input | Slot |
|---|---|---|---|---|
| 5 | T1 | Light Leather Hood | 2 Light Leather | Head |
| 5 | T1 | Light Leather Jerkin | 5 Light Leather | Body |
| 5 | T1 | Light Leather Leggings | 4 Light Leather | Legs |
| 5 | T1 | Light Leather Gloves | 2 Light Leather | Hands |
| 5 | T1 | Light Leather Boots | 2 Light Leather | Feet |
| 15 | T2 | Tough Leather Hood | 2 Tough Leather | Head |
| 15 | T2 | Tough Leather Jerkin | 5 Tough Leather | Body |
| 15 | T2 | Tough Leather Leggings | 4 Tough Leather | Legs |
| 15 | T2 | Tough Leather Gloves | 2 Tough Leather | Hands |
| 15 | T2 | Tough Leather Boots | 2 Tough Leather | Feet |
| 25 | T3 | Rugged Leather Hood | 2 Rugged Leather | Head |
| 25 | T3 | Rugged Leather Jerkin | 5 Rugged Leather | Body |
| 25 | T3 | Rugged Leather Leggings | 4 Rugged Leather | Legs |
| 25 | T3 | Rugged Leather Gloves | 2 Rugged Leather | Hands |
| 25 | T3 | Rugged Leather Boots | 2 Rugged Leather | Feet |
| 35 | T4 | Moon Leather Hood | 2 Moon Leather | Head |
| 35 | T4 | Moon Leather Jerkin | 5 Moon Leather | Body |
| 35 | T4 | Moon Leather Leggings | 4 Moon Leather | Legs |
| 35 | T4 | Moon Leather Gloves | 2 Moon Leather | Hands |
| 35 | T4 | Moon Leather Boots | 2 Moon Leather | Feet |
| 45 | T5 | Ember Leather Hood | 2 Ember Leather | Head |
| 45 | T5 | Ember Leather Jerkin | 5 Ember Leather | Body |
| 45 | T5 | Ember Leather Leggings | 4 Ember Leather | Legs |
| 45 | T5 | Ember Leather Gloves | 2 Ember Leather | Hands |
| 45 | T5 | Ember Leather Boots | 2 Ember Leather | Feet |
| 55 | T6 | Frost Leather Hood | 2 Frost Leather | Head |
| 55 | T6 | Frost Leather Jerkin | 5 Frost Leather | Body |
| 55 | T6 | Frost Leather Leggings | 4 Frost Leather | Legs |
| 55 | T6 | Frost Leather Gloves | 2 Frost Leather | Hands |
| 55 | T6 | Frost Leather Boots | 2 Frost Leather | Feet |
| 65 | T7 | Storm Leather Hood | 2 Storm Leather | Head |
| 65 | T7 | Storm Leather Jerkin | 5 Storm Leather | Body |
| 65 | T7 | Storm Leather Leggings | 4 Storm Leather | Legs |
| 65 | T7 | Storm Leather Gloves | 2 Storm Leather | Hands |
| 65 | T7 | Storm Leather Boots | 2 Storm Leather | Feet |
| 75 | T8 | Aether Leather Hood | 2 Aether Leather | Head |
| 75 | T8 | Aether Leather Jerkin | 5 Aether Leather | Body |
| 75 | T8 | Aether Leather Leggings | 4 Aether Leather | Legs |
| 75 | T8 | Aether Leather Gloves | 2 Aether Leather | Hands |
| 75 | T8 | Aether Leather Boots | 2 Aether Leather | Feet |
| 85 | T9 | Umbral Leather Hood | 2 Umbral Leather | Head |
| 85 | T9 | Umbral Leather Jerkin | 5 Umbral Leather | Body |
| 85 | T9 | Umbral Leather Leggings | 4 Umbral Leather | Legs |
| 85 | T9 | Umbral Leather Gloves | 2 Umbral Leather | Hands |
| 85 | T9 | Umbral Leather Boots | 2 Umbral Leather | Feet |
| 95 | T10 | Astral Leather Hood | 2 Astral Leather | Head |
| 95 | T10 | Astral Leather Jerkin | 5 Astral Leather | Body |
| 95 | T10 | Astral Leather Leggings | 4 Astral Leather | Legs |
| 95 | T10 | Astral Leather Gloves | 2 Astral Leather | Hands |
| 95 | T10 | Astral Leather Boots | 2 Astral Leather | Feet |

Every Tier therefore has a reliable crafted Leather gear path.

---

# 28. COMBAT IDENTITY

Recommended high-level identity:

Leatherworking armor leans toward:

- Ranged;
- mobility;
- moderate physical defense;
- balanced light armor.

Tailoring owns:

- cloth/magic armor.

Smithing owns:

- heavy armor.

Exact Combat stats remain outside this document.

---

# 29. NO RANDOM ARMOR QUALITY

One recipe produces one deterministic item.

No:

- Fine Jerkin;
- Perfect Jerkin;
- Legendary Jerkin

from ordinary profession RNG.

Build diversity should come from:

- armor type;
- treatment;
- upgrades;
- unique Combat drops.

---

# 30. PATTERN TREATMENT DOES NOT MEAN FULL ITEM DUPLICATION

Do not create:

5 armor slots × 10 tiers × 5 treatments.

That would create hundreds of items.

Instead:

- Standard baseline exists broadly;
- Reinforced/Runic/Astral treatment is used selectively for meaningful advanced patterns;
- Fur-Lined is mostly profession/worker gear.

---

# 31. UTILITY LEATHERWORKING

Leatherworking's permanent non-armor role:

| Lvl | Utility Recipe | Inputs | Output | Main Uses |
|---|---|---|---|---|
| 8 | Leather Strap Bundle | 2 Light Leather | 4 Strap Bundles | Tool grips / traps / profession gear |
| 18 | Reinforced Strap Bundle | 2 Tough Leather + 1 Sinew | 4 Reinforced Straps | Mid tools / crossbow / traps |
| 28 | Rugged Grip Wrap | 2 Rugged Leather + 1 Sinew | 3 Grip Wraps | Tool handles / weapons |
| 38 | Moonbound Harness Parts | 2 Moon Leather + 1 Hardened Fittings | 3 Harness Parts | Profession gear / workers |
| 48 | Ember Grip Wrap | 2 Ember Leather + 1 Resin | 3 Grip Wraps | T5 tools / weapons |
| 58 | Frost Fur Lining | 2 Frost Leather + 1 Fur Bundle | 3 Fur Linings | Cold/profession gear |
| 68 | Storm Reinforced Straps | 2 Storm Leather + 1 Sinew + 1 Hardened Fittings | 4 Straps | Late tools / traps |
| 78 | Aether Binding Set | 2 Aether Leather + 1 Runic Filament | 3 Bindings | Runic gear / Fletching |
| 88 | Umbral Grip Set | 2 Umbral Leather + 1 Fang & Claw Fragment | 3 Grips | Late equipment |
| 98 | Astral Binding Set | 2 Astral Leather + 1 Astral Filament | 3 Bindings | T10/endgame equipment |

These components feed many other professions.

---

# 32. LEATHER STRAPS

Straps are used for:

- tool securing;
- traps;
- profession equipment;
- worker gear;
- crossbow/harness components.

They create old-Leather sinks without arbitrary recipes.

---

# 33. GRIP WRAPS

Grip Wraps can feed:

- Pickaxes;
- Logging Axes;
- Smithing Hammers;
- Hunting Knives;
- ranged weapons;
- profession Tools.

This strengthens:

**Leatherworking ↔ Smithing/Fletching**

---

# 34. BINDINGS

High-tier Bindings combine:

- Leather;
- Runic/Astral materials.

Used by:

- advanced Tools;
- endgame profession gear;
- selected ranged equipment;
- Estate projects.

---

# 35. ANIMAL-COMPONENT PROCESSING

Leatherworking can refine Hunting support materials.

| Lvl | Recipe | Inputs | Output | Use |
|---|---|---|---|---|
| 12 | Sinew Cord | 2 Sinew | 3 Sinew Cord | Reinforced Bowstrings / traps / leather gear |
| 26 | Fur Lining | 2 Fur Bundle + 1 Leather | 2 Fur Linings | Profession clothing / worker gear |
| 42 | Bone Rivet Bundle | 2 Bone Fragment + 1 Hardened Fittings | 4 Bone Rivet Bundles | Armor reinforcement / utility |
| 62 | Predator Reinforcement | 2 Fang & Claw Fragment + 1 Leather | 2 Reinforcements | Advanced gear / trophies |

---

# 36. SINEW CORD

Universal:

**Sinew → Sinew Cord**

Consumers:

- Tailoring;
- Fletching;
- Hunting traps;
- Leather armor.

This avoids every profession independently processing raw Sinew.

---

# 37. FUR LINING

Fur Bundle is turned into:

**Fur Lining**

Main consumers:

- profession clothing;
- worker uniforms;
- selected cold/environmental gear.

No temperature-survival system is required for Fur to remain useful.

---

# 38. BONE RIVETS

Bone can support selected Leatherworking reinforcement.

Do not replace Smithing metal rivets universally.

Bone Rivet Bundles are an alternative/special recipe component.

---

# 39. PREDATOR REINFORCEMENT

Fang & Claw Fragments can become:

**Predator Reinforcement**

Used selectively in:

- advanced Hunting gear;
- predator-themed armor;
- trophies/utility.

Avoid species-specific Fang item explosion.

---

# 40. PROFESSION EQUIPMENT ROLE

Leatherworking owns many non-cloth parts of profession sets:

- reinforced gloves;
- boots;
- aprons;
- straps;
- belts/harnesses;
- protective layers.

Tailoring owns many textile pieces.

Smithing owns metal protection/tools.

Profession gear can therefore be intentionally multi-profession.

---

# 41. WORKER EQUIPMENT

Leatherworking is one of the main producers of:

- durable worker gloves;
- boots;
- reinforced workwear;
- harness components.

Old player Leather tiers naturally become worker materials.

---

# 42. SKIVING KNIFE — PRIMARY TOOL

| Tier | Tool | Lvl | Leatherworking Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Skiving Knife | 1 | 5 | 2.15s | Starter | None |
| T1 | Copper Skiving Knife | 5 | 7 | 2.09s | Smithing | Tan Work -2% |
| T2 | Iron Skiving Knife | 15 | 10 | 2.03s | Smithing | Cure Time -3% |
| T3 | Cobalt Skiving Knife | 25 | 14 | 1.97s | Smithing | Material Preservation +3 pp |
| T4 | Argent Skiving Knife | 35 | 19 | 1.91s | Smithing | Pattern Assembly Time -4% |
| T5 | Emberite Skiving Knife | 45 | 25 | 1.85s | Smithing | Leather Output Chance +4 pp |
| T6 | Frostsilver Skiving Knife | 55 | 32 | 1.79s | Smithing | Tan Work -6% |
| T7 | Stormiron Skiving Knife | 65 | 40 | 1.73s | Smithing | Animal Component Preservation +5 pp |
| T8 | Aetherite Skiving Knife | 75 | 49 | 1.67s | Smithing | Runic Treatment Work -6% |
| T9 | Umbral Skiving Knife | 85 | 59 | 1.61s | Smithing | Rare Material Preservation +5 pp |
| T10 | Astralite Master Skiving Knife | 95 | 70 | 1.55s | Smithing | Leatherworking Power +8%; Assembly Time -5% |

Tool is permanent.

No durability.

---

# 43. WHY SKIVING KNIFE

The Skiving Knife represents:

- scraping;
- thinning;
- edge preparation;
- precision cutting.

It is mechanically distinct from the Hunting Knife.

---

# 44. TOOL SOURCE

Skiving Knives are primarily Smithing-crafted.

Possible components:

- current metal;
- Fletching Utility Blank;
- Leather grip.

Leatherworking defines:

- equip level;
- Power;
- profession effects.

---

# 45. TOOL UPGRADE CHAIN

Recommended:

**Previous Skiving Knife + current-tier metal + matching-tier Utility Blank + Leatherworking Grip → next Skiving Knife**

Old Tools move to workers.

---

# 46. LEATHERWORKING POWER

Used for:

- Tanning Work;
- Pattern Assembly Work;
- some Utility Work.

Formula:

**Remaining Work -= Final Leatherworking Power**

UI always shows:

- Work;
- Power;
- actions remaining.

---

# 47. TAN WORK

Base per Tier comes from Hide table.

Tanning Method modifies Work.

Final:

**Base Tan Work × Method × gear × Mastery × Specialization × facility**

---

# 48. ASSEMBLY WORK

Recommended Pattern Work:

**Tier Base Tan Work × item/pattern multiplier**

Base item multipliers:

- Hood 0.70;
- Jerkin 1.55;
- Leggings 1.15;
- Gloves 0.60;
- Boots 0.65;
- Utility Strap 0.55;
- Grip Wrap 0.65;
- Worker Body 1.10.

---

# 49. ACTION TIME

Each Skiving Knife action uses:

**Tool Action Time**

Affected by:

- gear;
- jewelry;
- Mastery;
- Specialization;
- Tannery.

Hard floor:

**45% of Tool base**

---

# 50. LEATHERWORKING XP

Tanning XP baseline is listed in Hide table.

Method modifies:

- Quick 0.85x;
- Standard 1.00x;
- Deep 1.15x;
- Precision 1.15x.

Assembly XP uses:

**Tier Base XP × Pattern Work multiplier**

Utility recipes use appropriate category scaling.

---

# 51. RECIPE MASTERY

Every important recipe has:

**Mastery 1–100**

Examples:

- Standard Light Leather;
- Deep Storm Leather;
- Astral Leather Jerkin;
- Sinew Cord;
- Aether Binding Set.

---

# 52. MASTERY MILESTONES

| Recipe Mastery | Permanent Effect |
|---|---|
| 10 | Recipe action time -2% |
| 25 | Material Preservation +3 pp |
| 50 | Leather/Utility Output Chance +4 pp or Assembly Work -3% |
| 75 | Recipe Mastery XP +8% |
| 100 | Action Time -4% additional; Preservation +3 pp |

Method-specific tanning recipes can each have separate Mastery if implementation supports it.

Recommended simpler baseline:

**Mastery belongs to output recipe**, e.g. Storm Leather, not four separate Storm Leather methods.

Method changes production but shares the same Storm Leather Mastery.

---

# 53. WHY TANNING METHODS SHARE MASTERY

Otherwise:

10 Leather tiers ×4 methods =40 Leather Masteries

before armor/utility.

That is unnecessary grind duplication.

The player is mastering:

**Storm Leather tanning**

not the UI button used.

---

# 54. SKILL-WIDE LEATHERWORKING MASTERY

Recommended:

| Completion | Reward |
|---:|---|
| 10% | Cure Time -2% |
| 25% | Material Preservation +2 pp; second preset |
| 50% | Worker efficiency +5%; Leather Output +3 pp |
| 75% | Leatherworking Power +5%; third preset |
| 100% | Action Time -4%; Preservation +3 pp; Master Leatherworker marker |

---

# 55. LEATHERWORKING SPECIALIZATIONS

Unlock:

**Leatherworking 35**

Three baseline Specializations:

1. Tanner;
2. Armorer;
3. Outfitter.

All reversible.

---

# 56. TANNER

Focus:

**Leather production**

Effects:

- Cure Time -10%;
- Tan Work -10%;
- Leather Output Chance +12 pp;
- Hide/Bark Preservation +5 pp;
- Pattern Assembly Time +5%.

Best for:

- raw Leather supply;
- Leatherworking workers;
- economy preparation.

---

# 57. ARMORER

Focus:

**Leather armor / defensive profession gear**

Effects:

- Armor Assembly Work -12%;
- Leather Preservation +6 pp on armor;
- Reinforced/Runic Pattern Work -8%;
- Armor Mastery XP +10%;
- Utility Assembly Time +5%.

Best for:

- Ranged armor;
- advanced profession clothing.

---

# 58. OUTFITTER

Focus:

**utility / profession gear / workers**

Effects:

- Strap/Grip/Binding Assembly Time -12%;
- Utility Material Preservation +6 pp;
- Sinew/Fur component output +10%;
- worker-gear Assembly Work -10%;
- standard armor Assembly Time +5%.

Best for:

- profession Tools;
- worker economy;
- Fletching/Hunting support.

---

# 59. SPECIALIZATION SWITCHING

Rules:

- free;
- outside active craft;
- unfinished action progress is lost;
- reserved normal materials return;
- presets remember specialization.

No respec currency.

---

# 60. PROFESSION CLOTHING

Leatherworking's own progression:

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Tanner Hood | Cure Time -4% |
| T3 / L25 | Tanner Apron | Hide/Bark Preservation +3 pp |
| T3 / L25 | Tanner Trousers | Leatherworking Mastery XP +4% |
| T3 / L25 | Tanner Gloves | Tan Work -4% |
| T3 / L25 | Tanner Boots | Action Time -3% |
| Set | Tanner 5/5 | Leather Output Chance +3 pp |
| T5 / L45 | Armorer Cap | Armor Assembly Work -6% |
| T5 / L45 | Armorer Coat | Leather Preservation +4 pp |
| T5 / L45 | Armorer Leggings | Armor Mastery XP +6% |
| T5 / L45 | Armorer Gloves | Reinforced Pattern Work -5% |
| T5 / L45 | Armorer Boots | Pattern Assembly Time -4% |
| Set | Armorer 5/5 | Armor Material Preservation +4 pp |
| T7 / L65 | Outfitter Hood | Utility Assembly Time -6% |
| T7 / L65 | Outfitter Coat | Sinew/Fur Preservation +4 pp |
| T7 / L65 | Outfitter Legguards | Utility Mastery XP +7% |
| T7 / L65 | Outfitter Gloves | Strap/Grip Output Chance +5 pp |
| T7 / L65 | Outfitter Boots | Worker-gear Assembly Time -5% |
| Set | Outfitter 5/5 | Utility Output +1 every 4 crafts |
| T9 / L85 | Master Leatherworker Hood | Leatherworking Power +8% |
| T9 / L85 | Master Leatherworker Coat | Material Preservation +5 pp |
| T9 / L85 | Master Leatherworker Legguards | Mastery XP +8% |
| T9 / L85 | Master Leatherworker Gloves | Leather Output Chance +6 pp |
| T9 / L85 | Master Leatherworker Boots | All Leatherworking Time -5% |
| Set | Master Leatherworker 5/5 | Action Time -5%; Preservation +3 pp |

---

# 61. CLOTHING IDENTITIES

## Tanner

Hide → Leather.

## Armorer

Leather gear.

## Outfitter

Utility / workers.

## Master Leatherworker

late hybrid.

---

# 62. PROFESSION JEWELRY

| Leatherworking Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Tanner's Ring | Cure Time -6% | Tanning speed |
| 25 | Hidekeeper Pendant | Hide Preservation +5 pp | Resource efficiency |
| 35 | Leatherworker's Band | Leather Output Chance +5 pp | Leather throughput |
| 45 | Armorer Charm | Armor Assembly Work -7% | Armor |
| 55 | Deep Tan Loop | Deep Tan Fish Oil Preservation +6 pp | Yield method |
| 65 | Outfitter Seal | Utility Assembly Time -8% | Grips/straps/worker gear |
| 75 | Runic Binding Chain | Runic Filament Preservation +6 pp | Runic treatment |
| 85 | Umbral Tannery Charm | T8+ Tan Work -6% | Late leather |
| 95 | Astral Leatherworker Emblem | Power +8%; Leather Output +4 pp | Endgame general |

Jewelry supports:

- Curing;
- preservation;
- leather output;
- armor;
- Deep Tan;
- utility;
- Runic treatment.

---

# 63. SAVED LOADOUTS

Recommended presets:

## Leather Factory

- Tanner specialization;
- Standard/Deep Tan;
- throughput gear.

## Rare Hide Saver

- Precision Tan;
- preservation gear.

## Ranged Armor

- Armorer;
- assembly gear.

## Utility Workshop

- Outfitter;
- straps/grips/bindings.

## Mastery

- Precision Tan;
- Mastery XP gear.

---

# 64. TANNERY — ESTATE INFRASTRUCTURE

Leatherworking starts with a simple:

**Curing Rack + Hand Table**

Estate upgrades to:

**Tannery I–V**

| Facility | Estate Stage | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|
| Tannery I | House | 20 | 5 | 2 | Tanning presets; exact hide/leather analytics; basic Pattern storage |
| Tannery II | Lodge | 40 | 10 | 4 | Deep/Precision Tan automation; first worker; reserve rules |
| Tannery III | Manor | 60 | 25 | 6 | Profession gear templates; 3 workers; utility chains |
| Tannery IV | Estate | 80 | 50 | 10 | Runic treatment teams; worker equipment schedules; +6% worker efficiency |
| Tannery V | Holdings / late Estate | 100 | 100 | Expanded | Astral/Primal leather support; 10 workers |

Tannery is account infrastructure.

No Tannery XP.

---

# 65. TANNERY PURPOSE

It unlocks:

- presets;
- batching;
- advanced Tanning Methods;
- workers;
- profession gear templates;
- Runic/Astral treatment automation;
- worker equipment schedules.

Not just flat speed.

---

# 66. BATCHING

Tanning supports large batches.

Armor/gear uses smaller batches.

Suggested:

| Batch | Time Mult./Craft |
|---:|---:|
| 1 | 1.00x |
| 5 | 0.96x |
| 10 | 0.93x |
| 25 | 0.90x |
| 50 | 0.88x |
| 100 | 0.86x |

Deep Tan still consumes real Fish Oil per craft.

---

# 67. WORKERS

Leatherworking workers can perform:

- Tanning;
- Sinew Cord;
- Fur Linings;
- straps/grips;
- worker gear;
- selected armor.

They consume real materials.

---

# 68. PROVEN RECIPE

A recipe becomes worker-eligible at:

**Recipe Mastery 10**

Player learns first.

---

# 69. WORKER PROFICIENCY

Base Worker Leatherworking Efficiency:

**50% + Proficiency ×0.50%**

Examples:

- 1 →50.5%;
- 50 →75%;
- 100 →100%.

Workers gain Proficiency only.

No player XP/Mastery.

---

# 70. FRONTIER PENALTY

Highest unlocked Tier:

| Recipe Mastery | Worker Multiplier |
|---:|---:|
| 10–24 | 75% |
| 25–49 | 85% |
| 50–74 | 92.5% |
| 75–99 | 97.5% |
| 100 | 100% |

Older recipes have no frontier penalty.

---

# 71. WORKER TANNING POLICY

Workers can be configured:

- Standard Tan;
- Quick Tan;
- Deep Tan;
- Precision Tan.

They obey:

- Hide reserve;
- Bark reserve;
- Fish Oil reserve.

Default worker recommendation:

**Standard Tan**

unless player deliberately configures another method.

---

# 72. WORKER ARMOR SAFETY

Workers should not automatically consume rare Leather for armor.

Armor crafting requires explicit assignment.

Default worker roles:

- Leather;
- utility components;
- worker gear.

---

# 73. OLD TOOL HAND-ME-DOWNS

Old:

- Skiving Knives;
- profession clothing;
- jewelry;

move naturally to workers.

---

# 74. ACTIVITY PLANNER

Starter:

- tan indefinitely;
- stop at Leather quantity;
- stop at level;
- choose Tanning Method.

House:

- Mastery target;
- 2-step queue.

Lodge:

- resource reserves;
- 4-step queue;
- Deep Tan fallback.

Manor:

- 6-step chains;
- Leather → armor/utility;
- worker schedules.

Estate:

- 10-step queue;
- Hunting/Leatherworking reserve policies;
- Runic gear chains.

Holdings:

- large worker departments;
- Primal/Astral leather schedules.

---

# 75. HIDE → LEATHER PLANNER

Example:

> Maintain Storm Leather ≥2,000.

If below:

- consume Stormhide;
- Standard Tan.

If Stormhide >5,000 and Fish Oil >1,000:

- use Deep Tan.

If Stormhide <500:

- switch to Precision Tan.

This is a strong automated economy loop.

---

# 76. HUNTING → LEATHERWORKING CHAIN

Example:

> Hunt Thunderhorn Bison until Stormhide 2,000  
> → switch to Leatherworking  
> → Deep Tan while Fish Oil > reserve  
> → create Storm Leather.

Later workers can split the chain:

Hunting team supplies Hides.

Leatherworking team processes them.

---

# 77. FISH OIL RESERVE

Deep Tan should never silently consume all Fish Oil.

Example:

**Fish Oil Reserve: 250**

Below that:

fallback:

**Standard Tan**

Default planner behavior should be configurable.

---

# 78. ARMOR PRODUCTION CHAIN

Example:

> Tan Aetherhide → Aether Leather  
> → reserve 500 Aether Leather  
> → use surplus to craft Aether Leather gear.

This prevents gear automation from starving general materials.

---

# 79. UTILITY PRODUCTION CHAIN

Example:

> maintain 100 Aether Binding Sets.

Inputs:

- Aether Leather;
- Runic Filament.

Used by:

- high-tier profession Tools;
- Fletching;
- Estate.

---

# 80. LEATHERWORKING ↔ HUNTING

Strongest link.

Hunting supplies:

- Hide;
- Sinew;
- Fur;
- Bone;
- Fang & Claw.

Leatherworking converts those into:

- Leather;
- armor;
- cords;
- linings;
- reinforcements.

---

# 81. LEATHERWORKING ↔ WOODCUTTING

Woodcutting supplies:

**Bark**

for Tanning.

Resin can support selected:

- grip;
- reinforcement;
- utility recipes.

This gives universal Bark permanent value.

---

# 82. LEATHERWORKING ↔ COOKING/FISHING

Cooking supplies:

**Fish Oil**

for Deep Tan.

This creates meaningful competition for Oily Fish.

---

# 83. LEATHERWORKING ↔ SMITHING

Smithing supplies:

- Skiving Knives;
- Hardened Fittings;
- fasteners;
- reinforced armor fittings.

Leatherworking supplies:

- Grip Wraps;
- straps;
- bindings

back into Tool/equipment recipes.

---

# 84. LEATHERWORKING ↔ FLETCHING

Leatherworking supplies:

- Sinew Cord;
- Grip Wraps;
- Straps;
- selected Bindings.

Fletching uses these in:

- ranged weapons;
- traps;
- Tool components.

---

# 85. LEATHERWORKING ↔ TAILORING

Tailoring and Leatherworking cooperate on:

- profession gear;
- worker uniforms;
- Fur-lined clothing;
- reinforced garments.

Avoid forcing every cloth recipe to require Leather.

Use hybrid materials selectively.

---

# 86. LEATHERWORKING ↔ RUNECRAFTING

Runecrafting supplies:

- Runic Filament;
- Astral Filament.

Leatherworking uses them for:

- Runic treatment;
- Astral Bindings;
- advanced equipment.

---

# 87. LEATHERWORKING ↔ ESTATE

Estate consumes:

- Leather;
- Straps;
- worker gear;
- reinforced components

for:

- Tannery;
- Hunting Lodge;
- Worker Quarters;
- storage;
- Long-Term Projects.

---

# 88. OLD-TIER RELEVANCE

Old Leather stays useful through:

- worker equipment;
- tool grips;
- straps;
- traps;
- profession clothing;
- Estate;
- cross-tier utility.

Do not force absurd T1 Leather quantities into T10 recipes.

---

# 89. COMPLETE UTILITY RECIPES

| Lvl | Utility Recipe | Inputs | Output | Main Uses |
|---|---|---|---|---|
| 8 | Leather Strap Bundle | 2 Light Leather | 4 Strap Bundles | Tool grips / traps / profession gear |
| 18 | Reinforced Strap Bundle | 2 Tough Leather + 1 Sinew | 4 Reinforced Straps | Mid tools / crossbow / traps |
| 28 | Rugged Grip Wrap | 2 Rugged Leather + 1 Sinew | 3 Grip Wraps | Tool handles / weapons |
| 38 | Moonbound Harness Parts | 2 Moon Leather + 1 Hardened Fittings | 3 Harness Parts | Profession gear / workers |
| 48 | Ember Grip Wrap | 2 Ember Leather + 1 Resin | 3 Grip Wraps | T5 tools / weapons |
| 58 | Frost Fur Lining | 2 Frost Leather + 1 Fur Bundle | 3 Fur Linings | Cold/profession gear |
| 68 | Storm Reinforced Straps | 2 Storm Leather + 1 Sinew + 1 Hardened Fittings | 4 Straps | Late tools / traps |
| 78 | Aether Binding Set | 2 Aether Leather + 1 Runic Filament | 3 Bindings | Runic gear / Fletching |
| 88 | Umbral Grip Set | 2 Umbral Leather + 1 Fang & Claw Fragment | 3 Grips | Late equipment |
| 98 | Astral Binding Set | 2 Astral Leather + 1 Astral Filament | 3 Bindings | T10/endgame equipment |

---

# 90. COMPLETE ANIMAL-COMPONENT RECIPES

| Lvl | Recipe | Inputs | Output | Use |
|---|---|---|---|---|
| 12 | Sinew Cord | 2 Sinew | 3 Sinew Cord | Reinforced Bowstrings / traps / leather gear |
| 26 | Fur Lining | 2 Fur Bundle + 1 Leather | 2 Fur Linings | Profession clothing / worker gear |
| 42 | Bone Rivet Bundle | 2 Bone Fragment + 1 Hardened Fittings | 4 Bone Rivet Bundles | Armor reinforcement / utility |
| 62 | Predator Reinforcement | 2 Fang & Claw Fragment + 1 Leather | 2 Reinforcements | Advanced gear / trophies |

---

# 91. COMPLETE TOOL PROGRESSION

| Tier | Tool | Lvl | Leatherworking Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Skiving Knife | 1 | 5 | 2.15s | Starter | None |
| T1 | Copper Skiving Knife | 5 | 7 | 2.09s | Smithing | Tan Work -2% |
| T2 | Iron Skiving Knife | 15 | 10 | 2.03s | Smithing | Cure Time -3% |
| T3 | Cobalt Skiving Knife | 25 | 14 | 1.97s | Smithing | Material Preservation +3 pp |
| T4 | Argent Skiving Knife | 35 | 19 | 1.91s | Smithing | Pattern Assembly Time -4% |
| T5 | Emberite Skiving Knife | 45 | 25 | 1.85s | Smithing | Leather Output Chance +4 pp |
| T6 | Frostsilver Skiving Knife | 55 | 32 | 1.79s | Smithing | Tan Work -6% |
| T7 | Stormiron Skiving Knife | 65 | 40 | 1.73s | Smithing | Animal Component Preservation +5 pp |
| T8 | Aetherite Skiving Knife | 75 | 49 | 1.67s | Smithing | Runic Treatment Work -6% |
| T9 | Umbral Skiving Knife | 85 | 59 | 1.61s | Smithing | Rare Material Preservation +5 pp |
| T10 | Astralite Master Skiving Knife | 95 | 70 | 1.55s | Smithing | Leatherworking Power +8%; Assembly Time -5% |

---

# 92. COMPLETE CLOTHING PROGRESSION

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Tanner Hood | Cure Time -4% |
| T3 / L25 | Tanner Apron | Hide/Bark Preservation +3 pp |
| T3 / L25 | Tanner Trousers | Leatherworking Mastery XP +4% |
| T3 / L25 | Tanner Gloves | Tan Work -4% |
| T3 / L25 | Tanner Boots | Action Time -3% |
| Set | Tanner 5/5 | Leather Output Chance +3 pp |
| T5 / L45 | Armorer Cap | Armor Assembly Work -6% |
| T5 / L45 | Armorer Coat | Leather Preservation +4 pp |
| T5 / L45 | Armorer Leggings | Armor Mastery XP +6% |
| T5 / L45 | Armorer Gloves | Reinforced Pattern Work -5% |
| T5 / L45 | Armorer Boots | Pattern Assembly Time -4% |
| Set | Armorer 5/5 | Armor Material Preservation +4 pp |
| T7 / L65 | Outfitter Hood | Utility Assembly Time -6% |
| T7 / L65 | Outfitter Coat | Sinew/Fur Preservation +4 pp |
| T7 / L65 | Outfitter Legguards | Utility Mastery XP +7% |
| T7 / L65 | Outfitter Gloves | Strap/Grip Output Chance +5 pp |
| T7 / L65 | Outfitter Boots | Worker-gear Assembly Time -5% |
| Set | Outfitter 5/5 | Utility Output +1 every 4 crafts |
| T9 / L85 | Master Leatherworker Hood | Leatherworking Power +8% |
| T9 / L85 | Master Leatherworker Coat | Material Preservation +5 pp |
| T9 / L85 | Master Leatherworker Legguards | Mastery XP +8% |
| T9 / L85 | Master Leatherworker Gloves | Leather Output Chance +6 pp |
| T9 / L85 | Master Leatherworker Boots | All Leatherworking Time -5% |
| Set | Master Leatherworker 5/5 | Action Time -5%; Preservation +3 pp |

---

# 93. COMPLETE JEWELRY PROGRESSION

| Leatherworking Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Tanner's Ring | Cure Time -6% | Tanning speed |
| 25 | Hidekeeper Pendant | Hide Preservation +5 pp | Resource efficiency |
| 35 | Leatherworker's Band | Leather Output Chance +5 pp | Leather throughput |
| 45 | Armorer Charm | Armor Assembly Work -7% | Armor |
| 55 | Deep Tan Loop | Deep Tan Fish Oil Preservation +6 pp | Yield method |
| 65 | Outfitter Seal | Utility Assembly Time -8% | Grips/straps/worker gear |
| 75 | Runic Binding Chain | Runic Filament Preservation +6 pp | Runic treatment |
| 85 | Umbral Tannery Charm | T8+ Tan Work -6% | Late leather |
| 95 | Astral Leatherworker Emblem | Power +8%; Leather Output +4 pp | Endgame general |

---

# 94. COMPLETE TANNERY PROGRESSION

| Facility | Estate Stage | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|
| Tannery I | House | 20 | 5 | 2 | Tanning presets; exact hide/leather analytics; basic Pattern storage |
| Tannery II | Lodge | 40 | 10 | 4 | Deep/Precision Tan automation; first worker; reserve rules |
| Tannery III | Manor | 60 | 25 | 6 | Profession gear templates; 3 workers; utility chains |
| Tannery IV | Estate | 80 | 50 | 10 | Runic treatment teams; worker equipment schedules; +6% worker efficiency |
| Tannery V | Holdings / late Estate | 100 | 100 | Expanded | Astral/Primal leather support; 10 workers |

---

# 95. COMPLETE LEVEL ROADMAP

| Leatherworking Lvl | Major Unlock |
|---|---|
| 1 | Light Hide → Light Leather; Standard Tan; Worn Skiving Knife |
| 5 | Copper Skiving Knife; T1 Leather armor family |
| 8 | Leather Strap Bundle |
| 11 | Tough Leather |
| 12 | Sinew Cord |
| 15 | Iron Skiving Knife; Quick Tan; Tanner's Ring |
| 18 | Reinforced Strap Bundle / T2 Leather armor |
| 21 | Rugged Leather |
| 25 | Cobalt Skiving Knife; Reinforced Pattern; Tanner set; Hidekeeper Pendant |
| 26 | Fur Lining |
| 28 | Rugged Grip Wrap / T3 Leather armor |
| 31 | Moon Leather |
| 35 | Argent Skiving Knife; Deep Tan; Leatherworking Specializations; Leatherworker's Band |
| 38 | Moonbound Harness Parts / T4 Leather armor |
| 41 | Ember Leather |
| 42 | Bone Rivet Bundle |
| 45 | Emberite Skiving Knife; Armorer set; Armorer Charm |
| 48 | Ember Grip Wrap / T5 Leather armor |
| 51 | Frost Leather |
| 55 | Frostsilver Skiving Knife; Precision Tan; Deep Tan Loop |
| 58 | Frost Fur Lining / T6 Leather armor |
| 61 | Storm Leather |
| 62 | Predator Reinforcement |
| 65 | Stormiron Skiving Knife; Runic-Treated Pattern; Outfitter set; Outfitter Seal |
| 68 | Storm Reinforced Straps / T7 Leather armor |
| 71 | Aether Leather |
| 75 | Aetherite Skiving Knife; Runic Binding Chain |
| 78 | Aether Binding Set / T8 Leather armor |
| 81 | Umbral Leather |
| 85 | Umbral Skiving Knife; Master Leatherworker set; Umbral Tannery Charm |
| 88 | Umbral Grip Set / T9 Leather armor |
| 91 | Astral Leather |
| 95 | Astralite Master Skiving Knife; Astral-Treated Pattern; Astral Leatherworker Emblem |
| 98 | Astral Binding Set / T10 Leather armor |
| 100 | Leatherworking cap; Primal Leather endgame path |

---

# 96. CURE TIME FORMULA

**Final Cure Time = Base Cure Time × Tanning Method × Tool/gear/Mastery/Specialization/Tannery modifiers**

Minimum:

**40% of Base**

---

# 97. TAN WORK FORMULA

**Final Tan Work = Base Tan Work × Method Work Multiplier × gear × Mastery × Specialization**

Each Tool action:

**Remaining Work -= Final Leatherworking Power**

---

# 98. ASSEMBLY WORK FORMULA

**Final Assembly Work = Tier Base Work × Pattern Multiplier × Treatment Multiplier × gear/Specialization**

Suggested Treatment Work:

- Standard 1.00x;
- Reinforced 1.15x;
- Fur-Lined 1.10x;
- Runic 1.25x;
- Astral 1.40x.

---

# 99. LEATHER OUTPUT FORMULA

Base output depends on Method:

- Standard 2;
- Quick 2;
- Deep 3;
- Precision 2.

Then roll:

**Leather Output Chance**

Success:

+1 Leather.

Hard cap:

60%.

---

# 100. DEEP TAN OIL FORMULA

One Deep Tan craft consumes:

**1 Fish Oil**

Preservation can save Fish Oil unless recipe uses protected special oil later.

This keeps Fish Oil economy visible and predictable.

---

# 101. OFFLINE LEATHERWORKING

Save:

- active recipe;
- Tanning Method;
- Batch;
- Cure progress;
- Tan Work;
- Assembly Work;
- Tool;
- gear;
- jewelry;
- Specialization;
- reserves;
- planner;
- workers.

Offline uses identical formulas.

---

# 102. OFFLINE RESULTS

Show:

- Hides consumed;
- Bark consumed;
- Fish Oil consumed;
- Leather produced;
- extra Leather;
- materials preserved;
- armor/utility items;
- XP;
- Mastery;
- planner transitions;
- worker output separately.

---

# 103. LEATHERWORKING SCREEN — HIGH-LEVEL UI

Tabs:

- Tanning;
- Leather Armor;
- Profession Gear;
- Utility;
- Animal Components.

Tanning card shows:

- Hide;
- Leather;
- Method;
- Cure Time;
- Tan Work;
- expected Leather/hour;
- Hide/hour;
- Bark/hour;
- Oil/hour.

---

# 104. ACTIVE TANNING PANEL

Clear two-phase display:

**Curing**

→ **Tanning**

Show:

- current Hide;
- Method;
- Cure progress;
- Tan Work;
- Leatherworking Power;
- current expected output;
- Preservation;
- Fish Oil status.

---

# 105. METHOD COMPARISON UI

For selected Hide, UI should compare:

| Method | Leather/h | Hide/h | Bark/h | Oil/h | XP/h | Mastery/h |
|---|---:|---:|---:|---:|---:|---:|

This makes the choice understandable.

---

# 106. ARMOR / PATTERN UI

Selecting a pattern shows:

- Leather tier;
- Treatment;
- secondary input;
- Work;
- expected time;
- Mastery;
- worker eligibility.

Combat stats can be shown once the global equipment system defines them.

---

# 107. ANALYTICS

Show:

- Leather/hour;
- Hide/hour;
- Bark/hour;
- Fish Oil/hour;
- Preservation/hour;
- Utility components/hour;
- Armor/hour;
- XP/hour;
- Mastery/hour;
- Cure % of cycle;
- Tan %;
- Assembly %;
- ETA to level/Mastery.

Workers separately.

---

# 108. CHRONICLES — EARLY LEATHERWORKING

Suggested:

1. obtain Light Hide from Hunting.
2. perform Standard Tan.
3. explain Bark.
4. craft Light Leather.
5. craft first Leather armor.
6. make Leather Strap Bundle.
7. equip first Skiving Knife.
8. reach Leather Mastery 10.

---

# 109. CHRONICLES — MIDGAME

Suggested:

- unlock Quick Tan;
- unlock Reinforced Pattern;
- choose Leatherworking Specialization;
- use Fish Oil in Deep Tan;
- craft Fur Lining;
- build Tannery II;
- make first recipe Proven;
- assign worker;
- automate Hunting → Leather supply.

---

# 110. CHRONICLES — LATE

Suggested:

- use Precision Tan on high-tier Hide;
- craft Runic-treated equipment;
- maintain Leather reserve through workers;
- craft Aether Binding;
- tan Umbral Hide;
- tan Astral Hide;
- equip Astralite Skiving Knife;
- reach Leatherworking 100;
- unlock Primal Leather path.

---

# 111. PRIMAL LEATHER — POST-100

Hunting's post-100:

**Primal Hide**

becomes Leatherworking's:

**Primal Leather**

This is not normal T11 progression.

---

# 112. PRIMAL LEATHER RECIPE

Recommended:

**2 Primal Hide + 1 Bark + 1 Refined Fish Oil → 2 Primal Leather**

Processing requires:

- Leatherworking 100;
- Tannery V;
- Astralite Master Skiving Knife;
- Primal Hide access;
- Master of the Hide Chronicle.

Deep/Precision principles can later be extended, but do not add four Primal methods automatically.

---

# 113. PRIMAL LEATHER USES

Expected:

- endgame Ranged armor;
- Holdings worker/profession gear;
- Worldroot weapon grips/bindings;
- World Matrix equipment;
- permanent account projects.

---

# 114. MASTER OF THE HIDE

Recommended requirements:

- Leatherworking 100;
- Tannery V;
- Astralite Master Skiving Knife;
- process every normal Leather tier;
- at least 5 Leather recipes Mastery 100;
- Astral Leather Mastery 50;
- craft one Astral-treated item;
- Hunting Primal Hunt unlocked.

Reward:

- Primal Leather processing;
- fourth Leatherworking preset;
- Master Leatherworker marker.

---

# 115. DEVTOOLS

Support:

- set Leatherworking Level;
- set Recipe Mastery;
- set Skill-Wide Mastery;
- spawn Hides;
- spawn Bark;
- spawn Fish Oil;
- spawn animal components;
- spawn Leather;
- unlock Methods/Treatments;
- set active Method;
- set Cure/Tan/Assembly progress;
- spawn Skiving Knife;
- spawn profession gear;
- set Specialization;
- set Tannery tier;
- mark recipe Proven;
- spawn worker;
- set worker Proficiency;
- instant craft;
- simulate 1m / 5m / 1h / 8h / 24h;
- compare expected vs actual output.

---

# 116. DATA MODEL

Leather recipe:

- Hide ID;
- Leather ID;
- Tier;
- level;
- Base Cure Time;
- Base Tan Work;
- Base XP.

Method:

- input multiplier;
- output;
- Cure modifier;
- Work modifier;
- XP/Mastery modifier;
- special rules.

Pattern:

- item;
- Leather cost;
- treatment;
- Work multiplier;
- secondary inputs.

Player:

- Recipe Mastery;
- Proven flags;
- presets;
- specialization;
- reserves;
- planner.

---

# 117. ANTI-BLOAT RULES

Avoid:

- random Leather quality;
- 3–5 Leather variants per Tier;
- separate leather item per animal species;
- species-specific Fang/Tail/Claw items;
- one armor copy for every treatment;
- Tool durability;
- tanning failure;
- manual sewing/skinning minigames.

Prefer:

- one Hide tier;
- one Leather tier;
- method choices;
- selective Treatments;
- universal Hunting components;
- strong utility production.

---

# 118. MAJOR OPEN QUESTIONS — RECOMMENDED ANSWERS

## Should each animal species have its own Hide?

**No.**

One Hide tier per Hunting Ground.

---

## Should each Hide become one Leather tier?

**Yes.**

Clear 10-tier progression.

---

## Should Leather have random quality?

**No.**

---

## Should there be Supple/Hardened Leather items for every Tier?

**No.**

Use Tanning Methods and Pattern Treatments instead.

---

## Should Tanning Method change final Leather item?

**No.**

It changes efficiency.

---

## Should Deep Tan consume Fish Oil?

**Yes.**

Strong cross-profession link and logical material use.

---

## Should Deep Tan always be best?

**No.**

It costs:
- more time;
- Fish Oil.

It maximizes Hide-to-Leather yield.

---

## Should Quick Tan be best XP?

**No.**

It trades XP/Mastery for speed.

---

## Should Precision Tan be good for expensive Hides?

**Yes.**

That is its primary identity.

---

## Should Bark be required for Tanning?

**Yes.**

Use universal Bark.

---

## Should each wood tier make different tanning agent?

**No.**

Avoid bloat.

---

## Should Leatherworking make Ranged armor?

**Yes.**

It owns deterministic baseline leather/ranged armor.

---

## Should Leatherworking make Magic cloth armor?

**No.**

Tailoring owns cloth/magic armor.

---

## Should Leatherworking make Heavy armor?

**No.**

Smithing owns heavy armor.

---

## Should all armor have Reinforced/Fur/Runic variants?

**No.**

Use advanced variants selectively.

---

## Should Leatherworking create Tool grips?

**Yes.**

This is an important permanent support role.

---

## Should Leatherworking process Sinew?

**Yes.**

Sinew Cord is a clean cross-profession component.

---

## Should Leatherworking make Bowstrings directly?

**No baseline.**

Tailoring owns the final Bowstring recipes.

Leatherworking can supply Sinew Cord/reinforcement.

---

## Should Fur be a universal item?

**Yes.**

---

## Should Fang/Claw be species-specific?

**No.**

Universal fragment unless a future unique boss recipe requires a specific drop.

---

## Should Skiving Knife have durability?

**No.**

---

## Should Tanning fail?

**No.**

Idle-first predictable processing.

---

## Should Leatherworking require Estate Tannery from Level 1?

**No.**

Curing Rack/Hand Table supports early play.

---

## Should workers use real Hide/Bark/Oil?

**Yes.**

---

## When can workers craft a recipe?

**Recipe Mastery 10.**

---

## Should workers automatically craft armor?

**No.**

Only explicit assignment.

---

## Do workers grant player XP/Mastery?

**No.**

---

## Should old Leather remain useful?

**Yes.**

Through:
- worker gear;
- straps;
- grips;
- traps;
- profession equipment;
- Estate.

---

## Should Primal Leather be a full T11 tier?

**No.**

Selective post-100 endgame material.

---

## Should Leatherworking 100 finish the skill?

**No.**

Post-100:
- Mastery;
- Primal Leather;
- worker economy;
- endgame equipment;
- completion.

---

# 119. COMPLETE LOCKED LEATHERWORKING BASELINE

1. Leatherworking uses Curing → Tanning → Treatment → Assembly.
2. Hunting supplies the 10 raw Hide tiers.
3. Leatherworking creates 10 normal Leather tiers.
4. One Leather item per Tier.
5. No random Leather quality.
6. Tanning Methods:
   - Standard;
   - Quick;
   - Deep;
   - Precision.
7. Standard uses Hide + Bark.
8. Deep uses Fish Oil and produces more Leather.
9. Quick trades XP/Mastery for speed.
10. Precision favors Preservation/Mastery.
11. Bark is universal tanning agent.
12. Leather Output Chance adds +1 Leather.
13. Material Preservation cap 50%.
14. Pattern Treatments:
   - Standard;
   - Reinforced;
   - Fur-Lined;
   - Runic;
   - Astral.
15. Treatments are selective, not full duplicate armor trees.
16. Leatherworking owns deterministic leather/ranged armor.
17. Core armor slots:
   - Hood;
   - Jerkin;
   - Leggings;
   - Gloves;
   - Boots.
18. Leatherworking makes Tool grips/straps/bindings.
19. Leatherworking processes Sinew/Fur/Bone/Predator components.
20. Skiving Knife is primary Tool.
21. No durability.
22. Recipe Mastery 1–100.
23. Skill-Wide Mastery.
24. Three reversible Specializations:
   - Tanner;
   - Armorer;
   - Outfitter.
25. Tannery is Estate infrastructure.
26. Workers consume real materials.
27. Recipe Mastery 10 makes recipes Proven.
28. Workers gain Proficiency, not player XP/Mastery.
29. Workers default to material/utility production, not rare armor.
30. Planner supports Hunting → Leather chains and method fallback.
31. Leatherworking strongly connects Hunting, Woodcutting, Cooking, Smithing, Fletching, Tailoring, Runecrafting, Estate.
32. Offline uses identical formulas.
33. Post-100 uses Primal Leather.
34. All baseline Leatherworking content lives in this single MD.

---

# 120. FINAL SUMMARY

Leatherworking begins with:

**Light Hide**

↓

**Curing**

↓

**Standard Tan**

↓

**Light Leather**

↓

**Leather armor / straps**

↓

**Quick / Deep / Precision Tan**

↓

**profession equipment**

↓

**Sinew Cord / Fur Lining / reinforced components**

↓

**Leatherworking Specialization**

↓

**Tannery workers**

↓

**Runic-treated Leather equipment**

↓

**Astral Leather**

↓

**Leatherworking 100**

↓

**Primal Leather**

The player is not choosing between random Leather qualities.

The meaningful choice is:

> **Do I need the Leather quickly, do I want the most Leather from each Hide, or is the Hide valuable enough that I should process it carefully and preserve materials?**

Then:

> **Does that Leather become armor, worker/profession equipment, or utility components for the wider account?**

Core Leatherworking identity:

> **Hunting provides the carcass. Leatherworking turns the hide and animal materials into the durable equipment, grips, bindings, and armor that keep the rest of the account functioning.**



# INTEGRATION HARDENING — METAL FITTINGS

Hardened Fittings, Argent Mechanism, or Tempered Assembly are the canonical Smithing inputs for reinforced Leatherworking recipes by tier. Generic Rivet Bundle / metal Rivet Bundle is retired; Bone Rivet Bundle remains a separate Leatherworking recipe output and is not a metal item.







