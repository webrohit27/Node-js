const express = require("express");
  const app = express();
  const db = require("./db.js");
  require('dotenv').config();
  const passport =  require('./auth.js')
  const person = require("./models/person.js")
  const bodyParser = require('body-parser')
  app.use(bodyParser.json());

  app.use(passport.initialize())
 
  const passA = passport.authenticate('local', {session:false})
  app.get("/", passA, function (req, res) {
    res.send("successful");
  });


  app.post("/person",  function (req, res) {
  const data = req.body
  const newPerson = new person(data)
  res.send(newPerson)
  newPerson.save()
  });

  app.get('/person', passA, async function (req, res) {
    try {
      const people = await person.find({});
      console.log('data fetch');
      res.status(200).json(people);
    } catch (err) {
      console.log(err);
      res.status(500).json({msg : "internal server error"});
    }
  });

  const PORT = process.env.PORT; 

  app.listen(PORT, () => {    
    console.log("server is running");       
  })



