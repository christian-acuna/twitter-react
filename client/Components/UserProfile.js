/*jshint esversion: 6 */

import React from 'react';
import { Card } from 'antd';

class UserProfile extends React.Component {

  render() {
    return (
      <Card title={this.props.user.handle} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img alt={this.props.user.handle}
            width="100%"
            src={this.props.user.avatar_url} />
        </div>
        <div style={{"padding": '10px 16px'}} className="custom-card">
          <p>{this.props.user.bio}</p>
        </div>
      </Card>
    );
  }

}

export default UserProfile;
