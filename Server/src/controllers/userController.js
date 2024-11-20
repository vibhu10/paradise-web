// handle operation for all the user
import UserModal from "../models/user.js";
import jwt from 'jsonwebtoken'
export default class userController{

    signUp(req,res){
       console.log(req.body,"data comming form form i fill")
        const{legalName,dob,email,password,type}=req.body;
       const user= UserModal.singUp(legalName,email,password,dob,type)
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
            "szdi014rTyUfylsmwwEkJF5HAOsiKWrq", 
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
    
}