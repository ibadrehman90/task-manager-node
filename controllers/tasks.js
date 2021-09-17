// importing models that contain our schema
const Task = require('../models/task')




const getAllTasks = async (req, res) => {
    try {
        const {user_id:userID} = req.params
        const tasks = await Task.find({user_id:userID,completed:false})
        res.status(200).json({msg:'success',body:tasks})
    } catch (error) {
         res.status(500).json({msg:error})
    }
}

const getAllCompletedTasks = async (req, res) => {
    try {
        const {user_id:userID} = req.params
        const tasks = await Task.find({user_id:userID,completed:true})
        res.status(200).json({msg:'success',body:tasks})
    } catch (error) {
         res.status(500).json({msg:error})
    }
}

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({msg:'success',body:task})
    } catch (error) {
         res.status(500).json({msg:error})
    }
    
}

const getTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if(!task){
           return res.status(404).json({msg:`No task with the id : ${taskID}`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(404).json({msg:error})
    }
    
}

const updateTask = async (req,res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`No task with the id : ${taskID}`});
         }
         res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
           return res.status(404).json({msg:`No task with the id : ${taskID}`});
        }
        res.status(200).json({msg:'success',task:task});
    } catch (error) {
        res.status(404).json({msg:error})
    }
   
}

module.exports = {
    getAllTasks, getAllCompletedTasks, createTask, getTask, updateTask, deleteTask
}