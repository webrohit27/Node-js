const mongoose = require('mongoose');

const mongoURL ='/mongodb://127.0.0.1:27017/Student'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

db.on('connected', () => {
    console.log("MongoDB is Connected");
})

db.on('error', (err) => {
    console.log("");
})

db.on('connected', () => {
    console.log("MongoDB is Connected");
})
