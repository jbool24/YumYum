// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")("sk_test_wNAPV3SxRZ0awcrfiP4mdT8f");
const Order = require('../models/Order');
const Customer = require('../models/Customer')

module.exports = function stripeCharge(req, res) {
  // console.log(req.body);
  // console.log(req.user);
  // Token is created using Stripe.js or Checkout!
  // Get the payment token submitted by the form:
  let {stripeToken, stripeEmail, amount} = req.body; // Using Express

  amount = parseInt(amount);
  // Create a Customer:
  stripe.customers.create({
    email: stripeEmail,
    source: stripeToken,
  }).then(function (customer) {
    // YOUR CODE: Save the customer ID and other info in a database for later.
    return stripe.charges.create({
      amount: amount,
      currency: "usd",
      customer: customer.id,
    });
  }).then(function (charge) {
    console.log(req.session.cart.items);
    // Use and save the charge info.
    let cartItemIds = Object.keys(req.session.cart.items)
    let orderCustomer = req.user._id
    let orderCook = req['session']['cart']['items'][cartItemIds[0]]['item.cook']

    let order = {
      id: charge.id,
      customer: orderCustomer,
      cook: orderCook ,
      fooditems: cartItemIds,
      createdOn: Date.now(),
      orderCompleted: true,
      lastUpdated: Date.now(),
      orderTotal: amount/100  
    };

    let newOrder = new Order(order)
    req.session.cart = undefined
    newOrder.save(function (error, doc) {
      if (error) {
        res.send(error);
      } else {
        Customer.findOneAndUpdate({ "_id": orderCustomer }, { $push: { "order_history": doc._id } }, { new: true }, function (err, newdoc) {
          if (err) {
            res.send(err);
          } else {
            res.redirect('/home#/customer/dashboard/search')

          }
        })
      }
    })
    console.log(charge);
  });
}
