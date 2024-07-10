const express = require("express");
  const app = express();
  const db = require("./db.js");
   const person = require("./models/person.js");
  const passport = require('passport');
  const local = require('passport-local').Strategy;
  const bodyParser = require('body-parser')
  app.use(bodyParser.json());
  require('dotenv').config();

  passport.use(new local(async(Username, Password, done) => {
    try{
      console.log('receive:', Username, Password);
      const user = await person.findOne({ username:Username });
      if (!user) 
        return done(null, false, {message: 'incorrect username'});
      const pass = user.password === Password? true: false;
      if(pass){
        return done(null, user);
      }
      else{
        return done(null, false, {message: 'incorrect password'});
      }
    }catch(err){
      return done(err)
    }
  }))
  app.use(passport.initialize())
  app.get("/", function (req, res) {
    res.send("successful");
  });

  app.post("/person", function (req, res) {
  const data = req.body
  const newPerson = new person(data)
  res.send(newPerson)
  newPerson.save()
  });

  const PORT = process.env.PORT; 

  app.listen(PORT, () => {    
    console.log("server is running");       
  })