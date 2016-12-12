/*jshint esversion: 6 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Row, Col, Card } from 'antd';
import Nav from './Nav';
import Main from './Main';
import TweetsContainer from './TweetsContainer';

import * as tweetsActions from '../actions/tweetsActions';
import * as usersActions from '../actions/usersActions';
import * as sessionsActions from '../actions/sessionsActions';

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    user: state.user,
    sessions: state.sessions
  };
}

function mapDispachToProps(disptach) {
  return bindActionCreators(Object.assign({}, tweetsActions, usersActions, sessionsActions), disptach);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
