import Sequelize from 'sequelize';
import database from '../setup/database.js';

const User = database.define('user', {
  username: {
    type: Sequelize.STRING,
    validate: {
      len: {
        args: [4, 15],
        msg: 'Usernames must be between 4 and 15 characters',
      },
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: {
      msg: 'Incorrect email and password combination',
    },
    validate: {
      len: {
        args: [0, 150],
        msg: 'Email is too long',
      },
      isEmail: {
        msg: 'Please provide a valid email address',
      },
    },
  },
  password: {
    type: Sequelize.STRING.BINARY,
    validate: {
      len: {
        args: [0, 60],
      },
    },
  },
});

export default User;
