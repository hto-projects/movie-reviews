const db = require("../db");

module.exports = {
	getHomePage: async function (request, response) {
		let result = await db.getReviewsList();

		let renderData = {
			reviews: result
		}

		response.render('index', renderData);
	}
};
