const Taller = require('../models/talleres.model')
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {
  async createTaller(req, res) {
    try {
      console.log(req.body)
      const result = await Taller.create(req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al crear un taller.",
          code: 0,
        });
      }

      return res.json({
        status: "success",
        data: result,
        code: 1,
      });
    } catch (e) {
      console.error(e);
    }
  },

  async getTaller(req, res) {
    try {
      const result = await Taller.findById(req.params._id);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al obtener el Taller.",
          success: 0,
        });
      }
      return res.json({
        status: "success",
        data: result,
      });
    } catch (e) {
      console.error(e)
    }
  },

 /*  async getUserByEmailAndPass(req, res) {
    try {
      const result = await Taller.findOne({Correo: req.body.Correo, Password: req.body.Contrseña})
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Usuario no encontrado",
          success: 0,
        });
      }
      return res.json({
        status: "success",
        data: result,
      });
    } catch (e) {
      console.error(e)
    }
  }, */

  async getAllTaller(req, res) {
    try {
      const result = await Taller.find();
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al obtener los talleres",
          success: 0,
        });
      }
      return res.json({
        status: "success",
        data: result,
      });
    } catch (e) {
      console.error(e)
    }
  },


  async updateTaller(req, res, next) {
    try {
      const result = await Taller.findByIdAndUpdate(req.params._id, req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede actualizar el datos del taller.",
          success: 0,
        });
      }
      return res.json({
        status: "success",
        data: result,
      });
    } catch (e) {
      console.error(e);
    }
  }, 
  async deleteTaller(req, res) {
    try {
      const result = await Taller.findByIdAndDelete(req.params._id);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede borrar el taller.",
          success: 0,
        });
      }
      return res.json({
        status: "success",
        data: result,
      });
    } catch (e) {
      console.error(e)
    }
  },
  
};
