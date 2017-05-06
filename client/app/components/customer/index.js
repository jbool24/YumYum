// REACT MODULES ==================================
const React = require('react');

const Customer = React.createClass({
  getInitialState: function() {
    return {
      // this data comes from DB in componentWillMount
    };
  },

  componentWillMount: function() {
    // Call DB to get items
    // this.setState({items: results of db call })
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
