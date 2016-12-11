/*jshint esversion: 6 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import css from './TweetsContainer.css';

class TweetsContainer extends React.Component {

  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row>
          <Col span="8">
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span="8">
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span="8">
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
        </Row>


        {/* <Row type="flex" justify="center">
          <Col span={4}>
            <Card title="Card title" >
              Whatever content
            </Card>
          </Col>
          <Col span={4}><Card title="Card title" >
            Whatever content
          </Card></Col>
          <Col span={4}><Card title="Card title" >
            Whatever content
          </Card></Col>
          <Col span={4}><Card title="Card title" >
            Whatever content
          </Card></Col>
        </Row> */}
      </div>
    );
  }

}

export default TweetsContainer;
