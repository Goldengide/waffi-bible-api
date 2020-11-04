import { addnewBook, deleteBook, deleteProduct, getBooks, getBookWithID, getProductWithID, updateBook, updateProduct } from "../controllers/booksControllers";

const bookRoutes = (app) => {

    app.route('/books')

        .post(addnewBook)
        
        .get(getBooks);

    app.route('/books/:BookID')

        .get(getBookWithID)
        .put(updateBook)
        .delete(deleteBook);

}

export default bookRoutes;