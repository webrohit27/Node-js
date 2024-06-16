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

// Express 

const express = require('express')
const app = express()

app.get('/app', function (req, res) {
  res.send('Jai Shree Ram')
})

app.listen(3000, ()=> {
    console.log("3000 port is running");
})