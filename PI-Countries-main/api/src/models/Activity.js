const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: UUIDV4
    },
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 1
      }
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autum', 'Winter', 'Spring'),
      allowNull: false,
    },
  });
};
