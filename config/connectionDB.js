const mongoose = require("mongoose");
require('dotenv/config');
const awa = require("mongodb");

const dbConfig = process.env.MONGODB_URI;


async function connectDB(){
    awa.connect(dbConfig,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () =>
            console.log("Connected to DB")
    );
}


module.exports = connectDB;