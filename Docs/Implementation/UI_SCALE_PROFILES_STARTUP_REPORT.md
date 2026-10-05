# UI Scale, Profiles, and Startup Foundation

## Implemented

- Added device-wide settings storage with Auto and Manual Game Scale, independent Text Size, audio, and reduced motion. Settings apply before React mounts and update live.
- Converted existing CSS pixel dimensions and typography to `--ui-scale` / `--text-scale` calculations. High scale reflows multi-column game screens. No `zoom` or global scale transform is used.
- Added three fixed local profile slots, summary metadata, create/rename/delete, active playtime, per-slot saves, and the legacy `mx-idle-save-v1` copy migration. The original legacy key is retained.
- Added the Profile Select and staged loading flow. Only a selected profile receives offline simulation; the resulting state is saved before its return summary is shown.
- Moved First Steps above the profession screen, made it compact by default with progress and direct guidance, and kept its expanded state in profile data.
- Replaced the Frontier breadcrumb with the active profile name and profile slot.
- Added a shared overlay root, focus-trapped modal primitive, and portal tooltips with delayed hover/focus, touch toggle, scroll/resize repositioning, viewport bounds, and scaled size limits.
- Added automated coverage for scale math, normalization, profile isolation, migration, and corrupt-data preservation. Expanded browser flow coverage for profile startup, settings, scaling, return-to-select, and tooltip portal behavior.

## Persistence keys

- `mx-idle-settings-v1`: device-wide preferences.
- `mx-idle-profile-index-v1`: fixed three-slot metadata index.
- `mx-idle-profile-{1|2|3}-v1`: independent character save.
- `mx-idle-save-v1`: legacy source retained after migration.

## Verification

`npm run typecheck`, `npm test`, and `npm run build` pass. Browser QA is run by `npm run qa` against the local Vite server; it writes screenshots to `artifacts/qa`.

## Notes

Auto scale is calculated from the browser CSS viewport, clamped to 90–150%, and rounded to 5% steps. A 2560×1440 viewport resolves to 135%. Manual scale is 80–160%; Text Size is 90–140%. Active playtime excludes time when the page is hidden and excludes offline simulation.
