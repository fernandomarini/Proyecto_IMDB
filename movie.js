"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    //constructor.
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    ;
    //Método publico que muestre todos los datos de las peliculas.
    Movie.prototype.printAll = function () {
        console.log("Title: " + this.title +
            "\n Release Year: " + this.releaseYear +
            "\n Actors: " + this.actors +
            "\n Nacionality: " + this.nacionality +
            "\n Director: " + this.director +
            "\n Writer: " + this.writer +
            "\n Language: " + this.language +
            "\n Plataform: " + this.plataforma +
            "\n MCU: " + this.isMCU +
            "\n Main Character: " + this.mainCharacterName +
            "\n Producer: " + this.producer +
            "\n Distributor: " + this.distributor +
            "\n Genre: " + this.genre);
    };
    ;
    return Movie;
}());
exports.Movie = Movie;
