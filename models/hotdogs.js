// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require('bcryptjs');
// Creating our Hotdog Menu and Options
module.exports = function (sequelize, DataTypes) {
  const Hotdog = sequelize.define('Hotdog', {
    hotdogName: {
      type: DataTypes.STRING,
      },
    buns: {
      type: Datatypes.BOOLEAN,
      default: 1,
      allowNull: false,
    },
    toppings: {
        type: DataTypes.BOOLEAN,
        default: 1,
        allowNull: false
      },
    meat: {
        type: DataTypes.BOOLEAN,
        default: 1,
        allowNull: false
      },
    sauce: {
        type: DataTypes.BOOLEAN,
        defautl: 1,
        allowNull: false
      }});
`` 
Hotdog.associate = function(models) {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  Hotdog.belongsTo(models.Table, {
    foreignKey: {
      allowNull: false
    }
  });
};
  return Hotdog;
};
