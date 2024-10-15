import express from "express"
import { PORT,DbConnection } from "./config.js"
import router from "./routes/booksRoutes.js"
import mongoose from "mongoose"
import cors from "cors"
import authRoutes from "./routes/auth.js"
import errorHandler from "./middleware/errorHandler.js"


const app = express()
app.use(express.json())
app.use(cors())
app.use(errorHandler)


app.get("/",(req,res)=>{

    console.log(req)
    return res.status(234).send("welcome to MERN BookStore")

})
app.use("/books", router)
app.use("/api/auth", authRoutes)
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
