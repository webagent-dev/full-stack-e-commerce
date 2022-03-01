const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
{
 name: {type: String, required: true, unique: true},
desc: {type: String, required: true},
img: {type: String},
category: {type: Array, required: true},
size: {type: String},
color: {type: String, required: true},
price: {type: Number, required: true},
},{timestamps:true}
)

const ProductModel = mongoose.model('ProductModel', ProductSchema)

module.exports = ProductModel