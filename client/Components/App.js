/*jshint esversion: 6 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import Nav from './Nav';
import TweetsContainer from './TweetsContainer';



class App extends React.Component {
  render() {
    return (
      <div >
        <Nav />
        <div style={{ margin: 100 }}>
          <TweetsContainer />
        </div>
      </div>
    );
  }

}

export default App;
