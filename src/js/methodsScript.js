'use strict';
alert('HELLO');
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    questionAboutAmountOfFilms: function() {

    for(let i = 0; i < 1; i++) {
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    if(personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count) ) --i;
}
},
    questionAboutLastOfFilms: function() {
    for (let i = 0; i < 2; i++) {
        
    for(let i = 0; i < 1; i++) { 
        const oneMovie = prompt('Один из последних просмотренных фильмов?', '');
        const movieRange= prompt('На сколько оцените его?', '');
    if(oneMovie === '' || oneMovie === null || oneMovie.length > 50 || movieRange === 
'' || movieRange === null) --i;
    personalMovieDB.movies[oneMovie] = movieRange;
    }
    }
},
    answerForViewer: function()  {
    if(personalMovieDB.count < 10)alert("Просмотрено довольно мало фильмов");
    else if(personalMovieDB.count <= 30)alert("Вы классический зритель");
    else if(personalMovieDB.count > 30 )alert("Вы киноман");
    else alert('Произошла ошибка');
},
    showMyDB: function() {
    if(!personalMovieDB.privat) {
        personalMovieDB.privat = true;
    }else {
        personalMovieDB.privat = false;
        console.log(personalMovieDB);
    } 
},
    writeYourGenres: function() {

    for(let i = 1; i < 2; i++) {
        const  genre = prompt(`Ваши любимые жанры, введите через запятую`, '');
        if(genre === '' || genre === null || !isNaN(genre)) --i;
        else personalMovieDB.genres = genre.toLocaleUpperCase().split(',').sort(); 
    }
},
    withdrawGenres: function() {
        personalMovieDB.genres.forEach((item, index, arr) => {
            console.log(`Любимый жанр номер ${index + 1} - это ${item}`);
        } );

        }
};
personalMovieDB.questionAboutAmountOfFilms();
personalMovieDB.questionAboutLastOfFilms();
personalMovieDB.answerForViewer();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.withdrawGenres();