const express=require('express');
const Router = express.Router();
const connection=require("../connection");

Router.get("/users", function (req, res) {
    connection.query("select * from employee", (err, result, fields) => {
        if (err)
            throw err;
        else
            res.json(result);
        console.log(fields);
    });
});


Router.delete('/users/:id', (req, res) => {
    connection.query('DELETE FROM employee where empid = ?', [req.params.id], (err,result, fields) => {
        if (!err)
            res.json('Deleted successfully.');
        else
            console.log(err);
    })
});


Router.post('/adduser', function(req, res) {
    const {empid, firstname,lastname,email,city,Gender,transactions}=req.body;
  
    // var sql = `INSERT INTO employee(empid,firstname,lastname,email,city,Gender,transaction) VALUES(?,?,?,?,?,?,?)`;
    connection.query('INSERT INTO employee(empid,firstname,lastname,email,city,Gender,transactions) VALUES(?,?,?,?,?,?,?)',[empid,firstname,lastname,email,city,Gender,transactions], function(err, result) {
      if (err) 
          throw err;
      else
          res.json('record inserted');
    });
});



module.exports=Router;