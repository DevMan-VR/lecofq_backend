const express = require("express");
const alumnoRouter = express.Router();
const alumnoController = require("../controllers/alumno.controller");

alumnoRouter.post("/add", alumnoController.createAlumno);

//Update Area by id
alumnoRouter.put("/edit/:_id", alumnoController.updateAlumno);

//Delete Area by id
alumnoRouter.delete("/delete/:_id", alumnoController.deleteAlumno);

//Get All Areas
alumnoRouter.get("/", alumnoController.getAllAlumno);

//Get One Area by id sds
alumnoRouter.get("/taller/:_id", alumnoController.getAlumno);
 
module.exports = alumnoRouter;