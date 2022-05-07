

const express = require("express")
const  port = process.env.PORT||5000
const mongoose = require("mongoose")
const Reguser = require("./models/usermodel")
const useraddress = require("./models/addressmodel")
const jwt  = require('jsonwebtoken')
const cors = require('cors')
const middleware = require("./middleware")
const app = express()
app.use(cors())
app.use(express.json())





mongoose.connect("mongodb+srv://gurubilli:gurubilli@cluster0.dlpod.mongodb.net/fastrackusers?retryWrites=true&w=majority",{
    useNewUrlParser :true,
    useUnifiedTopology:true,
    

},
    (err)=>{
    if(err)return console.log(err);
    console.log("conmected to mongodb")
})

app.use("/login",require("./routers/loginRouter"))
app.use("/auth",require("./routers/userRouter"))

app.use("/checkout",require("./routers/addressRouter"))



app.get("/auth",async(req,res)=>{
    try{
        const users = await Reguser.find().lean().exec()
        return res.status(200).send({users:users})
    }catch(err){
        return res.status(500).send("error gone siva")
    }
})


app.get("/addressdet",async(req,res)=>{
    try{
        const users = await useraddress.find().lean().exec()
        return res.status(200).send(users)
    }catch(err){
        return res.status(500).send("error gone siva")
    }
})



app.listen(port,()=>console.log(`server start on port ${port}`))




