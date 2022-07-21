 const express = require("express");

 const app = express();
 const dotenv  = require("dotenv");
 const mongoose = require("mongoose");
 const authRoute = require("./routes/auth")
 const userRoute = require("./routes/users")


 dotenv.config();
//  console.log("Hello In");

app.use(express.json());
 

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser :true,
    useUnifiedTopology:true,
    // useCreateIndex :true , 
}) 
.then(console.log("Connected To Mongo DB"))
.catch((err)=> console.log(err)) 
// mongoose.set('useFindAndModify', false)


app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute);


 app.listen("5000 ", ()=>{
  
    console.log("Backend is Running")


 })