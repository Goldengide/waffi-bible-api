import { addnewBook, deleteBooks, deleteBook, deleteProduct, getBooks, getBookWithID, getBookWithName, getProductWithID, updateBook, updateProduct, arrayToJSONMethod, addnewBookWithValidator, bookValidator, addChapter } from "../controllers/booksControllers";

const bookRoutes = (app) => {


    app.route('/books')

        .post(bookValidator(),addnewBookWithValidator)

        .get(getBooks)

        .delete(deleteBooks);


    app.route('/books/:BookID')

        .get(getBookWithID)
        .put(updateBook)
        .delete(deleteBook);
    

    app.route('/books/:BookID/chapter')

        .get(addChapter);
        // .put(updateBook)
        // .delete(deleteBook);


    app.route('/books/name/:BookShortName')

        .get(getBookWithName);


    app.route('/book/ihope')

    // .get(arrayToJSONMethod);

}

export default bookRoutes;