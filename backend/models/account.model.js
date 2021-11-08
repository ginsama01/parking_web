const { dbConnect, DataTypes} = require('../connectDB');

const Account = dbConnect.define('account', {
    id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER
    },
    image_url: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

dbConnect.sync().then(() => {
    console.log('Account model sync ok');
}).catch(e => console.error(e));

module.exports = Account;

