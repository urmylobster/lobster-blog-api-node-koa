const { Posts } = require('../models/posts')

class PostService {
  async deleteById(id) {
    return Posts.update({
      post_isdeleted: 1,
    }, {
      where: {
        post_id: id,
      }
    })
  }

  async deleteByIdPermanent(id) {
    return Posts.destroy({
      where: {
        post_id: id,
      },
    });
  }

  async deleteAll() {
    return Posts.destroy();
  }

  async getById(id) {
    return Posts.findAll({
      attributes: {
        exclude: ['post_id', 'post_isdeleted']
      },
      where: {
        post_id: id,
      },
    });
  }

  async insert(post) {
    return Posts.create({
      post_title: post.postTitle,
      post_author: post.postAuthor,
      post_content: post.postContent
    });
  }

  async list() {
    return Posts.findAll({
      attributes: ['post_title', 'post_author', 'post_content']
    })
  }

  async update(post,id) {
    return Posts.update({
      post_title: post.postTitle,
      post_author: post.postAuthor,
      post_content: post.postContent
    }, {
      where: {
        post_id: id,
      },
    });
  }
}

module.exports = new PostService();