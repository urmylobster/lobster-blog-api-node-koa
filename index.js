const Koa = require('koa')
const moment = require('moment');
const Logger = require("koa-logger"); // 日志中间件
const bodyParser = require("koa-bodyparser"); // post请求中间件
const router = require('./router')


// 日志中间件
// const logger = async (ctx, next) => {
//   console.log(moment().format('YYYY-MM-DD HH:mm:ss'), `${ctx.request.method}-${ctx.request.url}`)
//   await next()
// }
const logger = new Logger(str => {
  console.log(moment().format('YYYY-MM-DD HH:mm:ss')+ str)
})

const Port = process.env.PORT || 3000


// 创建Koa实例
const app = new Koa()

// 中间件挂载
app.use(bodyParser());
app.use(logger)

// 路由加载
app.use(router.routes()).use(router.allowedMethods)

app.listen(Port, () => {
  console.log(`koa is running at port: ${Port}`)
})