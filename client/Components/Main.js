/*jshint esversion: 6 */

import React from 'react';
import Nav from './Nav';

const Main = React.createClass({
  render() {
    return (
      <div >
        <Nav />
        <div style={{ margin: 100 }}>
          {/* <TweetsContainer /> */}
          <h1>hi</h1>
        </div>
      </div>
    );
  }
});

export default Main;
