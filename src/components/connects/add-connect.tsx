import {
  Row, Col, Spin, message,
} from 'antd';
import { createConnect } from 'services/connects';
import { useContext, useState } from 'react';
import { Connect } from 'types/connect';
import { authContext, ContextProps } from 'utils/auth-provider';
import Router from 'next/router';
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

const AddConnectComp: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { auth } = useContext<ContextProps>(authContext);

  const handleSubmit = async (values: Connect) => {
    setLoading(true);
    try {
      const { data } = await createConnect({ ...values, user_id: auth.data.user_id });
      console.log('Data: ', data);

      // check for errors
      if (data.errors) {
        message.error(data.errors[0].message);
      } else {
        message.success('Connect added successfully.');
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
        <h2>Add New Connect</h2>
        <Spin spinning={loading}>
          <Form initialValues={initialValues} handleSubmit={handleSubmit} />
        </Spin>
      </Col>
    </Row>
  );
};

export default AddConnectComp;
