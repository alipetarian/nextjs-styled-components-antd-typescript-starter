/* eslint-disable consistent-return */
import axios from 'axios';
import { NextPageContext } from 'next';
import Router from 'next/router';

export const axiosGetWithCtx = async (url: string, ctx: NextPageContext) : Promise<any> => {
  axios.defaults.headers.get.Cookie = ctx.req?.headers.cookie || {};

  try {
    const resp = await axios.get(url, {
      withCredentials: true,
    });
    console.log('RESPONSE SUCCESS;', resp.status);
    return resp;
  } catch (error) {
    console.log('Error status; ', error.status);
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
