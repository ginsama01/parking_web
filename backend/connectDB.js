const { Sequelize, DataTypes, Deferrable} = require('sequelize');
var config = require('./config');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(config.sql.name, config.sql.user, config.sql.pass, {
  host: config.sql.host,
  dialect: 'mysql'
});


let connectDB = async () => {
  try {
      await sequelize.authenticate();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}


module.exports = {
  dbConnect: sequelize,
  DataTypes: DataTypes,
  Deferrable: Deferrable
};
