
const mongoose = require("mongoose");


const useraddress = new mongoose.Schema({
   firstname:{type:String,required:true},
   lastname:{type:String,required:true},
   email:{type:String,required:true,unique:true},
   mobileno:{type:Number,required:true},
   country:{type:String,required:true},
pincode:{type:Number,required:true},
state:{type:String},
street:{type:String}

});


 module.exports = mongoose.model("useraddress",useraddress)
 

