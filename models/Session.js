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
    },
    swellRating: {

    },
    windRating: {

    },
    tideRating: {

    },
    crowdRating: {

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
