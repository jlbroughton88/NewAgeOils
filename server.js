const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()
var url = process.env.MONGODB_URI
var path = require("path");

// MUST UPDATE BUILD FOLDER WHENEVER I PUSH TO HEROKU
// run this in the client folder....npm run build
app.use(express.static(path.join(__dirname, "client/build")))

mongoose.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(e => {
    console.error(e.message)
}).then(console.log("MongoDB Connected"))

// HEROKU
// git add .
// git commit -am "message"
// git push heroku master

app.get("/", (req, res) => {
    console.log("attempting to get")
    res.sendFile(path.join(__dirname,'build', "index.html"))
})

app.listen(process.env.PORT || 5003, () => {
    console.log(`Server listening`)
})