
var movies = [];

var model = {
    addMovie: function(movie, callback) {
        movies.push(movie);
        callback(movie);
    }
}