const Customer = require('../models/customer');


const addCustomer = async (req, res) => {
    // let info = {
    //     custid: req.body.custid,
    //     name: req.body.name,
    //     email: req.body.email,
    //     PhoneNo: req.body.PhoneNo
    // }

    const{body}=req;
    const customer = await Customer.create(body)
    res.status(200).send(customer)
    console.log(customer)
}


const getallCustomer = async (req, res) => {

    let customer = await Customer.findAll({})
    res.status(200).send(customer);

}


const getoneCustomer = async (req, res) => {

    let custid = req.params.id
    let customer = await Customer.findOne({ where: { custid: custid } })
    res.status(200).send(customer);

}



const updateCustomer = async (req, res) => {


    const{body,params}=req;
    const {id}=params;
  
    const customer = await Customer.update(body, { where: { custid: id} })
    res.status(200).send(customer);
}


const deleteCustomer = async (req, res) => {

    const {id} = req.params;
    await Customer.destroy({ where: {custid : id } })

    res.status(200).send('customer is deleted');

}



module.exports = { addCustomer, getoneCustomer, getallCustomer, updateCustomer, deleteCustomer }