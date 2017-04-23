// Include React
const React = require("react");
const Cook = require("/cook-content/cookContent");
const Customer = require("/customer-content/customerContent");

// Creating the Footer component
const Content = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="content container-fluid">
        {this.props.children}
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Content;