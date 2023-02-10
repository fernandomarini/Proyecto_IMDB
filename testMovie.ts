//Probar la clase Movie.
import { Movie } from "./movie";
import { Professional } from "./professional";



//Actors.

let benedictCumberbatch: Professional = new Professional("Benedict Cumberbatch", 47, 85, 1.83, false, "English", 0, "Actor");
let tildaSwinton:Professional = new Professional("Tilda Swintos", 62, 56, 1.80, false, "English", 1, "Actress" );
let actors: Professional[] = [benedictCumberbatch, tildaSwinton]

//Director

let scottDerrickson: Professional = new Professional("Scott Derrickson", 56, 80, 1.76, false, "English", 0, "Screenwriter, film producer, film director and writer" );
//Writer
let stanLee: Professional = new Professional("Stan Lee", 95, 90, 1.80, true, "US", 0, "Writer" );
//Movie.
let doctorStrange: Movie = new Movie("Doctor strange", 2016, "US", "adventure, fantasy and science fiction");
doctorStrange.actors = actors;
doctorStrange.director = scottDerrickson;
doctorStrange.writer = stanLee;
doctorStrange.language = "English";
doctorStrange.plataforma = "Disney Plus";
doctorStrange.isMCU = true;
doctorStrange.mainCharacterName ="Doctor Stiphen Strange";
doctorStrange.producer = "Marvel studios";
doctorStrange.distributor = "Walt Disney studios Motion Pictures";

//Probar método.
doctorStrange.printAll();

