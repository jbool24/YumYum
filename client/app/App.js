// REACT MODULES ==================================
const React = require('react');

// Import components ==============================
//compnents here

// const Nav    = require("./component/Nav");
// const Header = require("./component/Header");
// const Footer = require("./component/Footer");

//=================================================

const App = React.createClass({
  getInitialState: function() {
    return this.state = {};
  },

  render: function() {
    return (
      <div>
        {/* <Nav /> */}
        <div className="container container-fluid">
          {/* <Header /> */}
          {this.props.children}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
});

module.exports = App;
