const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Chat = dbConnect.define('chat', {
    chat_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    user1_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user2_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    freezeTableName: true
});


// dbConnect.sync().then(() => {
//     console.log('Chat model sync ok');
// }).catch(e => console.error(e));

module.exports = Chat;