# Векторная карта Sportfond

MapLibre GL JS 5.6.2 + OpenFreeMap / OpenStreetMap / OpenMapTiles.
Оформления: Sportfond (адаптированный Liberty), Подробная (Liberty), Контрастная (Bright). Наклон 3D/2D, здания, русские подписи, GPX WOOD TRAIL. Стиль редактируется JSON в assets/map-styles.js (можно через Maputnik). Это не спутниковая карта и не модель рельефа.

Превью http://127.0.0.1:4178/ . Production пока не опубликован.

## Транспорт
В текущей сети большие бинарные ответы обрываются примерно после 25 КБ. map_tiles.py загружает gzip-фрагменты с проверкой Content-Range, собирает их и распаковывает. Шрифтовый сервер OpenFreeMap игнорирует Range; используется фиксированный источник maplibre/demotiles gh-pages/font. Спрайты OpenFreeMap сохранены локально без изменений.

/api/map/tiles/ принимает только проверенные пути ресурсов (не URL). Максимум 4 параллельных загрузки, ресурс до 2 МБ в сжатом / 4 МБ в распакованном виде, кеш в памяти 32 МБ, браузерный кеш сутки. Первичная загрузка требует внешних источников. Ключи не нужны. Атрибуция сохранена.

Локально API через preview.Caddyfile, на публичном домене через https://api.sportfondhm.ru с существующим ограничением MAP_ORIGINS. Выбор места организатором использует ту же подложку.

Источники: https://openfreemap.org/quick_start/ ; https://github.com/maplibre/demotiles ; https://maputnik.github.io/editor/ .

Update: UI now exposes only Sportfond style and 3D/2D. Route action belongs to the selected event detail and is shown only where a track exists. Underlying alternative style definitions are retained for design work.
