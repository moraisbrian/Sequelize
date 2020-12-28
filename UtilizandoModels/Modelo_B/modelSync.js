const sequelize = require('./app/models');

(async () => {
    await sequelize.sync();
})();