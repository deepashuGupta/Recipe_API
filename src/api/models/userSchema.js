const mongoose = require('mongoose');


// making schema for recipe model
const userSchema = new mongoose.Schema({
    name : String,
    username : String,
    email : String,
    password : String
},{timestamps : true})

// creating model and exporting it
module.exports = mongoose.model('user',userSchema)