const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Owner = dbConnect.define('owner', {
    own_id: {
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
    }, 
    adminid: {
        type: DataTypes.STRING(30),
        
       /* references: {
            model: Admin,
            key: 'admin_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }*/
    }
}, {
    freezeTableName: true
});


dbConnect.sync().then(() => {
    console.log('Owner model sync ok');
}).catch(e => console.error(e));

module.exports = Owner;