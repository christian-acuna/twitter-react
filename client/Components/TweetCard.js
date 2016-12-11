/*jshint esversion: 6 */
import React from 'react';
import { Card } from 'antd';

class TweetCard extends React.Component {

  render() {
    return (
      <Card title={this.props.tweet.username} bordered={false}>{this.props.tweet.content}</Card>
    );
  }

}

export default TweetCard;
