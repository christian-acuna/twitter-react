/*jshint esversion: 6 */

import React from 'react';
import { Row, Col, Card } from 'antd';
import UserTweetCard from './UserTweetCard';

class TweetsList extends React.Component {

  createTweetArray(tweets) {
    return tweets.map((tweet, i) => {
      return (
        <Row>
          <Col style={{ padding: '8px' }} key={i} span="24">
            <UserTweetCard bordered={true} tweet={tweet} author={this.props.user.user}/>
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <div>
        { this.createTweetArray(this.props.user.user.tweets) }
      </div>
    );
  }
}

export default TweetsList;
