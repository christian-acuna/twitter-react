/*jshint esversion: 6 */
import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Nav extends React.Component {

  render() {
    return (
      <Menu
        mode="horizontal"
      >
        <Menu.Item key="alipay">
          <a href="/" > <Icon type="aliwangwang-o" /> LilTwitter</a>
        </Menu.Item>
        <Menu.Item key="user">
          <Icon type="user" />Login
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="solution" />Sign Up
        </Menu.Item>
      </Menu>
    );
  }

}

export default Nav;