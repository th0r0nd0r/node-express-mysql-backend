import Sequelize from 'sequelize';
import database from '../setup/database.js';

const Spot = database.define('spot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.GEOMETRY('POINT', 4236),
    allowNull: false,
    get() {
      const location = this.getDataValue('location');
      const coordinates = location ? location.coordinates : undefined;

      return coordinates && coordinates[0]
        ? {
            latitude: coordinates[1],
            longitude: coordinates[0],
          }
        : undefined;
    },
    set(value) {
      value = value || { latitude: 0, longitude: 0 };

      this.setDataValue('location', {
        type: 'Point',
        coordinates: [value.longitude, value.latitude],
      });
    },
    defaultValue: () => {
      return {
        type: 'Point',
        coordinates: [0, 0],
      };
    },
  },
});

export default Spot;
