# Сайт Hacker News Avito

## Описание

Сервис по поиску новостей

## [Ссылка на решение на GH Pages](https://rusakovnikki.github.io/avito_intern/)

## Установка

```sh
cd aito_intern-main
yarn install
yarn start
```

### yarn install

Команда для скачивания всех необходимых пакетов

### yarn start

Запускает приложение в режиме разработки.
Откройте http://localhost:3000, чтобы просмотреть его в браузере.

## Использование

- ul Просмотр топ-100 новостей, отсортированные по новизне, где имеется:
  - ul название
  - ul рейтинг
  - ul ник автора
  - ul дата публикации
  - ul количество комментариев
  - ul список новостей обновляется раз в минуту без участия пользователя
  - ul кнопка для принудительного обновления списка новостей

* ul Переход на выбранную новость чтобы посмотреть следующие:
  - ul ссылку на новость
  - ul заголовок новости
  - ul дата
  - ul автор
  - ul счётчик количества комментариев
  - ul список комментариев в виде дерева
  - ul Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой
  - ul На странице имеется кнопка для принудительного обновления списка комментариев
  - ul На странице имеется кнопка для возврата к списку новостей

## Технологии

- [Redux](https://redux-toolkit.js.org/) - Библиотека для JavaScript, предназначенная для управления состоянием приложения.
- [React](https://ru.reactjs.org/) - JavaScript-библиотека для создания пользовательских интерфейсов
- [React Router](https://reactrouter.com/en/main) - JavaScript-библиотека для создания маршрутизации в веб-приложениях
