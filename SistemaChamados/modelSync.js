const database = require('./app/models');

database.sync().then(() => console.log('BANCO DE DADOS SINCRONIZADO'));