import Sequelize from 'sequelize';
import dbconfig from '../config/dbconfig.js';
const { port, host, dialect, database_name, username, password } = dbconfig;

const database = new Sequelize(database_name, username, password, {
  port,
  host,
  dialect,
});

export const initialize = () => {
  // setting force: true wipes db
  return database
    .sync({ force: false })
    .then(() => console.log('database synced'))
    .catch((err) => {
      console.log(`database sync failed with error: ${err}`);
      throw err;
    });
};

export default database;
