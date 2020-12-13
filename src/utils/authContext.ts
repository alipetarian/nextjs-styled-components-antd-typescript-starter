import Cookies from 'js-cookie';
import React from 'react';
import { removeAuthorization } from 'services/http-service';

export const setAuthCookie = (auth: any): void => {
  Cookies.remove('auth');
  Cookies.set('auth', auth, { expires: (1 / 24) });
};

export const removeAuthCookie = (): void => {
  console.log('INSIDE REMOVE AUTH COOKIE');
  Cookies.remove('auth');
  removeAuthorization();
};

export const getAuthCookie: any = () => {
  const auth = Cookies.get('auth');
  if (auth === undefined) {
    return {};
  }
  return JSON.parse(auth);
};

export const AuthContext = React.createContext(getAuthCookie());

export const { Provider } = AuthContext;
