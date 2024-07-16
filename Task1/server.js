const express = require('express')
const app = express()
const db  =  require('./db')
const Person =  require('./models/person')
// const bodyParser =  require('body-parser')
// app.use(bodyParser.json())
app.use(express.json())
app.get('/',function(req, res){
    res.send('server is running')
})
app.post('/person', function (req, res) {
    const data =  req.body 
    const newPerson = new Person(data);

    newPerson.save()
    res.json(newPerson)
})

app.get('/person', function(req, res) {
    // Check if the database connection is open
    if (!db.connected) {
        return res.status(503).send('Service Unavailable - Database not connected.');
    }

    Person.find({}, function(err, persons) {
        if (err) {
            console.error('Error fetching persons:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json(persons);
        }
    });
});


app.listen(3000,()=>{
    console.log('server is running on port 3000');
})