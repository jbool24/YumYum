// REACT MODULES ==================================
const React = require('react');

// Import components ==============================
//compnents here

// const Nav    = require("./components/common/Nav");
// const Header = require("./components/common/Header");
// const Footer = require("./components/commonFooter");

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
