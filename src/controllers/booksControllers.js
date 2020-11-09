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

export const getBookWithName = (req, res, next) => {
    res.json(req.params.BookName);
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


export const arrayToJSONMethod = (req, res) => {
    const data = [
        'QUIT THE HABIT',
        'POWER OF PRAYER',
        'DESIGNED DIFFERENTLY',
        'ON THE GOAL',
        'COVID 19',
        'BE IN CONTROL OF YOUR STRESS',
        'DONT LET TODAY PASS YOU BY',
        'JUST LOVE',
        'WAIT ON THE LORD',
        'HOLD ON TO THIS PEACE',
        'KEEP LOVING',
        'OUR SOUL IS A PILOT FOR OUR LIVES',
        'GOD WIL FIGHT FOR YOU',
        'PRAY WITH JOY',
        'STAY CONNECTED TO GOD',
        'KEEP DREAMING',
        'LIFE IS A VENTURE',
        'LIFE IS NO VACUUM',
        'CONNECT TO CHRIST',
        'MAKE YOUR LIFE COUNT',
        'VOLUNTEER TODAY',
        'THINK GREAT THOUGHTS',
        'QUENCH IT',
        'SPEAK POSITIVELY',
        'PURSUE THE MISSION',
        'GO FOR IT',
        'YOU WILL REAP ABUNDANTLY',
        'GOD IS YOUR HIDING PLACE',
        'GOD IS THE PERFECT FINISHER',
        'BE PREPARED, YOUR TIME IS COMING',
        'CHANGE IS CONSTANT',
        'GOD HAS THE FINAL SAY',
        "PUT ON THE VICTOR'S CROWN",
        'LEND A HELPING HAND',
        'HANDLE WITH WISDOM',
        'PAUSE',
        'DEAR LEADER BE STRONG',
        'CREATE IN ME A CLEAN HEART',
        "DON'T WALLOW IN SELF PITY",
        'PRAY JUST PRAY',
        'NOTHING MOVES ME',
        'FIND YOUR PLACE',
        'REST AND LEAVE THE REST',
        'DONT TURN BACK',
        'HOLD ON TO YOUR FAITH',
        'STAND STRONG',
        'EXTRAORDINARY',
        'YOU ARE NOT ALONE',
        'DONT FLEE FIGHT BACK',
        'GODS LOVE DOES NOT FAIL',
        'YOUR OWN WILL COME TO YOU',
        'LORD TEACH ME WISDOM',
        'WORDS ARE SACRCED',
        'THERE IS A SPIRIT IN MAN',
        'INADEQUATE ALWAYS ATTRACTS GOD',
        'MAKE WAY FOR OTHERS',
        'STOP TALKING TO MEN; TALK TO GOD',
        'BREAK AWAY',
        'ONE DAY YOU WILL HAVE YOUR WAY',
        'EXCUSES EXCUSES',
        'THE STONE WHICH THE BUILDER REFUSED',
        'GROW.. KEEP GROWING',
        'CALM TRUST',
        'HAVE YOU SOON FORGOTTEN',
        'YOUR ENEMIES',
        'IT IS NOT ABOUT YOU',
        'LEAVE IT TO GOD',
        'GOD HEARS THE VOICE OF YOUR SUPPLICATION',
        'HAVE FAITH IN GOD',
        'GIVE GOD A CHANCE',
        'GO TO CHURCH WITH AN OPEN MIND',
        'JUST CALL AT ANY TIME',
        'LET GOD DIRECT YOUR LIFE',
        'IMMENSE YOURSELF IN GRACE',
        'GOD IS TRAVELLING WITH YOU',
        'GRACE IS SUFFICIENT',
        'I WILL NOT FAIL',
        'IN HIS PRESENCE',
        "PRAYER... LIFE'S GREATEST FORCE",
        'LET NOTHING TAKE YOUR JOY',
        'OBEY THE GODLY IMPULSE',
        'GOD WILL SUPPLY YOUR NEEDS',
        'PRIDE... PLEASE RUN FROM IT',
        'FEAR',
        'CALLED TO OVERCOME',
        "GOD'S PRESENCE",
        'BE GLAD HEARTED',
        'SINCERITY',
        'PRINCIPLES OF HANDLING DIFFICULT PEOPLE',
        'REFILL YOUR CUP OF HAPPINESS',
        'FAILURES',
        'GOD REVERSES SITUATIONS',
        'GRACE SHIELDS US',
        'GRACE SHIELDS ME',
        'GOD GIVES REST',
        'BE FILLED',
        'WINNING AGAINST SIN',
        'GOD HAS NOT FINISHED WITH ME YET',
        'OUR FAITH MAKES US BELIEVE',
        'THE SANCTUARY OF GOD',
        'WAIT FOR GOD',
        'PRAISE UPLIFTS',
        "GOD'S WAY ARE PERFECT",
        'EMPATHY',
        'CHRIST THE LIVING WATERS',
        'FAMILIARITY',
        'YOU WILL REAP WHAT YOU SOW'
    ];

    let dataLines = "";
    data.forEach(element => {
        dataLines = dataLines + element + "<br>";
    });
    res.send(dataLines);
}





