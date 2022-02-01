const mysql = require('mysql');
const express = require('express');
app = express();
const port = 8080;

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vaibhavgupta@27",
    database: "investwell"
});

conn.connect(function (err) {
    if (err)
        throw err;
    console.log("connection successful......");
});

//  

app.get("/users", function (req, res) {
    conn.query("select * from employee", (err, result, fields) => {
        if (err)
            throw err;
        else
            res.json(result);
        console.log(fields);
    });
});

app.get("/user/:id", function (req, res) {
    var userid = req.params.id;

    conn.query("select email from employee where empid=?", [userid], function (err, result, fields) {
        if (err)
            throw err;
        else
            res.json(result);
    })
})

app.get("/transaction", function (req, res) {
    conn.query("select Sum(transactions) from employee", (err, result, fields) => {
        if (err)
            throw err;
        else
            res.json(result);
        console.log(fields);
    })
})
app.get("/usertransaction", function (req, res) {
    conn.query("select u.userid as userinfo,u.FullName,u.email,u.city ,t.userid as transcinfo,sum(t.purchase) as totalpurchase, sum(t.sell) as totalsell from user u inner join transaction t on u.userid = t.userid group by u.userid ",(err,result,fields)=>{
        if (err)
        throw err;
    else
        res.json(result);
    console.log(fields);
})
})
app.get("/usertransaction?id", function (req, res) {
    var userid = req.query;

    conn.query("select u.userid as userinfo,u.FullName,u.email,u.city ,t.userid as transcinfo,sum(t.purchase) as totalpurchase, sum(t.sell) as totalsell from user u inner join transaction t on u.userid = t.userid where u.userid=?", [userid], function (err, result, fields) {
        if (err)
            throw err;
        else
            res.json(result);
    })
})
app.get("/", (req, res) => {
    res.send("welcome to mysql");
})

app.listen(port, function () {
    console.log("Server is runnning at 8080 port");
})