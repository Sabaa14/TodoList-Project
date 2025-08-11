const User = require("../models/user.model")
const jwt = require("jsonwebtoken");

const LoginAuth = async (req , res ,next ) =>{

try {
    const token = req.cookies.token;
    const {id,email} = jwt.verify(token,process.env.jsonwebtoken);
    
    const user = await User.findOne({_id : id});
    if(!user.isLogin){
       return res.status(402).json({success: false, message: 'Not authorized'});
    }
    
    
    req.id = id;
    req.email =email;
    
    next();
    
} catch (error) {
            return res.status(401).json({ success: false, message: "Not authorized" });

}

}

module.exports = {LoginAuth};
