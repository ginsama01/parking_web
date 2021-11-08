const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Parking = dbConnect.define('parking', {
    parking_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false
    },
    rela_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    outAt: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    freezeTableName: true
});


dbConnect.sync().then(() => {
    console.log('Parking model sync ok');
}).catch(e => console.error(e));

module.exports = Parking;