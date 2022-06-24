import Sequelize from 'sequelize';

const {
  PORT: port,
  HOST: host,
  DATABASE_DIALECT: dialect,
  DATABASE_NAME: database_name,
  MSQL_USERNAME: username,
  MYSQL_PASSWORD: password,
} = process.env;

export default {
  connect: () =>
    new Sequelize(database_name, username, password, {
      port,
      host,
      dialect,
    }),
};
