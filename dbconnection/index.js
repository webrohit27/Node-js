const express = require('express');
const app =  express();
const db = require('./db.js');
const student = require('./student')

app.get("/", function (req, res) {
      res.send("Done")
});

app.post('/student', async(req, res) => {
    try{
        const data = req.body
        const newStudent = new Student(data);

        const response = await newStudent.save()
        console.log('Data Saved') 
        res.status(200).json(response)
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:'internal server error'
        })
    }
})

app.listen(3000,()=>{
    console.log("3000 port server is running");
})