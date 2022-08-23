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
      where: {
        post_id: id,
      },
    });
  }

  async insert(post) {
    return Posts.create(post);
  }

  async list() {
    return Posts.findAll({
      attributes: ['post_title', 'post_author', 'post_content']
    })
  }

  async update(id) {
    Posts.update(post, {
      where: {
        post_id: id,
      },
    });
  }
}

module.exports = new PostService();