const especialidadController = require('./especialidad.controller');

const express = require('express');
const especialidadRouter = express.Router();

//Create Especialidad
especialidadRouter.post(
    '/',
    especialidadController.createEspecialidad);

//Update Especialidad by id
especialidadRouter.put(
    '/:id',
    especialidadController.updateEspecialidad);

//Delete Especialidad by id
especialidadRouter.delete(
    '/:id',
    especialidadController.deleteEspecialidad);

//Get All Especialidades
especialidadRouter.get(
    '/',
    especialidadController.getEspecialidades);

//Get One Especialidad by id
especialidadRouter.get(
    '/:id',
    especialidadController.getEspecialidad);

module.exports = especialidadRouter;
