const mongoose = require('mongoose');
const mongoUrl = 'mongodb://127.0.0.1:27017/comp';

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
