---
name: mx-idle-aaa-ui
description: Project-specific visual and interaction system for MX-Idle. Use when designing, building, reviewing, or polishing player-facing MX-Idle UI such as professions, combat, inventory, equipment, workers, housing, progression, navigation, tooltips, modals, rewards, and shared game components.
---

# MX-Idle AAA UI

## Purpose
This skill defines MX-Idle's project-specific visual language. Use it to keep separate systems feeling like one premium browser RPG rather than unrelated web pages.

General accessibility, React, animation, performance, and game-UX guidance should still come from the other installed skills when relevant.

## Design thesis
MX-Idle should feel like a premium dark-fantasy adventurer's operating system: tactile, dense, readable, restrained, atmospheric, and highly responsive.

The game should combine RPG materiality, modern web precision, compact idle-game information density, tactile interaction, subtle magical atmosphere, and minimal unnecessary imagery.

It must NOT feel like:
- a SaaS dashboard;
- a medieval parchment website;
- a mobile gacha interface;
- a neon cyber dashboard;
- a generic Tailwind component gallery;
- an overdecorated fantasy frame pack.

The interface should feel expensive because of hierarchy, spacing, motion, feedback, typography, and consistency—not because every panel has a giant image.

## Visual character
Use a grounded dark-fantasy material language.

Prefer charcoal, iron, slate, dark wood, leather, stone, subtle brass, oxidized metal, and restrained magical accents.

Avoid pure black as the dominant surface. Avoid high-saturation fantasy colors except for meaningful states, rarity, resources, or major events.

Different UI layers should feel physically distinct:
- background = deep matte;
- shell/navigation = structural metal or stone;
- standard panel = raised dark material;
- content well = inset surface;
- interactive control = tactile raised surface;
- selected state = illuminated edge or inset emphasis;
- reward/rarity = controlled accent energy.

Do not simulate photoreal materials everywhere. Keep it modern and refined.

## Surface system
Use a small reusable surface hierarchy.

| Tier | Use | Treatment |
|---|---|---|
| Surface 0 | Page background / deepest shell | Darkest, quiet, minimal border, subtle tonal variation |
| Surface 1 | Navigation / structural shell | Slightly lighter, stable separation, minimal elevation |
| Surface 2 | Standard gameplay panel | Clear edge, soft depth, reusable default panel |
| Surface 3 | Selectable/actionable content | Stronger edge, tactile hover/press response |
| Surface 4 | Rare rewards / major unlocks | Stronger glow, animated detail, special audio/VFX |

Surface 4 is exceptional. Do not make it normal.

## Borders and radius
Default borders should be subtle and mostly 1px. Use gradient/reflective borders only for active, premium, or rarity-relevant states.

Avoid thick outlines, rainbow borders, and glowing every card.

Selected state should combine more than one cue where appropriate: surface change, accent marker, icon treatment, subtle glow, inset highlight, or check state.

Use controlled radii:
- controls: about 6–8px;
- standard panels: about 8–12px;
- large modals: about 10–14px;
- circular only when semantic.

Avoid giant 24–32px SaaS-style radii and pill-shaped everything.

## Typography
Typography should prioritize scanning and stable numbers.

Use one primary UI family and optionally one distinct display family. Use tabular numerals where rapidly updating values benefit from it.

Hierarchy:
- screen title;
- section title;
- control title;
- body;
- stat label;
- stat value;
- microcopy.

Avoid oversized hero headings in routine gameplay, excessive all-caps, tiny gray text, and decorative fantasy fonts for body copy.

Rapidly updating numbers must not cause layout jitter.

## Color hierarchy
Most surfaces remain neutral. Color is semantic.

Use color mainly for:
- profession identity;
- rarity;
- resources;
- active state;
- positive/negative state;
- warning/danger;
- major events.

Profession colors should usually appear as icon accents, active edges, markers, progress highlights, small glows, or section accents—not full-screen fills.

## Profession identity
Professions should feel distinct without becoming separate visual systems.

A profession may vary:
- accent color;
- iconography;
- small material motif;
- VFX flavor;
- audio timbre.

It should NOT redefine:
- spacing;
- typography;
- panel anatomy;
- control behavior;
- modal behavior;
- tooltip grammar.

Examples:
- Mining: iron/stone, mineral sparkle, weighty feedback.
- Woodcutting: dark wood, muted green, fibrous motif.
- Fishing: deep blue, subtle ripple, calmer motion.
- Runecrafting: restrained arcane geometry and sharper magical feedback.

Treat these as direction, not hard-coded final palettes.

## Rarity language
Rarity intensity should scale gradually.

- Common: neutral, almost no glow.
- Uncommon: subtle colored edge.
- Rare: clearer accent and light sheen.
- Epic: stronger accent and restrained animated detail.
- Legendary: distinct border treatment, soft aura, special reveal/audio tier.

Do not run constant animated rarity effects across large inventory grids. Reserve animation for hover, selection, inspect, reveal, or reward moments.

## Panel anatomy
A standard gameplay panel should usually contain:
1. title/context;
2. relevant status;
3. primary interactive content;
4. supporting stats;
5. action area if needed.

Avoid repeated titles, huge headers, empty decorative top regions, and nested card-inside-card-inside-card layouts unless hierarchy truly requires them.

## Action cards
Use action cards for meaningful gameplay choices such as ores, trees, fishing locations, recipes, targets, workers, or tasks.

An action card should communicate:
- identity;
- current state;
- requirement;
- expected result;
- progress when active;
- primary interaction.

Do not fill cards with irrelevant stats. Locked cards should explain why they are locked.

## Inventory and equipment
Inventory should prioritize scan speed.

Use consistent slot size, clear quantity placement, readable rarity, obvious selected state, and predictable inspection behavior.

Do not place full item descriptions inside grid cells. Detailed information belongs in tooltips, inspection panels, modals, or comparison surfaces.

Equipment slots should communicate slot type even when empty.

## Tooltips
Tooltips are a core information system.

They should appear quickly, remain stable, use readable width, and favor structured label/value information over prose.

Typical structure:
- name;
- rarity/type;
- primary effect;
- secondary stats;
- requirements;
- comparison;
- optional flavor text.

Advanced/ALT views may reveal deeper breakdowns.

Never hide critical requirements only in tooltips.

## Modals
Use modals for focused decisions, not ordinary navigation.

Good uses:
- item inspection;
- worker assignment;
- reward reveal;
- complex management;
- meaningful confirmation;
- settings.

Keep title areas compact, padding controlled, actions predictable, and transitions fast. Routine modals should not use cinematic motion.

## Navigation
Navigation must support frequent repeated switching.

The active location should be unmistakable through a combination of accent marker, icon treatment, inset/raised state, or text emphasis.

Do not perform dramatic full-page transitions on every navigation change.

## Progress bars
Progress bars are central to idle gameplay and must represent authoritative game state.

Visual smoothing may interpolate but must converge to the true value.

Useful states include idle, active, paused, blocked, complete, and offline catch-up.

Avoid bright animated stripes everywhere. Use sheen or pulse only when it improves readability or action feel.

## Number feedback
Use number animation selectively.

Good patterns:
- short count-up/down;
- temporary gain text;
- subtle changed-value flash;
- icon pulse;
- progress pulse.

Do not animate every passive tick.

Reserve stronger number feedback for manual action, purchase, craft completion, reward, level-up, or milestone.

## Motion tiers
Use three motion tiers.

| Tier | Use | Typical duration |
|---|---|---|
| A — Micro | hover, press, focus, selection, tiny value response | 80–180ms |
| B — System | panel, modal, equip, craft completion, task start | 160–320ms |
| C — Reward | level-up, rare drop, boss victory, major unlock | 350–900ms |

Do not turn Tier A actions into Tier C spectacle.

Prefer CSS for simple motion. Use GSAP only when sequencing or orchestration genuinely benefits from it.

## Audio tiers
Audio follows the same hierarchy.

- Tier A: soft click/toggle or very restrained UI tick.
- Tier B: equip, purchase, craft complete, task start, warning.
- Tier C: rare reward, level-up, major unlock, boss victory.

Repeated automatic idle events must not create audio spam.

## VFX budget
Use VFX to communicate meaning before spectacle.

Good uses:
- reward reveal;
- rare drop;
- successful craft;
- level-up;
- combat impact;
- status effect;
- milestone.

Rules:
- cap spawned effects;
- clean them up reliably;
- pause when hidden;
- reduce under reduced-motion;
- never obscure important numbers or controls.

Avoid ambient particles on every panel.

## Loading, blocked, and empty states
Never leave ambiguous dead UI.

Blocked actions should explain the reason:
- insufficient level;
- missing resource;
- missing tool;
- cooldown;
- worker unavailable;
- requirement unmet.

Prefer concise actionable copy.

Empty states should feel intentional with a small contextual icon, short explanation, and relevant action when one exists. Do not use giant illustrations for routine empty states.

## Responsive behavior
Desktop is a first-class high-density target. Do not design stretched mobile cards.

On narrower layouts:
- collapse secondary columns;
- preserve primary action;
- preserve important resources;
- move inspection details below primary content;
- avoid horizontal overflow;
- keep touch targets usable.

Desktop should remain compact and efficient.

## Accessibility
Preserve visible keyboard focus, meaningful labels, sufficient contrast, non-color indicators, reduced-motion support, touch alternatives to hover, and readable text sizing.

Important audio cues need visual equivalents.

## Implementation rules
Prefer shared tokens, component variants, data-driven style maps, reusable primitives, and semantic APIs.

Do NOT:
- create a separate visual system per profession;
- duplicate panel or button implementations;
- hard-code rarity styles across many files;
- encode gameplay values directly into visual components;
- introduce Three.js only because a Three.js skill exists.

## Review checklist
Before calling a screen finished, verify:

### Hierarchy
- Is the primary action obvious?
- Is the strongest information actually most important?
- Is secondary information subordinate?

### Density
- Is space used efficiently?
- Are cards unnecessarily tall?
- Is scrolling actually justified?

### Identity
- Does the screen feel like MX-Idle?
- Does the profession/system have a subtle identity without breaking the shared language?

### Interaction
- Are hover, pressed, selected, disabled, locked, and focus states clear?
- Does feedback feel immediate?

### Game feel
- Are meaningful actions acknowledged?
- Is feedback proportional to importance?

### Consistency
- Are shared components reused?
- Does the screen match existing MX-Idle grammar?

### Performance
- Are effects bounded?
- Do hidden animations stop?
- Are long sessions safe?

### Browser QA
- Has the actual rendered screen been inspected?
- Has a narrower viewport been checked?
- Are there relevant console errors?

## Anti-pattern blacklist
Never default to:
- SaaS card dashboards;
- giant hero sections;
- purple/blue gradient blobs;
- glassmorphism everywhere;
- neon outlines everywhere;
- giant rounded rectangles;
- huge empty cards;
- random motion;
- bouncing buttons;
- animated everything;
- full-screen particle fields;
- tiny washed-out gray text;
- decoration that reduces scan speed.

## Skill cooperation
For major MX-Idle UI work, combine this skill with:
- `frontend-design`;
- `game-ui-ux`;
- `design-system-patterns`.

Use `ui-ux-pro-max` when extra UX/design-system guidance is useful.

Use `animation-systems` for motion, `gsap` only for complex sequences, `game-audio` / `build-game-audio-feedback` for audio, `create-game-vfx` for VFX, `vercel-react-best-practices` / `optimize-web-animations` for implementation review, and `test-playable-web-games` / `web-design-guidelines` for final QA.

Do not load every skill unless the task genuinely spans them.

## Priority order
When decisions conflict, use this order:
1. gameplay clarity;
2. interaction clarity;
3. consistency;
4. information density;
5. responsiveness;
6. performance;
7. visual polish;
8. spectacle.

Spectacle is always last.

## Final rule
MX-Idle should feel premium through hierarchy, tactile interaction, material depth, responsive feedback, disciplined motion, restrained VFX, coherent audio, consistent components, and strong information design.

Do not chase AAA quality by adding more decoration.

Chase it by making every interaction feel intentional.
