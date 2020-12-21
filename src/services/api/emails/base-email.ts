import { SENDGRID_SENDER_EMAIL } from 'utils/constants';
import { MainLayout } from './templates/layout';

export class BaseEmailService {
  email = {
    to: '',
    from: SENDGRID_SENDER_EMAIL,
    cc: [],
    subject: 'Connectin App',
    html: MainLayout(''),
  }
}
