// Setting up the Backend
// - set up User model
// - define what routes will be used
// - create routes
// - make controllers for each route
//   - parse incoming requests
//   - format appropriate DB write/read
//   - perform action on DB
//   - format response
//   - send response
// - figure out basic security for routes
// - implement auth



// Pre - production deployment
// - add authentication
// - reconfigure CORS once app is deployed
// - rate-limit authentication attempts + lock out after failed attempts
// - use https
// - set secure: true in express-session init to use https

// Performance enhancements
// - cache static files for production https://expressjs.com/en/advanced/best-practice-performance.html#use-a-reverse-proxy

// Features
// - add ability to share sessions / spots with specific users
// - ability to add photos to sessions + spots
// - create database if not exists
