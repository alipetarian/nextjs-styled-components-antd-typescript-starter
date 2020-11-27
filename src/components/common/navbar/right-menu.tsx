import { Menu } from 'antd';

const RightMenu = () => (
  <Menu mode="horizontal">
    <Menu.Item key="mail">
      <a href="/login">Login</a>
    </Menu.Item>
    <Menu.Item key="app">
      <a href="/register">Register</a>
    </Menu.Item>
  </Menu>
);

export default RightMenu;
