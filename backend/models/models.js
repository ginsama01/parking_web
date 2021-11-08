const Account = require('./account.model');
const Admin = require('./admin.model');
const Owner = require('./owner.model');
const User = require('./user.model');
const Park = require('./park.model');
const Park_User = require('./park_user.model');
const Chat = require('./chat.model');
const Car = require('./car.model');
const Favorite = require('./favorite.model');
const Rating = require('./rating.model');
const Comment = require('./comment.model');
const Parking = require('./parking.model');
const Pending = require('./pending.model');

Owner.belongsTo(Account, {
    foreignKey: 'owner_id',
    targetKey: 'id'
});

Owner.belongsTo(Admin, {
    foreignKey: 'admin_id',
    targetKey: 'admin_id'
});

Admin.belongsTo(Account, {
    foreignKey: 'admin_id',
    targetKey: 'id'
});

User.belongsTo(Account, {
    foreignKey: 'user_id',
    targetKey: 'id'
});

//Reference between owner and park
Owner.hasMany(Park, {
    foreignKey: 'own_id',
    sourceKey: 'own_id'
});
Park.belongsTo(Owner, {
    foreignKey: 'own_id',
    targetKey: 'own_id'
});

//Reference between user and car
User.hasMany(Car, {
    foreignKey: 'user_id',
    sourceKey: 'user_id'
});
Car.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'user_id'
});

//Reference between user and park_user
User.hasMany(Park_User, {
    foreignKey: 'user_id',
    sourceKey: 'user_id'
});
Park_User.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'user_id'
});

//Reference between park and park_user
Park.hasMany(Park_User, {
    foreignKey: 'park_id',
    sourceKey: 'park_id'
});
Park_User.belongsTo(Park, {
    foreignKey: 'park_id',
    targetKey: 'park_id'
});


//Reference between comment and park_user
Park_User.hasMany(Comment, {
    foreignKey: 'rela_id',
    sourceKey: 'rela_id'
});
Comment.belongsTo(Park_User, {
    foreignKey: 'rela_id',
    targetKey: 'rela_id'
});

//Reference between favorite and park_user
Favorite.belongsTo(Park_User, {
    foreignKey: 'rela_id',
    targetKey: 'rela_id'
});

//Reference between rating and park_user
Rating.belongsTo(Park_User, {
    foreignKey: 'rela_id',
    targetKey: 'rela_id'
});

//Reference between parking and park_user
Park_User.hasMany(Parking, {
    foreignKey: 'rela_id',
    sourceKey: 'rela_id'
});
Parking.belongsTo(Park_User, {
    foreignKey: 'rela_id',
    targetKey: 'rela_id'
});

//Reference between pending and park_user
Park_User.hasMany(Pending, {
    foreignKey: 'rela_id',
    sourceKey: 'rela_id'
});
Pending.belongsTo(Park_User, {
    foreignKey: 'rela_id',
    targetKey: 'rela_id'
});

module.exports = {
    Account,
    Admin,
    Owner,
    User,
    Park,
    Park_User,
    Car,
    Chat,
    Parking,
    Pending,
    Rating,
    Comment, 
    Favorite
}
