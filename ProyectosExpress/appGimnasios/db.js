const mysql = require('mysql');

const connect = ()=>{
    const pool = mysql.createPool({//sirve para hacer todas las consultas que yo quiera 
        host: '127.0.0.1',
        user: 'root',
        password: '',
        port: 3306,
        database: 'gymb9'
    });
    
    global.db = pool;

};

module.exports = {
    connect: connect
}