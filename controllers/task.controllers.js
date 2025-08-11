const Task = require("../models/task.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const readtask = async (req,res) =>{
try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
} catch (error) {
    res.status(500).json({success: false , message : error.message});
}
}

const readtaskbyId = async (req,res) => {
    const currenttaskid =req.params.id; 

    try {
        const taskById = await Task.findById(currenttaskid);

        if(!taskById){
        return res.status(404).json({success :false , message : "False Id"});
        }

        await 
        res.status(200).json({ success : true , message : "Found the seeked Task!",task : taskById })

    } catch (error) {
      res.status(500).json({success: false  , message : error.message})  
    }
}


const createtask = async (req,res) => {
 try {
    const newTask = await Task.create(req.body);
    res.status(201).json({
        success : true ,
        message : " a NewTask has been successfully created ",
        task :newTask});
 } catch (error) {
    res.status(500).json({ success : false , message : error.message})
 }

}


const updatetask = async (req, res) => {
    const currenttaskid = req.params.id;

    try {
        const updatedtask = await Task.findByIdAndUpdate(currenttaskid, req.body , {new : true});

        if(!updatedtask){
            return res.status(400).json({success: false , message : "could not found the Task!"});
        }

        res.status(200).json({
            success: true,
            message: "Task has been updated",
            task:updatedtask
        })

    } catch (error) {
        res.status(500).json({ success : false , message : error.message});
    }
};

const deletetask = async (req,res) => {
const currenttaskid = req.params.id ;

try {
    const deletedtask =await Task.findByIdAndDelete(currenttaskid);

    if(!deletedtask){
        return res.status(404).json({success : false , message : "No Task found with the given id"});
    }
    res.status(200).json( { success : true ,message :" the Task has been successfully deleted"});

} catch (error) {
    res.status(500).json({success : false , message :error.message});
}

}

module.exports = {
    readtask,
    readtaskbyId,
    createtask,
    updatetask,
    deletetask
}