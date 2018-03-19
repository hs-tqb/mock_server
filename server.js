const Koa = require('koa')
const app = new Koa()
const apis = require('./apis')

const host = '';
const port = 5555

app
 .use(apis.routes())
 .use(apis.allowedMethods());

app.listen(port, host)
console.log( `server running at ${host||'localhost'}:${port||'3000'}` );