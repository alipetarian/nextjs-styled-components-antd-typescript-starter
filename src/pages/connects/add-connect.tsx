/* eslint-disable no-unused-vars */
import AddConnectComp from 'components/connects/add-connect';
import Head from 'next/head';
import MainLayout from 'components/common/layout';
import PageWithLayoutType from 'types/page-with-layout';
import { NextPage, NextPageContext, GetServerSideProps } from 'next';
import { axiosGetWithCtx } from 'utils/helpers';

const AddConnectPage: NextPage = () => (
  <div>
    <Head>
      <title>Add New Connect - ConnectIn</title>
    </Head>
    <AddConnectComp />
  </div>
);

(AddConnectPage as PageWithLayoutType).layout = MainLayout;

export default AddConnectPage;
