const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'api_todo',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Trabatrix2',
    dialect: 'postgres'
})

module.exports= db;