const express = require("express");
const app = express();
const db = require("./db.js");
require('dotenv').config();
const bodyParser = require("body-parser");

//Middleware
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("successful");
});

// route
const cc = require('./routes/compRoute.js')
app.use('/office', cc)

// env Port for hiding our local port
const PORT = process.env.PORT

app.listen(PORT, () => {    
  console.log("4000 port server is running");       
})
