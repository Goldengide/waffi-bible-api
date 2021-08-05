import mongoose from 'mongoose';
import { Book } from "../models/models";
import {_} from "underscore";
// import { ChapterSchema } from "../models/models";


const apiResponse = (message, data, status, errorCode = false,) => {
    return {
        status: status,
        message: message,
        data: data,
        if(errorCode) {
            errorCode: errorCode
        }
    }
}


export const Members =  function(args) {
    _.extend(this,args);
    this.emailIsValid = function () {
        return this.email && this.email.length > 3;
    }
}


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
