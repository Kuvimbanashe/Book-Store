import { Book } from "../models/bookModel.js"
import express from "express"
const router = express.Router()

router.post("/", async(req,res)=>{
    try {
        const {title, author, publishYear} = req.body;

        if(!title || !author || !publishYear){
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear"
            })
        }   
        const newBook = {
            title:title,
            author:author,
            publishYear:publishYear
        }
        const book = await Book.create(newBook)
        return res.status(201).send(book)

    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})  
    }
})

// get all books from database

router.get("/", async(req,res)=>{
    try {
        const books = await Book.find()
        console.log(books)
        return res.status(200).json({books})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})  
    }
})  

        

router.get("/details/:id", async(req,res)=>{
    try {
        const {id} = req.params
        console.log(id)
        const book = await Book.find({_id:id})
        return res.status(200).json({ book})
    } catch (error) {   
        console.log(error.message)
        res.status(500).send({message: error.message})  
    }
})

// update book in database

router.put("/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const {title, author, publishYear} = req.body
        const book = await Book.findByIdAndUpdate(id, {title, author, publishYear})
        return res.status(200).json({
            data: book
        })  
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})  
    }
})

// delete book from database        

router.delete("/delete/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const book = await Book.findByIdAndDelete(id)
        return res.status(200).json({
            data: book
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})  
    }
})

export default router


