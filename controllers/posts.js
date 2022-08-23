const PostService = require('../service/posts')

const PostController = {
  deleteById: async (ctx, next) => {
    const postId = ctx.params.id
    const data =  await PostService.deleteById(postId)
    ctx.body = {
      code: 0,
      data,
      msg: "success",
    }
  },

  list: async (ctx, next) => {
    const res = await PostService.list()
    ctx.body = {
      code: 0,
      data: res,
      msg: "success",
    }
  }
}

module.exports = PostController