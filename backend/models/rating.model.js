const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Rating = dbConnect.define('rating', {
    rate_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false
    },
    rela_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});


dbConnect.sync().then(() => {
    console.log('Rating model sync ok');
}).catch(e => console.error(e));

module.exports = Rating;