const ToDo = require("../models/todos.model")


class StatusServices{

    static async editStatus(id, data){
        try{
            const result = await ToDo.update(data,{
                where: {id}
            })
            return result
        }catch(error){
            throw error
        }
    }

}

module.exports = StatusServices;