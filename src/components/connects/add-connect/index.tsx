import { Row, Col } from 'antd';
import Form from './form';

const AddConnectComp: React.FC = () => (
  <>
    <Row>
      <Col xs={24} sm={{ span: 16, offset: 4 }}>
        <h2>Add New Connect</h2>
        <Form />
      </Col>
    </Row>
  </>
);

export default AddConnectComp;
