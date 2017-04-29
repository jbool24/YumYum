
const React = require("react");

const CustomerDash = React.createClass({

	render: function(){
		return(
      <CustomerFilterHeader />
      {this.props.children}
		);
	}
});
