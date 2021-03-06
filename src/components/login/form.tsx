import {
  Form, Input, Button, Spin, message,
} from 'antd';

import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { login } from 'services/auth';
import Router from 'next/router';

import { authContext, ContextProps } from 'utils/auth-provider';

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

const emailNotLongEnough = 'Email must be at least 3 characters';
const passwordNotLongEnough = 'Password must be at least 3 characters';
const invalidEmail = 'Email must be a valid email';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required(),
});

const FormItem = Form.Item;

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useContext<ContextProps>(authContext);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const { data } = await login(values);
      console.log('Data: ', data);
      message.success(data.message);
      setLoading(false);
      auth.dispatch({ type: 'LOGIN_USER', auth: data.auth });
      Router.replace('/');
    } catch (error) {
      console.log('SOMETHING WENT WRONG:', error && error.response);
      message.error(error.response.data.message);
      setLoading(false);
    }
    console.log('Formik Values,', JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <StyledForm>
      <Spin spinning={loading}>
        <Form
          layout="vertical"
          name="login-form"
          onFinish={formik.handleSubmit}
        >
          <FormItem
            help={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
            validateStatus={formik.touched.email && formik.errors.email ? 'error' : undefined}
            label="Email / Username"
          >
            <Input
              name="email"
              placeholder="Email / Username"
              value={formik.values.email}
              onChange={(event) => {
                const formattedEmail = event.target.value.toLowerCase();
                formik.setFieldValue('email', formattedEmail);
              }}
              onBlur={formik.handleBlur}
            />
          </FormItem>

          <FormItem
            label="Password"
            help={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
            validateStatus={
            formik.touched.password && formik.errors.password ? 'error' : undefined
          }
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormItem>

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

export default LoginForm;
