const Review = require("./models/Review");

module.exports = {
	addReview: async function(reviewObj) {
    const newReview = new Review({
      reviewer: reviewObj.reviewer,
      movieTitle: reviewObj.movieTitle,
      rating: reviewObj.rating,
      reviewDescription: reviewObj.reviewDescription
    });

    await newReview.save();
	},
  
	getReviewsList: async function() {
	  return await Review.find({});
	},

	getReviewById: async function(reviewId) {
    return await Review.findOne({
      _id: reviewId
    });
	}
}
