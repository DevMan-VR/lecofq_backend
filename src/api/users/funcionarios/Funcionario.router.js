const express = require("express");
const funcionarioRouter = express.Router();
const funcionarioController = require("./Funcionario.controller");
const auth = require("../middleware/Auth");
const cors = require("cors");

funcionarioRouter.get("/check",funcionarioController.check);

funcionarioRouter.post("/createAdmin", cors(),funcionarioController.createAdmin);

funcionarioRouter.post("/add", cors(), auth.verify,funcionarioController.createFuncionario);

//Update Area by id
funcionarioRouter.put("/edit/:_id", auth.verify,funcionarioController.updateFuncionario);

//Delete Area by id
funcionarioRouter.delete("/delete/:_id", auth.verify,funcionarioController.deleteFuncionario);

//Get All Areas
funcionarioRouter.get("/", cors(), auth.verify,funcionarioController.getAllFuncionarios);

//Get One Area by id
funcionarioRouter.post("/funcionario", auth.verify,funcionarioController.getFuncionario);

funcionarioRouter.get("/checkLogin", auth.verify, funcionarioController.checkLogin);

funcionarioRouter.post("/login",funcionarioController.getFuncionarioByLoginAccess);

//funcionarioRouter.get("/login", auth.verify,funcionarioController.getFuncionarioByLoginAccess);

module.exports = funcionarioRouter;
