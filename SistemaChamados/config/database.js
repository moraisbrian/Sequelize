module.exports = {
  username: "sa",
  password: "admin",
  database: "Chamados",
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    options: {
      instaceName: "SQLEXPRESS",
      validateBulkLoadParameters: true
    }
  },
  define: {
    timestamps: true,
    updatedAt: "UpdatedAt",
    createdAt: "CreatedAt"
  }
}