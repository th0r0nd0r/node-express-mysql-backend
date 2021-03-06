import Sequelize from 'sequelize';
import database from '../setup/database.js';

const User = database.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: {
      msg: 'Username already exists',
    },
    validate: {
      len: {
        args: [4, 15],
        msg: 'Usernames must be between 4 and 15 characters',
      },
    },
    set(username) {
      this.setDataValue('username', username.trim());
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
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
    set(email) {
      this.setDataValue('email', email.trim());
    },
  },
  password: {
    type: Sequelize.STRING.BINARY,
    allowNull: false,
    validate: {
      len: {
        args: [0, 60],
      },
    },
  },
});

export default User;
