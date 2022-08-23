const config = require('./dbinfo')
const Sequelize = require('sequelize')

// 创建连接实例
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
    host: config.host,
    port: config.port,
    logging: config.logging,
    pool: {
      min: 0,
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
    //解决中文输入问题
    define: {
      charset: 'utf8',
      dialectOptions: {
          collate: 'utf8_general_ci'
      }
    }
  }
)

// 测试连接是否成功
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.')
}).catch(err => {
    console.log('Unable to connect to the database', err)
})

module.exports = {
  sequelize,
  Sequelize
}