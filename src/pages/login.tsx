import LoginComp from 'components/login';
import Head from 'next/head';
import Layout from '../components/common/layout/index';

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Login | ConnectIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <LoginComp />
      </Layout>
    </div>
  );
}
