const express = require("express");
const mongoose = require("mongoose");


//Stablishing Port
const PORT = process.env.PORT || 8082;

//Using Express App
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,

});


// routes
require("./routes/html.js") (app);
require("./routes/api.js") (app); 


// Connecting to Server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// module.exports = connection
