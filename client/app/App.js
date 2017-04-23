// REACT MODULES ==================================
const React = require('react');

// Import components ==============================
//compnents here

//=================================================

const App = React.createClass({
  getInitialState: function() {
    return this.state = {};
  },

  render: function() {
    return (
      <div>
        <h1> TEST HELLO </h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
