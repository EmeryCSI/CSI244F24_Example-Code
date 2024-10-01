//import our libraries
const express = require("express");
const cors = require("cors");

//next we make an app
const app = express();
const PORT = 3000;

//Define Middleware
//middleware is simply functions that run on every request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//sample data

let courses = [
  { id: 1, name: "CSI-100", teacher: "Lhoucine" },
  { id: 2, name: "CSI-144", teacher: "Dimpy" },
  { id: 3, name: "CSI-300", teacher: "Naser" },
];

//define endpoints
//GET is for retrieving data
//GET is the default request type
//GET pass data in the query string (req.query object)
//A GET request should NOT change or create any data
app.get("/", (req, res) => {
  res.send("Working");
});

//GET All Courses
app.get("/courses", (req, res) => {
  res.json(courses);
});
//GET just one course by id
//route parameter :param
//if a parameter is passed it will be available in req.params
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const course = courses.find((c) => c.id === parseInt(id));
  //how do we check to see if we found anything
  //truthy falsy values
  if (!course) {
    return res.status(404).send("Course not found");
  }
  //we know we found a course
  res.json(course);
});

//POST request typically used to create a new record
//POST request passes data in the body
app.post("/courses", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
