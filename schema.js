// laying out the schema for the models in the app

// User
// - id
// - accessToken
// - name
// - password
// maybe include phone verification stuff

// Spot
// - id
// - name
// - location
// include forecast urls eventually

// Session
// - id
// - spotId (fk)
// - userId (fk)
// - notes
// - rating
// - date/time
// optional:
// - forecast (MSW)
// - forecast (surfline)
// - buoy data

// Forecast
// - id
// - sessionId (fk)
// - forecastingService (MSW, surfline, etc.)
// - angle
// - period
// - height
// - wind speed
// - wind angle

// Buoy data
// - id
// - angle
// - period
// - height
// - location

// eventually the goal is to set up a selenium worker or similar to pull data
// from forecasting sites + buoy data