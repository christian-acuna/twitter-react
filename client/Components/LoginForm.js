/*jshint esversion: 6 */
import React from 'react';
import { Form, Menu, Icon, Modal, Checkbox, Input, Button } from 'antd';
import { Router, browserHistory } from 'react-router';
const FormItem = Form.Item;

class LoginForm extends React.Component {

  handleSubmit(e) {

    e.preventDefault();
    // console.log(formData);
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);
    // this.refs.loginForm.reset();

    // browserHistory.push('/');
  }

  render() {
    return (
      <Form ref="loginForm" onSubmit={this.handleSubmit.bind(this)} className="login-form">
        <FormItem ref="email">
            <Input  addonBefore={<Icon type="user" />} placeholder="Email" />
        </FormItem>
        <FormItem ref="password">
          <Input  addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
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

export default Form.create({})(LoginForm);
