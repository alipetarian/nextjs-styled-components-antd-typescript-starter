import type { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res : NextApiResponse<any>) {
  return res.status(200).json({ message: 'Hello World' });
}
