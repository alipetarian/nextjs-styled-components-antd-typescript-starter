import { Menu } from 'antd';
import Link from 'next/link';

type Iprops = {
  mode? : string;
}

const LeftMenu = ({ mode }:Iprops) => (
  <Menu mode={mode === 'horizontal' ? 'horizontal' : 'vertical'}>
    <Menu.Item>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/about-us">
        <a>About</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/contact-us">
        <a>Contact</a>
      </Link>
    </Menu.Item>
  </Menu>
);

LeftMenu.defaultProps = {
  mode: 'horizontal',
};

export default LeftMenu;
