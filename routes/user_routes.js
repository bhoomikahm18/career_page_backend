const express = require('express');
const { register, login, getAllUsers } = require('../controllers/user_controller.js');

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/getAllUser", getAllUsers);

module.exports = userRouter;