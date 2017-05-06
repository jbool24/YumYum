// Include React
const React = require("react");
const axios = require('axios');

const LocalFav = require('./LocalFav');
const RecentOrders = require('./RecentOrders')
// const RecentOrders = require('./RecentOrders');

const FilterPage = React.createClass({
  getInitialState: function() {
    return {
      location: '',
      cuisine: ''
     };
  },

  componentWillReceiveProps: function(nextProps){
    if(nextProps.location){
        axios.get(`/fooditem/zip/${nextProps.location}`).then((response) => {
          this.setState({
            items: response.data,
            location: nextProps.location,
          });
        })
    } else if (nextProps.cuisine) {
        axios.get(`/fooditem/${nextProps.cuisine}`).then((response) => {
          this.setState({
            items: response.data,
            cuisine: nextProps.cuisine
          });
        })
    }
  },

  render: function() {

    return (
      <div className="wrapper">
        <div>
          <LocalFav location={this.state.location} cuisine={this.state.location} items={this.state.items}/>
          <RecentOrders />
        </div>
      </div>
    );
  }
});

module.exports = FilterPage;
