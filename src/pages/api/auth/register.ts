/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';
import bcrypt from 'bcrypt';
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

      if (errors) {
        return res.status(400).json({
          message: errors[0].message,
          code: '400',
        });
      }

      // const tokenContents = {
      //   sub: data.insert_users_one.user_id.toString(),
      //   name: `${first_name} ${last_name}`,
      //   iat: Date.now() / 1000,
      //   'https://hasura.io/jwt/claims': {
      //     'x-hasura-allowed-roles': ['user'],
      //     'x-hasura-user-id': data.insert_users_one.user_id.toString(),
      //     'x-hasura-default-role': 'user',
      //     'x-hasura-role': 'user',
      //   },
      //   exp: Math.floor(Date.now() / 1000) + (60 * 60),
      // };

      // const token = jwt.sign(tokenContents, jwtKey, { expiresIn: '1h' });

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
