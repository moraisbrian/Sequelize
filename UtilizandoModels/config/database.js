module.exports = {
  username: "postgres",
  password: "postgres",
  database: "Api",
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: true
  }
}

/*
module.exports = {
  database: 'Teste',
  username: 'sa',
  password: 'admin',
  host: 'localhost',
  dialect: 'mssql',
  port: 1433,
  dialectOptions: {
    options: {
      instaceName: 'SQLEXPRESS',
      validateBulkLoadParameters: true
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: true
  }
}
*/