// handle operation for all the user
import UserModal from "../models/user.js";
import jwt from 'jsonwebtoken'
export default class userController{

    signUp(req,res){
       
        const{name,email,password,type}=req.body;
       const user= UserModal.singUp(name,email,password,type)
       res.status(201).send(user);
       console.log(user)
    }

    signIn(req,res){
    const{email,password}=req.body;


    const result=UserModal.signIn(email,password);
    if(!result){
return res.status(400).send("incorrect credential");
    }
    else{
    //creating token
    const token=jwt.sign({email:result.email},"szdi014rTyUfylsmwwEkJF5HAOsiKWrq",{expiresIn:"1h"})
   console.log(token)
  return  res.status(200).send(token);

}
    

    }
}