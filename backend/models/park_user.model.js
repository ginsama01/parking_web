const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Park_User = dbConnect.define('park_user', {
    rela_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false
    },
    park_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    user_id: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});


dbConnect.sync().then(() => {
    console.log('Park_User model sync ok');
}).catch(e => console.error(e));

module.exports = Park_User;