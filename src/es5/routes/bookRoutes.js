const { addnewBook,
    deleteBooks,
    deleteBook,
    getBooks,
    getBookWithID,
    getBookWithName,
    getProductWithID,
    updateBook,
    updateProduct,
    arrayToJSONMethod,
    addnewBookWithValidator,
    bookValidator,
    addChapter,
    casualController
} = require("../controllers/booksController");

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

        // .get(addChapter);
        // .put(updateBook)
        // .delete(deleteBook);


    app.route('/books/name/:BookShortName')

        .get(getBookWithName);


    app.route('/book/ihope')

    // .get(arrayToJSONMethod);

}

const casualRoutes = (app) => {
    app.route('/casual')

        .get(casualController)
}

module.exports = {bookRoutes, casualRoutes};
// module.exports.age = 12;
