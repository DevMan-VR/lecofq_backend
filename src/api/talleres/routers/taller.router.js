const express = require("express");

const tallerRouter = express.Router();
const tallerController = require("../controllers/taller.contoller");

tallerRouter.post("/add", tallerController.createTaller);

//Update Area by id
tallerRouter.put("/edit/:_id", tallerController.updateTaller);

//Delete Area by id
tallerRouter.delete("/delete/:_id", tallerController.deleteTaller);

//Get All Areas
tallerRouter.get("/", tallerController.getAllTaller);

//Get One Area by id sds
tallerRouter.get("/:_id", tallerController.getTaller);

// sofia sofia



module.exports = tallerRouter;
