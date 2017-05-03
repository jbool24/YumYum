const express = require('express');
// console.log(Cart);

module.exports = function getCart(req, res) {
  console.log(req.session);
  cart = req.session.cart;
  res.send(cart)
  console.log(cart);
}