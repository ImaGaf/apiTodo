const Users = require("../models/users.model");


class UserServices {

    static async create(newUser){
        try{
            const createdUser = await Users.create(newUser);
            return createdUser;
        }catch(error){
            throw error;
        }
    }
}

module.exports = UserServices;