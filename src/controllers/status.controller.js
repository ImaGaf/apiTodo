const StatusServices = require("../services/status.services");

const changeTaskStatus = async (req,res )=>{
    try{
        const {id} = req.params;
        const data = req.body;
        await StatusServices.editStatus(id, data)
        res.status(204).send()
    }catch(error){
        res.status(400).json(error)
    } 
}

module.exports = changeTaskStatus;