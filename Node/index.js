// let user = {
//     name: Kuldeeep sir,
//     age : 27,
//     hobby : ["cricket", "swimming", "Football"]
// }

// console.log(user);

// let arr = [10,20,30,40]
// let a = arr.filter((a)=>{
//     return a>30
// })
// console.log(a)


// let user=prompt("Please enter your age");
//     if(user>18){
//     console.log("done")
//    }else{
//     console.log("not done")
//    }


// Callback
// function greet(name) { 
//     alert('Hello ' + name); 
// }
//  function greeting(callback) { 
//     var name = prompt('Please enter your name.'); 
//     callback(name);
//  }

// FS Module

// let fs = require('fs')

// fs.appendFile('mine.txt', 'this is mine here' + '!\n', ()=> {
//     console.log('file is created');
// })

// OS MOdule
// let os = require('os');
// console.log(os.userInfo());

// // Print Username 
// const fs = require('fs')
// const os = require('os')

// const username = os.userInfo().username
// fs.appendFile('mine.txt', 'username: ' + username ,()=> {
//     console.log(username)
// })

// How to Import & Export File
 
// Lodash Library
// let _ = require ('lodash')
// console.log(_.isString(true));

// // Express Js

// const express = require('express')
// const app = express()
// const a = require('./one.js')

// // middleware
// app.use(function(req, res, next){
//   console.log('mine');
//   next();
// })

// app.get('/', function (req, res) {
//   res.send('a')
// })

// app.listen(3000, ()=> {
//     console.log("3000 port is running");
// })


// const express = require('express')
//  const app = express()

//  app.get('/', function (req, res) {
//     res.send('helllo i am here')
//   })
//  app.get('/profile', function (req, res) {
//     res.send('Profile')
//   })
//  app.get('/profile/:username', function (req, res) {
//     res.send(`nice to mee you ${req.params.username}`)
//   })
  
//   app.listen(3000, ()=> {
//       console.log("3000 port is running");
//   })

// // Post
// const express = require('express');
// const app = express()
// app.use(express.json())
// app.get('/data', function (req, res) {
//   let details = [{
//     name: "Rahul",
//     age: 25,
//   },
// {
//   name: "Mohan",
//   age: 22,
// }
// ]
//   res.send(details)
// })
// app.post('/data/latest', function (req, res) {
//   console.log(req.body);
//   res.send('new data added')
// })
// app.listen(3000,()=>{
//     console.log("3000 port server is running");
// })


// const express = require('express')
// const app = express()
// app.use(express.json())
// let details = [
//     {
//       name: "Jethalal",
//       age: 55,
//     },
//     {
//       name: "Babita",
//       age: 42,
//     }
//   ];

//   app.get('/data', function (req, res) {
//     res.send(details)
//   })

//   app.post('/data/new', function (req, res) {
//     details.push(req.body)
//     res.send(details)
//   })

//   app.get('/data/new', function (req, res) {
//     res.send(details)
//   })

//   app.listen(3000,()=>{
//     console.log("3000 port server is running");
//   })


// PUSH Data

const express = require('express')
const app = express()
const student = require('./student.js')
app.use(express.json())
app.get('/student', function (req, res) {
  res.json(student);
})
  app.post('/student/data', function (req, res) {
    let one = {
      id:student.length+1,
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email
    }
    student.push(one);
    res.json(one);
  })
  app.listen(3000,()=>{
    console.log("3000 port server is running");
  })