const especialidadController = require('./especialidad.controller');

const express = require('express');
const especialistaController = require('../especialistas/especialista.controller');
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

//Get All horas de una especialidad
especialidadRouter.get(
    '/:id/horas',
    especialidadController.getHorasEspecialidad
);

module.exports = especialidadRouter;
