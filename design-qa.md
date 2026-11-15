# Design QA
final result: passed
Reference:existing Sportfond map draft and approved portal typography/colors. Expanded organizer/admin flows keep navy/blue/offwhite,Montserrat/OpenSans,readable grouped forms.
Evidence:map-organizer-login.png,map-organizer-profile.png,map-admin-profiles.png,map-event-form-390.png,map-organizer-cabinet-mobile.png. Screens captured in private local redesign directory;fixtures were browser-only,not production data.
Checked typography,spacing,colors,image states,copy. 320/390/768 profile no overflow;390 event dialog fits;390 admin no overflow. Mobile date/time widths constrained for Safari;physical Safari not tested. Login/profile/cabinet/event modal/admin queue compared visually to same UI system. No outstanding P0/P1/P2;pending real email/user login verification recorded in docs/ORGANIZERS.md. Role protection tested at API;UI hiding is not treated as security.


## 2026-11-15 — vector map
- Desktop 1440×1000: region loaded; city Sportfond 1345 rendered features.
- Sportfond / Liberty / Bright: 1345 / 1339 / 1300 features, GPX layer present in all, all tiles loaded, no map errors.
- 390×844: no horizontal overflow, 3D pitch 50°. Screenshots inspected: map-real-vector.png, map-vector-mobile.png in local review workspace.
- Backend: 35 unittest tests passed in an isolated disposable container, including range assembly/gzip/cache, invalid paths, font host, organizer ownership and admin checks.
- Production frontend unchanged; preview localhost:4178.

2026-11-15: Removed style selector. Route action lives in selected WOOD TRAIL detail; selecting another event hides its track. Browser fixture with a second event verified isolation, 3D in current location, and 390px layout. No production data created.

2026-11-15 owner import: real API returns one WOOD TRAIL and its organization; browser verified one card, organizer label, GPX, mobile width and public event page. Empty API fixture shows zero cards (no hardcoded fallback). SQL verified owner relation and idempotent import (1 organization / 1 event). Snapshot before import: snapshot-20261115T182645201577Z.

2026-11-15 release: 39 Python tests pass, including multi-organization migration/idempotence, foreign ownership, separate moderation and published organization revision. Browser: 1440/768/390/320px map spans viewport, list below, no horizontal overflow; anonymous/authenticated login/logout and multi-org creation/event selection verified using isolated API fixtures. Existing real WOOD TRAIL linkage verified after migration. Regional map rendered 138 features, all tiles loaded, no map errors.

Live release f719891 verified: public HTTPS HTML contains home auth and API catalogue; real WOOD TRAIL loads once, 138 rendered map features, map spans 1440px and list below, mobile route and public cabinet/admin login load without page errors. API TLS/CORS tested with disposable browser resolving api.sportfondhm.ru to local server; this is not an independent WAN test. Snapshot after migration/release: snapshot-20261115T184853785860Z.
