const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: Number,
    address: String,
    contact: Number,
    image: String
})

module.exports = mongoose.model('userdetails', userSchema)