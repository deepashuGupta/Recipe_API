const mongoose = require('mongoose');


// making schema for recipe model
const recipeSchema = new mongoose.Schema({
    dish : String,
    chef : String,
    image : String,
    description : String,
    ingredients : [String],
},{timestamps : true})

// creating model and exporting it
module.exports = mongoose.model('recipe',recipeSchema)