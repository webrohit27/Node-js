const mongoose = require('mongoose');
const bcrypt = require('bcrypt');``
const validator = require('validator');
const person = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        minlength:3,
        maxlength:7
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
        required: true,
        unique:[true,"email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
    salary : {
        type: Number,
        required: true
    },
    username:{
        required: true,
        type:String
    },
    password:{
        required: true,
        type:String
    }
})

person.pre('save', async function(next){
    const person = this;

    if(!person.isModified('password')) return next();

    try{
        const salt = await bcrypt.genSalt(10);
        person.password = await bcrypt.hash(person.password, salt);
        next();
    }catch(err){
        return next(err);
    }
})

person.methods.comparePassword = async function(candidatePassword){
    try{
        const match = await bcrypt.compare(candidatePassword, this.password);
        return match;
    }catch(err){

    }
}


const Person = mongoose.model('Person', person);
module.exports = Person