import { Menu } from 'antd';

type Iprops = {
  mode? : string;
}

const LeftMenu = ({ mode }:Iprops) => (
  <Menu mode={mode === 'horizontal' ? 'horizontal' : 'vertical'}>
    <Menu.Item>
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/about-us">About</a>
    </Menu.Item>
    <Menu.Item>
      <a href="/contact-us">Contact</a>
    </Menu.Item>
  </Menu>
);

LeftMenu.defaultProps = {
  mode: 'horizontal',
};

export default LeftMenu;
