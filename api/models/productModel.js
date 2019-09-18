const mongoose = require("mongoose");

// Create model
const productSchema = mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    name: String,
    description: String
})

module.exports = mongoose.model("Product", productSchema)