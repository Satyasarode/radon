const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    price: {
        indianPrice: String,
        europeanPrice: String
        },
    year: String,
    totalPages:Number,
    tags : [ String ],
    authorName:String,
    stockAvilable: Boolean
    });
   
    /*bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });*/


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
