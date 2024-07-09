const mongoose = require('mongoose');
const person = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
     },
    work : {
        type: String,
        required: true,
        enum: ['gov', 'private', 'buss']
    },
    age : {
        type: Number,
        required: true
    },
    email : {
        type: String, 
        unique: true,
        required: true
    },
    salary : {
        type: Number,
        required: true
    },
    username:{
        required: true,
        type: String
    },
    
    password:{
        required: true,
        type: String
    },
    
})

const Person = mongoose.model('Person', person);
module.exports = Person