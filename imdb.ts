
import { Movie } from "./movie";
const fs = require("fs");

class Imdb {

    public peliculas: Movie[];

    constructor( arr: Movie[]){
        this.peliculas = arr;
    };

    public escribirEnFicheroJSON(nombreFichero :string){       
        fs.writeFileSync(nombreFichero, JSON.stringify(this.peliculas));
    };

    public obtenerInstanciaIMDB(nombreFichero:string){
        return JSON.parse(fs.readFileSync(nombreFichero))
    };

};


export { Imdb }

