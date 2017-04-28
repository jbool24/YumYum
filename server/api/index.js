


const cooksByZip = require('./cooksByZip.js');
const getFooditemsByCook=require('./getFooditemsByCook.js');

const saveFood=require('./saveFood.js');

const addReview=require('./addReview.js');

const addToCart = require('./addToCart')


module.exports = function(app) {
	//get routes
	app.get("/cook/:zip", cooksByZip);
	app.get("/fooditem/:id", getFooditemsByCook);

	// app.get("add-to-cart/:id", addToCart)

	//post routes
	app.post("/saveFood",saveFood);


	//update routes
	app.post("/addReview/:id",addReview);

}



