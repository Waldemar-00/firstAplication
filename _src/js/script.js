//!First task
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
//? delete all block const promoAdv = document.querySelector('.promo__adv');
//? promoAdv.remove();
const imgPromoAdv = document.querySelectorAll('.promo__adv img');
imgPromoAdv.forEach(item => item.remove());//! delete only img

const promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'ДРАМА';
const promoBg = document.querySelector('.promo__bg');
promoBg.style.cssText = 'background: url(img/bg.jpg) center top/cover no-repeat';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const movieDBMovies = movieDB.movies.sort();
const promoInteractiveList = document.querySelector('.promo__interactive-list');
const childrenOfPromoInteractiveList = promoInteractiveList.children;

for(let i = 0; i < childrenOfPromoInteractiveList.length; i++) {
    childrenOfPromoInteractiveList[i].textContent = `${i + 1} ${movieDBMovies[i]}`;
}