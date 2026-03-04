# Frontend & Backend — BoardGames Shop

Репозиторий с практическими заданиями по дисциплине **«Фронтенд и бэкенд разработка»**  
Институт ИПТИП, кафедра Индустриального программирования, 4 семестр 2025/2026.  
**Тема индивидуального задания: Настольные игры.**

---
## 📁 Структура проекта

```
PRACTIC4/
├── back/                      # Express-сервер (REST API)
│   ├── node_modules/
│   ├── app.js                 # Точка входа: настройка Express, маршруты, middleware
│   ├── package.json
│   └── package-lock.json
│
└── front/                     # React-клиент
    ├── node_modules/
    ├── public/
    │   ├── img/               # Статичные изображения игр
    │   └── index.html         # HTML-шаблон приложения
    └── src/
        ├── api/
        │   └── index.js       # Функции запросов к серверу (fetch/axios)
        ├── components/
        │   ├── GameItem.jsx    # Карточка одной игры (название, цена, кнопки)
        │   ├── GameModal.jsx   # Модальное окно: форма добавления/редактирования
        │   └── GamesList.jsx   # Список всех карточек игр
        ├── pages/
        │   ├── GamesPage.jsx   # Главная страница каталога
        │   └── GamesPage.css   # Стили страницы
        ├── App.js              # Корневой компонент, роутинг
        ├── index.js            # Точка входа React
        └── index.css           # Глобальные стили
```
| Файл                         | Назначение                                            |
| ---------------------------- | ----------------------------------------------------- |
| back/app.js                  | Express-сервер, CRUD-эндпоинты /api/games             |
| src/api/index.js             | Все HTTP-запросы к серверу (GET, POST, PATCH, DELETE) |
| src/components/GameItem.jsx  | Карточка игры с кнопками «Изменить» / «Удалить»       |
| src/components/GameModal.jsx | Форма в модальном окне для создания и редактирования  |
| src/components/GamesList.jsx | Рендер списка карточек, передача пропсов              |
| src/pages/GamesPage.jsx      | Главная страница: хранит состояние, управляет логикой |

## 🚀 Как запустить

### 1. Запустить сервер
```bash
cd back
npm install
npm start
```
Сервер запустится на `http://localhost:3000`

### 2. Запустить клиент (в новом терминале)
```bash
cd front
npm install
npm start
```
Клиент запустится на `http://localhost:3001`

### 3. Открыть в браузере
```
http://localhost:3001
```
## 🔗 Адреса

| URL | Описание |
|---|---|
| `http://localhost:3000/api/games` | REST API — список всех игр (JSON) |
| `http://localhost:3000/api-docs` | Swagger UI (документация API) |
---

## 🧰 Технологии

- **Node.js + Express.js** — REST API, маршруты, middleware
- **CORS** — разрешение запросов с React на сервер
- **nanoid** — генерация уникальных `id`
- **React** — клиентское приложение (каталог, модалки, формы)
- **Sass (SCSS)** — стили с переменными, миксинами, вложенностью
- **Axios** — HTTP-запросы с клиента на сервер
- **Postman** — тестирование API
Cсылка на репозиторий со скриншотами :
https://github.com/sonic0666/pr3
---

## ⚙️ Требования

- Node.js **18+**
- npm **9+**
- Postman (для практики 3)

---

# ✅ Практика 1 — CSS-препроцессор (Sass)

Cоздаёт визуально оформление(цвет, размер окна, шрифта) за счёт миксинов и вложенности

Карточки настольных игр с использованием Sass: переменные, миксины, вложенность, `@if`, `@each`.

## ✨ Реализованные возможности SASS

### 1️⃣ Переменные
```scss
$primary: #3498db;     // Основной цвет
$theme: dark;          // Тема оформления
```

### 2️⃣ Миксин для кнопки
```scss
@mixin button($color) {
  padding: 10px 18px;
  background: $color;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}
```

### 3️⃣ Вложенность (BEM)
```scss
.card {
  &__image { ... }
  &__body { ... }
  &__title { ... }
  &__btn {
    @include button($primary);
  }
}
```
```bash
cd -1--main
npm install
npm run sass
```
Как открыть проект:
1. Открыть папку проекта в VS Code
2. Кликнуть правой кнопкой на `index.html`

Страница откроется в браузере по адресу:
http://127.0.0.1:5500/index.html

<img width="1786" height="962" alt="image" src="https://github.com/user-attachments/assets/6380edde-f5f8-48d5-b5dd-1f490a1b191e" />

# ✅ Практика 2 — Node.js + Express REST API

Cоздание сервера для хранения файлов в формате JSON

CRUD-сервер для настольных игр.
## 📦 Модель данных (Game)

| Поле | Тип | Описание |
|---|---|---|
| `id` | number | Уникальный идентификатор  |
| `name` | string | Название игры |
| `price` | number | Стоимость в рублях |

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
<img width="1308" height="718" alt="image" src="https://github.com/user-attachments/assets/78b1e44e-ba7f-4447-9989-8382e19d1c39" />

---

# ✅ Практика 3 — JSON и Postman
Использование Postman для тестирования серверной части сайта (GET/POST/DELETE/PATCH запросы)
## Что сделано
- Выполнены запросы GET, POST, PATCH, DELETE к серверу
- Проверены коды ответов: 200, 201, 204, 400, 404
- Проверена структура тела ответа (JSON)

## Как повторить

1. Запустить сервер из практики 2:
```bash
cd back
npm install
npm start
```
2. Открыть Postman
3. Выполнить запросы на `http://localhost:3000/api/games`

Cсылка на репозиторий со скриншотами :
https://github.com/sonic0666/pr3
---
# ✅ Практика 4 — React + Express (Game Shop)
Использование фреймворка REACT для визуализации серверных данных(формирование карточки товара в режиме фронтенда посредством пользовательского интерфейса)
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
<img width="1916" height="1063" alt="Снимок экрана 2026-02-28 100814" src="https://github.com/user-attachments/assets/0ec6b3a4-271b-43ae-b544-d3a91c62d0ff" />
<img width="1906" height="1085" alt="Снимок экрана 2026-02-28 100827" src="https://github.com/user-attachments/assets/c74d6cc8-92ce-438b-bfe8-f1d5722d6305" />
<img width="1919" height="1069" alt="Снимок экрана 2026-02-28 100838" src="https://github.com/user-attachments/assets/6ba41de2-70bd-445f-af1e-7f5fb19cf2db" />
<img width="1919" height="843" alt="Снимок экрана 2026-02-28 100941" src="https://github.com/user-attachments/assets/ee849311-a1b2-47af-910f-e58900c7bc37" />


# ✅ Практика 5 — Swagger документация
Документирование API приложения при помощи инструмента Swagger

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

