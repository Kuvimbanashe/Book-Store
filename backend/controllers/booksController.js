const Book = require('../models/bookModel');
const asyncHandler = require('../middleware/asyncHandler');
const errorHandler = require('../middleware/errorHandler');

const getAllBooks = asyncHandler(async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            success: true,
            message: "Books fetched successfully",
            books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching books",
            error: error.message
        });
    }
});

const getBookById = asyncHandler(async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Book fetched successfully",
            book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching book",
            error: error.message
        });
    }
});

const createBook = asyncHandler(async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        if (!title || !author || !publishYear) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const book = await Book.create({ title, author, publishYear });
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating book",
            error: error.message
        });
    }
});

const updateBook = asyncHandler(async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        const book = await Book.findByIdAndUpdate(req.params.id, { title, author, publishYear });
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating book",
            error: error.message
        });
    }
});

const deleteBook = asyncHandler(async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Book deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting book",
            error: error.message
        });
    }
});

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
