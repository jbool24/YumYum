// Dummy file to placehold on github
import React, { Component } from 'react';
// import dummy from '!style-loader!css-loader!sass-loader!../../../stylesheets/components/all.sass';


export default class Dummy extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div className='dummy'>
          <h1>This should be blue background and white text</h1>
          <p> This is red </p>
        </div>
      );
    }
};
