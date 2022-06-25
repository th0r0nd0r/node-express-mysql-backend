import Sequelize from 'sequelize';
import database from '../setup/database';

export default Session = database.define('session', {
  notes: {
    type: Sequelize.TEXT,
    validate: {
      len: {
        args: [0, 10000],
        msg: 'Notes cannot exceed 10,000 characters',
      },
    },
    rating: {
      type: Sequelize.INTEGER,
      validate: {
        min: 1,
        max: 10,
      },
    },
    time: {
      type: Sequelize.DATE,
    },
    length: {
      type: Sequelize.FLOAT,
      validate: {
        min: 0,
        max: 24,
      },
    },
    swellRating: {
      type: Sequelize.INTEGER,
      validate: {
        min: 1,
        max: 10,
      },
    },
    windRating: {
      type: Sequelize.INTEGER,
      validate: {
        min: 1,
        max: 10,
      },
    },
    tideRating: {
      type: Sequelize.INTEGER,
      validate: {
        min: 1,
        max: 10,
      },
    },
    crowdRating: {
      type: Sequelize.INTEGER,
      validate: {
        min: 1,
        max: 10,
      },
    },
    waveHeight: {

    },
    forecastWaveHeight: {

    },
    forecastSwellHeight: {

    },
    forecastSwellPeriod: {

    },
    forecastSwellAngle: {

    },
    forecastWind: {

    },
    forecastSource: {

    },

  },
});
