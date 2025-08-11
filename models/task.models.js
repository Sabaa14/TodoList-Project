const mongoose =require("mongoose");


const taskSchema = new mongoose.Schema({

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
    },

      createdAt: {
        type: Date,
        default: Date.now
  }
    

})

const Task = mongoose.model("taskSchema",taskSchema);
module.exports =  Task ; 