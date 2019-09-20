var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    date_added: Date
})

// Able to use schema in other files
module.exports = mongoose.model("Product", ProductSchema)