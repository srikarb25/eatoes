const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.POSTGRES_URI, {
  dialect: 'postgres',
  logging: false
});

const User = require('./userModel')(sequelize, DataTypes);
const Order = require('./orderModel')(sequelize, DataTypes);

// Set associations
Order.associate({ User });

// Export all
User.hasMany(Order);
Order.belongsTo(User);
module.exports = {
  sequelize,
  User,
  Order
};
