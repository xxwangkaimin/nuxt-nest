const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

/** 处理请求参数 start **/
const bodyparser = require('koa-bodyparser')
app.use(bodyparser({
  enableTypes: [
    'json',
    'form',
    'text'
  ]
}))
/** 处理请求参数 end **/
/** 跨域处理 start **/
const cors = require('koa2-cors')

app.use(cors({
  credentials: true,
  allowMethods: [
    'GET',
    'POST',
    'OPTIONS'
  ],
  allowHeaders: [
    'Content-Type',
    'Authorization',
    'Accept'
  ]
}))
/** 跨域处理 end **/
/**
 * 路由
 * @type {any}
 */
const indexRouter = require('./router/index')
const json = require('koa-json')

app.use(indexRouter.routes()).use(router.allowedMethods()).use(json())
app.listen(4000)
console.log('[demo] start-quick is starting at port ' + 4000)
