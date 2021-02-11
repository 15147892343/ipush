/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-02-11 11:15:46
 * @LastEditTime: 2021-02-11 11:15:46
 * @LastEditors: 小康
 */

//==========================云端环境变量的判断与接收=========================

// ===================== 获取用户设置的TOKEN ===============================
const TOKEN = process.env.TOKEN

// ===================== pushPlus设置区域 =================================
// pushPlus - token
const PUSH_PLUS_TOKEN = process.env.PUSH_PLUS_TOKEN
// pushPlus - topic
const PUSH_PLUS_TOPIC = process.env.PUSH_PLUS_TOPIC

//==========================云端环境变量的判断与接收=========================

module.exports = {
  TOKEN,
  PUSH_PLUS_TOKEN,
  PUSH_PLUS_TOPIC
}
