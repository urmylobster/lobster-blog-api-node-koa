const Router = require('koa-router')
const PostController = require('../controllers/posts')

const router = new Router({
  prefix: '/posts',
})

router.get('/list', PostController.list)
router.get('/deleteById/:id', PostController.deleteById)


module.exports = router