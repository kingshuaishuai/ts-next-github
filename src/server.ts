import * as Koa from "koa";
import * as next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  server.use(async (ctx: { req: any; res: any; respond: boolean; }) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
  });
});
