/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import PageWithLayoutType from 'types/page-with-layout';
import Head from 'next/head';
import { getAuthCookie, Provider } from 'utils/authContext';
import { useState } from 'react';
import { setAuthorization } from '../services/http-service';

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const MainLayout = Component.layout
  || ((page) => <>{page}</>);

  const [auth] = useState(getAuthCookie());

  if (auth.token) { setAuthorization(auth.token); }
  return (
    <Provider value={auth}>
      <Head>
        <title>ConnectIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
