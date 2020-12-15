const express = require("express");
const profesorRouter = express.Router();
const profesorController = require("../controllers/profesor.controller");

profesorRouter.post("/add", profesorController.createProfesor);

//Update Area by id
profesorRouter.put("/edit/:_id", profesorController.updateProfesor);

//Delete Area by id
profesorRouter.delete("/delete/:_id", profesorController.deleteProfesor);

//Get All Areas
profesorRouter.get("/", profesorController.getAllProfesor);

//Get One Area by id sds
profesorRouter.get("/taller/:_id", profesorController.getProfesor);



 
module.exports = profesorRouter;