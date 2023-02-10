//Clase Movie
import { Professional } from "./professional";

export class Movie{
    public title:string;
    public releaseYear:number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer:Professional;
    public language:string;
    public plataforma: string;
    public isMCU:boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre:string;

    //constructor.
    constructor (title:string, releaseYear:number, nacionality:string, genre: string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre= genre;
    };

    //Método publico que muestre todos los datos de las peliculas.
    public printAll():void{
        console.log("Title: "+ this.title +
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
}

