const User = require("./user.model");

module.exports = {
  async createUser(req, res) {
    try {
      console.log("save!");
      const result = await User.create(req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al crear un Usuario.",
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

  async getUser(req, res) {
    try {
      const result = await User.findById(req.params._id);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al obtener el Usuario.",
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

  async getAllUsers(req, res) {
    try {
      const result = await User.find();
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al obtener los Usuarios",
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

  async updateUser(req, res, next) {
    try {
      const result = await User.findOneAndUpdate(req.params._id, req.body);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede actualizar el Usuario.",
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
  async deleteUser(req, res) {
    try {
      const result = await User.findOneAndDelete(req.params._id);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "No se puede borrar el Usuario.",
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
};
