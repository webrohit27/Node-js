const mongoose = require('mongoose');
const officeSchema = new mongoose.Schema({
    
    employee_id: { 
        type: Number,
        required: true,
     },
    employee_name: { 
        type: String,
        required: true,
     },
    employee_work : {
        type: String,
        required: true
    },
    employee_age : {
        type: Number,
        required: true
    },
    employee_email : {
        type: String, 
        unique: true,
        required: true
    },
    employee_phone : {
        type: Number,
        unique: true,
        required: true
    }
})

const Office = mongoose.model('Office', officeSchema);
module.exports = Office