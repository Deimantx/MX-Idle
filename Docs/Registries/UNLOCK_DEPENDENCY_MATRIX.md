# Unlock Dependency Matrix

**Status:** Canonical cross-profession gate review v1.0

This matrix records the shared target bands and calls out known deliberate dependencies. Profession tables remain the source for exact XP and numeric balance.

| Producer â†’ consumer | Resource / unlock | Target timing contract | Review |
|---|---|---|---|
| Mining â†’ Runecrafting | Raw Essence | Mining T1; supports Runecrafting T1â€“T3 | Move source from former L28 to L1/T1 |
| Mining â†’ Runecrafting | Runic Crystal | Mining available by L31/T4; supports Runecrafting T4â€“T6 | Move former L58 source to L31 |
| Mining â†’ Runecrafting | Aether Essence | Mining available by L61/T7; supports Runecrafting T7â€“T9 | Move former L88 source to L61 |
| Runecrafting | Astral Essence | Refine in T10 from Aether Essence + Astral Core Fragment | No new Mining deposit required |
| Woodcutting â†’ Fletching/Tailoring | Resin / Fibres | Resin is Woodcutting; Foraging owns wild Fibres; Tailoring Thread unlocks with Fibre source L5–95 | Avoid cross-source label drift |
| Tailoring â†’ Fletching | Bowstrings | Simple L8, Reinforced L38, Runic L68, Astral L98 | Simple bowstring standardized at L8 per current roadmap (implementation contract) |
| Smithing â†’ Fletching | Projectile Head Bundle | Each tier recipe available by first Arrow/Bolt consumer | One shared metal item per tier |
| Smithing â†’ Fletching | Crossbow trigger/winch ladder | Component available no later than first consumer | Use tier-range families, not undefined variants |
| Fletching â†’ Fishing | Rods | Rod assembly recipe exists in Fletching; equip stats in Fishing | Ten canonical Rod outputs listed in Recipe Registry |
| Smithing/Fletching â†’ Farming | Gardening Set | Metal and wooden components available by set's unlock | Multi-profession kit; T0 granted |
| Smithing â†’ Hunting | Trap mechanism | Required reusable kit component no later than Hunt Method | At L32 Ambush, use Hardened Fittings rather than L38 Argent Mechanism |
| Smithing â†’ Leatherworking | Fittings | Use existing Fasteners/Fittings/Mechanism ladder | Retire generic Rivet Bundle |
| Cooking â†’ Farming | `[Fruit]` | Any eligible Orchard fruit can satisfy tag | Cooking recipes support tag |
| Farming â†’ Cooking | Orchard outputs | Every fruit has at least one meaningful `[Fruit]` consumer | Keep crop-specific yields in Farming |
| Estate â†’ Workers | Proven content | Normal threshold is Mastery 10; worker gets Proficiency only | Shared worker contract |
| Estate â†’ stations | Facility tiers | Station Iâ€“V and residence hierarchy consistent | Profession explicit gates take precedence and must be listed |

## Level-gap rule

Producer content should be available within 3 skill levels of its consumer where practical. A wider gap is flagged for review unless the content is explicitly an endgame convergence input or a station/account gate is the intended bottleneck. Frontier worker penalties do not waive player unlock requirements.

