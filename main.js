const sequelize = require('sequelize');

const dbconfig = require("./database.js");

const connection = new Sequelize(dbConfig);

try{
connection.authentication();
console.log("Connection estabihed succefully")
} catch(error){
    console.error('Unable to connect to the database:',error);
}

module.exports = connection;