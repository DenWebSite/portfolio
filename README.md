# Моё портфолио!

## Ссылка: https://denwebsite.vercel.app/

Вы читаете readme клиентской части моего сайта визитки, который я захостил через vercel. 
На самом сайте вы можете ознакомится с моим CV, стеком технологий, проектами (не только пет!) и опытом работы. 
А ещё можете отправить заявку через специальную форму в нижней части главной страницы, либо связаться более удобным для вас способом.

## Оглавление

- [Общее](#общее)
- [Технологии](#технологии)
- [Установка и запуск](#установка-и-запуск)
- [Структура проекта](#структура-проекта)

## Общее

На сайте есть 2 страницы: главная, где представлена вся основная и необходимая информация для гостя, а так же страница
с более подробным описанием вообще всех моих проектов, достойный упоминания.

* https://denwebsite.vercel.app/ - главная страница;
* https://denwebsite.vercel.app/cases - страница с проектами.

## Технологии: 

![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![Nuxt JS](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxt.js&logoColor=#00DC82) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) 

## Структура проекта
```
portfolio-frontend/
├── app/                          Основной код приложения
│   ├── assets/               
│   │   ├── base/                 Базовые стили
│   │   │   ├── _base.scss        Глобальные стили (body, html)
│   │   │   ├── _containers.scss  # Стили контейнера
│   │   │   ├── _fonts.scss       # Подключение шрифтов
│   │   │   ├── _layout.scss      # Стили для лейаута
│   │   │   ├── _media.scss       # Медиа-запросы, ховеры
│   │   │   ├── _reset.scss       # Сброс стилей
│   │   │   ├── _utils.scss       # Вспомогательные классы
│   │   │   └── _vars.scss        # CSS(!)-переменные
│   │   ├── fonts/                # Шрифты проекта
│   │   └── main.scss             # Главный SCSS-файл
│   ├── components/               # Vue компоненты
│   ├── layouts/                  # Лейауты
│   │   └── default.vue           # Дефолтный лейаут
│   ├── pages/                    # 
│   │   └── index.vue             # Главная страница
│   │   └── cases.vue             # Cтраница с проектами
│   └── app.vue                   # Корневой компонент Vue
├── public/                       # Статические файлы, публичные
├── .env                          # Переменные окружения
├── .gitignore                    # Игнорируемые файлы для Git
├── .nuxt/                        # Служебная папка Nuxt (автогенерируемая)
├── .vercel/                      # Настройки деплоя на Vercel
├── node_modules/                 # Зависимости npm
├── nuxt.config.ts                # Конфигурация Nuxt
├── package-lock.json             # 
├── package.json                  # Список зависимостей
├── README.md                     # Документация
└── tsconfig.json                 # Настройки ts
```

## Установка и запуск

Требования: 
* установлен node.js
* установлен npm

1. Клонируйте репу
```
git clone https://github.com/DenWebSite/portfolio.git
```

2. Откройте папку с проектом и установите зависимости
```
npm i
```

3. Добавьте .env файл
```
NUXT_PUBLIC_API_BASE=ваши данные для подключения к бд
```

4. Пробуйте запустить!
```
npm run dev
```
