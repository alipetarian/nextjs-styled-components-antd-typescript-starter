import { ReactNode } from 'react';
import Navbar from 'components/common/navbar';
import Footer from 'components/common/footer';
import BaseLayout from './base-layout';

type IProps = {
  children: ReactNode
}

const Layout = ({ children }: IProps) => (
  <BaseLayout>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
  </BaseLayout>
);

export default Layout;
