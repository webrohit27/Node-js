const express = require("express");
const app = express();
const db = require("./db.js");
const person = require("./models/person.js")
const passport = require('passport');
const local = require('passport-local').Strategy;
require('dotenv').config();

app.get("/" ,function (req, res) {
  res.send("successful");
});

const PORT = process.env.PORT; 

app.listen(PORT, () => {    
  console.log("server is running");       
})