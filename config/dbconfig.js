const {
  MYSQL_PORT: port,
  HOST: host,
  DATABASE_DIALECT: dialect,
  DATABASE_NAME: database_name,
  MYSQL_USERNAME: username,
  MYSQL_PASSWORD: password,
} = process.env;

export default {
  port,
  host,
  dialect,
  database_name,
  username,
  password,
};
