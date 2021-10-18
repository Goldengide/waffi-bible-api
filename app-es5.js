const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {bookRoutes, casualRoutes} = require('./src/es5/routes/bookRoutes');
// const testObjects = require('./src/es5/routes/bookRoutes');
// const versesRoutes = require("./src/routes/versesRoutes");


const app = express();
const PORT = 3020;

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
casualRoutes(app);
// versesRoutes(app);
app.get('/', (req, res) =>
    // res.json(`Store server running on port ${PORT}`)
    res.json(testObjects)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);