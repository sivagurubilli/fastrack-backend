
const useraddress = require("../models/addressmodel")
const router = require("express").Router();


router.post("/",async(req,res)=>{
    try{
      
   const {firstname,lastname,email,
    mobileno,country,pincode,state,street} = req.body;
    let exist =await useraddress.findOne({email})

if(mobileno.length < 10){
    return res.status(400).send("mobileno is invalid")
}


let newUser = new useraddress({
    firstname,
    lastname,
    email,
    mobileno,
   country,
   pincode,
   state,
   street

})
 await newUser.save()
res.status(200).send("register succesfully")

}catch(err){
        console.log(err)
        res.status(500).send(err)
    }

});

module.exports =router;