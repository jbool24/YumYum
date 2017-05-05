// Include React
const React = require("react");
const axios = require('axios');

const LocalFav = require('./LocalFav');
const RecentOrders = require('./RecentOrders');

const FilterPage = React.createClass({
  getInitialState: function() {
    return {
      location: '',
      cuisine: ''
     };
  },

  componentWillMount: function() {
    // axios.get('/top-food-items').then((response) => {
    //   this.setState({ items: response.data  });
    // }).catch((error) => { console.log(error) });
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({
      location: nextProps.location,
      cuisine: nextProps.cuisine
    });
  },

  render: function() {

    return (
      <div>
        <LocalFav location={this.state.location} cuisine={this.state.location}/>
        {/* <RecentOrders /> */}
      </div>
    );
  }
});

module.exports = FilterPage;
