const person = require("./models/person.js");
const passport = require('passport');
const local = require('passport-local').Strategy;

passport.use(new local (async (Username, Password, done) => {
    try{
    //   console.log('receive:', Username, Password);
      const user = await person.findOne({ username:Username });
      if (!user) 
        return done(null, false, {message: 'incorrect username'}); 

    //   const pass = user.password === Password? true: false;

         const pass = await user.comparePassword(Password)
         
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

  module.exports = passport;