const express = require("express");
const imagenTallerRouter = express.Router();
const imagenTallerController = require("../controllers/imagenTaller.controller");

imagenTallerRouter.post("/add", imagenTallerController.createImagenTaller);

//Delete Area by id
imagenTallerRouter.delete("/delete/:_id", imagenTallerController.deleteImagenTaller);

//Get All Areas
imagenTallerRouter.get("/", imagenTallerController.getAllImagenTaller);

//Get One Area by id sds
imagenTallerRouter.get("/:_id", imagenTallerController.getImagenTaller);
 
imagenTallerRouter.put("/addImagenTaller/:_id", imagenTallerController.addImagenTaller);

imagenTallerRouter.put("/editImagenTaller/:_id", imagenTallerController.updateTaller);


module.exports = imagenTallerRouter;