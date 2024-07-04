const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/comp'

mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('connected to mongoDB');
})
db.on('error', (err)=>{
    console.log('there is error in connection:', err);
})
db.on('disconnected', ()=>{
    console.log('mongoDB disconnected');
})
// db.close()
module.exports = db;