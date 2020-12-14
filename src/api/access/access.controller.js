const userController = require('./user.controller')
const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors')
const dotenv = require('dotenv');
dotenv.config();

const {
    LOGIN_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_SECRET
} = process.env;



module.exports = {
    async generateLoginToken(email, password){
        const user = await userController.getUserByEmail(email)
        if(!user) throw createHttpError(404)
        const loginToken = jwt.sign({email}, LOGIN_TOKEN_SECRET, {expiresIn: '2h'})
        return loginToken
    },
    async authenticateLoginToken(token){
        try{
            return jwt.verify(token, LOGIN_TOKEN_SECRET)
        }catch(e){
            return 
        }
    }
}