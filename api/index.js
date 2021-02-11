// 所有发送数据的返回结果
const result = {}
const pushPlus = require('./components/pushplus')

module.exports = async (req, res) => {
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
    result.pushplus = await pushPlus(title, content)
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
