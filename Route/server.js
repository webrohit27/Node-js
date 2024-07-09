const express = require("express");
const app = express();
const db = require("./db.js");
// const Office = require("./models/comp.js")
const passport = require('passport')
const local = require('passport-local').Strategy;
require('dotenv').config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());                       //Middleware

// const log = (req, res, next) =>{
//   console.log(`[${new Date().toLocaleString()}] request made on ${req.originalUrl}`);
//   next();
// }
// app.use(log)

app.get("/", function (req, res) {
  res.send("successful");
});

// route
const cc = require('./routes/compRoute.js')
app.use('/office', cc)

// app.patch("/comp/:id", async(req, res) => {
//   try{
//     const _id = req.params.id;
//     const updateComp = await Office.findByIdAndUpdate(_id, req.body,{
//       new: true
//     })
//     res.send(updateComp)
//   }
//   catch(error){
//     console.log(error)
//     res.status(400).json({message: 'internal server error'})
//   }
// })

// env Port for hiding our local port
const PORT = process.env.PORT

app.listen(PORT, () => {    
  console.log("4000 port server is running");       
})
