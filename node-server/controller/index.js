const { listJson, infoJson } = require('./data.js')

module.exports = {
  frontList: async ctx => {
    ctx.body = listJson
  },
  frontInfo: async ctx => {
    ctx.body = infoJson
  }
}
