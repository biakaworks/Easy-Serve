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
      default: true,
      allowNull: false,
    },
    toppings: {
        type: DataTypes.BOOLEAN,
        default: true,
        allowNull: false
      },
    meat: {
        type: DataTypes.BOOLEAN,
        default: true,
        allowNull: false
      },
    sauce: {
        type: DataTypes.BOOLEAN,
        defautl: true,
        allowNull: false
      }});
 
  
  return Hotdog;
};
