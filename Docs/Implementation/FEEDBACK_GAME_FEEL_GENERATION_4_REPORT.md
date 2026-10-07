# Feedback & Game Feel Generation 4

**Starting commit:** `ac0701245c1f732a0790b3bd3c9c0bbd6adfe329`

## What changed

- **XP HUD:** refined the 100x100 concentric metal ring, strengthened the recessed track, kept the progress stroke crisp, and arranged seven simultaneous skill orbs in one compact row. XP presentation remains driven by authoritative XP events and keeps its existing 20-second inactivity lifecycle and inspect-to-pause behavior.
- **Skill progress:** widened the shared screen progress header and increased its bar height while removing the soft glow from the fill.
- **Icons:** added `lucide-react` and replaced the hand-authored path map behind the existing `Icon` API with named Lucide components at a consistent 1.9 stroke width. Mining and Smithing use Pickaxe and Anvil.
- **Item tooltips:** extended the existing structured tooltip model with fish catch profiles sourced from `FISH_SPECIES`, food nutrition sourced from `COOKING_RECIPES`, and deposit profiles sourced from the selected `MINING_DEPOSITS` entry. Deposit context is checked against the displayed resource ID, so Quarry details cannot inherit another deposit's material. Tooltip content remains lazily computed when opened.
- **Event feedback:** added `GameFxLayer`, which places short particle bursts at the active gameplay anchor or gained Bank item, caps simultaneous bursts, clears timers on expiry/unmount, and skips effects under reduced motion. Bank item buttons expose stable item anchors for this effect.
- **Passive states:** removed idle Fishing/Cooking/Smithing/Combat ready messaging and replaced passive Mining/recipe labels with selection or availability language.
- **Audio and DevTools:** strengthened the short Mining and Smithing strike cues and added subtle pitch variation between strikes. The shared Web Audio service still applies per-cue cooldowns, a four-voice limit, mute/volume settings, and gesture-based audio unlock. Reused the existing DevTools feedback preview and floating workspace.

## Source scope

XP HUD: `GlobalXpHud.tsx`, `xp-hud.css`, shared gameplay layout CSS. Tooltip: `ItemDisplay.tsx`, `itemTooltip.model.ts`, tooltip styles. Icon system: `primitives.tsx`, `package.json`, and lockfile. Feedback/VFX: `GameFxLayer.tsx`, `App.tsx`, Bank item anchors, and feedback styles. Audio: `audioFeedback.ts`. Profession and Combat screen files contain the passive-state corrections. DevTools implementation was reused without source changes.

## Verification

- `npm run typecheck` - passed.
- `npm run check:text` - passed; 112 source files scanned.
- `npm test` - passed; 12 files and 83 tests.
- `npm run build` - passed. Vite reports the production bundle exceeds its 500 kB advisory threshold (556.74 kB minified JS).
- `tests/feedback-game-feel-gen3.mjs` - passed at 2560x1440, 1920x1080, and 1440x900. It covers 10-second XP visibility, approximately 20-second expiry, multi-skill feedback, tooltip samples, DevTools move/resize/minimize/dock, settings combinations, viewport overflow, and browser console errors. The run reported no console errors.
- Additional browser checks at 120% and 140% scale confirmed the XP orb remains visible without horizontal overflow at 2560x1440. A non-reduced-motion Mining preview rendered four local particles and removed the burst within 480 ms. The reduced-motion browser run suppressed motion effects.
- Reviewed screenshots: `artifacts/feedback-game-feel-gen4/all-skills-2560.png`, `all-skills-1920.png`, `all-skills-1440.png`, `scale-120-2560.png`, `scale-140-2560.png`, and `mining-vfx-preview-2560.png`.

## Limits

- Audio playback was not acoustically evaluated; the cue service was exercised through the DevTools event preview, but cue audibility and mix still need a listening review.
- Ring geometry was visually checked in the browser at the tested resolutions, but no dedicated fixture was added for every requested progress percentage. The ring continues to use live skill XP rather than preview data in production.
- The browser QA flow samples representative item tooltips across Bank, Equipment, Mining, Smithing, Cooking, and Fishing; it is not an exhaustive item-by-item catalog audit.
- Gameplay formulas, save structures, and progression balance were not changed.
