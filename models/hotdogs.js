// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require('bcryptjs');
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const Hotdog = sequelize.define('Hotdog', {
    // The email cannot be null, and must be a proper email before creation
    hotdogName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    buns: {
      type: Sequelize.BOOLEAN,
      default:1,
      allowNull: false
    },
    // The password cannot be null
    toppings: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // The password cannot be null
    meat: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });
 
  
  return Hotdog;
};
