// getBestFooditems.js

const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");


// Get 8 best fooditems by star ratings
const getBestFooditems = function(req, res) {
   Fooditem.find({ "stars.average":{$gte:4}})
   	.limit(8)
   	.exec(function(error, doc) {

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

module.exports = getBestFooditems;