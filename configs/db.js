const mongoose=require('mongoose')

const databaseConnect=async(url)=>{
    try{
        await mongoose.connect(url)
        console.log("Database connected successfully");
    }catch(err){
        console.log(err);
    }
}

module.exports=databaseConnect