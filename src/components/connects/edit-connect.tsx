/* eslint-disable react/display-name */
import {
  Row, Col, Spin, message,
} from 'antd';
import { updateConnect, getConnect } from 'services/connects';
import { useEffect, useState } from 'react';
import { Connect } from 'types/connect';
import Router, { useRouter } from 'next/router';
import Form from './connect-form';

const initialValues: Connect = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  company_name: '',
  notes_about_them: '',
  notes_advice_wanted: '',
  notes_what_is_common: '',
  frequency: '',
  start_date: '',
};

const EditConnectComp: React.FC = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [connect, setConnect] = useState<Connect>();

  const router = useRouter();
  const { connect_id } = router.query;
  console.log('CONNECTION ID: ', connect_id);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);

      try {
        const { data } = await getConnect(connect_id);
        console.log('DATA: ', data);
        if (data.errors) {
          console.log('SOMETHING WENT WRONG: ', data.errors);
        } else {
          const connectData = data.data.connects[0];
          console.log('CONNECT DATA;', connect);
          setConnect(connectData);
        }
      } catch (error) {
        console.log('SOMETHING WENT WRONG,', error);
        // setIsError(true);
      }

      // setIsLoading(false);
    };

    // Temporary hack to fix axios default header on nextjs direct call to server page
    setTimeout(() => fetchData(), 500);
  }, []);

  const handleSubmit = async (values: Connect) => {
    setLoading(true);
    try {
      const { data } = await updateConnect({ ...values });
      console.log('Data: ', data);

      // check for errors
      if (data.errors) {
        message.error(data.errors[0].message);
      } else {
        message.success('Connect updated successfully.');
        Router.push('/connects');
      }
      setLoading(false);
    } catch (error) {
      console.log('SOMETHING WENT WRONG:', (error && error.response) || error);
      message.error('Something went wrong.');
      setLoading(false);
    }
  };

  return (
    <Row>
      <Col xs={24} sm={{ span: 16, offset: 4 }}>
        <h3>Edit Connect Page</h3>
        <Spin spinning={loading}>
          <Form initialValues={connect || initialValues} handleSubmit={handleSubmit} />
        </Spin>
      </Col>
    </Row>
  );
};
export default EditConnectComp;
