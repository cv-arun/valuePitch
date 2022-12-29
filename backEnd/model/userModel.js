const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: String,
    country: String,

}, {
    timestamps: true
})

module.exports=mongoose.model('User',userSchema)