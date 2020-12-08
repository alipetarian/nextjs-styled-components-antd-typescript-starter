import HomeComp from 'components/home';
import Head from 'next/head';
import MainLayout from 'components/common/layout';
import PageWithLayoutType from 'types/page-with-layout';

const HomePage: React.FC = () => (
  <div>
    <Head>
      <title>Home | ConnectIn</title>
    </Head>
    <HomeComp />
  </div>
);

(HomePage as PageWithLayoutType).layout = MainLayout;

export default HomePage;
