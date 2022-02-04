const sequelize = require("./database");

const Customer = require("./models/customer");
const Transaction = require("./models/transaction");

Customer.hasMany(Transaction);

sequelize
     .sync({force:false})
    // .sync()
    .then(result => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });  
