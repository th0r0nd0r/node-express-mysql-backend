import session from 'express-session';
import dbconfig from '../config/dbconfig.js';
import MySQLStore from 'express-mysql-session';

const { port, host, dialect, database_name, username, password } = dbconfig;
const store = MySQLStore(session);

