const express = require('express');
const Cart = require('../models/cart');
// console.log(Cart);

module.exports = function deleteCartItem(req, res) {
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  let itemId = req.params.id

  cart.removeItem(itemId);

  req.session.cart = cart;
  res.send(req.session.cart)
  console.log(cart);
}