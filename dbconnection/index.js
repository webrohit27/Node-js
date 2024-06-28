const express = require('express');
const app =  express();
const db = require('./db.js');
const student = require('./student')

app.get("/", function (req, res) {
      res.send("Done")
});

app.listen(3000,()=>{
    console.log("3000 port server is running");
})