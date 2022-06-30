import home from '../routes/home.js';
import usersRegister from '../routes/users/register.js';
import usersLogin from '../routes/users/login.js';

export default (app) => {
  app.use('/', home);
  app.use('/users/register', usersRegister);
  app.use('/users/login', usersLogin);
};
