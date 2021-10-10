const mongoose=require('mongoose');
const uri='mongodb://localhost:27017/client';
const ConnectToMongo=()=>{
    mongoose.connect(uri,()=>{
         console.log("connected to database");
    })
}
module.exports= ConnectToMongo;