import { Menu } from 'antd';

const RightMenu = () => (
  <Menu mode="horizontal">
    <Menu.Item key="mail">
      <a href="">Signin</a>
    </Menu.Item>
    <Menu.Item key="app">
      <a href="">Signup</a>
    </Menu.Item>
  </Menu>
);

export default RightMenu;
