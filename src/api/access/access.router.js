const express = require('express');
const userRouter = express.Router();
const accessController = require('./access.controller')

userRouter.post('/loginToken', async (req, res, next) => {
    try{
        const { email, password } = req.body
        const loginToken = await accessController.generateLoginToken(email)
        
    }catch(e){
        next(e)
    }
})

