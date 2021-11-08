const { dbConnect, DataTypes, Deferrable } = require('../connectDB');


const Park = dbConnect.define('park', {
    park_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        allowNull: false
    },
    own_id: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    total_space: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }, 
    description: {
        type: DataTypes.TEXT
    },
    image_url: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});


dbConnect.sync().then(() => {
    console.log('Park model sync ok');
}).catch(e => console.error(e));

module.exports = Park;