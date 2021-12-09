const { dbConnect, DataTypes} = require('../connectDB');

const Search = dbConnect.define('search', {
    search_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }
}, {
    freezeTableName: true
});

module.exports = Search;