
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
    numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
    if(numbersOfFilms === '' || numbersOfFilms === null || isNaN(numbersOfFilms) ) {
        --i;
        continue loop1;
    }
    personalMovieDB.count = numbersOfFilms;
}
return numbersOfFilms;
}
questionAboutAmountOfFilms();

function questionAboutLastOfFilms() {
    for (let i = 0; i < 2; i++) {
        loop12:
    for(let i = 0; i < 1; i++) { 
    oneFromLastFilm = prompt('Один из последних просмотренных фильмов?', '').trim();
    whatGrageFilm = prompt('На сколько оцените его?', '').trim();
    if(oneFromLastFilm === '' || oneFromLastFilm === null || oneFromLastFilm.length > 50 || whatGrageFilm === '' || whatGrageFilm === null) {
        --i;
        continue loop12;
    }
    personalMovieDB.movies[oneFromLastFilm] = whatGrageFilm;
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
    loop3:
    for(let i = 1; i < 4; i++) {
        let whatGenresDoYouLike = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if(whatGenresDoYouLike === '' || whatGenresDoYouLike === null || whatGenresDoYouLike === Number) {
            --i;
            continue loop3;
        }
        
        personalMovieDB.genres.push(whatGenresDoYouLike);
    }
        return personalMovieDB.genres;
}
console.log(writeYourGenres());