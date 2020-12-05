/* eslint-disable no-nested-ternary */
import { NextPage, NextPageContext } from 'next';

import MainLayout from 'components/common/layout';
import PageWithLayoutType from 'types/page-with-layout';

type ErrorProps = {
  statusCode? : number | string
}

const Error : NextPage <ErrorProps> = ({ statusCode }: ErrorProps) => (
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
);

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

Error.defaultProps = {
  statusCode: 404,
};

(Error as PageWithLayoutType).layout = MainLayout;
export default Error;
