function Movie(title, durationMovie, genre) {
    this.title = title;
    this.durationMovie = durationMovie;
    this.genre = genre;
}

var controller = {
    createMovie: function(title, duration, genre) {
        var m = new Movie(title, duration, genre);
        model.addMovie(m, this.onAdded);
    },
    onAdded: function(movie) {
        view.onMovieAdded(movie);
    }
}