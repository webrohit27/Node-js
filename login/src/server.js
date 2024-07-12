const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const db = require('./mongo')
const template = path.join(__dirname, '../templates')
app.use(express.json());
app.use(express.urlencoded({ extended:false}))
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, '../public')));
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
    try {
        const user = await Login.findOne({ name: req.body.name });
        
        if (!user) {
            return res.status(404).send("User not found.");
        }

        if (user.password !== req.body.password) {
            return res.status(401).send("Incorrect password.");
        }

        // User login successful, render home page or redirect as needed
        res.render("home", { naming: `${req.body.password}+${req.body.name}` });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Internal Server Error.");
    }
});

app.listen(3000,()=>{
    console.log("server is running");
})