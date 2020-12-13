/* eslint-disable no-unused-vars */
import AddConnectComp from 'components/connects/add-connect';
import Head from 'next/head';
import MainLayout from 'components/common/layout';
import PageWithLayoutType from 'types/page-with-layout';
import { NextPage } from 'next';
import ProtectedPage from 'components/common/protected-route';

const AddConnectPage: NextPage = () => (
  <ProtectedPage>
    <Head>
      <title>Add New Connect - ConnectIn</title>
    </Head>
    <AddConnectComp />
  </ProtectedPage>
);

(AddConnectPage as PageWithLayoutType).layout = MainLayout;

export default AddConnectPage;
