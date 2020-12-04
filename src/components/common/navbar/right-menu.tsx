import { Menu } from 'antd';
import Link from 'next/link';

const RightMenu = () => (
  <Menu mode="horizontal">
    <Menu.Item>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/register">
        <a>Register</a>
      </Link>
    </Menu.Item>
  </Menu>
);

export default RightMenu;
