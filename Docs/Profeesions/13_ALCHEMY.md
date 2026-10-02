# 13 — ALCHEMY

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `03_FISHING.md`, `04_COOKING.md`, `07_FORAGING.md`, `09_RUNECRAFTING.md`, `10_HUNTING.md`, `12_FARMING.md`  
**Purpose:** Define Alchemy as one complete profession in a single source-of-truth file: plant/fungal extraction, fixed-tier combat Elixirs, profession Tonics, Remedies, optional Catalysts, Wild Reagent Concentrates, profession Tool/gear, Mastery, Specializations, Apothecary infrastructure, workers, auto-consume policies, planner, UI, formulas, Foraging/Farming integration, and post-100 Quintessence progression.

---

# 1. ALCHEMY ROLE IN THE GAME

Alchemy owns the game's temporary consumable buff economy.

Its main outputs are:

- Combat Elixirs;
- Profession Tonics;
- Remedies;
- Wild Reagent Concentrates;
- selected magical/alchemical crafting ingredients.

Its main raw suppliers are:

- Foraging;
- Farming;
- Runecrafting;
- selected Fishing / Hunting / Jewelcrafting resources.

Alchemy should not become:

**click Herb → instantly receive potion**

Its core progression is:

**Raw Ingredient → Extraction → Formula → Brewing → Finished Consumable**

---

# 2. IMPORTANT BOUNDARY — COOKING VS ALCHEMY

Cooking remains the primary source of:

- HP sustain;
- combat food;
- provisions.

Alchemy owns:

- temporary buffs;
- status remedies;
- profession optimization.

Baseline Alchemy therefore does **not** introduce a normal Healing Potion ladder.

This is deliberate.

If every combat build simply auto-consumed:

- Food;
- Healing Potion;
- Regeneration Potion;

Cooking would lose identity.

---

# 3. CONSUMABLE SLOT ARCHITECTURE

| Consumable Layer | Active Limit | Products | Purpose |
|---|---|---|---|
| Combat Elixir Slot | 1 | Power / Precision / Fortitude / Celerity / Warding | One long-duration combat buff |
| Profession Tonic Slot | 1 | Bounty / Conservation / Insight / Survey | One long-duration profession buff |
| Reactive Remedy | No long-duration slot | Antitoxin / Purifying Draught | Consumed by trigger policy |

The account may therefore have:

- one Combat Elixir;
- one Profession Tonic;

active simultaneously.

Remedies are separate trigger-based consumables.

This prevents:

**eight mandatory potion buffs stacked at once**

from becoming the baseline.

---

# 4. FIXED ITEM POWER

Critical rule:

> **The effect of a crafted Alchemy consumable is fixed by the recipe tier.**

Gear, Mastery, Specialization, Tools and workers can change:

- crafting speed;
- material consumption;
- output quantity;
- Mastery gain.

They do **not** change:

- potion stat value;
- duration;
- item quality.

Therefore:

**Power Elixir VI**

is always the same item.

There is no:

- weak Power Elixir VI;
- perfect Power Elixir VI;
- 87% quality Power Elixir VI.

This keeps item stacks clean.

---

# 5. CORE PRODUCTION MODES

Alchemy has four production categories:

## Extraction

Raw wild/farmed ingredients → standardized Extracts.

## Brewing

Extracts → Elixirs / Tonics / Remedies.

## Concentration

Wild Reagents → high-value Concentrates.

## Utility

Selected Catalysts / endgame Quintessence components.

---

# 6. MAIN RAW INGREDIENT CONTRACT

Alchemy directly consumes the Foraging resource ladder.

| Tier | Herb Source | Fungi Source | Botanical Source | Wild Reagent | Extract Grade | Extract / 2 Raw |
|---|---|---|---|---|---|---|
| T1 | Wild Mint | Buttoncap | Sunberry | Golden Yarrow | Crude | 3 |
| T2 | Marsh Sage | Reedcap | Bogberry | Glowroot | Crude | 4 |
| T3 | Mossleaf | Amber Morel | Briarberry | Silverleaf | Refined | 3 |
| T4 | Moon Thyme | Pale Chanterelle | Moonseed | Dreamcap | Refined | 4 |
| T5 | Cinderleaf | Ash Morel | Emberberry | Phoenix Root | Potent | 3 |
| T6 | Frostmint | Icecap | Winterberry | Crystal Bloom | Potent | 4 |
| T7 | Stormsage | Thunder Truffle | Tempest Seedpod | Fulmin Root | Aetheric | 3 |
| T8 | Aetherleaf | Prismcap | Aetherberry | Lumen Orchid | Aetheric | 4 |
| T9 | Shadeleaf | Gloom Morel | Duskberry | Voidblossom | Astral | 3 |
| T10 | Starleaf | Cometcap | Starseed Pod | Celestial Lotus | Astral | 4 |

If Farming domesticates one of these normal resources:

it produces the exact same item.

Alchemy does not care whether:

**Moon Thyme**

came from:

- Foraging;
- Farming.

This strongly links Foraging discovery with Farming scale.

---

# 7. WHY EXTRACTS EXIST

Without Extracts:

every Potion recipe would need several specific raw plants.

That creates huge recipe text and weakens long-term supply planning.

Extracts standardize ingredients into three functions:

- Herbal;
- Fungal;
- Botanical.

The exact raw species still matter for:

- which Extract grade they produce;
- Farming/Foraging progression.

---

# 8. EXTRACT GRADES

| Grade | Tiers | Herbal | Fungal | Botanical |
|---|---|---|---|---|
| Crude | T1–T2 | Crude Herbal Extract | Crude Fungal Extract | Crude Botanical Extract |
| Refined | T3–T4 | Refined Herbal Extract | Refined Fungal Extract | Refined Botanical Extract |
| Potent | T5–T6 | Potent Herbal Extract | Potent Fungal Extract | Potent Botanical Extract |
| Aetheric | T7–T8 | Aetheric Herbal Extract | Aetheric Fungal Extract | Aetheric Botanical Extract |
| Astral | T9–T10 | Astral Herbal Extract | Astral Fungal Extract | Astral Botanical Extract |

Five grade bands are enough.

Avoid creating:

- 10 Herbal Extracts;
- 10 Fungal Extracts;
- 10 Botanical Extracts

unless later content genuinely needs them.

This cuts 30 potential item stacks down to 15.

---

# 9. SOURCE EFFICIENCY WITHIN A GRADE BAND

Each Extract grade spans two Tiers.

Earlier Tier source:

**2 raw → 3 Extract**

Later Tier source:

**2 raw → 4 Extract**

Example:

Wild Mint:

2 →3 Crude Herbal Extract.

Marsh Sage:

2 →4 Crude Herbal Extract.

This means later resources within the same grade remain more efficient without requiring another Extract item.

---

# 10. EXTRACTION LOOP

1. Select raw ingredient.
2. Select Extraction Method.
3. Select Batch.
4. Reserve ingredient.
5. Begin Extraction.
6. Resolve Material Preservation.
7. Produce grade/category Extract.
8. Resolve Extract Output Chance.
9. Award XP / Mastery.
10. Repeat.

No random failure.

---

# 11. EXTRACTION METHODS

| Method | Unlock | Time | Output | XP/Mastery | Identity |
|---|---|---|---|---|---|
| Standard Extraction | 1 | 1.00x | 1.00x | 1.00x | Balanced baseline |
| Rapid Decoction | 15 | 0.75x | 1.00x | 0.85x | Fast extraction; lower XP/Mastery |
| Cold Infusion | 35 | 1.20x | +1 Extract | 1.10x | Maximum raw-resource conversion |
| Precision Distillation | 55 | 1.15x | 1.00x | 1.15x | +15 pp raw-material Preservation |

The method changes economics, not the final Extract item.

---

# 12. STANDARD EXTRACTION

Balanced baseline.

No modifiers.

Best default.

---

# 13. RAPID DECOCTION

Unlock:

15.

Effects:

- Extraction Time -25%;
- same base output;
- XP/Mastery -15%.

Best for:

- urgent Extract supply;
- established worker production.

---

# 14. COLD INFUSION

Unlock:

35.

Effects:

- Extraction Time +20%;
- +1 Extract per craft;
- XP/Mastery +10%.

Best for:

- maximizing raw Herbs/Fungi/Botanical conversion.

---

# 15. PRECISION DISTILLATION

Unlock:

55.

Effects:

- Extraction Time +15%;
- raw-material Preservation +15 pp;
- Mastery XP +15%.

Best for:

- scarce T8–T10 ingredients;
- expensive domesticated/wild resources.

---

# 16. EXTRACT OUTPUT CHANCE

After base Extract output:

roll:

**Extract Output Chance**

Success:

**+1 Extract**

Hard cap:

**60%**

Cold Infusion's guaranteed +1 applies before this roll.

---

# 17. RAW MATERIAL PRESERVATION

Normal raw ingredients can be preserved.

Hard cap:

**50%**

Wild Reagents and protected endgame materials can use lower/no Preservation if explicitly stated.

---

# 18. BREWING LOOP

1. Select Formula.
2. Select Batch.
3. Reserve Extracts.
4. Select optional Catalyst policy.
5. Brewing begins.
6. Alchemy Power / recipe Work or Brew Time resolves.
7. Finished consumable is created.
8. Material Preservation resolves.
9. Brew Output Chance resolves.
10. XP / Mastery awarded.
11. Catalyst charge advances.
12. Repeat.

---

# 19. NO BREWING FAILURE

Normal Alchemy does not have:

- ruined potion;
- exploded batch;
- random impurity failure.

Difficulty appears through:

- input cost;
- time;
- recipe Tier;
- rare ingredients;
- optimization choices.

---

# 20. COMBAT ELIXIR FAMILIES

Five baseline families:

1. Power;
2. Precision;
3. Fortitude;
4. Celerity;
5. Warding.

Only one can be active at once.

This makes Elixir choice part of Combat preparation.

---

# 21. POWER ELIXIR

Role:

**damage**

Target effect:

increases total Damage Done.

Best for:

- farming;
- DPS checks;
- offensive builds.

---

# 22. PRECISION ELIXIR

Role:

**hit reliability / crit**

Target effect:

- Accuracy;
- Crit Chance.

Useful when:

- higher-tier enemies have harder defensive requirements;
- crit-focused builds exist.

---

# 23. FORTITUDE ELIXIR

Role:

**defense**

Target effect:

increases Defense.

It should not directly heal.

Cooking remains HP sustain.

---

# 24. CELERITY ELIXIR

Role:

**combat tempo**

Target:

reduces applicable Combat action time:

- attack;
- cast;
- skill action;

depending future Combat architecture.

Cap interaction must respect future global action-speed floors.

---

# 25. WARDING ELIXIR

Role:

**status protection**

Target:

increases Status Resistance.

This is intended for:

- poison;
- burn;
- control;
- other removable status systems.

Exact status taxonomy belongs to Combat.

---

# 26. COMPLETE COMBAT ELIXIR PROGRESSION

| Tier | Suggested Lvl | Consumable | Extract Grade | Base Formula | Fixed Effect Target | Duration |
|---|---|---|---|---|---|---|
| T1 | 1 | Power Elixir 1 | Crude | 2 Herbal + 1 Botanical | 2% | 20 min |
| T2 | 11 | Power Elixir 2 | Crude | 2 Herbal + 1 Botanical | 3% | 25 min |
| T3 | 21 | Power Elixir 3 | Refined | 2 Herbal + 1 Botanical | 4% | 30 min |
| T4 | 31 | Power Elixir 4 | Refined | 2 Herbal + 1 Botanical | 5% | 35 min |
| T5 | 41 | Power Elixir 5 | Potent | 2 Herbal + 1 Botanical | 6% | 40 min |
| T6 | 51 | Power Elixir 6 | Potent | 2 Herbal + 1 Botanical | 7% | 50 min |
| T7 | 61 | Power Elixir 7 | Aetheric | 2 Herbal + 1 Botanical | 8% | 60 min |
| T8 | 71 | Power Elixir 8 | Aetheric | 2 Herbal + 1 Botanical | 9% | 75 min |
| T9 | 81 | Power Elixir 9 | Astral | 2 Herbal + 1 Botanical | 10% | 90 min |
| T10 | 91 | Power Elixir 10 | Astral | 2 Herbal + 1 Botanical | 12% | 120 min |
| T1 | 1 | Precision Elixir 1 | Crude | 2 Botanical + 1 Herbal | +3% Accuracy, +0.5 pp Crit | 20 min |
| T2 | 11 | Precision Elixir 2 | Crude | 2 Botanical + 1 Herbal | +4%, +0.75 pp | 25 min |
| T3 | 21 | Precision Elixir 3 | Refined | 2 Botanical + 1 Herbal | +5%, +1.0 pp | 30 min |
| T4 | 31 | Precision Elixir 4 | Refined | 2 Botanical + 1 Herbal | +6%, +1.25 pp | 35 min |
| T5 | 41 | Precision Elixir 5 | Potent | 2 Botanical + 1 Herbal | +7%, +1.5 pp | 40 min |
| T6 | 51 | Precision Elixir 6 | Potent | 2 Botanical + 1 Herbal | +8%, +1.75 pp | 50 min |
| T7 | 61 | Precision Elixir 7 | Aetheric | 2 Botanical + 1 Herbal | +9%, +2.0 pp | 60 min |
| T8 | 71 | Precision Elixir 8 | Aetheric | 2 Botanical + 1 Herbal | +10%, +2.25 pp | 75 min |
| T9 | 81 | Precision Elixir 9 | Astral | 2 Botanical + 1 Herbal | +11%, +2.5 pp | 90 min |
| T10 | 91 | Precision Elixir 10 | Astral | 2 Botanical + 1 Herbal | +12%, +3.0 pp Crit | 120 min |
| T1 | 1 | Fortitude Elixir 1 | Crude | 2 Fungal + 1 Herbal | 4% | 20 min |
| T2 | 11 | Fortitude Elixir 2 | Crude | 2 Fungal + 1 Herbal | 5% | 25 min |
| T3 | 21 | Fortitude Elixir 3 | Refined | 2 Fungal + 1 Herbal | 6.5% | 30 min |
| T4 | 31 | Fortitude Elixir 4 | Refined | 2 Fungal + 1 Herbal | 8% | 35 min |
| T5 | 41 | Fortitude Elixir 5 | Potent | 2 Fungal + 1 Herbal | 9.5% | 40 min |
| T6 | 51 | Fortitude Elixir 6 | Potent | 2 Fungal + 1 Herbal | 11% | 50 min |
| T7 | 61 | Fortitude Elixir 7 | Aetheric | 2 Fungal + 1 Herbal | 12.5% | 60 min |
| T8 | 71 | Fortitude Elixir 8 | Aetheric | 2 Fungal + 1 Herbal | 14% | 75 min |
| T9 | 81 | Fortitude Elixir 9 | Astral | 2 Fungal + 1 Herbal | 16% | 90 min |
| T10 | 91 | Fortitude Elixir 10 | Astral | 2 Fungal + 1 Herbal | 18% | 120 min |
| T1 | 1 | Celerity Elixir 1 | Crude | 2 Botanical + 1 Fungal | -2% | 20 min |
| T2 | 11 | Celerity Elixir 2 | Crude | 2 Botanical + 1 Fungal | -2.5% | 25 min |
| T3 | 21 | Celerity Elixir 3 | Refined | 2 Botanical + 1 Fungal | -3% | 30 min |
| T4 | 31 | Celerity Elixir 4 | Refined | 2 Botanical + 1 Fungal | -3.5% | 35 min |
| T5 | 41 | Celerity Elixir 5 | Potent | 2 Botanical + 1 Fungal | -4% | 40 min |
| T6 | 51 | Celerity Elixir 6 | Potent | 2 Botanical + 1 Fungal | -4.5% | 50 min |
| T7 | 61 | Celerity Elixir 7 | Aetheric | 2 Botanical + 1 Fungal | -5% | 60 min |
| T8 | 71 | Celerity Elixir 8 | Aetheric | 2 Botanical + 1 Fungal | -5.5% | 75 min |
| T9 | 81 | Celerity Elixir 9 | Astral | 2 Botanical + 1 Fungal | -6% | 90 min |
| T10 | 91 | Celerity Elixir 10 | Astral | 2 Botanical + 1 Fungal | -7% | 120 min |
| T1 | 1 | Warding Elixir 1 | Crude | 1 Herbal + 1 Fungal + 1 Botanical | 5% | 20 min |
| T2 | 11 | Warding Elixir 2 | Crude | 1 Herbal + 1 Fungal + 1 Botanical | 7% | 25 min |
| T3 | 21 | Warding Elixir 3 | Refined | 1 Herbal + 1 Fungal + 1 Botanical | 9% | 30 min |
| T4 | 31 | Warding Elixir 4 | Refined | 1 Herbal + 1 Fungal + 1 Botanical | 11% | 35 min |
| T5 | 41 | Warding Elixir 5 | Potent | 1 Herbal + 1 Fungal + 1 Botanical | 13% | 40 min |
| T6 | 51 | Warding Elixir 6 | Potent | 1 Herbal + 1 Fungal + 1 Botanical | 15% | 50 min |
| T7 | 61 | Warding Elixir 7 | Aetheric | 1 Herbal + 1 Fungal + 1 Botanical | 17% | 60 min |
| T8 | 71 | Warding Elixir 8 | Aetheric | 1 Herbal + 1 Fungal + 1 Botanical | 19% | 75 min |
| T9 | 81 | Warding Elixir 9 | Astral | 1 Herbal + 1 Fungal + 1 Botanical | 22% | 90 min |
| T10 | 91 | Warding Elixir 10 | Astral | 1 Herbal + 1 Fungal + 1 Botanical | 25% | 120 min |

Numeric effects are **balance anchors**.

Final Combat stat integration may tune exact values while preserving:

- relative order;
- one-Elixir slot;
- duration curve.

---

# 27. COMBAT ELIXIR DURATION CURVE

Tier duration:

- T1: 20 min;
- T2: 25 min;
- T3: 30 min;
- T4: 35 min;
- T5: 40 min;
- T6: 50 min;
- T7: 60 min;
- T8: 75 min;
- T9: 90 min;
- T10: 120 min.

High-tier consumables are designed for long idle sessions.

---

# 28. ELIXIR REPLACEMENT RULE

If one Combat Elixir is active:

consuming a different Combat Elixir:

**replaces it**

Default UI behavior:

show confirmation unless:

**Allow Elixir Replacement**

is enabled in the preset.

Auto-consume never stacks multiple Combat Elixirs.

---

# 29. PROFESSION TONICS

Alchemy also supports non-combat professions.

Four broad tonic families:

- Bounty;
- Conservation;
- Insight;
- Survey.

These are deliberately broad.

Do not create 14 separate:

- Mining Potion;
- Fishing Potion;
- Smithing Potion;
- etc.

---

# 30. COMPLETE PROFESSION TONIC PROGRESSION

| Lvl | Tonic | Extract Grade | Formula | Fixed Effect | Duration | Affects |
|---|---|---|---|---|---|---|
| 10 | Bounty Tonic I | Crude | 2 Botanical + 1 Herbal | +5% | 30 min | Normal non-rare profession output |
| 30 | Bounty Tonic II | Refined | 2 Botanical + 1 Herbal | +8% | 45 min | Normal non-rare profession output |
| 50 | Bounty Tonic III | Potent | 2 Botanical + 1 Herbal | +11% | 60 min | Normal non-rare profession output |
| 70 | Bounty Tonic IV | Aetheric | 2 Botanical + 1 Herbal | +14% | 90 min | Normal non-rare profession output |
| 90 | Bounty Tonic V | Astral | 2 Botanical + 1 Herbal | +18% | 120 min | Normal non-rare profession output |
| 10 | Conservation Tonic I | Crude | 2 Fungal + 1 Herbal | +5 pp | 30 min | Material Preservation |
| 30 | Conservation Tonic II | Refined | 2 Fungal + 1 Herbal | +8 pp | 45 min | Material Preservation |
| 50 | Conservation Tonic III | Potent | 2 Fungal + 1 Herbal | +11 pp | 60 min | Material Preservation |
| 70 | Conservation Tonic IV | Aetheric | 2 Fungal + 1 Herbal | +14 pp | 90 min | Material Preservation |
| 90 | Conservation Tonic V | Astral | 2 Fungal + 1 Herbal | +18 pp | 120 min | Material Preservation |
| 10 | Insight Tonic I | Crude | 1 Herbal + 1 Fungal + 1 Botanical | +10% | 30 min | Mastery XP |
| 30 | Insight Tonic II | Refined | 1 Herbal + 1 Fungal + 1 Botanical | +15% | 45 min | Mastery XP |
| 50 | Insight Tonic III | Potent | 1 Herbal + 1 Fungal + 1 Botanical | +20% | 60 min | Mastery XP |
| 70 | Insight Tonic IV | Aetheric | 1 Herbal + 1 Fungal + 1 Botanical | +25% | 90 min | Mastery XP |
| 90 | Insight Tonic V | Astral | 1 Herbal + 1 Fungal + 1 Botanical | +30% | 120 min | Mastery XP |
| 10 | Survey Tonic I | Crude | 2 Botanical + 1 Fungal | +10% | 30 min | Rare / by-product / Discovery chance |
| 30 | Survey Tonic II | Refined | 2 Botanical + 1 Fungal | +15% | 45 min | Rare / by-product / Discovery chance |
| 50 | Survey Tonic III | Potent | 2 Botanical + 1 Fungal | +20% | 60 min | Rare / by-product / Discovery chance |
| 70 | Survey Tonic IV | Aetheric | 2 Botanical + 1 Fungal | +25% | 90 min | Rare / by-product / Discovery chance |
| 90 | Survey Tonic V | Astral | 2 Botanical + 1 Fungal | +30% | 120 min | Rare / by-product / Discovery chance |

Five Tonic grades cover the entire game.

---

# 31. BOUNTY TONIC

Effect:

increases **normal non-rare profession output**.

Examples:

- primary Ore;
- normal Logs;
- normal Fish;
- normal Hunting Meat/Hide;
- production output;
- Farming yield.

Does not multiply:

- rare uniques;
- boss drops;
- Heartwood;
- World materials;
- explicit protected outputs.

Each profession defines how the bonus maps into its normal output formula.

---

# 32. CONSERVATION TONIC

Effect:

adds:

**Material Preservation percentage points**

to professions that consume materials.

Still respects each profession's own Preservation hard cap.

If profession has no Material Preservation mechanic:

Tonic has no effect there.

UI warns before consumption.

---

# 33. INSIGHT TONIC

Effect:

**Mastery XP**

not Skill XP.

This makes it a completion / specialization tool rather than the default fastest leveling potion.

---

# 34. SURVEY TONIC

Effect:

increases explicitly tagged:

- rare chance;
- by-product chance;
- Discovery gain.

Examples:

- Mining rares;
- Woodcutting by-products;
- Fishing Aquatic Finds;
- Foraging hidden reagent chance / Discovery;
- Hunting special components.

It does not increase guaranteed baseline output.

---

# 35. ONE PROFESSION TONIC SLOT

Only one:

- Bounty;
- Conservation;
- Insight;
- Survey

can be active at once.

This creates a meaningful choice.

---

# 36. TONIC DURATION

Five grades:

- I: 30 min;
- II: 45 min;
- III: 60 min;
- IV: 90 min;
- V: 120 min.

This is long enough for unattended professions.

---

# 37. REMEDIES

Remedies are not normal buff-slot consumables.

They are reactive.

| Lvl | Remedy | Inputs | Effect | Role |
|---|---|---|---|---|
| 20 | Antitoxin I | Crude Herbal + Crude Fungal | Removes Poison/Toxin; 30s toxin resistance | Reactive consumable |
| 55 | Antitoxin II | Potent Herbal + Potent Fungal | Removes Poison/Toxin; 60s toxin resistance | Reactive consumable |
| 90 | Antitoxin III | Astral Herbal + Astral Fungal | Removes Poison/Toxin; 120s toxin resistance | Reactive consumable |
| 40 | Purifying Draught I | Refined Herbal + Refined Botanical + 1 Wild Reagent Concentrate | Removes 1 removable non-boss debuff | Reactive consumable |
| 70 | Purifying Draught II | Aetheric Herbal + Aetheric Botanical + 1 Wild Reagent Concentrate | Removes 1 removable non-boss debuff; 20s cleanse lockout protection | Reactive consumable |
| 100 | Purifying Draught III | Astral Herbal + Astral Botanical + 1 Astral Wild Reagent Concentrate | Removes 1 removable non-boss debuff; 45s cleanse lockout protection | Reactive consumable |

---

# 38. ANTITOXIN

Removes:

**Poison / Toxin**

and gives brief resistance.

This provides Alchemy utility without replacing Food healing.

---

# 39. PURIFYING DRAUGHT

Removes:

**one removable non-boss negative status**

Exact removal priority belongs to Combat automation.

Boss mechanics can mark effects:

**Unremovable**

where necessary.

---

# 40. REMEDY AUTO-USE

Combat preset can configure:

- Never;
- on Poison;
- on removable debuff;
- only above item reserve;
- maximum uses/hour.

This prevents workers/offline Combat from consuming an entire rare Remedy stack unexpectedly.

---

# 41. NO BASELINE HEALTH POTION

Locked recommendation:

**No standard HP potion ladder.**

Reasons:

- Cooking already owns healing/sustain;
- avoids mandatory double-consumable healing;
- keeps Food strategically important.

Future unique boss consumables can be exceptions if needed.

---

# 42. WILD REAGENT CONCENTRATES

Foraging hidden resources remain valuable to Alchemy.

| Grade | Tiers | Foraging Wild Reagents | Conversion |
|---|---|---|---|
| Crude | T1–T2 | Golden Yarrow / Glowroot | 1 Wild Reagent → 3 Crude Concentrate |
| Refined | T3–T4 | Silverleaf / Dreamcap | 1 Wild Reagent → 3 Refined Concentrate |
| Potent | T5–T6 | Phoenix Root / Crystal Bloom | 1 Wild Reagent → 3 Potent Concentrate |
| Aetheric | T7–T8 | Fulmin Root / Lumen Orchid | 1 Wild Reagent → 3 Aetheric Concentrate |
| Astral | T9–T10 | Voidblossom / Celestial Lotus | 1 Wild Reagent → 3 Astral Concentrate |

Concentrates are used for:

- Remedies;
- optional Catalysts;
- selected advanced recipes.

They do not replace normal Extracts.

---

# 43. WILD REAGENT PRESERVATION

Recommended:

Wild Reagent itself:

**not preservable** during Concentrate conversion.

Reason:

these are Foraging-exclusive rare materials.

Concentrate recipes should remain a real sink.

---

# 44. OPTIONAL ALCHEMY CATALYSTS

| Unlock | Catalyst Policy | Consumption | Effect | Purpose |
|---|---|---|---|---|
| 25 | Wild Reagent Concentrate | 1 per 10 brews | Brew Output Chance +15 pp; Mastery XP +5% | Rare Foraging sink |
| 45 | Prismatic Catalyst | 1 Prismatic Dust per 12 brews | Brew Output +20 pp; Material Preservation +5 pp | Fishing/Jewelcrafting bridge |
| 65 | Aether Catalyst | 1 Aether Essence per 15 brews | Brew Time -8%; Output +20 pp | Mining/Runecrafting bridge |
| 95 | Astral Catalyst | 1 Astral Essence per 20 brews | Brew Time -10%; Output +25 pp; Mastery +10% | Endgame |

Catalysts improve production economics.

They do **not** increase final potion effect strength.

This keeps item stacks deterministic.

---

# 45. CATALYST POLICY

Player can configure:

- Never;
- Always;
- Above Reserve;
- only Combat Elixirs;
- only Tonics;
- only selected recipe.

Default:

**Above Reserve**

for workers.

---

# 46. CATALYST CHARGE COUNTER

Catalyst is consumed every N brews, not every brew.

Example:

1 Wild Reagent Concentrate every 10 brews.

Save exact counter:

**7/10**

Switching activity preserves it.

This prevents exploitative reset behavior.

---

# 47. PRISMATIC CATALYST

Uses:

**Prismatic Dust**

This creates a bridge into:

- Fishing;
- Jewelcrafting.

It is optional.

No potion should become impossible because the player has no Prismatic Dust.

---

# 48. AETHER / ASTRAL CATALYSTS

Late Alchemy can consume:

- Aether Essence;
- Astral Essence

as optional production Catalysts.

Runecrafting remains the main owner of magical Essence processing.

Alchemy only uses small optional amounts for advanced brewing.

---

# 49. ALCHEMY TOOL

Primary Tool:

**Apothecary / Retort Kit**

| Tier | Tool | Lvl | Alchemy Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Apothecary Kit | 1 | 5 | 2.15s | Starter | No bonus |
| T1 | Copper Mortar & Retort | 5 | 7 | 2.09s | Smithing + Tailoring | Extraction Time -2% |
| T2 | Iron Apothecary Kit | 15 | 10 | 2.03s | Smithing + Tailoring | Raw Material Preservation +2 pp |
| T3 | Cobalt Retort Set | 25 | 14 | 1.97s | Smithing + Jewelcrafting | Brew Output Chance +3 pp |
| T4 | Argent Alembic Kit | 35 | 19 | 1.91s | Smithing + Jewelcrafting | Brewing Time -4% |
| T5 | Emberglass Retort | 45 | 25 | 1.85s | Jewelcrafting + Smithing | Extract Output Chance +4 pp |
| T6 | Frostsilver Distillation Set | 55 | 32 | 1.79s | Smithing + Jewelcrafting | Infusion Work -6% |
| T7 | Stormglass Alchemy Kit | 65 | 40 | 1.73s | Jewelcrafting + Runecrafting | Catalyst interval +10% |
| T8 | Aetherglass Retort | 75 | 49 | 1.67s | Jewelcrafting + Runecrafting | Brew Output Chance +5 pp |
| T9 | Umbral Alembic Set | 85 | 59 | 1.61s | Jewelcrafting + Runecrafting | Rare reagent Preservation +5 pp |
| T10 | Astral Grand Retort | 95 | 70 | 1.55s | Multi-profession | Alchemy Power +8%; Brew Time -5% |

One Tool slot represents:

- mortar;
- pestle;
- retort;
- alembic;
- filter;
- measurement tools.

---

# 50. WHY ONE ALCHEMY TOOL

Do not create separate equipment slots for:

- Mortar;
- Retort;
- Alembic;
- Flask;
- Spoon;
- Burner.

One Kit keeps profession equipment consistent with the global shell.

---

# 51. NO TOOL DURABILITY

Alchemy Tool is permanent.

Old Kits can move to workers.

---

# 52. ALCHEMY POWER

Used for:

- difficult Infusion Work;
- advanced Concentrates;
- endgame utility recipes.

Routine Extraction/Brewing remains mostly time-based.

This avoids copying Mining's "HP" loop for every Alchemy action.

---

# 53. BREW TIME

Recommended Base Brew Time by Tier:

| Tier | Base Brew Time |
|---|---:|
| T1 | 3.2s |
| T2 | 3.4s |
| T3 | 3.6s |
| T4 | 3.8s |
| T5 | 4.0s |
| T6 | 4.2s |
| T7 | 4.4s |
| T8 | 4.6s |
| T9 | 4.8s |
| T10 | 5.0s |

Batch/gear/Mastery modify this.

---

# 54. BREW OUTPUT

Baseline:

**2 doses per brew**

T7+ selected recipes can have:

**3 base doses**

if final economy needs more long-session supply.

Recommended initial implementation:

keep all normal formula Base Output at 2.

Scale through:

- workers;
- Output Chance;
- batch efficiency.

---

# 55. BREW OUTPUT CHANCE

After normal output:

roll:

**Brew Output Chance**

Success:

**+1 dose**

Hard cap:

**60%**

No double-quality item.

---

# 56. BREW MATERIAL PRESERVATION

Normal Extract inputs can be preserved.

Hard cap:

**50%**

Wild Reagent Concentrates and protected endgame ingredients can be exempt.

---

# 57. PROFESSION EFFECTS NEVER CHANGE CRAFTED ITEM STATS

Important implementation invariant:

Do not code:

> Mastery 100 Power Elixir gives stronger damage buff.

Mastery 100 can give:

- faster crafting;
- more output;
- preservation.

But the finished item remains identical.

Otherwise Bank stacking becomes impossible/ambiguous.

---

# 58. RECIPE MASTERY

Every important recipe has:

**Mastery 1–100**

Examples:

- Crude Herbal Extract;
- Power Elixir VI;
- Bounty Tonic IV;
- Antitoxin II;
- Astral Wild Reagent Concentrate.

---

# 59. RECIPE MASTERY MILESTONES

| Recipe Mastery | Permanent Effect |
|---|---|
| 10 | Recipe action time -2% |
| 25 | Material Preservation +3 pp |
| 50 | Extract/Brew Output Chance +4 pp |
| 75 | Recipe Mastery XP +8% |
| 100 | Action Time -4% additional; Preservation +3 pp |

For Extract recipes:

Output Chance affects Extract.

For Brew recipes:

Output Chance affects doses.

---

# 60. SKILL-WIDE ALCHEMY MASTERY

Recommended:

| Completion | Reward |
|---:|---|
| 10% | Extraction/Brew Time -2% |
| 25% | Material Preservation +2 pp; second preset |
| 50% | Worker Alchemy efficiency +5%; Brew Output +3 pp |
| 75% | Catalyst interval +10%; third preset |
| 100% | All action time -4%; Preservation +3 pp; Master Apothecary marker |

---

# 61. ALCHEMY SPECIALIZATIONS

Unlock:

**Alchemy 35**

| Specialization | Focus | Effects | Best For |
|---|---|---|---|
| Distiller | Extraction | Extraction Time -10%; raw Preservation +6 pp; Extract Output +10 pp; Brewing Time +5% | Bulk extracts / rare raw resources |
| Elixirist | Combat Elixirs | Combat Elixir Brew Time -12%; Output +10 pp; Catalyst effect +10%; Tonic Brew Time +5% | Combat supply |
| Apothecary | Tonics / Remedies / utility | Tonic/Remedy Brew Time -12%; Preservation +6 pp; Remedy output +1 every 5 crafts; Combat Elixir Time +5% | Profession buffs / support |

All reversible.

---

# 62. DISTILLER SPECIALIZATION

Focus:

**raw ingredient → Extract**

Best for:

- Foraging/Farming-heavy account;
- expensive high-tier plant supply;
- extract workers.

It does not strengthen finished potion effects.

---

# 63. ELIXIRIST SPECIALIZATION

Focus:

**Combat Elixir supply**

Best for:

- long Combat sessions;
- boss preparation;
- heavy consumable users.

Again:

same item effect.

Only production economics improve.

---

# 64. APOTHECARY SPECIALIZATION

Focus:

- Profession Tonics;
- Remedies;
- support formulas.

Best for:

- profession completion;
- worker economy;
- status-heavy content.

---

# 65. SPECIALIZATION SWITCHING

Rules:

- free;
- outside active craft;
- unfinished action progress lost;
- reserved normal materials returned;
- Catalyst counter preserved;
- presets remember Specialization.

---

# 66. PROFESSION CLOTHING

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Brewer Hood | Brewing Time -4% |
| T3 / L25 | Brewer Coat | Material Preservation +3 pp |
| T3 / L25 | Brewer Trousers | Alchemy Mastery XP +4% |
| T3 / L25 | Brewer Gloves | Brew Output Chance +3 pp |
| T3 / L25 | Brewer Shoes | Extraction Time -3% |
| Set | Brewer 5/5 | Extract Output Chance +3 pp |
| T5 / L45 | Distiller Hood | Extraction Time -6% |
| T5 / L45 | Distiller Coat | Raw Ingredient Preservation +4 pp |
| T5 / L45 | Distiller Leggings | Extract Mastery XP +6% |
| T5 / L45 | Distiller Gloves | Extract Output Chance +5 pp |
| T5 / L45 | Distiller Shoes | Precision Distillation penalty -25% |
| Set | Distiller 5/5 | Cold Infusion bonus output +1 every 4 crafts |
| T7 / L65 | Elixirist Hood | Combat Elixir Brewing Time -6% |
| T7 / L65 | Elixirist Coat | Combat Elixir Preservation +4 pp |
| T7 / L65 | Elixirist Leggings | Combat Elixir Mastery XP +7% |
| T7 / L65 | Elixirist Gloves | Brew Output Chance +5 pp |
| T7 / L65 | Elixirist Shoes | Catalyst interval +10% |
| Set | Elixirist 5/5 | Combat Elixir Output +1 every 5 crafts |
| T9 / L85 | Master Apothecary Hood | Alchemy Power +8% |
| T9 / L85 | Master Apothecary Coat | Material Preservation +5 pp |
| T9 / L85 | Master Apothecary Leggings | Mastery XP +8% |
| T9 / L85 | Master Apothecary Gloves | Brew Output Chance +6 pp |
| T9 / L85 | Master Apothecary Shoes | All Alchemy Time -5% |
| Set | Master Apothecary 5/5 | Action Time -5%; Preservation +3 pp |

---

# 67. CLOTHING IDENTITIES

## Brewer

General early Alchemy.

## Distiller

Extract production.

## Elixirist

Combat supply.

## Master Apothecary

Late hybrid.

---

# 68. PROFESSION JEWELRY

| Alchemy Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Extractor's Ring | Extraction Time -6% | Extract production |
| 25 | Brewmaster Pendant | Brewing Time -6% | Brewing |
| 35 | Conserver's Band | Material Preservation +5 pp | Resource efficiency |
| 45 | Elixirist Charm | Combat Elixir Output Chance +6 pp | Combat supply |
| 55 | Distiller Loop | Precision Distillation Preservation +6 pp | Rare ingredients |
| 65 | Catalyst Seal | Catalyst interval +15% | Catalyst economy |
| 75 | Apothecary Chain | Profession Tonic Output Chance +6 pp | Tonics |
| 85 | Umbral Flask Charm | Astral-grade extraction/brew time -6% | Late alchemy |
| 95 | Astral Alchemist Emblem | Alchemy Power +8%; Output +4 pp | Endgame general |

Jewelry supports:

- Extraction;
- Brewing;
- Preservation;
- Elixirs;
- Distillation;
- Catalysts;
- Tonics.

---

# 69. SAVED LOADOUTS

Recommended:

## Extract Factory

- Distiller;
- Cold Infusion / Precision Distillation.

## Combat Elixir

- Elixirist;
- Output gear;
- Catalyst above reserve.

## Profession Tonic

- Apothecary;
- tonic output gear.

## Rare Ingredient Saver

- Precision Distillation;
- preservation loadout.

## Mastery

- Insight/Mastery gear;
- selected recipe.

---

# 70. APOTHECARY INFRASTRUCTURE

Alchemy works from an early:

**Field Brewing Table**

Property upgrades unlock:

**Apothecary I–V**

| Facility | Property Stage | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|
| Apothecary I | House | 20 | 5 | 2 | 2 recipe presets; exact ingredient/output analytics; storage |
| Apothecary II | Lodge | 40 | 10 | 4 | Catalyst policies; Profession Tonics; first worker |
| Apothecary III | Manor | 60 | 25 | 6 | Auto-consume supply plans; 3 workers; Remedy automation |
| Apothecary IV | Estate | 80 | 50 | 10 | Worker teams; Combat-hour supply targets; Aether production |
| Apothecary V | Holdings / late Estate | 100 | 100 | Expanded | Astral/Quintessence production; 10 workers |

It is infrastructure, not a separate profession.

---

# 71. APOTHECARY PURPOSE

Unlocks:

- larger batches;
- recipe presets;
- Catalyst policies;
- workers;
- auto-consume supply planning;
- Remedies;
- Combat-hour analytics;
- Quintessence.

Not simply flat speed.

---

# 72. WORKERS

Workers can perform:

- Extraction;
- Elixir brewing;
- Tonics;
- Remedies;
- Concentrates;
- selected endgame utility once Proven.

They consume real resources.

---

# 73. PROVEN RECIPE

Worker eligibility:

**Recipe Mastery 10**

Player learns first.

---

# 74. WORKER PROFICIENCY

Base Worker Alchemy Efficiency:

**50% + Proficiency ×0.50%**

Examples:

- 1 → 50.5%;
- 50 → 75%;
- 100 → 100%.

Workers gain Proficiency.

No player XP/Mastery.

---

# 75. FRONTIER RECIPE PENALTY

Highest unlocked grade:

| Recipe Mastery | Worker Multiplier |
|---:|---:|
| 10–24 | 75% |
| 25–49 | 85% |
| 50–74 | 92.5% |
| 75–99 | 97.5% |
| 100 | 100% |

Older grades have no frontier penalty.

---

# 76. WORKER CATALYST RULE

Default:

**Use Catalyst only above configured reserve**

Workers never consume:

- Wild Reagent Concentrate;
- Prismatic Dust;
- Astral Essence

below reserve.

---

# 77. OLD ALCHEMY GEAR TO WORKERS

Old:

- Retort Kits;
- clothing;
- jewelry

move naturally to workers.

---

# 78. AUTO-CONSUME POLICIES

| Policy | Behavior | Use |
|---|---|---|
| Never | Do not consume automatically | Manual only |
| When Active | Consume when matching Combat/profession activity begins | General automation |
| Maintain Buff | Reconsume when duration expires | Long idle sessions |
| Above Reserve | Maintain Buff only while item stock > configured reserve | Protect stock |
| Specific Preset | Only consume with saved Combat/Profession preset | Build-specific use |

Auto-consume is configured independently for:

- Combat Elixir;
- Profession Tonic;
- Remedies.

---

# 79. COMBAT ELIXIR AUTO-CONSUME

Example:

> Maintain Power Elixir VIII while Combat preset "Boss DPS" is active.

If item reaches reserve:

stop consuming.

Combat continues without it unless preset says:

**Pause when Elixir unavailable**

---

# 80. PROFESSION TONIC AUTO-CONSUME

Example:

> Maintain Insight Tonic IV while active profession is in Mastery preset.

If player switches to:

Combat

the Profession Tonic timer still exists but does not need to be auto-refreshed unless policy allows.

---

# 81. REMEDY AUTO-CONSUME

Example:

> Use Antitoxin II when Poison is present, only while Bank >50.

Can also define:

**maximum uses/hour**

to prevent pathological consumption.

---

# 82. OFFLINE CONSUMABLE USE

If auto-consume enabled:

offline simulation consumes Elixirs/Tonics/Remedies exactly as active simulation would.

Offline results show:

- number consumed;
- time buffed;
- time unbuffed due to stock depletion.

This is important for planning.

---

# 83. ACTIVE BUFF TIMER

UI should show:

- active Elixir;
- remaining duration;
- replacement item count;
- estimated hours of supply.

Same for Profession Tonic.

Example:

**Power Elixir VII — 43m remaining — 31 doses — ~31h supply**

---

# 84. ACTIVITY PLANNER — ALCHEMY

Starter:

- craft indefinitely;
- stop at quantity;
- stop at Alchemy Level;
- choose Extraction Method.

House:

- Mastery target;
- 2-step queue.

Lodge:

- 4-step queue;
- Catalyst reserve;
- Extract target.

Manor:

- 6-step chains;
- Auto-consume supply targets;
- Remedy reserve.

Estate:

- 10-step queue;
- worker brewing teams;
- Combat-hours supply policies.

Holdings:

- department-wide consumable reserves;
- Astral / Quintessence policies.

---

# 85. EXTRACTION → ELIXIR CHAIN

Example:

> Maintain 2,000 Potent Herbal Extract  
> → maintain 1,000 Potent Botanical Extract  
> → brew Power Elixir VI until Bank ≥250.

If Extract reserve is low:

workers return to Extraction.

---

# 86. COMBAT-HOUR TARGET

Alchemy planner can target:

**hours of buff supply**

instead of only item count.

Example:

Power Elixir VIII lasts:

75 min.

Target:

**24 Combat hours**

Required:

20 doses.

UI calculates automatically.

---

# 87. PROFESSION-HOUR TARGET

Same for Tonics.

Example:

Insight Tonic IV:

90 min.

Target:

12 hours of Mastery grinding.

Required:

8 doses.

---

# 88. RESOURCE RESERVES

Alchemy respects reserves on:

- raw Herbs;
- Fungi;
- Botanicals;
- Wild Reagents;
- Extracts;
- Prismatic Dust;
- Aether/Astral Essence;
- finished consumables.

No worker should silently drain a cross-profession rare resource.

---

# 89. FORAGING ↔ ALCHEMY

Foraging is the main discovery supplier.

It provides:

- Herbs;
- Fungi;
- Botanicals;
- Wild Reagents.

Wild Reagents remain especially valuable because Farming generally cannot reproduce them.

---

# 90. FARMING ↔ ALCHEMY

Farming is the main scale supplier.

After Domestication:

Farming mass-produces selected:

- Herbs;
- Botanicals;
- Fungi.

This creates the intended loop:

**Foraging discovers → Farming domesticates → Alchemy consumes**

---

# 91. FISHING ↔ ALCHEMY

Fishing contributes selected:

- Aquatic Finds;
- Fish Oil;
- Prismatic materials.

Baseline Alchemy does not require Fish Oil for every potion.

Selected Catalysts / future formulas may consume aquatic materials.

This keeps Fishing relevant without turning Alchemy into another Cooking dependency.

---

# 92. HUNTING ↔ ALCHEMY

Hunting can supply:

- Bone Fragment;
- Fang & Claw Fragment;
- Fur/Sinew for selected utility recipes.

These should be:

**specialty additives**

not required for the entire potion ladder.

---

# 93. RUNECRAFTING ↔ ALCHEMY

Late Alchemy can consume small optional amounts of:

- Aether Essence;
- Astral Essence.

Runecrafting remains primary magical processing.

Alchemy uses them only as:

- Catalysts;
- endgame formula ingredients.

---

# 94. JEWELCRAFTING ↔ ALCHEMY

Upcoming Jewelcrafting can supply:

- Prismatic Dust;
- glass/crystal vessel components if desired;
- focus stones.

Baseline recommendation:

do not create consumable Empty Vial inventory.

Containers are abstracted into Apothecary supplies.

---

# 95. WHY NO EMPTY VIAL ITEM

If every potion requires:

- Empty Vial;
- Cork;
- Water;
- Label;

the player gains inventory chores rather than strategic depth.

The meaningful resources are:

- Herbs;
- Extracts;
- rare reagents;
- Catalysts.

Container cost is abstracted.

---

# 96. ALCHEMY ↔ ESTATE

Estate can consume:

- Tonics;
- Concentrates;
- alchemical reagents

for:

- Apothecary;
- Greenhouse projects;
- worker support;
- Long-Term Projects.

Do not require constant potions as worker wages.

---

# 97. OLD-TIER RELEVANCE

Old ingredients remain useful through:

- low-tier Elixirs;
- cheaper profession Tonics;
- worker supply;
- lower Combat;
- Concentrate recipes;
- Estate projects.

High-tier players may intentionally use cheap lower-grade buffs for trivial content.

---

# 98. WHY LOW-TIER ELIXIRS ARE STILL VALID

A player farming weak content may not need:

Astral Power Elixir.

Using:

Power Elixir III

can be economically smarter.

This creates consumption choice rather than automatic highest-tier burn.

---

# 99. CONSUMABLE PRESET INTEGRATION

Combat presets can remember:

- desired Elixir;
- auto-consume policy;
- reserve;
- fallback grade.

Profession presets can remember:

- desired Tonic;
- auto-consume;
- reserve;
- fallback grade.

This reduces repetitive management.

---

# 100. FALLBACK GRADE

Optional:

> If Power Elixir VIII unavailable, use VII, then VI.

Default:

OFF

to prevent consuming unintended stock.

When enabled:

player explicitly defines fallback order.

---

# 101. REMEDY PRIORITY

If multiple removable statuses exist:

Combat automation can define:

- Poison first;
- control first;
- oldest;
- strongest.

Alchemy only supplies the Remedy items.

Combat owns status priority.

---

# 102. ALCHEMY XP

Extraction:

XP based on:

- raw ingredient Tier;
- method.

Brewing:

XP based on:

- formula Tier;
- complexity.

Relative targets:

| Category | XP Weight |
|---|---:|
| Standard Extraction | 0.80x |
| Cold/Precision Extraction | 1.00–1.15x |
| Combat Elixir | 1.00x |
| Profession Tonic | 1.10x |
| Remedy | 1.20x |
| Wild Concentrate | 1.25x |
| Endgame utility | 1.40x |

Exact numeric XP follows global 1–100 balancing.

---

# 103. MASTERY XP

Recommended:

**Recipe Mastery XP = Alchemy XP ×0.40**

then apply:

- Extraction Method;
- gear;
- Specialization;
- Skill-Wide bonuses.

---

# 104. BREW TIME FORMULA

**Final Brew Time = Base Tier Time × gear × Mastery × Specialization × Apothecary × Catalyst modifiers**

Minimum:

**40% of base**

---

# 105. EXTRACTION TIME FORMULA

**Final Extraction Time = Base Source Time × Method × gear × Mastery × Specialization × Apothecary**

Recommended raw extraction base:

T1:

2.8s

then:

+0.2s per Tier

to T10:

4.6s.

Minimum:

40% of base.

---

# 106. OUTPUT FORMULA — EXTRACTS

1. Create base output from source Tier.
2. Apply Cold Infusion guaranteed +1 if used.
3. Roll Extract Output Chance.
4. Apply allowed recipe-specific bonuses.

No quality roll.

---

# 107. OUTPUT FORMULA — BREWS

1. Create Base 2 doses.
2. Roll Brew Output Chance.
3. Success:
   +1 dose.
4. Apply explicit set/specialization guaranteed-output effects if triggered.

No chain output rolls.

---

# 108. BATCHING

Extraction/Brewing supports batches.

Recommended:

| Batch | Time Mult./Craft |
|---:|---:|
| 1 | 1.00x |
| 5 | 0.97x |
| 10 | 0.94x |
| 25 | 0.91x |
| 50 | 0.89x |
| 100 | 0.87x |

Remedies can use smaller batch caps if necessary.

---

# 109. APOTHECARY SCREEN — MAIN TABS

Recommended:

- Extracts;
- Combat Elixirs;
- Profession Tonics;
- Remedies;
- Concentrates;
- Utility.

Do not put 80+ formulas in one giant unfiltered list.

---

# 110. EXTRACT SCREEN

Filters:

- Herbal;
- Fungal;
- Botanical;
- Grade.

Card shows:

- raw ingredient;
- source Tier;
- method;
- output;
- time;
- preservation;
- output chance;
- Bank stock.

---

# 111. FORMULA CARD

Show:

- consumable;
- Tier/Grade;
- fixed effect;
- fixed duration;
- Extract inputs;
- Catalyst policy;
- Mastery;
- worker eligibility;
- expected doses/hour.

The fixed effect must be visible without tooltip.

---

# 112. ACTIVE BREW PANEL

Show:

- formula;
- Batch;
- current Brew Time/progress;
- output chance;
- preservation;
- Catalyst charge;
- output/hour;
- current Bank target.

---

# 113. BUFF SUPPLY PANEL

Shows:

- active Elixir;
- active Tonic;
- remaining duration;
- current item stock;
- hours of supply;
- fallback;
- reserve;
- auto-consume.

This can live in:

- Alchemy;
- Combat;
- Profession loadout summary.

---

# 114. ANALYTICS

Alchemy analytics should show:

- raw ingredients/hour;
- Extract/hour;
- doses/hour;
- material preservation/hour;
- Catalyst consumption/hour;
- XP/hour;
- Mastery/hour;
- Combat-hours of Elixir supply;
- profession-hours of Tonic supply;
- time until reserve reached.

Workers separately.

---

# 115. COMPLETE SOURCE / EXTRACT CONTRACT

| Tier | Herb Source | Fungi Source | Botanical Source | Wild Reagent | Extract Grade | Extract / 2 Raw |
|---|---|---|---|---|---|---|
| T1 | Wild Mint | Buttoncap | Sunberry | Golden Yarrow | Crude | 3 |
| T2 | Marsh Sage | Reedcap | Bogberry | Glowroot | Crude | 4 |
| T3 | Mossleaf | Amber Morel | Briarberry | Silverleaf | Refined | 3 |
| T4 | Moon Thyme | Pale Chanterelle | Moonseed | Dreamcap | Refined | 4 |
| T5 | Cinderleaf | Ash Morel | Emberberry | Phoenix Root | Potent | 3 |
| T6 | Frostmint | Icecap | Winterberry | Crystal Bloom | Potent | 4 |
| T7 | Stormsage | Thunder Truffle | Tempest Seedpod | Fulmin Root | Aetheric | 3 |
| T8 | Aetherleaf | Prismcap | Aetherberry | Lumen Orchid | Aetheric | 4 |
| T9 | Shadeleaf | Gloom Morel | Duskberry | Voidblossom | Astral | 3 |
| T10 | Starleaf | Cometcap | Starseed Pod | Celestial Lotus | Astral | 4 |

---

# 116. COMPLETE EXTRACT GRADES

| Grade | Tiers | Herbal | Fungal | Botanical |
|---|---|---|---|---|
| Crude | T1–T2 | Crude Herbal Extract | Crude Fungal Extract | Crude Botanical Extract |
| Refined | T3–T4 | Refined Herbal Extract | Refined Fungal Extract | Refined Botanical Extract |
| Potent | T5–T6 | Potent Herbal Extract | Potent Fungal Extract | Potent Botanical Extract |
| Aetheric | T7–T8 | Aetheric Herbal Extract | Aetheric Fungal Extract | Aetheric Botanical Extract |
| Astral | T9–T10 | Astral Herbal Extract | Astral Fungal Extract | Astral Botanical Extract |

---

# 117. COMPLETE EXTRACTION METHODS

| Method | Unlock | Time | Output | XP/Mastery | Identity |
|---|---|---|---|---|---|
| Standard Extraction | 1 | 1.00x | 1.00x | 1.00x | Balanced baseline |
| Rapid Decoction | 15 | 0.75x | 1.00x | 0.85x | Fast extraction; lower XP/Mastery |
| Cold Infusion | 35 | 1.20x | +1 Extract | 1.10x | Maximum raw-resource conversion |
| Precision Distillation | 55 | 1.15x | 1.00x | 1.15x | +15 pp raw-material Preservation |

---

# 118. COMPLETE COMBAT ELIXIRS

| Tier | Suggested Lvl | Consumable | Extract Grade | Base Formula | Fixed Effect Target | Duration |
|---|---|---|---|---|---|---|
| T1 | 1 | Power Elixir 1 | Crude | 2 Herbal + 1 Botanical | 2% | 20 min |
| T2 | 11 | Power Elixir 2 | Crude | 2 Herbal + 1 Botanical | 3% | 25 min |
| T3 | 21 | Power Elixir 3 | Refined | 2 Herbal + 1 Botanical | 4% | 30 min |
| T4 | 31 | Power Elixir 4 | Refined | 2 Herbal + 1 Botanical | 5% | 35 min |
| T5 | 41 | Power Elixir 5 | Potent | 2 Herbal + 1 Botanical | 6% | 40 min |
| T6 | 51 | Power Elixir 6 | Potent | 2 Herbal + 1 Botanical | 7% | 50 min |
| T7 | 61 | Power Elixir 7 | Aetheric | 2 Herbal + 1 Botanical | 8% | 60 min |
| T8 | 71 | Power Elixir 8 | Aetheric | 2 Herbal + 1 Botanical | 9% | 75 min |
| T9 | 81 | Power Elixir 9 | Astral | 2 Herbal + 1 Botanical | 10% | 90 min |
| T10 | 91 | Power Elixir 10 | Astral | 2 Herbal + 1 Botanical | 12% | 120 min |
| T1 | 1 | Precision Elixir 1 | Crude | 2 Botanical + 1 Herbal | +3% Accuracy, +0.5 pp Crit | 20 min |
| T2 | 11 | Precision Elixir 2 | Crude | 2 Botanical + 1 Herbal | +4%, +0.75 pp | 25 min |
| T3 | 21 | Precision Elixir 3 | Refined | 2 Botanical + 1 Herbal | +5%, +1.0 pp | 30 min |
| T4 | 31 | Precision Elixir 4 | Refined | 2 Botanical + 1 Herbal | +6%, +1.25 pp | 35 min |
| T5 | 41 | Precision Elixir 5 | Potent | 2 Botanical + 1 Herbal | +7%, +1.5 pp | 40 min |
| T6 | 51 | Precision Elixir 6 | Potent | 2 Botanical + 1 Herbal | +8%, +1.75 pp | 50 min |
| T7 | 61 | Precision Elixir 7 | Aetheric | 2 Botanical + 1 Herbal | +9%, +2.0 pp | 60 min |
| T8 | 71 | Precision Elixir 8 | Aetheric | 2 Botanical + 1 Herbal | +10%, +2.25 pp | 75 min |
| T9 | 81 | Precision Elixir 9 | Astral | 2 Botanical + 1 Herbal | +11%, +2.5 pp | 90 min |
| T10 | 91 | Precision Elixir 10 | Astral | 2 Botanical + 1 Herbal | +12%, +3.0 pp Crit | 120 min |
| T1 | 1 | Fortitude Elixir 1 | Crude | 2 Fungal + 1 Herbal | 4% | 20 min |
| T2 | 11 | Fortitude Elixir 2 | Crude | 2 Fungal + 1 Herbal | 5% | 25 min |
| T3 | 21 | Fortitude Elixir 3 | Refined | 2 Fungal + 1 Herbal | 6.5% | 30 min |
| T4 | 31 | Fortitude Elixir 4 | Refined | 2 Fungal + 1 Herbal | 8% | 35 min |
| T5 | 41 | Fortitude Elixir 5 | Potent | 2 Fungal + 1 Herbal | 9.5% | 40 min |
| T6 | 51 | Fortitude Elixir 6 | Potent | 2 Fungal + 1 Herbal | 11% | 50 min |
| T7 | 61 | Fortitude Elixir 7 | Aetheric | 2 Fungal + 1 Herbal | 12.5% | 60 min |
| T8 | 71 | Fortitude Elixir 8 | Aetheric | 2 Fungal + 1 Herbal | 14% | 75 min |
| T9 | 81 | Fortitude Elixir 9 | Astral | 2 Fungal + 1 Herbal | 16% | 90 min |
| T10 | 91 | Fortitude Elixir 10 | Astral | 2 Fungal + 1 Herbal | 18% | 120 min |
| T1 | 1 | Celerity Elixir 1 | Crude | 2 Botanical + 1 Fungal | -2% | 20 min |
| T2 | 11 | Celerity Elixir 2 | Crude | 2 Botanical + 1 Fungal | -2.5% | 25 min |
| T3 | 21 | Celerity Elixir 3 | Refined | 2 Botanical + 1 Fungal | -3% | 30 min |
| T4 | 31 | Celerity Elixir 4 | Refined | 2 Botanical + 1 Fungal | -3.5% | 35 min |
| T5 | 41 | Celerity Elixir 5 | Potent | 2 Botanical + 1 Fungal | -4% | 40 min |
| T6 | 51 | Celerity Elixir 6 | Potent | 2 Botanical + 1 Fungal | -4.5% | 50 min |
| T7 | 61 | Celerity Elixir 7 | Aetheric | 2 Botanical + 1 Fungal | -5% | 60 min |
| T8 | 71 | Celerity Elixir 8 | Aetheric | 2 Botanical + 1 Fungal | -5.5% | 75 min |
| T9 | 81 | Celerity Elixir 9 | Astral | 2 Botanical + 1 Fungal | -6% | 90 min |
| T10 | 91 | Celerity Elixir 10 | Astral | 2 Botanical + 1 Fungal | -7% | 120 min |
| T1 | 1 | Warding Elixir 1 | Crude | 1 Herbal + 1 Fungal + 1 Botanical | 5% | 20 min |
| T2 | 11 | Warding Elixir 2 | Crude | 1 Herbal + 1 Fungal + 1 Botanical | 7% | 25 min |
| T3 | 21 | Warding Elixir 3 | Refined | 1 Herbal + 1 Fungal + 1 Botanical | 9% | 30 min |
| T4 | 31 | Warding Elixir 4 | Refined | 1 Herbal + 1 Fungal + 1 Botanical | 11% | 35 min |
| T5 | 41 | Warding Elixir 5 | Potent | 1 Herbal + 1 Fungal + 1 Botanical | 13% | 40 min |
| T6 | 51 | Warding Elixir 6 | Potent | 1 Herbal + 1 Fungal + 1 Botanical | 15% | 50 min |
| T7 | 61 | Warding Elixir 7 | Aetheric | 1 Herbal + 1 Fungal + 1 Botanical | 17% | 60 min |
| T8 | 71 | Warding Elixir 8 | Aetheric | 1 Herbal + 1 Fungal + 1 Botanical | 19% | 75 min |
| T9 | 81 | Warding Elixir 9 | Astral | 1 Herbal + 1 Fungal + 1 Botanical | 22% | 90 min |
| T10 | 91 | Warding Elixir 10 | Astral | 1 Herbal + 1 Fungal + 1 Botanical | 25% | 120 min |

---

# 119. COMPLETE PROFESSION TONICS

| Lvl | Tonic | Extract Grade | Formula | Fixed Effect | Duration | Affects |
|---|---|---|---|---|---|---|
| 10 | Bounty Tonic I | Crude | 2 Botanical + 1 Herbal | +5% | 30 min | Normal non-rare profession output |
| 30 | Bounty Tonic II | Refined | 2 Botanical + 1 Herbal | +8% | 45 min | Normal non-rare profession output |
| 50 | Bounty Tonic III | Potent | 2 Botanical + 1 Herbal | +11% | 60 min | Normal non-rare profession output |
| 70 | Bounty Tonic IV | Aetheric | 2 Botanical + 1 Herbal | +14% | 90 min | Normal non-rare profession output |
| 90 | Bounty Tonic V | Astral | 2 Botanical + 1 Herbal | +18% | 120 min | Normal non-rare profession output |
| 10 | Conservation Tonic I | Crude | 2 Fungal + 1 Herbal | +5 pp | 30 min | Material Preservation |
| 30 | Conservation Tonic II | Refined | 2 Fungal + 1 Herbal | +8 pp | 45 min | Material Preservation |
| 50 | Conservation Tonic III | Potent | 2 Fungal + 1 Herbal | +11 pp | 60 min | Material Preservation |
| 70 | Conservation Tonic IV | Aetheric | 2 Fungal + 1 Herbal | +14 pp | 90 min | Material Preservation |
| 90 | Conservation Tonic V | Astral | 2 Fungal + 1 Herbal | +18 pp | 120 min | Material Preservation |
| 10 | Insight Tonic I | Crude | 1 Herbal + 1 Fungal + 1 Botanical | +10% | 30 min | Mastery XP |
| 30 | Insight Tonic II | Refined | 1 Herbal + 1 Fungal + 1 Botanical | +15% | 45 min | Mastery XP |
| 50 | Insight Tonic III | Potent | 1 Herbal + 1 Fungal + 1 Botanical | +20% | 60 min | Mastery XP |
| 70 | Insight Tonic IV | Aetheric | 1 Herbal + 1 Fungal + 1 Botanical | +25% | 90 min | Mastery XP |
| 90 | Insight Tonic V | Astral | 1 Herbal + 1 Fungal + 1 Botanical | +30% | 120 min | Mastery XP |
| 10 | Survey Tonic I | Crude | 2 Botanical + 1 Fungal | +10% | 30 min | Rare / by-product / Discovery chance |
| 30 | Survey Tonic II | Refined | 2 Botanical + 1 Fungal | +15% | 45 min | Rare / by-product / Discovery chance |
| 50 | Survey Tonic III | Potent | 2 Botanical + 1 Fungal | +20% | 60 min | Rare / by-product / Discovery chance |
| 70 | Survey Tonic IV | Aetheric | 2 Botanical + 1 Fungal | +25% | 90 min | Rare / by-product / Discovery chance |
| 90 | Survey Tonic V | Astral | 2 Botanical + 1 Fungal | +30% | 120 min | Rare / by-product / Discovery chance |

---

# 120. COMPLETE REMEDIES

| Lvl | Remedy | Inputs | Effect | Role |
|---|---|---|---|---|
| 20 | Antitoxin I | Crude Herbal + Crude Fungal | Removes Poison/Toxin; 30s toxin resistance | Reactive consumable |
| 55 | Antitoxin II | Potent Herbal + Potent Fungal | Removes Poison/Toxin; 60s toxin resistance | Reactive consumable |
| 90 | Antitoxin III | Astral Herbal + Astral Fungal | Removes Poison/Toxin; 120s toxin resistance | Reactive consumable |
| 40 | Purifying Draught I | Refined Herbal + Refined Botanical + 1 Wild Reagent Concentrate | Removes 1 removable non-boss debuff | Reactive consumable |
| 70 | Purifying Draught II | Aetheric Herbal + Aetheric Botanical + 1 Wild Reagent Concentrate | Removes 1 removable non-boss debuff; 20s cleanse lockout protection | Reactive consumable |
| 100 | Purifying Draught III | Astral Herbal + Astral Botanical + 1 Astral Wild Reagent Concentrate | Removes 1 removable non-boss debuff; 45s cleanse lockout protection | Reactive consumable |

---

# 121. COMPLETE CATALYST BASELINE

| Unlock | Catalyst Policy | Consumption | Effect | Purpose |
|---|---|---|---|---|
| 25 | Wild Reagent Concentrate | 1 per 10 brews | Brew Output Chance +15 pp; Mastery XP +5% | Rare Foraging sink |
| 45 | Prismatic Catalyst | 1 Prismatic Dust per 12 brews | Brew Output +20 pp; Material Preservation +5 pp | Fishing/Jewelcrafting bridge |
| 65 | Aether Catalyst | 1 Aether Essence per 15 brews | Brew Time -8%; Output +20 pp | Mining/Runecrafting bridge |
| 95 | Astral Catalyst | 1 Astral Essence per 20 brews | Brew Time -10%; Output +25 pp; Mastery +10% | Endgame |

---

# 122. COMPLETE TOOL PROGRESSION

| Tier | Tool | Lvl | Alchemy Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Apothecary Kit | 1 | 5 | 2.15s | Starter | No bonus |
| T1 | Copper Mortar & Retort | 5 | 7 | 2.09s | Smithing + Tailoring | Extraction Time -2% |
| T2 | Iron Apothecary Kit | 15 | 10 | 2.03s | Smithing + Tailoring | Raw Material Preservation +2 pp |
| T3 | Cobalt Retort Set | 25 | 14 | 1.97s | Smithing + Jewelcrafting | Brew Output Chance +3 pp |
| T4 | Argent Alembic Kit | 35 | 19 | 1.91s | Smithing + Jewelcrafting | Brewing Time -4% |
| T5 | Emberglass Retort | 45 | 25 | 1.85s | Jewelcrafting + Smithing | Extract Output Chance +4 pp |
| T6 | Frostsilver Distillation Set | 55 | 32 | 1.79s | Smithing + Jewelcrafting | Infusion Work -6% |
| T7 | Stormglass Alchemy Kit | 65 | 40 | 1.73s | Jewelcrafting + Runecrafting | Catalyst interval +10% |
| T8 | Aetherglass Retort | 75 | 49 | 1.67s | Jewelcrafting + Runecrafting | Brew Output Chance +5 pp |
| T9 | Umbral Alembic Set | 85 | 59 | 1.61s | Jewelcrafting + Runecrafting | Rare reagent Preservation +5 pp |
| T10 | Astral Grand Retort | 95 | 70 | 1.55s | Multi-profession | Alchemy Power +8%; Brew Time -5% |

---

# 123. COMPLETE CLOTHING PROGRESSION

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Brewer Hood | Brewing Time -4% |
| T3 / L25 | Brewer Coat | Material Preservation +3 pp |
| T3 / L25 | Brewer Trousers | Alchemy Mastery XP +4% |
| T3 / L25 | Brewer Gloves | Brew Output Chance +3 pp |
| T3 / L25 | Brewer Shoes | Extraction Time -3% |
| Set | Brewer 5/5 | Extract Output Chance +3 pp |
| T5 / L45 | Distiller Hood | Extraction Time -6% |
| T5 / L45 | Distiller Coat | Raw Ingredient Preservation +4 pp |
| T5 / L45 | Distiller Leggings | Extract Mastery XP +6% |
| T5 / L45 | Distiller Gloves | Extract Output Chance +5 pp |
| T5 / L45 | Distiller Shoes | Precision Distillation penalty -25% |
| Set | Distiller 5/5 | Cold Infusion bonus output +1 every 4 crafts |
| T7 / L65 | Elixirist Hood | Combat Elixir Brewing Time -6% |
| T7 / L65 | Elixirist Coat | Combat Elixir Preservation +4 pp |
| T7 / L65 | Elixirist Leggings | Combat Elixir Mastery XP +7% |
| T7 / L65 | Elixirist Gloves | Brew Output Chance +5 pp |
| T7 / L65 | Elixirist Shoes | Catalyst interval +10% |
| Set | Elixirist 5/5 | Combat Elixir Output +1 every 5 crafts |
| T9 / L85 | Master Apothecary Hood | Alchemy Power +8% |
| T9 / L85 | Master Apothecary Coat | Material Preservation +5 pp |
| T9 / L85 | Master Apothecary Leggings | Mastery XP +8% |
| T9 / L85 | Master Apothecary Gloves | Brew Output Chance +6 pp |
| T9 / L85 | Master Apothecary Shoes | All Alchemy Time -5% |
| Set | Master Apothecary 5/5 | Action Time -5%; Preservation +3 pp |

---

# 124. COMPLETE JEWELRY PROGRESSION

| Alchemy Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Extractor's Ring | Extraction Time -6% | Extract production |
| 25 | Brewmaster Pendant | Brewing Time -6% | Brewing |
| 35 | Conserver's Band | Material Preservation +5 pp | Resource efficiency |
| 45 | Elixirist Charm | Combat Elixir Output Chance +6 pp | Combat supply |
| 55 | Distiller Loop | Precision Distillation Preservation +6 pp | Rare ingredients |
| 65 | Catalyst Seal | Catalyst interval +15% | Catalyst economy |
| 75 | Apothecary Chain | Profession Tonic Output Chance +6 pp | Tonics |
| 85 | Umbral Flask Charm | Astral-grade extraction/brew time -6% | Late alchemy |
| 95 | Astral Alchemist Emblem | Alchemy Power +8%; Output +4 pp | Endgame general |

---

# 125. COMPLETE SPECIALIZATION BASELINE

| Specialization | Focus | Effects | Best For |
|---|---|---|---|
| Distiller | Extraction | Extraction Time -10%; raw Preservation +6 pp; Extract Output +10 pp; Brewing Time +5% | Bulk extracts / rare raw resources |
| Elixirist | Combat Elixirs | Combat Elixir Brew Time -12%; Output +10 pp; Catalyst effect +10%; Tonic Brew Time +5% | Combat supply |
| Apothecary | Tonics / Remedies / utility | Tonic/Remedy Brew Time -12%; Preservation +6 pp; Remedy output +1 every 5 crafts; Combat Elixir Time +5% | Profession buffs / support |

---

# 126. COMPLETE APOTHECARY PROGRESSION

| Facility | Property Stage | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|
| Apothecary I | House | 20 | 5 | 2 | 2 recipe presets; exact ingredient/output analytics; storage |
| Apothecary II | Lodge | 40 | 10 | 4 | Catalyst policies; Profession Tonics; first worker |
| Apothecary III | Manor | 60 | 25 | 6 | Auto-consume supply plans; 3 workers; Remedy automation |
| Apothecary IV | Estate | 80 | 50 | 10 | Worker teams; Combat-hour supply targets; Aether production |
| Apothecary V | Holdings / late Estate | 100 | 100 | Expanded | Astral/Quintessence production; 10 workers |

---

# 127. COMPLETE LEVEL ROADMAP

| Alchemy Lvl | Major Unlock |
|---|---|
| 1 | Crude Extracts; Power Elixir I; Standard Extraction; Worn Apothecary Kit |
| 3 | Precision Elixir I |
| 5 | Copper Mortar & Retort; Fortitude Elixir I |
| 7 | Celerity Elixir I |
| 9 | Warding Elixir I |
| 10 | Profession Tonic Grade I |
| 15 | Iron Apothecary Kit; Rapid Decoction; Extractor's Ring |
| 20 | Antitoxin I; Apothecary I |
| 21 | Refined Extract recipes |
| 25 | Cobalt Retort Set; Brewer set; Wild Reagent Concentrate Catalyst |
| 30 | Profession Tonic Grade II |
| 35 | Argent Alembic Kit; Cold Infusion; Alchemy Specializations; Brewmaster Pendant |
| 40 | Purifying Draught I; Apothecary II |
| 41 | Potent Extract recipes |
| 45 | Emberglass Retort; Distiller set; Prismatic Catalyst; Elixirist Charm |
| 50 | Profession Tonic Grade III |
| 55 | Frostsilver Distillation Set; Precision Distillation; Antitoxin II; Distiller Loop |
| 60 | Apothecary III |
| 61 | Aetheric Extract recipes |
| 65 | Stormglass Alchemy Kit; Elixirist set; Aether Catalyst; Catalyst Seal |
| 70 | Profession Tonic Grade IV; Purifying Draught II |
| 75 | Aetherglass Retort; Apothecary Chain |
| 80 | Apothecary IV |
| 81 | Astral Extract recipes |
| 85 | Umbral Alembic Set; Master Apothecary set; Umbral Flask Charm |
| 90 | Profession Tonic Grade V; Antitoxin III |
| 95 | Astral Grand Retort; Astral Catalyst; Astral Alchemist Emblem |
| 100 | Alchemy cap; Purifying Draught III; Apothecary V; Quintessence path |

---

# 128. CHRONICLES — EARLY ALCHEMY

Suggested:

1. gather Wild Mint / Buttoncap / Sunberry.
2. create first Crude Extract.
3. explain Extract categories.
4. brew Power Elixir I.
5. activate Combat Elixir.
6. brew first Profession Tonic.
7. explain one-Elixir/one-Tonic slot.
8. reach first Recipe Mastery 10.

---

# 129. CHRONICLES — MIDGAME

Suggested:

- unlock Rapid Decoction;
- create first Wild Reagent Concentrate;
- use a Catalyst;
- choose Alchemy Specialization;
- unlock Cold Infusion;
- build Apothecary II;
- assign first worker;
- maintain a Combat Elixir reserve;
- use Antitoxin.

---

# 130. CHRONICLES — LATE

Suggested:

- use Precision Distillation on high-tier ingredient;
- brew Aetheric Elixir;
- maintain 24h Combat Elixir supply;
- maintain Insight/Survey Tonic supply;
- use Aether/Astral Catalyst;
- brew Astral Elixir;
- reach Alchemy 100;
- complete Master Apothecary.

---

# 131. MASTER APOTHECARY

Recommended requirements:

- Alchemy 100;
- Apothecary V;
- Astral Grand Retort;
- craft all 5 Combat Elixir X recipes;
- at least 5 Alchemy recipes Mastery 100;
- one Profession Tonic V Mastery 50;
- Astral Wild Reagent Concentrate Mastery 50;
- complete at least one 24-hour automated buff-supply target.

Reward:

- fourth Alchemy preset;
- Master Apothecary marker;
- Quintessence path.

---

# 132. POST-100 ENDGAME — QUINTESSENCE

Alchemy's endgame should not simply be:

**World Potion XI**

Recommended unique endgame material:

**Quintessence**

Quintessence is a highly condensed multi-system reagent.

---

# 133. QUINTESSENCE INPUT FAMILIES

| Input Family | Source | Role |
|---|---|---|
| Wildheart Essence | Foraging | Wild endgame catalyst |
| Genesis Fruit or Worldgarden crop | Farming | Cultivated endgame life reagent |
| Astral Essence | Runecrafting | Magical carrier |
| Astral Herbal/Fungal/Botanical Extracts | Alchemy supply | Refined alchemical body |

Exact quantities should be locked only after Jewelcrafting and final endgame project economy exist.

---

# 134. QUINTESSENCE PURPOSE

Quintessence can feed:

- limited Grand Elixirs;
- endgame profession gear;
- Holdings projects;
- World Matrix / special magical equipment;
- permanent account projects.

It should **not** be consumed every normal Combat minute.

---

# 135. GRAND ELIXIRS

Post-100 optional recipes can use Quintessence for:

- very long duration;
- specialized endgame encounters.

Recommended rule:

still only occupy:

**Combat Elixir Slot**

They do not stack with normal Power/Precision/etc.

This prevents endgame consumable layering from exploding.

---

# 136. QUINTESSENCE WORKERS

Workers should not produce Quintessence immediately.

Recommended unlock:

- player crafts 10 manually;
- Quintessence Mastery 25;
- Apothecary V.

Even then:

worker efficiency/frontier penalties apply.

---

# 137. DEVTOOLS

Alchemy DevTools should support:

- set Alchemy Level;
- set Recipe Mastery;
- set Skill-Wide Mastery;
- spawn raw Foraging/Farming ingredients;
- spawn Extracts;
- spawn Wild Reagent Concentrates;
- spawn Elixirs/Tonics/Remedies;
- spawn Catalysts;
- set Extraction Method;
- set Catalyst policy/counter;
- set active Combat Elixir/Tonic;
- set buff remaining time;
- set auto-consume policy;
- spawn Tool/gear;
- set Specialization;
- set Apothecary Tier;
- mark recipe Proven;
- spawn worker;
- set worker Proficiency;
- instant complete;
- simulate 1m / 1h / 8h / 24h / 7d;
- compare expected vs actual supply consumption.

---

# 138. DATA MODEL — FORMULA

Formula:

- ID;
- category;
- Tier/Grade;
- level;
- Extract inputs;
- optional special inputs;
- Base Output;
- fixed effect;
- fixed duration;
- Base Brew Time;
- XP;
- Mastery ID;
- Catalyst eligibility.

---

# 139. DATA MODEL — ACTIVE BUFF

Combat Elixir State:

- item ID;
- remaining duration;
- auto-consume policy;
- reserve;
- fallback list;
- preset binding.

Profession Tonic State:

same structure.

Remedy policy:

- trigger;
- reserve;
- max uses/hour.

---

# 140. DATA MODEL — EXTRACTION

Extraction Recipe:

- source item;
- category;
- Extract grade;
- base output;
- base time;
- Tier;
- XP;
- Mastery ID.

Method:

- time modifier;
- output modifier;
- preservation;
- XP/Mastery modifier.

---

# 141. ANTI-BLOAT RULES

Avoid:

- random Potion quality;
- separate weak/strong roll of same recipe;
- Empty Vial inventory;
- water-bucket micromanagement;
- 14 profession-specific tonic families;
- 10 different healing potions;
- 8 simultaneous long-duration buff slots;
- one Extract item per raw herb species;
- destructive brew failure;
- potion durability/charges as another item-quality layer.

Prefer:

- standardized Extract grades;
- 5 Combat Elixir families;
- 4 broad Profession Tonics;
- 2 Remedy families;
- optional Catalysts;
- fixed effect/duration per item.

---

# 142. MAJOR OPEN QUESTIONS — RECOMMENDED ANSWERS

## Should Alchemy own combat buffs?

**Yes.**

This is its primary gameplay identity.

---

## Should Cooking also give large stat buffs?

**No baseline.**

Cooking remains healing/provisions.

Alchemy owns temporary buff optimization.

---

## Should Alchemy have Healing Potions?

**No normal ladder.**

Protect Cooking's role.

---

## Should multiple Combat Elixirs stack?

**No. One slot.**

---

## Should Combat Elixir and Profession Tonic stack?

**Yes.**

They serve different activities.

---

## Should multiple Profession Tonics stack?

**No. One slot.**

---

## Should Remedies occupy a long-duration slot?

**No.**

Reactive only.

---

## Should potion strength depend on crafter gear/Mastery?

**No.**

Finished item effect must be fixed.

---

## Why?

Otherwise identical item names would have different hidden stats and could not stack cleanly.

---

## Should better Alchemy gear still matter?

**Yes.**

It changes:
- speed;
- output;
- preservation;
- Catalyst efficiency;
- Mastery.

---

## Should every Herb have its own Extract?

**No.**

Use category + grade.

---

## Should Farming-grown Moon Thyme produce a different Extract than wild Moon Thyme?

**No.**

Same item, same extraction.

---

## Should Wild Reagents matter?

**Yes.**

They create Concentrates/advanced formulas and remain an important Foraging-exclusive sink.

---

## Should Wild Reagent conversion be preservable?

**No baseline.**

Keep rare wild materials valuable.

---

## Should Catalysts be mandatory?

**No.**

Optimization only.

---

## Should Catalysts improve potion effect?

**No.**

Production only.

---

## Should Alchemy use Prismatic Dust?

**Yes as optional Catalyst.**

This creates Jewelcrafting/Fishing integration.

---

## Should Alchemy consume Runecrafting Essence?

**Small optional late-game amounts only.**

Runecrafting remains the main Essence economy.

---

## Should Alchemy use random brewing failure?

**No.**

---

## Should Alchemy have a minigame?

**No.**

Idle-first.

---

## Should there be empty bottles/vials?

**No baseline.**

Abstract containers.

---

## Should low-tier potions become useless?

**No.**

They remain cheap buff options for easy content.

---

## Should higher-tier Elixir automatically overwrite lower?

Only according to player preset/auto-replace policy.

---

## Should workers maintain potion reserves?

**Yes.**

This is a major late-game worker role.

---

## When can workers brew a recipe?

**Recipe Mastery 10.**

---

## Do workers give player XP/Mastery?

**No.**

---

## Should workers consume rare Catalysts automatically?

**Only above reserve.**

---

## Should offline Combat consume Elixirs?

**Yes if auto-consume is enabled.**

---

## Should UI show hours of supply?

**Yes. Essential.**

---

## Should Alchemy have its own Estate facility?

**Yes: Apothecary.**

---

## Should Alchemy end at Level 100?

**No.**

Post-100:
- Mastery;
- Astral supply;
- worker automation;
- Quintessence;
- Grand Elixirs;
- endgame projects.

---

# 143. COMPLETE LOCKED ALCHEMY BASELINE

1. Alchemy owns temporary combat/profession consumable buffs.
2. Cooking remains primary HP healing/sustain.
3. No normal Healing Potion ladder.
4. One active Combat Elixir.
5. One active Profession Tonic.
6. Remedies are reactive and slotless.
7. Finished consumable effect/duration is fixed by recipe.
8. Crafting modifiers never alter finished-item strength.
9. Raw ingredients come mainly from Foraging/Farming.
10. Three Extract categories:
    - Herbal;
    - Fungal;
    - Botanical.
11. Five Extract grades:
    - Crude;
    - Refined;
    - Potent;
    - Aetheric;
    - Astral.
12. Extraction Methods:
    - Standard;
    - Rapid Decoction;
    - Cold Infusion;
    - Precision Distillation.
13. Five Combat Elixir families:
    - Power;
    - Precision;
    - Fortitude;
    - Celerity;
    - Warding.
14. Ten Combat Elixir tiers.
15. Four Profession Tonic families:
    - Bounty;
    - Conservation;
    - Insight;
    - Survey.
16. Five Profession Tonic grades.
17. Remedies:
    - Antitoxin;
    - Purifying Draught.
18. Wild Reagents convert into Concentrates.
19. Optional Catalysts improve production, never effect power.
20. No brew failure.
21. No Empty Vial item requirement.
22. Brew Output Chance adds +1 dose.
23. Material Preservation cap 50%.
24. Apothecary/Retort Kit is primary Tool.
25. No durability.
26. Recipe Mastery 1–100.
27. Skill-Wide Mastery.
28. Three reversible Specializations:
    - Distiller;
    - Elixirist;
    - Apothecary.
29. Apothecary I–V is property infrastructure.
30. Workers consume real ingredients.
31. Recipe Mastery 10 makes recipes Proven.
32. Workers gain Proficiency, not player XP/Mastery.
33. Auto-consume supports Elixir/Tonic/Remedy reserves.
34. Offline simulation consumes buffs if configured.
35. UI shows hours of consumable supply.
36. Planner supports Extract → Brew → reserve chains.
37. Foraging discovers ingredients.
38. Farming scales normal ingredient supply.
39. Wild Reagents remain important Foraging-only resources.
40. Post-100 endgame uses Quintessence rather than generic Potion XI.
41. All baseline Alchemy content lives in this single MD.

---

# 144. FINAL SUMMARY

Alchemy begins with:

**Wild Mint / Buttoncap / Sunberry**

↓

**Crude Extracts**

↓

**Power / Precision / Fortitude / Celerity / Warding Elixirs**

↓

**Profession Tonics**

↓

**Foraging Wild Reagent Concentrates**

↓

**Extraction Methods**

↓

**Alchemy Specialization**

↓

**Apothecary**

↓

**worker Elixir/Tonic reserves**

↓

**Aetheric / Astral Extracts**

↓

**120-minute endgame consumables**

↓

**Alchemy 100**

↓

**Quintessence**

The key relationship is:

**Foraging discovers**

↓

**Farming domesticates and scales**

↓

**Alchemy extracts and brews**

The player decides:

- which ingredient supply matters;
- whether to prioritize output or preservation;
- which one Combat Elixir fits the current fight;
- which one Profession Tonic fits the current progression goal;
- how many hours of supply workers should maintain.

Alchemy should feel like preparation, not mandatory consumable clutter.

Core Alchemy identity:

> **Turn the natural economy into controlled temporary power — one deliberate combat elixir, one deliberate profession tonic, and a supply chain capable of sustaining both for as long as the player chooses.**
