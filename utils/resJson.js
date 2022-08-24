const ResultJson = {
  success: (params) => {
    return {
      code: 0,
      data: params.data || {},
      msg: params.msg || '操作成功'
    }
  },
  fail: (params) => {
    return {
      code: params.code || 1,
      data: params.data || {},
      msg: params.msg || '操作失败',
      error_code: params.errorCode || 1 // 返回接口异常信息码
    }
  }
}

module.exports = ResultJson