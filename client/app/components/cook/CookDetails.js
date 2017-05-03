// REACT MODULES ==================================
const React = require('react');

const CookHeader = require('./CookHeader');
const MenuItem   = require('../common/MenuItem');
// const SideBar = require('../common/SideBar');

const CookDetails = React.createClass({
  getInitialState: function() {
    return {
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

    const menuitems = items.map((item) => {
      return <MenuItem key={item.id} name={item.name} />;
    });

    return (
      <div>
        {/* <SideBar /> */}
         <div className="container copy-style">
          <div className="row">
            <div className="orders-body">
              <div className="orders text-center center-block row-margin-sm">Current menu</div>
                
                   { menuitems }
              
            </div> 
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CookDetails;
