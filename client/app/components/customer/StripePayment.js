// Include React
const React = require("react");

// Stripe.setPublishableKey('pk_test_kWSuXV6D1USg0ziKSpne0TR9');

// Create an instance of the card Element
// const card = elements.create('card', { style: style });

// Creating the Customer Main Page component
const StripePayement = React.createClass({

	getInitialState: function () {
		return { card: undefined };
	},

	componentDidMount: function () {

		var stripe = Stripe('pk_test_kWSuXV6D1USg0ziKSpne0TR9');
		// Create an instance of Elements
		var elements = stripe.elements();

		// Custom styling can be passed to options when creating an Element.
		// (Note that this demo uses a wider set of styles than the guide below.)
		var style = {
			base: {
				color: '#32325d',
				lineHeight: '24px',
				fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: '#aab7c4'
				}
			},
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a'
			}
		};

		// Create an instance of the card Element
		var card = elements.create('card', { style: style });

		// Add an instance of the card Element into the `card-element` <div>
		card.mount('#card-element');

		// Handle real-time validation errors from the card Element.
		card.addEventListener('change', function (event) {
			var displayError = document.getElementById('card-errors');
			if (event.error) {
				displayError.textContent = event.error.message;
			} else {
				displayError.textContent = '';
			}
		});

		// Handle form submission
		var form = document.getElementById('payment-form');
		form.addEventListener('submit', function (event) {
			event.preventDefault();

			stripe.createToken(card).then(function (result) {
				if (result.error) {
					// Inform the user if there was an error
					var errorElement = document.getElementById('card-errors');
					errorElement.textContent = result.error.message;
				} else {
					// Send the token to your server
					stripeTokenHandler(result.token);
				}
			});
		});
		function stripeTokenHandler(token) {
			// Insert the token ID into the form so it gets submitted to the server
			var form = document.getElementById('payment-form');
			var hiddenInput = document.createElement('input');
			hiddenInput.setAttribute('type', 'hidden');
			hiddenInput.setAttribute('name', 'stripeToken');
			hiddenInput.setAttribute('value', token.id);
			form.appendChild(hiddenInput);

			// Submit the form
			form.submit();
		}
	},

	handleSubmit: function () {
		// stripe.createToken(card).then(function (result) {
		// 	if (result.error) {
		// 		// Inform the user if there was an error
		// 		var errorElement = document.getElementById('card-errors');
		// 		errorElement.textContent = result.error.message;
		// 	} else {
		// 		// Send the token to your server
		// 		this.stripeTokenHandler(result.token);
		// 	}
		// }.bind(this));
	},

	// stripeTokenHandler: function (token) {
	// 	var form = document.getElementById('payment-form');
	// 	var hiddenInput = document.createElement('input');
	// 	hiddenInput.setAttribute('type', 'hidden');
	// 	hiddenInput.setAttribute('name', 'stripeToken');
	// 	hiddenInput.setAttribute('value', token.id);
	// 	form.appendChild(hiddenInput);

	// 	// Submit the form
	// 	form.submit();
	// },
  // Here we describe this component's render method
  render: function() {
    return (
			<div></div>

    );
  }
});

// Export the component back for use in other files
module.exports = StripePayement;


