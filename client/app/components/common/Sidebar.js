// Include React
const React = require("react");
const helper = require('../../helper');

const Sidebar = React.createClass({
  
  getInitialState: function () {
    return {sidebarStatus: "sidebar-closed", cart: { items: {} } };
  },

  componentWillMount: function () {

  },

  componentWillReceiveProps: function () {
    if (this.props.visible) {
      this.setState({sidebarStatus: "sidebar-open"})
    } else {
      this.setState({sidebarStatus: "sidebar-closed"})
    }
  },

  componentDidMount: function () {

    //Get items from req.session.cart
    helper.getCart().then((cart) => {
      console.log(cart);
      this.setState({ cart });
    }).then( () => {
      var amount = this.state.cart.totalPrice * 100
      var script = document.createElement("script")

      script.setAttribute("src", "https://checkout.stripe.com/checkout.js")
      script.setAttribute("class", "stripe-button")
      script.setAttribute("data-key", "pk_test_kWSuXV6D1USg0ziKSpne0TR9")
      script.setAttribute("data-amount", amount)
      script.setAttribute("data-name", "Demo Site")
      script.setAttribute("data-description", "Widget")
      script.setAttribute("data-image", "https://stripe.com/img/documentation/checkout/marketplace.png")

      document.getElementById('stripe-form').appendChild(script)
    });

    //Creates stripe payment button

  },

  renderEmptyCart: function () {
    return (
      <div className={`emptycart-cont ${this.state.sidebarStatus}`}>
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
    var cart = this.state.cart;
    
    // console.log(cart);
    return (
      <div className={`fullcart-cont ${this.state.sidebarStatus}`}>
        <div className="row orderHeader">
          <div className="col-md-12 text-center">
            <h3>Your Order</h3>
            <hr />
          </div>
        </div>
        {Object.keys(cart.items).map((food) => {
          console.log(cart.items[food]);
          return (
            <div className="row ordereditems-cart">
            <div className="col-md-1 removeItem">
              <i className="fa fa-minus-circle" aria-hidden="true"></i>
            </div>

            <div className="col-md-1" id="quantityOrd">
              <p>{cart.items[food].qty}</p>
            </div>

            <div className="col-md-7" id="itemName">
              <p>{cart.items[food].item.itemName}</p>
            </div>

            <div className="col-md-3" id="itemCost">
              <p>{cart.items[food].price}</p>
            </div>
          </div>
          )
        })}

        <div className="row orderBtn-cont">
          <div className="col-md-12 text-center">
            <hr />
            <form action="/users/stripe-charge" method="POST" id="stripe-form">
              <input type="hidden" name="amount" value={`${this.state.cart.totalPrice}`}/>
              {/*Stripe Payment Button Gets Inserted Here*/}
            </form>
          </div>
        </div>

      </div>
    );
  },

  render: function () {
    if (!this.state.cart) {
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
module.exports = Sidebar;
