const { sequelize, Sequelize } = require('../config/connect')

const Posts = sequelize.define(
  "post",
  {
    post_id:  {
      type: Sequelize.INTEGER, // 字段类型
      allowNull: false, // 是否允许为空
      primaryKey: true, // 是否主键
      autoIncrement: true // 自动增长
    },
    post_author: {
      type: Sequelize.STRING, // 字段类型
      allowNull: false, // 是否允许为空
    },
    post_title: {
      type: Sequelize.STRING, // 字段类型
      allowNull: false, // 是否允许为空
    },
    post_content: {
      type: Sequelize.TEXT, // 字段类型
      allowNull: false, // 是否允许为空
    },
    post_isdeleted: {
      type: Sequelize.INTEGER, // 字段类型
      allowNull: true, // 是否允许为空
      default: 0
    },
  },
  {
    timestamps: false  // 不自动生成时间,关闭'createdAt','updatedAt'字段
  }
)

Posts.sync({ force: false })
// sync({force: option})，
// option为true，强制同步，先删除表，然后新建；
// option为false，新增一条记录。 若要初始化多条数据，使用bulkCreate

module.exports = {
  Posts
}