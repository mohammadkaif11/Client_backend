const ConnectToMongo=require('./db');
const express=require('express');
const port=3000;
ConnectToMongo();

const app=express();
app.use(express.json())

 app.get('/',(req,res)=>{
     res.send("connect to express");
 });
 
 //two endpoint for api
 app.use('/airlines',require('./routers/airlines'));
 app.use('/passenger',require('./routers/passenger'));

 app.listen(port,()=>{
  console.log(`server is listen at port${port}`);
 })