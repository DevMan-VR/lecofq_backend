const sobreCupo = require('../models/sobreCupo.model')


module.exports = {
  async createSobreCupo(req, res) {
    try {
      const result = await sobreCupo.create(req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al crear un sobre cupo.",
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

  async getSobreCupo(req, res) {
    try {
      const result = await sobreCupo.findById(req.params._id);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al obtener el sobre cupo.",
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

  async getAllSobreCupo(req, res) {
    try {
      const result = await sobreCupo.find();
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al obtener todos los sobre cupos",
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


  async updateSobreCupo(req, res, next) {
    try {
      const result = await sobreCupo.findOneAndUpdate(req.params._id, req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede actualizar el sobre cupo.",
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
  async deleteSobreCupo(req, res) {
    try {
      const result = await sobreCupo.findOneAndDelete(req.params._id);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede borrar el sobre cupo.",
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