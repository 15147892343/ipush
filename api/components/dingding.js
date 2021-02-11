/**
 * @description: 钉钉机器人推送
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-02-11 11:43:29
 * @LastEditTime: 2021-02-11 11:43:30
 * @LastEditors: 小康
 */
const axios = require('axios')

const { DD_BOT_TOKEN, DD_BOT_SECRET } = require('../config')
module.exports = async function DDTalk(title, content) {
  if (DD_BOT_TOKEN) {
    const crypto = require('crypto')
    const dateNow = Date.now()
    const hmac = crypto.createHmac('sha256', DD_BOT_SECRET)
    hmac.update(`${dateNow}\n${DD_BOT_SECRET}`)
    const result = encodeURIComponent(hmac.digest('base64'))
    const url = `https://oapi.dingtalk.com/robot/send?access_token=${DD_BOT_TOKEN}&timestamp=${dateNow}&sign=${result}`
    const sendObj = {
      msgtype: 'text',
      text: {
        content: `${title}\n\n${content}`
      }
    }

    const res = await axios.post(url, { ...sendObj })
    return res.data
  } else {
    return '没有设置 钉钉推送 故没有进行钉钉的推送！'
  }
}
