const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");

// Get the cooks by the given zipcode


const cooksByZip = function(req, res) {

    Cook.find({ "address.zip": req.params.zip }, function(error, doc) {

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

module.exports=cooksByZip;
