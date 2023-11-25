const mongoose=require("mongoose");
const cors=require('cors');
const http=require('http');
const app=require("./app");
const { expression } = require("joi");


const server=http.createServer(app);
const socketServer=require("./socketServer");



//All third party middleware
require("dotenv").config();
socketServer.registerSocketServer(server);


//Database Connections 
mongoose.connect(process.env.MONGO_URL,()=>{
    try {
        
    console.log("MongodbConnection Succesfullly !");
    server.listen(process.env.PORT,()=>{
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



