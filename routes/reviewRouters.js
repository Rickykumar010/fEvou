const express=require('express');
const { getReviewsByBook, addReview } = require('../controllers/reviewController');
const reviewRoutes=express.Router();

reviewRoutes.get('/bookId',getReviewsByBook );
reviewRoutes.post('/', addReview);

module.exports=reviewRoutes;