import { Movie } from "./movie";
import { Imdb } from "./imdb";

let peli1 = new Movie("Programacion1",2023,"Espanyola","ficcion");
let peli2 = new Movie("Programacion2",2022,"Argentina","documental");

let arrPelis: Movie[] = [peli1,peli2];

let imdbTest = new Imdb( arrPelis );

console.log( imdbTest );