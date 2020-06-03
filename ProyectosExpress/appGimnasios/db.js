const mysql = require("mysql");

const connect = () => {
  const pool = mysql.createPool({
    //sirve para hacer todas las consultas que yo quiera
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  });

  global.db = pool;
};

module.exports = {
  connect: connect,
};
