const express = require("express");
const cors = require("cors");
// const router = require("./routes");
// const AppError = require("./utils/appError");
// const errorHandler = require("./utils/errorHandler");

// initialize app + set server port
const app = express();
const server = {port: 3000};

// apply middleware (cors for CORS config and express.json for parsing requests
app.use(cors());
app.use(express.json());

