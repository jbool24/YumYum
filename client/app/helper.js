const axios = require('axios');;

const helper = {
  getCart:()=>{
    return axios.get('/get-cart').then(function (res) {
      console.log(res.data);
        return res.data;
      }).catch(function (error) {
        console.log(error);
      });
  }
}
module.exports = helper;
