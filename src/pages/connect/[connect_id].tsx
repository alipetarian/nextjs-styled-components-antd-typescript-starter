/* eslint-disable no-unused-vars */
import SingleConnectsComp from 'components/connects/single-connect';
import Head from 'next/head';
import MainLayout from 'components/common/layout';
import PageWithLayoutType from 'types/page-with-layout';
import { NextPage, NextPageContext, GetServerSideProps } from 'next';

import ProtectedPage from 'components/common/protected-route';

const SingleConnectPage: NextPage = () => (
  <ProtectedPage>
    <Head>
      <title>My Connects - ConnectIn</title>
    </Head>
    <SingleConnectsComp />
  </ProtectedPage>
);

(SingleConnectPage as PageWithLayoutType).layout = MainLayout;

export default SingleConnectPage;
