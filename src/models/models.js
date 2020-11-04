import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ChapterSchema = new Schema({
    name: { 
        type: String,
        required: 'Enter a Chapter name'
    },
    description: {
        type: String,
        required: 'Enter a Chapters description'
    },
    noofVerses: {
        type: Number
    },
    created_date:  {
        type: Date,
        default: Date.now
    }
})

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
    chapters: ChapterSchema,
    noofChapters: {
        type: Number
    },
    created_date:  {
        type: Date,
        default: Date.now
    }
})
