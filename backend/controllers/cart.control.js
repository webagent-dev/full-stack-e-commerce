const cartModel = require('../models/cart.model')

const createCart = async (req,res) => {
    try{
       const carts = await cartModel.create({...req.body})
       res.status(201).json(carts)
    }catch(err){
        console.log(err)
    }
}
const updateCart = async (req,res) => {
    try{
     const cart = await cartModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true, runValidators:true})
     res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err.message)
    }
}
const getCart = async (req,res) => {
    try{
          const cart = await cartModel.find({userId: req.params.id})
          res.status(200).json(cart)
    }catch(err){
        console.log(err)
    }
}
const deleteCart = async (req,res) => {
    try{
        const cart = await cartModel.findByIdAndDelete(req.body.id)
        res.status(200).json(cart)
    }catch(err){
        console.log(err)
    }
}
const emptyCart = async (req,res) => {
    try{
            res.status(200).json('empty our cart')
    }catch(err){
        console.log(err)
    }
}
const getAllCart = async  (req, res) => {
    try{
            const allCart = await cartModel.find()
            res.status(200).json(allCart) 
    }catch(err){
        res.status(500).json(err.message)
    }
}

module.exports = {
    createCart,getCart, deleteCart, emptyCart, updateCart, getAllCart 
}