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

// Print Username 
const fs = require('fs')
const os = require('os')

const username = os.userInfo().username
fs.appendFile('mine.txt', 'username: ' + username ,()=> {
    console.log(username)
})

// How to Import & Export File
 