/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';
import bcrypt from 'bcrypt';
import { UserEmailService } from 'services/api/emails/user';

const userEmailService = new UserEmailService();

// import jwt from 'jsonwebtoken';

// const jwtKey = process.env.CI_JWT_SECRET_KEY || '';
// const adminEmail = process.env.CI_ADMIN_EMAIL;
const hasuraEndpoint = `${process.env.CI_HASURA_GRAPQHL_ENDPOINT}/graphql`;

type Data = {
  message: string
  code?: string
  user?: object
}

const SIGNUP_HASURA_OPERATION = `
  mutation ($email: String!, $first_name: String!, $last_name: String!, $password: String!, $company_name: String!,$phone_number: String!) {
    insert_users_one(object: {email: $email, first_name: $first_name, last_name: $last_name, password: $password, company_name: $company_name, phone_number: $phone_number}) {
      user_id,
      first_name,
      last_name,
      email
    }
  }
`;

export default async function register(req: NextApiRequest, res : NextApiResponse<Data>) {
  if (req.method === 'POST') {
    console.log('REGISTER BODY:', req.body);
    try {
      const {
        first_name, last_name, email, password, company_name, phone_number,
      } = req.body;

      console.log('PASSWORD: ', password);
      const hashedPassword = await bcrypt.hash(password, 10);

      const variables = {
        first_name,
        last_name,
        email,
        password: hashedPassword,
        company_name,
        phone_number,

      };

      const body = JSON.stringify({
        query: SIGNUP_HASURA_OPERATION,
        variables,
      });

      const { data: resData } = await axios.post(hasuraEndpoint, body);
      const { data, errors } = resData;

      console.log('errors: ', errors);
      if (errors) {
        return res.status(400).json({
          message: errors[0].message,
          code: '400',
        });
      }

      // send email

      const emailResult = await userEmailService.registerUser(data);
      console.log('EMAIL RESULT: ', emailResult);

      // success
      return res.status(201).json({
        message: 'Account created successfully.',
        user: { ...data.insert_users_one },
      });
    } catch (err) {
      console.log('eeeeerrr+n    +++++++_', err && err.response);
      return res.status(400).json({
        message: err.message,
      });
    }
  } else {
    return res.status(405).json({ message: 'We only support POST' });
  }
}
