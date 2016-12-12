/*jshint esversion: 6 */
import React from 'react';
import { Form, Menu, Icon, Modal, Checkbox, Input, Button } from 'antd';
const FormItem = Form.Item;

class LoginForm extends React.Component {

  handleSubmit() {
    console.log('submit');
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
        </FormItem>
        <FormItem>
          <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
            <Checkbox>Remember me</Checkbox>
          <a style={{'float': 'right'}}className="login-form-forgot">Forgot password</a>
          <Button style={{'width': '100%'}} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a>register now!</a>
        </FormItem>
      </Form>
    );
  }

}

export default LoginForm;
