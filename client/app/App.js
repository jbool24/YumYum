// REACT MODULES ==================================
const React = require('react');

// Import components ==============================

const NavBar = require("./components/common/navbar");
const Footer = require("./components/common/footer");
//=================================================


const App = React.createClass({
  getInitialState: function() {
    return {
      sidebarShown: false,
    };
  },

  handleShowSideBar: function(){
    this.setState({ sidebarShown: !this.state.sidebarShown })
  },
  
  render: function() {
    return (
      <div>
        <NavBar sidebarShown={this.state.sidebarShown} sidebarHandler={this.handleShowSideBar.bind(this)}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = App;
