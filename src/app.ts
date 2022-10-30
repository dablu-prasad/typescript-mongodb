import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import userrouters from "./routes/userrouters.js"
import mongoose from "mongoose";
import { DB, PORT } from "./config/index.js";
import { errorHandler } from "./middlewears/errorHandler.js";
import morgan from "morgan";

const app=express();
app.use(morgan("tiny"));
app.use(express.json())
app.use("/api/v1/user",userrouters)

app.use(()=>{throw createHttpError(404,"Route not found");});
app.use(errorHandler)

mongoose.connect(DB).then(()=>{
    console.log("Connect to DB");
    app.listen(PORT,()=>{
        console.log(`Listening On Port ${PORT}`);
    })
}).catch(()=>{
    throw createHttpError(501,"Unable to connect database!!")
})