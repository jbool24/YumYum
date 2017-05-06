// Include React
const React = require("react");
const helper = require('../../helper');

const Sidebar = React.createClass({

  getInitialState: function () {
    return {sidebarStatus: "sidebar-closed", cart: [], cartQty: undefined, cartTotal: undefined };
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.visible) {
      this.setState({sidebarStatus: "sidebar-open"})
      this.getCart()
    } else {
      this.setState({sidebarStatus: "sidebar-closed"})
    }
  },

  componentDidMount: function () {
    //Get items from req.session.cart
    // if (this.state.cart.length !== 0) {
      this.getCart();
    // }
  },

  getCart: function () {
    helper.getCart()
      .then((data) => {
        this.setState({ cart: data.cart, cartTotal: data.cartTotal, cartQty: data.cartQty })
      })
        .then( () => {

          //Creates stripe payment button
          var amount = this.state.cartTotal * 100
          var script = document.createElement("script")
          let stripeScript = document.querySelector('.stripe-button')
          let stripeButton = document.querySelector('.stripe-button-el')

          script.setAttribute("src", "https://checkout.stripe.com/checkout.js")
          script.setAttribute("class", "stripe-button")
          script.setAttribute("data-key", "pk_test_kWSuXV6D1USg0ziKSpne0TR9")
          script.setAttribute("data-amount", amount)
          script.setAttribute("data-name", "Demo Site")
          script.setAttribute("data-description", "Widget")
          script.setAttribute("data-image", "https://stripe.com/img/documentation/checkout/marketplace.png")

          if(stripeButton) {
            document.getElementById('stripe-form').removeChild(stripeButton);
            document.getElementById('stripe-form').removeChild(stripeScript);
          }
          document.getElementById('stripe-form').appendChild(script);
        })
  },

  handleAddItem: function (itemId) {
    helper.addItem(itemId)
      .then(() => this.getCart())
  },

  handleSubtractItem: function (itemId) {
    helper.subtractItem(itemId)
      .then(() => this.getCart())
  },

  handleDeleteItem: function (itemId) {
    helper.deleteItem(itemId)
      .then(() => this.getCart())
  },

  renderEmptyCart: function () {
    return (
      <div className={`cart-cont ${this.state.sidebarStatus}`}>
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
    let cart = this.state.cart;
    let stripeAmount = this.state.cartTotal * 100
    let total = parseInt(this.state.cartTotal).toFixed(2)
    let totalQty = parseInt(this.state.cartQty)
    
    // console.log(cart);
    return (

      <div className={`cart-cont ${this.state.sidebarStatus}`}>
        <div className="row order-header">
          <div className="col-md-12 text-center">
            <h3>Your Order</h3>
            <hr />
          </div>
        </div>
        {cart.map((items) => {
          return (
            <div key={items.item._id} className="row ordered-items-cart">
              <div className="col-xs-1 remove-item">
                <div onClick={() => this.handleAddItem(items.item._id)} className="clickable">
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>

                </div>
                <div onClick={() => this.handleSubtractItem(items.item._id)} className="clickable">
                  <i className="fa fa-minus-circle" aria-hidden="true"></i>
                </div>
              </div>


              <div className="col-xs-1" id="quantity-ord">
                <p>{items.qty}</p>
              </div>

              <div className="col-xs-7" id="item-name">
                <p>{items.item.itemName}</p>
              </div>

              <div className="col-xs-2" id="item-cost">
                <p>${items.price}</p>
              </div>

              <div className="col-xs-1" id="delete-ord">
                <div onClick={() => this.handleDeleteItem(items.item._id)} className="clickable">
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          )
        })}

        <div className="total-cont">
          <h4>Total</h4>
          <hr />
          <div className="row total-info">
            <div className="col-xs-1 col-xs-offset-1" id="total-ord">
              <p>{totalQty}</p>
            </div>
            <div className="col-xs-6" id="total-ord">
              <p>Items</p>
            </div>
            <div className="col-xs-3" id="total-cost">
              <p>${total}</p>
            </div>

            {/*<div className="col-md-3" id="totalTax">
              <p>0.79</p>
            </div>

            <div className="col-md-3" id="total">
              <p>$6.78</p>
            </div>*/}
          </div>
        </div>

        <div className="row order-btn-cont">

          <div className="col-md-12 text-center">
            <form action="/users/stripe-charge" method="POST" id="stripe-form">
              <input type="hidden" name="amount" value={`${stripeAmount}`}/>
              {/*<div className="stripe-button-el"></div>*/}
              {/*Stripe Payment Button Gets Inserted Here*/}
            </form>
          </div>
        </div>

      </div>
    );



  },

  render: function () {
    if (this.state.cart.length == 0) {
      return (
        this.renderEmptyCart()
      )
    } else {
      return (
        this.renderCart()
      )
    }
  }
});

// Export the component back for use in other files
module.exports = Sidebar;
