


const cooksByZip = require('./cooksByZip.js');
const getFooditemsByCook=require('./getFooditemsByCook.js');
const getFooditemsByCuisine=require('./getFooditemsByCuisine.js');
const getBestFooditems=require('./getBestFooditems.js');


const saveCook=require('./saveCook.js');
const saveCustomer=require('./saveCustomer.js');
const saveFood=require('./saveFood.js');

const addReview=require('./addReview.js');
const addStarsToCook=require('./addStarsToCook.js');
const addStarsToFooditem=require('./addStarsToFooditem.js');


const addToCart = require('./addToCart')
const getCart = require('./getCart')
const deleteCartItem = require('./deleteCartItem');
const decreaseCartItem = require('./decreaseCartItem')

module.exports = function(app) {
	//get routes
	app.get("/cook/:zip", cooksByZip);
	app.get("/fooditem/:id", getFooditemsByCook);
	app.get("/fooditem/:cuisine", getFooditemsByCuisine);
	app.get("/topFooditems", getBestFooditems);

	// Cart Items
	app.get("/cart/add-item/:id", addToCart);
	app.get("/cart/get-items", getCart);
	app.get("/cart/delete-item/:id", deleteCartItem);
	app.get("/cart/decrease-item/:id", decreaseCartItem);


	//post routes
	app.post("/saveCook",saveCook);
	app.post("/saveCustomer",saveCustomer);
	app.post("/saveFood/:id",saveFood);


	//update routes
	app.post("/addReview/:id",addReview);
	app.post("/addStarsToCook/:id",addStarsToCook);
	app.post("/addStarsToFooditem/:id",addStarsToFooditem);

}
