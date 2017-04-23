


const cooksByZip = require('./cooksByZip.js');
const getFooditemsByCook=require('./getFooditemsByCook.js');

const saveFood=require('./saveFood.js');

const addReview=require('./addReview.js');


module.exports = function(app) {
	//get routes
	app.get("/cook/:zip", cooksByZip);
	app.get("/fooditem/:id", getFooditemsByCook);


	//post routes
	app.post("/saveFood/:id",saveFood);


	//update routes
	app.post("/addReview/:id",addReview);

}



