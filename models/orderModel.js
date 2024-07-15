const mongoose=require('mongoose')
const orederSchema=new mongoose.Schema({
    customer:{type:mongoose.Schema.Types.ObjectId,ref:'customer',required:true},
    books:[{type:mongoose.Schema.Types.ObjectId,ref:'Book',required:true}],
    total:Number,
    status:{type:String,required:true}

})
module.exports=mongoose.model('Order', orederSchema)