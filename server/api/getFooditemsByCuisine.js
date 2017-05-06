// getFooditemByCuisine.js

const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");


// Get the fooditems by selected cuisine

//sample route: http://localhost:3000/getfooditem/Indian
//sample body:

const getFooditemsByCuisine = function(req, res) {
  console.log(req.params.cuisine)
   Fooditem.find({ "cuisine": { $regex : new RegExp(req.params.cuisine, "i") } }, function(error, doc) {

        // Log any errors
        if (error) {
            console.log(error);
        }
        // Otherwise, send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    });
}

module.exports = getFooditemsByCuisine;
