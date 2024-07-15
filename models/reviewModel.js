const mongoose=require('mongoose')
const reviewSchema=new mongoose.Schema({
    book:{type:String,required:true},
    customer:{type:mongoose.Schema.Types.ObjectId,ref:'customer',required:true},
    review:String,
    rating:{type:Number,required:true}
})
module.exports=mongoose.model("Review", reviewSchema);