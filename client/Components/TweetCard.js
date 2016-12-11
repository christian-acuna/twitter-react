/*jshint esversion: 6 */
import React from 'react';
import { Card, Badge, Tooltip } from 'antd';


class TweetCard extends React.Component {

  avatar() {
    const style = {
      width: '42px',
      height: '42px',
      float: 'right',
      borderRadius: '6px',
      background: '#eee',
      marginTop: '2px',


    };
    return (
      <div>
        <Tooltip placement="top" title={this.props.tweet.author.handle}>
          <a href="#">{this.props.tweet.author.username}</a>
        </Tooltip>

        <img style={style} src={this.props.tweet.author.avatar_url} alt={this.props.tweet.author.handle}/>
      </div>
    );
  }

  render() {
    const style = {
      paddingRight: '5px',
      height: '130px'
    };

    return (
      <Card
        title={this.avatar() }
        style={style}
        bordered={false}
        >

        {this.props.tweet.content}
      </Card>
    );
  }

}

export default TweetCard;
