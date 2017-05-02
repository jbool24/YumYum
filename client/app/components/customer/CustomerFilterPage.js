// Include React
const React = require("react");

const LocalFav = require('./LocalFav');
const RecentOrders = require('./RecentOrders');

const FilterPage = React.createClass({
  getInitialState: function(){
    this.state = {
      items: [{ }];
    };
  }

  componentWillMount: function() {
    axios.get('/fooditem/top-eight').then((response) => {
      console.log(response);
      this.setState({items: response.items });
    }).catch((error) => {
      this.setState({ items: "Sorry, No items yet."})
    });
  }

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
