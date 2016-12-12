/*jshint esversion: 6 */
import React from 'react';

class User extends React.Component {

  render() {
    return (
      <h2>User {this.props.params.userId}</h2>
    );
  }

}

export default User;
