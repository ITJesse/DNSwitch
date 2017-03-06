const Koa = require('koa');
const logger = require('koa-logger');
const route = require('koa-route');
const serve = require('koa-static');

const app = new Koa();

app.use(logger());
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
  }
});
app.use(route.get('/', serve('public')));

console.log('Web server listening on 80');

app.listen(80);
