const { Posts } = require('./posts')

// 增加单条
Posts.create({
  'post_title': 'learn koa using sequelize orm',
  'post_author': 'Alex',
  'post_content': 'learn koa 2.x curd application'
})

// 批量增加
Posts.bulkCreate([{
  'post_title': 'learn bulk create1',
  'post_author': 'Alex',
  'post_content': 'learn bulk test'
},
{
  'post_title': 'learn bulk create2',
  'post_author': 'Alex',
  'post_content': 'learn sequelize'
}])