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

    signIn(req,res){
    const{email,password}=req.body;


    const result=UserModal.signIn(email,password);
    console.log(result,"datacomming for user")
    if(!result){
return res.status(400).send("incorrect credential");
    }
    else{
    //creating token
    const token=jwt.sign({email:result.email},"szdi014rTyUfylsmwwEkJF5HAOsiKWrq",{expiresIn:"1h"})
   console.log(token)
   return res.status(200).json({
    token,
    user: {
      id: result.id,
      name: result.name,
      email: result.email,
      type: result.type,
      mobile: result.mobile,
      gender: result.gender,
      address: result.address
    }})

}
    

    }
}