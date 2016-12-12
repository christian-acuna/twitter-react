/*jshint esversion: 6 */
import React from 'react';
import { chunk } from 'lodash';
import { Row, Col, Card } from 'antd';
// import css from '../styles/TweetsContainer.css';
// import tweets from '../data/recent_tweets';
import TweetCard from './TweetCard';

class TweetsContainer extends React.Component {

  componentWillMount(){
    this.props.fetchTweets();
  }

  createTweetArray(tweets) {
    return tweets.map((tweet, i) => {
      return (
        <Col style={{ padding: '8px' }} key={i} span="8">
          <TweetCard tweet={tweet}/>
        </Col>
      );
    });
  }

  createRowsWithTweets(tweets) {
    const tweetArray = this.createTweetArray(tweets);
    return chunk(tweetArray, 3).map(function(group, i) {
      return (
        <Row style={{ marginLeft: '-8px', marginRight: '-8px'}} key={i}>{group}</Row>
      );
    });
  }

  render() {
    return (
      <div style={{ margin: 100 }}>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          {this.createRowsWithTweets(this.props.tweets.tweets)}
        </div>
      </div>
    );
  }

}

export default TweetsContainer;
