const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReviewSchema = new Schema({
  reviewer: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  movieTitle: {
    type: String,
    required: true
  },
  reviewDescription: {
    type: String,
    required: true
  }
});

module.exports = Review = mongoose.model("reviews", ReviewSchema);
