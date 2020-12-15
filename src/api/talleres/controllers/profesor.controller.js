const Profesor = require('../models/profesor.model')
const Taller = require('../models/talleres.model')

module.exports = {
  async createProfesor(req, res) {
    try {
      const result = await Profesor.create(req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al crear al profesor.",
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

  async getProfesor(req, res) {
    try {
      const result = await Profesor.findById(req.params._id);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al obtener al Profesor.",
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

  async getAllProfesor(req, res) {
    try {
      const result = await Profesor.find();
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al obtener los Profesores",
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


  async updateProfesor(req, res, next) {
    try {
      const result = await Profesor.findOneAndUpdate(req.params._id, req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede actualizar el datos del Profesor.",
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
  async deleteProfesor(req, res) {
    try {
      const result = await Profesor.findByIdAndDelete(req.params._id);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede borrar al Profesor.",
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
  // 5fbabffa3dd14f002e6c2ada

};