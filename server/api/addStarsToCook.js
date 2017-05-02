// addStarsToCook.js

const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");

//get the ratings from the user for a particular cook.

// Update the average ratings for the cook. 
// Update the total number of ratings given so far.

const addStarsToCook = function(req, res) {
    // var cookID = req.body.id;
    var newStars = req.body.stars;

    Cook.findOne({ "_id": req.params.id }, 'stars', function(err, doc) {
        if (err) {
            res.send({ error: "Could not save your ratings at this time. Try again later!!" });
        } else {
            //Current cook rating
            var average = parseInt(doc.stars.average);
            var totalRating = parseInt(doc.stars.totalRatings);
            //new average is calculated 
            var newAvg = ((average * totalRating) + newStars) / (totalRating + 1);
            //total number of ratings received is increased by 1 to be stored in the DB
            var totalRating = totalRating + 1;
           
            Cook.findOneAndUpdate({ "_id": req.params.id }, { "stars": { "totalRatings": totalRating, "average": newAvg } },
                { new: true }, function(err, doc) {
                    if (err) {
                        res.send({ error: "Could not save your ratings at this time. Try again later!!" })
                    } else {                       
                        res.send(doc);
                    }
                });
        }


    });


}

module.exports = addStarsToCook;
