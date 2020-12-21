/* eslint-disable consistent-return */
import { verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const jwtKey = process.env.CI_JWT_SECRET_KEY || '';

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader && authHeader.split(' ')[1];
    verify(token, jwtKey, async (err, decoded) => {
      console.log('DECODED: ', decoded);
      if (!err && decoded) {
        return fn(req, res);
      }
      res.status(401).json({ message: 'Invalid or Bad Token' });
    });
  } else {
    res.status(401).json({ message: 'Sorry you are not authenticated' });
  }
};

export default authenticated(async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const connects = [{ name: 'Email ' }, { name: 'Sent' }];

  res.json(connects);
});
