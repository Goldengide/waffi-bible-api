import { getVersesByBookID, addNewVerse, getVersesByChapter } from "../controllers/versesControllers";

const versesRoutes = (app) => {
    app.route('/:BookID/verses')
        .get(getVersesByBookID)
        .post(addNewVerse);
}

export default versesRoutes;