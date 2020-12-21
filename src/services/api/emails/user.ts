/* eslint-disable prefer-const */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */

import SendgridMail from '@sendgrid/mail';
import { BaseEmailService } from './base-email';
import {
  VERIFY_USER_CONTENT,
  UPDATE_USER_PASSWORD_CONTENT,
  RESET_USER_PASSWORD_CONTENT,
} from './templates/user';

export class UserEmailService extends BaseEmailService {
  constructor() {
    super();
    this.email.subject = 'Registration Info';
  }

  verifyUser(user: any): void {
    this.email.subject = 'User verification';
    this.email.to = user.email;
    this.email.html = VERIFY_USER_CONTENT(user);
    SendgridMail.send(this.email);
  }

  reVerifyUser(user: any): void {
    this.email.subject = 'Re-verification';
    this.email.to = user.email;
    this.email.html = VERIFY_USER_CONTENT(user);
    SendgridMail.send(this.email);
  }

  resetPassword(user: any): void {
    this.email.to = user.email;
    this.email.subject = 'Reset Password';
    this.email.html = RESET_USER_PASSWORD_CONTENT(user);
    SendgridMail.send(this.email);
  }

  updatePassword(user: any): void {
    this.email.to = user.email;
    this.email.subject = 'Password Updated';
    this.email.html = UPDATE_USER_PASSWORD_CONTENT(user);
    SendgridMail.send(this.email);
  }
}
