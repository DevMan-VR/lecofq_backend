const fichaPsicologoController = require('./fichaPsicologo.controller.js');

const express = require('express');
const fichaPsicologoRouter = express.Router();

//Create Hora
fichaPsicologoRouter.post(
    '/',
    fichaPsicologoController.createFichaPsicologo);

//Update Hora by id
fichaPsicologoRouter.put(
    '/:id',
    fichaPsicologoController.updateFichaPsicologo);

//Delete Hora by id
fichaPsicologoRouter.delete(
    '/:id',
    fichaPsicologoController.deleteFichaPsicologo);

//Get All Horas
fichaPsicologoRouter.get(
    '/',
    fichaPsicologoController.getFichasPsicologo);

//Get One Hora by id
fichaPsicologoRouter.get(
    '/:id',
    fichaPsicologoController.getFichaPsicologo);

module.exports = fichaPsicologoRouter;
