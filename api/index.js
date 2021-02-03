// 依赖导入
const axios = require('axios')
// 所有发送数据的返回结果
const result = {}
//==========================云端环境变量的判断与接收=========================

// ===================== pushPlus设置区域 =================================
// pushPlus - token
const PUSH_PLUS_TOKEN = process.env.PUSH_PLUS_TOKEN
// pushPlus - topic
const PUSH_PLUS_TOPIC = process.env.PUSH_PLUS_TOPIC

//==========================云端环境变量的判断与接收=========================

/* pushPlus推送 */
async function pushPlus(title, content) {
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
    result.pushPlus = res.data
    return res
  } else {
    return '没有设置PUSH_PLUS_TOKEN'
  }
}

module.exports = async (req, res) => {
  // 获取用户设置的TOKEN
  const TOKEN = process.env.TOKEN

  // 获取请求传入的token参数
  let requestData = {}
  if (req.method === 'GET') {
    requestData = req.query || {}
  } else {
    requestData = req.body || {}
  }
  const { token, title, content } = requestData
  if (TOKEN !== token) {
    res
      .status(200)
      .send(
        returnMessage(401, `你的token与设置的token不同，且标题与内容是必须参数`)
      )
    return
  }
  if (title && content) {
    // 如果相等时
    await pushPlus(title, content)
    res.status(200).send(returnMessage(200, '消息已全部发送完毕'))
  }
}
// 返回信息的格式

function returnMessage(code, message) {
  const obj = {
    code: code || 401,
    message: message || '与用户设置的TOKEN不相同，请检查后再试',
    result
  }
  return obj
}
