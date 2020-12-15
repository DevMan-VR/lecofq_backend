const express = require("express");
const userRouter = express.Router();
const userController = require("./user.controller");
const cors = require("cors");

userRouter.post("/add", cors(), userController.createUser);

//Update Area by id
userRouter.put("/edit/:_id", userController.updateUser);

//Delete Area by id
userRouter.delete("/delete/:_id", userController.deleteUser);

//Get All Areas
userRouter.get("/", cors(), userController.getAllUsers);

//Get One Area by id
userRouter.get("/user/:_id", userController.getUser);

module.exports = userRouter;
