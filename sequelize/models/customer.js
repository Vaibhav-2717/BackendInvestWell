const Sequelize = require('sequelize');
const sequelize = require("../database");

const Customer = sequelize.define("customer", {
    custid: {
        type: Sequelize.INTEGER,
        autoIncremet: true,
        allowNull: false,
        primarykey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    PhoneNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }

})
module.exports = Customer;