import { Row, Col } from 'antd';
import Form from './form';

const LoginComp: React.FC = () => (
  <>
    <Row>
      <Col span={8} offset={8}>
        <h2>Login</h2>
        <Form />
      </Col>
    </Row>
  </>
);

export default LoginComp;
