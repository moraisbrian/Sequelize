const Sequelize = require('sequelize');
const config = require('../../config/database');

const Called = require('./Called');
const Message = require('./Message');
const User = require('./User');
const Subject = require('./Subject');
const Evaluation = require('./Evaluation');
const Priority = require('./Priority');
const Situation = require('./Situation');
const Status = require('./Status');

const sequelize = new Sequelize(config);

User.init(sequelize);
Message.init(sequelize);
Called.init(sequelize);
Subject.init(sequelize);
Evaluation.init(sequelize);
Priority.init(sequelize);
Situation.init(sequelize);
Status.init(sequelize);

Message.belongsTo(Called);
Message.belongsTo(User);
User.hasMany(Message);
Called.hasMany(Message);
Called.belongsTo(Subject);
Called.belongsTo(Evaluation);
Called.belongsTo(Priority);
Called.belongsTo(Status);
Called.belongsTo(Situation);
Subject.hasMany(Called);
Evaluation.hasMany(Called);
Priority.hasMany(Called);
Situation.hasMany(Called);
Status.hasMany(Called);

module.exports = sequelize;