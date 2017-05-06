const axios = require('axios');;

const helper = {
  getCart:()=>{
    return axios.get('/cart/get-items').then(function (res) {
        return res.data;
      }).catch(function (error) {
        console.log(error);
      });
  },

  addItem:(itemId)=>{
    return axios.get(`/cart/add-item/${itemId}`).then(function (res) {
        return false;
      }).catch(function (error) {
        console.log(error);
      });
  },

  subtractItem: (itemId) => {
    return axios.get(`/cart/decrease-item/${itemId}`).then(function (res) {
      return false;
    }).catch(function (error) {
      console.log(error);
    });
  },

  deleteItem: (itemId) => {
    return axios.get(`/cart/delete-item/${itemId}`).then(function (res) {
      return false;
    }).catch(function (error) {
      console.log(error);
    });
  }

}
module.exports = helper;
