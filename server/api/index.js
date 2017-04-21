


const cooksByZip = require('./cooksByZip.js');
const saveFood=require('./saveFood.js');


module.exports = function(app) {
	app.get("/cook/:zip", cooksByZip);

	app.post("/saveFood/:id",saveFood);
}



