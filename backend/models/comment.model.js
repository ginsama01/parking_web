const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Comment = dbConnect.define('comment', {
    cmt_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false
    },
    rela_id: {
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
    console.log('Comment model sync ok');
}).catch(e => console.error(e));

module.exports = Comment;