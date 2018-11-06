const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;


const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/unity";

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

