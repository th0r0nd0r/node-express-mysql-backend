import models from '../models/index.js';
const { SurfSession, Spot, User } = models;
import { initialize as initializeDatabase } from './database.js';

// User

User.hasMany(SurfSession, { foreignKey: { allowNull: false } });

// SurfSession

SurfSession.belongsTo(User);
SurfSession.belongsTo(Spot);

// Spot

Spot.hasMany(SurfSession, { foreignKey: { allowNull: false } });

export default initializeDatabase;
