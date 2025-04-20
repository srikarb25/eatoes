module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false, unique: true }
  });
};
