'use strict';
const numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const oneFromLastFilm = prompt('Один из последних просмотренных фильмов?', ''); 
const whatGrageFilm = prompt('На сколько оцените его?', '');
const oneFromLastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
const whatGrageFilm2 = prompt('На сколько оцените его?', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};
personalMovieDB.movies[oneFromLastFilm] = whatGrageFilm;
personalMovieDB.movies[oneFromLastFilm2] = whatGrageFilm2;

console.log(personalMovieDB);
