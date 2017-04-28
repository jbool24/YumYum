// REACT MODULES ==================================
const React = require('react');

const MenuItems       = require('../common/menuItem');
const CustomerHeader  = require('./customerHeader');
const LocalFav = require('./localFav');
const RecentOrders = require('./recentOrders');
// const CustomerSideBar = require('./customerSideBar');


const Customer = React.createClass({
  getInitialState: function() {
    return this.state = {
      // this data comes from DB in componentWillMount
      items: [
        { id: 1, name: "Turduckin" },
        { id: 2, name: "Tika Masala" },
        { id: 3, name: "Borscht" },
      ],
    };
  },

  componentWillMount: function() {
    // Call DB to get items
    // this.setState({items: results of db call })
  },

  render: function() {
    const items = this.state.items;
    let menuitems = items.map((item) => <MenuItems key={item.id} name={item.name} />);
    console.log(menuitems)
    return (
      <div>
        {/* <CustomerSideBar /> */}
        <CustomerHeader />
        {/* 
          <h1>Customer Content</h1>
          { menuitems }
        */}
        
        <LocalFav />
        <RecentOrders />
      </div>
    );
  }
});

module.exports = Customer;
