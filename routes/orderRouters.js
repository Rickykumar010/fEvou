const express=require('express');
const { getOrderByCustomers, placeOrder } = require('../controllers/orderController');


const orderRoutes=express.Router();

orderRoutes.get('/:customerId', getOrderByCustomers);
orderRoutes.post('/', placeOrder);


module.exports=orderRoutes


