import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const VersesSchema = new Schema({
    text: {
        type: String,
        required: [true, 'Make sure say you enter the scripture before you halla button']
    },
    number: {
        type: Number,
        required: [true, 'Shooo! You no go enter verse number?']
    },
    topic: {
        type: String,

    },
    created_date:  {
        type: Date,
        default: Date.now
    }
})

const chapterSchema = new Schema({
    number: {type: Number},
    audio_url: {type: String, default: null},
    picture_url: {type: String, default: null},
    verses: [VersesSchema],
    created_date:  {
        type: Date,
        default: Date.now
    }
})

 const BookSchema = new Schema({
    name: {
        type: String,
        required: 'My person but you never enter the title of the Book wey you wan submit'
    },
    shortname: {
        type: String,
        unique: true,
        required: 'Make sure say you enter the short_name before you halla button'
    },
    description: {
        type: String,
        required: 'This one dey very important'
    },
    chapters: {
        type: [ chapterSchema ],
        required: true
    },
    noOfChapters: {
        type: Number
    },
    created_date:  {
        type: Date,
        default: Date.now
    }
})

export const Book = mongoose.model('Book', BookSchema);
