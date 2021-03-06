import { getVersesByBookID, getVersesByChapter, getVersesByBookNameAndChapterNumber, addVerseByBookNameAndChapterNumber, VerseValidator, addNewChapter, ChapterValidator } from "../controllers/versesControllers";

const versesRoutes = (app) => {
    app.route('/books/name/:ShortBookName/:chapterNumber')
        .get(getVersesByBookNameAndChapterNumber)
        .post(VerseValidator(), addVerseByBookNameAndChapterNumber);

    app.route('/chapter/:ShortBookName')
        .post(ChapterValidator(), addNewChapter);
}



export default versesRoutes;