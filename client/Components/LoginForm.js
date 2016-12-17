/*jshint esversion: 6 */
import React from 'react';
import { Form, Menu, Icon, Modal, Checkbox, Input, Button } from 'antd';
import { Router, browserHistory } from 'react-router';
const FormItem = Form.Item;

class LoginForm extends React.Component {

  handleSubmit(e) {

    e.preventDefault();
    const email = this.props.sessions.loginForm.email;
    const password = this.props.sessions.loginForm.password;
    this.props.sendLogin(email, password);
    // console.log(formData);
    // const email = this.refs.email.value;
    // const password = this.refs.password.value;
    // console.log(email, password);
    // this.refs.loginForm.reset();

    browserHistory.push('/');
    this.props.hideLoginModal();
  }
  onEmailChange(e) {
    this.props.updateEmailLogin(e.target.value);
  }

  onPasswordChange(e) {
    this.props.updatePasswordLogin(e.target.value);
  }

  render() {
    return (
      <Form ref="loginForm" onSubmit={this.handleSubmit.bind(this)} className="login-form">
        <FormItem ref="email">
            <Input onChange={this.onEmailChange.bind(this)} addonBefore={<Icon type="user" />} placeholder="Email" />
        </FormItem>
        <FormItem ref="password">
          <Input onChange={this.onPasswordChange.bind(this)} addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
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
