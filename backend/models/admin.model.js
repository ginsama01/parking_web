const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Admin = dbConnect.define('admin', {
    admin_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false,
        
        /*references: {
            model: Account,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }*/
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});


dbConnect.sync().then(() => {
    console.log('Admin model sync ok');
}).catch(e => console.error(e));

module.exports = Admin;