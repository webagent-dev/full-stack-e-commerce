
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const register = async (req,res) => {
    try{
            const user = await userModel.create({...req.body})
            const { password, ...other} = user._doc
            res.status(201).json({...other})
     res.status(201).json(createUser)
    }catch(err){
        res.status(500).json(err.message)
    }
}

const login = async (req,res) => {
    try{
        const user = await userModel.findOne({name:req.body.name})
        if(!user){
            return res.status(404).json('sorry user does not exits')
        }
        const getPasscode = await user.getPassword(req.body.password)
        if(!getPasscode){
            return res.status(404).json('invalid credentials')
        }
        const { password, ...other} = user._doc
        const accessToken = user.getToken()
        res.status(200).json({...other, accessToken})
    }catch(err){
        res.status(500).json(err.message)
    }
}

module.exports = { register, login}