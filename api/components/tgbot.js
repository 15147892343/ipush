/**
 * @description: tg机器人推送
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-02-11 11:19:21
 * @LastEditTime: 2021-02-11 11:19:22
 * @LastEditors: 小康
 */
// 依赖导入
const axios = require('axios')
const { TG_BOT_TOKEN, CHAT_ID } = require('../config')

module.exports = async function tgbot(title, content) {
  if (TG_BOT_TOKEN && CHAT_ID) {
    // 用户的token
    const url = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`
    const sendObj = {
      chat_id: CHAT_ID,
      text: `${title}\n\n${content}`
    }

    const res = await axios.post(url, { ...sendObj })
    return res.data
  } else {
    return '没有设置TG故没有进行TG的推送！'
  }
}
