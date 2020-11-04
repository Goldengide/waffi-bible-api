import mongoose from 'mongoose';
import { BookSchema } from "../models/models";
import { ChapterSchema } from "../models/models";

const Book = mongoose.model('Book', BookSchema);
const Chapter = mongoose.model('Chapter', ChapterSchema);

export const addnewBook = (req, res) => {
    let newBook = new Book(req.body);

    newBook.save((err, Book) => {
        if (err) {
            res.send(err)
        }
        res.json(Book);
    });
}

export const getBooks = (req, res) => {
    Book.find({}, (err, Book) => {
        if (err) {
            res.send(err)
        }
        res.json(Book);
    })

}

export const getProductWithID = (req, res) => {
    Product.findById(req.params.BookID, (err, Book) => {
        if (err) {
            res.send(err)
        }
        res.json(Product);
    })
}

export const updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.ProductID },
        req.body,
        { new: true, useFindAndModify: false },
        (err, Product) => {
            if (err) {
                res.send(err)
            }
            res.json(Product);
        })
}

export const deleteProduct = (req, res) => {
    Book.deleteOne({ _id: req.params.BookID }, (err, Book) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'successfully deleted product' });
    })
}