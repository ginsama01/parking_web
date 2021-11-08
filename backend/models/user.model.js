const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const User = dbConnect.define('user', {
    user_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false,
        
        /*references: {
            model: Account,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }*/
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
    }
}, {
    freezeTableName: true
});



dbConnect.sync().then(() => {
    console.log('User model sync ok');
}).catch(e => console.error(e));

module.exports = User;