// REACT MODULES ==================================
const React = require('react');

// const CustomerSideBar = require('./customerSideBar');
// const MenuItems       = require('./MenuItems'); 

const Customer = React.createClass({
  getInitialState: function() {
    return this.state = {};
  },

  render: function() {
    return (
      <div>
        {/* <CustomerSideBar /> */}
        <h1>Customer Content</h1>
        {/* <MenuItems> */}
      </div>
    );
  }
});

module.exports = Customer;
