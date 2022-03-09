const orderModel = require('../models/order.model')

const createOrder = async (req,res) => {
    try{
        const order = await orderModel.create({...req.body})
        res.status(201).json(order)
    }catch(err){
        console.log(err)
    }
}
const getOrder = async (req,res) => {
    try{
        const cart = await orderModel.find({userId: req.params.id})
        res.status(200).json(cart)
    }catch(err){
        console.log(err)
    }
}
const updateOrder = async (req,res) => {
    try{
           const cart = await orderModel.FindByIdAndUpdate(req.param.id, {$set: req.body}, {new: true, runValidators: true})
           res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err.message)
    }
}
const deleteOrder = async (req,res) => {
    try{
          const cart = await orderModel.findByIdAndDelete(req.params.id);
          res.status(200).json('order deleted sucessfully')
    }catch(err){
        console.log(err)
    }
}

const getAllOrder = async (req,res) => {
    try{
            const cart = await orderModel.find()
            res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err.message)
    }
}


const getIncome = async (req,res) => {
     const date = new Date()
            const lastMonth = new Date(date.setDate(date.getMonth() - 1))
            const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))
    try{
            const income = await orderModel.aggregate([
                {$match: {createdAt: {$gte: prevMonth}}},
                {
                    $project: {
                        month: {$month: '$createAt'},
                        sales: '$amount'
                    }
                },
       {
            $group: {
                _id: '$month',
                total: {$sum: $sales}
            }
       }
            ])
            res.status(200).json(income)
    }catch(err){
        res.status(500).json(err.message)
    }
}

module.exports = {
    createOrder, getOrder, deleteOrder, updateOrder, getAllOrder, getIncome
}
