// REACT MODULES ==================================
const React = require('react');

const Customer = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Customer;
