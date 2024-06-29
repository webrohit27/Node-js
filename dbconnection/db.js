const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/student';

mongoose.connect(mongoUrl, {useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to mongodb');
});

db.on('error',(err)=>{
    console.log('There is error in connection',err);
});

db.on('disconnected',(err)=>{
    console.log('mongodb disconnected');
});
// db.close();
module.exports = db
