
//require('dotenv').config;
import dotenv from 'dotenv'

import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
    path:'./env'
})

connectDB();


/*
(async()=>{
     try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("Error",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
     } catch (error) {
         console.error("ERROR:",error);
         throw err
     }
})() */