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
app.get('/person', async(req, res)=>{
    try{
        const response = await Person.find({})
        res.json(response)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
