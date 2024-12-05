// property related routes host specfic
import express from "express";
import PropertyController from "../controllers/propertyController.js";
import jwtAuth from "../middlewares/authMiddleware.js";
const propertyRoutes=express.Router();
const propertyController=new PropertyController()
propertyRoutes.get('/allproperties',propertyController.getAllProperties)
propertyRoutes.post('/registration', jwtAuth,propertyController.addProperty)


propertyRoutes.get('/propertiesByEmail',jwtAuth,propertyController.getPropertiesByEmail)
propertyRoutes.get('/getproperyByName',jwtAuth,propertyController.getPropertyByName)
propertyRoutes.put('/editProperty',jwtAuth,propertyController.editProperty)

export default propertyRoutes