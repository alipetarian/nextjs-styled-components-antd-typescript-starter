import Head from 'next/head';
import Layout from '../components/common/layout/index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <h1>
            Welcome to
            {' '}
            <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </Layout>
    </div>
  );
}
