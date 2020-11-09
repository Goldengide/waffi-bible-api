import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const VersesSchema = new Schema({
    text: { 
        type: String,
        required: 'Make sure say you enter the scripture before you halla button'
    },
    chapter: { 
        type: Number,
        required: 'Shooo! You no go enter chapter number?'
    },
    number: {
        type: Number,
        required: 'Shooo! You no go enter verse number?'
    },
    topic: {
        type: String,

    },
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
        required: 'Make sure say you enter the short_name before you halla button'
    },
    description: {
        type: String,
        required: 'This one dey very important'
    },
    verses: {
        type: [ VersesSchema ],
        required: true
    },
    noofChapters: {
        type: Number
    },
    created_date:  {
        type: Date,
        default: Date.now
    }
})

export const Book = mongoose.model('Book', BookSchema);
