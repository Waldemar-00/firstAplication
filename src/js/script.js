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
let numbersOfFilms = '';
let oneFromLastFilm = '';
let oneFromLastFilm2 = '';

loop1:
for(let i = 0; i < 10; i++) {
    numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    if(numbersOfFilms === '' || numbersOfFilms === null )continue loop1;
    else break;
}

loop12:
for(let i = 0; i < 10; i++) { 
    oneFromLastFilm = prompt('Один из последних просмотренных фильмов?', '');
    if(oneFromLastFilm === '' || oneFromLastFilm === null | oneFromLastFilm.length > 50)continue loop12;
    else break;
}
const whatGrageFilm = prompt('На сколько оцените его?', '');

loop21:
for(let i = 0; i < 10; i++) {
    oneFromLastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
    if(oneFromLastFilm2 === '' || oneFromLastFilm2 === null || oneFromLastFilm2.length > 50) 
    continue loop21;
    else break;
} 
const whatGrageFilm2 = prompt('На сколько оцените его?', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};
if(personalMovieDB.count < 10)alert("Просмотрено довольно мало фильмов");
else if(personalMovieDB.count <= 30)alert("Вы классический зритель");
else if(personalMovieDB.count > 30 )alert("Вы киноман");
personalMovieDB.movies[oneFromLastFilm] = whatGrageFilm;
personalMovieDB.movies[oneFromLastFilm2] = whatGrageFilm2;
console.log(personalMovieDB);

