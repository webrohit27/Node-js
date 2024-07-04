const express = require("express");
const app = express();
const db = require("./db.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("successful");
});
const cc = require('./routes/compRoute.js')
app.use('/office', cc)
app.listen(3000, () => {    
  console.log("3000 port server is running");       
})