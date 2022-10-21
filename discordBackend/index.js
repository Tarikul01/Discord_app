const express=require("express");
const app=express();
const http=require("http");
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();

app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello");
})

mongoose.connect(process.env.MONGO_URL,()=>{
    try {
        
    console.log("MongodbConnection Succesfullly !");
    app.listen(process.env.PORT,()=>{
        console.log(`Server running https://localhost:${process.env.PORT}`);
    })
    } catch (error) {
        Console.log("Database Connection Fail!");  
    }
})


// const server=http.createServer(app);

// server.listen(process.env.PORT,()=>{
//     console.log("Successfull!");
// })



