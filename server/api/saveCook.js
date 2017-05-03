

// saveCook.js
const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");
const User = require("../models/user.js");

//Save the cook

//sample route: http://localhost:3000/saveCook
//sample body:         {
       //  "_id": "59091959a45770221cbf82da",
       //  "bio" : "I’m John, a former financial analyst, now a full-time cook and blogger. Welcome to my space. I cook recipes gathered from my friends and family. I am passionate about South Indian food. I crazy love knives. A sharp knife is a girls best friend. Hope you like my meals. Happy Cooking.",
       //  "phone" : "551-222-7043",
       //  "address" : {
       //          "line1" : "31 River Ct",
       //          "line2" : "Apt 2503",
       //          "city" : "Jersey City",
       //          "state" : "NJ",
       //          "zip" : "07310"
       //  },
       //  "userRef":"59091959a45770221cbf82da"
       // }
       
       


const saveCook = function(req, res) {

    var newCook = new Cook(req.body);
    console.log(req.body);

    // sample req.body
      // {
      //   "_id": "59027b2294f26f33e49db3c6",    (req.user._id   Cook is saved with his same userID )
      //   "bio" : "Hello there!!",
      //   "phone" : "551-222-7043",
      //   "address" : {
      //           "line1" : "31 ACB Ct",
      //           "line2" : "Apt 2503",
      //           "city" : "Jersey City",
      //           "state" : "NJ",
      //           "zip" : "07302"
      //   },
      //   "user":"59027b2294f26f33e49db3c6"
      //  }


    newCook.save(function(error, doc) {

        if (error) {
            res.send(error);
        } else {
             User.findOneAndUpdate({ "_id": doc._id }, { "cook": doc._id } , function(err, newdoc) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(newdoc);
                }
            });
        }
    });


}

module.exports = saveCook;