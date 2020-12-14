const fichaNutricionistaController = require('./fichaNutricionista.controller.js');

const express = require('express');
const fichaNutricionistaRouter = express.Router();

//Create Hora
fichaNutricionistaRouter.post(
    '/',
    fichaNutricionistaController.createFichaNutricionista);

//Update Hora by id
fichaNutricionistaRouter.put(
    '/:id',
    fichaNutricionistaController.updateFichaNutricionista);

//Delete Hora by id
fichaNutricionistaRouter.delete(
    '/:id',
    fichaNutricionistaController.deleteFichaNutricionista);

//Get All Horas
fichaNutricionistaRouter.get(
    '/',
    fichaNutricionistaController.getFichasNutricionista);

//Get One Hora by id
fichaNutricionistaRouter.get(
    '/:id',
    fichaNutricionistaController.getFichaNutricionista);

module.exports = fichaNutricionistaRouter;
