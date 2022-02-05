const express=require('express');
const cors= require('cors');
const bodyparser=require('body-parser');
const sipdelaycalculate=require('./routes/calculatorRouter');

const app=express();

app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
app.use('/sipdelaycalculate',sipdelaycalculate);


const port = process.env.PORT || 8080;

app.listen(port,()=>{console.log("Sip delay Calculator started")});