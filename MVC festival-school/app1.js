
var uiModule = (function () {

    function getData() {
        var movieTitle = document.querySelector(".movie-title");
        var movieLength = document.querySelector(".movie-length");
        var dropDownList = document.querySelector(".genre-select");

        var title = movieTitle.value;
        var movieDuration = movieLength.value;
        var dropList = dropDownList.value;
        
        return {
            title: title,
            movieDuration: movieDuration,
            genreList: dropList
        }
    }
    return {
        getData: getData,
    }
})();


var ctrlModule = (function (dataControler, uiControler) {
    var formMovie = uiControler.getData();
    console.log(ctrlModule);
    
    var createMovieVar = dataControler.createMovie(formMovie);
    console.log(createMovieVar);


})(dataModule, uiModule);




var dataModule = (function () {

    function Movie(title, durationMovie, genre) {
        this.title = title;
        this.durationMovie = durationMovie;
        this.genre = genre;
    }

    Movie.prototype.showMovie = function () {
        return this.title + " " + this.durationMovie + " " + this.genre;
    }

    Movie.prototype.createMovie = function (movieObj) {

        var movie = new Movie(movieObj.title, movieObj.genreList, movieObj.movieDuration);
        return movie;

    }
    return {
        createMovie : createMovie,
    }
})();