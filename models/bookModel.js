const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    name:{type:String,required:true},
    author:{type:String,required:true},
    description:String,
    price:Number,
    
})

module.exports=mongoose.model('Book',bookSchema);