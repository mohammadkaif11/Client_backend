const express=require('express');
const router=express.Router();
const Airlines=require('../schema/Airlines');
const { body, validationResult } = require('express-validator');


//create airline data
router.post('/',[
    body('name','name cannot blank').exists(),
    body('country','country  cannot blank').exists(),
    body('logo','logo cannot blank').exists(),
    body('slogon','slogon cannot blank').exists(),
    body('slogon','slogon is minimum 10 words').isLength({min:10}),
    body('head_quaters','head_quaters cannot blank').exists(),
    body('website','website cannot blank').exists(),
    body('established','establish cannot blank').exists(),
],
async (req,res)=>{
const {id,name,country,logo,slogon,head_quaters,website,established}=req.body;
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array()});
} 
try {
  let  airlines= new Airlines({id,name,country,logo,slogon,head_quaters,website,established})
  let response=await airlines.save();
  res.status(202).send(response);
} catch (error) {
  console.log(error)
  res.status(500).send(error);
}
})
 
//get all airlinedata
router.get('/', async(req,res)=>{
try {
  let response=await Airlines.find();
  res.status(202).send(response);
} catch (error) {
  res.status(500).send(error);
}
});

//read airline by id
router.get('/:id', async(req,res)=>{
  try {
    let response=await Airlines.findById(req.params.id);
    res.status(202).send(response);  
  } catch (error) {
    res.status(500).send(error);
  }
  })
  


module.exports=router;