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
      - [Slider с товарами](#slider-с-товарами)
    - [Раздел "Отзывы"](#раздел-отзывы)
    - [Раздел "Откуда"](#раздел-откуда)
  - [💻 Стек технологий](#-стек-технологий)
  - [⏬ Установка](#-установка)
  - [Автор](#автор)

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
- "Откуда"

Вёрстка сайта адаптивна для Desktop и мобильных устройств. Адаптивность — "Mobile First".

### Раздел "Описание"

![image](https://github.com/user-attachments/assets/59176663-2e79-429e-a862-b4df77278770)

#### Slider с товарами

Slider (мобильные устройства):

![image](https://github.com/user-attachments/assets/948370ef-448b-4298-a0bf-0b184a9647fe)

Slider (Desktop):

![image](https://github.com/user-attachments/assets/833ec215-c942-4ef9-a2a9-d25bcfefaad6)

### Раздел "Отзывы"

![image](https://github.com/user-attachments/assets/f62e74f7-b647-49e5-ab56-5421846186d4)

### Раздел "Откуда"

![image](https://github.com/user-attachments/assets/af3ea3f2-2fb2-4a0f-baaf-2cb268c3471e)

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

Клонируем удалённый репозиторий на локальную машину и устанавливаем все необходимые компоненты:

```markdown
git clone https://github.com/Nico-kun123/layout-INLINE
cd layout-INLINE
npm i
```

Содержание <code>package.json</code>:

```json
{
  "name": "layout-inline",
  "author": {
    "name": "Nicolay Kudryavtsev"
  },
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "build:preview": "npm run build && npm run preview",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "format": "prettier --write \"./**/*.{js,jsx,mjs,cjs,ts,tsx,json,md}\"",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "dependencies": {
    "gh-pages": "^6.1.1",
    "vue": "^3.4.29",
    "vue-router": "^4.3.3"
  },
  "devDependencies": {
    "@rushstack/eslint-patch": "^1.8.0",
    "@vitejs/plugin-vue": "^5.1.2",
    "@vue/eslint-config-prettier": "^9.0.0",
    "eslint": "^8.57.0",
    "eslint-plugin-vue": "^9.23.0",
    "prettier": "^3.2.5",
    "sass": "^1.77.8",
    "vite": "^5.4.2",
    "vite-plugin-purgecss-updated-v5": "^1.2.1"
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
