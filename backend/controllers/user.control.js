const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
// get USERS
const getUser = async (req,res) => {
    const query = req.query.new
    try{
    const users = query
    ? await userModel.find().sort({_id: -1}).limit(5)
    : await userModel.find();
    res.status(200).json(users)
    }catch(err){
        res.status(500).json(err.message)
    }
}
// UPDATE USER
const updateUser = async (req,res) => {
    try{
          if(req.body.password){
              const salt = await bcrypt.genSalt(10);
              req.body.password = await bcrypt.hash(req.body.password, salt)
          }
          const editUser = await userModel.findByIdAndUpdate(req.params.id,{
              $set: req.body
          },{new: true, runValidators:true})

          res.status(200).json(editUser)
    }catch(err){
        res.status(500).json(err.message)
    }
}
// DELETE USER
const deleteUser = async (req,res) => {
    try{
            res.status(200).json('delete our user')
    }catch(err){
        res.status(500).json(err.message)
    }
}

//  GET USER STAT
const userStat = async (req,res) => {
     const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() -1 ))
        console.log(lastYear)
    try{
            const data = await userModel.aggregate([
                {
                    $match:{createAt:{$gte: lastYear}}
                },
                {
                    $project:{
                        month:{$month: '$createdAt'}
                    }
                },
                {
                    $group:{
                        _id: "$month",
                        total: {$sum: 1}
                    }
                }
            ])
            res.status(200).json(data)
    }catch(err){
        res.status(500).json('err.message')
    }
}

module.exports = {
    getUser, updateUser, deleteUser, userStat
}