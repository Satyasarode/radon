const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        bookName: {
            type:String,
            required: true
        },
        authorName: String,
        categoryName:String,
        year:Number
    },
    {timestamps:true});

    module.exports = mongoose.model('book', bookSchema)


