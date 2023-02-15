import { Movie } from "./movie";
import { Imdb } from "./imdb";

const fs = require("fs");


let peli1 = new Movie("Programacion1",2023,"Espanyola","ficcion");
let peli2 = new Movie("Programacion2",2022,"Argentina","documental");

let arrPelis: Movie[] = [peli1,peli2];

let imdbTest = new Imdb( arrPelis );

// Paso 1

//console.log( imdbTest );

//console.log(JSON.stringify(imdbTest));

// Paso 2

fs.writeFileSync("ImdbBBDD.json", JSON.stringify(imdbTest));


// Paso 4  

let imdbInst: Imdb = new Imdb([]);

imdbInst = JSON.parse(fs.readFileSync("./imdbBBDD.json"));

//console.log(imdbTest);


// Paso 7

let imdb002 = new Imdb( arrPelis);

imdb002.escribirEnFicheroJSON("Peligros");

// Paso 7.b

console.log(imdb002.obtenerInstanciaIMDB("peligros"));



