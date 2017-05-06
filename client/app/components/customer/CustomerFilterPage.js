// Include React
const React = require("react");

const LocalFav = require('./LocalFav');
const RecentOrders = require('./RecentOrders');

const FilterPage = React.createClass({
  getInitialState: function() {
    return {
        items: [
          { id: 1, itemName: "Turduckin", cusine: "Indian", price: "$8.00" },
          { id: 2, itemName: "Tikka Masala", cusine: "Indian", price: "$8.00" },
          { id: 3, itemName: "Tom Hoac Muc Chien Gion", cusine: "Vietnamese", price: "$8.95" },
          { id: 4, itemName: "Pickle Soup", cusine: "Polish", price: "$3.00" },
          { id: 5, itemName: "Ramen", cusine: "Japanese", price: "$12.00" },
          { id: 6, itemName: "Kalua Pig", cusine: "Hawaiian", price: "$13.00" },
          { id: 7, itemName: "Halea", cusine: "Peruvian", price: "$14.00" },
          { id: 8, itemName: "Zuccini Bread", cusine: "Italian", price: "$2.00" },
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
      <div className="wrapper">
        <LocalFav  foodItems={this.state.items} />
        <RecentOrders />
      </div>
    );
  }
});

module.exports = FilterPage;
