/**
 * @description: qmsg酱推送
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-02-11 14:04:22
 * @LastEditTime: 2021-02-11 14:04:22
 * @LastEditors: 小康
 */
// 依赖导入
const axios = require('axios')
const qs = require('qs')

const { QMSG_KEY, QMSG_TYPE, QMSG_QQ } = require('../config')

module.exports = async function qmsg(title, content) {
  if (QMSG_KEY && QMSG_TYPE && QMSG_QQ) {
    // 用户的token
    const url = `https://qmsg.zendee.cn/${QMSG_TYPE}/${QMSG_KEY}`
    const sendObj = {
      msg: `${title}\n\n${content}`,
      qq: QMSG_QQ
    }

    const res = await axios.post(url, qs.stringify(sendObj), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return res.data
  } else {
    return '没有设置qmsg故没有进行qmsg的推送！'
  }
}
