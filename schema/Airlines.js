//Schema for Airline Endpoint
const mongoose=require('mongoose');
const {Schema}=mongoose;
const AirlinesSchema=new Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    slogon:{
        type:String,
        required:true
    },
    head_quaters:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    established:{
        type:String,
        required:true
    }
})
const Airlines=mongoose.model("airlines",AirlinesSchema);
module.exports=Airlines;