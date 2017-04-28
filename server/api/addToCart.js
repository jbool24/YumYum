const express             = require('express');
const Cart                = require('../models/cart');
const Fooditem            = require('../models/Fooditem');

exports.addToCart = function (req, res) {
  var productId = req.params.id;
  var cart = new Cart(req.ressions.cart ? req.session.cart : {});

  Fooditem.findById(productId, function (err, food) {
    if (err) {
      return res.redirect('/test-error.html')
    }
    cart.add(food, food.id);
    req.session.cart = cart;
    console.log(cart);
  })
}