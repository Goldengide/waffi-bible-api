import { addnewBook, deleteProduct, getBooks, getProductWithID, updateProduct } from "../controllers/booksControllers";

const routes = (app) => {

    app.route('/books')

        .post(addnewBook)
        
        .get(getBooks);

    app.route('/books/:BookID')

        .get(getProductWithID)
        .put(updateProduct)
        .delete(deleteProduct);

}

export default routes;