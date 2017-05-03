const express             = require('express');
const Cart                = require('../models/cart');
// console.log(Cart);
const Fooditem            = require('../models/Fooditem');

module.exports = function (req, res) {
  console.log(req.params);
  var itemId = req.params.id;
  console.log(itemId);
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  console.log(cart);

  Fooditem.findById(itemId, function (err, food) {
    if (err) {
      return res.redirect('/test-error.html')
    }
    console.log(food);
    // console.log("food item query",food);
    cart.add(food, food.id);
    req.session.cart = cart;
    res.redirect('/home#/customer/customer-dashboard/filter-search')
    // console.log(cart);
  })
}