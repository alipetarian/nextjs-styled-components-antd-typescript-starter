import { Menu } from 'antd';

type Iprops = {
  mode? : string;
}

const LeftMenu = ({ mode }:Iprops) => (
  <Menu mode={mode === 'horizontal' ? 'horizontal' : 'vertical'}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="mail">
      <a href="#about">About</a>
    </Menu.Item>
    <Menu.Item key="alipay">
      <a href="/contact">Contact Us</a>
    </Menu.Item>
  </Menu>
);

LeftMenu.defaultProps = {
  mode: 'horizontal',
};

export default LeftMenu;
