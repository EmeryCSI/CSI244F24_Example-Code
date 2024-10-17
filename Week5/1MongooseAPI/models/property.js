//bring in mongoose
const mongoose = require("mongoose");

//next we make a schema
const propertySchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  bedrooms: Number,
  price: Number,
  dateAdded: Date,
});

//Create the model
const model = mongoose.model("Property", propertySchema);
//export that model
module.exports = model;
