const { DataTypes } = require('sequelize');
const db = require ('../utils/dataBase');

const ToDo = db.define('todo',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: 'Pendiente'
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:'category_id'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:'user_id'
    }
})

module.exports = ToDo;