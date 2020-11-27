import ContactComp from 'components/contact-us';
import Head from 'next/head';
import Layout from '../components/common/layout/index';

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Us | ConnectIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ContactComp />
      </Layout>
    </div>
  );
}
