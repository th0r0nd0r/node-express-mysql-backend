import {
  BuoyDataModel,
  ForecastModel,
  SessionModel,
  SpotModel,
  UserModel,
} from '../models';

// User

User.hasMany(SessionModel, { foreignKey: 'sessionId', as: 'sessions' });

// Session

// Spot
