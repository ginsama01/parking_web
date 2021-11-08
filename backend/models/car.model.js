const { dbConnect, DataTypes, Deferrable } = require('../connectDB');

const Car = dbConnect.define('car', {
    number_plate: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    cartype: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});


dbConnect.sync().then(() => {
    console.log('Car model sync ok');
}).catch(e => console.error(e));

module.exports = Car;