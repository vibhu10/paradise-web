// user profile,account related  routes (all users)
import express from 'express'
import UserController from '../controllers/userController.js';

const userController=new UserController()
const userRoute=express.Router();

//path for signinsignun
userRoute.post('/signup',userController.signUp);

userRoute.post('/signin',userController.signIn);


export default userRoute;
