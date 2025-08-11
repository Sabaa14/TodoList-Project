const User = require("../models/user.model")
const jwt = require("jsonwebtoken");

const LoginAuth = async (req , res ,next ) =>{

try {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }

    const {id,email} = jwt.verify(token,process.env.JWT_SECRET);
    
    const user = await User.findById(id);

    if(!user){
       return res.status(401).json({success: false, message: 'Not authorized'});
    }
    
    
   req.user = user;

    next();
    
} catch (error) {
    return res.status(401).json({ success: false, message: "Not authorized" });

}

}

module.exports = {LoginAuth};
