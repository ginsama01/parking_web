const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Chat = dbConnect.define('chat', {
    chat_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false
    },
    user1_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    user2_id: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    freezeTableName: true
});


dbConnect.sync().then(() => {
    console.log('Chat model sync ok');
}).catch(e => console.error(e));

module.exports = Chat;