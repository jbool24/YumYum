const React = require("react");
const axios = require('axios');

const CookDetails = require('./CookDetails');
const CookHeader = require('./CookHeader');
const GenericHeader	= require('./GenericHeader');

const CookInfo = React.createClass({
	getInitialState: function(){
		return {
			cook: null
		};
	},

	componentWillMount: function() {
		const cook_id = this.props.params.cookid;

		axios.get("/fooditems/" + cook_id)
			.then((response) => {
			this.setState({cook: response.data });
		}).catch((err) => { console.log(err) });
	},

	render: function() {
		let details = "";
		let header = "";

		if (this.state.cook) {
			details = <CookDetails foodItems={this.state.cook.fooditems}/>;
			header = <CookHeader cook={this.state.cook}/>;
		} else {
			header = <GenericHeader/>;
			details = <h1>Sorry No items were found. </h1>;
		}

		return (
			<div>
				{ header }
				{ details }
	    </div>
		)
	}
});

module.exports = CookInfo;
