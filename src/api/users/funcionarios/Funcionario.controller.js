const Funcionario = require("./Funcionario.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const LOGIN_TOKEN_SECRET = "secret";

function generateToken(user) {
  return jwt.sign({ data: user }, LOGIN_TOKEN_SECRET, { expiresIn: "2h" });
}

module.exports = {
  async createAdmin(req, res) {
    try {
      const admin = await Funcionario.findOne({email: "admin"}).exec();

      if (admin) {
        return res.json({
          status: "failed",
          msg: "Error",
          success: 0,
        });
      }else{
        const result = req.body;
        result.email = "admin"
        result.password = bcrypt.hashSync("admin", 10);

        const finalResult = await Funcionario.create(result);
        if (!result) {
          return res.json({
            status: "failed",
            msg: "Error al crear un Funcionario.",
            code: 0,
          });
        }
        return res.json({
          status: "success",
          data: finalResult,
          code: 1,
        });
      }
    } catch (e) {
      console.error(e);
    }
  },

  async createFuncionario(req, res) {
    try {
      const result = req.body;
      result.password = bcrypt.hashSync(result.password, 10);
      const finalResult = await Funcionario.create(result);
      if (!result) {
        return res.json({
          status: "failed",
          msg: "Error al crear un Funcionario.",
          code: 0,
        });
      }
      return res.json({
        status: "success",
        data: finalResult,
        code: 1,
      });
    } catch (e) {
      console.error(e);
    }
  },

  async getFuncionario(req, res) {
    try {
      const result = await Funcionario.findOne({
        email: req.body.email,
      }).exec();

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

  async getFuncionarioByLoginAccess(req, res) {
    try {
      const result = await Funcionario.findOne({
        email: req.body.email,
      }).exec();
      if (!result)
        res.status(404).json({ error: "No se pudo encontrar el funcionario" });
      else {
        if (!bcrypt.compareSync(req.body.password, result.password)) {
          res.status(400).json({ error: "Contraseña Incorrecta" });
        } else {
          let tokensito = generateToken(result);

          let path = "/";

          if(req.body.email === "admin"){
            path="/Grupo2/Admin"
          }

          res.json({
            token: tokensito,
            path: path
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
  },

  async checkLogin(req, res) {
    try {
      return res.json({
        status: "success",
        data: "",
      });
    } catch (e) {
      console.error(e);
    }
  },

  async getAllFuncionarios(req, res) {
    try {
      const result = await Funcionario.find();
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

  async updateFuncionario(req, res, next) {
    try {
      const user = await Funcionario.findOne({_id : req.params._id}).exec();

      console.log("user: ", user)
      let pass = bcrypt.hashSync(req.body.password, 10);      

      const result = await Funcionario.updateOne(
        {email:user.email},
        { 
          email:user.email,
          password:pass
        }
      );

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
  async deleteFuncionario(req, res) {
    try {
      const user = await Funcionario.findOne({_id : new mongoose.mongo.ObjectID(req.params._id)}).exec();

      if(user.email != "admin"){
        const result = await Funcionario.findOneAndDelete({_id : new mongoose.mongo.ObjectID(req.params._id)});
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
      }else{
        return res.json({
          status: "failed",
          msg: "No se puede boorar este Usuario.",
          success: 0,
        });
      }
 
    } catch (e) {
      console.error(e);
    }
  },
};
