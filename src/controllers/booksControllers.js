import mongoose from 'mongoose';
import { Book } from "../models/models";


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

export const getBookWithID = (req, res) => {
    Book.findById(req.params.BookID, (err, Book) => {
        if (err) {
            res.send(err)
        }
        res.json(Book);
    })
}

export const updateBook = (req, res) => {
    Book.findOneAndUpdate(
        { _id: req.params.BookID },
        req.body,
        { new: true, useFindAndModify: false },
        (err, Book) => {
            if (err) {
                res.send(err)
            }
            res.json(Book);
        })
}

export const deleteBook = (req, res) => {
    Book.deleteOne({ _id: req.params.BookID }, (err, Book) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'successfully deleted product' });
    })
}






