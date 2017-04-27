// Include React
const React = require("react");

// Creating the Footer component
const Footer = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="row footer-style">
        <div className="textCenter colMd6 colMdOffset3">
        <p>Copyright &copy; 2017 &middot; All Rights Reserved &middot; <a href="https://github.com/jbool24/YumYum" >Yummy</a></p>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Footer;
