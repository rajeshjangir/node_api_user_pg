//const { createPool } = require("mysql");
const sql = require("mssql");


const conn_str = 'Server=localhost,1443;Database=Orange_Data;User Id=sa;Password=India@901;Encrypt=true'
var sqlconfig = {
  "user": 'sa',
  "password": 'India@901',
  "server": 'PROFESSOR',
  "database": 'Orange_Data',
  "port": 1443, // make sure to change port
  "dialect": "mssql",
  "dialectOptions": {
      "instanceName": "SQLEXPRESS"
  },
  "synchronize": true,
  "trustServerCertificate": true
};
const config = {
  user: 'sa',
  password: 'India@901',
  server: `localhost\\SQLEXPRESS`,
  database: 'Orange_Data',
  pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
  },
  extra: {
    trustServerCertificate: true,
  }
}

//const pool = new sql.Connection(config)

const pool = async (sqlQuery) => {
  try {
   // make sure that any items are correctly URL encoded in the connection string
   console.log('start')

   await sql.connect(sqlconfig)
   console.log('connected')
   const result = await sql.query(sqlQuery) //`select * from mytable where id = ${value}`
   console.log(result)
   return result
  } catch (err) {
    console.log(err.message)
   // ... error checks
  }
 }

// const pool = createPool({
//   host: process.env.MYSQL_HOST,
//   port: process.env.MYSQL_PORT,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   connectionLimit: 10
// });

module.exports = pool;
