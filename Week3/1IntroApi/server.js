//import our libraries
const express = require("express");
const cors = require("cors");

//next we make an app
const app = express();
const PORT = 3000;

//Define Middleware
//middleware is simply functions that run on every request
app.use(express.json());
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
