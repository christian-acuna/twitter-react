/*jshint esversion: 6 */

import React from 'react';
import { Row, Col, Card } from 'antd';
import TweetCard from './TweetCard';

class TweetsList extends React.Component {

  createTweetArray(tweets) {
    return tweets.map((tweet, i) => {
      return (
        <Row>
          <Col style={{ padding: '8px' }} key={i} span="24">
            <TweetCard bordered={true} tweet={tweet}/>
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <div>
        { this.createTweetArray(this.props.tweets.tweets) }
      </div>
    );
  }
}

export default TweetsList;
