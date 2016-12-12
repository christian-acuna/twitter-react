/*jshint esversion: 6 */

import React from 'react';
import Nav from './Nav';
import TweetsContainer from './TweetsContainer';

const Main = React.createClass({
  render() {
    return (
      <div >
        <Nav />
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
});

export default Main;
