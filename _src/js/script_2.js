// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// 
    // const imgPromoAdv = document.querySelectorAll('.promo__adv img');
    // imgPromoAdv.forEach(item => item.remove());//! delete only img
// 
    // const promoGenre = document.querySelector('.promo__genre');
    // promoGenre.textContent = 'ДРАМА';
    // const promoBg = document.querySelector('.promo__bg');
    // promoBg.style.cssText = 'background: url(img/bg.jpg) center top/cover no-repeat';
// 
    // const movieDB = {
        // movies: [
            // "Логан",
            // "Лига справедливости",
            // "Ла-ла лэнд",
            // "Одержимость",
            // "Скотт Пилигрим против..."
        // ]
    // };
// 
    // const promoInteractiveList = document.querySelector('.promo__interactive-list');
    // const childrenOfPromoInteractiveList = promoInteractiveList.children;
//    
    // function arrange(array, list) {
        // array.sort();
        // for(let i = 0; i < array.length; i++) {
            // if(array[i] == undefined)continue;   
        // list[i].textContent = `${i + 1} ${array[i]}`;
        // list[i].style.cssText = 'cursor: pointer';
        // }
    // }
    // arrange(movieDB.movies, childrenOfPromoInteractiveList);
// 
    // Second task
// 
    // const button = document.querySelector('button');
    // button.addEventListener('click', event => event.preventDefault(),);
    // const  input = document.querySelector('.adding__input');
    // const checkbox = document.querySelector('[type="checkbox"]');
// 
    // function createElement(el, text, parent ) {
        // const newElement = document.createElement(el);
        // newElement.className = 'promo__interactive-item';
        // newElement.textContent = text;
        // parent.append(newElement);
        // removeElements(childrenOfPromoInteractiveList);
    //}
    // function deleteEvent() {
        // console.dir(childrenOfPromoInteractiveList);
        // console.log(movieDB.movies);
        // if(input.value == 0)return;
        // else if (input.value.length > 21) {
        // let movie = `${input.value.slice(0, 21)}...`;
        // movieDB.movies.push(movie);
        // } else {
        // movieDB.movies.push(input.value);
    // }
    // createElement('li', ' ', promoInteractiveList);
    // arrange(movieDB.movies, childrenOfPromoInteractiveList);
    // removeElements(childrenOfPromoInteractiveList);
    // button.removeEventListener('click', deleteEvent);
    // console.log(movieDB.movies);
    // }
    // button.addEventListener('click', deleteEvent);
    // button.addEventListener('click', () => {
        // if (checkbox.checked)console.log("Добавляем любимый фильм");
    // });
// 
    // function removeElements(list) {
        // let arr = Array.from(list);
        // for (let i in list) {
            // let j = - 1;
            // if(i >= list.length - 1)return;
            // list[i].onclick = () => {
                // if( confirm('Delete movie?') ) {
                    // list[i].remove();
                    // movieDB.movies.splice( (i), 1, undefined);
                    // movieDB.movies.sort();
                    // console.log(movieDB.movies);
                    // arrange(movieDB.movies, list);
                    // }
                // };
            // j++;
        // }
    // }
    // removeElements(childrenOfPromoInteractiveList);
// 
//! Second task
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
// Возьмите свой код из предыдущей практики

//});
'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});