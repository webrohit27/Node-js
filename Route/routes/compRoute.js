const express = require('express');
const router = express.Router();
const comp = require('../models/comp')

router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newEmployee = new comp(data);
      const response = await newEmployee.save();
      console.log("Data Saved");
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/", async (req, res) => {
    try {
      const response = await comp.find({});
      console.log("data fetch");
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  });

  router.put('/:id', async(req, res)=>{
    try{      
        const emp = req.params.id;
        const data = req.body;

        const updatedEmployee = await comp.findByIdAndUpdate(emp, data,{
            new: true,
            runValidators:true
        });
        if(!updatedEmployee){
            return res.status(404).json({message: 'employee not found'})
        }
        console.log('data updated')
        res.status(200).json(updatedEmployee)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: 'internal server error'})
    }
  })
  module.exports = router;