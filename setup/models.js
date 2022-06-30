import models from '../models/index.js';
const { Session, Spot, User } = models;
import { initialize as initializeDatabase } from './database.js';

// User

User.hasMany(Session, { foreignKey: { allowNull: false } });

// Session

Session.belongsTo(User);
Session.belongsTo(Spot);

// Spot

Spot.hasMany(Session, { foreignKey: { allowNull: false } });

export default initializeDatabase;
