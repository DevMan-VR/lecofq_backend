const Alumno = require('../models/alumno.model')


module.exports = {
  async createAlumno(req, res) {
    try {
      const result = await Alumno.create(req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al crear un alumno.",
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

  async getAlumno(req, res) {
    try {
      const result = await Alumno.findById(req.params._id);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al obtener al alumno.",
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

  async getAllAlumno(req, res) {
    try {
      const result = await Alumno.find();
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al obtener los alumnos",
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


  async updateAlumno(req, res, next) {
    try {
      const result = await Alumno.findOneAndUpdate(req.params._id, req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede actualizar el datos del alumno.",
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
  async deleteAlumno(req, res) {
    try {
      const result = await Alumno.findOneAndDelete(req.params._id);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede borrar al alumno.",
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
