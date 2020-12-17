import {
  Form, Input, Button, Row, Col, Spin, message,
} from 'antd';

import Router from 'next/router';

import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { User } from 'types/user';
import { registerUser } from 'services/auth';
import { useState } from 'react';

const StyledForm = styled.div(
  ({
    theme: {
      down, breakpoints,
    },
  }) => `
  
  & .ant-form-item {
    margin-bottom: 0;
  }
  ${down(breakpoints.sm)} {
    padding: 0 15px;
  } 
`,
);

const emailNotLongEnough = 'email must be at least 3 characters';
const passwordNotLongEnough = (length = 3) => `password must be at least ${length} characters`;
const invalidEmail = 'email must be a valid email';
const requiredField = (fieldName: string) => `${fieldName} is required.`;

const validationSchema = yup.object().shape({
  first_name: yup
    .string()
    .max(255)
    .required(requiredField('First Name')),
  last_name: yup
    .string()
    .max(255)
    .required(requiredField('Last Name')),
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(requiredField('Email')),
  company_name: yup
    .string()
    .max(255)
    .required(requiredField('Company Name')),
  phone_number: yup
    .string()
    .max(255)
    .required(requiredField('Phone Number')),
  password: yup
    .string()
    .min(8, passwordNotLongEnough(8))
    .max(255)
    .required(requiredField('Password')),
  confirm_password: yup
    .string()
    .min(8, passwordNotLongEnough(8))
    .max(255)
    .required(requiredField('Confirm Password'))
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),

});

const FormItem = Form.Item;

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: User) => {
    setLoading(true);
    try {
      const { data } = await registerUser(values);
      console.log('Data: ', data);
      message.success(data.message);
      setLoading(false);
      Router.replace('/login');
    } catch (error) {
      console.log('SOMETHING WENT WRONG:', error && error.response);
      message.error('Something went wrong.');
      setLoading(false);
    }
    console.log('Formik Values,', JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone_number: '',
      company_name: '',
      confirm_password: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <StyledForm>
      <Spin spinning={loading}>
        <Form
          layout="vertical"
          name="register-form"
          onFinish={formik.handleSubmit}
        >
          <Row gutter={{ sm: 24 }}>
            <Col xs={24} sm={12}>
              <FormItem
                help={formik.touched.first_name && formik.errors.first_name ? formik.errors.first_name : ''}
                validateStatus={formik.touched.first_name && formik.errors.first_name ? 'error' : undefined}
                label="First Name"
              >
                <Input
                  name="first_name"
                  placeholder="First Name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormItem>
            </Col>
            <Col xs={24} sm={12}>
              <FormItem
                help={formik.touched.last_name && formik.errors.last_name ? formik.errors.last_name : ''}
                validateStatus={formik.touched.last_name && formik.errors.last_name ? 'error' : undefined}
                label="Last Name"
              >
                <Input
                  name="last_name"
                  placeholder="Last Name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormItem>
            </Col>
            <Col xs={24} sm={12}>
              <FormItem
                help={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                validateStatus={formik.touched.email && formik.errors.email ? 'error' : undefined}
                label="Email / Username"
              >
                <Input
                  name="email"
                  placeholder="Email / Username"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormItem>
            </Col>
            <Col xs={24} sm={12}>
              <FormItem
                help={formik.touched.company_name && formik.errors.company_name ? formik.errors.company_name : ''}
                validateStatus={formik.touched.company_name && formik.errors.company_name ? 'error' : undefined}
                label="Company Name"
              >
                <Input
                  name="company_name"
                  placeholder="Company Name"
                  value={formik.values.company_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormItem>
            </Col>
            <Col xs={24} sm={12}>
              <FormItem
                help={formik.touched.phone_number && formik.errors.phone_number ? formik.errors.phone_number : ''}
                validateStatus={formik.touched.phone_number && formik.errors.phone_number ? 'error' : undefined}
                label="Phone Number"
              >
                <Input
                  name="phone_number"
                  placeholder="Phone Number"
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormItem>
            </Col>
            <Col xs={24} sm={12}>
              <FormItem
                label="Password"
                help={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
                validateStatus={formik.touched.password && formik.errors.password ? 'error' : undefined}
              >
                <Input.Password
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormItem>
            </Col>
            <Col xs={24} sm={12}>
              <FormItem
                label="Confirm Password"
                help={(formik.touched.confirm_password || formik.touched.password) && formik.errors.confirm_password ? formik.errors.confirm_password : ''}
                validateStatus={(formik.touched.confirm_password || formik.touched.password) && formik.errors.confirm_password ? 'error' : undefined}
              >
                <Input.Password
                  name="confirm_password"
                  placeholder="Confirm Password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormItem>
            </Col>

          </Row>
          <FormItem>

            <Button type="primary" key="submit" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </Spin>
    </StyledForm>
  );
};

export default RegisterForm;
