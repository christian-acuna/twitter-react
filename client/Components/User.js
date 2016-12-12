/*jshint esversion: 6 */
import React from 'react';
import TweetsList from './TweetsList';
import { Row, Col, Card } from 'antd';

class User extends React.Component {

  render() {
    return (
      <div style={{ margin: 50 }}>
        <Row>
          <Col style={{ padding: '8px' }} key={1} span="6">
            <h2>User {this.props.params.userId}</h2>
          </Col>
          <Col style={{ padding: '8px' }} key={2} span="12">
            <TweetsList {...this.props}/>
          </Col>
          <Col style={{ padding: '8px' }} key={3} span="6">
            <h3>Empty</h3>
          </Col>
        </Row>

      </div>
    );
  }

}

export default User;
