const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.PG_USER || 'postgres',
    host: process.env.PG_HOST || 'localhost',
    database: process.env.PG_DB_NAME || 'postgres',
    password: process.env.PG_DB_PSW ,
    port: process.env.PG_PORT || 5432,
  })

module.exports = pool;
