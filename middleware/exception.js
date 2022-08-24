const { HttpException } = require('../utils/http-exception')

// 全局异常监听
const catchError = async(ctx, next) => {
  try {
    await next()
  } catch(error) {
    // 已知异常
    const isHttpException = error instanceof HttpException
    // 开发环境
    const isDev = process.env['NODE_ENV'] === 'dev'

    // 在控制台显示未知异常信息：开发环境下，不是HttpException 抛出异常
    if (isDev && !isHttpException) {
      throw error
    }

    /**
     * 是已知错误，还是未知错误
     * 返回：
     *      msg 错误信息
     *      error_code 错误码
     */
    if (isHttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode
      }
      ctx.response.status = error.code
    } else {
      ctx.body = {
        msg: '未知错误',
        error_code: 9999
      }
      ctx.response.status = 500
    }
  }
}

module.exports = catchError