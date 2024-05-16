const express = require('express');
const mongoose = require("mongoose");
const configKeys = require("./config/keys");

const port = process.env.PORT || 8080;

const index = require('./routes/index');
const review = require('./routes/review');

let app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const dbStr = configKeys.mongoURI;
const dbSettings = {
	useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "movie_reviews",
  useFindAndModify: false
}

// connect to mongodb
mongoose.connect(dbStr, dbSettings)
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.get('/', index.getHomePage);
app.get('/add', review.addReviewPage);
app.get('/view/:id', review.viewReviewPage);
app.post('/add', review.addReview);

function listenCallback() {
	console.log(`Server Running on http://${hostname}:${port}`);
}

app.listen(port, listenCallback);
