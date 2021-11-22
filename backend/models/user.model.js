const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const User = dbConnect.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER
    },
    ssid: {
        type: DataTypes.BIGINT(12)
    },
    isactivated: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    penalty: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    freezeTableName: true
});



dbConnect.sync().then(() => {
    console.log('User model sync ok');
}).catch(e => console.error(e));

module.exports = User;