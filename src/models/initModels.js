
const Users = require ('../models/users.model');
const ToDo = require('../models/todos.model');
const Categories = require('../models/categorie.model');

const initModels = () => {

    Users.hasMany(ToDo, {foreignKey: 'userId'});
    ToDo.belongsTo(Users, {foreignKey: 'userId'});

    Categories.hasMany(ToDo, {foreignKey: 'categoryId'});
    ToDo.belongsTo(Categories, {foreignKey: 'categoryId'})
}

module.exports = initModels;