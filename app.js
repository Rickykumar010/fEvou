require ('dotenv').config();
const express=require('express');
const databaseConnect = require('./configs/db');
const Bookrouter = require('./routes/bookRouters');
const reviewRoutes = require('./routes/reviewRouters');
const orderRoutes = require('./routes/orderRouters');
// const orderRoutes = require('./routes/orderRouters');
const app=express();
const port=process.env.port

app.use(express.json());

app.use('/api/books', Bookrouter);
app.use('/api/reviews', reviewRoutes);
app.use('/api/orders', orderRoutes)



app.listen(port,async()=>{
    try{
        await databaseConnect(process.env.mongo_url);
        console.log(`Server is running on port ${port}`);

    }catch(err){
        console.log(err);
    }
})
