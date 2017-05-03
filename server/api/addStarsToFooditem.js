// addStarsToFooditem.js


const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");

//get the ratings from the user for a particular fooditem.

// Update the average ratings for the fooditem. 
// Update the total number of ratings given so far.

//sample route:  http://localhost:3000/addStarsToFooditem/59091c4ca45770221cbf82db
//sample body:  {
//     "stars":5
// }

const addStarsToFooditem = function(req, res) {
    // var cookID = req.body.id;
    var newStars = req.body.stars;

    Fooditem.findOne({ "_id": req.params.id }, 'stars', function(err, doc) {
        if (err) {
            res.send({ error: "Could not save your ratings at this time. Try again later!!" });
        } else {
            //Current cook rating
            var average = parseInt(doc.stars.average);
            //Total number of ratings receieved
            var totalRating = parseInt(doc.stars.totalRatings);
            //new average is calculated 
            var newAvg = ((average * totalRating) + newStars) / (totalRating + 1);
            //total number of ratings received is increased by 1 to be stored in the DB
            var totalRating = totalRating + 1;
           
            Fooditem.findOneAndUpdate({ "_id": req.params.id }, { "stars": { "totalRatings": totalRating, "average": newAvg } },
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

module.exports = addStarsToFooditem;
