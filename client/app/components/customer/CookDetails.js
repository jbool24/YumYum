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
    console.log(this.props.foodItems);
    this.setState({items: this.props.foodItems })
  },

  render: function() {

    const items = this.state.items;

    const menuitems = items.map((item) => {
      return <MenuItem
        key={item._id}
        itemID={item._id}
        name={item.itemName}
        description={item.itemDescription}
        cuisine={item.cuisine}
        price={item.price}/>;
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
