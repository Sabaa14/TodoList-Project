const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        const connected = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database is connected successfully");        
    } catch (error) {
        console.log("Database Couldnt be connected with Error Message : " , error.message );
    }

}

module.exports = connectDB;