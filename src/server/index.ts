import express, { Request, Response } from 'express';
import next from 'next';

const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const apiPaths = {
  '/graphql': {
    target: process.env.CI_HASURA_GRAPQHL_ENDPOINT,
    pathRewrite: {
      '^/grapqhl': '/graphql',
    },
    changeOrigin: true,
  },
};

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use('/grapqhl', createProxyMiddleware(apiPaths['/graphql']));
    server.all('*', (req: Request, res: Response) => handle(req, res));
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
