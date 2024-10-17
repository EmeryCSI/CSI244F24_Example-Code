//import the property model
const Property = require("../models/property");

//get all properties
//you can add things to exports
//and then skip the exports statement
//GET - /api/properties
exports.getAllProperties = async (req, res) => {
  try {
    //find() takes a filter object and returns all records that match
    //if it is passed nothing it returns everything
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};
//GET - /api/properties/:id
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};
//Update a property
//PUT - api/properties/:id
exports.updateProperty = async (req, res) => {
  const id = req.params.id;
  const input = req.body;
  try {
    const property = await Property.findByIdAndUpdate(id, input);
    res.json(property);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};

//Create a property
//POST - /api/property
exports.createProperty = async (req, res) => {
  const input = req.body;
  //create a new instance of Property
  const property = new Property(input);
  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (error) {
    //send them a 500(badRequest)
    res.status(500).json({ message: error.message });
  }
};
