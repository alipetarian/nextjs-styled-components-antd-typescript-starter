/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Auth } from 'types/auth';

const jwtKey = process.env.CI_JWT_SECRET_KEY || '';
const hasuraEndpoint = `${process.env.CI_HASURA_GRAPQHL_ENDPOINT}/graphql`;

type Data = {
  message: string
  code?: string | number,
  auth?: Auth
 }

const GET_USER_WITH_EMAIL_OPERATION = `
  query($email: String!) {
    users(where: {email: {_eq: $email}}) {
      email
      first_name
      last_name
      user_id
      password
    }
  }
`;

export default async function login(req: NextApiRequest, res : NextApiResponse<Data>) {
  if (req.method === 'POST') {
    try {
      const {
        email, password,
      } = req.body;

      const variables = {
        email,
      };

      const body = JSON.stringify({
        query: GET_USER_WITH_EMAIL_OPERATION,
        variables,
      });

      const { data: resData } = await axios.post(hasuraEndpoint, body);

      const { data, errors } = resData;

      if (errors) {
        return res.status(400).json({
          message: errors[0].message,
          code: 400,
        });
      }

      console.log('USER +++++++++++', data.users);

      if (data.users.length) {
        const user = data.users[0];

        // Compare password:

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid email or password' });

        const tokenContents = {
          sub: user.user_id.toString(),
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          iat: Date.now() / 1000,
          'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': ['user'],
            'x-hasura-user-id': user.user_id.toString(),
            'x-hasura-default-role': 'user',
            'x-hasura-role': 'user',
          },
        };

        const token = jwt.sign(tokenContents, jwtKey, { expiresIn: '1h' });

        const auth: Auth = {
          token,
          data: {
            user_id: user.user_id.toString(),
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
          },
        };
        // res.setHeader('Set-Cookie', cookie.serialize('auth', JSON.stringify(auth), {
        //   httpOnly: false,
        //   secure: process.env.NODE_ENV !== 'development',
        //   sameSite: 'strict',
        //   maxAge: 3600,
        //   path: '/',
        // }));

        // success
        return res.json({
          message: 'User Logged in successfully.',
          auth,
        });
      }

      return res.status(400).json({
        message: 'Invalid Email or password.',
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
