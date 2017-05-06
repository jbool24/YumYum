const express = require('express');
const Cart = require('../models/cart');
// console.log(Cart);

module.exports = function getCart(req, res) {
  // console.log(res);
  if (!req.session.cart) {
    return res.send({cart:[], cartTotal: 0, cartQty: 0});
  }
  let cart = new Cart(req.session.cart);

  let cartTotal = cart.totalPrice
  let cartQty = cart.totalQty 
  console.log(cartTotal);
  console.log(cartQty);
  console.log(cart);
  cart = cart.generateArray()

  res.send({ cart, cartTotal, cartQty })
}