const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    gender:{
        type:String,
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
    phone:{
        type:Number,
        required: true,
        unique: true
    }
})

const Person = mongoose.model('Person', personSchema);
module.exports = Person