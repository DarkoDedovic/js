function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

}

Movie.prototype.getData = function () {
    return this.title + ", " + this.genre + ", " + this.length + " min.";
}

function createMovie() {
    var naslov = document.querySelector("#title").value;
    var zanr = document.querySelector("select").value;

    var trajanje = document.querySelector("#length").value;
    var newMovie = new Movie(naslov, zanr, trajanje);
    var listItem = document.createElement("li");
    var text = document.createTextNode(newMovie.getData());
    listItem.appendChild(text);
    document.querySelector("ol").appendChild(listItem);

};

function createProgram(lengthMovies,){

}
