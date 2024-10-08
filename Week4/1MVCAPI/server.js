//first we import
const express = require("express");
const cors = require("cors");
//bring in your routes
const movieRoutes = require("./routes/movieroutes");

//Other imports as needed

const PORT = 3000;
const app = express();

//next we setup middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//defined endpoints app.get, app.post
app.use("/movies", movieRoutes);

//we listen  on a port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
