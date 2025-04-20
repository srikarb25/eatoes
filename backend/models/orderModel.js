module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
      items: { type: DataTypes.JSON, allowNull: false },
      totalPrice: { type: DataTypes.FLOAT, allowNull: false }
    },{
        timestamps: true  // ✅ Needed for sorting by createdAt
      });
  
    Order.associate = (models) => {
      Order.belongsTo(models.User);
    };
  
    return Order;
  };
  