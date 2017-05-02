// Include React
const React = require("react");

const cart = true;

const Sidebar = React.createClass({
  
  getInitialState: function () {
    return { sidebarStatus: "sidebar-closed" };
  },

  componentWillReceiveProps: function () {
    if (this.props.visible) {
      this.setState({sidebarStatus: "sidebar-open"})
    } else {
      this.setState({sidebarStatus: "sidebar-closed"})
    }
  },

  componentDidMount: function () {
    //Creates stripe payment button
    var script = document.createElement("script")
    
      script.setAttribute("src","https://checkout.stripe.com/checkout.js")
      script.setAttribute("class","stripe-button")
      script.setAttribute("data-key","pk_test_kWSuXV6D1USg0ziKSpne0TR9")
      script.setAttribute("data-amount","999")
      script.setAttribute("data-name","Demo Site")
      script.setAttribute("data-description","Widget")
      script.setAttribute("data-image","https://stripe.com/img/documentation/checkout/marketplace.png")

      document.getElementById('stripe-form').appendChild(script)
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
    return (
      <div className={`fullcart-cont ${this.state.sidebarStatus}`}>
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
            <form action="/users/stripe-charge" method="POST" id="stripe-form">
              {/*Stripe Payment Button Gets Inserted Here*/}
            </form>
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
module.exports = Sidebar;
