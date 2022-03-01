const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    password:{type:String, default:true},
},{timestamps: true})

UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
UserSchema.methods.getPassword = async function(thePassword){
        const verify = await bcrypt.compare(thePassword, this.password)
    return verify
}
UserSchema.methods.getToken = function(){
    return jwt.sign({
        id: this._id,
        isAdmin: this.isAdmin
    },process.env.MY_CODE,{
        expiresIn: process.env.DATE
    })
}
const userModel = mongoose.model('user', UserSchema)

module.exports = userModel