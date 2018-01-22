'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    rank: DataTypes.NUMERIC,
    rating: DataTypes.STRING,
    title: DataTypes.NUMERIC
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Movie;
};