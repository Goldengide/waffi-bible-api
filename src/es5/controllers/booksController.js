const mongoose = require('mongoose');

const { body, validationResult } = require("express-validator");

const { Book } = require("../models/models");
// import { response } from 'express';

const  apiResponse  = require('../helpers/apiResponseFormat');

 const addnewBook = (req, res) => {
    req.body.shortname = req.body.shortname.toLowerCase();
    let newBook = new Book(req.body);
    let noOfChapters = req.body.noOfChapters;
    for (let index = 1; index <= noOfChapters; index++) {
        newBook.chapters.push({ number: index });

    }

    newBook.save((err, Book) => {
        if (err) {
            res.send(err)
        }


        res.json(Book);
    });
}

 const bookValidator = () => {
    return [
        body('name').isLength({ min: 3 }).withMessage('Shoo!, You no go add the Book Name'),
        body('shortname').isLength({ min: 3 }),
        body('description').isLength({ min: 3 }),
        body('noOfChapters').isNumeric(),
    ]
}
 const addnewBookWithValidator = (req, res, next) => {
    let code, response;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        response = { errors: errors.array() };
        code = 400;
        res.status(code).json(response);

    }
    else {
        req.body.shortname = req.body.shortname.toLowerCase();
        let newBook = new Book(req.body);
        let noOfChapters = req.body.noOfChapters;
        for (let index = 1; index <= noOfChapters; index++) {
            newBook.chapters.push({ number: index });

        }

        newBook.save((err, Book) => {
            if (err) {
                // code = 500;
                res.send(err)
            }

            code = 200;
            response = Book;
            res.status(code).json(response);
            next();



        })
        // res.json({"response": "345"});
        // next();
    }


}



 const getBooks = async (req, res) => {

    let data, message, errorCode, success;

    let links = [];


    try {

        let allBooks = await Book.find({}).exec();


        if (allBooks) {

            data = allBooks;

            message = "List of Books of the Bible Stored";

            success = true;

            errorCode = null;

        }

    } catch (error) {


        data = null;

        message = "There was an error somewhere";

        success = false;

        errorCode = JSON.stringify(error);

    }


    let result = apiResponse(success, message, data, [], errorCode);
    res.json(result);

}

 const getBookWithID = async (req, res) => {

    let data, message, errorCode, status;

    let links = [];


    try {

        let bookWithID = await Book.findById(req.params.BookID).exec();


        if (bookWithID) {

            data = bookWithID;

            message = `Book with the ID of ${req.params.BookID} generated`;

            status = "successful";

            errorCode = null;

        }

    } catch (error) {


        data = null;

        message = "There was an error somewhere";

        status = "failed";

        errorCode = JSON.stringify(error);

    }


    let result = apiResponse(status, message, data, [], errorCode);

    res.json(result);

}

 const getBookWithName = async(req, res) => {
    let bookShortName = req.params.BookShortName;
    bookShortName = bookShortName.toLowerCase();
    let data, message, errorCode, status;

    let links = [];


    try {

        let bookWithShortname = await Book.find({ shortname: bookShortName }).exec();


        if (bookWithShortname) {

            data = bookWithShortname[0];

            message = `Details of ${req.params.BookShortName} generated`;

            status = "successful";

            errorCode = null;

        }

    } catch (error) {


        data = null;

        message = "There was an error somewhere";

        status = "failed";

        errorCode = JSON.stringify(error);

    }


    let result = apiResponse(status, message, data, [], errorCode);

    res.json(result);

}

// export const getBookWithNameAndChapterNumber = (req, res) => {}

 const updateBook = (req, res) => {
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

 const deleteBook = (req, res) => {
    Book.deleteOne({ _id: req.params.BookID }, (err, Book) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'successfully deleted product' });
    })
}

 const deleteBooks = async (req, res) => {
    let countBooks = await Book.find({}).countDocuments().exec();
    let deleteBookAction = await Book.deleteMany().exec();

    if (!deleteBookAction) {
        res.send(err)
    }

    res.json({ message: `successfully deleted ${countBooks} Books` });
}


 const addChapter = (req, res) => { }

// export const getChapters = (req, res) => { }

const casualController = (req, res) => {
    // return res.json("Casual Response")
    return "Casual Response";
}
module.exports.addnewBook = addnewBook;
module.exports.bookValidator = bookValidator;
module.exports.addnewBookWithValidator = addnewBookWithValidator;
module.exports.getBooks = getBooks;
module.exports.getBookWithID = getBookWithID;
module.exports.getBookWithName = getBookWithName;
module.exports.updateBook = updateBook;
module.exports.deleteBook = deleteBook;
module.exports.deleteBooks = deleteBooks;
module.exports.casualController = casualController;
