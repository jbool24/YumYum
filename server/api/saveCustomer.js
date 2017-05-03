// saveCustomer.js

const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");
const User = require("../models/user.js");

//Save the customer

//sample route:  http://localhost:3000/saveCustomer
//sample body:        {
       //  "_id": "59036052a44a022324aeee68",
       //  "bio" : "Hello there!!",
       //  "phone" : "551-222-7043",
       //  "address" : {
       //          "line1" : "31 ACB Ct",
       //          "line2" : "Apt 2503",
       //          "city" : "Jersey City",
       //          "state" : "NJ",
       //          "zip" : "07302"
       //  },
       //  "user":"59027b2294f26f33e49db3c6"
       // }


const saveCustomer = function(req, res) {

    var newCustomer = new Customer(req.body);


    

    newCustomer.save(function(error, doc) {

        if (error) {
            res.send(error);
        } else {
             User.findOneAndUpdate({ "_id": doc._id }, { "customer": doc._id } , function(err, newdoc) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(newdoc);
                }
            });
        }
    });


}

module.exports = saveCustomer;