//import express
const express = require("express");
const propertyController = require("../controllers/propertyController");
const router = express.Router();

router.get("/", propertyController.getAllProperties);
router.get("/:id", propertyController.getPropertyById);
//is this gonna work?
router.post("/", propertyController.createProperty);
