const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Favorite = dbConnect.define('favorite', {
    flist_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false
    },
    rela_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
}, {
    freezeTableName: true
});


dbConnect.sync().then(() => {
    console.log('Favorite model sync ok');
}).catch(e => console.error(e));

module.exports = Favorite;