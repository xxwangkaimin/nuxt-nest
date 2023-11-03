const router = require('koa-router')()
const controller = require('../controller/index')
router.prefix('/api/article')
router.get('/front/list', controller.frontList)
router.get('/front/info', controller.frontInfo)

module.exports = router
