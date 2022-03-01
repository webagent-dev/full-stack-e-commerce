const productModel = require('../models/product.model')

const createProduct = async (req,res) => {
    try{
        const product = await productModel.create({...req.body})
        res.status(200).json(product)
    }catch(err){
        console.log(err)
    }
}
const getProduct = async (req,res) => {
    const cat = req.query.category
    const qNew = req.query.new
    try{
                let product 
            if(qNew){
                product = await productModel.find().sort({createdAt: -1}).limit(5)
            }else if(cat){
                product = await productModel.find({category:{
                    $in: [cat]
                }})
            }else{
                product = await productModel.find()
            }
                res.status(200).json(product)
    }catch(err){
        console.log(err)
    }
}
const getSingleProduct = async (req,res) => {
    try{
            const product = await productModel.findById(req.params.id)
            res.status(200).json(product)
    }catch(err){
        console.log(err)
    }
}
const updateProduct = async (req,res) => {
    try{
        const updateProduct = await productModel.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new: true, runValidator: true} )

        res.status(200).json(updateProduct);
    }catch(err){
        console.log(err)
    }
}
const deleteProduct = async (req,res) => {
    try{
            const deletes = await productModel.findByIdAndDelete(req.params.id)
            res.status(200).json('product delete success') 
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createProduct, getSingleProduct, getProduct, updateProduct, deleteProduct
}