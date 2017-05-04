// getFooditemsByCook.js

const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");

//sample route: http://localhost:3000/fooditem/590916caa45770221cbf82d9    (_id of cook)
//sample body:


// Get the fooditems for the given cook
const getFooditemsByCook = function(req, res) {
    Cook.findOne({ "_id": req.params.id })
        // ..and populate all of the fooditems associated with it
        .populate("fooditems")
        .exec(function(error, doc) {            
            if (error) {
                res.json({ error: "sorry no item found" });
            }
            // Otherwise, send the doc to the browser as a json object
            else {
                res.json(doc.fooditems);
            }
        });
}

module.exports = getFooditemsByCook;
