const { orderPlaced } = require("../services/notificationService");
const Order=require('../models/orderModel')


exports.getOrderByCustomers=async(req,res,next)=>{
    try{
        const orders=await Order.find({customer: req.params.customerId})
        .populate('book')
        .populate('customer');
        res.status(200).json(orders)
    }catch(err){
        next(err);
    };
};

exports.placeOrder=async(req,res,next)=>{
    try{
        const order=new Order(req.body);
        await order.save();
        orderPlaced(order);
        res.status(201).json(order);

    }catch(err){
        next(err);
    }
}


