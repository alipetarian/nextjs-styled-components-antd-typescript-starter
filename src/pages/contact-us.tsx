import ContactComp from 'components/contact-us';
import Head from 'next/head';
import MainLayout from 'components/common/layout';
import PageWithLayoutType from 'types/page-with-layout';

const ContactPage: React.FC = () => (
  <div>
    <Head>
      <title>Contact Us | ConnectIn</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ContactComp />
  </div>
);

(ContactPage as PageWithLayoutType).layout = MainLayout;

export default ContactPage;
