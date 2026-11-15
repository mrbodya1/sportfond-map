# Карта спорта Югры — Sportfond

Текущая разработка: design/first-draft. Рабочая main сохранена до одобрения публикации.
Локальный просмотр:http://127.0.0.1:4178/. Код статический, без npm/build.

- index.html:карта,фильтры,список одобренных событий.
- organizers.html:вход по коду,подробный профиль,кабинет и добавление событий.
- moderation.html:модерация профилей/событий,только владелец89821575459@ya.ru через серверную проверку.
- event.html:публичная страница опубликованного события.
- API живёт на домашнем сервере в отдельном проекте sportfond-app/backend, не на GitHub Pages.

Подробная инструкция:[docs/ORGANIZERS.md](docs/ORGANIZERS.md).
Первый дизайн:[docs/FIRST-DRAFT.md](docs/FIRST-DRAFT.md).
Исходный журнал восстановления:[docs/RECOVERY.md](docs/RECOVERY.md),исторический.

Для полноценного локального входа нужен прокси infra/preview.Caddyfile на127.0.0.1:4178 к API127.0.0.1:18767. На production используется api.sportfondhm.ru с отдельной cookie карты.
Не коммитить .env,базы,uploads,коды входа и данные организаторов. Docker preview не открывает новые внешние порты.

Векторные стили и загрузка тайлов: [docs/VECTOR-MAP.md](docs/VECTOR-MAP.md).
