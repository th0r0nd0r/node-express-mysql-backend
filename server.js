const express = require("express");
const cors = require("cors");
// const router = require("./routes");
// const AppError = require("./utils/appError");
// const errorHandler = require("./utils/errorHandler");

// initialize app + set server port
const app = express();
const port = 3000;

// apply middleware 

// CORS config
app.use(cors());
// JSON parsing
app.use(express.json());
// sets the default dir from which to serve static assets
app.use(express.static('public'));



// defining basic routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// start the server
app.listen( port , () => console.log(`Server started, listening port: ${port}`));
