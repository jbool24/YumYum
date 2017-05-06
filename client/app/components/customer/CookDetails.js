// REACT MODULES ==================================
const React = require('react');

const MenuItem   = require('../common/MenuItem');

const CookDetails = React.createClass({
  getInitialState: function() {
    return {
      items: [],
    };
  },

  componentWillMount: function() {
    this.setState({items: this.props.foodItems })
  },

  render: function() {

    const items = this.state.items;

    const menuitems = items.map((item) => {
      return <MenuItem
          key={item._id}
          name={item.itemName}
          price={item.price}
          itemID={item._id}
          cuisine={item.cuisine}
          description={item.itemDescription}
        />;
    });

    return (
      <div>
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
