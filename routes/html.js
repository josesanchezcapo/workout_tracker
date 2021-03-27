const path = require("path");
// const router = require("express").Router();

module.exports = function(app){

// Per each HTML file under the public folder

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname,  "../public/exercise.html"))
    });

    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname,  "../public/exercise.html"))
    });
    
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname,  "../public/stats.html"));
    });

}

