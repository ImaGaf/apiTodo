const { DataTypes } = require('sequelize');
const db = require ('../utils/dataBase');

const Categorie = db.define('categories',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,   
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    timestamps: false,
    updatedAt: false,
    createdAt: false
})

module.exports = Categorie;