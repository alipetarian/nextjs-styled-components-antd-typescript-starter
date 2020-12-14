/* eslint-disable react/display-name */
import {
  Row, Col,
} from 'antd';

import { useRouter } from 'next/router';
// import { Connect } from 'types/connect';

const EditConnectComp: React.FC = () => {
  // const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { connect_id } = router.query;
  console.log('CONNECTION ID: ', connect_id);

  return (
    <Row>
      <Col md={{ span: 20, offset: 2 }}>
        <h3>Edit Connect Page</h3>

      </Col>
    </Row>
  );
};
export default EditConnectComp;
