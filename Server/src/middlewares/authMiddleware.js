// jwt validation and role base access control
import jwt from 'jsonwebtoken'

const jwtAuth=(req,res,next)=>{
    //read the token comming form usercontroller

    const token=req.header['authorization']
    if(!token){
        return res.status(401).send("unauthorized")
    }
    
    try{
        const payload=jwt.verify(token,"szdi014rTyUfylsmwwEkJF5HAOsiKWrq")
    }
    catch(err){
        return res.status(401).send('unauthorized');
    }

    next();
}
export default jwtAuth