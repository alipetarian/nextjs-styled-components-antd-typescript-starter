import HomeComp from 'components/home';
import Head from 'next/head';
import Layout from '../components/common/layout/index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomeComp />
      </Layout>
    </div>
  );
}
