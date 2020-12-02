import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: string
}

export default function handler(req: NextApiRequest, res : NextApiResponse<Data>) {
  if (req.method === 'POST') {
    // Process a POST request
    res.send({ status: 'Working' });
  } else {
    res.statusCode = 400;
    res.end('Not allowed');
  }
}
