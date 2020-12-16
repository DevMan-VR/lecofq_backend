const express = require("express");
const funcionarioRouter = express.Router();
const funcionarioController = require("./Funcionario.controller");
const auth = require("../middleware/Auth");

funcionarioRouter.get("/check",funcionarioController.check);

funcionarioRouter.post("/createAdmin",funcionarioController.createAdmin);

funcionarioRouter.post("/add", auth.verify,funcionarioController.createFuncionario);

//Update Area by id
funcionarioRouter.put("/edit/:_id", auth.verify,funcionarioController.updateFuncionario);

//Delete Area by id
funcionarioRouter.delete("/delete/:_id", auth.verify,funcionarioController.deleteFuncionario);

//Get All Areas
funcionarioRouter.get("/", auth.verify,funcionarioController.getAllFuncionarios);

//Get One Area by id
funcionarioRouter.post("/funcionario", auth.verify,funcionarioController.getFuncionario);

funcionarioRouter.get("/checkLogin", auth.verify, funcionarioController.checkLogin);

funcionarioRouter.post("/login",funcionarioController.getFuncionarioByLoginAccess);

//funcionarioRouter.get("/login", auth.verify,funcionarioController.getFuncionarioByLoginAccess);

module.exports = funcionarioRouter;
