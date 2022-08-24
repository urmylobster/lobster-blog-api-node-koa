const Router = require('koa-router')
const PostController = require('../controllers/posts')

const router = new Router({
  prefix: '/posts',
})

router.get('/list', PostController.list)
router.get('/getById/:id?', PostController.getById)
router.get('/deleteById/:id', PostController.deleteById)
router.post('/insert', PostController.insert)
router.post('/update', PostController.update)

module.exports = router