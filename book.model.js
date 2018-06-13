var mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    bookName: String,
    price: Number
    
});

module.exports=mongoose.model('BookDetail',BookSchema)
console.log("book")