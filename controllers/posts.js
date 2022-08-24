const { getById } = require('../service/posts');
const PostService = require('../service/posts')
const resJson = require('../utils/resJson');

const PostController = {
  list: async (ctx, next) => {
    const res = await PostService.list()
    ctx.body = resJson.success({ data: res})
  },

  getById: async (ctx, next) => {
    const postId = ctx.params.id || ctx.query.id
    const res =  await PostService.getById(postId)
    ctx.body = resJson.success({ data: res })
  },

  deleteById: async (ctx, next) => {
    const postId = ctx.params.id
    const res =  await PostService.deleteById(postId)
    if(res[0] > 0) {
      ctx.body = resJson.success({ data })
    } else {
      ctx.body = resJson.fail({ msg: '未找到该数据'})
    }
  },

  insert: async (ctx, next) => {
    const { postTitle,postAuthor, postContent } = ctx.request.body
    const res = await PostService.insert({ postTitle,postAuthor, postContent })
    ctx.body = resJson.success({ msg: "新增文章成功", data: res})
  },

  update: async (ctx, next) => {
    const { postTitle,postAuthor, postContent, postId } = ctx.request.body
    const res = await PostService.update({ postTitle,postAuthor, postContent }, postId)
    if(res[0] > 0) {
      ctx.body = resJson.success({ msg: "更新文章成功", data: res})
    } else {
      ctx.body = resJson.fail({ msg: '未找到该数据'})
    }
  }
}

module.exports = PostController