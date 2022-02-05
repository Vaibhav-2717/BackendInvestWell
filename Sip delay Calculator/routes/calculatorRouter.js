const express = require('express');
const Router = express.Router();

const calculatorcontrol = require('../controller/calculatorController');


Router.post('/hi',calculatorcontrol);
Router.get("/hi",()=>{console.log("hi body")})
module.exports=Router;