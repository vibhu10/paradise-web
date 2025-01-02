import jwt from "jsonwebtoken";
import AdminModel from "../models/admin.js";
import UserModal from "../models/user.js";
import HostModal from "../models/host.js";

export default class adminController {
    async signIn(req, res) {
        const { email, password } = req.body;
        
        // Validate email and password
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        try {
            // Attempt to log in
            const result = await AdminModel.login(email, password); // Assuming `login` is asynchronous

            if (!result) {
                return res.status(400).json({ message: "Incorrect credentials." });
            }

            // Create token
            const token = jwt.sign(
                { email: result.email, id: result.id },
                process.env.JWT_SECRET, // Use environment variable for the secret
                { expiresIn: "1h" }
            );

            // Respond with token and user data
            return res.status(200).json({
                token,
                user: {
                    id: result.id,
                    name: result.name,
                    email: result.email,
                    type: result.type,
                },
            });
        } catch (error) {
            console.error("Error during sign-in:", error);
            return res.status(500).json({ message: "Internal server error." });
        }
    }

    async getAllUsers(req, res) {
        try {
            // Fetch all users from the database or mock model
            const users = await UserModal.getAllUsers(); // Ensure you're invoking the function
    
            console.log(users, "this is users");
    
            // Check if users exist
            if (!users || users.length === 0) {
                return res.status(404).json({ message: "No users found." });
            }
    
            // Respond with the list of users
            return res.status(200).json({ users });
        } catch (error) {
            console.error("Error fetching users:", error);
            return res.status(500).json({ message: "Internal server error." });
        }
    }




    async getAllHosts(req, res) {
        try {
            // Fetch all users from the database or mock model
            const users = await HostModal.getAllUsers(); // Ensure you're invoking the function
    
            console.log(users, "this is host");
    
            // Check if users exist
            if (!users || users.length === 0) {
                return res.status(404).json({ message: "No users found." });
            }
    
            // Respond with the list of users
            return res.status(200).json({ users });
        } catch (error) {
            console.error("Error fetching users:", error);
            return res.status(500).json({ message: "Internal server error." });
        }
    }
    

}
