//The controller is where your endpoints live
//It uses the model to talk to permanent storage
const Movie = require("../models/movie");

class MovieController {
  //here is where you define your endpoints
  //get all movies
  static getAllMovies(req, res) {
    //use the model to get the movies
    const movies = Movie.getAll();
    //send it back
    res.json(movies);
  }
  //get movie by id
  static getMovieById(req, res) {
    //get request passes its data in the params
    const id = req.params.id;
    //Use Movie model to get by id
    const movie = Movie.getById(id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  }
  //create a new movie endpoint
  //this endpoint is hit by a post request
  static createMovie(req, res) {
    const newMovie = Movie.create(req.body);
    //send back the new record
    res.status(201).json(newMovie);
  }
}
//export the controller
module.exports = MovieController;
