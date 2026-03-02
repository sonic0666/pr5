const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


// Логирование
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`[${new Date().toISOString()}] [${req.method}] ${res.statusCode} ${req.path}`);
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      console.log('Body:', req.body);
    }
  });
  next();
});

let games = [
  {
    id: nanoid(6),
    name: 'Cyberpunk 2077: Банды Найт-Сити',
    category: 'Стратегия',
    description: 'Карточная игра в антураже Найт-Сити — собери свою банду и захвати районы мегаполиса.',
    price: 3500,
    stock: 12,
    image: 'https://hobbygames.ru/image/cache/catalog/games/cyberpunk-2077-bandi-najt-siti-500x500.jpg'
  },
  {
    id: nanoid(6),
    name: 'Бункер',
    category: 'Вечеринка',
    description: 'Апокалипсис настал. Кто попадёт в бункер? Убеди других, что именно ты достоин выжить.',
    price: 900,
    stock: 30,
    image: 'https://hobbygames.ru/image/cache/catalog/games/bunker-500x500.jpg'
  },
  {
    id: nanoid(6),
    name: 'Монополия',
    category: 'Семейная',
    description: 'Классика жанра — скупай недвижимость, строй дома и разори соперников.',
    price: 1800,
    stock: 25,
    image: 'https://hobbygames.ru/image/cache/catalog/games/monopoliya-500x500.jpg'
  },
  {
    id: nanoid(6),
    name: 'Catan: Колонизаторы',
    category: 'Стратегия',
    description: 'Исследуй остров Катан, торгуй ресурсами и строй поселения быстрее соперников.',
    price: 2500,
    stock: 15,
    image: 'https://hobbygames.ru/image/cache/catalog/games/catan-500x500.jpg'
  },
  {
    id: nanoid(6),
    name: 'Умер мужик',
    category: 'Вечеринка',
    description: 'Весёлая карточная игра — угадывай профессию и обстоятельства гибели загадочного мужика.',
    price: 700,
    stock: 40,
    image: 'https://hobbygames.ru/image/cache/catalog/games/umer-muzhik-500x500.jpg'
  },
  {
    id: nanoid(6),
    name: 'Fallout: Настольная игра',
    category: 'Приключение',
    description: 'Исследуй постапокалиптическую пустошь, выполняй квесты и сражайся с мутантами.',
    price: 5500,
    stock: 7,
    image: './back/img/Fallout_3D_roznica-1000x416-wm.webp'
  },
  {
    id: nanoid(6),
    name: 'Уно',
    category: 'Карточная',
    description: 'Быстрая карточная игра для всей семьи — избавься от карт первым и не забудь крикнуть УНО!',
    price: 500,
    stock: 50,
    image: 'https://hobbygames.ru/image/cache/catalog/games/uno-500x500.jpg'
  },
  {
    id: nanoid(6),
    name: 'Мафия',
    category: 'Вечеринка',
    description: 'Классическая ролевая игра — мирные жители против мафии. Кто кого перехитрит?',
    price: 600,
    stock: 35,
    image: 'https://hobbygames.ru/image/cache/catalog/games/mafiya-500x500.jpg'
  },
  {
    id: nanoid(6),
    name: 'Имаджинариум',
    category: 'Творческая',
    description: 'Придумывай ассоциации к картинкам и угадывай чужие — игра на воображение и креативность.',
    price: 1900,
    stock: 22,
    image: 'https://hobbygames.ru/image/cache/catalog/games/imaginarium-500x500.jpg'
  },
  {
    id: nanoid(6),
    name: 'Экивоки',
    category: 'Вечеринка',
    description: 'Объясняй слова жестами, словами или рисунком — кто быстрее угадает?',
    price: 1200,
    stock: 28,
    image: 'https://hobbygames.ru/image/cache/catalog/games/ekvivoki-500x500.jpg'
  },
  {
    id: nanoid(6),
    name: 'Дженга',
    category: 'Вечеринка',
    description: 'Вытаскивай блоки из башни и ставь наверх — не урони башню!',
    price: 1100,
    stock: 20,
    image: 'https://hobbygames.ru/image/cache/catalog/games/dzhenga-500x500.jpg'
  },
  {
    id: nanoid(6),
    name: 'Взрывные котята',
    category: 'Карточная',
    description: 'Безумная карточная игра — избегай взрывных котят и подставляй соперников.',
    price: 1400,
    stock: 33,
    image: 'https://hobbygames.ru/image/cache/catalog/games/vzryvnye-kotyata-500x500.jpg'
  },
];


// Swagger настройка
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API магазина настольных игр',
      version: '1.0.0',
      description: 'REST API для управления каталогом настольных игр',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Локальный сервер',
      },
    ],
  },
  apis: ['./app.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     Game:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - description
 *         - price
 *         - stock
 *       properties:
 *         id:
 *           type: string
 *           description: Автоматически сгенерированный уникальный ID игры
 *         name:
 *           type: string
 *           description: Название игры
 *         category:
 *           type: string
 *           description: Категория игры
 *         description:
 *           type: string
 *           description: Описание игры
 *         price:
 *           type: number
 *           description: Цена в рублях
 *         stock:
 *           type: integer
 *           description: Количество на складе
 *       example:
 *         id: "abc123"
 *         name: "Каркассон"
 *         category: "Стратегия"
 *         description: "Игра на выкладывание тайлов"
 *         price: 1800
 *         stock: 20
 */

function findGameOr404(id, res) {
  const game = games.find(g => g.id === id);
  if (!game) {
    res.status(404).json({ error: 'Game not found' });
    return null;
  }
  return game;
}

/**
 * @swagger
 * /api/games:
 *   get:
 *     summary: Возвращает список всех игр
 *     tags: [Games]
 *     responses:
 *       200:
 *         description: Список игр
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Game'
 */
app.get('/api/games', (req, res) => {
  res.json(games);
});

/**
 * @swagger
 * /api/games/{id}:
 *   get:
 *     summary: Получает игру по ID
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID игры
 *     responses:
 *       200:
 *         description: Данные игры
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       404:
 *         description: Игра не найдена
 */
app.get('/api/games/:id', (req, res) => {
  const game = findGameOr404(req.params.id, res);
  if (!game) return;
  res.json(game);
});

/**
 * @swagger
 * /api/games:
 *   post:
 *     summary: Создает новую игру
 *     tags: [Games]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *               - description
 *               - price
 *               - stock
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Игра успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       400:
 *         description: Ошибка в теле запроса
 */
app.post('/api/games', (req, res) => {
  const { name, category, description, price, stock } = req.body;
  if (!name || !category || !description || price == null || stock == null) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newGame = {
    id: nanoid(6),
    name: name.trim(),
    category: category.trim(),
    description: description.trim(),
    price: Number(price),
    stock: Number(stock),
  };
  games.push(newGame);
  res.status(201).json(newGame);
});

/**
 * @swagger
 * /api/games/{id}:
 *   patch:
 *     summary: Обновляет данные игры
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID игры
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Обновленная игра
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       404:
 *         description: Игра не найдена
 */
app.patch('/api/games/:id', (req, res) => {
  const game = findGameOr404(req.params.id, res);
  if (!game) return;
  const { name, category, description, price, stock } = req.body;
  if (name !== undefined) game.name = name.trim();
  if (category !== undefined) game.category = category.trim();
  if (description !== undefined) game.description = description.trim();
  if (price !== undefined) game.price = Number(price);
  if (stock !== undefined) game.stock = Number(stock);
  res.json(game);
});

/**
 * @swagger
 * /api/games/{id}:
 *   delete:
 *     summary: Удаляет игру
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID игры
 *     responses:
 *       204:
 *         description: Игра успешно удалена
 *       404:
 *         description: Игра не найдена
 */
app.delete('/api/games/:id', (req, res) => {
  const exists = games.some(g => g.id === req.params.id);
  if (!exists) return res.status(404).json({ error: 'Game not found' });
  games = games.filter(g => g.id !== req.params.id);
  res.status(204).send();
});

// 404 для остальных маршрутов
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Глобальный обработчик ошибок
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
  console.log(`Swagger UI доступен по адресу http://localhost:${port}/api-docs`);
});
