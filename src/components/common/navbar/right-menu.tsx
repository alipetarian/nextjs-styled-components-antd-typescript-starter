import { Menu } from 'antd';

const RightMenu = () => (
  <Menu mode="horizontal">
    <Menu.Item>
      <a href="/login">Login</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/register">Register</a>
    </Menu.Item>
  </Menu>
);

export default RightMenu;
