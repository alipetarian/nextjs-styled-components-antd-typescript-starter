import { verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const jwtKey = process.env.CI_JWT_SECRET_KEY || '';

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  verify(req.cookies.auth!, jwtKey, async (err, decoded) => {
    if (!err && decoded) {
      return fn(req, res);
    }
    res.status(401).json({ message: 'Sorry you are not authenticated' });
  });
};

export default authenticated(async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const connects = [{ name: 'Ahmed' }, { name: 'Ali' }];

  res.json(connects);
});
