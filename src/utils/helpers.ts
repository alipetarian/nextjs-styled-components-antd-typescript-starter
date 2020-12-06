/* eslint-disable consistent-return */
import axios from 'axios';
import { NextPageContext } from 'next';
import Router from 'next/router';

export const axiosGetWithCtx = async (url: string, ctx: NextPageContext) : Promise<any> => {
  const cookie = ctx.req?.headers.cookie;
  console.log('context: IN AXIOSGETWITH ', cookie);

  if (!cookie) return;

  try {
    const resp = await axios.get(url, {
      headers: {
        cookie: cookie!,
      },
    });
    console.log('RESPONSE SUCCESS;', resp.status);
    return resp;
  } catch (error) {
    console.log('Error: ', error);
    const { status } = error && error.response;
    console.log('RESPONSE ERROR', status);
    if (status === 401 && !ctx.req) {
      Router.replace('/login');
      return {};
    }

    // Server
    if (status === 401 && ctx.req) {
      ctx.res?.writeHead(302, {
        Location: '/login',
      });
      ctx.res?.end();
      return {};
    }
  }
};
