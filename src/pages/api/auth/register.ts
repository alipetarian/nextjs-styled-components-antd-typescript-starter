import type { NextApiRequest, NextApiResponse } from 'next';

const axios = require('axios');
/* eslint-disable camelcase */
const bcrypt = require('bcryptjs');
// // const Joi = require('joi');
const jwt = require('jsonwebtoken');

const jwtKey = process.env.CI_JWT_SECRET_KEY;
// const adminEmail = process.env.CI_ADMIN_EMAIL;
const hasuraEndpoint = `${process.env.CI_HASURA_GRAPQHL_ENDPOINT}/graphql`;

type Data = {
  message: string
  code?: string
}

const SIGNUP_HASURA_OPERATION = `
  mutation ($email: String!, $first_name: String!, $last_name: String!, $password: String!, $username: String!, $company_name: String!,$phone_number: String!) {
    insert_users_one(object: {email: $email, first_name: $first_name, last_name: $last_name, password: $password, username: $username, company_name: $company_name, phone_number: $phone_number}) {
      user_id
    }
  }
`;

export default async function register(req: NextApiRequest, res : NextApiResponse<Data>) {
  if (req.method === 'POST') {
    try {
      const {
        first_name, last_name, email, password, username, company_name, phone_number,
      } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const variables = {
        first_name,
        last_name,
        email,
        password: hashedPassword,
        username,
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

      const tokenContents = {
        sub: data.insert_users_one.user_id.toString(),
        name: `${first_name} ${last_name}`,
        iat: Date.now() / 1000,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-user-id': data.insert_users_one.user_id.toString(),
          'x-hasura-default-role': 'user',
          'x-hasura-role': 'user',
        },
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
      };

      const token = jwt.sign(tokenContents, jwtKey);

      // success
      return res.json({
        ...data.insert_users_one,
        token,
      });
    } catch (err) {
      console.log('eeeeerrr+n    +++++++_', err && err.response);
      console.log('eeeeerrr+n    +++++++_', err && err.message);

      return res.status(400).json({
        message: err.message,
      });
    }
  } else {
    return res.status(405).json({ message: 'We only support POST' });
  }
}
