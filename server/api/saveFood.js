// saveFood.js
const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");

//Save the fooditem
//Find the cook and push the new fooditem id into the cooks's fooditems array

//sample route:  http://localhost:3000/saveFood/590916caa45770221cbf82d9  (_id of cook)
//sample body:  {
//         "itemName" : "Italian meatballs",
//         "itemDescription" : "Meatball recipes are often challenged by chefs who claim, Mine are the best! Even though my meatballs ARE the best, I will make no such claim. Try them for yourself!",
//         "price" : 8,
//         "cuisine" : "Italian",
//         "vegetarian" : false,
//         "ingredients" : [
//                 "beef","eggs"
//         ],
//         "cook":"590916caa45770221cbf82d9"
// }


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
            
            Cook.findOneAndUpdate({ "_id": req.params.id }, { $push: { "fooditems": doc._id } },{new:true}, function(err, newdoc) {
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




