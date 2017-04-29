// REACT MODULES ==================================
const React = require('react');

const Customer = React.createClass({
  getInitialState: function() {
    return this.state = {
      // this data comes from DB in componentWillMount
      items: [
        { id: 1, name: "Turduckin" },
        { id: 2, name: "Tika Masala" },
        { id: 3, name: "Borscht" },
      ]
    };
  },

  componentWillMount: function() {
    // Call DB to get items
    // this.setState({items: results of db call })
  },

  render: function() {
    return (
      <div>
        {/* <CustomerSideBar /> */}
        {this.props.children}
      </div>
    );
  }
});

module.exports = Customer;
