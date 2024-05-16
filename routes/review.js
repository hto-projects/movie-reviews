const db = require("../db");

module.exports = {
	addReviewPage: function (request, response) {
		let renderData = {
			review: {},
			add: true
		};

		response.render('view-review', renderData);
	},

	addReview: async function (request, response) {
		await db.addReview(request.body);
		response.redirect('/')
	},

	viewReviewPage: async function (request, response) {
		let reviewId = request.params.id;
		let reviewObj = await db.getReviewById(reviewId);

		let renderData = {
			review: reviewObj,
			add: false
		};

		response.render('view-review', renderData);
	},
};
