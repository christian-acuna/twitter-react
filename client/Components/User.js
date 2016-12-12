/*jshint esversion: 6 */
import React from 'react';
import TweetsList from './TweetsList';
import UserProfile from './UserProfile';
import { Row, Col, Card } from 'antd';

class User extends React.Component {
  componentWillMount(){
    this.props.fetchUser(this.props.params.userId);
  }

  render() {
    return (
      <div style={{ margin: 50 }}>
        <Row>
          <Col style={{ padding: '8px', 'marginTop': '7px' }} key={1} span="6">
            <UserProfile user={this.props.user.user} />
          </Col>
          <Col style={{ padding: '8px' }} key={2} span="12">
            <TweetsList {...this.props}/>
          </Col>
          <Col style={{ padding: '8px' }} key={3} span="6">
            {/* <h3>Empty</h3> */}
          </Col>
        </Row>

      </div>
    );
  }

}

export default User;
