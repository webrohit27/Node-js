const express = require("express");
const app = express();
const db = require("./db.js");
const office = require("./models/comp.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("successful");
});
app.post("/office", async (req, res) => {
  try {
    const data = req.body;
    const newEmployee = new office(data);
    const response = await newEmployee.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});
app.get("/office", async (req, res) => {
  try {
    const response = await office.find({});
    console.log("data fetch");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
});

app.get('/office/:work', async(req, res)=>{
    try{
        const work = req.params.work;
        if(work=='developer' || work =='CEO' || work=='Manager'){
            const response = await office.find({employee_work:work})
            console.log('data fetch')
            res.status(200).json(response)
        }
        else{
            res.status(400).json({message: 'Invalid work'})
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: 'internal server error'})
    }
})

app.listen(4000, () => {    
  console.log("4000 port server is running");       
})