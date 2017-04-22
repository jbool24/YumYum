// Include React
const React = require("react");

// Creating the Footer component
const Content = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Content;