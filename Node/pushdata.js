

const express = require('express')
const app = express()
const student = require('./student')
const db = require('./db')

app.get('/', function (req, res) {
  res.send("Done")
})

app.set("view engine, ejs")
app.use(express.json())
app.get('/student', function (req, res) {
  res.json(student);
})
app.post("/data/student", function (req, res) {
  if (!req.body.email) {
    return res.json({ error: "Please enter email" });
  }
  let one = {
    id: student.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  };
  student.push(one);
  res.json(student);
});
app.get('/data/student', function (req, res) {
  res.send(student)
})
app.put("/data/student/:id", (req, res)=>{
  let id = req.params.id
  let first_name = req.body.first_name
  let last_name = req.body.last_name
  let email = req.body.email

  let index = student.findIndex((student)=>{
    return (student.id == Number.parseInt(id))
  })
  console.log(id, req.body, index);

  if(index>=0){
    let std = student[index]
    std.last_name = last_name
    std.first_name = first_name
    std.email = email
    res.json(std)
  }
  else{
    res.status(404)
    res.end()
  }
})
app.delete('/data/student/:id', (req,res)=>{
  let id = req.params.id
  let index = student.findIndex((student)=>{
    return (student.id == Number.parseInt(id))
  })
  if(index >= 0){
    let std = student[index]  
  student.splice(index, 1)
  res.json(std)
  }
  else{
    res.status(404)
  }
})
  app.listen(3000,()=>{
    console.log("3000 port server is running");
  })