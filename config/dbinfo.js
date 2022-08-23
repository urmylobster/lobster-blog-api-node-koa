// 在dbinfo.js文件中,配置数据库相关信息
const dotenv = require('dotenv')
dotenv.config()

const config = {
  database: process.env['DB_NAME'], // 数据库名称
  username: process.env['DB_USERNAME'], // 用户名
  password: process.env['DB_PASSWORD'], // 密码
  host: process.env['DB_HOST'], // 主机地址
  port: process.env['DB_PORT'], // 端口号
  dialect: process.env['DB_DIALECT'], //数据库类型，支持: 'mysql', 'sqlite', 'postgres', 'mssql'
  logging: (...msg) => console.log(msg), // 启用日志打印 function | 关闭false
};


module.exports = config; // 将配置导出
