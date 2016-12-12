/*jshint esversion: 6 */
import React from 'react';
import { Card, Badge, Tooltip } from 'antd';
import { Link } from 'react-router';


class UserTweetCard extends React.Component {

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
        <Tooltip placement="top" title={this.props.author.handle}>
          <Link to={`/users/${this.props.author.id}`}>{this.props.author.username}</Link>
        </Tooltip>

        <img style={style} src={this.props.author.avatar_url} alt={this.props.author.handle}/>
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
        bordered={this.props.bordered}
        >

        {this.props.tweet.content}
      </Card>
    );
  }

}

export default UserTweetCard;
