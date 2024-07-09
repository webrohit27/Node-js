const express = require('express');
const router = express.Router();
const comp = require('../models/comp')

// here we create data on server 

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

  // here we get data from server by the help of `{router.get method}`

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


  // Here we find our data 
  router.get('/:work', async(req, res)=>{
    try{      
        const mine = req.params.work;
        if(mine=='developer' || mine =='tester' || mine=='manager'){
            const response = await comp.find({employee_work:mine})
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


// Here we update our data
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


router.patch('/Comp/:id',async(req,res)=>{
  try{
    const id=req.params.id
    const updatecomp=await comp.findByIdAndUpdate(id,req.body,{
      new:true
    })
    res.send(updatecomp)
  }
  catch(error){
    console.log(error);
    res.status(400).json({message:"internal server error1"})
  }
})


// here we delete our data
router.delete('/:id', async(req, res)=>{
  try{      
      const del = req.params.id;

      const deleteEmployee = await comp.findByIdAndDelete(del)
      if(!deleteEmployee){
          return res.status(404).json({message: 'employee not found'})
      }
      console.log('data updated')
      res.status(200).json(deleteEmployee)
  }
  catch(error){
      console.log(error)
      res.status(500).json({message: 'internal server error'})
  }
})

  module.exports = router;

