/* eslint-disable consistent-return */
import axios from 'axios';
import { NextPageContext } from 'next';
import Router from 'next/router';
import nextCookies from 'next-cookies';

export const axiosGetWithCtx = async (url: string, ctx: NextPageContext) : Promise<any> => {
  const normalMethod = ctx.req?.headers.cookie;
  console.log('NORMAL METHOD COOKIE', normalMethod);

  const allcookies = nextCookies(ctx, { doNotParse: true });
  axios.defaults.headers.get.Cookie = ctx.req?.headers.cookie || {};

  const authCookie = nextCookies(ctx).auth;
  console.log('context: IN AXIOSGETWITH ', allcookies);
  console.log('context: IN auth ', authCookie);
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
