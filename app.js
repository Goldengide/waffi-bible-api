const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let homeRoutes = express.Router();
app.use("/", homeRoutes);
homeRoutes.route("/")
    .get((req, res) => {
        res.json({
            name: "Waffi Bible API",
            alias: "waffi-bible-app",
            developer: "Gideon Amowogbaje",
            creator: "Alexander",
            version: "1.0.0"
        });
    });
app.listen(3010, function(){
console.log("working!!!");
})

// learn the best formats of api