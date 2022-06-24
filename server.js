// using import instead of require by setting "type": "module" in package.json
import express from 'express';
import cors from 'cors';
import database from './setup/database';
// const router = require("./routes");
// const AppError = require("./utils/appError");
// const errorHandler = require("./utils/errorHandler");

// initialize app + set server port
const app = express();
const port = process.env.PORT;

// apply middleware

// CORS config
app.use(cors());
// JSON parsing
app.use(express.json());
// sets the default dir from which to serve static assets
app.use(express.static('public'));

// defining basic routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// connect to db + start the server
database
  .connect()
  .then(() =>
    app.listen(port, () =>
      console.log(`Server started, listening port: ${port}`)
    )
  )
  .catch((err) => console.log(err));

// TODO: cache static files for production https://expressjs.com/en/advanced/best-practice-performance.html#use-a-reverse-proxy
