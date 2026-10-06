# AGENTS.md â€” MX-Idle
## Project identity
MX-Idle is a premium browser-based single-player idle RPG. It must feel like a GAME first and a web app second.
Do not let it resemble a SaaS dashboard, admin panel, generic Tailwind demo, spreadsheet with decoration, or lightly reskinned website.
Target: high-end browser RPG quality with strong game feel, compact information density, polished interaction, low unnecessary asset dependence, and long-session performance.

## Core quality bar
Player-facing work is not done just because it functions.
It should also be readable, coherent, responsive, polished, consistent, performant, and verified in the real browser.
Prefer premium and deliberate over flashy and noisy.

## UI direction
Prefer:
- layered surfaces;
- tactile controls;
- strong hierarchy;
- compact layouts;
- inset areas for slots, progress and resources;
- subtle material depth;
- deliberate typography;
- purposeful motion;
- clear state feedback.

Avoid:
- giant dashboard cards;
- excessive empty space;
- random gradients or glow;
- glassmorphism everywhere;
- repetitive identical card grids;
- huge marketing headings inside gameplay screens;
- default browser-looking controls;
- animation without a gameplay or interaction purpose.

## Asset strategy
MX-Idle is asset-light, not asset-free.
Prefer DOM/CSS/React for primary UI.
Use CSS, gradients, borders, shadows, masks, pseudo-elements, SVG, procedural audio, and canvas/WebGL only when justified.
Use image assets when they materially improve items, monsters, equipment, locations, professions, or major illustrations.
Do not use raster assets to solve reusable UI problems.

## Design system
Shared design primitives are mandatory.
Use semantic tokens for surfaces, borders, text, states, profession accents, rarity, spacing, radii, shadows, animation timings, and z-index.
Repeated patterns should use reusable components such as panels, buttons, tabs, tooltips, modals, progress bars, XP bars, slots, stat rows, badges, rarity frames, resource counters, and notifications.
Reuse before inventing.
Do not scatter unrelated hard-coded visual values across features.

## Information density
MX-Idle is a deep idle RPG. Dense information is expected.
Dense does not mean cluttered.
Prefer compact rows, aligned labels/values, strong grouping, tabular numerals where useful, tooltips, filters, collapsible groups, and inspection panels.
Avoid wasting vertical space.
Desktop layouts should use desktop space intentionally instead of stretching mobile cards.

## Interaction states
Interactive controls must deliberately handle relevant states:
- default;
- hover;
- focus-visible;
- pressed;
- selected;
- disabled;
- locked;
- loading;
- success;
- warning;
- error.
Do not communicate important gameplay state by color alone.
Do not remove visible keyboard focus.
Do not rely on hover-only essential actions.

## Game feel
Meaningful player actions should receive appropriate acknowledgement through some combination of:
- visual state change;
- motion;
- number animation;
- progress response;
- VFX;
- sound;
- highlight;
- notification.
Routine actions should feel fast.
Important events may receive stronger presentation.
Do not make every event equally dramatic.

## Motion
Motion should confirm actions, guide attention, explain hierarchy, preserve continuity, or add polish.
If it serves none of those purposes, remove it.
Prefer CSS for simple transitions.
Use GSAP only when sequencing or advanced orchestration is genuinely useful.
Never delay routine navigation for cinematic animation.
Respect reduced-motion preferences.

## Performance
MX-Idle may remain open for many hours.
Avoid leaking timers, observers, event listeners, uncontrolled particles, unnecessary React rerenders, per-frame allocations, hidden animations running forever, expensive blur everywhere, or invisible WebGL scenes still rendering.
Pause or reduce decorative work when inactive or offscreen.
Measure before broad optimization rewrites.

## Game-state rules
Gameplay state is authoritative.
Animations must never be the source of truth for timers, crafting, combat, resource generation, progression, or offline progress.
Simulation controls presentation, not the other way around.
Keep simulation and presentation separated where practical.

## Save safety
Persistent progression is critical.
When changing saved structures:
- version formats;
- migrate old values;
- handle missing values safely;
- validate loaded data;
- test fresh saves;
- test existing saves.
Never silently invalidate player saves.
Avoid excessive storage writes during rapid updates or offline simulation.

## Code quality
Prefer:
- TypeScript;
- focused modules;
- explicit domain types;
- data-driven content;
- deterministic calculations;
- pure functions for game math where practical;
- reusable UI primitives;
- clear simulation/presentation separation.

Avoid:
- giant components;
- giant all-purpose stores;
- duplicated formulas;
- magic numbers scattered through UI;
- silent catch blocks;
- unnecessary dependencies.

## Installed skills
Project skills live under `.agents/skills/`.
Use the smallest relevant set for each task.
Do not apply every skill at once.

### Skill routing
| Task | Primary skills |
|---|---|
| Major gameplay UI | `frontend-design`, `game-ui-ux`, `ui-ux-pro-max`, `design-system-patterns` |
| Motion | `animation-systems`; add `gsap` only when justified |
| Surface polish | `skeuomorphic-ui`, `beautiful-shadows`, `css-border-gradient`, `progressive-blur` selectively |
| Audio | `game-audio`, `build-game-audio-feedback` |
| VFX | `create-game-vfx` |
| React/frontend performance | `vercel-react-best-practices`, `optimize-web-animations` |
| Three.js/WebGL performance | `optimize-threejs-games` only when relevant |
| QA | `test-playable-web-games`, `web-design-guidelines` |

Situational only:
- `gooey-blob-system`
- `number-details`
- `build-awwwards-quality-sites`

`build-awwwards-quality-sites` is a visual-quality reference, not the default architecture for gameplay screens.
Do not force Three.js into DOM/CSS features just because Three.js-related skills are installed.

## Workflow for major player-facing work
Before coding:
1. inspect relevant gameplay/design docs;
2. inspect existing UI and reusable components;
3. identify the primary player action;
4. define information hierarchy;
5. choose the smallest relevant skill set.

During implementation:
1. reuse shared primitives;
2. implement important edge states;
3. keep gameplay logic separate from presentation;
4. add polish after hierarchy works;
5. keep performance in mind.

Verification is risk-based:

- Small UI-only task: run `npm run typecheck`, then inspect the touched screen if practical. Skip the full unit suite and unrelated browser flows.
- Small gameplay or content task: run targeted changed-domain tests and `npm run typecheck`.
- Large system, save, or simulation task: use targeted tests during development, then run the full unit suite once, `npm run typecheck`, and `npm run build` once at the end.
- Phase completion or release: run the full unit suite, relevant browser QA, multiple resolutions, save migration and offline checks, and a longer regression pass.

Run `npm run qa` or `npm run qa:professions` only when its flow changed, a regression is suspected, a phase milestone is being reviewed, or the user explicitly asks. Do not run both for unrelated copy or CSS changes. Keep browser QA focused on the changed flow and check console output. Add narrow viewport checks when the touched layout uses responsive behavior that could break.


## Visual anti-patterns
Avoid unless explicitly justified:
- generic neon-purple cyber dashboards;
- random gradient blobs;
- glass panels everywhere;
- giant rounded cards;
- excessive empty space;
- random glowing borders;
- constant floating animation;
- bouncing controls;
- rainbow gradients;
- unclear icon-only controls;
- tiny low-contrast text;
- hover-only essential actions.

## Definition of done
A player-facing feature is done only when applicable requirements are satisfied:
- gameplay works;
- edge states work;
- shared design system is reused;
- interaction states exist;
- typography is readable;
- information density is appropriate;
- responsive layout does not break;
- motion is purposeful;
- reduced-motion behavior is safe;
- audio/VFX are appropriate;
- console is clean enough for the feature;
- long-running resources clean up;
- browser QA has been performed;
- the result feels like MX-Idle, not a pasted web template.

## Final principle
When choosing between decoration and clarity, choose clarity.
When choosing between another asset and a reusable design-system solution, prefer the reusable solution unless the asset materially improves the game world.
When choosing between flashy and premium, choose premium.

## Global gameplay feedback
- Global progression feedback must come from authoritative `GameEvent` XP and level-up events, never from the screen currently open or inferred SaveState differences.
- XP earned in a background activity remains visible when the player navigates elsewhere. Multi-skill rewards preserve a distinct signal for each skill.
- Important RPG objects such as items, equipment, statuses, resistances, and profession tools use structured, source-backed tooltips.
- Major gameplay actions receive restrained, event-driven acknowledgement beyond a moving progress bar alone.
- Feedback animations remain local, inexpensive, temporary, and reduced-motion aware. They do not drive simulation state and do not keep timers or effects alive after cleanup.

## Major UI generation work
- Major player-facing UI tasks must not default to preserving existing JSX or CSS. When the user requests a major redesign, structural rewrites are expected where needed.
- Judge visual redesigns by browser output, not diff size, compile success, or component reuse.
- Do not claim “AAA,” “premium,” or “finished” when only surface styling changed and the underlying player interaction still looks generic.
- Screenshots, design docs, generated files, and tests do not count as implementation scope. For UI work, progress means real changes under `src/`, especially TSX, CSS, game UI primitives, interaction code, and responsive behavior.

## UI integrity and text encoding rules

### Mojibake is forbidden
Player-visible text must never contain broken encoding or mojibake, including corrupted UTF-8 sequences such as `Ã‚`, `Ãƒ`, `Ã¢`, `ï¿½`, or `�` and related variants. Check screen text, buttons, tooltips, item descriptions, labels, headings, notifications, DevTools copy, generated UI strings, and player-facing instructions.

All source and text files must be valid UTF-8. Prefer ordinary ASCII punctuation when it reads naturally. Use Unicode punctuation only intentionally and verify it in the browser. Do not copy corrupted punctuation from old source or terminal output; repair it when found.

Before finishing player-facing work, search changed files and relevant `src/` strings for suspicious encoding, inspect matches, fix corrupted text, and verify the rendered interface in a browser. TypeScript compiling is not proof that text is valid.

### One game, distinct gameplay interfaces
Shared design tokens and components do not require shared screen layouts. Before redesigning a major system, identify its gameplay fantasy, primary decision, browseable content, active progress, optimization information, and distinct visual motif. Reuse small primitives such as buttons, panels, slots, badges, tooltips, progress bars, and stat rows. Do not copy the same tier rail, filter bar, card list, inspector placement, or three-column blueprint across unrelated systems. If two systems play differently, they must not look like simple reskins of one screen template.

### Core controls need game-specific craft
Player-facing core gameplay controls must not ship as minimally styled generic HTML rectangles. Important actions, category choices, item slots, combat targets, and profession modes need deliberate material, icon, hierarchy, and selection treatments. Native controls remain appropriate for settings, accessibility, DevTools, and low-priority utility forms.

### Interactive states are part of each control
Player-facing controls must define default, hover, pressed, selected, focus-visible, disabled, locked, and active/in-progress states where relevant. Important selection cannot rely on border color alone. Use a fitting combination of material shift, edge or inset treatment, marker, icon/text emphasis, or restrained movement. Locked choices must explain their requirement.

### Visual QA is part of implementation
For major player-facing UI, compilation is not completion. Capture and inspect browser screenshots at the primary desktop resolution, critique the result against the screen's gameplay role, and make at least one polish iteration. Include relevant narrow or scaled layouts, keyboard focus, and reduced-motion behavior in the review.
