import express from 'express';
import adminController from '../controllers/adminController.js';
import jwtAuth from '../middlewares/authMiddleware.js';
const admincont =new adminController();
const adminRoute=express.Router();

adminRoute.post('/login',admincont.signIn)
adminRoute.get('/users',jwtAuth,admincont.getAllUsers)
adminRoute.get('/hosts',jwtAuth,admincont.getAllHosts)
export default adminRoute;