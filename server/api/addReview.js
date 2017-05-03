// addReview.js
const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");

//add customer's review against the particular cook

const addReview = function(req, res) {
    var review = req.body.review;
    var customerName = req.body.customerName;
    Cook.findOneAndUpdate({ "_id": req.params.id }, { $push: { reviews: { review: review, customerName: customerName } } },{ new: true })
        .exec(function(err, doc) {
            // Log any errors
            if (err) {
                console.log(err);
            } else {
                // Or send the document to the browser
                res.send(doc);
            }
        });
}

module.exports = addReview;
