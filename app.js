import express from 'express';
import bodyParser from 'body-parser';
import  mongoose from "mongoose";
import bookRoutes from "./src/routes/bookRoutes";
import versesRoutes from "./src/routes/versesRoutes";


const app = express();
const PORT = 3030;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bibledb', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});




// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });



//  Routes
bookRoutes(app);
versesRoutes(app);
app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
