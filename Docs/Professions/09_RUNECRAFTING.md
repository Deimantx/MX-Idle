# 09 â€” RUNECRAFTING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `Mining.md`, `Tailoring.md`, `Fletching.md`, `Jewelcrafting.md`, `Alchemy.md`

**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)
**Purpose:** Define Runecrafting as one complete profession in a single source-of-truth file: Essence Attunement, Rune Patterns, Stabilization, six functional Rune families, ten Rune grades, catalysts, Filaments, Rune Matrices, profession Tool/gear, Mastery, Specializations, Runic Study, workers, planner, Combat rune supply, Tailoring/Fletching integration, UI, formulas, and endgame World Matrix progression.

---

# 1. RUNECRAFTING ROLE IN THE GAME

Runecrafting is the primary magical-resource processing profession.

It converts:

- Raw Essence;
- Runic Crystal;
- Aether Essence;
- Astral materials;

into:

- combat Runes;
- Runic/Astral Filaments;
- Rune Matrices;
- magical crafting components;
- endgame account materials.

Its main suppliers are:

- Mining;
- Tailoring;
- selected endgame systems.

Its consumers include:

- Magic Combat;
- Tailoring;
- Fletching;
- magic equipment;
- Estate facilities;
- profession gear;
- future Alchemy/Jewelcrafting recipes.

Runecrafting should not become:

**1 Essence â†’ 1 Rune**

Its identity is:

**Attunement â†’ Pattern â†’ Stabilization**

---

# 2. CORE FANTASY

The player begins with unstable Raw Essence and crude inscriptions.

Over time they learn to:

- attune raw magical material;
- inscribe different functional Rune Patterns;
- stabilize increasingly complex magical structures;
- produce larger Rune batches;
- preserve rare Essence;
- use Catalysts strategically;
- create Runic Filaments for textiles;
- build Rune Matrices for magical equipment;
- automate ordinary rune supply through workers;
- personally produce Astral and World-level magical constructs.

Long-term fantasy:

**Rune Scriber â†’ Inscriber â†’ Runewright â†’ Master Runecrafter â†’ Architect of magical infrastructure**

---

# 3. SIX FUNCTIONAL RUNE FAMILIES

Runecrafting baseline uses six functional Rune families.

| Rune | Primary Role | Expected Spell Tags | Identity |
|---|---|---|---|
| Ember Rune | Offense | Fire/heat/destruction spell tags | High damage / burn-style spell fuel |
| Frost Rune | Control | Cold/slow/freeze spell tags | Control / defensive cold spell fuel |
| Storm Rune | Tempo | Lightning/wind/rapid spell tags | Fast/chain/tempo spell fuel |
| Stone Rune | Ward | Earth/armor/barrier spell tags | Defense / ward / physical-magic hybrid fuel |
| Spirit Rune | Sustain | Healing/life/summon/support tags | Healing / sustain / spirit spell fuel |
| Arcane Rune | Universal | Pure magic / utility / advanced patterns | Flexible advanced spell fuel |

These names are not intended to lock the entire Magic combat-school architecture.

Instead Combat spells can reference one or more Rune tags.

Example:

a fire spell may consume Ember Rune.

a shield spell may consume Stone + Arcane.

a healing spell may consume Spirit.

This leaves the future Magic system flexible.

---

# 4. WHY FUNCTIONAL RUNES

Avoid creating:

- one Rune item per individual spell;
- 25 elemental sub-runes;
- one unique resource for every Magic school.

Six families are enough to create:

- spell costs;
- multi-rune recipes;
- resource choices;
- long-term supply chains.

---

# 5. RUNE GRADES

Rune families exist across ten progression grades.

| Tier | Rune Grade | Lvl | Essence | Pattern Work Mult. | Base XP | Base Attune Time |
|---|---|---|---|---|---|---|
| T1 | Minor | 1 | Raw Essence | 1.0 | 10 | 2.8 |
| T2 | Lesser | 11 | Raw Essence | 1.1 | 14 | 3.0 |
| T3 | Common | 21 | Raw Essence | 1.2 | 19 | 3.2 |
| T4 | Greater | 31 | Runic Crystal | 1.3 | 25 | 3.4 |
| T5 | Refined | 41 | Runic Crystal | 1.4 | 32 | 3.6 |
| T6 | Empowered | 51 | Runic Crystal | 1.5 | 40 | 3.8 |
| T7 | Aetheric | 61 | Aether Essence | 1.6 | 49 | 4.0 |
| T8 | Resonant | 71 | Aether Essence | 1.7 | 59 | 4.2 |
| T9 | Umbral | 81 | Aether Essence | 1.8 | 70 | 4.4 |
| T10 | Astral | 91 | Astral Essence | 2.0 | 84 | 4.7 |

Example progression:

**Minor Ember Rune**

â†’ Lesser Ember Rune

â†’ Common Ember Rune

â†’ Greater Ember Rune

â†’ Refined Ember Rune

â†’ Empowered Ember Rune

â†’ Aetheric Ember Rune

â†’ Resonant Ember Rune

â†’ Umbral Ember Rune

â†’ Astral Ember Rune

Same grade architecture applies to all six families.

---

# 6. ITEM BLOAT CONTROL

Ten grades Ã— six families = 60 normal Rune stacks.

That is substantial but acceptable because:

- Runes are direct combat consumables;
- every stack has a clear role;
- grades map cleanly to progression;
- they remain active economy items.

Do not add additional Rune rarity/quality versions on top.

---

# 7. ESSENCE PROGRESSION

| Tier Range | Essence | Primary Source | Main Uses |
|---|---|---|---|
| T1â€“T3 | Raw Essence | Mining: Raw Essence Seam | Basic rune imprinting; early Filaments |
| T4â€“T6 | Runic Crystal | Mining: Runic Crystal Seam | Mid-tier runes; Runic Filament (T4-T6) |
| T7â€“T9 | Aether Essence | Mining: Aether Essence Core | Late runes; high-grade Attunement; Aether catalysts |
| T10 | Astral Essence | Refined from Aether Essence + Astral materials | T10 runes; Astral Filament |
| T10+ | World Essence | Endgame conversion from Worldheart/Wildheart/Worldroot-linked components | Endgame rune matrices / permanent projects |

Mining is the main raw supplier.

Runecrafting owns:

- conversion;
- refinement;
- magical structuring.

---

# 8. CORE LOOP

Every normal Rune craft follows:

1. Select Rune family + grade.
2. Select Batch Size.
3. Reserve required Essence.
4. Select optional Catalyst policy.
5. **Attunement Phase** begins.
6. Essence becomes attuned to the Rune family.
7. **Pattern Phase** begins.
8. Rune Chisel / Runecrafting Power completes Pattern Work.
9. **Stabilization Phase** begins.
10. Stability is resolved.
11. Rune output is created.
12. Essence Preservation / Rune Output bonuses resolve.
13. XP and Recipe Mastery are awarded.
14. Next craft in Batch begins.

All phases are automatic.

---

# 9. ATTUNEMENT PHASE

Attunement determines:

**what type of magical function the Essence will carry**

Examples:

- Ember;
- Frost;
- Spirit.

Attunement is time-based.

Tier Base Attunement Times are listed in the Rune Grade table.

Higher gear/Study progression reduces this.

---

# 10. PATTERN PHASE

Pattern is the actual inscription.

Every Rune Grade has:

**Base Pattern Work**

Pattern Family adds a complexity multiplier.

| Pattern Family | Work Mult. | XP Mult. | Reason |
|---|---|---|---|
| Ember | 1.0 | 1.0 | Offense baseline |
| Frost | 1.05 | 1.05 | Control slightly more complex |
| Storm | 1.1 | 1.08 | Tempo / chain pattern |
| Stone | 1.1 | 1.08 | Ward geometry |
| Spirit | 1.15 | 1.12 | Life/support complexity |
| Arcane | 1.25 | 1.2 | Most flexible / advanced |

Arcane is deliberately the most complex because it is the most flexible advanced Rune family.

---

# 11. BASE PATTERN WORK

Recommended Tier Base Work:

| Tier | Base Work |
|---|---:|
| T1 | 22 |
| T2 | 30 |
| T3 | 40 |
| T4 | 52 |
| T5 | 66 |
| T6 | 82 |
| T7 | 100 |
| T8 | 120 |
| T9 | 142 |
| T10 | 168 |

Final:

**Tier Work Ã— Grade Work Multiplier Ã— Pattern Family Work Multiplier**

---

# 12. RUNE CHISEL

Primary Tool:

**Rune Chisel**

| Tier | Tool | Lvl | Runecrafting Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Rune Chisel | 1 | 5 | 2.15s | Starter | None |
| T1 | Copper Rune Chisel | 5 | 7 | 2.09s | Smithing | Pattern Work -2% |
| T2 | Iron Rune Chisel | 15 | 10 | 2.03s | Smithing | Essence Preservation +2 pp |
| T3 | Cobalt Rune Chisel | 25 | 14 | 1.97s | Smithing | Rune Output Chance +3 pp |
| T4 | Argent Rune Chisel | 35 | 19 | 1.91s | Smithing | Stabilization Time -4% |
| T5 | Emberite Rune Chisel | 45 | 25 | 1.85s | Smithing | Essence Preservation +4 pp |
| T6 | Frostsilver Rune Chisel | 55 | 32 | 1.79s | Smithing | Pattern Work -6% |
| T7 | Stormiron Rune Chisel | 65 | 40 | 1.73s | Smithing | Rune Output Chance +5 pp |
| T8 | Aetherite Rune Chisel | 75 | 49 | 1.67s | Smithing | Stability +5 |
| T9 | Umbral Rune Chisel | 85 | 59 | 1.61s | Smithing | Aether/Astral Essence Preservation +5 pp |
| T10 | Astralite Rune Chisel | 95 | 70 | 1.55s | Smithing | Runecrafting Power +8%; Output +5 pp |

Rune Chisel provides:

- Runecrafting Power;
- action-time improvements;
- preservation/output mechanics.

No durability.

---

# 13. PATTERN WORK LOOP

Every automatic Tool action:

**Remaining Pattern Work -= Final Runecrafting Power**

When Pattern Work reaches 0:

begin Stabilization.

No manual tracing minigame.

---

# 14. STABILIZATION PHASE

After Pattern completion:

Rune is unstable.

Stabilization represents:

- fixing magical structure;
- preventing collapse;
- balancing Essence.

Base Stabilization Time:

**1.5s + 0.15s Ã— Tier**

before modifiers.

Examples:

T1 = 1.65s  
T10 = 3.00s

---

# 15. STABILITY

Runecrafting uses a visible:

**Stability Rating**

Baseline craft Stability:

**100**

Difficult patterns can lower effective Stability requirement margin.

Important:

**normal crafting does not randomly fail.**

Stability instead affects:

- chance for bonus Rune output;
- Catalyst efficiency;
- advanced Matrix crafting;
- later endgame interactions.

No destroyed Essence due to RNG failure.

---

# 16. WHY NO RUNE FAILURE

The game is idle-first.

Losing expensive Essence because of a hidden failure roll would make offline planning frustrating.

Difficulty should appear through:

- time;
- Work;
- material cost;
- Catalyst choices;
- output efficiency.

---

# 17. RUNE OUTPUT

Baseline normal craft:

**4 Runes**

Grade progression can increase base batch:

| Grade Range | Base Output |
|---|---:|
| T1â€“T3 | 4 |
| T4â€“T6 | 5 |
| T7â€“T9 | 6 |
| T10 | 8 |

This keeps high-tier Runecrafting productive enough to supply Combat.

---

# 18. RUNE OUTPUT CHANCE

Runecrafting uses:

**Rune Output Chance**

On success:

**+25% of Base Output**, rounded up.

Example T10:

Base 8.

Bonus:

+2.

Final:

10 Astral Runes.

Hard cap:

**75%**

No chained bonus rolls.

---

# 19. ESSENCE COST

Recommended baseline:

T1â€“T3:

**1 Essence per craft**

T4â€“T6:

**1 Runic Crystal per craft**

T7â€“T9:

**1 Aether Essence per craft**

T10:

**1 Astral Essence per craft**

The output quantity rather than Essence count handles scaling.

---

# 20. ESSENCE PRESERVATION

Normal Essence can be preserved.

Hard cap:

**50%**

Protected:

- World Essence;
- future boss/endgame magical materials.

Preservation is one of Runecrafting's major economic stats.

---

# 21. CATALYSTS

Optional Catalyst system:

| Catalyst | Unlock | Consumption | Effect | Role |
|---|---|---|---|---|
| None | 1 | 0 | No bonus | Baseline crafting |
| Runic Shard | 28 | 1 per 10 crafts | +20% Rune Output Chance; Stability +5 | Mining rare; efficient midgame boost |
| Prismatic Dust | 48 | 1 per 8 crafts | +25% Rune Output Chance; Mastery XP +10% | Mining Gem-Deposit roll or Jewelcrafting Gem-crushing reagent |
| Aether Catalyst | 68 | 1 Aether Essence per 12 crafts | +30% Rune Output Chance; Pattern Work -8% | Late throughput |
| Astral Catalyst | 95 | 1 Astral Core Fragment per 20 crafts | +35% Rune Output Chance; Stability +10; Mastery +10% | Endgame precision |

No Catalyst is mandatory for normal progression.

---

# 22. CATALYST POLICY

Player can configure:

> Use Catalyst while Bank > Reserve.

Example:

**Use Runic Shards while Runic Shard >100**

When reserve reached:

Runecrafting continues without Catalyst.

No activity failure.

---

# 23. CATALYST CONSUMPTION INTERVAL

Catalysts are intentionally not consumed every craft.

Example:

**1 Runic Shard per 10 Rune crafts**

This keeps rare reagents useful without making ordinary Rune supply prohibitively expensive.

---

# 24. CATALYST COUNTER

Save exact progress:

e.g.

**Runic Shard charge: 7/10 crafts**

Switching activity preserves the counter.

This prevents resource-loss exploits.

---

# 25. RUNE UNLOCKS

Rune families unlock gradually in each grade.

Suggested family order per Tier:

- Ember;
- Frost;
- Storm;
- Stone;
- Spirit;
- Arcane.

This prevents a Tier from dumping six new Rune recipes at once.

---

# 26. COMPLETE RUNE UNLOCK ROADMAP

| Runecrafting Lvl | Major Unlock |
|---|---|
| 1 | Attunement + Ember Pattern; Worn Rune Chisel |
| 1 | Minor Ember Rune |
| 2 | Minor Frost Rune |
| 3 | Minor Storm Rune |
| 4 | Minor Stone Rune |
| 5 | Copper Rune Chisel |
| 6 | Minor Spirit Rune |
| 8 | Minor Arcane Rune |
| 10 | Basic Rune Matrix / 2 saved patterns |
| 11 | Lesser Ember Rune |
| 12 | Lesser Frost Rune |
| 13 | Lesser Storm Rune |
| 14 | Lesser Stone Rune |
| 15 | Iron Rune Chisel; Runic Focus Ring |
| 16 | Lesser Spirit Rune |
| 18 | Lesser Arcane Rune |
| 21 | Common Ember Rune |
| 22 | Common Frost Rune |
| 23 | Common Storm Rune |
| 24 | Common Stone Rune |
| 25 | Cobalt Rune Chisel; Scriber set |
| 26 | Common Spirit Rune |
| 28 | Common Arcane Rune |
| 28 | Runic Shard Catalyst |
| 31 | Greater Ember Rune |
| 32 | Greater Frost Rune |
| 33 | Greater Storm Rune |
| 34 | Greater Stone Rune |
| 35 | Argent Rune Chisel; Runecrafting Specializations |
| 36 | Greater Spirit Rune |
| 38 | Greater Arcane Rune |
| 41 | Refined Ember Rune |
| 42 | Refined Frost Rune |
| 43 | Refined Storm Rune |
| 44 | Refined Stone Rune |
| 45 | Emberite Rune Chisel; Inscriber set |
| 46 | Refined Spirit Rune |
| 48 | Prismatic Dust Catalyst |
| 48 | Refined Arcane Rune |
| 51 | Empowered Ember Rune |
| 52 | Empowered Frost Rune |
| 53 | Empowered Storm Rune |
| 54 | Empowered Stone Rune |
| 55 | Frostsilver Rune Chisel |
| 56 | Empowered Spirit Rune |
| 58 | Empowered Arcane Rune |
| 61 | Aetheric Ember Rune |
| 62 | Aetheric Frost Rune |
| 63 | Aetheric Storm Rune |
| 64 | Aetheric Stone Rune |
| 65 | Stormiron Rune Chisel; Runewright set |
| 66 | Aetheric Spirit Rune |
| 68 | Aether Catalyst |
| 68 | Aetheric Arcane Rune |
| 71 | Resonant Ember Rune |
| 72 | Resonant Frost Rune |
| 73 | Resonant Storm Rune |
| 74 | Resonant Stone Rune |
| 75 | Aetherite Rune Chisel |
| 76 | Resonant Spirit Rune |
| 78 | Resonant Arcane Rune |
| 81 | Umbral Ember Rune |
| 82 | Umbral Frost Rune |
| 83 | Umbral Storm Rune |
| 84 | Umbral Stone Rune |
| 85 | Umbral Rune Chisel; Master Runecrafter set |
| 86 | Umbral Spirit Rune |
| 88 | Umbral Arcane Rune |
| 91 | Astral Ember Rune |
| 91 | Astral Essence Refinement |
| 92 | Astral Frost Rune |
| 93 | Astral Storm Rune |
| 94 | Astral Stone Rune |
| 95 | Astralite Rune Chisel; Astral Catalyst |
| 96 | Astral Spirit Rune |
| 98 | Astral Arcane Rune |
| 100 | Runecrafting cap; World Matrix endgame path |

---

# 27. MAGIC COMBAT CONSUMPTION

Baseline principle:

Magic Combat consumes Runes.

Exact costs belong to Combat/Spell design.

Recommended examples:

**Simple spell**

- 1 matching Rune per cast.

**Advanced spell**

- 1 primary Rune + 1 Arcane Rune.

**Hybrid spell**

- two different functional Runes.

**Ultimate / high-cost spell**

- several Runes or higher-grade Rune.

Runecrafting supplies the economy.

---

# 28. NO SEPARATE RUNE POUCH ITEM REQUIREMENT

Bank/Combat can track equipped Rune stacks directly.

Do not require a mandatory Rune Pouch just to make Magic function.

A pouch can later exist as optional equipment/QoL if Combat wants it.

---

# 29. RUNE GRADE USAGE

Recommended:

Spells can define:

**minimum Rune Grade**

A higher grade can satisfy lower-grade costs if player enables:

**Allow Higher Grade Substitution**

Default:

OFF

to prevent accidentally burning Astral Runes on trivial content.

---

# 30. HIGHER-GRADE SUBSTITUTION

If enabled:

T5 Rune can satisfy a T3 Rune requirement.

It consumes:

1 T5 Rune.

No automatic conversion into multiple lower Runes.

This is convenience, not value multiplication.

---

# 31. RUNE DOWNCRAFTING

Baseline:

**No automatic downcraft**

T10 Rune â†’ 10 T1 Runes is not allowed.

That would undermine old-tier production.

---

# 32. RUNE UPCRAFTING

Recommended limited conversion:

**4 lower-grade same-family Runes â†’ 1 next-grade Rune**

Unlocked midgame.

This is intentionally inefficient.

Purpose:

- consume surplus old Runes;
- emergency upgrade supply;
- keep old Rune stock relevant.

Primary high-grade production remains direct crafting.

---

# 33. RUNE UPCRAFT COST

No XP benefit beyond modest recipe XP.

No preservation on the consumed Runes.

This prevents infinite conversion loops.

---

# 34. RUNE MATRICES

Runecrafting creates larger permanent magical components.

| Lvl | Matrix | Inputs | Uses |
|---|---|---|---|
| 18 | Minor Rune Matrix | 4 Minor/Common Runes + 1 Raw Essence | Early magic equipment / facilities |
| 38 | Greater Rune Matrix | 4 Greater/Refined Runes + 1 Runic Crystal | Mid magic gear / Estate |
| 58 | Empowered Rune Matrix | 4 Empowered Runes + 1 Runic Crystal | Advanced magic gear / profession equipment |
| 78 | Aether Rune Matrix | 4 Aetheric/Resonant Runes + 1 Aether Essence | Late magic gear / facilities |
| 98 | Astral Rune Matrix | 4 Astral Runes + 1 Astral Essence + 1 Astral Core Fragment | T10 magic gear / Holdings |

Matrices are not Combat consumables.

They support:

- Magic armor;
- profession equipment;
- Estate;
- Long-Term Projects.

---

# 35. MATRIX FAMILY LOGIC

Matrices can optionally inherit a Rune family.

Examples:

- Ember Matrix;
- Stone Matrix;
- Spirit Matrix.

But baseline recommendation:

use **generic grade matrices** unless a recipe genuinely needs a functional family.

Avoid multiplying 5 Matrix grades Ã—6 families without gameplay reason.

---

# 36. RUNIC FILAMENTS

Runecrafting directly supports Tailoring.

| Lvl | Filament | Inputs | Output | Main Consumer |
|---|---|---|---|---|
| 24 | Runic Filament | 2 Raw Essence + 1 Flax Thread | 2 Runic Filament | Tailoring bridge / early runic textiles |
| 35 | Runic Filament | 1 Runic Crystal + 2 Silken Thread | 2 Runic Filament | T4-T6 magical textile / utility bridge |
| 65 | Aether Filament | 1 Aether Essence + 2 Storm Thread | 2 Aether Filament | T7-T9 Runic Weave, Runic Bowstrings, Hunting and Jewelcrafting |
| 95 | Astral Filament | 1 Astral Essence + 2 Astral Thread | 2 Astral Filament | Astral Weave / T10 Bowstrings |

These are magical thread-treatment components, not full cloth.

Tailoring performs the textile assembly.

---

# 37. FILAMENT OWNERSHIP

Runecrafting owns:

- magical infusion;
- Essence conversion.

Tailoring owns:

- Thread;
- Cloth;
- Runic/Astral Weave.

This keeps profession boundaries clear.

---

# 38. RUNIC FILAMENT

Early bridge.

Uses:

- Raw Essence;
- Tailoring Thread.

Output supports:

- early magical textiles;
- future profession items.

---

# 39. AETHER / ASTRAL FILAMENTS

Late Filaments use:

- high-tier Essence;
- high-tier Tailoring Thread.

This creates:

**Mining â†’ Runecrafting â†’ Tailoring â†’ Fletching / Magic Gear**

---

# 40. ASTRAL ESSENCE

T10 Runecrafting refines:

**Astral Essence**

Recommended recipe:

**2 Aether Essence + 1 Astral Core Fragment â†’ 1 Astral Essence**

Unlock:

Runecrafting 91.

This gives Mining's Astral Core Fragment a direct magical consumer.

---

# 41. ASTRAL ESSENCE PRESERVATION

Astral Core Fragment portion is:

**protected from normal Preservation**

Aether Essence portion can still be preserved if balance permits.

This prevents rare Core materials being trivialized.

---

# 42. PROFESSION TOOL

| Tier | Tool | Lvl | Runecrafting Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Rune Chisel | 1 | 5 | 2.15s | Starter | None |
| T1 | Copper Rune Chisel | 5 | 7 | 2.09s | Smithing | Pattern Work -2% |
| T2 | Iron Rune Chisel | 15 | 10 | 2.03s | Smithing | Essence Preservation +2 pp |
| T3 | Cobalt Rune Chisel | 25 | 14 | 1.97s | Smithing | Rune Output Chance +3 pp |
| T4 | Argent Rune Chisel | 35 | 19 | 1.91s | Smithing | Stabilization Time -4% |
| T5 | Emberite Rune Chisel | 45 | 25 | 1.85s | Smithing | Essence Preservation +4 pp |
| T6 | Frostsilver Rune Chisel | 55 | 32 | 1.79s | Smithing | Pattern Work -6% |
| T7 | Stormiron Rune Chisel | 65 | 40 | 1.73s | Smithing | Rune Output Chance +5 pp |
| T8 | Aetherite Rune Chisel | 75 | 49 | 1.67s | Smithing | Stability +5 |
| T9 | Umbral Rune Chisel | 85 | 59 | 1.61s | Smithing | Aether/Astral Essence Preservation +5 pp |
| T10 | Astralite Rune Chisel | 95 | 70 | 1.55s | Smithing | Runecrafting Power +8%; Output +5 pp |

---

# 43. TOOL SOURCE

Rune Chisels are primarily crafted through:

**Smithing**

with later possible:

- Jewelcrafting focus stone;
- Runic Matrix component.

Runecrafting defines progression/effects.

---

# 44. TOOL UPGRADE CHAIN

Default:

**Previous Rune Chisel + current metal + magical component â†’ next Rune Chisel**

Old Chisels move to workers.

---

# 45. PROFESSION CLOTHING

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Scriber Hood | Pattern Work -4% |
| T3 / L25 | Scriber Robe | Essence Preservation +3 pp |
| T3 / L25 | Scriber Legwraps | Runecrafting Mastery XP +4% |
| T3 / L25 | Scriber Gloves | Rune Output Chance +3 pp |
| T3 / L25 | Scriber Slippers | Attunement Time -3% |
| Set | Scriber 5/5 | Stabilization Time -4% |
| T5 / L45 | Inscriber Hood | Attunement Time -5% |
| T5 / L45 | Inscriber Robe | Essence Preservation +4 pp |
| T5 / L45 | Inscriber Legwraps | Rune Mastery XP +6% |
| T5 / L45 | Inscriber Gloves | Pattern Work -5% |
| T5 / L45 | Inscriber Slippers | Rune Output Chance +4 pp |
| Set | Inscriber 5/5 | Rune crafting action time -4% |
| T7 / L65 | Runewright Hood | Aether Pattern Work -6% |
| T7 / L65 | Runewright Robe | Catalyst Preservation +4 pp |
| T7 / L65 | Runewright Legwraps | Aether Rune Mastery XP +7% |
| T7 / L65 | Runewright Gloves | Rune Output Chance +5 pp |
| T7 / L65 | Runewright Slippers | Stability +5 |
| Set | Runewright 5/5 | Aether/Astral action time -5% |
| T9 / L85 | Master Runecrafter Hood | Runecrafting Power +8% |
| T9 / L85 | Master Runecrafter Robe | Essence Preservation +5 pp |
| T9 / L85 | Master Runecrafter Legwraps | Mastery XP +8% |
| T9 / L85 | Master Runecrafter Gloves | Rune Output Chance +6 pp |
| T9 / L85 | Master Runecrafter Slippers | Attune/Stabilize Time -6% |
| Set | Master Runecrafter 5/5 | All action time -5%; Preservation +3 pp |

---

# 46. CLOTHING IDENTITIES

## Scriber

Early general Runecrafting.

## Inscriber

Midgame Essence/output efficiency.

## Runewright

Aether / Catalyst production.

## Master Runecrafter

Endgame hybrid.

---

# 47. PROFESSION JEWELRY

| Runecrafting Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Runic Focus Ring | Attunement Time -6% | Attunement |
| 25 | Scriber's Pendant | Pattern Work -6% | Pattern inscription |
| 35 | Essencekeeper Band | Essence Preservation +5 pp | Efficiency |
| 45 | Stabilizer Charm | Stabilization Time -8% | Cycle speed |
| 55 | Patternweaver Loop | Arcane/Spirit Pattern Work -8% | Complex patterns |
| 65 | Catalyst Seal | Catalyst consumption interval +20% | Catalyst economy |
| 75 | Aether Lens | Aether Rune Output +6 pp | Late runes |
| 85 | Umbral Sigil | Aether/Astral Essence Preservation +6 pp | Rare essence |
| 95 | Astral Runemaster Emblem | Output +4 pp; Pattern Work -5% | Endgame general |

Jewelry supports:

- Attunement;
- Pattern Work;
- Preservation;
- Stabilization;
- Catalyst economy;
- Aether/Astral crafting.

---

# 48. SAVED LOADOUTS

Recommended:

## Combat Rune Supply

- Output Chance;
- speed;
- cheap/no Catalyst.

## Essence Saver

- Preservation;
- rare Essence.

## Mastery

- Mastery XP;
- complex Arcane/Spirit patterns.

## Filament Production

- preservation;
- Tailoring support.

## Astral Crafting

- Catalyst;
- high-grade gear.

---

# 49. RECIPE MASTERY

Every Rune grade/family recipe and major utility recipe has:

**Mastery 1â€“100**

Examples:

- Minor Ember Rune;
- Greater Stone Rune;
- Aetheric Arcane Rune;
- Astral Spirit Rune;
- Astral Filament.

---

# 50. MASTERY MILESTONES

| Recipe Mastery | Permanent Effect |
|---|---|
| 10 | Pattern Work -2% |
| 25 | Essence Preservation +3 pp |
| 50 | Rune Output Chance +4 pp |
| 75 | Recipe Mastery XP +8%; Stabilization Time -3% |
| 100 | Action Time -4% additional; Preservation +3 pp |

Utility recipes can replace Rune Output bonuses with:

- Filament Output;
- Matrix Work reduction

where relevant.

---

# 51. SKILL-WIDE RUNECRAFTING MASTERY

Recommended:

| Completion | Reward |
|---:|---|
| 10% | Attunement Time -2% |
| 25% | Essence Preservation +2 pp; second preset |
| 50% | Worker efficiency +5%; Rune Output +3 pp |
| 75% | Runecrafting Power +5%; third preset |
| 100% | All action time -4%; Preservation +3 pp; Master Runecrafter marker |

---

# 52. SPECIALIZATIONS

Unlock:

**Runecrafting Level 35**

Three baseline Specializations:

1. Channeler;
2. Inscriber;
3. Artificer.

All reversible.

---

# 53. CHANNELER

Focus:

**Rune throughput / Combat supply**

Effects:

- Attunement Time -10%;
- Rune Output Chance +12 pp;
- Essence Preservation +4 pp;
- Ember/Frost/Storm/Stone Rune crafting time -5%;
- Matrix crafting time +5%.

Best for:

- everyday Magic Combat;
- worker supply;
- bulk Runes.

---

# 54. INSCRIBER

Focus:

**complex Patterns / Mastery**

Effects:

- Pattern Work -12%;
- Arcane/Spirit Mastery XP +12%;
- Stabilization Time -8%;
- Catalyst effectiveness +10%;
- Rune Output Chance -3 pp.

Best for:

- complex families;
- Mastery;
- rare/high-grade Rune crafting.

---

# 55. ARTIFICER

Focus:

**Filaments / Matrices / permanent magical components**

Effects:

- Filament Time -12%;
- Matrix Work -12%;
- Filament/Matrix Material Preservation +6 pp;
- utility-recipe Mastery XP +10%;
- normal Combat Rune crafting time +5%.

Best for:

- Tailoring support;
- magical gear;
- Estate;
- endgame projects.

---

# 56. SPECIALIZATION SWITCHING

Rules:

- free;
- outside active craft;
- unfinished action loses progress;
- normal reserved materials return;
- Catalyst counters persist;
- presets remember specialization.

---

# 57. RUNIC STUDY

Estate infrastructure:

**Runic Study Iâ€“V**

| Facility | Estate Stage | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|
| Runic Study I | House | 20 | 5 | 2 | 2 Rune presets; exact attunement/pattern analytics |
| Runic Study II | Lodge | 40 | 10 | 4 | Catalyst policies; Filament crafting; first worker |
| Runic Study III | Manor | 60 | 25 | 6 | Matrix crafting; 3 workers; cross-pattern queue |
| Runic Study IV | Estate | 80 | 50 | 10 | Aether worker teams; advanced reserve schedules |
| Runic Study V | Holdings / late Estate | 100 | 100 | Expanded | Astral/World Matrix production; 10 workers |

Personal Runecrafting starts with a simple:

**Scribing Table**

before developed Estate infrastructure.

---

# 58. RUNIC STUDY PURPOSE

Unlocks:

- presets;
- catalyst policies;
- larger batches;
- worker assignments;
- Matrix production;
- Aether/Astral automation;
- endgame World Matrix crafting.

It does not gain Runecrafting XP.

---

# 59. WORKERS

Workers can craft:

- Proven Runes;
- Filaments;
- selected Matrices;
- conversions.

They consume real materials.

---

# 60. PROVEN RECIPE

Worker eligibility:

**Recipe Mastery 10**

Player pioneers.

Workers maintain.

---

# 61. WORKER PROFICIENCY

Base Worker Runecrafting Efficiency:

**50% + Proficiency Ã—0.50%**

Examples:

- 1 â†’50.5%;
- 50 â†’75%;
- 100 â†’100%.

Workers gain Proficiency.

No player XP/Mastery from workers.

---

# 62. FRONTIER PENALTY

Highest unlocked Rune grade:

| Recipe Mastery | Worker Multiplier |
|---:|---:|
| 10â€“24 | 75% |
| 25â€“49 | 85% |
| 50â€“74 | 92.5% |
| 75â€“99 | 97.5% |
| 100 | 100% |

Older grades:

no frontier penalty.

---

# 63. WORKER CATALYST POLICY

Workers can use Catalysts.

Configurable:

- Never;
- If above reserve;
- Always;
- only specific Rune family/grade.

Default:

**If above reserve**

---

# 64. WORKER RUNE SUPPLY

Late-game worker example:

> Maintain 20,000 Aetheric Ember Runes.  
> Maintain 10,000 Aetheric Spirit Runes.  
> Maintain 5,000 Aetheric Arcane Runes.

This makes Runecrafting a natural worker profession.

---

# 65. ACTIVITY PLANNER

Starter:

- craft indefinitely;
- stop at Rune quantity;
- stop at level;
- stop when Essence unavailable.

House:

- Mastery target;
- 2-step queue.

Lodge:

- Catalyst reserve;
- 4-step queue;
- Rune family targets.

Manor:

- 6-step chains;
- Filament/Matrix transitions;
- saved presets.

Estate:

- 10-step player queue;
- worker Rune reserves;
- multi-family Combat supply.

Holdings:

- department-wide Rune policies;
- endgame Matrix production.

---

# 66. RUNE RESERVE PLANNER

Example:

> Maintain:
> - Ember Rune 10,000;
> - Stone Rune 5,000;
> - Spirit Rune 5,000.

If all met:

switch to:

**Arcane Rune Mastery**

This is a core long-term Runecrafting use case.

---

# 67. MAGIC COMBAT RESERVE

Combat should be able to expose:

**estimated Rune consumption/hour**

Runecrafting planner can use it to calculate:

- hours of combat supply;
- required production rate;
- worker shortfall.

Example:

> Current Ember supply: ~14.2 combat hours.

Very useful for idle planning.

---

# 68. TAILORING SUPPLY PLANNER

Example:

> Maintain 300 Aether Filament.

When below:

- worker Runecrafter produces Filament.

When above:

- return to Combat Rune reserve.

This closes Tailoring integration.

---

# 69. RESOURCE RESERVES

Respect reserves on:

- Raw Essence;
- Runic Crystal;
- Aether Essence;
- Astral Essence;
- Runic Shard;
- Prismatic Dust;
- Astral Core Fragment;
- Thread;
- Rune stock.

No automation should silently consume protected Essence.

---

# 70. RUNIC UPCRAFT PLANNER

Optional chain:

> If Lower Rune >20,000 and Higher Rune <2,000:
> convert surplus at 4:1.

Primary high-grade crafting remains preferred.

---

# 71. NO RANDOM PATTERN DISCOVERY

Rune recipes unlock by:

- skill level;
- account milestones where relevant.

No RNG recipe unlocks.

Magic economy should be predictable.

---

# 72. NO ACTIVE GLYPH DRAWING

No mouse-drawing rune minigame.

Pattern complexity is represented through:

- Work;
- Tool Power;
- Mastery;
- gear;
- specialization.

Idle-first preserved.

---

# 73. RUNECRAFTING â†” MINING

Mining supplies:

- Raw Essence;
- Runic Crystal;
- Aether Essence;
- Runic Shard;
- Astral Core Fragment.

Runecrafting converts them into magical economy.

This is Runecrafting's strongest raw-material link.

---

# 74. RUNECRAFTING â†” TAILORING

Runecrafting creates:

- Runic Filament;
- Aether Filament;
- Astral Filament.

Tailoring creates:

- Runic Weave;
- Astral Weave;
- Runic/Astral Bowstrings;
- magic armor.

---

# 75. RUNECRAFTING â†” FLETCHING

Indirect path:

**Runecrafting â†’ Filament â†’ Tailoring Bowstring â†’ Fletching**

Late ranged weapons therefore interact with magical progression without Fletching directly crafting magic thread.

---

# 76. RUNECRAFTING â†” MAGIC COMBAT

Runecrafting supplies consumable Runes.

Combat consumes them.

This ensures persistent demand even after gear is complete.

Equivalent economy:

- Ranged consumes Ammo;
- Magic consumes Runes.

Melee has no direct Ammo but can have other tradeoffs later.

---

# 77. RUNECRAFTING â†” ESTATE

Estate consumes:

- Rune Matrices;
- Filaments;
- high-grade Runes;
- Astral components

for:

- Runic Study;
- magical facilities;
- advanced projects;
- Holdings.

This creates permanent non-combat sinks.

---

# 78. OLD RUNE RELEVANCE

Old Runes remain useful through:

- lower content;
- workers;
- spell-grade requirements;
- 4:1 upcraft;
- Estate recipes;
- cheap utility Magic.

Do not make T10 spells automatically invalidate every lower-grade Rune stack.

---

# 79. RUNE GRADE REQUIREMENTS

Spells should have:

**Minimum Rune Grade**

not:

**exact Rune Grade only**

This lets higher Runes work when desired while old content still has appropriate costs.

---

# 80. RUNE STACK SELECTION

Combat Loadout stores:

- preferred Rune grade per family;
- allow/disallow higher-grade substitution;
- reserve amount;
- fallback behavior.

This gives players control over consumable economy.

---

# 81. FALLBACK BEHAVIOR

If required Rune is unavailable:

recommended Combat policy options:

1. Skip that spell;
2. Use higher-grade Rune if allowed;
3. use fallback spell;
4. pause Combat.

Default:

**skip spell / use configured combat automation**

Combat system will finalize.

Runecrafting just exposes Rune availability clearly.

---

# 82. COMPLETE FILAMENT PROGRESSION

| Lvl | Filament | Inputs | Output | Main Consumer |
|---|---|---|---|---|
| 24 | Runic Filament | 2 Raw Essence + 1 Flax Thread | 2 Runic Filament | Tailoring bridge / early runic textiles |
| 35 | Runic Filament | 1 Runic Crystal + 2 Silken Thread | 2 Runic Filament | T4-T6 magical textile / utility bridge |
| 65 | Aether Filament | 1 Aether Essence + 2 Storm Thread | 2 Aether Filament | T7-T9 Runic Weave, Runic Bowstrings, Hunting and Jewelcrafting |
| 95 | Astral Filament | 1 Astral Essence + 2 Astral Thread | 2 Astral Filament | Astral Weave / T10 Bowstrings |

---

# 83. COMPLETE MATRIX PROGRESSION

| Lvl | Matrix | Inputs | Uses |
|---|---|---|---|
| 18 | Minor Rune Matrix | 4 Minor/Common Runes + 1 Raw Essence | Early magic equipment / facilities |
| 38 | Greater Rune Matrix | 4 Greater/Refined Runes + 1 Runic Crystal | Mid magic gear / Estate |
| 58 | Empowered Rune Matrix | 4 Empowered Runes + 1 Runic Crystal | Advanced magic gear / profession equipment |
| 78 | Aether Rune Matrix | 4 Aetheric/Resonant Runes + 1 Aether Essence | Late magic gear / facilities |
| 98 | Astral Rune Matrix | 4 Astral Runes + 1 Astral Essence + 1 Astral Core Fragment | T10 magic gear / Holdings |

---

# 84. COMPLETE TOOL PROGRESSION

| Tier | Tool | Lvl | Runecrafting Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Rune Chisel | 1 | 5 | 2.15s | Starter | None |
| T1 | Copper Rune Chisel | 5 | 7 | 2.09s | Smithing | Pattern Work -2% |
| T2 | Iron Rune Chisel | 15 | 10 | 2.03s | Smithing | Essence Preservation +2 pp |
| T3 | Cobalt Rune Chisel | 25 | 14 | 1.97s | Smithing | Rune Output Chance +3 pp |
| T4 | Argent Rune Chisel | 35 | 19 | 1.91s | Smithing | Stabilization Time -4% |
| T5 | Emberite Rune Chisel | 45 | 25 | 1.85s | Smithing | Essence Preservation +4 pp |
| T6 | Frostsilver Rune Chisel | 55 | 32 | 1.79s | Smithing | Pattern Work -6% |
| T7 | Stormiron Rune Chisel | 65 | 40 | 1.73s | Smithing | Rune Output Chance +5 pp |
| T8 | Aetherite Rune Chisel | 75 | 49 | 1.67s | Smithing | Stability +5 |
| T9 | Umbral Rune Chisel | 85 | 59 | 1.61s | Smithing | Aether/Astral Essence Preservation +5 pp |
| T10 | Astralite Rune Chisel | 95 | 70 | 1.55s | Smithing | Runecrafting Power +8%; Output +5 pp |

---

# 85. COMPLETE CLOTHING PROGRESSION

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Scriber Hood | Pattern Work -4% |
| T3 / L25 | Scriber Robe | Essence Preservation +3 pp |
| T3 / L25 | Scriber Legwraps | Runecrafting Mastery XP +4% |
| T3 / L25 | Scriber Gloves | Rune Output Chance +3 pp |
| T3 / L25 | Scriber Slippers | Attunement Time -3% |
| Set | Scriber 5/5 | Stabilization Time -4% |
| T5 / L45 | Inscriber Hood | Attunement Time -5% |
| T5 / L45 | Inscriber Robe | Essence Preservation +4 pp |
| T5 / L45 | Inscriber Legwraps | Rune Mastery XP +6% |
| T5 / L45 | Inscriber Gloves | Pattern Work -5% |
| T5 / L45 | Inscriber Slippers | Rune Output Chance +4 pp |
| Set | Inscriber 5/5 | Rune crafting action time -4% |
| T7 / L65 | Runewright Hood | Aether Pattern Work -6% |
| T7 / L65 | Runewright Robe | Catalyst Preservation +4 pp |
| T7 / L65 | Runewright Legwraps | Aether Rune Mastery XP +7% |
| T7 / L65 | Runewright Gloves | Rune Output Chance +5 pp |
| T7 / L65 | Runewright Slippers | Stability +5 |
| Set | Runewright 5/5 | Aether/Astral action time -5% |
| T9 / L85 | Master Runecrafter Hood | Runecrafting Power +8% |
| T9 / L85 | Master Runecrafter Robe | Essence Preservation +5 pp |
| T9 / L85 | Master Runecrafter Legwraps | Mastery XP +8% |
| T9 / L85 | Master Runecrafter Gloves | Rune Output Chance +6 pp |
| T9 / L85 | Master Runecrafter Slippers | Attune/Stabilize Time -6% |
| Set | Master Runecrafter 5/5 | All action time -5%; Preservation +3 pp |

---

# 86. COMPLETE JEWELRY PROGRESSION

| Runecrafting Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Runic Focus Ring | Attunement Time -6% | Attunement |
| 25 | Scriber's Pendant | Pattern Work -6% | Pattern inscription |
| 35 | Essencekeeper Band | Essence Preservation +5 pp | Efficiency |
| 45 | Stabilizer Charm | Stabilization Time -8% | Cycle speed |
| 55 | Patternweaver Loop | Arcane/Spirit Pattern Work -8% | Complex patterns |
| 65 | Catalyst Seal | Catalyst consumption interval +20% | Catalyst economy |
| 75 | Aether Lens | Aether Rune Output +6 pp | Late runes |
| 85 | Umbral Sigil | Aether/Astral Essence Preservation +6 pp | Rare essence |
| 95 | Astral Runemaster Emblem | Output +4 pp; Pattern Work -5% | Endgame general |

---

# 87. COMPLETE FACILITY PROGRESSION

| Facility | Estate Stage | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|
| Runic Study I | House | 20 | 5 | 2 | 2 Rune presets; exact attunement/pattern analytics |
| Runic Study II | Lodge | 40 | 10 | 4 | Catalyst policies; Filament crafting; first worker |
| Runic Study III | Manor | 60 | 25 | 6 | Matrix crafting; 3 workers; cross-pattern queue |
| Runic Study IV | Estate | 80 | 50 | 10 | Aether worker teams; advanced reserve schedules |
| Runic Study V | Holdings / late Estate | 100 | 100 | Expanded | Astral/World Matrix production; 10 workers |

---

# 88. ATTUNEMENT TIME FORMULA

**Final Attunement Time = Tier Base Attunement Ã— Tool/gear/Mastery/Specialization/Study modifiers**

Minimum:

**40% of Base Attunement**

---

# 89. PATTERN WORK FORMULA

**Final Pattern Work = Tier Base Work Ã— Grade Work Mult. Ã— Pattern Family Work Mult. Ã— Work modifiers**

Every Chisel action:

**Remaining Work -= Final Runecrafting Power**

---

# 90. STABILIZATION TIME FORMULA

**Base Stabilization = 1.5s + 0.15s Ã— Tier**

then apply:

- Chisel;
- gear;
- jewelry;
- specialization;
- Mastery;
- Catalyst.

Minimum:

**40% of Base**

---

# 91. RUNE OUTPUT FORMULA

1. create Base Output by tier band;
2. roll Rune Output Chance;
3. success:
   **+ceil(Base Output Ã—0.25)**.

Hard cap:

**75%**

---

# 92. ESSENCE PRESERVATION FORMULA

For each normal Essence input:

roll:

**Essence Preservation**

Hard cap:

**50%**

Protected materials ignore.

---

# 93. CATALYST EFFECT FORMULA

Catalysts modify:

- Output Chance;
- Work;
- Stability;
- Mastery;
- selected action times.

They never make a recipe possible if level/Essence requirement is not met.

---

# 94. BATCHING

Normal Rune crafting supports large batches.

Suggested:

| Batch | Time Mult./Craft |
|---:|---:|
| 1 | 1.00x |
| 5 | 0.97x |
| 10 | 0.94x |
| 25 | 0.91x |
| 50 | 0.89x |
| 100 | 0.87x |

Matrices / Filaments use smaller effective batch caps if necessary.

---

# 95. OFFLINE RUNECRAFTING

Save:

- active recipe;
- Batch;
- Attunement progress;
- Pattern Work;
- Stabilization progress;
- Tool;
- loadout;
- Specialization;
- Catalyst;
- Catalyst counter;
- reserves;
- planner;
- workers.

Offline uses exact same formulas.

---

# 96. OFFLINE RESULTS

Show:

- Runes by family/grade;
- Filaments;
- Matrices;
- Essence consumed;
- Essence preserved;
- Catalysts consumed;
- bonus Rune output;
- XP;
- Mastery;
- planner transitions;
- workers separately.

---

# 97. SCREEN STRUCTURE

Tabs:

- Runes;
- Filaments;
- Matrices;
- Conversions;
- Workers/Management link if global UI supports.

Rune Browser filters:

- family;
- grade;
- level;
- worker eligibility.

---

# 98. ACTIVE RUNE PANEL

Show three phases clearly:

**Attunement**

â†’ **Pattern**

â†’ **Stabilization**

Display:

- current Essence;
- Rune family;
- grade;
- Pattern Work;
- Chisel Power;
- Stability;
- Catalyst;
- expected output.

---

# 99. RUNE ANALYTICS

Must show:

- Runes/hour;
- Essence/hour;
- Essence preserved/hour;
- Catalyst/hour;
- Output bonus/hour;
- Attunement time;
- Pattern time;
- Stabilization time;
- XP/hour;
- Mastery/hour;
- Combat-hours of supply.

Changing:

- Tool;
- gear;
- Catalyst;
- specialization;
- Batch

updates immediately.

---

# 100. FILAMENT / MATRIX ANALYTICS

Filament:

- output/hour;
- Essence/hour;
- Thread/hour;
- Preservation.

Matrix:

- Rune/hour consumed;
- Essence/hour;
- output/hour;
- ETA.

This prevents hidden cross-profession bottlenecks.

---

# 101. CHRONICLES â€” EARLY

Suggested:

1. craft first Minor Ember Rune.
2. explain three phases.
3. craft Frost Rune.
4. equip Rune Chisel.
5. use Rune in Magic Combat.
6. craft first Arcane Rune.
7. reach Mastery 10.
8. explain Proven recipes.

---

# 102. CHRONICLES â€” MIDGAME

Suggested:

- unlock Runic Crystal crafting tier;
- use Runic Shard Catalyst;
- craft first Runic Filament;
- choose Runecrafting Specialization;
- build Runic Study II;
- assign worker;
- create first Rune reserve policy;
- craft first Rune Matrix.

---

# 103. CHRONICLES â€” LATE

Suggested:

- craft Aetheric Runes;
- use Aether Catalyst;
- produce Aether Filament;
- maintain Combat Runes through workers;
- refine Astral Essence;
- craft Astral Rune;
- craft Astral Filament;
- reach Runecrafting 100.

---

# 104. WORLD MATRIX â€” POST-100

Runecrafting endgame:

**World Matrix**

This is the Runecrafting analogue to:

- Mining Worldheart;
- Woodcutting Worldroot;
- Foraging Wildheart;
- Tailoring Worldsilk.

It should be a permanent/high-value magical construct, not normal combat ammo.

---

# 105. WORLD MATRIX UNLOCK

Recommended requirements:

- Runecrafting 100;
- Runic Study V;
- Astralite Rune Chisel;
- at least 3 Astral Rune recipes Mastery 50;
- Astral Filament Mastery 50;
- Astral Rune Matrix crafted;
- complete Chronicle:
  **Master of the Runes**

---

# 106. WORLD ESSENCE

Expected recipe:

- Worldheart material;
- Wildheart Essence;
- Worldroot Heartwood component;
- Worldsilk Cloth;
- Astral Essence.

World Matrix and Quintessence are independent upstream branches. World Matrix uses frontier structural materials and T10 magical inputs; Quintessence uses Wildheart Essence, Worldgarden/Genesis Fruit, Astral Essence, and Astral-grade Extracts without requiring World Matrix. World Prism consumes both branches. Exact quantities remain for a later economy pass.

Do not lock arbitrary quantities yet.

---

# 107. WORLD MATRIX USES

Expected:

- Holdings;
- endgame magic gear;
- permanent account projects;
- future top-tier Runic facilities.

Not normal spell consumption.

---

# 108. MASTER OF THE RUNES

Requirements:

- Runecrafting 100;
- Runic Study V;
- Astralite Rune Chisel;
- all six Astral Rune families crafted at least once;
- 3 Astral recipes Mastery 50;
- Astral Filament Mastery 50;
- craft Astral Rune Matrix.

Reward:

- World Matrix crafting;
- fourth preset;
- Master Runecrafter marker.

---

# 109. DEVTOOLS

Support:

- set Runecrafting Level;
- set Recipe Mastery;
- set Skill-Wide Mastery;
- unlock all Runes;
- spawn Essence;
- spawn Runes;
- spawn Catalysts;
- spawn Filaments;
- spawn Matrices;
- spawn Chisel;
- spawn gear/jewelry;
- set Specialization;
- set Study tier;
- set Attunement/Pattern/Stabilization progress;
- set Catalyst counter;
- mark recipe Proven;
- spawn worker;
- set worker Proficiency;
- instant craft;
- simulate 1m / 5m / 1h / 8h / 24h;
- compare expected vs actual outputs.

---

# 110. DATA MODEL

Rune Recipe:

- family;
- grade;
- Tier;
- level;
- Essence ID;
- Base Output;
- Attunement Time;
- Pattern Work;
- Stabilization Time;
- XP;
- Mastery ID.

Catalyst:

- consumption interval;
- modifiers;
- reserve policy.

Utility Recipe:

- Filament / Matrix / conversion type;
- inputs;
- output;
- Work/Time.

Player:

- Mastery;
- Proven;
- presets;
- specialization;
- catalyst counter;
- reserves;
- planner.

---

# 111. ANTI-BLOAT RULES

Avoid:

- one Rune per spell;
- random Rune quality;
- Rune durability;
- active glyph-drawing;
- random crafting failure;
- 20 Catalyst currencies;
- 30 Essence tiers;
- family-specific Matrix explosion unless needed.

Prefer:

- 6 functional Rune families;
- 10 clear grades;
- 4 main Essence stages;
- optional Catalysts;
- Filament/Matrix utility lines;
- strong Combat/Tailoring integration.

---

# 112. MAJOR OPEN QUESTIONS â€” RECOMMENDED ANSWERS

## How many Rune families?

**Six baseline.**

Enough for meaningful Magic costs without item explosion.

---

## Should Rune families define fixed Magic schools?

**No.**

They define functional tags.

Future Magic can combine them flexibly.

---

## Should every spell have unique Rune?

**No.**

Absolutely avoid.

---

## Should Magic consume Runes?

**Yes.**

This is Magic's persistent consumable economy, analogous to Ranged Ammo.

---

## Should higher Rune grade always replace lower grade?

**No.**

Spells have minimum grades.

Higher substitution is optional.

---

## Should player accidentally burn high-grade Runes on low content?

**Not by default.**

Higher-grade substitution OFF by default.

---

## Should lower Runes be convertible upward?

**Yes at inefficient 4:1.**

Good surplus sink.

---

## Should high Runes convert downward?

**No baseline.**

Avoid multiplication exploits.

---

## Should Runecrafting randomly fail?

**No.**

---

## Should Stability be a failure chance?

**No baseline.**

Stability influences efficiency/advanced crafting, not destructive failure.

---

## Should there be active Rune drawing?

**No.**

Idle-first.

---

## Should Catalysts be mandatory?

**No.**

Optional optimization.

---

## Should Catalyst be consumed every craft?

**No.**

Use interval charges to keep rare resources practical.

---

## Should Runic Shard from Mining be useful here?

**Yes.**

It is the first major Catalyst.

---

## Should Prismatic Dust be useful here?

**Yes.**

Midgame Catalyst.

---

## Should Runecrafting create Tailoring Filaments?

**Yes.**

This is the main cross-profession bridge.

---

## Should Tailoring create Filaments itself?

**No.**

Tailoring uses them in Weaves.

---

## Should Runecrafting create Magic armor?

**No.**

Tailoring constructs cloth armor.

Runecrafting supplies magical components.

---

## Should Runecrafting create weapons?

**Not baseline.**

Jewelcrafting/Smithing/Tailoring/Fletching can assemble equipment using Runic components.

---

## Should Rune Matrices have six family variants?

**Not by default.**

Use generic grade Matrix unless a recipe genuinely needs family identity.

---

## Should Essence have 10 tiers?

**No.**

Use a few broad raw-material stages.

Rune grade creates the progression.

---

## Should Rune Chisel have durability?

**No.**

---

## Should workers craft Runes?

**Yes.**

Very important for late Magic sustain.

---

## When can workers craft a Rune?

**Recipe Mastery 10.**

---

## Do workers grant player XP/Mastery?

**No.**

---

## Should workers use Catalysts?

**Configurable. Default: only above reserve.**

---

## Should old Runes remain useful?

**Yes.**

Through:
- lower-content spells;
- workers;
- upcrafting;
- Estate;
- cheap utility Magic.

---

## Should Runecrafting 100 finish the skill?

**No.**

Post-100:
- Mastery;
- Astral supply;
- World Matrix;
- worker Rune economy;
- completion.

---

# 113. COMPLETE LOCKED RUNECRAFTING BASELINE

1. Runecrafting uses Attunement â†’ Pattern â†’ Stabilization.
2. Six functional Rune families:
   - Ember;
   - Frost;
   - Storm;
   - Stone;
   - Spirit;
   - Arcane.
3. Rune families are functional tags, not fixed schools.
4. Ten Rune grades.
5. Magic Combat consumes Runes.
6. Higher-grade substitution is optional and off by default.
7. Lower-grade Runes can upcraft 4:1.
8. No downcraft.
9. Main raw materials:
   - Raw Essence;
   - Runic Crystal;
   - Aether Essence;
   - Astral Essence.
10. No random craft failure.
11. Stability is efficiency/advanced-craft mechanic, not destructive RNG.
12. Optional Catalysts.
13. Runic Shard and Prismatic Dust are major Catalysts.
14. Rune Chisel is primary Tool.
15. No durability.
16. Rune Output Chance adds +25% Base Output.
17. Essence Preservation cap 50%.
18. Recipe Mastery 1â€“100.
19. Skill-Wide Mastery.
20. Three reversible Specializations:
    - Channeler;
    - Inscriber;
    - Artificer.
21. Runecrafting creates magical Filaments for Tailoring.
22. Runecrafting creates grade Rune Matrices.
23. Runic Study is Estate infrastructure.
24. Workers consume real Essence.
25. Mastery 10 makes recipe Proven.
26. Workers gain Proficiency, not player XP/Mastery.
27. Workers can maintain Combat Rune reserves.
28. Planner supports family/grade targets, Catalysts, conversions, Filaments, Matrices.
29. Combat UI should expose Rune consumption/hour.
30. Offline uses identical formulas.
31. Post-100 endgame uses World Matrix.
32. All baseline Runecrafting content lives in this single MD.

---

# 114. FINAL SUMMARY

Runecrafting begins with:

**Raw Essence**

â†“

**Attunement**

â†“

**Minor Ember / Frost / Storm / Stone / Spirit / Arcane Runes**

â†“

**Pattern Work**

â†“

**Stabilization**

â†“

**Magic Combat supply**

â†“

**Runic Crystal**

â†“

**Catalysts**

â†“

**Runic Filaments**

â†“

**Rune Matrices**

â†“

**Aether Essence**

â†“

**worker Rune reserves**

â†“

**Astral Essence**

â†“

**Astral Runes / Astral Filament**

â†“

**Runecrafting 100**

â†“

**World Matrix**

The profession's main identity is:

> **Mining finds magical substance. Runecrafting gives that substance function.**

The player chooses:

- Rune family;
- grade;
- Catalyst policy;
- efficiency setup;
- whether to produce Combat supply or permanent magical components.

Long-term:

**I inscribe every Rune myself**

â†“

**I learn advanced Patterns**

â†“

**I build a Runic Study**

â†“

**I automate ordinary Rune supply**

â†“

**workers keep Magic Combat stocked**

â†“

**I personally create Astral and World-level magical constructs**

Core Runecrafting identity:

> **Attune the essence, inscribe the pattern, stabilize the power â€” then decide whether that magic becomes fuel, fabric, or permanent infrastructure.**




# INTEGRATION HARDENING — ESSENCE AND CATALYST RESERVES

Mining supplies Raw Essence at T1, Runic Crystal by T4, and Aether Essence by T7. T10 Astral Essence remains refined from Aether Essence + Astral Core Fragment. Worker Rune production and catalyst use obey protected-item permission and hard reserves; Astral Catalyst is never consumed below reserve by default.









