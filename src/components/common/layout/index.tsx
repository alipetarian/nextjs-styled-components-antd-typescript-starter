/* eslint-disable react/prop-types */
import Navbar from 'components/common/navbar';
import Footer from 'components/common/footer';
import BaseLayout from './base-layout';

const Layout: React.FC<{}> = ({ children }) => (
  <BaseLayout>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
  </BaseLayout>
);

export default Layout;
