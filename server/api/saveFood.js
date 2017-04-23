// saveFood.js
const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");

//Save the fooditem
//Find the cook and push the new fooditem id into the cooks's fooditems array


const saveFood = function(req, res) {

	console.log(req.body);
	console.log(req.params.id);

    var newFooditem = new Fooditem(req.body);

    //	Code below works!!(successfully saves fooditem and links it to the cook)
    //  var newFooditem = new Fooditem({
    //     "itemName": "Curry5",
    //     "itemDescription": "Curry5 desc",
    //     "price": 6,
    //     "ingredients": ["ing1", "ing2", "ing3"],
    //     "cuisine": "Indian"
    // });

    newFooditem.save(function(error, doc) {

        if (error) {
            res.send(error);
        } else {
            
            Cook.findOneAndUpdate({ "_id": req.params.id }, { $push: { "fooditems": doc._id } }, function(err, newdoc) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(newdoc);
                }
            });
        }
    });


}

module.exports = saveFood;




