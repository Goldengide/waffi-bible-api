import express from 'express';
import bodyParser from 'body-parser';
import  mongoose from "mongoose";
import bookRoutes from "./src/routes/bookRoutes";
import chapterRoutes from './src/routes/chapterRoutes';


const app = express();
const PORT = 3030;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb', {
    useNewUrlParser: true, 
    useUnifiedTopology:true
});




// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

//  Routes
bookRoutes(app);
chapterRoutes(app);
app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
