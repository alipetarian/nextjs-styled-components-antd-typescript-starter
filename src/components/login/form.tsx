import {
  Form, Input, Button, Checkbox,
} from 'antd';

import * as yup from 'yup';
import { useFormik } from 'formik';

const emailNotLongEnough = 'email must be at least 3 characters';
const passwordNotLongEnough = 'password must be at least 3 characters';
const invalidEmail = 'email must be a valid email';

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

const LoginComp: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,

    onSubmit: (values) => {
      console.log('Formik Values,', JSON.stringify(values, null, 2));
    },
  });

  // const onFinish = (values) => {
  //   console.log('Success:', values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        name="login-form"
      >
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

        <FormItem name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </form>
    </>
  );
};

export default LoginComp;
