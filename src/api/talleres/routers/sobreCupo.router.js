const express = require("express");
const sobreCupoRouter = express.Router();
const profesorController = require("../controllers/sobreCupo.controller");

sobreCupoRouter.post("/add", profesorController.createSobreCupo);

//Update Area by id
sobreCupoRouter.put("/edit/:_id", profesorController.updateSobreCupo);

//Delete Area by id
sobreCupoRouter.delete("/delete/:_id", profesorController.deleteSobreCupo);

//Get All Areas
sobreCupoRouter.get("/", profesorController.getAllSobreCupo);

//Get One Area by id sds
sobreCupoRouter.get("/taller/:_id", profesorController.getSobreCupo);
 
module.exports = sobreCupoRouter;