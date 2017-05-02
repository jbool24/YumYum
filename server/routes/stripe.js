// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")("sk_test_wNAPV3SxRZ0awcrfiP4mdT8f");

module.exports = function stripeCharge(req, res) {
  console.log(req.body);
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
    // Use and save the charge info.
    res.redirect('/home#/customer/customer-dashboard/filter-search')
    console.log(charge);
  });
}
