const mongoose = require('mongoose')

const mongoURL = "mongodb://127.0.0.1:27017/new"

const db = mongoose.connection;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

db.on('connected', ()=>{
    console.log("MongoDB is Connected");
})

db.on("error", (err)=>{
    console.log('there is error in connection', err);
})

db.on("disconnected", ()=>{
    console.log("mongoDB is disCOonected");
})

db.close()

module.exports = db;