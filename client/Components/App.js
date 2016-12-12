/*jshint esversion: 6 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Row, Col, Card } from 'antd';
import Nav from './Nav';
import Main from './Main';
import TweetsContainer from './TweetsContainer';

import * as tweetsActions from '../actions/tweetsActions';

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
  };
}

function mapDispachToProps(disptach) {
  return bindActionCreators(tweetsActions, disptach);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
