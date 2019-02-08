const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema ({
    first_name : String,
    last_name : String,
    email : String,
})

const User = mongoose.model('User', userSchema)

module.exports  = User