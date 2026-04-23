import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({

productId : {
    type : String,
    required : true,
    unique : true
},

name : {
    type : String,
    required : true
},

altName: {
    type: [String], 
    default: [],
    required: true
},


description: {
    type : String,
    required : true
},

price : {
    type : Number,
    required : true
},

labelledPrice : {
    type : String,
    required : true
},

Image: {
    type: [String],  
    required: true,
    default: ["/default-product-1.png", "/default-product-2.png"]
},


isAvailable : {
    type : Boolean,
    required : true,
    default : true
},

category : {
    type : String,
    required : false
},

stock : {
    type : Number,
    required : true,
    default : 0
},
brand:{
    type : String,
    required : false
}



}

)

const Product = mongoose.model("Product", productSchema);
export default Product;