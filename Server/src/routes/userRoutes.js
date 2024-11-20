import express from "express";
import UserController from "../controllers/userController.js";
import UserModal from "../models/user.js";
import jwtAuth from "../middlewares/authMiddleware.js";

const userController = new UserController();
const userRoute = express.Router();

// Signup route
userRoute.post("/signup", userController.signUp);

// Signin route
userRoute.post("/signin", userController.signIn);

  userRoute.get('/profile',jwtAuth,userController.getProfile)
// Check email existence route
userRoute.post("/signin/check-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const emailExist = await UserModal.findOne({ email }); // Asynchronous query
    if (emailExist) {
      console.log("Email already exists");
      return res.status(400).json({ error: "Email already exists" });
    }
    return res.status(200).json({ message: "Email is available" });
  } catch (error) {
    console.error("Error checking email:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});



export default userRoute;
