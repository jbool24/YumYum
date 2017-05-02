// Include React
const React = require("react");

const LocalFav = require('./LocalFav');
const RecentOrders = require('./RecentOrders');

const FilterPage = React.createClass({
  getInitialState: function() {
    return {
        items: [
          { id: 1, itemName: "Turduckin", cusine: "Indian", price: "$8.00" },
          { id: 2, itemName: "Tika Masala", cusine: "Indian", price: "$8.00" },
          { id: 3, itemName: "Borscht", cusine: "Indian", price: "$8.00" },
        ]
      };
  },

  componentWillMount: function() {
    // axios.get('/fooditem/top-eight').then((response) => {
    //   console.log(response);
    //   this.setState({items: response.items });
    // }).catch((error) => {
    //   this.setState({ items: "Sorry, No items yet."})
    // });
  },

  render: function() {
    return (
      <div>
        <LocalFav  foodItems={this.state.items} />
        <RecentOrders />
      </div>
    );
  }
});

module.exports = FilterPage;
