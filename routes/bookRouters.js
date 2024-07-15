const express=require('express');
const { getAllBooks, addBook } = require('../controllers/bookController');

const Bookrouter=express.Router();
Bookrouter.get('/', getAllBooks);
Bookrouter.post('/', addBook);

module.exports=Bookrouter