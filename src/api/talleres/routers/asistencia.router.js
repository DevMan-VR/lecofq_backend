const express = require("express");
const asistenciaRouter = express.Router();
const asistenciaController = require("../controllers/asistencia.controller");


// Traer todo
asistenciaRouter.get("/", asistenciaController.getAllAsistencia);
// Agregar
asistenciaRouter.post("/add", asistenciaController.createAsistencia);

// Actualizar
asistenciaRouter.put("/edit/:_id", asistenciaController.updateAsistencia);

// Borrar
asistenciaRouter.delete("/delete/:_id", asistenciaController.deleteAsistencia);

//Get One Area by id sds
asistenciaRouter.get("/asistencia/:_id", asistenciaController.getAsistencia);

// Get Alumno x Asistencia
asistenciaRouter.get("/alumnos/:idTaller", asistenciaController.getAllAlumno);


module.exports = asistenciaRouter;