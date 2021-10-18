import mongoose from 'mongoose';

import { apiResponse } from '../helpers/apiResponseFormat';

import { body, validationResult } from "express-validator";

import { Book } from "../models/models";


// TODO
// To make sure validator checks for already existing documents and subdocuments in mongoose
// To make sure the verses and chapters are sorted according to numbers



export const addNewChapter = async (req, res) => {
    let message, data, links, success, apiResponseJsonFormat, book, code;
    let ShortBookName = req.params.ShortBookName;
    ShortBookName = ShortBookName.toLowerCase();
    links = [];
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false;
        message = errors.array();
        code = 400;
        data = null;
        apiResponseJsonFormat = apiResponse(success, message, data, links);
        res.status(code).json(apiResponseJsonFormat)
    }
    else {
        try {
            book = await Book.findOneAndUpdate(
                {shortname: ShortBookName},
                {$push: {chapters: req.body}},
                { new: true, useFindAndModify: false }
            );
            const addChapter = book.save();
            success = true;
            message = "Verse of the scripture has  been successfully added"
            code = 200;
            data = book;
            apiResponseJsonFormat = apiResponse(success, message, data, links);
            res.status(code).json(apiResponseJsonFormat);
            next();

        } catch (error) {
            // data = null;
            // code = 400;
            // success = false;
            // message = JSON.stringify(error);
            // apiResponseJsonFormat = apiResponse(success, message, data, links);
            // res.status(code).json(apiResponseJsonFormat);
            // next();
        }
    }



}
export const VerseValidator = () => {
    return [
        body('text').isLength({ min: 3 }).withMessage("Make you no forget to fill in wetin the verse talk"),
        body('number').isNumeric().withMessage("Make you sharparly put the verse number"),
    ]
}
export const ChapterValidator = () => {
    return [
        body('number').isNumeric().withMessage("Make you sharparly put the verse number"),
    ]
}
export const addVerseByBookNameAndChapterNumber = async (req, res) => {
    let ShortBookName, chapterNumber, book;
    let message, data, links, success, code, apiResponseJsonFormat;
    links = [];
    ShortBookName = req.params.ShortBookName;
    ShortBookName = ShortBookName.toLowerCase();
    chapterNumber = req.params.chapterNumber;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success = false;
        message = errors.array();
        code = 400;
        data = null;
        apiResponseJsonFormat = apiResponse(success, message, data, links);
        res.status(code).json(apiResponseJsonFormat)
    }
    else {
        try {
            book = await Book.findOne({shortname: ShortBookName});
            book.chapters[chapterNumber-1].verses.push(req.body)
            const addVerseToBookAndChapter = await book.save();
            // if(!addVerseToBookAndChapter) {
            //     res.json("verse could not be added");
            // }
            success = true;
            message = "Verse of the scripture has  been successfully added"
            code = 200;
            data = book;
            apiResponseJsonFormat = apiResponse(success, message, data, links);
            res.status(code).json(apiResponseJsonFormat);
            next();


        } catch (error) {
            // data = null;
            // code = 400;
            // success = false;
            // message = JSON.stringify(error);
            // apiResponseJsonFormat = apiResponse(success, message, data, links);
            // res.status(code).json(apiResponseJsonFormat);
            // next();
            // res.json(error);
        }
    }


    // res.json({ShortBookName,chapterNumber, book});

}

export const getVersesByBookNameAndChapterNumber = (req, res) => {
    let ShortBookName, chapterNumber;
    ShortBookName = req.params.ShortBookName;
    chapterNumber = req.params.chapterNumber;
    res.json({ShortBookName,chapterNumber});
}

export const updateVerseByBookNameAndChapterNumber = (req, res) => {
    let ShortBookName, chapterNumber;
    ShortBookName = req.params.ShortBookName;
    chapterNumber = req.params.chapterNumber;

    res.json({ShortBookName,chapterNumber});

}

export const deleteVerseByBookNameAndChapterNumber = (req, res) => {
    let ShortBookName, chapterNumber;
    ShortBookName = req.params.ShortBookName;
    chapterNumber = req.params.chapterNumber;

    res.json({ShortBookName,chapterNumber});

}

export const getVersesByBookID = (req, res) => {
    Book.findById(req.params.BookID, (err, Book) => {
        if (err) {
            res.send(err)
        }
        res.json(Book.verses);
    });

}



export const getVersebyID = (req, res) => {

}

