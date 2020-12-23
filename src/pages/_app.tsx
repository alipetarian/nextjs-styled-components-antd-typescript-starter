/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import PageWithLayoutType from 'types/page-with-layout';
import Head from 'next/head';
// import sgMail from '@sendgrid/mail';
import { AuthProvider } from '../utils/auth-provider';

// sgMail.setApiKey(process.env.CI_SENDGRID_API_KEY || '');

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const MainLayout = Component.layout
  || ((page) => <>{page}</>);

  return (
    <AuthProvider>
      <Head>
        <title>ConnectIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  );
}

export default MyApp;
