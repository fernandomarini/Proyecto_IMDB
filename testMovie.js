"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Probar la clase Movie.
var movie_1 = require("./movie");
var professional_1 = require("./professional");
//Actors.
var benedictCumberbatch = new professional_1.Professional("Benedict Cumberbatch", 47, 85, 1.83, false, "English", 0, "Actor");
var tildaSwinton = new professional_1.Professional("Tilda Swintos", 62, 56, 1.80, false, "English", 1, "Actress");
var actors = [benedictCumberbatch, tildaSwinton];
//Director
var scottDerrickson = new professional_1.Professional("Scott Derrickson", 56, 80, 1.76, false, "English", 0, "Screenwriter, film producer, film director and writer");
//Writer
var stanLee = new professional_1.Professional("Stan Lee", 95, 90, 1.80, true, "US", 0, "Writer");
//Movie.
var doctorStrange = new movie_1.Movie("Doctor strange", 2016, "US", "adventure, fantasy and science fiction");
doctorStrange.actors = actors;
doctorStrange.director = scottDerrickson;
doctorStrange.writer = stanLee;
doctorStrange.language = "English";
doctorStrange.plataforma = "Disney Plus";
doctorStrange.isMCU = true;
doctorStrange.mainCharacterName = "Doctor Stiphen Strange";
doctorStrange.producer = "Marvel studios";
doctorStrange.distributor = "Walt Disney studios Motion Pictures";
//Probar método.
doctorStrange.printAll();
