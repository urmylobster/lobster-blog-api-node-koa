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
      msg: params.msg || '操作失败'
    }
  }
}

module.exports = ResultJson