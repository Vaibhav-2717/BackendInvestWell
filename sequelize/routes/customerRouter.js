const customerController = require('../controller/customerController');

const express = require('express');
const Router = express.Router();


Router.post('/addcustomer',customerController.addCustomer);

Router.get('/allcustomer',customerController.getallCustomer);

Router.get('/:id',customerController.getoneCustomer);

Router.delete('/:id',customerController.deleteCustomer);

Router.put('/:id',customerController.updateCustomer);


module.exports=Router;