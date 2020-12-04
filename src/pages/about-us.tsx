import AboutComp from 'components/about-us';
import Head from 'next/head';
import MainLayout from 'components/common/layout';
import PageWithLayoutType from 'types/page-with-layout';

const AboutPage: React.FC = () => (
  <div>
    <Head>
      <title>About Us | ConnectIn</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AboutComp />
  </div>
);

(AboutPage as PageWithLayoutType).layout = MainLayout;

export default AboutPage;
