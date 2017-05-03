// REACT MODULES ==================================
const React = require('react');

// Import components ==============================

const NavBar = require("./components/common/navbar");
const Footer = require("./components/common/footer");
//=================================================


const App = React.createClass({
  getInitialState: function() {
    return {};
  },


  render: function() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = App;
