import Sequelize from 'sequelize';
import database from '../setup/database';

const Spot = database.define('spot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.GEOMETRY('POINT', 4236),
    allowNull: true,
  },
});
