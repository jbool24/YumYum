// REACT MODULES ==================================
const React = require('react');

// Import components ==============================
//compnents here

// const Nav    = require("./components/common/Nav");
// const Header = require("./components/common/Header");
const Content = require("././components/common/content");
const Footer = require("./components/common/footer");

//=================================================

const App = React.createClass({
  getInitialState: function() {
    return this.state = {};
  },

  render: function() {
    return (
      <div>
        {/* <Nav /> */}
        {/* <Header /> */}
        <Content />
        <Footer />
      </div>
    );
  }
});

module.exports = App;
