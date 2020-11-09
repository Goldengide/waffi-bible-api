import { addnewBook, deleteBook, deleteProduct, getBooks, getBookWithID, getBookWithName, getProductWithID, updateBook, updateProduct, arrayToJSONMethod } from "../controllers/booksControllers";

const bookRoutes = (app) => {

    app.route('/books')

        .post(addnewBook)
        
        .get(getBooks);

    app.route('/books/:BookID')

        .get(getBookWithID)
        .put(updateBook)
        .delete(deleteBook);
    
    app.route('/books/name/:BookName')

        .get(getBookWithName);

    app.route('/book/ihope')

        .get(arrayToJSONMethod);

}

export default bookRoutes;