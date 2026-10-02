# 08 â€” TAILORING

**Status:** Complete Design Draft  
**Version:** 1.0  
**Parent:** `00_PROFESSIONS_OVERVIEW.md` / Skills & Professions foundation  
**Reference Professions:** `Foraging.md`, `Farming.md`, `Runecrafting.md`, `Fletching.md`, `Hunting.md`

**Shared canon:** [00_GLOBAL_GAME_RULES.md](../00_GLOBAL_GAME_RULES.md) · [Item Registry](../Registries/ITEM_REGISTRY.md) · [Recipe Registry](../Registries/RECIPE_REGISTRY.md)
**Purpose:** Define Tailoring as one complete profession in a single source-of-truth file: spinning, weaving, weave types, cloth armor, profession clothing, Bowstrings, worker textiles, profession Tool/gear, Mastery, Specializations, Textile Room, workers, planner, Chronicles, UI, formulas, Runecrafting bridge, and endgame Worldsilk progression.

---

# 1. TAILORING ROLE IN THE GAME

Tailoring is the primary textile-processing profession.

It converts raw fibres into:

- Thread;
- Cloth;
- advanced Weaves;
- cloth/magic armor;
- profession clothing;
- Bowstrings;
- worker uniforms;
- utility textiles;
- Estate textile components.

Its main suppliers are:

- Foraging;
- Farming;
- Hunting;
- Runecrafting at higher tiers.

Its main consumers are:

- Magic / light Combat equipment;
- Fletching;
- profession gear;
- workers;
- Estate;
- Runecrafting / advanced crafting.

Tailoring should not become:

**2 Fibre â†’ 1 Cloth forever**

Its identity is:

**Spinning â†’ Weaving â†’ Pattern Assembly**

with meaningful weave choices.

---

# 2. CORE FANTASY

The player starts with rough wild fibre and primitive shears.

Over time they learn to:

- spin stronger Thread;
- weave different fabric structures;
- create profession clothing;
- support Fletching through Bowstrings;
- produce deterministic cloth armor;
- work with Runic Filaments;
- equip worker teams;
- operate an Estate Textile Room;
- weave Astral and Worldsilk materials.

Long-term fantasy:

**Spinner â†’ Weaver â†’ Clothier â†’ Runewright â†’ Master Tailor**

---

# 3. CORE PRODUCTION MODES

Tailoring has three main production modes:

## Spinning

Raw Fibre â†’ Thread.

## Weaving

Thread / Cloth + Weave rules â†’ Cloth family.

## Pattern Assembly

Cloth + supporting materials â†’ finished equipment / utility.

All three grant:

- Tailoring XP;
- Recipe Mastery.

---

# 4. COMPLETE FIBRE LADDER

The main textile progression is inherited directly from Foraging.

| Tier | Raw Fibre | Thread | Base Cloth | Tailoring Lvl |
|---|---|---|---|---|
| T1 | Flaxgrass | Flax Thread | Flax Cloth | 5 |
| T2 | Rush Fibre | Rush Thread | Rushcloth | 15 |
| T3 | Nettle Fibre | Nettle Thread | Nettlecloth | 25 |
| T4 | Silken Grass | Silken Thread | Silkweave | 35 |
| T5 | Firegrass | Ember Thread | Embercloth | 45 |
| T6 | Snowflax | Frost Thread | Frostcloth | 55 |
| T7 | Galegrass | Storm Thread | Stormcloth | 65 |
| T8 | Cloudsilk Grass | Aether Thread | Aethercloth | 75 |
| T9 | Nightfibre | Umbral Thread | Umbralcloth | 85 |
| T10 | Astral Flax | Astral Thread | Astralcloth | 95 |

This is the locked baseline fibre contract between:

**Foraging â†’ Tailoring**

---

# 5. CORE LOOP â€” SPINNING

1. Select Thread recipe.
2. Select Batch Size.
3. Reserve Fibre.
4. Begin Spinning.
5. Tool / workstation progress runs automatically.
6. Resolve Preservation.
7. Resolve Thread Output bonus.
8. Deposit Thread.
9. Award XP / Mastery.
10. Repeat.

No active timing minigame.

---

# 6. CORE LOOP â€” WEAVING

1. Select Cloth / Weave recipe.
2. Select Batch Size.
3. Reserve Thread / Cloth.
4. Choose required Weave Type.
5. Weaving Work progresses automatically.
6. Resolve Preservation.
7. Resolve Cloth Output bonus where applicable.
8. Deposit Cloth.
9. Award XP / Mastery.
10. Repeat.

---

# 7. CORE LOOP â€” PATTERN ASSEMBLY

1. Select equipment / utility pattern.
2. Reserve Cloth + secondary materials.
3. Pattern Assembly begins.
4. Tailoring Power / Assembly modifiers reduce Work/Time.
5. Item completes.
6. Award XP / Mastery.
7. Repeat if Batch allows.

Finished gear is deterministic.

---

# 8. WEAVE TYPES

Tailoring's defining mid/late-game mechanic:

| Weave | Unlock | Recipe | Work Mult. | XP Mult. | Mastery Mult. | Identity |
|---|---|---|---|---|---|---|
| Plain Weave | 1 | 2 Thread â†’ 1 Cloth | 1.00x | 1.00x | 1.00x | Bulk baseline cloth |
| Dense Weave | 15 | 3 Thread â†’ 1 Dense Cloth | 1.25x | 1.15x | 0.95x | Armor / reinforced profession gear |
| Fine Weave | 35 | 3 Thread + 1 Runic Filament â†’ 1 Fine Cloth | 1.15x | 0.95x | 1.20x | High-quality profession clothes / mastery |
| Runic Weave | 65 | 2 Cloth + 1 Aether Filament â†’ 1 Runic Cloth | 1.35x | 1.25x | 1.30x | Magic gear / high-tier profession gear |
| Astral Weave | 95 | 2 Astralcloth + 1 Astral Filament â†’ 1 Astralweave | 1.50x | 1.35x | 1.40x | T10/endgame cloth |

Weave choice changes what the material is good for. `[Thread]` and `[Cloth]` in generic Weave recipes select grade-appropriate physical Tailoring stacks; they are recipe selectors, not separate generic inventory items. Fine Weave also consumes 1 Runic Filament as its T4-T6 magical input.

---

# 9. PLAIN WEAVE

Unlocked immediately.

Identity:

- cheapest;
- fastest;
- bulk textile;
- normal cloth armor;
- simple profession clothes;
- low-tier utility.

This is the default textile backbone.

---

# 10. DENSE WEAVE

Unlock around Tailoring 15.

Consumes more Thread.

Identity:

- reinforced cloth;
- tougher profession clothing;
- selected defensive cloth gear;
- worker uniforms;
- Reinforced Bowstrings.

Dense Weave should be more expensive, not simply a better Plain Cloth for every purpose.

---

# 11. FINE WEAVE

Unlock around Tailoring 35.

Identity:

- careful precision weave;
- profession clothing;
- Mastery-friendly production;
- premium light equipment;
- advanced utility.

Fine Weave trades bulk efficiency for:

- higher Mastery;
- higher-value recipes.

---

# 12. RUNIC WEAVE

Unlock around Tailoring 65.

For the T7-T9 grade, requires:

**Aether Filament**

Runic Filament is the T4-T6 textile/utility grade; Runecrafting defines all three canonical grades.

Identity:

- magic cloth armor;
- high-tier profession clothes;
- Runic Bowstrings;
- advanced worker / Estate textiles.

This is the main Tailoring â†” Runecrafting bridge.

---

# 13. ASTRAL WEAVE

Unlock around Tailoring 95.

Requires:

**Astral Filament**

Expected source:

Runecrafting.

Identity:

- T10 magic/light armor;
- Astral Bowstrings;
- endgame profession clothing;
- Estate / Holdings textiles.

---

# 14. SPINNING RECIPES

| Lvl | Tier | Recipe | Input | Output | Base Time | Base XP |
|---|---|---|---|---|---|---|
| 5 | T1 | Spin Flax Thread | 2 Flaxgrass | 3 Flax Thread | 2.0 | 6 |
| 3 | T1 | Weave Flax Cloth | 2 Flax Thread | 1 Flax Cloth | 3.0 | 8 |
| 15 | T2 | Spin Rush Thread | 2 Rush Fibre | 3 Rush Thread | 2.15 | 11 |
| 13 | T2 | Weave Rushcloth | 2 Rush Thread | 1 Rushcloth | 3.2 | 14 |
| 25 | T3 | Spin Nettle Thread | 2 Nettle Fibre | 3 Nettle Thread | 2.3 | 16 |
| 23 | T3 | Weave Nettlecloth | 2 Nettle Thread | 1 Nettlecloth | 3.4 | 20 |
| 35 | T4 | Spin Silken Thread | 2 Silken Grass | 3 Silken Thread | 2.45 | 21 |
| 33 | T4 | Weave Silkweave | 2 Silken Thread | 1 Silkweave | 3.6 | 26 |
| 45 | T5 | Spin Ember Thread | 2 Firegrass | 3 Ember Thread | 2.6 | 26 |
| 43 | T5 | Weave Embercloth | 2 Ember Thread | 1 Embercloth | 3.8 | 32 |
| 55 | T6 | Spin Frost Thread | 2 Snowflax | 3 Frost Thread | 2.75 | 31 |
| 53 | T6 | Weave Frostcloth | 2 Frost Thread | 1 Frostcloth | 4.0 | 38 |
| 65 | T7 | Spin Storm Thread | 2 Galegrass | 3 Storm Thread | 2.9 | 36 |
| 63 | T7 | Weave Stormcloth | 2 Storm Thread | 1 Stormcloth | 4.2 | 44 |
| 75 | T8 | Spin Aether Thread | 2 Cloudsilk Grass | 3 Aether Thread | 3.05 | 41 |
| 73 | T8 | Weave Aethercloth | 2 Aether Thread | 1 Aethercloth | 4.4 | 50 |
| 85 | T9 | Spin Umbral Thread | 2 Nightfibre | 3 Umbral Thread | 3.2 | 46 |
| 83 | T9 | Weave Umbralcloth | 2 Umbral Thread | 1 Umbralcloth | 4.6 | 56 |
| 95 | T10 | Spin Astral Thread | 2 Astral Flax | 3 Astral Thread | 3.3499999999999996 | 51 |
| 93 | T10 | Weave Astralcloth | 2 Astral Thread | 1 Astralcloth | 4.8 | 62 |

Normal baseline:

**2 Raw Fibre â†’ 3 Thread**

Then:

**2 Thread â†’ 1 Base Cloth**

Higher Weaves add their own conversion rules.

---

# 15. WHY THREAD EXISTS

Thread is not filler.

It is used directly by:

- Bowstrings;
- selected profession clothes;
- worker uniforms;
- utility recipes;
- future leather/textile hybrid items.

Therefore the chain is not always:

Fibre â†’ Thread â†’ Cloth â†’ Item.

Sometimes Thread is the final useful component.

---

# 16. CLOTH ARMOR ROLE

Tailoring owns deterministic baseline cloth/light-magic armor.

Slots:

| Armor Piece | Base Cloth Cost | Work Mult. | Slot | Role |
|---|---|---|---|---|
| Hood | 2 | 0.55 | Head | Light/Magic head slot |
| Robe | 5 | 1.6 | Body | Main cloth armor piece |
| Legwraps | 4 | 1.15 | Legs | Cloth leg armor |
| Gloves | 2 | 0.5 | Hands | Light hands |
| Slippers | 2 | 0.5 | Feet | Light feet |
| Mantle | 3 | 0.8 | Cape | Cloth/magic cape-style piece |

Combat will define exact stats.

Tailoring defines:

- item family;
- material tier;
- recipe;
- production rules.

---

# 17. COMPLETE CLOTH ARMOR LADDER

| Lvl | Tier | Item | Base Input | Slot | Role |
|---|---|---|---|---|---|
| 5 | T1 | Flax Cloth Hood | 2 Flax Cloth | Head | Light/Magic head slot |
| 5 | T1 | Flax Cloth Robe | 5 Flax Cloth | Body | Main cloth armor piece |
| 5 | T1 | Flax Cloth Legwraps | 4 Flax Cloth | Legs | Cloth leg armor |
| 5 | T1 | Flax Cloth Gloves | 2 Flax Cloth | Hands | Light hands |
| 5 | T1 | Flax Cloth Slippers | 2 Flax Cloth | Feet | Light feet |
| 5 | T1 | Flax Cloth Mantle | 3 Flax Cloth | Cape | Cloth/magic cape-style piece |
| 15 | T2 | Rushcloth Hood | 2 Rushcloth | Head | Light/Magic head slot |
| 15 | T2 | Rushcloth Robe | 5 Rushcloth | Body | Main cloth armor piece |
| 15 | T2 | Rushcloth Legwraps | 4 Rushcloth | Legs | Cloth leg armor |
| 15 | T2 | Rushcloth Gloves | 2 Rushcloth | Hands | Light hands |
| 15 | T2 | Rushcloth Slippers | 2 Rushcloth | Feet | Light feet |
| 15 | T2 | Rushcloth Mantle | 3 Rushcloth | Cape | Cloth/magic cape-style piece |
| 25 | T3 | Nettlecloth Hood | 2 Nettlecloth | Head | Light/Magic head slot |
| 25 | T3 | Nettlecloth Robe | 5 Nettlecloth | Body | Main cloth armor piece |
| 25 | T3 | Nettlecloth Legwraps | 4 Nettlecloth | Legs | Cloth leg armor |
| 25 | T3 | Nettlecloth Gloves | 2 Nettlecloth | Hands | Light hands |
| 25 | T3 | Nettlecloth Slippers | 2 Nettlecloth | Feet | Light feet |
| 25 | T3 | Nettlecloth Mantle | 3 Nettlecloth | Cape | Cloth/magic cape-style piece |
| 35 | T4 | Silkweave Hood | 2 Silkweave | Head | Light/Magic head slot |
| 35 | T4 | Silkweave Robe | 5 Silkweave | Body | Main cloth armor piece |
| 35 | T4 | Silkweave Legwraps | 4 Silkweave | Legs | Cloth leg armor |
| 35 | T4 | Silkweave Gloves | 2 Silkweave | Hands | Light hands |
| 35 | T4 | Silkweave Slippers | 2 Silkweave | Feet | Light feet |
| 35 | T4 | Silkweave Mantle | 3 Silkweave | Cape | Cloth/magic cape-style piece |
| 45 | T5 | Embercloth Hood | 2 Embercloth | Head | Light/Magic head slot |
| 45 | T5 | Embercloth Robe | 5 Embercloth | Body | Main cloth armor piece |
| 45 | T5 | Embercloth Legwraps | 4 Embercloth | Legs | Cloth leg armor |
| 45 | T5 | Embercloth Gloves | 2 Embercloth | Hands | Light hands |
| 45 | T5 | Embercloth Slippers | 2 Embercloth | Feet | Light feet |
| 45 | T5 | Embercloth Mantle | 3 Embercloth | Cape | Cloth/magic cape-style piece |
| 55 | T6 | Frostcloth Hood | 2 Frostcloth | Head | Light/Magic head slot |
| 55 | T6 | Frostcloth Robe | 5 Frostcloth | Body | Main cloth armor piece |
| 55 | T6 | Frostcloth Legwraps | 4 Frostcloth | Legs | Cloth leg armor |
| 55 | T6 | Frostcloth Gloves | 2 Frostcloth | Hands | Light hands |
| 55 | T6 | Frostcloth Slippers | 2 Frostcloth | Feet | Light feet |
| 55 | T6 | Frostcloth Mantle | 3 Frostcloth | Cape | Cloth/magic cape-style piece |
| 65 | T7 | Stormcloth Hood | 2 Stormcloth | Head | Light/Magic head slot |
| 65 | T7 | Stormcloth Robe | 5 Stormcloth | Body | Main cloth armor piece |
| 65 | T7 | Stormcloth Legwraps | 4 Stormcloth | Legs | Cloth leg armor |
| 65 | T7 | Stormcloth Gloves | 2 Stormcloth | Hands | Light hands |
| 65 | T7 | Stormcloth Slippers | 2 Stormcloth | Feet | Light feet |
| 65 | T7 | Stormcloth Mantle | 3 Stormcloth | Cape | Cloth/magic cape-style piece |
| 75 | T8 | Aethercloth Hood | 2 Aethercloth | Head | Light/Magic head slot |
| 75 | T8 | Aethercloth Robe | 5 Aethercloth | Body | Main cloth armor piece |
| 75 | T8 | Aethercloth Legwraps | 4 Aethercloth | Legs | Cloth leg armor |
| 75 | T8 | Aethercloth Gloves | 2 Aethercloth | Hands | Light hands |
| 75 | T8 | Aethercloth Slippers | 2 Aethercloth | Feet | Light feet |
| 75 | T8 | Aethercloth Mantle | 3 Aethercloth | Cape | Cloth/magic cape-style piece |
| 85 | T9 | Umbralcloth Hood | 2 Umbralcloth | Head | Light/Magic head slot |
| 85 | T9 | Umbralcloth Robe | 5 Umbralcloth | Body | Main cloth armor piece |
| 85 | T9 | Umbralcloth Legwraps | 4 Umbralcloth | Legs | Cloth leg armor |
| 85 | T9 | Umbralcloth Gloves | 2 Umbralcloth | Hands | Light hands |
| 85 | T9 | Umbralcloth Slippers | 2 Umbralcloth | Feet | Light feet |
| 85 | T9 | Umbralcloth Mantle | 3 Umbralcloth | Cape | Cloth/magic cape-style piece |
| 95 | T10 | Astralcloth Hood | 2 Astralcloth | Head | Light/Magic head slot |
| 95 | T10 | Astralcloth Robe | 5 Astralcloth | Body | Main cloth armor piece |
| 95 | T10 | Astralcloth Legwraps | 4 Astralcloth | Legs | Cloth leg armor |
| 95 | T10 | Astralcloth Gloves | 2 Astralcloth | Hands | Light hands |
| 95 | T10 | Astralcloth Slippers | 2 Astralcloth | Feet | Light feet |
| 95 | T10 | Astralcloth Mantle | 3 Astralcloth | Cape | Cloth/magic cape-style piece |

This gives every textile tier a reliable equipment path.

Combat can later provide:

- boss robes;
- rare magic gear;
- unique capes;
- upgrade materials.

Crafted Tailoring gear remains the deterministic baseline.

---

# 18. NO RANDOM ARMOR QUALITY

Tailoring does not create:

- Poor Robe;
- Fine Robe;
- Perfect Robe.

One recipe = one item.

Build diversity comes from:

- item tier;
- weave type;
- combat systems;
- future runic upgrades.

---

# 19. LIGHT / MAGIC IDENTITY

Baseline recommendation:

Tailoring-made armor leans toward:

- Magic;
- resource efficiency;
- lower physical defense;
- lighter defensive identity.

Exact Combat stats are not locked here.

The profession should not create Heavy Armor; Smithing owns that.

Leatherworking should own leather/ranged-oriented armor.

---

# 20. CAPE / MANTLE

Tailoring naturally owns:

**Mantles / Capes**

This provides a crafted baseline for the Cape slot.

Higher special Cape effects can come from:

- bosses;
- Chronicles;
- Runecrafting;
- special crafting.

---

# 21. PROFESSION CLOTHING

Tailoring is the primary producer of profession clothing.

General architecture:

| Template | Consumers | Slots | Purpose |
|---|---|---|---|
| Gatherer Garb | Mining / Woodcutting / Fishing / Foraging | Head/Body/Legs/Hands/Feet | Shared early gathering set |
| Artisan Garb | Smithing / Fletching / Cooking / Tailoring | Head/Body/Legs/Hands/Feet | Shared early production set |
| Specialist Set | One profession | Head/Body/Legs/Hands/Feet | Mid/late profession-specific gear |
| Worker Uniform | Worker team | Body/Legs/Hands/Feet | Simplified worker equipment |

This makes Tailoring permanently relevant even for non-Magic players.

---

# 22. SHARED EARLY PROFESSION SETS

Early game should avoid 14 unique full profession sets.

Use broad shared sets such as:

- Gatherer Garb;
- Artisan Garb.

Midgame and later:

profession-specific pieces become common.

This controls item bloat.

---

# 23. SPECIALIST PROFESSION CLOTHES

Tailoring can craft cloth parts of:

- Mining gear;
- Fishing gear;
- Foraging gear;
- Cooking gear;
- Fletching gear;
- Tailoring gear;
- Runecrafting gear;
- Alchemy gear.

Leatherworking / Smithing can contribute:

- gloves;
- reinforced boots;
- fittings;
- aprons;
- protective layers.

The final source depends on item theme.

---

# 24. WORKER UNIFORMS

Tailoring can craft simplified:

**Worker Uniforms**

These should not copy every player profession clothing piece.

Recommended worker structure:

- Worker Body;
- Worker Legs;
- Worker Hands;
- Worker Feet.

Team templates can equip multiple workers.

Purpose:

- efficiency;
- assignment identity;
- use for old textile tiers.

---

# 25. BOWSTRINGS

Tailoring owns the textile side of Fletching weapon strings.

| Tier Range | String | Tailoring Inputs | Main Consumer |
|---|---|---|---|
| T1â€“T3 | Simple Bowstring | 3 Thread | Fletching bows/crossbows |
| T4â€“T6 | Reinforced Bowstring | 1 Dense Cloth + 2 Thread | Mid-tier ranged weapons |
| T7â€“T9 | Runic Bowstring | 1 Runic Cloth + 1 Aether Filament | Late ranged weapons |
| T10 | Astral Bowstring | 1 Astralweave + 1 Astral Filament | T10 ranged weapons |
| T10+ | Worldroot Bowstring | Astral Bowstring + 2 Worldsilk Thread + 1 Astral Filament | Worldroot ranged crafting |

This closes the contract established in Fletching.

---

# 26. SIMPLE BOWSTRING

T1â€“T3.

Made from basic Thread.

Used by:

- Shortbows;
- Longbows;
- Light Crossbows;
- Heavy Crossbows.

No need for separate Bow/Crossbow string items.

---

# 27. REINFORCED BOWSTRING

T4â€“T6.

Uses Dense textile components.

Identity:

- stronger;
- better for heavier draw weights;
- supports mid-tier ranged progression.

---

# 28. RUNIC BOWSTRING

T7â€“T9.

Uses:

- Runic Cloth;
- Runic Filament.

This makes high-tier Fletching depend on:

**Foraging â†’ Tailoring â†’ Runecrafting â†’ Fletching**

---

# 29. ASTRAL BOWSTRING

T10.

Uses Astral Weave / Filament.

Supports:

- T10 Bows;
- T10 Crossbows;
- Starwood Rod / advanced utility where appropriate.

---

# 30. WORLDROOT BOWSTRING

Post-100 / endgame.

Expected ingredients:

- Astral Bowstring;
- Worldsilk Thread;
- rare endgame Runecrafting component.

Used by:

- Worldroot Longbow;
- Worldroot Heavy Crossbow.

---

# 31. TAILORING TOOL

Primary Tool:

**Tailor's Shears**

| Tier | Tool | Lvl | Tailoring Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Tailor's Shears | 1 | 5 | 2.15s | Starter | None |
| T1 | Copper Shears | 5 | 7 | 2.09s | Smithing | Fibre Preservation +2 pp |
| T2 | Iron Shears | 15 | 10 | 2.03s | Smithing | Spinning Time -3% |
| T3 | Cobalt Shears | 25 | 14 | 1.97s | Smithing | Thread Output +3 pp |
| T4 | Argent Shears | 35 | 19 | 1.91s | Smithing | Weaving Time -4% |
| T5 | Emberite Shears | 45 | 25 | 1.85s | Smithing | Material Preservation +4 pp |
| T6 | Frostsilver Shears | 55 | 32 | 1.79s | Smithing | Pattern Assembly Time -5% |
| T7 | Stormiron Shears | 65 | 40 | 1.73s | Smithing | Runic Weave Work -6% |
| T8 | Aetherite Shears | 75 | 49 | 1.67s | Smithing | Thread Output +5 pp |
| T9 | Umbral Shears | 85 | 59 | 1.61s | Smithing | Rare Cloth Preservation +5 pp |
| T10 | Astralite Master Shears | 95 | 70 | 1.55s | Smithing | Tailoring Power +8%; Assembly Time -5% |

Shears are permanent.

No durability.

---

# 32. TOOL ROLE

Shears represent:

- cutting;
- trimming;
- fabric preparation;
- precision work.

They influence:

- Tailoring Power;
- Spinning/Weaving/Assembly through mechanical bonuses.

Spinning also uses workstation infrastructure, but Shears remain the saved profession Tool slot.

---

# 33. TOOL SOURCE

Shears are primarily crafted by:

**Smithing**

with possible textile/leather grips.

Tailoring defines:

- equip level;
- Tailoring Power;
- profession effects.

---

# 34. TOOL UPGRADE CHAIN

Default:

**Previous Shears + current metal + grip â†’ next Shears**

Old Shears move naturally to workers.

---

# 35. TAILORING POWER

Weaving / Pattern recipes can use:

**Work Required**

Each action:

**Remaining Work -= Final Tailoring Power**

This keeps high-tier tools visibly meaningful.

Spinning can use time-based processing with Tool speed modifiers.

---

# 36. BASE WORK BY TIER

Recommended Base Work:

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
| T10 | 166 |

Weave multipliers come from the Weave table.

Pattern Assembly adds item-type multipliers.

---

# 37. PATTERN ASSEMBLY MULTIPLIERS

Recommended:

| Item | Work Mult. |
|---|---:|
| Hood | 0.70x |
| Gloves | 0.65x |
| Slippers | 0.65x |
| Legwraps | 1.10x |
| Mantle | 0.90x |
| Robe | 1.55x |
| Profession Body | 1.30x |
| Worker Uniform Body | 1.00x |
| Bowstring | 0.60x |

Large garments take meaningfully longer.

---

# 38. THREAD OUTPUT CHANCE

Spinning uses:

**Thread Output Chance**

On success:

+1 Thread.

Hard cap:

**75%**

This is not double output.

---

# 39. CLOTH OUTPUT CHANCE

Selected Weaving gear can grant:

**Cloth Output Chance**

Success:

+1 Cloth.

Recommended hard cap:

**50%**

Runic / Astral Weaves should be harder to scale because their inputs are more valuable.

---

# 40. MATERIAL PRESERVATION

Tailoring can preserve normal inputs.

Cap:

**50%**

Protected:

- Worldsilk;
- future boss textiles;
- unique endgame filaments.

---

# 41. BATCHING

Spinning and Weaving support large Batches.

Pattern Assembly supports smaller batches.

Baseline Textile Room determines maximum Batch / queue.

---

# 42. BATCH EFFICIENCY

Recommended:

| Batch | Time Mult./Craft |
|---:|---:|
| 1 | 1.00x |
| 5 | 0.96x |
| 10 | 0.93x |
| 25 | 0.90x |
| 50 | 0.88x |
| 100 | 0.86x |

Spinning gets an additional small large-batch benefit.

---

# 43. TAILORING MASTERY

Every important recipe has:

**Mastery 1â€“100**

Examples:

- Flax Thread;
- Nettlecloth;
- Runic Weave;
- Stormcloth Robe;
- Astral Bowstring.

---

# 44. MASTERY MILESTONES

| Recipe Mastery | Permanent Effect |
|---|---|
| 10 | Recipe action time -2% |
| 25 | Material Preservation +3 pp |
| 50 | Thread/Cloth Output Chance +4 pp or Assembly Time -3% |
| 75 | Recipe Mastery XP +8% |
| 100 | Action Time -4% additional; Preservation +3 pp additional |

Special utility recipes can swap irrelevant Output effects for category-specific equivalents.

---

# 45. SKILL-WIDE TAILORING MASTERY

Recommended:

| Completion | Reward |
|---:|---|
| 10% | Tailoring action time -2% |
| 25% | Material Preservation +2 pp; second preset |
| 50% | Worker Tailoring efficiency +5%; Thread Output +3 pp |
| 75% | Tailoring Power +5%; third preset |
| 100% | Action Time -4%; Preservation +3 pp; Master Tailor marker |

---

# 46. TAILORING SPECIALIZATIONS

Unlock:

**Tailoring Level 35**

Three baseline Specializations:

1. Spinner-Weaver;
2. Clothier;
3. Runewright.

All reversible.

---

# 47. SPINNER-WEAVER

Focus:

**Thread / Cloth throughput**

Effects:

- Spinning Time -10%;
- Weaving Time -10%;
- Thread Output Chance +12 pp;
- Material Preservation +4 pp on Fibre/Thread;
- Pattern Assembly Time +5%.

Best for:

- bulk textiles;
- Bowstrings;
- Estate;
- worker supply.

---

# 48. CLOTHIER

Focus:

**profession clothing / armor**

Effects:

- Pattern Assembly Work -12%;
- Cloth item Preservation +6 pp;
- Profession-clothing Mastery XP +10%;
- Robe/Mantle Assembly Time -8%;
- Spinning Time +5%.

Best for:

- player gear;
- profession sets;
- worker uniforms.

---

# 49. RUNEWRIGHT

Focus:

**Runic / Astral textiles**

Effects:

- Runic/Astral Weave Work -12%;
- Runic/Astral Filament Preservation +6 pp;
- Runic/Astral Mastery XP +12%;
- Runic Bowstring Time -10%;
- Plain/Dense weaving time +5%.

Best for:

- high-tier Magic armor;
- Fletching support;
- endgame cloth.

---

# 50. SPECIALIZATION SWITCHING

Rules:

- free;
- outside active action;
- changing Specialization cancels current unfinished craft;
- normal reserved materials return;
- presets remember Specialization.

---

# 51. PROFESSION CLOTHING â€” TAILOR'S OWN SETS

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Seamster Cap | Spinning Time -4% |
| T3 / L25 | Seamster Coat | Material Preservation +3 pp |
| T3 / L25 | Seamster Trousers | Tailoring Mastery XP +4% |
| T3 / L25 | Seamster Gloves | Weaving Time -4% |
| T3 / L25 | Seamster Shoes | Pattern Assembly Time -3% |
| Set | Seamster 5/5 | Thread Output +4 pp |
| T5 / L45 | Clothier Hood | Fine Weave Time -6% |
| T5 / L45 | Clothier Robe | Fine Cloth Preservation +4 pp |
| T5 / L45 | Clothier Legwraps | Profession-clothing Mastery XP +6% |
| T5 / L45 | Clothier Gloves | Profession clothing Assembly Time -5% |
| T5 / L45 | Clothier Slippers | Bowstring Time -5% |
| Set | Clothier 5/5 | Profession clothes Material Preservation +4 pp |
| T7 / L65 | Runewright Hood | Runic Weave Time -6% |
| T7 / L65 | Runewright Robe | Runic Filament Preservation +4 pp |
| T7 / L65 | Runewright Legwraps | Runic recipe Mastery XP +7% |
| T7 / L65 | Runewright Gloves | Runic Cloth Output +4 pp |
| T7 / L65 | Runewright Slippers | Magic armor Assembly Time -5% |
| Set | Runewright 5/5 | Runic Weave Work -5% |
| T9 / L85 | Master Tailor Hood | Tailoring Power +8% |
| T9 / L85 | Master Tailor Coat | Material Preservation +5 pp |
| T9 / L85 | Master Tailor Legwraps | Tailoring Mastery XP +8% |
| T9 / L85 | Master Tailor Gloves | Thread/Cloth Output +5 pp |
| T9 / L85 | Master Tailor Shoes | All Tailoring Time -5% |
| Set | Master Tailor 5/5 | Action Time -5%; Preservation +3 pp |

---

# 52. TAILORING JEWELRY

| Tailoring Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Spinner's Ring | Spinning Time -6% | Thread |
| 25 | Weaver's Pendant | Weaving Time -6% | Cloth |
| 35 | Conserver's Band | Material Preservation +5 pp | Efficiency |
| 45 | Patternmaker Charm | Pattern Assembly Work -7% | Clothing |
| 55 | Bowstring Loop | Bowstring Time -8%; String Preservation +4 pp | Fletching support |
| 65 | Runic Needle Seal | Runic Weave Work -8% | Runic cloth |
| 75 | Clothier's Chain | Profession-clothing Preservation +6 pp | Profession gear |
| 85 | Umbral Seam Charm | T8+ Weaving Time -6% | Late cloth |
| 95 | Astral Tailor Emblem | Tailoring Power +8%; Thread Output +4 pp | Endgame general |

Old situational jewelry can remain useful at 100.

---

# 53. SAVED LOADOUTS

Recommended presets:

## Bulk Textile

- Spinner-Weaver;
- Thread/Cloth output;
- large batch.

## Profession Gear

- Clothier;
- Pattern Assembly gear.

## Runic Textile

- Runewright;
- Filament preservation.

## Bowstring Supply

- String speed;
- preservation;
- Fletching reserve target.

## Mastery

- Mastery XP equipment;
- selected recipe.

---

# 54. TEXTILE ROOM â€” ESTATE INFRASTRUCTURE

Tailoring works early with a simple personal:

**Hand Loom**

Estate adds:

**Textile Room Iâ€“V**

| Facility | Estate Stage | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|
| Textile Room I | House | 20 | 5 | 2 | Spinning/Weaving presets; exact material analytics |
| Textile Room II | Lodge | 40 | 10 | 4 | Dense/Fine Weave automation; first worker |
| Textile Room III | Manor | 60 | 25 | 6 | Profession-clothing templates; 3 workers; string chains |
| Textile Room IV | Estate | 80 | 50 | 10 | Runic textile worker teams; reserve-driven schedules |
| Textile Room V | Holdings / late Estate | 100 | 100 | Expanded | Astral/Worldsilk production; 10 workers |

It is infrastructure, not a skill.

---

# 55. TEXTILE ROOM PURPOSE

Unlocks:

- bigger batches;
- weave presets;
- worker production;
- profession clothing templates;
- Runic textile automation;
- advanced scheduling.

Not merely flat speed.

---

# 56. TAILORING WORKERS

Workers can perform:

- Spinning;
- Weaving;
- Bowstrings;
- worker uniforms;
- selected profession clothing;
- cloth armor.

They consume real resources.

---

# 57. PROVEN RECIPE

Recipe becomes worker-eligible at:

**Recipe Mastery 10**

The player learns it first.

---

# 58. WORKER PROFICIENCY

Base Worker Tailoring Efficiency:

**50% + Proficiency Ã—0.50%**

Examples:

- 1 â†’ 50.5%;
- 50 â†’ 75%;
- 100 â†’ 100%.

Workers do not grant player Tailoring XP/Mastery.

---

# 59. FRONTIER PENALTY

Highest unlocked Tailoring Tier:

| Recipe Mastery | Worker Multiplier |
|---:|---:|
| 10â€“24 | 75% |
| 25â€“49 | 85% |
| 50â€“74 | 92.5% |
| 75â€“99 | 97.5% |
| 100 | 100% |

Older tiers have no frontier penalty.

---

# 60. WORKER TEXTILE ECONOMY

Workers are especially useful for:

- Thread reserves;
- Cloth reserves;
- Bowstrings;
- Worker uniforms.

Example:

> Maintain 5,000 Aether Thread.  
> Maintain 2,000 Aethercloth.  
> Maintain 250 Runic Bowstrings.

This is ideal repetitive infrastructure work.

---

# 61. OLD GEAR HAND-ME-DOWNS

Old:

- Shears;
- Tailoring clothes;
- Jewelry;

move naturally to workers.

Profession clothing made by Tailoring also becomes worker equipment where relevant.

---

# 62. ACTIVITY PLANNER

Starter:

- Tailor indefinitely;
- stop at quantity;
- stop at level;
- stop when inputs missing.

House:

- Mastery target;
- 2-step queue.

Lodge:

- resource reserves;
- 4-step queue;
- Threadâ†’Cloth chains.

Manor:

- 6-step production chains;
- Bowstring targets;
- profession clothing templates.

Estate:

- 10-step player queue;
- worker textile schedules;
- cross-profession reserves.

Holdings:

- worker departments;
- broad textile policies.

---

# 63. SPINNING â†’ WEAVING CHAIN

Example:

> Spin 3,000 Nettle Thread  
> â†’ Weave 1,000 Nettlecloth  
> â†’ keep 500 Thread reserve  
> â†’ use remaining Cloth for Tailoring.

This is a common automation chain.

---

# 64. FLETCHING STRING CHAIN

Example:

> Maintain 300 Runic Bowstrings.

Requirements:

- Aether Filament from Runecrafting;
- Runic Cloth from Tailoring.

Workers can maintain this once recipe is Proven.

---

# 65. PROFESSION-GEAR CHAIN

Example:

> Maintain enough Dense Cloth  
> â†’ assemble Mining / Foraging / Cooking specialist pieces  
> â†’ hand older pieces to workers.

This makes Tailoring a central account-support profession.

---

# 66. RESOURCE RESERVES

Tailoring respects reserves for:

- raw Fibre;
- Thread;
- Cloth;
- Runic Filament;
- Astral Filament;
- Heartwood/Fletching-linked components if used;
- rare future textiles.

Example:

**Astral Filament Reserve: 50**

Never consume below without override.

---

# 67. FORAGING â†” TAILORING

Foraging supplies:

- Flaxgrass;
- Rush Fibre;
- Nettle Fibre;
- Silken Grass;
- Firegrass;
- Snowflax;
- Galegrass;
- Cloudsilk Grass;
- Nightfibre;
- Astral Flax.

Tailoring processes the exact ladder.

No rename/duplication needed.

---

# 68. FARMING â†” TAILORING

Farming may later domesticate selected Fibre species.

This creates:

**Foraging discovery â†’ Farming bulk production â†’ Tailoring**

Tailoring should accept the same Fibre item regardless of whether it came from wild Foraging or domesticated Farming.

---

# 69. HUNTING â†” TAILORING

Hunting can supply:

- Sinew;
- Fur;
- specialty fibres;
- soft linings.

These can support:

- Reinforced Bowstrings;
- worker uniforms;
- hybrid profession clothing.

Do not make every Tailoring recipe require Hunting.

---

# 70. RUNECRAFTING â†” TAILORING

Runecrafting supplies:

- Runic Filament;
- Astral Filament;
- future sigil/rune cloth components.

Tailoring turns them into:

- Runic Weave;
- Astral Weave;
- high-tier Magic gear;
- Runic/Astral Bowstrings.

This is a major planned cross-profession loop.

---

# 71. TAILORING â†” FLETCHING

Tailoring supplies:

- Simple Bowstring;
- Reinforced Bowstring;
- Runic Bowstring;
- Astral Bowstring;
- Worldroot Bowstring.

Fletching consumes them for:

- Shortbows;
- Longbows;
- Crossbows;
- Fishing Rods where appropriate.

---

# 72. TAILORING â†” ESTATE

Estate can consume:

- Cloth;
- Dense Cloth;
- worker uniforms;
- curtains/bedding abstracted into textile components;
- Runic textile components;
- Long-Term Project materials.

Avoid creating separate decorative textile items unless mechanically useful.

---

# 73. OLD-TIER RELEVANCE

Old Fibre/Thread/Cloth remains useful through:

- worker uniforms;
- profession clothing;
- Bowstrings;
- Estate;
- cross-tier patterns;
- repairs not needed because no durability.

Do not force absurd T10 recipes to consume huge T1 cloth quantities.

---

# 74. CLOTH ARMOR UPGRADE PHILOSOPHY

Normal deterministic armor uses current-tier cloth.

Selected advanced armor can use:

- Dense Weave;
- Runic Weave;
- Astral Weave;
- rare Combat components.

Do not duplicate every slot for every weave automatically.

---

# 75. RUNIC ARMOR

Starting T7, selected crafted Magic gear can use:

**Runic Weave**

to create stronger/specialized cloth armor.

Exact combat effects belong to Combat / Runecrafting integration.

Tailoring owns construction.

---

# 76. ASTRAL ARMOR

T10 selected cloth armor uses:

**Astral Weave**

Expected to be:

- deterministic high-tier baseline;
- strong crafting path;
- not necessarily boss-BiS.

---

# 77. TAILORING XP

Every completed recipe grants Tailoring XP.

Relative XP weights:

| Category | XP Weight |
|---|---:|
| Spinning | 0.80x |
| Plain Weaving | 1.00x |
| Dense Weaving | 1.10x |
| Fine Weaving | 1.15x |
| Runic Weaving | 1.30x |
| Pattern Armor | 1.20x |
| Profession Clothing | 1.20x |
| Bowstring | 1.00x |

Global skill curve determines exact XP.

---

# 78. MASTERY XP

Recommended:

**Recipe Mastery XP = Tailoring XP Ã—0.40**

then apply:

- gear;
- jewelry;
- specialization;
- Skill-Wide Mastery.

---

# 79. SPINNING TIME FORMULA

**Final Spinning Time = Base Time Ã— Tool modifier Ã— gear Ã— Mastery Ã— Specialization Ã— facility**

Minimum:

**40% of Base**

---

# 80. WEAVING WORK FORMULA

**Final Work = Tier Base Work Ã— Weave Work Multiplier Ã— recipe modifiers**

Every Tool action:

**Remaining Work -= Final Tailoring Power**

When Work â‰¤0:

Cloth completes.

---

# 81. PATTERN ASSEMBLY FORMULA

**Final Work = Tier Base Work Ã— Pattern Multiplier Ã— Weave/gear modifiers**

Same Tailoring Power framework.

This keeps Tool progression consistent.

---

# 82. THREAD OUTPUT FORMULA

Base Thread output:

**3**

Roll:

**Thread Output Chance**

Success:

**+1 Thread**

Hard cap:

**75%**

No doubling.

---

# 83. CLOTH OUTPUT FORMULA

Base Cloth output:

**1**

If recipe supports Cloth Output Chance:

success:

**+1 Cloth**

Hard cap:

**50%**

Runic/Astral recipes may use reduced output-bonus scaling.

---

# 84. OFFLINE TAILORING

Save:

- active recipe;
- mode;
- Batch;
- Work Remaining;
- Spinning progress;
- Tool;
- loadout;
- Specialization;
- reserves;
- planner;
- worker assignments.

Offline uses identical formulas.

---

# 85. OFFLINE RESULTS

Show:

- Thread produced;
- Cloth produced;
- advanced Weaves;
- armor;
- profession clothes;
- Bowstrings;
- materials consumed;
- materials preserved;
- bonus outputs;
- Tailoring XP;
- Mastery;
- planner transitions;
- worker production separately.

---

# 86. TAILORING SCREEN â€” HIGH-LEVEL UI

Tabs:

- Spinning;
- Weaving;
- Cloth Armor;
- Profession Clothing;
- Bowstrings;
- Worker Textiles;
- Utility.

---

# 87. RECIPE CARDS

Show:

- icon;
- recipe;
- Tier;
- Level;
- inputs;
- output;
- Weave type;
- Mastery;
- expected time;
- worker eligibility;
- reserve warning.

---

# 88. ACTIVE PRODUCTION PANEL

Spinning:

- Fibre;
- Thread output;
- Action Time;
- Thread Output Chance.

Weaving:

- Work;
- Tailoring Power;
- actions remaining;
- Weave type.

Pattern Assembly:

- Work;
- components;
- output item;
- Preservation.

---

# 89. ANALYTICS

Show:

- Fibre/hour consumed;
- Thread/hour;
- Cloth/hour;
- advanced Cloth/hour;
- Bowstrings/hour;
- armor/hour;
- profession clothes/hour;
- Preservation/hour;
- Thread/Cloth bonus output/hour;
- XP/hour;
- Mastery/hour;
- ETA.

Workers separately.

---

# 90. COMPLETE TOOL PROGRESSION

| Tier | Tool | Lvl | Tailoring Power | Action Time | Source | Effect |
|---|---|---|---|---|---|---|
| T0 | Worn Tailor's Shears | 1 | 5 | 2.15s | Starter | None |
| T1 | Copper Shears | 5 | 7 | 2.09s | Smithing | Fibre Preservation +2 pp |
| T2 | Iron Shears | 15 | 10 | 2.03s | Smithing | Spinning Time -3% |
| T3 | Cobalt Shears | 25 | 14 | 1.97s | Smithing | Thread Output +3 pp |
| T4 | Argent Shears | 35 | 19 | 1.91s | Smithing | Weaving Time -4% |
| T5 | Emberite Shears | 45 | 25 | 1.85s | Smithing | Material Preservation +4 pp |
| T6 | Frostsilver Shears | 55 | 32 | 1.79s | Smithing | Pattern Assembly Time -5% |
| T7 | Stormiron Shears | 65 | 40 | 1.73s | Smithing | Runic Weave Work -6% |
| T8 | Aetherite Shears | 75 | 49 | 1.67s | Smithing | Thread Output +5 pp |
| T9 | Umbral Shears | 85 | 59 | 1.61s | Smithing | Rare Cloth Preservation +5 pp |
| T10 | Astralite Master Shears | 95 | 70 | 1.55s | Smithing | Tailoring Power +8%; Assembly Time -5% |

---

# 91. COMPLETE CLOTHING PROGRESSION

| Unlock | Item | Effect |
|---|---|---|
| T3 / L25 | Seamster Cap | Spinning Time -4% |
| T3 / L25 | Seamster Coat | Material Preservation +3 pp |
| T3 / L25 | Seamster Trousers | Tailoring Mastery XP +4% |
| T3 / L25 | Seamster Gloves | Weaving Time -4% |
| T3 / L25 | Seamster Shoes | Pattern Assembly Time -3% |
| Set | Seamster 5/5 | Thread Output +4 pp |
| T5 / L45 | Clothier Hood | Fine Weave Time -6% |
| T5 / L45 | Clothier Robe | Fine Cloth Preservation +4 pp |
| T5 / L45 | Clothier Legwraps | Profession-clothing Mastery XP +6% |
| T5 / L45 | Clothier Gloves | Profession clothing Assembly Time -5% |
| T5 / L45 | Clothier Slippers | Bowstring Time -5% |
| Set | Clothier 5/5 | Profession clothes Material Preservation +4 pp |
| T7 / L65 | Runewright Hood | Runic Weave Time -6% |
| T7 / L65 | Runewright Robe | Runic Filament Preservation +4 pp |
| T7 / L65 | Runewright Legwraps | Runic recipe Mastery XP +7% |
| T7 / L65 | Runewright Gloves | Runic Cloth Output +4 pp |
| T7 / L65 | Runewright Slippers | Magic armor Assembly Time -5% |
| Set | Runewright 5/5 | Runic Weave Work -5% |
| T9 / L85 | Master Tailor Hood | Tailoring Power +8% |
| T9 / L85 | Master Tailor Coat | Material Preservation +5 pp |
| T9 / L85 | Master Tailor Legwraps | Tailoring Mastery XP +8% |
| T9 / L85 | Master Tailor Gloves | Thread/Cloth Output +5 pp |
| T9 / L85 | Master Tailor Shoes | All Tailoring Time -5% |
| Set | Master Tailor 5/5 | Action Time -5%; Preservation +3 pp |

---

# 92. COMPLETE JEWELRY PROGRESSION

| Tailoring Lvl | Jewelry | Effect | Primary Use |
|---|---|---|---|
| 15 | Spinner's Ring | Spinning Time -6% | Thread |
| 25 | Weaver's Pendant | Weaving Time -6% | Cloth |
| 35 | Conserver's Band | Material Preservation +5 pp | Efficiency |
| 45 | Patternmaker Charm | Pattern Assembly Work -7% | Clothing |
| 55 | Bowstring Loop | Bowstring Time -8%; String Preservation +4 pp | Fletching support |
| 65 | Runic Needle Seal | Runic Weave Work -8% | Runic cloth |
| 75 | Clothier's Chain | Profession-clothing Preservation +6 pp | Profession gear |
| 85 | Umbral Seam Charm | T8+ Weaving Time -6% | Late cloth |
| 95 | Astral Tailor Emblem | Tailoring Power +8%; Thread Output +4 pp | Endgame general |

---

# 93. COMPLETE TEXTILE ROOM PROGRESSION

| Facility | Estate Stage | Max Batch | Queue | Main Unlocks |
|---|---|---|---|---|
| Textile Room I | House | 20 | 5 | 2 | Spinning/Weaving presets; exact material analytics |
| Textile Room II | Lodge | 40 | 10 | 4 | Dense/Fine Weave automation; first worker |
| Textile Room III | Manor | 60 | 25 | 6 | Profession-clothing templates; 3 workers; string chains |
| Textile Room IV | Estate | 80 | 50 | 10 | Runic textile worker teams; reserve-driven schedules |
| Textile Room V | Holdings / late Estate | 100 | 100 | Expanded | Astral/Worldsilk production; 10 workers |

---

# 94. COMPLETE LEVEL ROADMAP

| Tailoring Lvl | Major Unlock |
|---|---|
| 5 | Spin Flax Thread; Worn Tailor's Shears |
| 3 | Weave Flax Cloth |
| 5 | Copper Shears; T1 cloth armor family |
| 5 | Simple Bowstring |
| 15 | Spin Rush Thread |
| 13 | Weave Rushcloth |
| 15 | Iron Shears; Dense Weave; Spinner's Ring |
| 18 | T2 cloth armor |
| 25 | Spin Nettle Thread |
| 23 | Weave Nettlecloth |
| 25 | Cobalt Shears; Seamster set; Weaver's Pendant |
| 28 | T3 cloth armor / advanced profession clothing |
| 35 | Spin Silken Thread |
| 33 | Weave Silkweave |
| 35 | Argent Shears; Fine Weave; Tailoring Specializations; Conserver's Band |
| 38 | Reinforced Bowstring |
| 45 | Spin Ember Thread |
| 43 | Weave Embercloth |
| 45 | Emberite Shears; Clothier set; Patternmaker Charm |
| 48 | T5 cloth armor / profession gear |
| 55 | Spin Frost Thread |
| 53 | Weave Frostcloth |
| 55 | Frostsilver Shears; Bowstring Loop |
| 58 | T6 cloth armor |
| 65 | Spin Storm Thread |
| 63 | Weave Stormcloth |
| 65 | Stormiron Shears; Runic Weave; Runewright set; Runic Needle Seal |
| 68 | Runic Bowstring |
| 75 | Spin Aether Thread |
| 73 | Weave Aethercloth |
| 75 | Aetherite Shears; Clothier's Chain |
| 78 | T8 runic cloth armor |
| 85 | Spin Umbral Thread |
| 83 | Weave Umbralcloth |
| 85 | Umbral Shears; Master Tailor set; Umbral Seam Charm |
| 88 | T9 cloth armor / worker textile tier |
| 95 | Spin Astral Thread |
| 93 | Weave Astralcloth |
| 95 | Astralite Master Shears; Astral Weave; Astral Tailor Emblem |
| 98 | Astral Bowstring / T10 cloth armor |
| 100 | Tailoring cap; Worldsilk endgame line unlock path |

---

# 95. CHRONICLES â€” EARLY TAILORING

Suggested goals:

1. Spin Flax Thread.
2. Weave Flax Cloth.
3. Equip first Shears.
4. Craft first cloth armor.
5. Explain Thread vs Cloth.
6. Craft first Simple Bowstring.
7. Craft shared profession clothing.
8. Reach Recipe Mastery 10.

---

# 96. CHRONICLES â€” MIDGAME

Suggested:

- unlock Dense Weave;
- unlock Fine Weave;
- choose Tailoring Specialization;
- craft profession-specific clothing;
- build Textile Room II/III;
- make first recipe Proven;
- assign Tailoring worker;
- maintain Bowstring reserve.

---

# 97. CHRONICLES â€” LATE

Suggested:

- unlock Runic Weave;
- craft Runic Bowstring;
- craft Runic cloth armor;
- maintain worker uniforms;
- weave Astralcloth;
- unlock Astral Weave;
- reach Tailoring 100;
- prepare Worldsilk progression.

---

# 98. ENDGAME â€” WORLDSILK

Post-100 Tailoring uses:

**Worldsilk Fibre**

Expected source:

**Wildheart Expedition / Foraging**

Worldsilk is not part of normal T1â€“T10 progression.

---

# 99. WORLDSILK PROCESSING

Recommended:

**2 Worldsilk Fibre â†’ 3 Worldsilk Thread**

**3 Worldsilk Thread + 1 Astral Filament â†’ 1 Worldsilk Cloth**

Worldsilk Cloth feeds:

- Worldroot Bowstring;
- endgame cloth armor;
- Holdings textiles;
- top profession gear.

---

# 100. WORLDSILK UNLOCK

Recommended requirements:

- Tailoring 100;
- Textile Room V;
- Astralite Master Shears;
- Astral Weave Mastery 50;
- Foraging Wildheart Expedition unlocked;
- complete Chronicle:
  **Master of the Loom**

---

# 101. MASTER OF THE LOOM

Requirements:

- Tailoring 100;
- all normal Thread families crafted;
- at least 5 Cloth recipes Mastery 100;
- Runic Bowstring Mastery 50;
- Astralcloth Mastery 50;
- Textile Room V.

Reward:

- Worldsilk processing;
- fourth Tailoring preset;
- Master Tailor completion marker.

---

# 102. DEVTOOLS

Support:

- set Tailoring Level;
- set Recipe Mastery;
- set Skill-Wide Mastery;
- unlock Weaves;
- spawn Fibre/Thread/Cloth;
- spawn Runic/Astral Filaments;
- spawn Shears;
- spawn profession gear;
- set Specialization;
- set Textile Room tier;
- mark recipe Proven;
- set Work Remaining;
- instant craft;
- spawn worker;
- set worker Proficiency;
- simulate offline durations;
- compare expected vs actual output.

---

# 103. DATA MODEL

Recipe:

- ID;
- category;
- Tier;
- Level;
- Weave Type;
- inputs;
- output;
- Base Quantity;
- Work or Time;
- XP;
- Mastery ID;
- Batch eligibility.

Equipment pattern:

- slot;
- material class;
- Work multiplier;
- combat/profession tag.

Player:

- Recipe Mastery;
- Proven flags;
- presets;
- Specialization;
- reserves;
- planner.

---

# 104. ANTI-BLOAT RULES

Avoid:

- 10 separate bowstring items when 4 grades work;
- random cloth quality;
- unique thread for every tiny recipe;
- durability;
- manual sewing minigame;
- duplicate armor sets for every Weave;
- profession clothing explosion at early tiers.

Prefer:

- one Thread/Cloth line per Tier;
- 5 meaningful Weave types;
- selective advanced gear;
- shared early profession sets;
- strong Runecrafting/Fletching links.

---

# 105. MAJOR OPEN QUESTIONS â€” RECOMMENDED ANSWERS

## Should Tailoring process raw Fibre?

**Yes.**

Spinning is core.

---

## Should Thread be a real item?

**Yes.**

It has direct consumers such as Bowstrings and utility recipes.

---

## Should every Cloth tier have its own item?

**Yes.**

The 10-tier Fibre ladder is clear and already established.

---

## Should every Weave create a separate item for every tier?

**Not necessarily.**

Plain Cloth always exists.

Dense/Fine/Runic/Astral Weave should exist where progression needs them, but avoid mechanically useless duplicates.

---

## Should Tailoring make Magic armor?

**Yes, deterministic baseline cloth/light-magic armor.**

---

## Should Tailoring make all light armor?

**No.**

Leatherworking owns leather/ranged-oriented armor.

Tailoring owns cloth/magic.

---

## Should Tailoring make profession clothing?

**Yes.**

This is one of its largest permanent account roles.

---

## Should every profession have a unique set from Level 1?

**No.**

Use shared Gatherer/Artisan early sets.

Specialist gear expands later.

---

## Should Tailoring make Bowstrings?

**Yes.**

This closes Fletching's planned dependency.

---

## Should Fletching make its own strings?

**No.**

Keep textile production in Tailoring.

---

## Should Runecrafting be required for low-tier Tailoring?

**No.**

Only high-tier Runic/Astral textile paths depend on it.

---

## Should Runic Weave replace ordinary Cloth?

**No.**

It is a specialized advanced textile.

---

## Should Tailoring have random quality?

**No.**

Deterministic items.

---

## Should Tailoring have a sewing minigame?

**No.**

Idle-first automation.

---

## Should Shears have durability?

**No.**

---

## Should Tailoring workers use real materials?

**Yes.**

---

## When can workers use a recipe?

**Recipe Mastery 10.**

---

## Should workers craft player armor automatically?

**Only if explicitly assigned.**

Default worker role should be materials/Bowstrings/uniforms, not consuming rare cloth on gear without instruction.

---

## Should old Cloth remain useful?

**Yes.**

Through:
- profession clothing;
- workers;
- Bowstrings;
- Estate;
- cross-tier recipes.

---

## Should Fibre from Farming and Foraging be separate items?

**No.**

If Farming domesticates Flaxgrass, it produces the same Flaxgrass item.

No duplicate "Farmed Flaxgrass."

---

## Should Worldsilk be farmable?

**No baseline.**

Keep it tied to Wildheart / endgame Foraging.

---

## Should Worldsilk create a full T11 armor set?

**Not automatically.**

Use selective endgame recipes.

---

## Should Tailoring 100 finish the profession?

**No.**

Post-100:
- Mastery;
- Worldsilk;
- worker textile economy;
- endgame gear;
- completion.

---

# 106. COMPLETE LOCKED TAILORING BASELINE

1. Tailoring uses Spinning â†’ Weaving â†’ Pattern Assembly.
2. 10 Fibre tiers directly follow Foraging.
3. Each tier has Thread + base Cloth.
4. Weave types:
   - Plain;
   - Dense;
   - Fine;
   - Runic;
   - Astral.
5. Runic/Astral Weave bridge into Runecrafting.
6. Tailoring crafts deterministic cloth/magic armor.
7. Tailoring crafts profession clothing.
8. Tailoring crafts worker uniforms.
9. Tailoring crafts Bowstrings for Fletching.
10. Four broad Bowstring grades + Worldroot endgame string.
11. Shears are primary Tool.
12. No durability.
13. Thread/Cloth output bonuses use +1 output, not random quality.
14. Material Preservation cap 50%.
15. Recipe Mastery 1â€“100.
16. Skill-Wide Mastery.
17. Three reversible Specializations:
    - Spinner-Weaver;
    - Clothier;
    - Runewright.
18. Textile Room is Estate infrastructure.
19. Workers consume real materials.
20. Mastery 10 makes recipe Proven.
21. Workers gain Proficiency, not player XP/Mastery.
22. Workers are ideal Thread/Cloth/Bowstring suppliers.
23. Planner supports full Fibreâ†’Threadâ†’Clothâ†’item chains.
24. Tailoring strongly connects Foraging, Farming, Fletching, Runecrafting, Estate.
25. Post-100 endgame uses Worldsilk.
26. All baseline Tailoring content lives in this single MD.

---

# 107. FINAL SUMMARY

Tailoring begins with:

**Flaxgrass**

â†“

**Flax Thread**

â†“

**Flax Cloth**

â†“

**simple cloth armor / profession clothing**

â†“

**Dense / Fine Weaves**

â†“

**Bowstrings**

â†“

**specialist profession gear**

â†“

**Runic Weave**

â†“

**Runic Bowstrings / Magic gear**

â†“

**Textile Room workers**

â†“

**Astral Cloth / Astral Weave**

â†“

**Tailoring 100**

â†“

**Worldsilk**

The profession's identity is:

> **Foraging finds the fibre. Farming may later scale it. Tailoring turns it into the textile infrastructure used by combat, professions, workers, and Fletching.**

Core Tailoring identity:

> **Spin the fibre, choose the weave, assemble the pattern â€” and turn raw plants into the fabric economy of the entire account.**



# INTEGRATION HARDENING — THREAD, BOWSTRINGS, AND FILAMENTS

Tailoring's Thread recipes unlock when their Foraging Fibre source becomes available (5, 15, 25, 35, 45, 55, 65, 75, 85, and 95). Simple Bowstring is canonically Level 5, matching the first Fletching weapon gate; Reinforced Bowstring remains Level 38, Runic Bowstring Level 68, and Astral Bowstring Level 98. Reinforced strings consume Dense Cloth, Runic strings consume Runic Cloth + Aether Filament, and Astral strings consume Astralweave + Astral Filament. These are existing Tailoring weave outputs; undefined Cloth Strips intermediates are retired. Runecrafting owns all magical Filaments.




## Canonical Bowstring Recipes

| Tailoring Level | Output | Exact inputs |
|---:|---|---|
| 5 | Simple Bowstring | 3 matching-tier Thread (Flax, Rush, or Nettle) |
| 38 | Reinforced Bowstring | 1 Dense Cloth + 2 matching-tier Thread |
| 68 | Runic Bowstring | 1 Runic Cloth + 1 Aether Filament |
| 98 | Astral Bowstring | 1 Astralweave + 1 Astral Filament |
| 100+ | Worldroot Bowstring | 1 Astral Bowstring + 2 Worldsilk Thread + 1 Astral Filament |

Fibre enters Foraging at levels 5, 15, 25, 35, 45, 55, 65, 75, 85, and 95. Tailoring's matching Thread recipe now unlocks at those same levels. Simple Bowstring is Level 5 so the first Fletching bow is normally craftable; other Bowstring gates remain 38/68/98.









