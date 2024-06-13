// let abc = require('./one.js')

// console.log("i am two");
// let mine = abc.a
// console.log(mine);


let two = require ('./one')
let sum = two.add(20,40)
let d = two.mine
console.log(sum);