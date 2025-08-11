const mongoose =require("mongoose");


const todoSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true
    },

    description : {
    type : String
    },

    completed : {
        type : Boolean,
        required : true
    }
    

})

module.exports= mongoose.model("todoSchema",todoSchema);