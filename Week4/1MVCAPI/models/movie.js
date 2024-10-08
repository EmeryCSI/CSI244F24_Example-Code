//The model is responsible for interacting with permanent storage
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "movies.json");

//we are ready to create our model
class Movie {
  //define all of the operations I want to do involving movies
  static getAll() {
    //return all movies as json
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  }
  //lets make a getbyid
  static getById(id) {
    const movies = this.getAll();
    return movies.find((movie) => movie.id === parseInt(id));
  }
}

//export the Movie class so that I can use it in other modules
module.exports = Movie;
