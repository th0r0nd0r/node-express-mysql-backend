import Sequelize from 'sequelize';
import database from '../setup/database';

const forecastSources = [
  'magicseaweed',
  'surfline',
  'buoy',
  'surf-forecast',
  'metservice',
  'stormsurf',
];
const tidePhases = [ 'low', 'high', 'mid-rising', 'mid-falling' ];

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
    // defaulting to feet for now
    waveHeight: {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
        max: 150,
      },
    },
    forecastWaveHeight: {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
        max: 150,
      },
    },
    forecastSwellHeight: {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
        max: 150,
      },
    },
    forecastSwellPeriod: {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
        max: 30,
      },
    },
    forecastSwellAngle: {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
        max: 359,
      },
    },
    // defaulting to mph for now
    forecastWindStrength: {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
        max: 200,
      },
    },
    forecastWindAngle: {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
        max: 359,
      },
    },
    // feet for now
    forecastTideHeight: {
      type: Sequelize.FLOAT,
      validate: {
        min: -20,
        max: 60,
      },
    },
    forecastTidePhase: {
      type: Sequelize.STRING,
      validate: {
        isIn: [tidePhases],
        msg: 'Unrecognized tide phase',
      },
    },
    forecastSource: {
      type: Sequelize.STRING,
      validate: {
        isIn: [forecastSources],
        msg: 'Unrecognized forecast source',
      },
    },
  },
});
