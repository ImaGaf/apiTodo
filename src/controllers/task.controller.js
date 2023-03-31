const TaskServices = require("../services/task.services");

const createNewTask = async (req, res) => {
    try{
        const newTask = req.body;
        const result = await TaskServices.create(newTask);
        res.status(201).json(result);
    }catch(error){
        res.status(400).json(error)
    }
}

const getAllTask = async (req, res) =>{
    try{
        const {id} = req.params;
        const result = await TaskServices.getAllTask(id)
        res.status(201).json(result)
    }catch(error){
        res.status(400).json(error) 
    }
}

const deleteTask = async (req,res) => {
    try{
        const {id} = req.params;
        const result = await TaskServices.deleteTask(id)
        res.status(201).json()
    }catch(error){
        res.status(400).json(error)
    }
}
 
module.exports = {
    createNewTask,
    getAllTask,
    deleteTask
}