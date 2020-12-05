import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string
}

export default function register(req: NextApiRequest, res : NextApiResponse<Data>) {
  if (req.method === 'POST') {
    // Process a POST request
    res.send({ message: 'Working' });
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}
