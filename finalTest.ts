import { Professional } from "./professional";
import { Imdb } from "./imdb";
import { Movie } from "./movie";


const readlineSync  = require ( 'readline-sync' );
const fs = require("fs");


let filmFinal = new Movie("Proyecto Final",2023,"Española","Ciencia Ficcion");

let directorFinal = new Professional(readlineSync.question('name'),
                                    readlineSync.question('age'),
                                    readlineSync.question('weight'),
                                    readlineSync.question('height'),
                                    readlineSync.question('isRetired'),
                                    readlineSync.question('nationality'),
                                    readlineSync.question('oscarsNumber'),
                                    readlineSync.question('preofession'));

console.log(filmFinal);

filmFinal.director = directorFinal;





