const Categorie = require("../models/categorie.model");
const ToDo = require("../models/todos.model");
const Users = require("../models/users.model");

class TaskServices {
    static async create(newTask) {
        try {
            const result = await ToDo.create(newTask);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAllTask(id) {
        try {
            const result = await Users.findByPk(id,
            {
                include:{
                    model: ToDo,
                    include:{
                        model: Categorie
                    }
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async deleteTask(id){
        try{
            const result = await ToDo.destroy({
                where: {id}
            })
        return result
        }catch(error){
            throw error
        } 
    }
}

module.exports = TaskServices;