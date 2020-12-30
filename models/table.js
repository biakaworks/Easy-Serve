// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require('bcryptjs');
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const Table = sequelize.define('Table', {
    // The email cannot be null, and must be a proper email before creation
    tableNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    drinks: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The password cannot be null
    sides: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // The password cannot be null
    icecream: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });
 
  
  return Table;
};
