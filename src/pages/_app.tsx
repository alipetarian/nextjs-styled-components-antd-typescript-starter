/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps /* , AppContext */ } from 'next/app';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
