// using import instead of require by setting "type": "module" in package.json
import express from 'express';
import cors from 'cors';
import database, { initialize } from './setup/database.js';
import initializeDatabase from './setup/models.js';
import setUpRoutes from './setup/routes.js';
// const router = require("./routes");
// const AppError = require("./utils/appError");
// const errorHandler = require("./utils/errorHandler");

// initialize app + set server port
const app = express();
const port = process.env.PORT;

// Middleware

// CORS config. Allowing only metro bundler for now
const corsOptions = {
  origin: 'https://localhost:8081',
};
app.use(cors(corsOptions));
// JSON parsing
app.use(express.json());
// sets the default dir from which to serve static assets
app.use(express.static('public'));
// converts form data to JSON?
app.use(
  express.urlencoded({
    extended: false,
    limit: '64mb',
  })
);
// adds all route modules to app
setUpRoutes(app);

// sets up models + associations and syncs the db
initializeDatabase().then(() => {
  app.listen(port, () =>
    console.log(`Server started, listening port: ${port}`)
  );
});

// connect to db + start the server

// async function testDatabaseConnection() {
//   try {
//     await database.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// testDatabaseConnection();
