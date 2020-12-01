import {
  Form, Input, Button, Row, Col,
} from 'antd';

import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from 'styled-components';

const StyledForm = styled.div`
  & .ant-form-item {
    margin-bottom: 0;
  }
`;

const emailNotLongEnough = 'email must be at least 3 characters';
const passwordNotLongEnough = 'password must be at least 3 characters';
const invalidEmail = 'email must be a valid email';
const requiredField = (fieldName: string) => `${fieldName} is required.`;

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(255)
    .required(requiredField('First Name')),
  lastName: yup
    .string()
    .max(255)
    .required(requiredField('Last Name')),
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(requiredField('Email')),
  userName: yup
    .string()
    .min(4)
    .required(requiredField('Username')),
  password: yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required(requiredField('Password')),
  confirmPassword: yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required(requiredField('Confirm Password'))
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),

});

const FormItem = Form.Item;

const RegisterForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,

    onSubmit: (values) => {
      console.log('Formik Values,', JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledForm>
      <Form
        layout="vertical"
        name="register-form"
        onFinish={formik.handleSubmit}
      >
        <Row gutter={{ sm: 24 }}>
          <Col xs={24} sm={12}>
            <FormItem
              help={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}
              validateStatus={formik.touched.firstName && formik.errors.firstName ? 'error' : undefined}
              label="First Name"
            >
              <Input
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={12}>
            <FormItem
              help={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ''}
              validateStatus={formik.touched.lastName && formik.errors.lastName ? 'error' : undefined}
              label="Last Name"
            >
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={12}>
            <FormItem
              help={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
              validateStatus={formik.touched.email && formik.errors.email ? 'error' : undefined}
              label="Email"
            >
              <Input
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormItem>
          </Col>
          <Col xs={24} sm={12}>
            <FormItem
              help={formik.touched.userName && formik.errors.userName ? formik.errors.userName : ''}
              validateStatus={formik.touched.userName && formik.errors.userName ? 'error' : undefined}
              label="Username"
            >
              <Input
                name="userName"
                placeholder="User Name"
                value={formik.values.userName}
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
              help={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ''}
              validateStatus={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'error' : undefined}
            >
              <Input.Password
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
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
    </StyledForm>
  );
};

export default RegisterForm;
