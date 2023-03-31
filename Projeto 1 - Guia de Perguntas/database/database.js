const Sequelize = require("sequelize");

const connection = new Sequelize('guiaperguntas', 'root','Rodrigo90',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;