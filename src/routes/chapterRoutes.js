import { addnewChapter, getChapters, getChapterWithID, updateChapter, deleteChapter } from "../controllers/chapterControllers";

const chapterRoutes = (app) => {

    app.route('/chapters')

        .post(addnewChapter)
        
        .get(getChapters);

    app.route('/chapters/:ChapterID')

        .get(getChapterWithID)
        .put(updateChapter)
        .delete(deleteChapter);

}

export default chapterRoutes;