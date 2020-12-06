import ConnectsComp from 'components/connects';
import Head from 'next/head';
import MainLayout from 'components/common/layout';
import PageWithLayoutType from 'types/page-with-layout';
import { NextPage, NextPageContext, GetServerSideProps } from 'next';
import { axiosGetWithCtx } from 'utils/helpers';

const ConnectsPage: NextPage = () => (
  <div>
    <Head>
      <title>My Connects - ConnectIn</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ConnectsComp />
  </div>
);

export const getServerSideProps = async (ctx: NextPageContext) => {
  // console.log('CONTEXT IN GET SERVER SIDE', ctx);

  // const cookie = ctx.req?.headers.cookie;

  // console.log('COOKIE:++++++++++++ ', ctx.req?.headers);
  const { data } = await axiosGetWithCtx('http://localhost:3000/api/connects', ctx);
  console.log('DATA IN: GET INITIAL PROPS', data);
  return { props: { connects: {} } };

  // const res = await fetch('https://.../data');
  // const data: Data = await res.json();

  // return {
  //   props: {
  //     data,
  //   },
  // };
};

// export GetServerSideProps = async (ctx: NextPageContext) => {

// };

(ConnectsPage as PageWithLayoutType).layout = MainLayout;

export default ConnectsPage;
