import Sequelize from 'sequelize';

const {
  MYSQL_PORT: port,
  HOST: host,
  DATABASE_DIALECT: dialect,
  DATABASE_NAME: database_name,
  MYSQL_USERNAME: username,
  MYSQL_PASSWORD: password,
} = process.env;

const database = new Sequelize(database_name, username, password, {
  port,
  host,
  dialect,
});

// setting force: true wipes db
database
  .sync({ force: false })
  .then(() => console.log('database synced'))
  .catch((err) => {
    console.log(`database sync failed with error: ${err}`);
    throw err;
  });

export default database;
