const express = require('express');
const router = express.Router();
const Passengers = require('../schema/Passenger');


//create passenger using correct data
router.post('/', async (req, res) => {
   try {
    let passengers = new Passengers(req.body);
    let response = await passengers.save();
    res.status(202).send(response)
   } catch (error) {
     res.status(500).send(error)
   } 
})

//get data with pagination and limit
router.get('/', async (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const starti = (page - 1) * limit;
    const endi = page * limit;
    let data={}
    let response = await Passengers.find();
    let totalresult=await Passengers.count();
    data={
    totalresult:totalresult,
    pages:Math.ceil(totalresult/limit)
    }
    data.data = response.slice(starti, endi)
    res.status(202).send(data);
})

//read passenger by passenger id
router.get('/:id', async(req,res)=>{
    try {
      let response=await Passengers.findById(req.params.id);
      res.status(202).send(response);  
    } catch (error) {
      res.status(500).send(error);
    }
    });
    

  //delete passenger by using passenger id
  router.delete('/:id',async(req,res)=>{
      try {
          let response=await Passengers.findByIdAndDelete(req.params.id);
          res.status(202).send({"message":"passenger data delete sucessfully"});
      } catch (error) {
        res.status(500).send(error);
      }
  })

  // update passenger name with patch request
  router.patch('/:id',async(req,res)=>{
  try {
    const data = await Passengers.findByIdAndUpdate(req.params.id,{name:req.body.name});
    res.status(202).send(data);
  } catch (error) {
    res.status(500).send(error)
  }
  })

  //update every detial of passenger
  router.put('/:id',async(req,res)=>{
  try {
    const data = await Passengers.findByIdAndUpdate(req.params.id,{name:req.body.name,trips:req.body.trips});
    res.status(202).send(data);
  
  } catch (error) {
    res.status(500).send(error)
  }
  })


module.exports = router;