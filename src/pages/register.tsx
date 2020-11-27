import RegisterComp from 'components/register';
import Head from 'next/head';
import Layout from '../components/common/layout/index';

export default function RegisterPage() {
  return (
    <div>
      <Head>
        <title>Register | ConnectIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <RegisterComp />
      </Layout>
    </div>
  );
}
