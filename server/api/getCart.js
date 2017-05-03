const express = require('express');
const Cart = require('../models/cart');
// console.log(Cart);

module.exports = function getCart(req, res) {
  // console.log(res);
  if (!req.session.cart) {
    return res.send({});
  }
  let cart = new Cart(req.session.cart);

  let cartTotal = cart.totalPrice 
  console.log(cartTotal);
  console.log(cart);
  cart = cart.generateArray()

  res.send({cart,cartTotal})

  // res.render('shop/shopping-cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });


  // console.log(req.session);
  // cart = req.session.cart;totalQty
  // res.send(cart)
  // console.log(cart);
}