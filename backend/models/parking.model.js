const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Parking = dbConnect.define('parking', {
    parking_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    rela_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});


// dbConnect.sync().then(() => {
//     console.log('Parking model sync ok');
// }).catch(e => console.error(e));

module.exports = Parking;