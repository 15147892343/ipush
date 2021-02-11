/**
 * @description: 密钥配置文件
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-02-11 11:15:46
 * @LastEditTime: 2021-02-11 11:15:46
 * @LastEditors: 小康
 */

//==========================云端环境变量的判断与接收=========================

// ===================== 获取用户设置的TOKEN ===============================
const TOKEN = process.env.TOKEN || '1'

// ===================== pushPlus设置区域 =================================
// pushPlus - token
const PUSH_PLUS_TOKEN = process.env.PUSH_PLUS_TOKEN
// pushPlus - topic
const PUSH_PLUS_TOPIC = process.env.PUSH_PLUS_TOPIC

// ===================== 钉钉webhook推送 =================================
// 钉钉 - token
const DD_BOT_TOKEN = process.env.DD_BOT_TOKEN
// 钉钉 - 密钥
const DD_BOT_SECRET = process.env.DD_BOT_SECRET

// ===================== tg机器人推送 =================================
// tg - TOKEN
const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN
// tg - userID
const CHAT_ID = process.env.CHAT_ID

//==========================云端环境变量的判断与接收=========================

module.exports = {
  TOKEN,
  // pushplus
  PUSH_PLUS_TOKEN,
  PUSH_PLUS_TOPIC,
  // 钉钉
  DD_BOT_TOKEN,
  DD_BOT_SECRET,
  // TG机器人
  TG_BOT_TOKEN,
  CHAT_ID
}
