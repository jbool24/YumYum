// REACT MODULES ==================================
const React = require('react');

const CookHeader = require('./CookHeader');
const MenuItem   = require('../common/menuItem');


// const CustomerSideBar = require('./customerSideBar');


const Customer = React.createClass({
  getInitialState: function() {
    return this.state = {
      // this data comes from DB in componentWillMount

    };
  },

  componentWillMount: function() {
    // Call DB to get items
    // this.setState({items: results of db call })
  },

  render: function() {

    const items = this.state.items;

    const menuitems = items.map((item) => <MenuItem key={item.id} name={item.name} />);

    console.log(menuitems);

    return (
      <div>
        {/* <CookSideBar /> */}
        <CookHeader />
        { menuItems }
      </div>
    );
  }
});

module.exports = Customer;
