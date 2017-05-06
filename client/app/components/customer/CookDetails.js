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
          img = {item.image}
        />;
    });

    return (
      <div>
         <div className="container copy-style">
          <div className="row">
            <div className="orders-body">
              <div className = "row menu-title-cont">
                <div className="col-md-12 menu-title">
                  <img src="links/menu.png" className = "menu-img"/>
                </div>
              </div>
                   { menuitems }

            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CookDetails;
