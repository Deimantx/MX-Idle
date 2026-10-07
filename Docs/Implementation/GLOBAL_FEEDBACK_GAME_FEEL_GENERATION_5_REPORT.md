# Global Feedback & Game Feel Generation 5

## Starting commit

`bee171b9d4736744cc22ecf28fbcdd593cbe5932`

## Implementation

- **XP HUD:** Kept authoritative XP event input and the existing orb lifecycle. Gain numbers now sit beneath their own skill ring for about 900 ms. XP progress increases leave a brief ring afterimage; reduced motion hides the moving echo.
- **Reward feed:** Mounted the global feed in the activity dock wrapper, so it stays in one place as the player changes screens. Common entries use a 2.2 second display and rare entries 3.5 seconds. Added a short, event-driven item flight from a visible profession source to the dock, with item frames and a four-flight cap.
- **Top progress:** Screen skill progress now spans the content width. The 9 px track shows current and maximum XP, remaining XP, and level. The action/phase status was removed from profession headings.
- **Activity dock:** The dock reports profession-specific phases and action names, including mining strata/strikes, furnace and forge states, fishing bite/landing, cooking prep/cook, and combat attack. Phase changes give the activity icon a short, accent-matched response. Idle copy is compact.
- **Tooltips:** No tooltip rewrite was needed for this pass. Existing structured item and equipment tooltips remain in place; the browser audit rechecked bank, equipment, mining, smithing, cooking, and fishing inspection paths.
- **Icons:** No icon library or icon system changes were needed. Existing profession and item marks remain in use.
- **VFX:** Added material response profiles and profile-specific small DOM effects for stone, metal, water, hearth, steel, leather/equipment, and bank paper. Effects remain event-driven and short-lived.
- **Audio:** Added low-level filtered noise textures beneath existing tones for mining, smithing, fishing, cooking, combat, equipment, and rewards. Existing mute, volume, voice cap, cue cooldowns, and priority behavior remain active. Routine action cues now reach the audio service under those cooldowns.
- **Five brainstorm systems:** Implemented reward trajectories, material response profiles, progress echoes, activity phase choreography, and layered audio identity. These use the existing `GameFeedbackEvent` stream; they do not write simulation state.
- **DevTools:** Extended feedback previews across all five profession/combat response families. Common and rare item previews now use a Mining source so they exercise the real reward trajectory path.

## QA

- `npm run typecheck` — passed.
- `npm run check:text` — passed; 114 source files scanned.
- `node tests/feedback-game-feel-gen3.mjs` — passed. It reported no browser console/page errors, checked multi-skill and seven-skill XP, XP settings combinations, tooltip paths, and layouts at 1440, 1920, and 2560 px. The run uses reduced-motion mode and verifies the XP orb lifecycle.
- Focused Playwright check — passed. Confirmed a reward flight rendered and the reward feed sat 8 px above the activity dock at 1440 × 900; no page errors.
- Narrow/accessibility check — passed at 390 × 844 with 140% text sizing and reduced motion. No horizontal overflow; keyboard tab focus retained a visible outline.
- Captured and inspected the regenerated browser screenshots in `artifacts/feedback-game-feel-gen3/`, including the reward-to-dock flight and full-width skill progress at multiple desktop widths.

## Meaningful source scope

Approximate touched source lines, excluding docs, screenshots, tests, comments, and blank lines:

| Area | Approx. lines |
|---|---:|
| XP HUD | 20 |
| Reward feed and trajectory | 70 |
| Screen progress | 45 |
| Activity HUD | 50 |
| Tooltip | 0 |
| Icons | 0 |
| VFX/material profiles | 45 |
| Audio | 30 |
| DevTools previews and wiring | 25 |
| **Total** | **~285** |

The count includes moved/rewritten source and is an estimate, not a raw diff total.

## Known debt

- A reward trajectory is drawn only when its inferred source profession is currently visible, or when the player is on Bank and the matching bank item tile exists. Unknown or generic item sources still appear in the global feed but do not receive a flight.
- This pass did not add new tooltip schemas, icon artwork, or a dedicated sound-settings preview panel. Existing tooltip coverage and settings-controlled audio were retained and checked through the affected flows.
- The browser audit uses the existing Generation 3 test script; trajectories also received a focused browser check. Long-duration audio mixing and simultaneous high-frequency reward stress were not separately profiled.
