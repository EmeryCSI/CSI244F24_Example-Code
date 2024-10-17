//import express
const express = require("express");
const propertyController = require("../controllers/propertyController");
const router = express.Router();

router.get("/", propertyController.getAllProperties);
router.get("/:id", propertyController.getPropertyById);
//is this gonna work?
//we have to have an owner to create a property
router.post("/owner/:ownerid", propertyController.createProperty);

module.exports = router;
