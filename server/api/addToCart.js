const express             = require('express');
const Cart                = require('../models/cart');
console.log(Cart);
const Fooditem            = require('../models/Fooditem');

module.exports = function (req, res) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  console.log(cart);

  Fooditem.findById(productId, function (err, food) {
    if (err) {
      return res.redirect('/test-error.html')
    }
    console.log("food item query",food);
    cart.add(food, food.id);
    req.session.cart = cart;
    res.send(cart)
    console.log(cart);
  })
}