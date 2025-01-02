// handle operation for all the user
import UserModal from "../models/user.js";
import jwt from 'jsonwebtoken'
export default class userController{

    signUp(req,res){
       console.log(req.body,"data comming form form i fill")
        const{firstName,lastName,dob,email,password,type="guest",status="pending"}=req.body;
       const user= UserModal.singUp(firstName,lastName,email,password,dob,type,status)
       res.status(201).send(user);
       console.log(user)
    }
signIn(req, res) {
    const { email, password } = req.body;

    const result = UserModal.signIn(email, password);
 

    if (!result) {
        return res.status(400).send("Incorrect credentials");
    } else {
        // Creating token with additional user info, like 'id'
        const token = jwt.sign(
            { email: result.email, id: result.id }, // Include 'id' in the token payload
           process.env.JWT_SECRET, // 
            { expiresIn: "1h" }
        );
        console.log(token);
        return res.status(200).json({
            token,
            user: {
                id: result.id,
                name: result.name,
                email: result.email,
                // type: result.type,
                // mobile: result.mobile,
                // gender: result.gender,
                // address: result.address
            }
        });
    }
}


    getProfile(req, res) {
        console.log("User ID from token:",req.user?.email); // Debug: Log the user ID
    
        const userEmail = req.user?.email; // Get the user ID from the decoded token
        if (!userEmail) {
            return res.status(400).send("User ID not found in token");
        }
    
        const user = UserModal.findProfile(userEmail); // Find the user by ID
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
    console.log(user,"this is user dat from fjkljfkdjf")
        return res.status(200).json(user); // Return user data
    }
    


    updateProfile(req, res) {
        try {
            console.log("User ID from token:", req.user?.email); // Debug: Log the user ID
    
            const userEmail = req.user?.email; // Get the user ID from the decoded token
            if (!userEmail) {
                return res.status(400).send("User email not found in token");
            }
    
            const updates = req.body; // Get the fields to update from the request body
            if (!updates || Object.keys(updates).length === 0) {
                return res.status(400).send("No updates provided");
            }
    
            // Fetch the user profile from the database
            let user = UserModal.findProfile(userEmail); 
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
    
            // Update or add fields dynamically
            Object.keys(updates).forEach(key => {
                user[key] = updates[key];
            });
    
            // Save the updated user profile
            const updatedUser = UserModal.updateProfile(userEmail, user);
    
            if (!updatedUser) {
                return res.status(500).send("Failed to update profile");
            }
    
            console.log("Updated User:", updatedUser);
            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error("Error updating profile:", error);
            return res.status(500).json({ error: "An error occurred while updating the profile" });
        }
    }
    
}