const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Pending = dbConnect.define('pending', {
    pending_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false
    },
    rela_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    freezeTableName: true
});


dbConnect.sync().then(() => {
    console.log('Pending model sync ok');
}).catch(e => console.error(e));

module.exports = Pending;