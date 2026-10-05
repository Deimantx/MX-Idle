# 23 — UNIQUE COMBAT EQUIPMENT

**Status:** Complete Baseline Design Draft  
**Version:** 1.0  
**References:** `18_COMBAT_CORE_v1.1.md`, `19_COMBAT_EQUIPMENT_INTEGRATION_v0.2.md`, `22_COMBAT_CONTENT.md`  
**Purpose:** Turn Elite/Boss Combat rewards into deterministic, profession-integrated unique equipment without creating a new weapon family for every unusual item.

---

# 1. SYSTEM ROLE

Crafted T1–T10 equipment is the dependable progression baseline.

Unique Combat Equipment exists to create:

- memorable boss rewards;
- unusual weapon identities;
- build-changing passives;
- special off-hands;
- selective armor;
- reasons to revisit Elite/Boss content.

Unique does **not** mean:

- random affix quality;
- Legendary rarity rolls;
- item-level RNG;
- mandatory replacement of all crafted equipment.

A unique item should be mechanically recognizable.

---

# 2. MOST IMPORTANT RULE — NO FAMILY EXPLOSION

A unique weapon does not need a global weapon family.

Examples:

- Whip;
- Blowpipe;
- boss relic blade;
- unusual staff;
- future hybrid weapon.

Each item can directly define:

- Combat Style;
- one-handed/two-handed;
- damage type;
- Attack Interval;
- Weapon Power / Magic modifiers;
- Accuracy;
- Ammo/resource rule;
- Stances if any;
- passive;
- Special.

`weaponArchetype` is optional metadata only.

Do not create:

`Whip Family`, `Blowpipe Family`, `Chainblade Family`, `Relic Family`

just because one item exists.

---

# 3. UNIQUE ACQUISITION

| Event | Baseline Reward | Purpose |
|---|---|---|
| First Elite kill | 1 guaranteed matching Elite Component | Ensures each Tier's unique recipe can be completed deterministically |
| Repeat Elite kills | Chance for additional Elite Component; pity/counter may be added later | Allows replacement/alternate future crafts without blocking first progression |
| First Boss kill | 1 guaranteed protected Boss Component + Blueprint unlock | Deterministic Tier reward |
| Repeat Boss kills | Chance for additional Boss Component; pity/counter may be added later | Supports repeat crafting without mandatory infinite grind |
| Unique craft | Consumes normal crafted gear/materials + Elite Component + Boss Component | Keeps professions relevant |

The first unique per Tier is therefore predictable.

The player is not expected to kill a boss 500 times before receiving the Tier's identity reward.

---

# 4. BLUEPRINT MODEL

Boss first kill unlocks:

**Unique Blueprint**

The Blueprint is:

- permanent account knowledge;
- not an inventory item;
- stored in progression state.

The item itself is then crafted through the appropriate profession.

This lets Combat reward the design while professions perform the manufacturing.

---

# 5. WHY CRAFT THE UNIQUE INSTEAD OF DIRECT DROP

Direct full-item drops would bypass:

- Smithing;
- Fletching;
- Leatherworking;
- Runecrafting;
- Jewelcrafting.

Blueprint + components means:

**Combat unlocks exceptional equipment. Professions build it.**

That is the intended MX-Idle economy.

---

# 6. COMPONENT SAFETY

Boss Components are:
- protected by default;
- Auto Offer OFF;
- worker auto-consume OFF unless explicit;
- visible in recipe requirements.

Elite Components:
- default protected until at least one associated unique has been crafted;
- then player may unprotect them.

---

# 7. COMPLETE T1–T10 UNIQUE BASELINE

| Tier | Unique Item | Type | Damage / Role | Boss | Required Unique Components | Final Assembly | Recipe | Core Stats | Passive | Special |
|---|---|---|---|---|---|---|---|---|---|---|
| T1 | Rusthook Blade | 1H Melee | Slash / Stab | Captain Veyr | Ironjaw Tusk + Veyr's Broken Crest | Smithing | Copper Sword + 1 Ironjaw Tusk + 1 Veyr's Broken Crest + 2 Copper Ingots | Power 21; Accuracy +90; 2.20s; +2 pp Crit Rate | Hooked Tempo: every 4th successful Basic hit gains +10 pp Accuracy and deals +15% final damage | Hook and Rip — 35 Stamina: 1.30× Stab + Bleed 15% of final hit over 6s |
| T2 | Mirecoil Whip | Standalone 1H Melee | Slash | Miremother Ilyss | Mirecoil Gland + Miremother Broodheart | Leatherworking | 1 Tough Leather Grip Wrap + 1 Mirecoil Gland + 1 Miremother Broodheart + 2 Iron Ingots | Power 25; Accuracy +118; 1.95s; +1.5 pp Crit Rate | Coiling Lash: every 3rd successful Basic hit deals +20% final damage | Venom Lash — 40 Stamina: 1.25× Slash + Poison 4% target Max HP over 8s |
| T3 | Forgeheart Maul | 2H Melee | Crush | Forgemaster Korr | Granite Core + Korr's Forge Sigil | Smithing | Cobalt Mace + 1 Granite Core + 1 Korr's Forge Sigil + 4 Cobalt Ingots | Power 44; Accuracy +118; 3.00s; +10 pp Crush Penetration; +15% Crit Damage | Tempered Impact: successful Crush hit against ≥25% Crush Resistance gains +10% final damage | Forgequake — 55 Stamina: 1.80× Crush + -18 pp Crush Resistance for 8s |
| T4 | Moonward Bulwark | Melee Off-hand | Defensive | The Pale Castellan | Moonbound Crest + Pale Crown Fragment | Smithing | Argent Shield + 1 Moonbound Crest + 1 Pale Crown Fragment + 3 Argent Ingots | Physical Resistances +10 pp; Magic Resistances +4 pp; Melee Evasion +18; attack interval +0.05s | Pale Guard: after taking an enemy Special, gain +8 pp matching Resistance for the next enemy action | No weapon Special — off-hand passive item |
| T5 | Cinderchain Whip | Standalone 1H Melee | Slash | Cindermaw | Magmahorn Core + Cindermaw Core | Smithing + Leatherworking | Mirecoil Whip + 1 Magmahorn Core + 1 Cindermaw Core + 2 Emberite Ingots + 1 Ember Grip Wrap | Power 57; Accuracy +205; 1.85s; +2 pp Crit Rate | Searing Chain: every 3rd successful Basic hit applies Burn equal to 12% of final hit over 6s | Chain Inferno — 45 Stamina: 1.45× Slash + Burn 25% of final hit over 8s |
| T6 | Winterheart Ward | Magic Off-hand | Ward | Winter Matriarch | Whitehorn Tusk + Winterheart | Runecrafting | Topaz Ward + 1 Whitehorn Tusk + 1 Winterheart + 6 Empowered Spirit Runes + 4 Empowered Frost Runes | Magic Resistances +12 pp; Melee Resistances +5 pp; Magic Accuracy +28; Rune Preservation +8 pp | Winter Calm: Chill duration on player -30%; Water Resistance +6 pp additional | No weapon Special — off-hand passive item |
| T7 | Venomglass Blowpipe | Standalone Ranged | Puncture | Skybreaker Raal | Venomglass Sac + Skybreaker Dynamo | Fletching | 1 Stormwillow Utility Blank + 1 Venomglass Sac + 1 Skybreaker Dynamo + 1 Precision Trigger Assembly | Weapon Power 50; Accuracy +300; 1.65s; +6 pp Puncture Penetration; 2H | Toxic Rhythm: every 4th successful Basic hit applies Poison 5% target Max HP over 10s | Venom Barrage — 45 Stamina: 4 ×0.50× Puncture; consumes 4 Venomglass Darts |
| T8 | Oracle Prism | Magic Off-hand | Adaptive Ward | Aetherbound Oracle | Prismatic Coil + Oracle Lens | Jewelcrafting + Runecrafting | Aetherite Ward + 1 Prismatic Coil + 1 Oracle Lens + 1 Faceted Aquamarine + 6 Resonant Arcane Runes | Magic Accuracy +36; Rune Preservation +7 pp; all Magic Resistances +8 pp | Adaptive Refraction: selected spell element gains +8 pp matching Penetration and +8 pp matching Resistance | No weapon Special — off-hand passive item |
| T9 | Nightglass Carapace | Unique Armor | Armor | The Hollow Regent | Nightglass Core + Hollow Crown | Smithing + Leatherworking | Umbral Plate Armor + 1 Nightglass Core + 1 Hollow Crown + 4 Umbral Ingots + 2 Umbral Leather | Melee Res +30% each; Ranged Res +35% each; Magic Res +14% each; Melee/Ranged Evasion hybrid | Hollow Shell: after losing ≥20% Max HP from one enemy action, gain +10 pp matching Resistance for next 2 enemy actions | Armor passive — no Special |
| T10 | Zenith Staff | Standalone 2H Magic | Selected spell element | The Zenith Warden | Astral Heart + Zenith Core | Runecrafting | Starwood Staff + 1 Astral Heart + 1 Zenith Core + 1 Faceted Astral Prism + 10 Astral Arcane Runes + 6 Astral Spirit Runes | Spell Damage +50%; Magic Accuracy +500; Rune Preservation +15 pp; all elemental Penetration +12 pp; +0.05s Cast | Zenith Attunement: when selected spell hits an enemy vulnerability (<0 Resistance), gain +10% final direct spell damage | Zenith Convergence — 60 Stamina: 2.10× selected element +15 pp matching Penetration; normal Runes +2 Astral Arcane Runes |

These values are content baselines, not final balance.

They can be globally tuned once playable.

---

# 8. T1 — RUSTHOOK BLADE

Source:
**Captain Veyr**

Purpose:
early example that a boss unique can behave differently without invalidating normal Sword progression.

It remains:
- 1H;
- Slash/Stab;
- Shield compatible.

Identity:
- fast;
- Crit-friendly;
- deterministic every-fourth-hit payoff.

Its Special:
**Hook and Rip**
adds Bleed rather than simply being a bigger Sword hit.

---

# 9. T2 — MIRECOIL WHIP

This is the first true standalone weapon.

It is **not** a Sword/Dagger family member.

Rules:
- 1H Melee;
- Slash;
- fast attack;
- no Stab stance;
- normal Melee Accuracy/Evasion framework.

Identity:
every third successful hit gets stronger.

This creates deterministic rhythm without a manual combo system.

---

# 10. T3 — FORGEHEART MAUL

2H Crush weapon.

It gives up:
- Shield;
- faster attacks

for:
- heavy Power;
- Crush Penetration;
- resistance-breaking Special.

It may use Mace animation assets as a temporary implementation shortcut, but mechanically it is its own item.

---

# 11. T4 — MOONWARD BULWARK

Unique defensive off-hand.

It does not attack independently.

Its value comes from:
- strong physical protection;
- modest Magic defense;
- reactive protection after enemy Specials.

Because enemy sequence is deterministic, the player can understand when Pale Guard matters.

---

# 12. T5 — CINDERCHAIN WHIP

This is an actual **upgrade of Mirecoil Whip**.

| Earlier Item | Upgrade | Reason |
|---|---|---|
| Mirecoil Whip (T2) | Cinderchain Whip (T5) | Keeps an early unique relevant instead of creating another unrelated whip family |
| Normal crafted Ward | Winterheart Ward / Oracle Prism | Unique off-hands upgrade deterministic crafted base |
| Umbral Plate Armor | Nightglass Carapace | Unique armor builds on profession-crafted gear |
| Starwood Staff | Zenith Staff | Endgame boss reward preserves Runecrafting/Fletching/Jewelcrafting inputs |

This is intentional old-tier relevance.

Do not create:
- Mirecoil Whip II;
- Ember Whip family;
- ten Whip tiers.

There are simply two special Whip items connected by one upgrade path.

---

# 13. CINDERCHAIN BURN

Every third successful Basic hit applies Burn.

This counter is deterministic.

Counter rules:
- count successful Basic hits only;
- misses do not increment;
- Special hits do not increment;
- counter persists across monsters while Combat remains active;
- counter resets when Combat stops.

---

# 14. T6 — WINTERHEART WARD

Magic off-hand.

Identity:
- elemental defense;
- Rune economy;
- specific Chill resistance.

It is strongest in:
- Water/Frost content;
- fights where Staff damage is not worth losing Ward safety.

---

# 15. T7 — VENOMGLASS BLOWPIPE

Standalone Ranged weapon.

It does not belong to:
- Shortbow;
- Longbow;
- Crossbow.

It uses its own Ammo.

| Item | Owner | Recipe | Combat Rule |
|---|---|---|---|
| Venomglass Darts | Fletching | 1 Stormiron Projectile Head Bundle + 1 Venomglass Sac → 30 Darts | Used only by Venomglass Blowpipe; Puncture; Ammo Power 18; 1 per Basic hit |

The weapon is allowed to create one unique Ammo stack because its resource behavior is a meaningful part of the item.

Do not generalize this into ten Dart tiers.

---

# 16. BLOWPIPE AMMO RULE

Venomglass Darts:
- stack in Bank;
- use normal Ammo Preservation;
- one per Basic Attack;
- four per Venom Barrage;
- do not work in bows/crossbows.

The Blowpipe cannot use:
- Arrows;
- Bolts.

---

# 17. TOXIC RHYTHM

Every fourth successful Basic hit applies Poison.

Rules:
- successful Basic hit increments;
- miss does not;
- Special does not increment;
- Poison refreshes using current strongest value;
- counter resets when Combat stops.

---

# 18. T8 — ORACLE PRISM

Unique Magic off-hand.

It adapts to the currently selected spell.

If selected spell is Fire:
- Fire Resistance +8 pp extra;
- Fire Penetration +8 pp.

If Water:
- Water equivalents.

This creates one multi-element off-hand rather than four separate elemental Wards.

---

# 19. T9 — NIGHTGLASS CARAPACE

Unique unified Armor item.

It deliberately breaks normal Heavy/Ranged/Magic crafted triangle.

Profile:
- strong Melee;
- very strong Ranged;
- moderate Magic.

It is not automatically best for every encounter because:
- it occupies the largest defensive slot;
- Magic protection is lower;
- no offensive stats baseline.

Its passive specifically helps against large predictable enemy actions.

---

# 20. T10 — ZENITH STAFF

Endgame baseline unique Magic weapon.

Identity:
- high Spell Damage;
- high Magic Accuracy;
- Rune Preservation;
- broad elemental Penetration;
- rewards attacking an actual elemental vulnerability.

It does not introduce:
- Astral damage type.

It still casts:
- Air;
- Fire;
- Water;
- Earth.

---

# 21. UNIQUE EQUIPMENT CATEGORIES

| Item Type | Baseline Philosophy |
|---|---|
| Unique weapon | May break normal archetype rules; still must define exact hands/type/timing/resource/Special |
| Unique off-hand | No independent attack timer baseline; identity comes from defense/utility/passive |
| Unique armor | May use asymmetric nine-resistance profile |
| Unique ammo | Allowed for a one-off weapon if its economy is explicitly defined |
| Boss component | Protected crafting input, not equipment itself |

---

# 22. ELITE COMPONENT USAGE

| Tier | Elite Component | Primary v1.0 Use |
|---|---|---|
| T1 | Ironjaw Tusk | Rusthook Blade |
| T2 | Mirecoil Gland | Mirecoil Whip |
| T3 | Granite Core | Forgeheart Maul |
| T4 | Moonbound Crest | Moonward Bulwark |
| T5 | Magmahorn Core | Cinderchain Whip |
| T6 | Whitehorn Tusk | Winterheart Ward |
| T7 | Venomglass Sac | Venomglass Blowpipe + Darts |
| T8 | Prismatic Coil | Oracle Prism |
| T9 | Nightglass Core | Nightglass Carapace |
| T10 | Astral Heart | Zenith Staff |

This ensures all ten existing Elite Components have at least one concrete consumer.

No dead Elite Component baseline.

---

# 23. BOSS COMPONENT USAGE

Each Boss Component has exactly one primary unique recipe in v1.0.

Later content may add:
- alternate recipes;
- Guild projects;
- upgrades.

Do not consume Boss Component in routine recipes.

---

# 24. REPEAT BOSS FARMING

First kill:
- guaranteed component;
- guaranteed Blueprint.

Repeat kills:
- can provide additional component;
- normal loot;
- Offering loot;
- Guild progress later.

Exact repeat drop rate and pity are balance work.

The first unique is never gated behind that future rate.

---

# 25. REPEAT ELITE FARMING

First kill:
- guaranteed one Elite Component.

Repeat:
- future drop rate/pity.

This guarantees a Tier clear can actually craft its unlocked unique if normal materials are available.

---

# 26. UNIQUE ITEM QUALITY

There is no:
- low-roll Rusthook Blade;
- perfect Rusthook Blade;
- Legendary Rusthook Blade.

Every copy has the same stats.

Progression is deterministic.

---

# 27. NO RANDOM AFFIXES

Unique identity is authored.

Do not roll:
- +Crit;
- +Damage;
- +Resistance

randomly.

If later an enchantment system exists, that is a separate system.

---

# 28. UNIQUE ITEMS AND JEWELRY

This document does not replace the modular Jewelcrafting Ring/Necklace system.

Boss components may later unlock:
- special Frames;
- special Gem effects

through a Jewelcrafting expansion.

Baseline unique table focuses on Weapons/Off-hands/Armor.

---

# 29. UNIQUE ITEMS AND GUILDS

Future Guilds may:
- require a boss component;
- unlock an alternate unique Blueprint;
- upgrade an existing unique.

Guilds should not randomly award a superior copy of an existing unique.

---

# 30. UNIQUE SPECIALS

A unique weapon normally has:
**one primary Special**

same as Combat Core.

Its Special may be completely item-specific.

No new family required.

---

# 31. UNIQUE PASSIVES

One unique item should usually have:
- one strong identity passive;
- plus normal item stats.

Avoid five-paragraph passives.

The player should understand why they would equip it.

---

# 32. DETERMINISTIC HIT COUNTERS

Whip/Blowpipe passives use deterministic counters.

Save:
- current counter;
- source item ID.

If equipment changes:
- old item's counter resets.

Reload must not reset a counter while the same combat/equipment state remains active.

---

# 33. STATUS EFFECTS

Unique items reuse existing statuses where possible:
- Bleed;
- Burn;
- Poison;
- Resistance Break.

Do not invent:
- Scorchbrand;
- Venombrand;
- Darkfirebrand

as duplicate mechanics.

---

# 34. UNIQUE ARMOR RESISTANCES

Unique Armor may set all nine values individually.

It is not required to follow:
- Heavy triangle;
- Ranged triangle;
- Magic triangle.

That flexibility is part of unique gear identity.

---

# 35. PROFESSION OWNERSHIP

## Smithing
- Rusthook Blade
- Forgeheart Maul
- Moonward Bulwark
- Cinderchain metal assembly
- Nightglass Carapace

## Leatherworking
- Mirecoil Whip
- Cinderchain binding
- Nightglass Carapace support

## Fletching
- Venomglass Blowpipe
- Venomglass Darts

## Runecrafting
- Winterheart Ward
- Oracle Prism magical assembly
- Zenith Staff

## Jewelcrafting
- Oracle Prism gemstone precision
- Zenith Staff Astral Prism input

This keeps the crafting web meaningful.

---

# 36. RECIPE VISIBILITY

Once Blueprint unlocks:
- recipe appears in owning profession;
- pinned under `Unique / Boss Equipment`;
- shows missing components;
- links Boss/Elite source.

Before unlock:
show silhouette/name in Boss reward preview if desired.

---

# 37. ITEM INSPECTION

Unique item tooltip should show:
- source Boss;
- Blueprint;
- equipment requirements;
- exact stats;
- passive;
- Special;
- recipe;
- component sources.

Do not hide mechanics in flavor text.

---

# 38. UNIQUE ITEM ICON LANGUAGE

Unique equipment should visually differ from deterministic crafted gear.

But do not use random rarity color as mechanical quality.

A distinct:
- boss frame;
- relic border;
- source icon

is enough.

---

# 39. ONE-TIME VS REPEAT CRAFT

Baseline:
unique recipes can be repeated if the player has another Boss/Elite Component.

No one-time hard lock.

Reason:
- future alternate loadouts;
- mistakes;
- save migration;
- potential future systems.

No item destruction baseline means repeat crafting will rarely be mandatory.

---

# 40. UNIQUE EQUIPMENT AND WORKERS

Combat uniques are player combat gear.

Workers do not normally use:
- Combat weapons;
- Combat armor

unless a future worker-combat system is explicitly designed.

Do not route these into profession worker equipment automatically.

---

# 41. UNIQUE EQUIPMENT AND DEATH

Normal Combat death does not destroy unique equipment.

No re-farming due to death.

---

# 42. UNIQUE ECONOMY BOUNDARY

Unique equipment should be strong/interesting.

It should not make:
- all same-tier crafted gear irrelevant;
- profession progression pointless.

A unique may dominate a particular matchup.

It should not automatically dominate every enemy.

---

# 43. EXAMPLE CHOICE

T5 player owns:
- Emberite Sword;
- Emberite Battle Axe;
- Cinderchain Whip.

Enemy:
- high Slash Resistance;
- low Stab Resistance.

Cinderchain Whip may be excellent generally, but Sword/Stab can still be correct.

This is intended.

---

# 44. BLUEPRINT SAVE DATA

Store:
- Blueprint ID;
- unlocked;
- source Boss;
- unlock timestamp optional.

Do not store Blueprint as inventory stack.

---

# 45. UNIQUE COMPONENT SAVE DATA

Elite/Boss Components are normal stackable Bank items with:
- stable Item ID;
- protected flag default;
- source metadata.

---

# 46. REGISTRY REQUIREMENTS

Add every unique to:
- Item Registry;
- Recipe Registry;
- Gear Matrix;
- Unlock Dependency Matrix.

Add:
- Venomglass Darts.

Every recipe input must resolve to a real item.

---

# 47. COMBAT CONTENT BACK-PATCH

`22_COMBAT_CONTENT.md` unique hooks should point to these final item names.

Replace vague hooks where necessary:
- Forgeheart Mace → Forgeheart Maul
- Toxic/Venomglass Blowpipe hook → Venomglass Blowpipe
- Oracle weapon hook → Oracle Prism
- Nightglass hook → Nightglass Carapace
- Zenith hook → Zenith Staff

---

# 48. DEVTOOLS

| Control | Purpose |
|---|---|
| Grant Elite Component | Recipe testing |
| Grant Boss Component | Recipe testing |
| Unlock Blueprint | Progression testing |
| Reset Blueprint | First-kill test |
| Craft unique without cost | Combat test only |
| Force passive counter | Every-3rd/every-4th hit validation |
| Set unique Ammo | Blowpipe testing |
| Show unique stat breakdown | Verify baseline + unique effects |

---

# 49. VALIDATION

Before implementation is considered synchronized:

1. All 10 Elite Components have consumers.
2. All 10 Boss Components have consumers.
3. Every unique recipe uses real canonical inputs.
4. Every unique has stable ID.
5. Every weapon defines Style/Hands/Type/Interval.
6. Every weapon defines resource rule.
7. Every unique Special defines Stamina cost.
8. Off-hands have no independent attack timer.
9. No unique invents undefined damage type.
10. No unique requires new family unless future content genuinely has multiple related weapons.
11. Unique statuses resolve to existing status framework.
12. First clear can produce at least one deterministic unique recipe path.

---

# 50. LOCKED BASELINE

1. Crafted T1–T10 gear remains primary deterministic baseline.
2. Unique equipment is authored, not randomly rolled.
3. No random affixes.
4. No weapon-family requirement for unique weapons.
5. First Elite kill guarantees one Elite Component.
6. First Boss kill guarantees one Boss Component + Blueprint.
7. Unique is crafted through existing professions.
8. First unique per Tier therefore has deterministic access.
9. Repeat Elite/Boss farming may provide extra components later.
10. Boss Components protected by default.
11. Elite Components have real consumers.
12. Whips remain standalone items.
13. Venomglass Blowpipe is standalone.
14. Blowpipe uses one-off Venomglass Darts.
15. Cinderchain Whip upgrades Mirecoil Whip.
16. Unique off-hands do not attack independently.
17. Unique armor may break normal armor triangle.
18. Unique equipment cannot introduce undeclared damage types.
19. Unique equipment does not use random quality.
20. Final numeric balance waits until playable.

---

# 51. NEXT EXPANSION

After playable baseline, Unique Combat Equipment can expand through:
- Dungeon-specific drops;
- Guild Blueprints;
- post-100 variants;
- anomaly/endless content;
- alternate boss recipes.

Do not fill every monster with a unique drop before the core game works.
