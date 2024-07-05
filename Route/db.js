const mongoose = require('mongoose');
require('dotenv').config()

//  const mongoURL = process.env.MONGO_DB_LOCAL;

const mongoDB = "mongodb+srv://Old:7777@old.kxg7c03.mongodb.net/"

mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to mongodb');
});

db.on('error',(err)=>{
    console.log('There is error in connection', err);
});

db.on('disconnected',(err)=>{
    console.log('mongodb disconnected');
});


// db.close();
module.exports = db
