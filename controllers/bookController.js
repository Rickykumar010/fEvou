const Book=require('../models/bookModel')

exports.getAllBooks=async(req,res)=>{
    try{
        const {page=1, limit=10, sort='createdAt', order='desc', filter={}}=req.query;
        const books=await Book.find(filter).limit(limit*1).skip((page-1)*limit).sort({[sort]:order});
        res.status(200).json({books});
    }catch(err){
        console.log(err);
    }
}
exports.addBook=async(req,res,next)=>{
    try{
        const book=new Book(req.body);
        await book.save();
        res.status(201).json({book})

    }catch(err){
        next(err);
    }
};