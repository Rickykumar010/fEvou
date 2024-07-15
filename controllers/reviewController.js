const Review=require('../models/reviewModel')
exports.getReviewsByBook=async(req,res,next)=>{
    try{
        const review=await Review.find({book: req.params.bookId})
        .populate('customer')
        res.status(200).json({review})
    }catch(err){
       next(err);
    }
};

exports.addReview=async(req,res,next)=>{
    try{
        const review=new Review(req.body);
        await review.save();
        res.status(201).json(review);
    }catch(err){
        next(err);
    }
};