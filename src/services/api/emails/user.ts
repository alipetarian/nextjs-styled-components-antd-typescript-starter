/* eslint-disable prefer-const */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */

import SendgridMail from '@sendgrid/mail';
import { SENDGRID_SENDER_EMAIL } from 'utils/constants';
import { MainLayout } from './templates/layout';
import {
  VERIFY_USER_CONTENT,
} from './templates/user';

const defaultEmail = {
  to: '',
  from: SENDGRID_SENDER_EMAIL,
  cc: [],
  subject: 'Connectin App',
  html: MainLayout(''),
};

export const registerUser = (user: any): Promise<any> => {
  const { email } = user;

  return SendgridMail.send({ ...defaultEmail, to: email, html: VERIFY_USER_CONTENT(user) });
};
