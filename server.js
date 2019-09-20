const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()
var url = process.env.MONGODB_URI
var path = require("path");
const productRoutes = express.Router();

// const ProductModel = require("./productModel")


// MUST UPDATE BUILD FOLDER WHENEVER I PUSH TO HEROKU
// run this in the client folder....npm run build
app.use(express.static(path.join(__dirname, "client/build")))



mongoose.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(e => {
    console.error(e.message)
})

var db = mongoose.connection;
db.once("open", () => {
    var Schema = mongoose.Schema;

// Creating the Schema for the model
var ProductSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    date_added: Date
})



// Creating the model with the Schema
// 1st argument is the name of the collection that will be created 
    let ProductModel = mongoose.model("yeet", ProductSchema)
    console.log(ProductModel)
})




// Get all results
app.get("/findProducts", (res, req) => {
    ProductModel.find({}, (err, res) => {
        if(err) { 
            return handleError(err) 
        } else {
            res.json();

        }
    })
})

app.listen(process.env.PORT || 5003, () => {
    console.log(`Server listening`)
})