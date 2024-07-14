const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const db = require('./mongo')
const template = path.join(__dirname, '../templates')
app.use(express.json());   // middleware
app.use(express.urlencoded({ extended:false})) // middleware  
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, '../public')));   //css file 
app.set('views',template)

app.get('/', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/signup', async(req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    }
    await db.insertMany([data])
    res.render("home")
})

app.post('/login', async(req, res) => {
    try{
        const check = await db.findOne({name:req.body.name})
        if(check.password === req.body.password){
            res.render("home",{naming: `${req.body.password}+${req.body.name}`})
        }else{ 
            res.send("incorrect password")
        }
    }
    catch(err){
        res.send("wrong data")
    }
})
app.listen(3000,()=>{
    console.log("server is running");
})