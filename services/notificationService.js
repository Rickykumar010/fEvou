const event = require('events');
const EventEmitter = new event.EventEmitter();



const orderPlaced=(order)=>{
    EventEmitter.emit('orderPlaced', order);
};

EventEmitter.on('orderPlaced',(order)=>{

    console.log(`order placed: ${order._id}`)
});
module.exports={
    orderPlaced
}