/*jshint esversion: 6 */
import React from 'react';
import { Form, Menu, Icon, Modal, Checkbox, Input, Button } from 'antd';
const FormItem = Form.Item;
import LoginForm from './LoginForm';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Nav extends React.Component {

  showModal() {
    this.props.showLoginModal();
  }

  handleCancel() {
    this.props.hideLoginModal();
  }

  render() {
    return (
      <Menu
        mode="horizontal"
      >
        <Menu.Item key="alipay">
          <Link to="/"> <Icon type="aliwangwang-o" /> LilTwitter</Link>
        </Menu.Item>
        <Menu.Item  key="user">
          <div onClick={this.showModal.bind(this)}>
            <Icon type="user" />Login
            <Modal title="Login"
              visible={this.props.sessions.loginVisible}
              onCancel={this.handleCancel.bind(this)}
              footer={[
                <Button key="back" type="ghost" size="large" onClick={this.handleCancel.bind(this)}>Cancel</Button>,
              ]}
            >
              <LoginForm {...this.props} />
            </Modal>
          </div>

        </Menu.Item>
        { this.props.user.auth.access_token ?
          <Menu.Item key="app">
          <Icon type="solution" />Profile
        </Menu.Item>
        : <Menu.Item key="app">
          <Icon type="solution" />Sign Up
        </Menu.Item>
      }

      </Menu>
    );
  }

}

export default Nav;
