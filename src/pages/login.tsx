import LoginComp from 'components/login';
import Head from 'next/head';
import MainLayout from 'components/common/layout';
import PageWithLayoutType from 'types/page-with-layout';

const LoginPage: React.FC = () => (
  <div>
    <Head>
      <title>Login | ConnectIn</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <LoginComp />

  </div>
);

(LoginPage as PageWithLayoutType).layout = MainLayout;

export default LoginPage;
