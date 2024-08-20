# Тестовое задание в компании “Инлайн” на позицию “Junior-frontend разработчик”

> [!NOTE]
>
> Этот проект НЕ требует постоянных обновлений кода.

> **Статус Проекта:**
>
> 🟩 Активен / Актуален.

## 📑Содержание

- [Тестовое задание в компании “Инлайн” на позицию “Junior-frontend разработчик”](#тестовое-задание-в-компании-инлайн-на-позицию-junior-frontend-разработчик)
  - [📑Содержание](#содержание)
  - [❗ Цели и задача](#-цели-и-задача)
  - [Основная работа](#основная-работа)
    - [Раздел "Описание"](#раздел-описание)
    - [Раздел "Отзывы"](#раздел-отзывы)
    - [Раздел "Откуда?"](#раздел-откуда)
  - [💻 Стек технологий](#-стек-технологий)
  - [⏬ Установка](#-установка)
  - [Автор](#автор)

ПРИМЕРЫ СООБЩЕНИЙ:

> [!NOTE]
> текст.
> [!TIP]
> текст.
> [!WARNING]
> текст.
> [!CAUTION]
> текст.
> [!IMPORTANT]
> текст.

---

## ❗ Цели и задача

Сверстать адаптивно и кроссбраузерно три экрана: <https://www.figma.com/design/lRCxn0GjH8vBDPi5Nq70rw/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%98%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD?node-id=0-1&t=9JCdZ5SmXAJR0Wlh-0>

Обязательные условия:

1. Продумать и выполнить декомпозицию блоков с возможностью их переиспользования. Применить методологию БЭМ по международному образцу: block\_\_element--modifier. Имена классов должны быть понятны и читабельны.
2. Залить проект на gitlab или github
3. Написать в README.md инструкцию как развернуть проект.

Требования к функционалу :

1. Табы (ОПИСАНИЕ ОТЗЫВЫ ОТКУДА?) сделать рабочими с помощью JS.
2. Карточки продуктов поместить в слайдер <https://swiperjs.com/> и при сужении экрана слайдер должен разблокироваться и карточки пролистываться. Если карточки помещаются на экран (с учетом отступов), слайдер неактивен. Как альтернатива слайдеру, допустимо сделать пролистывание с помощью css-свойства overflow.

---

## Основная работа

Для данного сайта предусмотрено 3 раздела:

- "Описание"
- "Отзывы"
- "Откуда?"

Вёрстка сайта адаптивна для Desktop и мобильных устройств.

### Раздел "Описание"

ы

### Раздел "Отзывы"

ы

### Раздел "Откуда?"

ы

---

## 💻 Стек технологий

В проекте был использован следующий стек технологий:

- [HTML](https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Vue.js](https://vuejs.org)
- [Git](https://git-scm.com/)
- [Sass](https://sass-lang.com/)
- [Vite.js](https://vitejs.dev)
- [gh-pages (Github Pages)](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

---

## ⏬ Установка

Клонируем удалённый репозиторий на локальную машину:

```markdown
git clone https://github.com/Nico-kun123/
```

Устанавливаем все необходимые компоненты:

```markdown
npm install
```

Содержание <code>package.json</code>:

```json
{
  "name": "my-portfolio",
  "version": "0.0.0",
  "description": "Мой гайд по более быстрому старту и ускорению разработки проектов 😎",
  "private": true,
  "homepage": "https://nico-kun123.github.io/",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "npm run build && vite preview",

    "test:unit": "vitest",
    "test": "jest --config=jest.config.js --watchAll --cache",
    "coverage": "jest --config=jest.config.js --coverage --watchAll --cache",
    "clearCache": "jest --clearCache",

    "type-check": "vue-tsc --build --force",

    "lint": "eslint src --ext .ts",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "lint:fix": "npm run lint -- --fix",

    "format": "prettier --write src/",

    "deploy": "npm run build && gh-pages -d dist"
  },
  "keywords": [],
  "author": {
    "name": "Nicolay Kudryavtsev"
  },
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "@jest/globals": "^29.7.0",
    "@types/jest": "^29.5.11",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  }
}
```

В проекте есть следующие разделы:

- **dependencies**: Это пакеты, необходимые для работы приложения.
- **devDependencies**: Это пакеты, которые нужны только для разработки и тестирования приложения. Они не будут включены в окончательную сборку приложения.

В проекте есть следующие скрипты:

- **"dev"**. Этот скрипт запускает сервер разработки Vite на локальной машине;
- **"build"**. Этот скрипт используется для сборки проекта для production. Он минимизирует и оптимизирует код для лучшей производительности в production;
- **"preview"**. Этот скрипт предназначен для предварительного просмотра собранного проекта. Он запускает сервер, который позволяет увидеть, как он будет выглядеть и работать в production;
- **"build:preview"**. Сборка проекта в production и его предварительный просмотр.
- **"lint"**. _ESLint_ — это инструмент, помогающий анализировать написанный на JavaScript код, находить синтаксические ошибки и автоматически их исправлять, писать аккуратный код в едином стиле по определённым правилам.
- **"format"**. Автоматически форматирует код, используя "Prettier".
- **"deploy"**. Этот скрипт сначала собирает проект, а затем развертывает его на "GitHub Pages".

---

## Автор

Кудрявцев Николай (Электронная почта: <nicolay.kudryavtsev@gmail.com>)
