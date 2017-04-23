

// saveCook.js
const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");

//Save the cook

const saveCook = function(req, res) {

    var newCook = new Cook(req.body);
    console.log(req.body);

    newCook.save(function(error, doc) {

        if (error) {
            res.send(error);
        } else {
            res.send(doc);
        }
    });


}

module.exports = saveCook;