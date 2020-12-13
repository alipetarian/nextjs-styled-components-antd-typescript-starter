/* eslint-disable consistent-return */
// eslint-disable-next-line no-use-before-define
import React, {
  useEffect, useReducer, useState, Dispatch,
} from 'react';

import Cookies from 'js-cookie';
import { isEmpty } from 'lodash';

import { Auth } from 'types/auth';
import { isBrowser } from './helpers';

type Actions =
 | { type: 'LOGIN_USER', auth: Auth }
 | { type: 'UPDATE_USER', auth: Auth }
 | { type: 'LOGOUT_USER'};

const defaultAuth: Auth = {
  token: '',
  data: {
    user_id: '',
    email: '',
    first_name: '',
    last_name: '',
  },
};

export type ContextProps ={
  auth: Auth,
  dispatch: Dispatch<Actions>,
  isAuthenticated: boolean
}

const defaultContext: ContextProps = {
  auth: defaultAuth,
  dispatch: () => {},
  isAuthenticated: false,
};

const authReducer = (prevState: Auth, action: Actions) : Auth => {
  console.log('ACTIONS IS: +++++++++++++', action);
  switch (action.type) {
    case 'LOGIN_USER':
      if (!isEmpty(action.auth.token)) {
        // localStorage.setItem('user', action.user);
        Cookies.set('auth', action.auth, { expires: (1 / 24) });
        return {
          ...action.auth,
        };
      }
      return { ...defaultAuth };

      break;

    case 'UPDATE_USER':
      if (!isEmpty(action.auth.token)) {
        return { ...prevState, ...action.auth };
      }
      break;

    case 'LOGOUT_USER':
      Cookies.remove('auth');
      return { ...defaultAuth };
      break;

    default:
      return { ...defaultAuth };
      break;
  }
  return prevState;
};

export const getAuthCookie: any = () => {
  const auth = Cookies.get('auth');
  if (auth === undefined) {
    return defaultAuth;
  }
  return JSON.parse(auth);
};

export const authContext = React.createContext<ContextProps>(defaultContext);

const { Provider } = authContext;

const initialState = (isBrowser() && getAuthCookie()) || defaultAuth;

type Props={
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);

  console.log('AUTH: IN MAIN AUTH PROVIDER', auth);
  const [isAuthenticated, setIsAuthenticated] = useState(auth && !!auth.data.user_id);

  useEffect(() => {
    console.log('AUTH IN AUTH PROVIDER EFFECT', auth);
    if (isBrowser() && !isEmpty(auth && auth.token)) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [auth]);

  return (
    <Provider value={{
      auth, dispatch, isAuthenticated,
    }}
    >
      {children}
    </Provider>
  );
};
