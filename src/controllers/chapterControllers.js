import mongoose from 'mongoose';
import { ChapterSchema } from "../models/models";

const Chapter = mongoose.model('Chapter', ChapterSchema);

export const addnewChapter = (req, res) => {
    let newChapter = new Chapter(req.body);

    newChapter.save((err, Chapter) => {
        if (err) {
            res.send(err)
        }
        res.json(Chapter);
    });
}
export const getChapters = (req, res) => {
    Chapter.find({}, (err, Chapter) => {
        if (err) {
            res.send(err)
        }
        res.json(Chapter);
    })

}

export const getChapterWithID = (req, res) => {
    Chapter.findById(req.params.ChapterID, (err, Chapter) => {
        if (err) {
            res.send(err)
        }
        res.json(Chapter);
    })
}

export const updateChapter = (req, res) => {
    Chapter.findOneAndUpdate(
        { _id: req.params.ChapterID },
        req.body,
        { new: true, useFindAndModify: false },
        (err, Chapter) => {
            if (err) {
                res.send(err)
            }
            res.json(Chapter);
        })
}

export const deleteChapter = (req, res) => {
    Chapter.deleteOne({ _id: req.params.ChapterID }, (err, Chapter) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'successfully deleted product' });
    })
}