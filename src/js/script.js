// 'use strict';
// const numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// const oneFromLastFilm = prompt('Один из последних просмотренных фильмов?', ''); 
// const whatGrageFilm = prompt('На сколько оцените его?', '');
// const oneFromLastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
// const whatGrageFilm2 = prompt('На сколько оцените его?', '');
// 
// const personalMovieDB = {
    // count: numbersOfFilms,
    // movies: {},
    // actors: {},
    // genres: [],
    // privat: false,
// 
// };
// personalMovieDB.movies[oneFromLastFilm] = whatGrageFilm;
// personalMovieDB.movies[oneFromLastFilm2] = whatGrageFilm2;
// 
// console.log(personalMovieDB);

'use strict';
let numbersOfFilms;
let oneFromLastFilm;
let oneFromLastFilm2;
let whatGrageFilm;
const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};
function questionAboutAmountOfFilms() {
    loop1:
for(let i = 0; i < 1; i++) {
    numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    personalMovieDB.count = numbersOfFilms;
    if(numbersOfFilms === '' || numbersOfFilms === null || isNaN(numbersOfFilms) ) {
        --i;
        continue loop1;
    }else break;
}
return numbersOfFilms;
}
questionAboutAmountOfFilms();

function questionAboutLastOfFilms() {
    for (let i = 0; i < 2; i++) {
        loop12:
    for(let i = 0; i < 1; i++) { 
    oneFromLastFilm = prompt('Один из последних просмотренных фильмов?', '');
    whatGrageFilm = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[oneFromLastFilm] = whatGrageFilm;
    if(oneFromLastFilm === '' || oneFromLastFilm === null || oneFromLastFilm.length > 50 || whatGrageFilm === '' || whatGrageFilm === null) {
        --i;
        continue loop12;
    }else break;
}
    }
return oneFromLastFilm, whatGrageFilm;
}
questionAboutLastOfFilms();

function answerForViewer()  {
    if(personalMovieDB.count < 10)alert("Просмотрено довольно мало фильмов");
    else if(personalMovieDB.count <= 30)alert("Вы классический зритель");
    else if(personalMovieDB.count > 30 )alert("Вы киноман");
    else alert('Произошла ошибка');
}
answerForViewer();

function showMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    } 
}
showMyDB();

function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        let whatGenresDoYouLike = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(whatGenresDoYouLike);
    }
        return personalMovieDB.genres;
}
alert(writeYourGenres());








// 'use strict';
// const numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// const oneFromLastFilm = prompt('Один из последних просмотренных фильмов?', ''); 
// const whatGrageFilm = prompt('На сколько оцените его?', '');
// const oneFromLastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
// const whatGrageFilm2 = prompt('На сколько оцените его?', '');
// 
// const personalMovieDB = {
    // count: numbersOfFilms,
    // movies: {},
    // actors: {},
    // genres: [],
    // privat: false,
// 
// };
// personalMovieDB.movies[oneFromLastFilm] = whatGrageFilm;
// personalMovieDB.movies[oneFromLastFilm2] = whatGrageFilm2;
// 
// console.log(personalMovieDB);