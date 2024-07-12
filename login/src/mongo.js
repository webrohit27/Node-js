// const mongoose = require('mongoose');

// const mongoDB = "mongodb+srv://Old:7777@old.kxg7c03.mongodb.net/"

// mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true})
// const db = mongoose.connection;

// db.on('connected',()=>{
//     console.log('Connected to mongodb');
// });

// db.on('error',(err)=>{
//     console.log('There is error in connection', err);
// });

// db.on('disconnected',(err)=>{
//     console.log('mongodb disconnected');
// });



// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required: true
//     },
//     password:{
//         type:String,
//         required: true
//     }
// })
// const Login = new mongoose.model('Login', userSchema);
// module.exports = Login



const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/login")

.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('connection not done ');
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})
const Login = new mongoose.model('Login', userSchema);
module.exports = Login

