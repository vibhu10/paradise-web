// property related routes host specfic
import express from "express";
import PropertyController from "../controllers/propertyController.js";

const propertyRoutes=express.Router();
const propertyController=new PropertyController()
propertyRoutes.get('/allproperties',propertyController.getAllProperties)
propertyRoutes.post('/registration',propertyController.addProperty)


export default propertyRoutes