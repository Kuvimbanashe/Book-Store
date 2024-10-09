import express from "express"
import { PORT,DbConnection } from "./config.js"

import mongoose from 'mongoose'
const app = express()

app.get("/",(req,res)=>{

    console.log(req)
    return res.status(234).send("welcome to MERN BookStore")

})




mongoose
.connect(DbConnection)
.then(()=>{
    console.log("Connected to database")
    app.listen(PORT, (req,res)=>{
        console.log(`App listening to port ${PORT}`)
    })

})
.catch((error)=>{
    console.log(error)

})
