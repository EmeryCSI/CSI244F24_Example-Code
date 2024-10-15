//try to get the connection string
require("dotenv").config();
//console.log(process.env.CONNECTION_STRING);

//bring in modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create an app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
