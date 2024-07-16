const mongoose = require('mongoose');

const mongoURL ='mongodb://127.0.0.1:27017/task'

mongoose.connect(mongoURL)

const db =  mongoose.connection

db.on('connected', ()=>{
    console.log('connected to MongoDB');
});
db.on('error', (err)=>{
    console.log('MongoDB connection error:', err);
});
db.on('disconnected', ()=>{
    console.log('MongoDB disconnected');
});
// db.close()
module.exports = db