import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const BookSchema = new Schema({
    name: { 
        type: String,
        required: 'Enter a Book name'
    },
    short_name: { 
        type: String,
        required: 'Enter short name for the Book'
    },
    description: {
        type: String,
        required: 'Enter a Books description'
    },
    noofChapters: {
        type: String
    },
    created_date:  {
        type: Date,
        default: Date.now
    }
})

export const ChapterSchema = new Schema({
    name: { 
        type: String,
        required: 'Enter a Chapter name'
    },
    description: {
        type: String,
        required: 'Enter a Books description'
    },
    noofVerses: {
        type: Number
    },
    chapters: {
        type: Array
    },
    created_date:  {
        type: Date,
        default: Date.now
    }
})