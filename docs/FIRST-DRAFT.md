# Map first draft — 2026-11-15

Preview http://127.0.0.1:4178/ through container sportfond-map-preview. Source D:/Projects/sportfond-map, branch design/first-draft. Production published from main to https://map.sportfondhm.ru/ on 2026-11-15.
Standalone static HTML/CSS/JS. Start a static HTTP server from repository root; no npm/build step.

## Implemented
Responsive blue Sportfond interface, real map, event list/map views, search, city/sport/date filters, reset and empty state, selected event card, keyboard-usable marker, WOOD TRAIL GPX route, organizer information dialog with mailto contact. No pretend save or successful submission.
Only confirmed event: WOOD TRAIL,25July2027. Event copy/photo from owner's woodtrail backup. Coordinates use first point of supplied activity_24525252001.gpx, not a separately geocoded start venue. Marker's location caveat appears in event detail. GeoJSON retains route coordinates only, no GPX author/time metadata.

## Map
Locally vendored MapLibre GL JS5.6.2 (same version as restored project), upstream https://unpkg.com/maplibre-gl@5.6.2/.
OSM raster tiles https://tile.openstreetmap.org/{z}/{x}/{y}.png with visible copyright attribution and ordinary browser caching/referrer. No tile scraping, offline downloads or prefetch. Provider policy https://operations.osmfoundation.org/policies/tiles/ applies. For significant production traffic, choose suitable hosted/self-hosted provider before launch.
OpenFreeMap liberty style transfer repeatedly stalled during initial verification; switched to available OSM raster for draft. No keys required for current map source.

## Remaining
Event database, organizer submission form/backend, image upload and moderation/authentication not connected. Current list is one public confirmed event, not reconstructed full archive. Other cities/sports legitimately yield empty results. Existing legacy HTML files preserved, not used by new navigation. API secrets/user data are not stored here.

## QA
Desktop1440/mobile390 screenshots inspected. Style/tile load and GPX layer passed; event selection, sport filter empty/reset, map/list mobile switch, organizer dialog passed. Widths320/390/768 without overflow. No JS page errors. Initial vector-source failure resolved with raster provider. Preview remains running for owner review.
Screenshot evidence kept in local Sportfond redesign review directory outside public repository. Design follows existing approved portal typography/colors adapted to a map workspace.
'''

2026-11-15: Release to https://map.sportfondhm.ru/ from main. Full-width map, event catalogue below, home login/logout, multiple organizations per account. Local preview remains on 4178.
