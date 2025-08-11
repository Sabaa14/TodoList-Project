const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req,res) => {
    const {email , password } = req.body;
    const existingUser = await User.findOne({email});


        if(!existingUser) {
            return res.status(404).json({success: false, message: "user is not found"});
        }
    
    try {

        const isPassowordValid = await bcrypt.compare(password ,existingUser.hashedPassword);

        if(!isPassowordValid){
        return res.status(404).json({success: false, message: "user is not found"});
        }
        
        const token = jwt.sign({id: existingUser._id , email : existingUser.email}, process.env.jsonwebtoken);

        res.cookie("token" ,token);

        res.status(200).json({success: true, message: "user has Looged in"});
        
    } catch (error) {
        res.status(500).json("Error :" , error.message);
        return res.status(500).json("Server error")
    }

}


const register = async ( req,res ) => {
const { username , email , password ,age } = req.body;
const exsitingUser = await User.findOne({email});

if (exsitingUser){
    res.status(400).json({success: false, message :"The user is already created !", user : exsitingUser});
}

try {
         const hashedPassword = await bcrypt.hash(password,10);

         const newUser = {
            username,
            email,
            password : hashedPassword,
            age
         } 

         await newUser.save();

         res.status(201).json({ success : true , message : " a NewUser has just been created " , user : newUser});

        } catch (error) {
         res.status(500).json("Error :" , error.message);
        return res.status(500).json("Server error")
        }
}

module.exports = {
    login,
    register
}