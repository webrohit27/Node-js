const express = require('express')
const app = express()
app.set("view engine", "ejs")
app.use(express.static('./public'));
app.get('/', function(req, res){
    res.render('index', {abc:25})
})

app.listen(3000,()=>{
    console.log("3000 port server is running");
  })