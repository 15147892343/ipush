/**
 * @description: pushPlus推送
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-02-11 11:19:21
 * @LastEditTime: 2021-02-11 11:19:22
 * @LastEditors: 小康
 */
// 依赖导入
const axios = require('axios')
const { PUSH_PLUS_TOKEN, PUSH_PLUS_TOPIC } = require('../config')

module.exports = async function pushPlus(title, content) {
  if (PUSH_PLUS_TOKEN) {
    // 用户的token
    const url = 'http://pushplus.hxtrip.com/send'
    const sendObj = {
      token: PUSH_PLUS_TOKEN,
      topic: PUSH_PLUS_TOPIC,
      title,
      content
    }

    const res = await axios.post(url, { ...sendObj })
    return res.data
  } else {
    return '没有设置PUSH_PLUS_TOKEN'
  }
}
