//Use express router to connect paths "/movie:id" with controller methods
const express = require("express");
const MovieController = require("../controllers/moviecontroller");

//create a router object
const router = express.Router();

//define the routes - connect a path to a method in the controller
//if a request comes into the root of this router send all movies
// - /movies
router.get("/", MovieController.getAllMovies);

//get by id
// - /movies:id
router.get("/:id", MovieController.getMovieById);

module.exports = router;
