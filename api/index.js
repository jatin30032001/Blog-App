 const express = require("express");

 const app = express();
 const dotenv  = require("dotenv");
 const mongoose = require("mongoose");


 dotenv.config();
 console.log("Hello In");
 

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser :true,
    useUnifiedTopology:true,
    // useCreateIndex :true , 
}) 
.then(console.log("Connected To Mongo DB"))
.catch((err)=> console.log(err)) 
// mongoose.set('useFindAndModify', false)


 app.listen("5000 ", ()=>{
  
    console.log("Backend is Running")


 })