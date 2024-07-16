const mongoose = require('mongoose');

const mongoDB ='mongodb+srv://Task:1234@task.xqnrqmr.mongodb.net/'

mongoose.connect(mongoDB)

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