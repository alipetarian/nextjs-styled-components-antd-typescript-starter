import express, { Request, Response } from 'express';
import nextjs from 'next';
import cookieParser from 'cookie-parser';

const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({ dev });
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
    server.use(cookieParser());
    server.all('*', (req: Request, res: Response) => handle(req, res));

    // server.use((req : Request, res: Response, next) => {
    //   console.log('New Request: ', req.method, req.path);
    //   next();
    // });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
