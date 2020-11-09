import mongoose from 'mongoose';
import { Book } from "../models/models";


export const addNewVerse = (req, res) => {
    Book.findByIdAndUpdate(
        { _id: req.params.BookID},
        // {verses: req.body},
        {$push: {verses: req.body}},
        { new: true, useFindAndModify: false },
        (err, Book) => {
            if (err) {
                res.send(err)
            }
            res.json(Book.verses);
        })

}

export const getVersesByBookID = (req, res) => {
    Book.findById(req.params.BookID, (err, Book) => {
        if (err) {
            res.send(err)   
        }
        res.json(Book.verses);
    });

}


export const getVersesByChapter = (req, res) => {
    // Book.find()
}

export const getVersebyID = (req, res) => {

}

