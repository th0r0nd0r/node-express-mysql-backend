import { BuoyData, Forecast, Session, Spot, User } from '../models.js';

// User

User.hasMany(Session, { foreignKey: { allowNull: false } });

// Session

Session.belongsTo(User);
Session.belongsTo(Spot);

// Spot

Spot.hasMany(Session, { foreignKey: { allowNull: false } });
