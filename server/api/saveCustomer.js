// saveCustomer.js

const Order = require("../models/Order.js");
const Fooditem = require("../models/Fooditem.js");
const Cook = require("../models/Cook.js");
const Customer = require("../models/Customer.js");
const User = require("../models/user.js");

//Save the customer

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