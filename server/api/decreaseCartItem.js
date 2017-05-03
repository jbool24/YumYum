const express = require('express');
const Cart = require('../models/cart');
// console.log(Cart);

module.exports = function decreaseCartItem(req, res) {
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  let itemId = req.params.id

  cart.reduceByOne(itemId);

  req.session.cart = cart;
  res.send('/home#/customer/customer-dashboard/filter-search')
  console.log(cart);
}