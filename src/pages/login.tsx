import LoginComp from 'components/login';
import Head from 'next/head';
import { removeAuthCookie } from 'utils/authContext';
import MainLayout from 'components/common/layout';
import PageWithLayoutType from 'types/page-with-layout';
import { useEffect } from 'react';

const LoginPage: React.FC = () => {
  useEffect(() => {
    removeAuthCookie();
  }, []);
  return (
    <div>
      <Head>
        <title>Login | ConnectIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginComp />
    </div>
  );
};

(LoginPage as PageWithLayoutType).layout = MainLayout;

export default LoginPage;
