var view = {
    onCreateClick: function () {
        var movieTitle = document.querySelector(".movie-title");
        var movieLength = document.querySelector(".movie-length");
        var dropDownList = document.querySelector(".genre-select");

        var title = movieTitle.value;
        var movieDuration = movieLength.value;
        var dropList = dropDownList.value;

        controller.createMovie(title, movieDuration, dropList);
    },
    onMovieAdded: function(newMovie) {
        var movieSelectElement = document.querySelector('.movie-select');
        var opt = document.createElement('option');
        opt.value = newMovie.title;
        opt.innerHTML = newMovie.title;
        movieSelectElement.appendChild(opt);
    }
}