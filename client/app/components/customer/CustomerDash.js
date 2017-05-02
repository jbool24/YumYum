
const React = require("react");

const CustomerFilterHeader = require('./CustomerFilterHeader');

const CustomerDash = React.createClass({

	render: function(){
		return(
			<div>
	      <CustomerFilterHeader />
	      {this.props.children}
				<form action="/users/stripe-charge" method="post" id="payment-form">
					<div className="form-row">
						<label htmlFor="card-element">
							Credit or debit card
					</label>
						<div id="card-element">
							{/*<!-- a Stripe Element will be inserted here. -->*/}
							{/*{this.state.card}*/}
						</div>

						{/*<!-- Used to display form errors -->*/}
						<div id="card-errors"></div>
					</div>

					<button>Submit Payment</button>
				</form>
			</div>
		);
	}
});

module.exports = CustomerDash;
