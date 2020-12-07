/* eslint-disable no-unused-vars */
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
  let connects : any = {};
  try {
    const { data } = await axiosGetWithCtx(`${process.env.CI_BASE_URL}/api/connects`, ctx);
    if (data) { connects = data; }
    console.log('DATA IN: GET INITIAL PROPS', data);
  } catch (error) {
    console.log('Error gettting connects', error);
  }

  return { props: { connects } };
};

(ConnectsPage as PageWithLayoutType).layout = MainLayout;

export default ConnectsPage;
