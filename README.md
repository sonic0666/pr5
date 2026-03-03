# Frontend & Backend — BoardGames Shop

Репозиторий с практическими заданиями по дисциплине **«Фронтенд и бэкенд разработка»**  
Институт ИПТИП, кафедра Индустриального программирования, 4 семестр 2025/2026.  
**Тема индивидуального задания: Настольные игры.**

---

## 📁 Структура репозитория

| Папка | Что внутри | Результат |
|---|---|---|
| `practice-01` | Sass (SCSS), HTML | Карточки настольных игр |
| `practice-02` | Express API (CRUD) | Сервер с эндпоинтами для игр |
| `` | Postman скриншоты | Проверка CRUD и работа с JSON |
| `practice-04` | React + Express | Магазин настольных игр (CRUD через UI) |

---

## 🧰 Технологии

- **Node.js + Express.js** — REST API, маршруты, middleware
- **CORS** — разрешение запросов с React на сервер
- **nanoid** — генерация уникальных `id`
- **React** — клиентское приложение (каталог, модалки, формы)
- **Sass (SCSS)** — стили с переменными, миксинами, вложенностью
- **Axios** — HTTP-запросы с клиента на сервер
- **Postman** — тестирование API

---

## ⚙️ Требования

- Node.js **18+**
- npm **9+**
- Postman (для практики 3)

---

# ✅ Практика 1 — CSS-препроцессор (Sass)

Карточки настольных игр с использованием Sass: переменные, миксины, вложенность, `@if`, `@each`.

```bash
cd -1--main
npm install
npm run sass
```
Открыть `src/index.html` в браузере.

---

# ✅ Практика 2 — Node.js + Express REST API

CRUD-сервер для настольных игр.

| Метод | Путь | Описание |
|---|---|---|
| GET | /products | Все игры |
| GET | /products/:id | Игра по id |
| POST | /products | Создать |
| PATCH | /products/:id | Обновить |
| DELETE | /products/:id | Удалить |

```bash
cd 2-main
npm install
npm start
```
Сервер: `http://localhost:3000`

---

# ✅ Практика 3 — JSON и Postman

Тестирование API через Postman: GET, POST, PATCH, DELETE запросы, проверка статусов 200/201/204/400/404,Проверка тела ответа и обработки ошибок.
Как повторить
Запустить сервер из практики 2
В Postman выполнить запросы из коллекции
---

# ✅ Практика 4 — React + Express (Game Shop)

## Цель
Собрать полноценное приложение: React-клиент + Express-сервер, CRUD через UI.

## Сервер
- Держит массив из **12 настольных игр** (демо-данные)
- Отдаёт JSON по API (`/api/games`)
- Поддерживает CRUD операции

## Клиент (React)
- Главная страница каталога: список, добавление, редактирование, удаление
- Модальное окно: форма с полями игры, отправка запросов на сервер

## Как запустить
```bash
# Сервер
cd back
npm install
npm start

# Клиент (в другом терминале)
cd front
npm install
npm start
```
Сервер: `http://localhost:3000`  
Клиент: `http://localhost:3001`

---

# ✅ Практика 5 — Swagger документация

## Цель
Сделать документацию REST API в формате OpenAPI/Swagger с тестированием эндпоинтов из браузера.

## Как работает
- `swagger-jsdoc` читает JSDoc-комментарии `@swagger` в коде сервера
- Формируется OpenAPI спецификация
- `swagger-ui-express` показывает UI по адресу `/api-docs`

## Результат
- Интерактивная страница со списком эндпоинтов
- Описание схемы данных `Game`
- Кнопка **Try it out** для тестирования реальных запросов

## Как запустить
```bash
cd back
npm install
npm start
```
Swagger UI: `http://localhost:3000/api-docs`

---

# ⭐ Практика 6 — Итоговый проект

## Цель
Объединить результаты практик 1–5 в единое приложение:
- UI (React) + стили (Sass)
- API (Express CRUD)
- Документация (Swagger)
- Единые команды запуска

## Структура
```text
practic4/
  client/   # React UI
  server/   # Express API + Swagger
```

## 🖥️ Сервер

### Что реализовано
- `express.json()` — чтение JSON тела запросов
- CORS — разрешение запросов с `http://localhost:3001`
- Логирование запросов (метод, путь, статус, body для POST/PATCH)
- 404 handler и global error handler (500)
- CRUD по играм: `/api/games`
- Swagger UI: `/api-docs`
- `nanoid` — генерация `id` при создании новых игр

### Модель данных (Game)
| Поле | Тип | Описание |
|---|---|---|
| `id` | string | Уникальный идентификатор (nanoid) |
| `name` | string | Название игры |
| `category` | string | Категория (Стратегия, Карточные и т.д.) |
| `description` | string | Краткое описание |
| `price` | number | Стоимость в рублях |
| `stock` | number | Количество на складе |
| `rating` | number | Рейтинг (0–5) |
| `image` | string | URL изображения |

### API эндпоинты
| Метод | Путь | Описание | Статус |
|---|---|---|---|
| GET | /api/games | Все игры | 200 |
| GET | /api/games/:id | Игра по id | 200 / 404 |
| POST | /api/games | Создать игру | 201 / 400 |
| PATCH | /api/games/:id | Обновить игру | 200 / 404 |
| DELETE | /api/games/:id | Удалить игру | 204 / 404 |
| GET | /api-docs | Swagger UI | 200 |

### Запуск сервера
```bash
cd back
npm install
npm start
```
```
cd back
npm install
npm start
```
Сервер: `http://localhost:3000`  
Swagger: `http://localhost:3000/api-docs`

---

## 🌐 Клиент

### Что реализовано
- React-приложение (Create React App)
- Каталог настольных игр: список из 12 игр
- Кнопка «+ Добавить игру» — открывает модальное окно с формой
- Кнопки «Редактировать» / «Удалить» у каждой игры
- Ссылка «Swagger API» в шапке — открывает документацию
- Стили написаны на CSS: тёмная тема, градиенты, анимации

### Запуск клиента
```bash
cd front
npm install
npm start
```
Клиент: `http://localhost:3001`

---

## 🔗 Адреса итогового проекта

| URL | Описание |
|---|---|
| `http://localhost:3001` | React-приложение (магазин настольных игр) |
| `http://localhost:3000/api/games` | REST API (JSON) |
| `http://localhost:3000/api-docs` | Swagger UI (документация) |

---

## 📸 Скриншоты

### Каталог настольных игр
<img width="1919" height="1075" alt="Снимок экрана 2026-03-03 172724" src="https://github.com/user-attachments/assets/a3ff600e-c9cb-4cef-87be-e7a96ae1b18f" />
### Добавление игры
<img width="1919" height="1017" alt="Снимок экрана 2026-03-03 173257" src="https://github.com/user-attachments/assets/3b002fde-ba75-4462-b87d-9d87f7d0ea81" />
### Редактирование игры
<img width="1888" height="968" alt="Снимок экрана 2026-03-03 173356" src="https://github.com/user-attachments/assets/0b7a0ce0-9214-4ddc-8a00-2e9515f1623c" />
### Swagger UI — список маршрутов
<img width="1912" height="1015" alt="Снимок экрана 2026-03-03 173435" src="https://github.com/user-attachments/assets/df4a1083-0033-4649-ba3b-79b866dab017" />
### Swagger UI — тестирование GET /api/games
<img width="1919" height="868" alt="Снимок экрана 2026-03-03 173709" src="https://github.com/user-attachments/assets/01664bea-c02d-4685-8590-add54c31e5b0" />
---

## 🚀 Быстрый старт (итоговый проект)

```bash
# Терминал 1 — сервер
cd back
npm install
npm start

# Терминал 2 — клиент
cd front
npm install
npm start
```

