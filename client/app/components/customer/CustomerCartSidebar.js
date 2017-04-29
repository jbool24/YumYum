// Include React
const React = require("react");

const cart = true;

const CustomerCartSidebar = React.createClass({

  renderEmptyCart: function () {
    return (
      <div className="emptycart-cont">
        <div className="row">
          <div className="col-md-12 text-center">
            <i className="fa fa-shopping-cart fa-5x" aria-hidden="true"></i>
            <h3>Your Cart is Empty!</h3>
          </div>
        </div>
      </div>
    )
  },

  renderCart: function () {
    return (
      <div className="fullcart-cont">
        <div className="row orderHeader">
          <div className="col-md-12 text-center">
            <h3>Your Order</h3>
            <hr />
          </div>
        </div>

        <div className="row ordereditems-cart">
          <div className="col-md-1 removeItem">
            <i className="fa fa-minus-circle" aria-hidden="true"></i>
          </div>

          <div className="col-md-1" id="quantityOrd">
            <p>1</p>
          </div>

          <div className="col-md-7" id="itemName">
            <p>Blah Blah Blah</p>
          </div>

          <div className="col-md-3" id="itemCost">
            <p>$5.99</p>
          </div>
        </div>

        <div className="row orderBtn-cont">
          <div className="col-md-12 text-center">
            <hr />
            <button type="submit" className="btn btn-default checkout-btn">Proceed To Checkout</button>

          </div>
        </div>
      </div>
    );
  },

  render: function () {
    if (!cart) {
      return (
        this.renderEmptyCart()
      )
    }
    return (
      this.renderCart()
    )
  }
});

// Export the component back for use in other files
module.exports = CustomerCartSidebar;
