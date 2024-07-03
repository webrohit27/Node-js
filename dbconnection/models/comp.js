const mongoose = require('mongoose');

// Define the Schema
const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
   
  },
  age: {
    type: Number,
    required: true
  },
  work: {
    type: String,
    required: true,
   
  },
  mob: {
    type: String,
    required: true,
    unique: true
  },
  email_id: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please add a valid email address']
  }
});

// Compile the Schema into a Model
const comp = mongoose.model('Individual', empSchema);

module.exports = comp;


const mongoose 