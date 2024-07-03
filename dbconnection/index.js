const express = require('express')
const app = express()
// const student = require('./student')
const db =  require('./db')
const Student = require('./models/student')
const bodyParser= require('body-parser')

app.use(bodyParser.json())
app.get('/', function(req, res){
    res.send("DONE")
}
)
app.post('/student', async(req, res)=>{
    try{
    const data = req.body
    const newStudent = new Student(data)
    const response = await newStudent.save()
    console.log('data saved')
    res.status(200).json(response)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: 'internal server error'})
    }
})

app.get('/student', async(req, res)=>{
    try{
        const response = await Student.find({})
        console.log('data fetch')
        res.status(200).json(response)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: 'internal server error'})
    }
})
app.listen(3000,()=>{
    console.log("3000 portal is running");
  })