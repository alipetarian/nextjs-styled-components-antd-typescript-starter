/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import PageWithLayoutType from 'types/page-with-layout';

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const MainLayout = Component.layout
  || ((page) => <>{page}</>);

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
