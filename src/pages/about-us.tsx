import AboutComp from 'components/about-us';
import Head from 'next/head';
import Layout from '../components/common/layout/index';

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Us | ConnectIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AboutComp />
      </Layout>
    </div>
  );
}
