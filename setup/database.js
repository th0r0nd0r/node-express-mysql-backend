import Sequelize from 'sequelize';

const {
  MYSQL_PORT: port,
  HOST: host,
  DATABASE_DIALECT: dialect,
  DATABASE_NAME: database_name,
  MYSQL_USERNAME: username,
  MYSQL_PASSWORD: password,
} = process.env;

export default new Sequelize(database_name, username, password, {
  port,
  host,
  dialect,
});
