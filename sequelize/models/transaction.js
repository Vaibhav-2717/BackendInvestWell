const Sequelize = require('sequelize');
const sequelize = require("../database");

const Transaction = sequelize.define("transactions", {
    tid: {
        type: Sequelize.INTEGER,
        autoIncremet: true,
        allowNull: false,
        primarykey: true,
    },
    purhcase: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    sell: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }

});


module.exports = Transaction;