import { Options, Sequelize } from 'sequelize';
import config from '../../config/database';

const sequelize = new Sequelize(<Options>config.development);

export { sequelize };